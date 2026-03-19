# 🔧 Quick Fix: Snowflake Token Expired

## The Problem
You're seeing this error because the Snowflake JWT bearer token has expired (Error code 390144).

## ⚡ Quick Fix (5 minutes)

### Step 1: Generate New Token in Snowflake
1. Open: https://cjcbbhh-bxa95181.snowflakecomputing.com
2. Log in with your credentials
3. Open a SQL Worksheet
4. Run this command:
   ```sql
   SELECT SYSTEM$GENERATE_JWT_TOKEN('CORTEX_SEARCH_SERVICE_USER', 86400);
   ```
5. Copy the entire token from the result (it's a long string starting with `eyJ...`)

### Step 2: Test the Token (Recommended)
1. Navigate to: `/token-diagnostics` in your Care Match app
2. Paste the token in the "Test a New Token" section
3. Click "Test Token"
4. If it shows ✅ green success, proceed to Step 3
5. If it shows ❌ red error, the token generation failed - try again or check permissions

### Step 3: Update Token in Supabase
1. Open: https://supabase.com/dashboard/project/xjydbpqylxzechhalfug/settings/functions
2. Find the `SNOWFLAKE_BEARER_TOKEN` environment variable
3. Click "Edit" or "Reveal" to update it
4. Paste your new token
5. Click "Save"

### Step 4: Wait and Verify
1. **Wait 10-30 seconds** for the Edge Function to restart with the new token
2. Go back to `/token-diagnostics`
3. Click "Run Diagnostic Test" 
4. You should see ✅ Token is Valid!
5. Refresh your Care Match app - it should now work with live data!

## 🔍 Diagnostic Tools

### Token Diagnostics Page
Navigate to `/token-diagnostics` in your app for:
- **Test Current Token**: Checks if the token in Supabase is valid
- **Test a New Token**: Verify a token works BEFORE updating Supabase
- **Step-by-step Instructions**: Copy-paste ready commands

### Browser Console
Open your browser's developer tools (F12) and check the console for:
- ✅ Green success messages when the token works
- ❌ Red error messages with specific error codes
- 💡 Helper messages guiding you to the fix

## 📝 Token Expiration Periods

When generating tokens, you can specify different expiration times:

```sql
-- 1 hour (3600 seconds)
SELECT SYSTEM$GENERATE_JWT_TOKEN('CORTEX_SEARCH_SERVICE_USER', 3600);

-- 24 hours (86400 seconds) - Recommended
SELECT SYSTEM$GENERATE_JWT_TOKEN('CORTEX_SEARCH_SERVICE_USER', 86400);

-- 7 days (604800 seconds)
SELECT SYSTEM$GENERATE_JWT_TOKEN('CORTEX_SEARCH_SERVICE_USER', 604800);

-- 30 days (2592000 seconds)
SELECT SYSTEM$GENERATE_JWT_TOKEN('CORTEX_SEARCH_SERVICE_USER', 2592000);
```

⚠️ **Note**: Longer expiration times are more convenient but may have security implications. Check with your security team for guidance.

## 🆘 Troubleshooting

### Token Test Fails After Generation
**Error Code 390144** - Invalid Token
- Make sure you copied the ENTIRE token (they're very long!)
- Check for extra spaces or line breaks
- Verify you're using the correct Snowflake user account

**Error Code 390432** - Network Policy  
- Your IP or Supabase's IPs are not in the Snowflake network policy allowlist
- See SNOWFLAKE_TOKEN_SETUP.md for network policy configuration

### Token Update Doesn't Take Effect
- **Wait longer**: Edge Functions can take 30-60 seconds to restart
- **Hard refresh**: Press Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- **Clear cache**: In browser dev tools, right-click refresh and select "Empty Cache and Hard Reload"
- **Verify in Supabase**: Double-check the environment variable was actually saved

### Permission Denied When Generating Token
You need specific Snowflake privileges. Ask your admin to run:
```sql
GRANT USAGE ON INTEGRATION CORTEX_SEARCH_INTEGRATION TO USER YOUR_USERNAME;
```

## 🎯 Current App Behavior

The app is designed to **gracefully degrade** when the token is expired:

1. ✅ **App continues working** with demonstration/mock data
2. ⚠️ **Console shows warnings** about the expired token  
3. 🔄 **Automatically retries** with a fresh token when you update it
4. 📊 **Shows live data** as soon as a valid token is detected

So your users won't see crashes or confusing errors - they'll just see demo data until you fix the token.

## 📚 Additional Resources

- **Full Setup Guide**: See `/SNOWFLAKE_TOKEN_SETUP.md` for detailed documentation
- **Snowflake Docs**: https://docs.snowflake.com/en/sql-reference/functions/system_generate_jwt_token
- **Supabase Dashboard**: https://supabase.com/dashboard/project/xjydbpqylxzechhalfug

## ✅ Verification Checklist

- [ ] Generated fresh token in Snowflake
- [ ] Tested token in `/token-diagnostics` (shows green ✅)
- [ ] Updated `SNOWFLAKE_BEARER_TOKEN` in Supabase
- [ ] Waited 30 seconds for Edge Function restart
- [ ] Ran diagnostic test - shows token is valid
- [ ] Hard refreshed Care Match app (Ctrl+Shift+R)
- [ ] Provider search now returns live Snowflake data

If all items are checked and it still doesn't work, check the browser console for new error messages.
