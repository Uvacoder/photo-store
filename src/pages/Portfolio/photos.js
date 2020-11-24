
const PHOTOS = [
  {
    group: "cp",
    src: "https://westlensphotography.com/assets/photos/Cailtin&Paul-34.jpg",
    width: 2,
    height: 3
  },
  {
    group: "cp",
    src: "https://westlensphotography.com/assets/photos/Cailtin&Paul-72.jpg",
    width: 3,
    height: 2
  },
  {
    group: "cp",
    src: "https://westlensphotography.com/assets/photos/Cailtin&Paul-101.jpg",
    width: 3,
    height: 2
  },
  {
    group: "cp",
    src: "https://westlensphotography.com/assets/photos/Cailtin&Paul-118.jpg",
    width: 2,
    height: 3
  },
  {
    group: "cp",
    src: "https://westlensphotography.com/assets/photos/Cailtin&Paul-121.jpg",
    width: 2,
    height: 3
  },
  {
    group: "cp",
    src: "https://westlensphotography.com/assets/photos/Cailtin&Paul-133.jpg",
    width: 3,
    height: 2
  },
  {
  group: "va",
  src: "https://westlensphotography.com/assets/photos/Val&Austin-116.jpg",
  width: 3,
  height: 2
  },
  {
    group: "va",
    src: "https://westlensphotography.com/assets/photos/Val&Austin-117.jpg",
    width: 3,
    height: 2
  },
  {
    group: "va",
    src: "https://westlensphotography.com/assets/photos/Val&Austin-124.jpg",
    width: 3,
    height: 2
  },
  {
    group: "va",
    src: "https://westlensphotography.com/assets/photos/Val&Austin-151.jpg",
    width: 3,
    height: 2
  },
  {
    group: "va",
    src: "https://westlensphotography.com/assets/photos/Val&Austin-166.jpg",
    width: 3,
    height: 2
  },
  {
    group: "va",
    src: "https://westlensphotography.com/assets/photos/Val&Austin-170.jpg",
    width: 3,
    height: 2
  },
  {
    group: "va",
    src: "https://westlensphotography.com/assets/photos/Val&Austin-179.jpg",
    width: 3,
    height: 2
  }
];

const PHOTOS_ALL_1 = PHOTOS.map(i => ({ src: i.src, width: i.width, height: i.height }));
// export const PHOTOS_ALL = PHOTOS.map(i => ({ src: i.src, thumbnail: i.src }));
export const PHOTOS_ALL = PHOTOS_ALL_1.concat(PHOTOS_ALL_1)
                                      .concat(PHOTOS_ALL_1)
                                      .concat(PHOTOS_ALL_1)
                                      .concat(PHOTOS_ALL_1)
                                      .concat(PHOTOS_ALL_1)
                                      .concat(PHOTOS_ALL_1)
                                      .concat(PHOTOS_ALL_1)
                                      .concat(PHOTOS_ALL_1);