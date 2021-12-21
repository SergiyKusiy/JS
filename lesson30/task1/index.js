export const addImage = imgSrc => {
  const p = new Promise((resolve, reject) => {
    const imageElem = document.createElement('img');
    imageElem.setAttribute('alt', 'My photo');
    imageElem.src = imgSrc;

    const container = document.querySelector('.page');
    container.append(imageElem);

    const onImageLoaded = () => {
      const { width, height } = imageElem;
      resolve({ width, height });
    };

    imageElem.addEventListener('load', onImageLoaded);
    imageElem.addEventListener('error', () => reject(new Error('Image load is failed...')));
  });

  return p;
};

// callback example
const onImageLoaded = imgElem => {
  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width} x ${height}`;
};

// test call
const pp = addImage(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
  onImageLoaded,
);
pp.then(onImageLoaded);
pp.catch(error => console.log(error));

// const addImage = (imgSrc, callback) => {
//   const imgElem = document.createElement('img');
//   imgElem.setAttribute('alt', 'My Photo');
//   imgElem.src = imgSrc;
//   const containerElem = document.querySelector('.page');
//   containerElem.append(imgElem);

//   const onImageLoaded = () => {
//     callback(null, imgElem);
//   };

//   imgElem.addEventListener('load', onImageLoaded);
//   imgElem.addEventListener('error', () => callback('Image load is failed'));
// };

// // callack function
// const onImageLoaded = (error, imgElem) => {
//   if (error) {
//     console.log(error);
//     return;
//   }

//   const { width, height } = imgElem;
//   const sizeElem = document.querySelector('.image-size');

//   sizeElem.textContent = `${width} x ${height}`;
// };

// // examples
// addImage(
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Arial-View-Of-Blue-Lakes-And--227291596.jpg',
//   onImageLoaded,
// );
