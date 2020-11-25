
const PHOTOS_DB_RAW = [
  {
    groups: {all: 1, cp: 1},
    group: "cp",
    src: "http://atelier-mistral.com/assets/photos/Cailtin&Paul-34.jpg",
    width: 2,
    height: 3
  },
  {
    groups: {all: 2, cp: 2},
    group: "cp",
    src: "http://atelier-mistral.com/assets/photos/Cailtin&Paul-72.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 3, cp: 3},
    group: "cp",
    src: "http://atelier-mistral.com/assets/photos/Cailtin&Paul-101.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 4, cp: 4},
    group: "cp",
    src: "http://atelier-mistral.com/assets/photos/Cailtin&Paul-118.jpg",
    width: 2,
    height: 3
  },
  {
    groups: {all: 5, cp: 5},
    group: "cp",
    src: "http://atelier-mistral.com/assets/photos/Cailtin&Paul-121.jpg",
    width: 2,
    height: 3
  },
  {
    groups: {all: 6, cp: 6},
    group: "cp",
    src: "http://atelier-mistral.com/assets/photos/Cailtin&Paul-133.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 7, va: 1},
    group: "va",
    src: "http://atelier-mistral.com/assets/photos/Val&Austin-116.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 8, va: 2},
    group: "va",
    src: "http://atelier-mistral.com/assets/photos/Val&Austin-117.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 9, va: 3},
    group: "va",
    src: "http://atelier-mistral.com/assets/photos/Val&Austin-124.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 10, va: 4},
    group: "va",
    src: "http://atelier-mistral.com/assets/photos/Val&Austin-151.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 11, va: 5},
    group: "va",
    src: "http://atelier-mistral.com/assets/photos/Val&Austin-166.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 12, va: 6},
    group: "va",
    src: "http://atelier-mistral.com/assets/photos/Val&Austin-170.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 13, va: 7},
    group: "va",
    src: "http://atelier-mistral.com/assets/photos/Val&Austin-179.jpg",
    width: 3,
    height: 2
  }
];

const photoOrder = group => function(a,b) {
  return (a.groups[group] > b.groups[group]) ? 1
       : (a.groups[group] < b.groups[group]) ? -1 
       : 0;
};

const PHOTOS_DB = PHOTOS_DB_RAW.concat(PHOTOS_DB_RAW).concat(PHOTOS_DB_RAW).concat(PHOTOS_DB_RAW)
         .concat(PHOTOS_DB_RAW).concat(PHOTOS_DB_RAW).concat(PHOTOS_DB_RAW).concat(PHOTOS_DB_RAW);

export const PHOTOS_ALL = PHOTOS_DB.map(i => ({ src: i.src, width: i.width, height: i.height }));
// export const PHOTOS_VA = PHOTOS_DB.filter(i => i.group != "va").map(i => ({ src: i.src, width: i.width, height: i.height }));
// export const PHOTOS_CP = PHOTOS_DB.filter(i => i.group != "cp").map(i => ({ src: i.src, width: i.width, height: i.height }));
// export const PHOTOS_ALL = PHOTOS.map(i => ({ src: i.src, thumbnail: i.src }));

export function loadPhotos(group) {
  // Return all photos if no group provided
  const photos = (typeof group === 'undefined') ? PHOTOS_DB : PHOTOS_DB.filter(i => i.group != group);
  return photos.map(i => ({ src: i.src, width: i.width, height: i.height }));
}