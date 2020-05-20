export const TOKEN_KEY = "@Vibbra-Token";

export const getUserLogged = () => JSON.parse(localStorage.getItem(TOKEN_KEY));

export const login = userToLogin => localStorage.setItem(TOKEN_KEY, JSON.stringify(userToLogin));

export const logout = () => localStorage.removeItem(TOKEN_KEY);