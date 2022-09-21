import jwtDecode from 'jwt-decode';

const CustomAuthProvider = ({
  middlewareUri,
  allowAnonymous = true,
  localAccounts = false,
  checkUser,
  httpClient,
  checkPermissions
}) => ({
  login: async params => {
    const url = new URL(window.location.href);
    if (localAccounts) {
      const { username, password } = params;
      try {
        const { json } = await httpClient(`${middlewareUri}auth`, {
          method: 'POST',
          body: JSON.stringify({ email: username.trim(), password: password.trim() }),
          headers: new Headers({ 'Content-Type': 'application/json' })
        });
        const { token } = json;
        localStorage.setItem('token', token);
      } catch (e) {
        throw new Error('Failed to login');
      }
    } else {
      window.location.href = `${middlewareUri}auth?redirectUrl=` + encodeURIComponent(url.origin + '/login?login=true');
    }
  },
  signup: async params => {
    if (localAccounts) {
      const { email, password, ...profileData } = params;
      try {
        const { json } = await httpClient(`${middlewareUri}auth/signup`, {
          method: 'POST',
          body: JSON.stringify({ email: email.trim(), password: password.trim(), ...profileData }),
          headers: new Headers({ 'Content-Type': 'application/json' })
        });
        const { token } = json;
        localStorage.setItem('token', token);
        const { webId } = jwtDecode(token);
        return webId;
      } catch (e) {
        if (e.message === 'email.already.exists') {
          throw new Error('auth.message.user_email_exist');
        } else {
          throw new Error(e.message || 'ra.auth.sign_in_error');
        }
      }
    } else {
      window.location.href = `${middlewareUri}auth?redirectUrl=` + encodeURIComponent(url.origin + '/login?login=true');
    }
  },
  logout: async () => {
    localStorage.removeItem('token');
    if (!localAccounts) {
      const url = new URL(window.location.href);
      if (!allowAnonymous) {
        window.location.href = `${middlewareUri}auth/logout?redirectUrl=` + encodeURIComponent(url.origin + '/login');
      } else {
        // Redirect to login page after disconnecting from SSO
        // The login page will remove the token, display a notification and redirect to the homepage
        window.location.href =
          `${middlewareUri}auth/logout?redirectUrl=` + encodeURIComponent(url.origin + '/login?logout=true');
      }
    }

    // Avoid displaying immediately the login page
    return '/';
  },
  checkAuth: async () => {
    const token = localStorage.getItem('token');
    if (!token && !allowAnonymous) throw new Error();
  },
  checkUser: userData => {
    if (checkUser) {
      return checkUser(userData);
    } else {
      return true;
    }
  },
  checkError: error => Promise.resolve(),
  getIdentity: () => {
    const token = localStorage.getItem('token');
    if (token) {
      const payload = jwtDecode(token);
      return { id: payload.webId, fullName: payload.name || payload['foaf:name'] };
    }
  }
});

export default CustomAuthProvider;