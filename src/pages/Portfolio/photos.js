
const PHOTOS_DB = [
  {
    groups: {all: 1, cp: 2},
    src: "/assets/photos/Cailtin&Paul-34.jpg",
    width: 2,
    height: 3
  },
  {
    groups: {all: 2, cp: 1},
    src: "/assets/photos/Cailtin&Paul-72.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 3, cp: 3},
    src: "/assets/photos/Cailtin&Paul-101.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 4, cp: 4},
    src: "/assets/photos/Cailtin&Paul-118.jpg",
    width: 2,
    height: 3
  },
  {
    groups: {all: 5, cp: 5},
    src: "/assets/photos/Cailtin&Paul-121.jpg",
    width: 2,
    height: 3
  },
  {
    groups: {all: 6, cp: 6},
    src: "/assets/photos/Cailtin&Paul-133.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 7, va: 1},
    src: "/assets/photos/Val&Austin-116.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 8, va: 2},
    src: "/assets/photos/Val&Austin-117.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 9, va: 3},
    src: "/assets/photos/Val&Austin-124.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 10, va: 4},
    src: "/assets/photos/Val&Austin-151.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 11, va: 5},
    src: "/assets/photos/Val&Austin-166.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 12, va: 6},
    src: "/assets/photos/Val&Austin-170.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 13, va: 7},
    src: "/assets/photos/Val&Austin-179.jpg",
    width: 3,
    height: 2
  }
];

export function loadPhotos(group) {
  // Return all photos if no group provided
  if (typeof group === 'undefined') {
    group = "all"
  }
  // Filter to photos in specifed group
  var photos = PHOTOS_DB.filter(i => i.groups.hasOwnProperty(group))
                  // Sort by value for that group key
                  .sort( (a,b) => 
                    (a.groups[group] > b.groups[group]) ? 1 :
                    (a.groups[group] < b.groups[group]) ? -1 :
                    0
                  )
                  // Map to photo grid library format
                  .map(i => ({ src: i.src, width: i.width, height: i.height }));

  // TODO: delete duplication once actual photos are added
  for (var i=0; i<3; i++) {
    photos = photos.concat(photos);
  }
  
  return photos;
}