// static methods, read and write local token, similar to HashMap
class Auth {
  // write function, like map.put()
  static authenticateUser(token, email) {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
  }

  // check effective toekn
  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  // logout
  static deauthenticate() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  }

  // get token & email
  static getToken() {
    return localStorage.getItem('token');
  }

  static getEmail() {
    return localStorage.getItem('email');
  }
}

export default Auth;
