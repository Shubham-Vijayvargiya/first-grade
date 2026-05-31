/* ============================================================
   CHAMPION ACADEMY — Authentication Service (Google OAuth)
   ============================================================ */

window.AuthService = (function () {
  var listeners = [];
  var currentUser = null;

  // Initialize and listen for authentication state changes
  function init() {
    if (!window.SupabaseService.isReady()) {
      return;
    }

    var client = window.SupabaseService.getClient();

    // Check initial session
    client.auth.getSession().then(function (result) {
      var session = result.data && result.data.session;
      updateUser(session ? session.user : null);
    });

    // Listen to changes (sign in, sign out, etc.)
    client.auth.onAuthStateChange(function (event, session) {
      console.log('Supabase Auth Event:', event);
      updateUser(session ? session.user : null);
    });
  }

  function updateUser(user) {
    currentUser = user;
    notifyListeners();
  }

  function notifyListeners() {
    var mappedUser = getUser();
    listeners.forEach(function (callback) {
      try {
        callback(mappedUser);
      } catch (e) {
        console.error('AuthService: listener callback error', e);
      }
    });
  }

  function getUser() {
    if (!currentUser) return null;

    var metadata = currentUser.user_metadata || {};
    return {
      id: currentUser.id,
      email: currentUser.email,
      name: metadata.full_name || metadata.name || currentUser.email.split('@')[0],
      avatar: metadata.avatar_url || null,
      raw: currentUser
    };
  }

  // Set up listeners once Supabase client is ready
  setTimeout(init, 100);

  return {
    // Check if user is authenticated
    isAuthenticated: function () {
      return currentUser !== null;
    },

    // Get current authenticated user details
    getCurrentUser: function () {
      return getUser();
    },

    // Trigger Google Sign-In OAuth flow
    loginWithGoogle: function () {
      if (!window.SupabaseService.isReady()) {
        alert('Supabase database sync is not configured yet. Please configure js/config.js first!');
        return;
      }

      var client = window.SupabaseService.getClient();
      
      // Redirect URL should be the current page location
      var redirectUrl = window.location.origin + window.location.pathname;
      
      client.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: redirectUrl
        }
      }).catch(function (error) {
        console.error('AuthService: Google Sign-in error', error);
      });
    },

    // Sign out from the session
    signOut: function () {
      if (!window.SupabaseService.isReady()) {
        updateUser(null);
        return Promise.resolve();
      }

      var client = window.SupabaseService.getClient();
      return client.auth.signOut().then(function () {
        updateUser(null);
      }).catch(function (error) {
        console.error('AuthService: Sign-out error', error);
      });
    },

    // Subscribe to auth state updates
    subscribe: function (callback) {
      if (typeof callback === 'function') {
        listeners.push(callback);
        // Call immediately with the current user state
        callback(getUser());
      }
      return function unsubscribe() {
        listeners = listeners.filter(function (cb) { return cb !== callback; });
      };
    }
  };
})();
