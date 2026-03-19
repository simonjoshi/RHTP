import { Provider } from '../data/providers';

// Supabase configuration
const SUPABASE_PROJECT_ID = 'xjydbpqylxzechhalfug';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqeWRicHF5bHh6ZWNoaGFsZnVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2OTIwNDMsImV4cCI6MjA4OTI2ODA0M30.4d4RDyvEAwUURbtgLD4iFWtjtMaxZwOiH6at5Ttrv2M';

// Cache for Snowflake credentials
let snowflakeCredentials: { token: string; url: string } | null = null;

// Track if token is expired
let isTokenExpired = false;

// Function to check if token is expired
export function isSnowflakeTokenExpired(): boolean {
  return isTokenExpired;
}

// Function to reset token expiration flag
export function resetTokenExpirationFlag(): void {
  isTokenExpired = false;
  snowflakeCredentials = null; // Clear cache to force refetch
}

// Fetch Snowflake credentials from backend
async function getSnowflakeCredentials(): Promise<{ token: string; url: string }> {
  if (snowflakeCredentials) {
    console.log('🔄 Using cached Snowflake credentials');
    return snowflakeCredentials;
  }

  console.log('📡 Fetching Snowflake credentials from backend...');
  const tokenUrl = `https://${SUPABASE_PROJECT_ID}.supabase.co/functions/v1/make-server-f6cfc78b/snowflake-token`;
  console.log('Token URL:', tokenUrl);
  
  const response = await fetch(tokenUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    },
    // Add cache-busting to force fresh token fetch
    cache: 'no-cache',
  });

  console.log('Token fetch response status:', response.status);
  
  if (!response.ok) {
    const errorText = await response.text();
    console.error('❌ Failed to fetch Snowflake credentials:', response.status, errorText);
    throw new Error(`Failed to fetch Snowflake credentials: ${response.status} - ${errorText}`);
  }

  snowflakeCredentials = await response.json();
  console.log('✅ Fetched fresh Snowflake token from backend');
  console.log('Token length:', snowflakeCredentials?.token?.length);
  console.log('URL:', snowflakeCredentials?.url);
  return snowflakeCredentials!;
}

interface SnowflakeProviderResponse {
  FACILITY_ID: string;
  FACILITY_NAME: string;
  PROVIDER_CATEGORY: string;
  FACILITY_TYPE: string;
  STATE: string;
  CITY: string;
  ZIP_CODE: string;
  ADDRESS: string;
  FACILITY_PHONE: string;
  WEBSITE: string;
  SPECIALTIES_STR: string;
  LICENSE_TYPES: string;
  CARE_CONDITIONS: string;
  TREATMENT_TYPES: string;
  ACCEPTS_MEDICAID: string;
  ACCEPTS_MEDICARE: string;
  ACCEPTS_PRIVATE_INSURANCE: string;
  APPT_PREFERENCE: string;
  DESCRIPTION: string;
}

interface SearchFilters {
  providerCategory?: 'MENTAL_HEALTH' | 'PHYSICAL_HEALTH' | 'SOCIAL_SERVICE';
  state?: string;
  acceptsMedicaid?: boolean;
  acceptsMedicare?: boolean;
  acceptsPrivateInsurance?: boolean;
}

interface SearchParams {
  query: string;
  filters?: SearchFilters;
  limit?: number;
}

// Map Snowflake provider category to our app's provider type
function mapProviderCategory(category: string): "Mental Health" | "Physical Health" | "Social Service" {
  switch (category) {
    case 'MENTAL_HEALTH':
      return 'Mental Health';
    case 'PHYSICAL_HEALTH':
      return 'Physical Health';
    case 'SOCIAL_SERVICE':
      return 'Social Service';
    default:
      return 'Mental Health';
  }
}

// Parse comma-separated strings into arrays
function parseCommaSeparated(str: string | null | undefined): string[] {
  if (!str) return [];
  return str.split(',').map(s => s.trim()).filter(Boolean);
}

