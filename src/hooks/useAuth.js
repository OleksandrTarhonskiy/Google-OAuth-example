import { useHistory } from 'react-router-dom';

export default function useAuth() {
  const history = useHistory();

  function auth({ tokenObj, profileObj }) {
    localStorage.setItem('token', tokenObj?.access_token);
    localStorage.setItem('user', JSON.stringify(profileObj));
    history.push('/home');
  }

  function logout() {
    localStorage.removeItem('token');
    history.push('/');
  }

  return { auth, logout };
}