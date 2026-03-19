import { useState, useEffect, useMemo } from 'react';
import { APIProvider, Map, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import { Provider } from '../data/providers';
import { MapPin, Phone, Star, Video } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface ProvidersMapProps {
  providers: Provider[];
  onProviderClick?: (provider: Provider) => void;
  className?: string;
}

// Default center (San Francisco)
const DEFAULT_CENTER = { lat: 37.7749, lng: -122.4194 };

// Geocoding cache to avoid repeated API calls
const geocodeCache: { [key: string]: { lat: number; lng: number } | null } = {};

// Approximate coordinates for common cities (fallback if geocoding fails)
const cityCoordinates: { [key: string]: { lat: number; lng: number } } = {
  'San Francisco, CA': { lat: 37.7749, lng: -122.4194 },
  'Los Angeles, CA': { lat: 34.0522, lng: -118.2437 },
  'New York, NY': { lat: 40.7128, lng: -74.0060 },
  'Chicago, IL': { lat: 41.8781, lng: -87.6298 },
  'Houston, TX': { lat: 29.7604, lng: -95.3698 },
  'Phoenix, AZ': { lat: 33.4484, lng: -112.0740 },
  'Philadelphia, PA': { lat: 39.9526, lng: -75.1652 },
  'San Antonio, TX': { lat: 29.4241, lng: -98.4936 },
  'San Diego, CA': { lat: 32.7157, lng: -117.1611 },
  'Dallas, TX': { lat: 32.7767, lng: -96.7970 },
  'Austin, TX': { lat: 30.2672, lng: -97.7431 },
  'Jacksonville, FL': { lat: 30.3322, lng: -81.6557 },
  'Fort Worth, TX': { lat: 32.7555, lng: -97.3308 },
  'Columbus, OH': { lat: 39.9612, lng: -82.9988 },
  'Charlotte, NC': { lat: 35.2271, lng: -80.8431 },
  'Seattle, WA': { lat: 47.6062, lng: -122.3321 },
  'Denver, CO': { lat: 39.7392, lng: -104.9903 },
  'Boston, MA': { lat: 42.3601, lng: -71.0589 },
  'Portland, OR': { lat: 45.5152, lng: -122.6784 },
  'Miami, FL': { lat: 25.7617, lng: -80.1918 },
  'Atlanta, GA': { lat: 33.7490, lng: -84.3880 },
  'Sacramento, CA': { lat: 38.5816, lng: -121.4944 },
  'Detroit, MI': { lat: 42.3314, lng: -83.0458 },
  'Minneapolis, MN': { lat: 44.9778, lng: -93.2650 },
  'Tampa, FL': { lat: 27.9506, lng: -82.4572 },
  'Jersey City, NJ': { lat: 40.7178, lng: -74.0431 },
  'Oakland, CA': { lat: 37.8044, lng: -122.2712 },
  'Las Vegas, NV': { lat: 36.1699, lng: -115.1398 },
  'Orlando, FL': { lat: 28.5383, lng: -81.3792 },
  'Baltimore, MD': { lat: 39.2904, lng: -76.6122 },
  'San Jose, CA': { lat: 37.3382, lng: -121.8863 },
  'Cleveland, OH': { lat: 41.4993, lng: -81.6944 },
  'Irvine, CA': { lat: 33.6846, lng: -117.8265 },
  'Raleigh, NC': { lat: 35.7796, lng: -78.6382 },
  'Indianapolis, IN': { lat: 39.7684, lng: -86.1581 },
  'Nashville, TN': { lat: 36.1627, lng: -86.7816 },
  'Honolulu, HI': { lat: 21.3099, lng: -157.8581 },
  'Albuquerque, NM': { lat: 35.0844, lng: -106.6504 },
  'Madison, WI': { lat: 43.0731, lng: -89.4012 },
  'Boulder, CO': { lat: 40.0150, lng: -105.2705 },
  'El Paso, TX': { lat: 31.7619, lng: -106.4850 },
  'Tacoma, WA': { lat: 47.2529, lng: -122.4443 },
  'Tucson, AZ': { lat: 32.2226, lng: -110.9747 },
  'Vancouver, WA': { lat: 45.6387, lng: -122.6615 },
  'Richmond, VA': { lat: 37.5407, lng: -77.4360 },
  'Cincinnati, OH': { lat: 39.1031, lng: -84.5120 },
  'Kansas City, MO': { lat: 39.0997, lng: -94.5786 },
  'Milwaukee, WI': { lat: 43.0389, lng: -87.9065 },
  'Asheville, NC': { lat: 35.5951, lng: -82.5515 },
  // Nevada cities
  'Reno, NV': { lat: 39.5296, lng: -119.8138 },
  'Henderson, NV': { lat: 36.0397, lng: -114.9819 },
  'North Las Vegas, NV': { lat: 36.1989, lng: -115.1175 },
  'Sparks, NV': { lat: 39.5349, lng: -119.7527 },
  'Carson City, NV': { lat: 39.1638, lng: -119.7674 },
};

export function ProvidersMap({ providers, onProviderClick, className = '' }: ProvidersMapProps) {
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
  const [mapCenter, setMapCenter] = useState(DEFAULT_CENTER);
  const [zoom, setZoom] = useState(10);

  // Get coordinates for a provider
  const getProviderCoordinates = (provider: Provider): { lat: number; lng: number } | null => {
    // If provider already has coordinates, use them
    if (provider.latitude && provider.longitude) {
      console.log('✅ Using provider lat/lng:', provider.latitude, provider.longitude);
      return { lat: provider.latitude, lng: provider.longitude };
    }

    const location = provider.location?.trim() || '';
    
    // Check cache
    if (geocodeCache[location] !== undefined) {
      console.log('📋 Using cached coordinates for:', location);
      return geocodeCache[location];
    }

    console.log('🔍 Analyzing location string:', location);

    // Try exact match in predefined city coordinates
    const coords = cityCoordinates[location];
    if (coords) {
      console.log('✅ Found exact match for', location, coords);
      geocodeCache[location] = coords;
      return coords;
    }

    // Extract city and state from common patterns
    // Pattern 1: "City, ST" or "City, State"
    const cityStateMatch = location.match(/([A-Za-z\s]+),\s*([A-Z]{2})/);
    if (cityStateMatch) {
      const cityState = `${cityStateMatch[1].trim()}, ${cityStateMatch[2]}`;
      console.log('🔍 Extracted city/state pattern:', cityState);
      if (cityCoordinates[cityState]) {
        console.log('✅ Found match for extracted city/state:', cityState);
        geocodeCache[location] = cityCoordinates[cityState];
        return cityCoordinates[cityState];
      }
    }

    // Pattern 2: Check if location contains "NV" or "Nevada" - default to Las Vegas
    if (location.toUpperCase().includes(' NV') || 
        location.toUpperCase().includes('NEVADA') ||
        location.toUpperCase().includes(',NV')) {
      console.log('✅ Nevada location detected, using Las Vegas coordinates');
      geocodeCache[location] = cityCoordinates['Las Vegas, NV'];
      return cityCoordinates['Las Vegas, NV'];
    }

    // Pattern 3: If it's just a street address (contains numbers and street keywords)
    // and no state is specified, check if we can infer from known cities
    const streetPattern = /^\d+\s+[A-Z\s]+(?:ST|RD|AVE|BLVD|DR|CT|LN|WAY|PL)/i;
    if (streetPattern.test(location)) {
      console.log('🔍 Detected street address without city/state');
      
      // Check for known Nevada street names
      const upperLocation = location.toUpperCase();
      if (upperLocation.includes('FLAMINGO') || 
          upperLocation.includes('STRIP') || 
          upperLocation.includes('VEGAS') ||
          upperLocation.includes('SAHARA') ||
          upperLocation.includes('CHARLESTON')) {
        console.log('✅ Recognized Las Vegas street, using Las Vegas coordinates');
        geocodeCache[location] = cityCoordinates['Las Vegas, NV'];
        return cityCoordinates['Las Vegas, NV'];
      }
      
      // Default for unidentified street addresses - use Las Vegas (most common in NV)
      console.log('⚠️ Unidentified street address, defaulting to Las Vegas');
      geocodeCache[location] = cityCoordinates['Las Vegas, NV'];
      return cityCoordinates['Las Vegas, NV'];
    }

    // Pattern 4: Partial match - if location contains a city name we know about
    for (const [city, coords] of Object.entries(cityCoordinates)) {
      const cityName = city.split(',')[0].toLowerCase();
      if (location.toLowerCase().includes(cityName)) {
        console.log('✅ Found partial match for', location, 'using', city, coords);
        geocodeCache[location] = coords;
        return coords;
      }
    }

    // Mark as not found
    console.warn('❌ No coordinates found for location:', location, 'provider:', provider.name);
    geocodeCache[location] = null;
    return null;
  };

  // Prepare markers for providers with valid coordinates
  const markers = useMemo(() => {
    console.log('🗺️ ========== PROVIDER MAP DEBUG ==========');
    console.log('🗺️ Total providers received:', providers.length);
    console.log('🗺️ Provider list:', providers.map(p => ({ id: p.id, name: p.name, location: p.location })));
    
    const markersWithCoords = providers
      .map((provider, index) => {
        console.log(`\n🔍 Processing provider ${index + 1}/${providers.length}:`);
        console.log('   - ID:', provider.id);
        console.log('   - Name:', provider.name);
        console.log('   - Location string:', provider.location);
        console.log('   - Has lat/lng?:', provider.latitude, provider.longitude);
        
        const position = getProviderCoordinates(provider);
        
        console.log('   - Coordinates found?:', position ? 'YES ✅' : 'NO ❌');
        if (position) {
          console.log('   - Position:', position);
        }
        
        return {
          provider,
          position,
        };
      })
      .filter(item => {
        const hasCoords = item.position !== null;
        if (!hasCoords) {
          console.warn('⚠️ FILTERED OUT:', item.provider.name, 'at', item.provider.location);
        }
        return hasCoords;
      }) as Array<{
        provider: Provider;
        position: { lat: number; lng: number };
      }>;
    
    console.log('\n🗺️ ========== SUMMARY ==========');
    console.log('🗺️ Providers with coordinates:', markersWithCoords.length);
    console.log('🗺️ Providers WITHOUT coordinates:', providers.length - markersWithCoords.length);
    console.log('🗺️ Markers to display:', markersWithCoords.map(m => ({ name: m.provider.name, location: m.provider.location, coords: m.position })));
    console.log('🗺️ ================================\n');
    
    return markersWithCoords;
  }, [providers]);

  // Calculate map center and zoom based on markers
  useEffect(() => {
    console.log('🗺️ ProvidersMap: Updating map with', markers.length, 'markers');
    console.log('🗺️ Provider locations:', markers.map(m => ({ name: m.provider.name, location: m.provider.location, position: m.position })));
    
    if (markers.length === 0) {
      console.log('🗺️ No markers, using default center');
      setMapCenter(DEFAULT_CENTER);
      setZoom(10);
      return;
    }

    if (markers.length === 1) {
      console.log('🗺️ Single marker at:', markers[0].position, 'for provider:', markers[0].provider.name, 'location:', markers[0].provider.location);
      setMapCenter(markers[0].position);
      setZoom(12);
      return;
    }

    // Calculate bounds
    const lats = markers.map(m => m.position.lat);
    const lngs = markers.map(m => m.position.lng);
    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);
    const minLng = Math.min(...lngs);
    const maxLng = Math.max(...lngs);

    const centerLat = (minLat + maxLat) / 2;
    const centerLng = (minLng + maxLng) / 2;

    const newCenter = { lat: centerLat, lng: centerLng };
    console.log('🗺️ Multiple markers, calculated center:', newCenter);
    console.log('🗺️ Bounds:', { minLat, maxLat, minLng, maxLng });
    setMapCenter(newCenter);

    // Calculate appropriate zoom level
    const latDiff = maxLat - minLat;
    const lngDiff = maxLng - minLng;
    const maxDiff = Math.max(latDiff, lngDiff);

    // Rough zoom calculation
    let newZoom = 10;
    if (maxDiff < 0.01) newZoom = 15;
    else if (maxDiff < 0.05) newZoom = 13;
    else if (maxDiff < 0.1) newZoom = 12;
    else if (maxDiff < 0.5) newZoom = 10;
    else if (maxDiff < 1) newZoom = 9;
    else if (maxDiff < 5) newZoom = 7;
    else if (maxDiff < 10) newZoom = 6;
    else newZoom = 5;

    console.log('🗺️ Map zoom level:', newZoom, 'based on maxDiff:', maxDiff);
    setZoom(newZoom);
  }, [markers]);

  const handleMarkerClick = (provider: Provider) => {
    setSelectedProvider(provider);
  };

  const handleInfoWindowClose = () => {
    setSelectedProvider(null);
  };

  const handleProviderDetailsClick = (provider: Provider) => {
    if (onProviderClick) {
      onProviderClick(provider);
    }
    setSelectedProvider(null);
  };

  // Google Maps API Key - replace with actual key
  const GOOGLE_MAPS_API_KEY = 'AIzaSyCmQ7A1CmOQjP7eBBPpAeaOkIdtq0ht_Qc';
  
  // Track if there's a Maps API error
  const [hasMapError, setHasMapError] = useState(false);
  
  useEffect(() => {
    // Listen for Google Maps API errors
    const handleError = (event: ErrorEvent) => {
      if (event.message?.includes('RefererNotAllowedMapError') || 
          event.message?.includes('Google Maps')) {
        setHasMapError(true);
        // Prevent the error from showing in console
        event.preventDefault();
      }
    };
    
    // Also suppress console errors from Google Maps
    const originalConsoleError = console.error;
    console.error = (...args: any[]) => {
      const message = args.join(' ');
      if (message.includes('RefererNotAllowedMapError') || 
          message.includes('Google Maps JavaScript API error')) {
        setHasMapError(true);
        return;
      }
      originalConsoleError.apply(console, args);
    };
    
    window.addEventListener('error', handleError);
    return () => {
      window.removeEventListener('error', handleError);
      console.error = originalConsoleError;
    };
  }, []);

  if (!GOOGLE_MAPS_API_KEY || GOOGLE_MAPS_API_KEY === 'YOUR_GOOGLE_MAPS_API_KEY' || hasMapError) {
    const errorMessage = hasMapError 
      ? 'The Google Maps API key needs to be configured with the current domain.'
      : 'To enable the map view, please add your Google Maps API key.';
    
    return (
      <div className={`bg-gray-100 rounded-lg p-8 text-center ${className}`}>
        <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Map View Unavailable</h3>
        <p className="text-sm text-gray-600 mb-4">
          {errorMessage}
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left max-w-md mx-auto">
          <p className="text-xs font-mono text-gray-700 mb-2">
            <strong>How to configure the API key:</strong>
          </p>
          <ol className="text-xs text-gray-600 space-y-1 ml-4 list-decimal">
            <li>Go to <a href="https://console.cloud.google.com/google/maps-apis/credentials" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Cloud Console</a></li>
            <li>Select your API key</li>
            <li>Under "Application restrictions", choose "HTTP referrers"</li>
            <li>Add this URL: <code className="bg-white px-1 py-0.5 rounded text-xs">{window.location.origin}/*</code></li>
            <li>Save and wait a few minutes for changes to take effect</li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
        <Map
          key={`${mapCenter.lat}-${mapCenter.lng}-${zoom}`}
          mapId="providers-map"
          defaultCenter={mapCenter}
          defaultZoom={zoom}
          gestureHandling="greedy"
          zoomControl={true}
          fullscreenControl={true}
          streetViewControl={true}
          mapTypeControl={true}
          className="w-full h-full rounded-lg"
        >
          {markers.map(({ provider, position }) => {
            const markerColor = 
              provider.providerType === 'Mental Health' ? '#9333ea' :
              provider.providerType === 'Physical Health' ? '#3b82f6' :
              '#10b981';

            const isSelected = selectedProvider?.id === provider.id;

            return (
              <AdvancedMarker
                key={provider.id}
                position={position}
                onClick={() => handleMarkerClick(provider)}
              >
                <div 
                  style={{
                    width: isSelected ? '39px' : '30px',
                    height: isSelected ? '39px' : '30px',
                    backgroundColor: markerColor,
                    border: '3px solid white',
                    borderRadius: '50% 50% 50% 0',
                    transform: 'rotate(-45deg)',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transform: 'rotate(45deg)',
                      color: 'white',
                      fontSize: isSelected ? '16px' : '14px',
                      fontWeight: 'bold',
                    }}
                  >
                    {provider.providerType === 'Mental Health' ? '🧠' : 
                     provider.providerType === 'Physical Health' ? '⚕️' : '🤝'}
                  </div>
                </div>
              </AdvancedMarker>
            );
          })}

          {selectedProvider && getProviderCoordinates(selectedProvider) && (
            <InfoWindow
              position={getProviderCoordinates(selectedProvider)!}
              onCloseClick={handleInfoWindowClose}
              maxWidth={300}
            >
              <div className="p-2">
                <h3 className="font-semibold text-gray-900 mb-1">{selectedProvider.name}</h3>
                <p className="text-xs text-gray-600 mb-2">{selectedProvider.credentials}</p>
                
                <div className="flex flex-wrap gap-1 mb-2">
                  <Badge 
                    variant="outline" 
                    className={
                      selectedProvider.providerType === "Mental Health" 
                        ? "border-purple-300 text-purple-700 bg-purple-50 text-xs" 
                        : selectedProvider.providerType === "Physical Health"
                        ? "border-blue-300 text-blue-700 bg-blue-50 text-xs"
                        : "border-green-300 text-green-700 bg-green-50 text-xs"
                    }
                  >
                    {selectedProvider.providerType}
                  </Badge>
                </div>

                <div className="space-y-1 text-xs text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 flex-shrink-0" />
                    <span>{selectedProvider.location}</span>
                  </div>
                  {selectedProvider.phone && (
                    <div className="flex items-center gap-1">
                      <Phone className="h-3 w-3 flex-shrink-0" />
                      <a href={`tel:${selectedProvider.phone}`} className="hover:text-purple-600">
                        {selectedProvider.phone}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 flex-shrink-0 fill-yellow-400 text-yellow-400" />
                    <span>{selectedProvider.rating} rating</span>
                  </div>
                  {selectedProvider.telehealth && (
                    <div className="flex items-center gap-1 text-green-600">
                      <Video className="h-3 w-3 flex-shrink-0" />
                      <span>Telehealth available</span>
                    </div>
                  )}
                </div>

                <Button
                  size="sm"
                  onClick={() => handleProviderDetailsClick(selectedProvider)}
                  className="w-full text-xs py-1 h-auto"
                >
                  View Details
                </Button>
              </div>
            </InfoWindow>
          )}
        </Map>
      </APIProvider>
    </div>
  );
}