// Map Snowflake response to Provider interface
function mapSnowflakeToProvider(snowflakeProvider: SnowflakeProviderResponse): Provider {
  const specialties = parseCommaSeparated(snowflakeProvider.SPECIALTIES_STR || snowflakeProvider.CARE_CONDITIONS);
  const treatmentTypes = parseCommaSeparated(snowflakeProvider.TREATMENT_TYPES);
  
  // Build insurance list
  const insurance: string[] = [];
  if (snowflakeProvider.ACCEPTS_MEDICAID === 'Y') insurance.push('Medicaid');
  if (snowflakeProvider.ACCEPTS_MEDICARE === 'Y') insurance.push('Medicare');
  if (snowflakeProvider.ACCEPTS_PRIVATE_INSURANCE === 'Y') insurance.push('Private Insurance');
  
  // Build location string
  const location = `${snowflakeProvider.CITY}, ${snowflakeProvider.STATE}`;
  
  return {
    id: snowflakeProvider.FACILITY_ID,
    name: snowflakeProvider.FACILITY_NAME,
    credentials: snowflakeProvider.LICENSE_TYPES || snowflakeProvider.FACILITY_TYPE || '',
    providerType: mapProviderCategory(snowflakeProvider.PROVIDER_CATEGORY),
    specialty: specialties,
    gender: 'Not Specified', // Not provided in API
    languages: ['English'], // Default, not provided in API
    acceptingNewPatients: true, // Default, not provided in API
    insurance,
    location,
    address: snowflakeProvider.ADDRESS,
    latitude: undefined, // Not provided in API
    longitude: undefined, // Not provided in API
    telehealth: snowflakeProvider.APPT_PREFERENCE?.toLowerCase().includes('telehealth') || false,
    nextAvailable: 'Call to schedule', // Not provided in API
    rating: 4.5, // Default rating
    bio: snowflakeProvider.DESCRIPTION || `Located at ${snowflakeProvider.ADDRESS}`,
    phone: snowflakeProvider.FACILITY_PHONE,
    email: undefined, // Not provided in API
    website: snowflakeProvider.WEBSITE,
    ageGroups: ['Adults'], // Default, not provided in API
    treatmentTypes: treatmentTypes.length > 0 ? treatmentTypes : undefined,
  };
}

