const images = [
  "images/image-1.png",
  "images/image-2.png",
  "images/image-3.png",
  "images/image-4.png",
  "images/image-5.png",
  "images/image-6.png",
  "images/image-7.png",
  "images/image-8.png",
  "images/image-9.png",
];

let imgIndex = 0;
const imgEl = document.getElementById("img-slider");
setInterval(() => {
  if (imgIndex === images.length) {
    imgIndex = 0;
  }
  const imgUrl = images[imgIndex];
  imgEl.setAttribute("src", imgUrl);
  imgIndex++;
}, 2000);
