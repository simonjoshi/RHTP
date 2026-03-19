# Snowflake JWT Token Setup Guide

## Issue: JWT Token Invalid (Error 390144)

If you're seeing the error `"JWT token is invalid. [error-id]"`, this means the Snowflake JWT bearer token has expired and needs to be regenerated.

## How to Generate a New Snowflake JWT Token

### Option 1: Using Snowflake Web UI

1. **Log into Snowflake**
   - Go to your Snowflake account: `https://cjcbbhh-bxa95181.snowflakecomputing.com`
   - Sign in with your credentials

2. **Navigate to Worksheets**
   - Click on "Worksheets" in the left sidebar
   - Create a new worksheet

3. **Generate Token**
   Run the following SQL command to generate a JWT token:
   ```sql
   -- Generate a JWT token that expires in 24 hours (86400 seconds)
   SELECT SYSTEM$GENERATE_JWT_TOKEN('CORTEX_SEARCH_SERVICE_USER', 86400);
   ```
   
   Or for a 7-day token:
   ```sql
   -- Generate a JWT token that expires in 7 days (604800 seconds)
   SELECT SYSTEM$GENERATE_JWT_TOKEN('CORTEX_SEARCH_SERVICE_USER', 604800);
   ```

4. **Copy the Token**
   - The query will return a JWT token string
   - Copy the entire token (it will be a long string starting with `eyJ...`)

### Option 2: Using Snowflake CLI (SnowSQL)

```bash
# Connect to Snowflake
snowsql -a cjcbbhh-bxa95181 -u YOUR_USERNAME

# Generate token (24 hours)
SELECT SYSTEM$GENERATE_JWT_TOKEN('CORTEX_SEARCH_SERVICE_USER', 86400);
```

## Update the Token in Supabase

1. **Go to Supabase Dashboard**
   - Navigate to: https://supabase.com/dashboard/project/xjydbpqylxzechhalfug

2. **Open Edge Functions Settings**
   - Click on "Edge Functions" in the left sidebar
   - Click on the "make-server-f6cfc78b" function
   - OR go to: Project Settings > Edge Functions

3. **Update Environment Variable**
   - Find the `SNOWFLAKE_BEARER_TOKEN` variable
   - Click "Edit" or "Update"
   - Paste the new JWT token (the entire string)
   - Save changes

4. **Redeploy Edge Function (if needed)**
   - The environment variable change should take effect immediately
   - If not, you may need to redeploy the edge function

## Verify the Token Works

After updating the token:

1. **Test in Browser**
   - Navigate to `/snowflake-test` in your Care Match application
   - Click "Run Connection Tests"
   - Check if all three tests pass

2. **Test Provider Search**
   - Go to the main search page
   - Try searching for providers
   - Check the browser console (F12) for any Snowflake API errors

## Token Expiration

- JWT tokens expire after the specified duration (e.g., 24 hours, 7 days)
- When the token expires, you'll see error code `390144`
- You'll need to regenerate and update the token periodically
- Consider setting a reminder to refresh the token before it expires

## Common Issues

### Error 390144: JWT Token Invalid
- **Cause**: Token has expired or is malformed
- **Solution**: Generate a new token using the steps above

### Error 390432: Network Policy
- **Cause**: Snowflake network policy blocking Supabase IPs
- **Solution**: See SNOWFLAKE_NETWORK_POLICY.md for network policy configuration

### Token Generation Fails
- **Cause**: User doesn't have permission to generate tokens
- **Solution**: Contact your Snowflake administrator to grant necessary privileges:
  ```sql
  GRANT USAGE ON INTEGRATION CORTEX_SEARCH_INTEGRATION TO USER YOUR_USERNAME;
  ```

## Automation (Optional)

For production environments, consider implementing automatic token refresh:

1. Use Snowflake OAuth for token refresh
2. Store refresh tokens securely
3. Implement a scheduled function to refresh tokens before expiration
4. Update Supabase environment variable programmatically

## Support

If you continue to have issues:
1. Check the browser console for detailed error messages
2. Verify the token was copied completely (no spaces or line breaks)
3. Ensure you have the correct Snowflake user permissions
4. Contact your Snowflake administrator for assistance