export async function searchProviders(params: SearchParams): Promise<Provider[]> {
  console.log('🔍 searchProviders called with params:', params);
  
  try {
    // Build filter object
    const filterConditions: any[] = [];
    
    if (params.filters?.providerCategory) {
      filterConditions.push({
        "@eq": { "PROVIDER_CATEGORY": params.filters.providerCategory }
      });
    }
    
    if (params.filters?.state) {
      filterConditions.push({
        "@eq": { "STATE": params.filters.state }
      });
    }
    
    if (params.filters?.acceptsMedicaid) {
      filterConditions.push({
        "@eq": { "ACCEPTS_MEDICAID": "Y" }
      });
    }
    
    if (params.filters?.acceptsMedicare) {
      filterConditions.push({
        "@eq": { "ACCEPTS_MEDICARE": "Y" }
      });
    }
    
    if (params.filters?.acceptsPrivateInsurance) {
      filterConditions.push({
        "@eq": { "ACCEPTS_PRIVATE_INSURANCE": "Y" }
      });
    }

    const requestBody = {
      query: params.query,
      columns: [
        "FACILITY_ID",
        "FACILITY_NAME",
        "PROVIDER_CATEGORY",
        "FACILITY_TYPE",
        "STATE",
        "CITY",
        "ZIP_CODE",
        "ADDRESS",
        "FACILITY_PHONE",
        "WEBSITE",
        "SPECIALTIES_STR",
        "LICENSE_TYPES",
        "CARE_CONDITIONS",
        "TREATMENT_TYPES",
        "ACCEPTS_MEDICAID",
        "ACCEPTS_MEDICARE",
        "ACCEPTS_PRIVATE_INSURANCE",
        "APPT_PREFERENCE",
        "DESCRIPTION"
      ],
      ...(filterConditions.length > 0 && {
        filter: {
          "@and": filterConditions
        }
      }),
      limit: params.limit || 50
    };

    console.log('🔍 Calling Snowflake API directly from browser:', requestBody);

    // Get Snowflake credentials from backend
    const credentials = await getSnowflakeCredentials();
    
    // Call Snowflake directly from the browser
    const response = await fetch(credentials.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${credentials.token}`,
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorData = await response.json();
      
      // JWT token is invalid or expired
      if (response.status === 401 && errorData.code === '390144') {
        console.log('ℹ️ Snowflake token needs refresh, attempting to get fresh token...');
        
        // Clear the cached token to force a fresh fetch
        snowflakeCredentials = null;
        
        // Try one more time with a fresh token
        try {
          const freshCredentials = await getSnowflakeCredentials();
          const retryResponse = await fetch(freshCredentials.url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${freshCredentials.token}`,
            },
            body: JSON.stringify(requestBody)
          });
          
          if (retryResponse.ok) {
            const retryData = await retryResponse.json();
            console.log('✅ Successfully connected to Snowflake with refreshed token');
            
            // Process the successful retry
            const results = retryData.results || [];
            const providers = results.map(mapSnowflakeToProvider);
            const uniqueProviders = Array.from(
              new Map(providers.map(provider => [provider.id, provider])).values()
            );
            
            if (providers.length !== uniqueProviders.length) {
              console.log(`⚠️ Removed ${providers.length - uniqueProviders.length} duplicate provider records`);
            }
            
            // Reset the expiration flag since we got a valid response
            isTokenExpired = false;
            
            return uniqueProviders;
          } else {
            const retryError = await retryResponse.json();
            if (retryResponse.status === 401 && retryError.code === '390144') {
              console.log('ℹ️ Snowflake authentication token has expired');
              console.log('ℹ️ The app will continue to work with demonstration data');
              console.log('ℹ️ To restore live data connection, visit /token-diagnostics');
              isTokenExpired = true;
            }
          }
        } catch (retryError) {
          console.log('ℹ️ Unable to refresh Snowflake connection - using demonstration data');
        }
        
        // If retry failed, fall back to mock data
        isTokenExpired = true;
        return [];
      }
      
      // Network policy error - silently fall back to mock data
      if (response.status === 401 && errorData.code === '390432') {
        console.log('ℹ️ Snowflake network policy is active - application will use demonstration data');
        return [];
      }
      
      console.error('❌ Snowflake API Error:', response.status, errorData);
      throw new Error(`Snowflake API error: ${response.status} - ${errorData.message || 'Unknown error'}`);
    }

    const data = await response.json();
    console.log('✅ Snowflake API Response:', data);
    console.log('Number of results:', data.results?.length || 0);

    // The response should have a "results" array
    const results = data.results || [];
    
    if (results.length === 0) {
      console.log('⚠️ Snowflake returned 0 results for query:', params.query);
    }
    
    // Map results to providers
    const providers = results.map(mapSnowflakeToProvider);
    console.log('Mapped providers count:', providers.length);
    
    // Deduplicate providers based on ID (in case Snowflake returns duplicate records)
    const uniqueProviders = Array.from(
      new Map(providers.map(provider => [provider.id, provider])).values()
    );
    
    if (providers.length !== uniqueProviders.length) {
      console.log(`⚠️ Removed ${providers.length - uniqueProviders.length} duplicate provider records`);
    }
    
    console.log('🎉 Returning', uniqueProviders.length, 'unique providers from Snowflake');
    return uniqueProviders;
  } catch (error: any) {
    console.error('❌ searchProviders error:', error);
    console.error('Error message:', error?.message);
    console.error('Error stack:', error?.stack);
    
    // Check if this is a network policy error
    if (error?.message?.includes('Network policy')) {
      console.log('ℹ️ Snowflake network policy restriction detected - using demonstration data');
    } else {
      console.log('ℹ️ Unable to connect to Snowflake - using demonstration data');
      console.log('ℹ️ Falling back to mock data');
    }
    // Silently return empty array to trigger mock data fallback
    return [];
  }
}

// Helper to extract state from location string (e.g., "Little Rock, AR" -> "AR")
export function extractState(location: string): string | undefined {
  const parts = location.split(',');
  if (parts.length >= 2) {
    const state = parts[parts.length - 1].trim();
    // Return 2-letter state code
    if (state.length === 2) {
      return state.toUpperCase();
    }
  }
  return undefined;
}

// Helper to map provider type to Snowflake category
export function mapProviderTypeToCategory(providerType: string): 'MENTAL_HEALTH' | 'PHYSICAL_HEALTH' | 'SOCIAL_SERVICE' | undefined {
  switch (providerType) {
    case 'Mental Health':
      return 'MENTAL_HEALTH';
    case 'Physical Health':
      return 'PHYSICAL_HEALTH';
    case 'Social Service':
      return 'SOCIAL_SERVICE';
    default:
      return undefined;
  }
}