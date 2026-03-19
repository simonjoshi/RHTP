import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-f6cfc78b/health", (c) => {
  return c.json({ status: "ok" });
});

// Endpoint to retrieve Snowflake bearer token
// This allows frontend to call Snowflake directly, bypassing network policy restrictions
app.get("/make-server-f6cfc78b/snowflake-token", (c) => {
  const bearerToken = Deno.env.get("SNOWFLAKE_BEARER_TOKEN");
  
  if (!bearerToken) {
    console.error("❌ SNOWFLAKE_BEARER_TOKEN environment variable not set");
    return c.json({ error: "Server configuration error: Missing Snowflake credentials" }, 500);
  }
  
  return c.json({ 
    token: bearerToken,
    url: "https://cjcbbhh-bxa95181.snowflakecomputing.com/api/v2/databases/CS_NON_PROD/schemas/RHTP_POC/cortex-search-services/PROVIDER_SEARCH_SERVICE_V2:query"
  });
});

// Snowflake Cortex Search API proxy endpoint
//
// NETWORK POLICY CONFIGURATION:
// If you receive a "Network policy is required" error, you need to allowlist
// Supabase Edge Function IP addresses in your Snowflake network policy.
//
// Steps to resolve:
// 1. Find your Supabase project region and IP ranges:
//    - Go to: Supabase Dashboard > Project Settings > General
//    - Note your project region (e.g., us-east-1, eu-west-1)
//    - Check Supabase docs for IP ranges: https://supabase.com/docs/guides/platform/going-into-prod#ip-addresses
//
// 2. In Snowflake, update your network policy:
//    ```sql
//    ALTER NETWORK POLICY your_policy_name
//    SET ALLOWED_IP_LIST = ('existing_ips', 'supabase_ip_range');
//    ```
//
// 3. Or create a new network policy for the service account:
//    ```sql
//    CREATE NETWORK POLICY cortex_search_policy
//    ALLOWED_IP_LIST = ('supabase_ip_range');
//    
//    ALTER USER your_service_account
//    SET NETWORK_POLICY = cortex_search_policy;
//    ```
//
app.post("/make-server-f6cfc78b/search-providers", async (c) => {
  try {
    const requestBody = await c.req.json();
    
    console.log("🔍 Proxying Snowflake search request:", requestBody);
    
    const snowflakeUrl = "https://cjcbbhh-bxa95181.snowflakecomputing.com/api/v2/databases/CS_NON_PROD/schemas/RHTP_POC/cortex-search-services/PROVIDER_SEARCH_SERVICE_V2:query";
    const bearerToken = Deno.env.get("SNOWFLAKE_BEARER_TOKEN");
    
    if (!bearerToken) {
      console.error("❌ SNOWFLAKE_BEARER_TOKEN environment variable not set");
      return c.json({ error: "Server configuration error: Missing Snowflake credentials" }, 500);
    }
    
    console.log("📡 Calling Snowflake API from Edge Function...");
    
    const response = await fetch(snowflakeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${bearerToken}`,
      },
      body: JSON.stringify(requestBody),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Snowflake API Error:", response.status, errorText);
      
      // Check for network policy error
      if (response.status === 401 && errorText.includes("Network policy")) {
        console.error("🚨 NETWORK POLICY ERROR: Supabase Edge Function IP not allowed");
        console.error("💡 Solution: Add Supabase Edge Function IPs to Snowflake network policy allowlist");
        console.error("📍 Edge Function Region: Check Supabase project settings for IP ranges");
        
        return c.json({ 
          error: "Snowflake Network Policy Restriction",
          message: "The Supabase Edge Function's IP address is not authorized to access Snowflake.",
          details: errorText,
          solution: "Contact your Snowflake administrator to add Supabase Edge Function IP addresses to the network policy allowlist.",
          snowflakeError: JSON.parse(errorText)
        }, 401);
      }
      
      return c.json({ 
        error: `Snowflake API error: ${response.status}`,
        details: errorText 
      }, response.status);
    }
    
    const data = await response.json();
    console.log("✅ Snowflake API Response:", data);
    
    return c.json(data);
  } catch (error) {
    console.error("❌ Error proxying Snowflake request:", error);
    return c.json({ 
      error: "Internal server error while processing Snowflake request",
      details: error.message 
    }, 500);
  }
});

// Geocoding API proxy endpoint to avoid CORS issues
app.get("/make-server-f6cfc78b/geocode", async (c) => {
  try {
    const query = c.req.query("q");
    
    if (!query || query.trim().length < 2) {
      return c.json({ suggestions: [] });
    }
    
    console.log("🌍 Geocoding request for:", query);
    
    // Try US Census Geocoder API first (best for US addresses)
    try {
      const censusUrl = `https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=${encodeURIComponent(query)}&benchmark=2020&format=json`;
      console.log("📡 Calling Census API:", censusUrl);
      
      const censusResponse = await fetch(censusUrl);
      
      if (censusResponse.ok) {
        const censusData = await censusResponse.json();
        
        if (censusData.result?.addressMatches && censusData.result.addressMatches.length > 0) {
          const suggestions = censusData.result.addressMatches.slice(0, 5).map((match: any) => ({
            display: match.matchedAddress,
            city: match.addressComponents.city,
            state: match.addressComponents.state,
            zip: match.addressComponents.zip
          }));
          
          console.log("✅ Census API returned", suggestions.length, "suggestions");
          return c.json({ suggestions });
        }
      }
    } catch (censusError) {
      console.log("ℹ️ Census API failed, trying Nominatim:", censusError.message);
    }
    
    // Fallback to Nominatim (OpenStreetMap) for broader coverage
    try {
      const nominatimUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=us&limit=5&addressdetails=1`;
      console.log("📡 Calling Nominatim API:", nominatimUrl);
      
      const nominatimResponse = await fetch(nominatimUrl, {
        headers: {
          'User-Agent': 'CareMatch/1.0'
        }
      });
      
      if (nominatimResponse.ok) {
        const nominatimData = await nominatimResponse.json();
        
        if (nominatimData && nominatimData.length > 0) {
          const suggestions = nominatimData.map((place: any) => {
            const city = place.address?.city || place.address?.town || place.address?.village;
            const state = place.address?.state;
            const zip = place.address?.postcode;
            
            let display = '';
            if (zip) {
              display = zip;
            } else if (city && state) {
              display = `${city}, ${state}`;
            } else if (place.display_name) {
              // Shorten the display name to just city and state
              const parts = place.display_name.split(',');
              display = parts.slice(0, 2).join(',').trim();
            }

            return {
              display,
              city: city || '',
              state: state || '',
              zip: zip || ''
            };
          }).filter((s: any) => s.display); // Remove empty suggestions
          
          console.log("✅ Nominatim API returned", suggestions.length, "suggestions");
          return c.json({ suggestions });
        }
      }
    } catch (nominatimError) {
      console.log("ℹ️ Nominatim API failed:", nominatimError.message);
    }
    
    // If both APIs fail, return empty suggestions
    console.log("⚠️ No geocoding results found");
    return c.json({ suggestions: [] });
    
  } catch (error) {
    console.error("❌ Error in geocoding endpoint:", error);
    return c.json({ 
      error: "Geocoding error",
      details: error.message,
      suggestions: []
    }, 500);
  }
});

Deno.serve(app.fetch);