// const getRandomNumber = (from, to) => from + Math.random() * (to - from);

// const request = url =>
//   new Promise(resolve => {
//     const randomDelay = getRandomNumber(from, to);
//     setTimeout(() => {
//       resolve({
//         userData: {
//           name: 'Tom',
//           age: 17,
//         },
//         source: url,
//       });
//     }, randomDelay);
//   });

// const servers = ['https://server.com/us', 'https://server.com/eu', 'https://server.com/au'];

// const getUserASAP = userId => {
//   const userUrls = servers.map(serverUrl => `${serverUrl}/users/${userId}`);

//   const requests = userUrls.map(userUrl => request(userUrl));
//   return Promise.race(requests);
// };

// refactoring
const request = url =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, 1000 + Math.random() * (3000 - 1000));
  });

export const getUserASAP = userId => {
  const servers = ['https://server.com/us', 'https://server.com/eu', 'https://server.com/au'];

  const userUrls = servers.map(serverUrls => `${serverUrls}/${userId}`);

  const requests = userUrls.map(userUrl => request(userUrl));

  return Promise.race(requests);
};

getUserASAP('user-id-1').then(res => console.log(res));
