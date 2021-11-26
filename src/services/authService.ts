import apiClient from 'services/apiService';

export const authService = {
  login(username, password) {
    return apiClient.request({
      method: 'POST',
      url: '/defi-user-service/public-api/v1.0.0/users/login',
      data: {
        username,
        password,
      },
    });
  },

  loginWithSignature(params) {
    return apiClient.request({
      method: 'POST',
      url: '/defi-user-service/public-api/v1.0.0/users/login',
      data: params,
    });
  },

  checkValidate(params) {
    return apiClient.request({
      method: 'GET',
      url: `/defi-user-service/public-api/v1.0.0/users/check-validate?email=${params.email}&type=2&walletAddress=${params.walletAddress}`,
    });
  },

  connectWalletAddressWithEmail(params) {
    return apiClient.request({
      method: 'POST',
      url: '/defi-user-service/api/v1.0.0/users/reputation',
      data: params,
    });
  },

  getProfile(accessToken) {
    return apiClient.request({
      method: 'GET',
      url: '/defi-user-service/api/v1.0.0/users/profile',
      data: { accessToken },
    });
  },

  logout() {
    return apiClient.request({
      baseURL: process.env.REACT_APP_BASE_API_URL_V1,
      method: 'PUT',
      url: '/api/v1.0.0/users/logout',
    });
  },

  refreshToken(refreshToken: string) {
    return apiClient.request({
      method: 'POST',
      url: '/refresh-token',
      data: {
        refreshToken,
      },
    });
  },

  getAccessToken() {
    return localStorage.getItem('access_token');
  },

  setAccessToken(token: string) {
    return localStorage.setItem('access_token', token);
  },

  removeAccessToken() {
    localStorage.removeItem('lastToken');
    return localStorage.removeItem('access_token');
  },

  getRefreshToken() {
    return localStorage.getItem('refresh_token');
  },

  setRefreshToken(token: string) {
    return localStorage.setItem('refresh_token', token);
  },

  removeRefreshToken() {
    return localStorage.removeItem('refresh_token');
  },

  getNonce(condition: object) {
    return apiClient.get('/defi-user-service/public-api/v1.0.0/users/nonce', {
      params: condition,
    });
  },
};
