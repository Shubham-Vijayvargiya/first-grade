/* ============================================================
   CHAMPION ACADEMY — Supabase Client Initialization
   ============================================================ */

window.SupabaseService = (function () {
  var client = null;
  var isConfigured = false;

  function init() {
    var url = window.CONFIG && window.CONFIG.supabaseUrl;
    var key = window.CONFIG && window.CONFIG.supabaseKey;

    // Check if the credentials are valid and not the default placeholders
    var isValidUrl = url && url.indexOf('supabase.co') !== -1 && url.indexOf('your-supabase-project') === -1;
    var isValidKey = key && key !== 'your-supabase-anon-key' && key.length > 20;

    if (isValidUrl && isValidKey && window.supabase) {
      try {
        client = window.supabase.createClient(url, key);
        isConfigured = true;
        console.log('Supabase: Successfully initialized.');
      } catch (e) {
        console.error('Supabase: Failed to initialize client', e);
      }
    } else {
      console.warn('Supabase: Credentials not configured or SDK not loaded. Remote sync is disabled.');
    }
  }

  // Run initialization
  init();

  return {
    getClient: function () {
      return client;
    },
    isReady: function () {
      return isConfigured && client !== null;
    }
  };
})();
