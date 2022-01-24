/* eslint-disable no-return-await */
const fetchUser = async userId => {
  const response = await fetch(`https://api.github.com/users/${userId}`);
  if (response.ok) {
    return response.json();
  }

  throw new Error('Failed to fetch user');
};

// eslint-disable-next-line consistent-return
export const getUsersBlogs = user => {
  try {
    return Promise.all(user.map(el => fetchUser(el).then(response => response.blog)));
  } catch (err) {
    alert(err.message);
  }
};

getUsersBlogs(['google', 'facebook', 'gaearon']).then(linkList => console.log(linkList));

// getUserBlogs(['google', 'zoom']).then(res => console.log(res));
