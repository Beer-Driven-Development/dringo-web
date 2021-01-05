export const userService = {
  login,
  logout,
  register,
  apiAuthenticate,
};

function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${process.env.VUE_APP_API_URL}/auth/login`, requestOptions)
    .then(handleResponse)
    .then((token) => {
      // login successful if there's a jwt token in the response
      if (token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("token", JSON.stringify(token));
      }

      return token;
    });
}

async function apiAuthenticate() {
  window.location = `${process.env.VUE_APP_API_URL}/auth/facebook`;
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return fetch(
    `${process.env.VUE_APP_API_URL}/auth/register`,
    requestOptions
  ).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text;
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    console.log(data);
    return data;
  });
}
