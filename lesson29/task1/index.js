export const addImage = (imgSrc, callback) => {
<<<<<<< HEAD
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My photo');
  imgElem.src = imgSrc;
  const containerElem = document.querySelector('.page');
  containerElem.append(imgElem);
=======
  const imageElem = document.createElement('img');
  imageElem.setAttribute('alt', 'My photo');
  imageElem.src = imgSrc;
>>>>>>> 284ddf914516c4f24f7992f1318446ff91517c77

  const onImageLoaded = () => {
    const { width, height } = imgElem;
    callback(null, { width, height });
  };

  imgElem.addEventListener('load', onImageLoaded);

  const onError = () => callback('Image load is failed...');

  imgElem.addEventListener('error', onError);
};

// callack exampl
const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }
  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width} x ${height}`;
};

// test call
addImage(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
  onImageLoaded,
);
