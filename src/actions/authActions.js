import * as actions from 'actions';
import axios from 'axios';
import{getApi} from 'utils/environment';

const API_URL = getApi();

export function signupUser({username, email, password}) {
  return function(dispatch) {
    axios.post(`${API_URL}/signup`, { username, email, password})
    .then(response => {
      dispatch({type: AUTH_USER, username: response.data.username, aCheck: response.data.aCheck});
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/feature');
    })
    .catch((response) => {
      dispatch({
         type: a.AUTH_ERROR,
         payload: response.data.error
      });
    })
  }
}