const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserName = state => state.auth.user.name;

const getAuthError = state => state.auth.error;

const getAuthLoading = state => state.auth.loading;

const authSelectors = {
  getIsAuthenticated,
  getUserName,
  getAuthError,
  getAuthLoading,
};

export default authSelectors;