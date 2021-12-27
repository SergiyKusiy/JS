const baseUrl = 'https://60b39c004ecdc1001747f926.mockapi.io/api/t1/users';

function getUsersList() {
  return fetch(baseUrl).then(response => response.json());
}

function getUserById(userId) {
  return fetch(`${baseUrl}/${userId}`).then(response => response.json());
}

function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  }).then(response => response.json());
}

function deleteUser(userId) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
  }).then(response => response.json());
}

function updateUser(userId, userData) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  }).then(response => response.json());
}
