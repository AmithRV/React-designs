import user from '../sample-data/user.json';

function validateUser(email, password) {
  if (email === user.email && password === user.password) {
    return { key: user.key, status: 'success' };
  } else {
    return {
      key: null,
      status: 'failed',
      messge: 'The credentials do not match our records.',
    };
  }
}

export default validateUser;
