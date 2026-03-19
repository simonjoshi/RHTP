import { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle, RefreshCw, Copy, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';

export default function TokenDiagnostics() {
  const navigate = useNavigate();
  const [testing, setTesting] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [tokenPreview, setTokenPreview] = useState<string>('');
  const [manualToken, setManualToken] = useState('');
  const [manualTestResult, setManualTestResult] = useState<any>(null);

  const SUPABASE_PROJECT_ID = 'xjydbpqylxzechhalfug';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqeWRicHF5bHh6ZWNoaGFsZnVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2OTIwNDMsImV4cCI6MjA4OTI2ODA0M30.4d4RDyvEAwUURbtgLD4iFWtjtMaxZwOiH6at5Ttrv2M';

  const testCurrentToken = async () => {
    setTesting(true);
    setResults(null);
    
    try {
      // Step 1: Fetch token from backend
      console.log('📡 Step 1: Fetching token from backend...');
      const tokenUrl = `https://${SUPABASE_PROJECT_ID}.supabase.co/functions/v1/make-server-f6cfc78b/snowflake-token`;
      const tokenResponse = await fetch(tokenUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        },
        cache: 'no-cache',
      });

      if (!tokenResponse.ok) {
        setResults({
          step: 'fetch_token',
          success: false,
          error: `Failed to fetch token: ${tokenResponse.status}`,
        });
        setTesting(false);
        return;
      }

      const { token, url } = await tokenResponse.json();
      
      // Show preview of token (first 20 and last 20 chars)
      const preview = token.length > 40 
        ? `${token.substring(0, 20)}...${token.substring(token.length - 20)}`
        : token;
      setTokenPreview(preview);
      
      console.log('✅ Step 1 complete: Token fetched');
      console.log('Token preview:', preview);

      // Step 2: Test token with Snowflake
      console.log('📡 Step 2: Testing token with Snowflake...');
      const testBody = {
        query: "mental health counseling",
        columns: ["FACILITY_ID", "FACILITY_NAME", "STATE"],
        limit: 1
      };

      const snowflakeResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(testBody)
      });

      const snowflakeData = await snowflakeResponse.json();

      if (!snowflakeResponse.ok) {
        console.error('❌ Step 2 failed:', snowflakeData);
        setResults({
          step: 'test_snowflake',
          success: false,
          tokenPreview: preview,
          statusCode: snowflakeResponse.status,
          error: snowflakeData,
        });
        setTesting(false);
        return;
      }

      console.log('✅ Step 2 complete: Snowflake responded successfully');
      setResults({
        step: 'complete',
        success: true,
        tokenPreview: preview,
        statusCode: snowflakeResponse.status,
        resultCount: snowflakeData.results?.length || 0,
      });

    } catch (error: any) {
      console.error('❌ Test failed:', error);
      setResults({
        step: 'error',
        success: false,
        error: error.message,
      });
    } finally {
      setTesting(false);
    }
  };

  const testManualToken = async () => {
    if (!manualToken.trim()) {
      alert('Please enter a token to test');
      return;
    }

    setManualTestResult({ testing: true });

    try {
      const url = "https://cjcbbhh-bxa95181.snowflakecomputing.com/api/v2/databases/CS_NON_PROD/schemas/RHTP_POC/cortex-search-services/PROVIDER_SEARCH_SERVICE_V2:query";
      const testBody = {
        query: "mental health counseling",
        columns: ["FACILITY_ID", "FACILITY_NAME", "STATE"],
        limit: 1
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${manualToken.trim()}`,
        },
        body: JSON.stringify(testBody)
      });

      const data = await response.json();

      if (!response.ok) {
        setManualTestResult({
          success: false,
          statusCode: response.status,
          error: data,
        });
        return;
      }

      setManualTestResult({
        success: true,
        statusCode: response.status,
        resultCount: data.results?.length || 0,
        message: 'Token is valid! You can now update it in Supabase.',
      });

    } catch (error: any) {
      setManualTestResult({
        success: false,
        error: error.message,
      });
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Token Diagnostics</h1>
          <p className="text-gray-600 mt-2">
            Debug and verify your Snowflake JWT token configuration
          </p>
        </div>

        {/* Test Current Token Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Test Current Token</h2>
          <p className="text-sm text-gray-600 mb-4">
            This will fetch the token from your Edge Function and test it against Snowflake.
          </p>
          
          <Button
            onClick={testCurrentToken}
            disabled={testing}
            className="mb-4"
          >
            {testing ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Testing...
              </>
            ) : (
              <>
                <RefreshCw className="h-4 w-4 mr-2" />
                Run Diagnostic Test
              </>
            )}
          </Button>

          {/* Results */}
          {results && (
            <div className={`p-4 rounded-lg border-2 ${results.success ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
              <div className="flex items-start gap-3">
                {results.success ? (
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <h3 className={`font-semibold mb-2 ${results.success ? 'text-green-900' : 'text-red-900'}`}>
                    {results.success ? '✅ Token is Valid!' : '❌ Token Test Failed'}
                  </h3>
                  
                  {tokenPreview && (
                    <div className="mb-3">
                      <p className="text-sm font-medium text-gray-700 mb-1">Token Preview:</p>
                      <code className="text-xs bg-white px-2 py-1 rounded border border-gray-300 block break-all">
                        {tokenPreview}
                      </code>
                    </div>
                  )}

                  {results.success ? (
                    <div className="space-y-1 text-sm">
                      <p className="text-green-800">
                        • Status: {results.statusCode} OK
                      </p>
                      <p className="text-green-800">
                        • Results returned: {results.resultCount}
                      </p>
                      <p className="text-green-800 font-medium mt-2">
                        Your token is working correctly! If you're still seeing errors in the app, try clearing your browser cache or doing a hard refresh (Ctrl+Shift+R or Cmd+Shift+R).
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2 text-sm">
                      <p className="text-red-800 font-medium">
                        Error at step: {results.step}
                      </p>
                      {results.statusCode && (
                        <p className="text-red-800">
                          Status Code: {results.statusCode}
                        </p>
                      )}
                      {results.error && (
                        <div className="bg-white p-3 rounded border border-red-200 mt-2">
                          <p className="font-mono text-xs text-red-900 break-all">
                            {typeof results.error === 'string' 
                              ? results.error 
                              : JSON.stringify(results.error, null, 2)}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Manual Token Test Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Test a New Token</h2>
          <p className="text-sm text-gray-600 mb-4">
            Before updating the token in Supabase, test it here first to make sure it works.
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Paste JWT Token
              </label>
              <textarea
                value={manualToken}
                onChange={(e) => setManualToken(e.target.value)}
                placeholder="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                rows={4}
              />
            </div>

            <Button
              onClick={testManualToken}
              disabled={!manualToken.trim() || manualTestResult?.testing}
              variant="outline"
            >
              {manualTestResult?.testing ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Testing...
                </>
              ) : (
                <>
                  Test Token
                </>
              )}
            </Button>

            {manualTestResult && !manualTestResult.testing && (
              <div className={`p-4 rounded-lg border-2 ${manualTestResult.success ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
                <div className="flex items-start gap-3">
                  {manualTestResult.success ? (
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-2 ${manualTestResult.success ? 'text-green-900' : 'text-red-900'}`}>
                      {manualTestResult.success ? '✅ Token Works!' : '❌ Token Invalid'}
                    </h3>
                    
                    {manualTestResult.success ? (
                      <div className="space-y-2 text-sm">
                        <p className="text-green-800">{manualTestResult.message}</p>
                        <p className="text-green-800">
                          Results returned: {manualTestResult.resultCount}
                        </p>
                        <div className="mt-4 pt-4 border-t border-green-200">
                          <p className="font-medium text-green-900 mb-2">Next step:</p>
                          <Button
                            size="sm"
                            onClick={() => window.open('https://supabase.com/dashboard/project/xjydbpqylxzechhalfug/settings/functions', '_blank')}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Update Token in Supabase
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2 text-sm">
                        {manualTestResult.statusCode && (
                          <p className="text-red-800">
                            Status: {manualTestResult.statusCode}
                          </p>
                        )}
                        <div className="bg-white p-3 rounded border border-red-200 mt-2">
                          <p className="font-mono text-xs text-red-900 break-all">
                            {typeof manualTestResult.error === 'string' 
                              ? manualTestResult.error 
                              : JSON.stringify(manualTestResult.error, null, 2)}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
          <h2 className="text-lg font-semibold text-blue-900 mb-3">
            How to Generate a New Token
          </h2>
          <ol className="space-y-3 text-sm text-blue-900">
            <li className="flex gap-2">
              <span className="font-semibold">1.</span>
              <span>
                Log into Snowflake at{' '}
                <button
                  onClick={() => copyToClipboard('https://cjcbbhh-bxa95181.snowflakecomputing.com')}
                  className="text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  https://cjcbbhh-bxa95181.snowflakecomputing.com
                  <Copy className="h-3 w-3" />
                </button>
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">2.</span>
              <span>Open a SQL Worksheet and run:</span>
            </li>
            <li className="ml-6">
              <div className="bg-white p-3 rounded border border-blue-300 font-mono text-xs relative">
                <button
                  onClick={() => copyToClipboard("SELECT SYSTEM$GENERATE_JWT_TOKEN('CORTEX_SEARCH_SERVICE_USER', 86400);")}
                  className="absolute top-2 right-2 text-blue-600 hover:text-blue-800"
                >
                  <Copy className="h-4 w-4" />
                </button>
                SELECT SYSTEM$GENERATE_JWT_TOKEN('CORTEX_SEARCH_SERVICE_USER', 86400);
              </div>
              <p className="text-xs text-blue-700 mt-1">
                (This generates a token valid for 24 hours)
              </p>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">3.</span>
              <span>Copy the entire JWT token from the query result</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">4.</span>
              <span>Paste it in the "Test a New Token" section above to verify it works</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">5.</span>
              <span>
                Once verified, update{' '}
                <button
                  onClick={() => window.open('https://supabase.com/dashboard/project/xjydbpqylxzechhalfug/settings/functions', '_blank')}
                  className="text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  SNOWFLAKE_BEARER_TOKEN in Supabase
                  <ExternalLink className="h-3 w-3" />
                </button>
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">6.</span>
              <span>Wait 10-30 seconds for the Edge Function to restart, then run the diagnostic test above</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}