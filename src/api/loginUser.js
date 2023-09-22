export async function LogUser(email, password) {
  return fetch('https://skypro-music-api.skyeng.tech/user/login/', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => {
      if (response.status === 400) {
        return response.json().then((errorResponse) => {
          if (errorResponse.email) {
            throw new Error(errorResponse.email);
          }
          if (errorResponse.password) {
            throw new Error(errorResponse.password);
          }
          throw new Error('Произошла неизвестная ошибка.');
        });
      } else if (response.status === 401) {
        return response.json().then((errorResponse) => {
          throw new Error(errorResponse.detail);
        });
      } else if (response.status === 200) {
        return response.json();
      }
    })
    .catch((error) => {
      throw error;
    });
}
