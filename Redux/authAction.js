export function loginUser({ email, password }) {
  const request = axios.post('/api/login', { email, password }).then((response) => {
    return response.data;
  });
  return {
    type: 'LOGIN_USER',
    payload: request,
  };
}

export function auth() {
  const request = axios.get('/auth').then((response) => response.data);

  return {
    type: 'AUTH',
    payload: request,
  };
}
