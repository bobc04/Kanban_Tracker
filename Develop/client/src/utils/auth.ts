import { JwtPayload, jwtDecode } from 'jwt-decode';

import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  username: string;
  exp: number;
}

class AuthService {
  // DECODE THE TOKEN AND RETURN THE USER PROFILE
  getProfile() {
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null;
  }

  // CHECK IF USER IS LOGGED IN
  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }
  
  // CHECK IF TOKEN IS EXPIRED
  isTokenExpired(token: string) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      return true;
    }
  }
}