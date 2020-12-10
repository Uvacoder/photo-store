
export function getPhotos(group) {
  // Default to group 'all'
  if (typeof group === 'undefined') {
    group = "all"
  }
                        // Filter to photos in specifed group
  const photos = PHOTOS.filter(i => i.groups.hasOwnProperty(group))
                        // Sort by value for that photo group key
                        .sort( (a,b) => 
                          (a.groups[group] > b.groups[group]) ? 1 :
                          (a.groups[group] < b.groups[group]) ? -1 :
                          0
                        );
  // Map to grid library format
  const thumbnails = photos.map(i => ({ src: i.thumbnail,
                                        width: i.width,
                                        height: i.height
                                      }));
  // Map to lightbox library format
  const images = photos.map(i => (i.src));

  return { thumbnails, images };
}

const PHOTOS = [
  {
    groups: {all: 1, maternity: 2},
    src: "/assets/photos/full/Cailtin&Paul-34.jpg",
    thumbnail: "/assets/photos/thumb/Cailtin&Paul-34.jpg",
    width: 2,
    height: 3
  },
  {
    groups: {all: 2, maternity: 1},
    src: "/assets/photos/full/Cailtin&Paul-72.jpg",
    thumbnail: "/assets/photos/thumb/Cailtin&Paul-72.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 3, maternity: 3},
    src: "/assets/photos/full/Cailtin&Paul-101.jpg",
    thumbnail: "/assets/photos/thumb/Cailtin&Paul-101.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 4, maternity: 4},
    src: "/assets/photos/full/Cailtin&Paul-118.jpg",
    thumbnail: "/assets/photos/thumb/Cailtin&Paul-118.jpg",
    width: 2,
    height: 3
  },
  {
    groups: {all: 5, maternity: 5},
    src: "/assets/photos/full/Cailtin&Paul-121.jpg",
    thumbnail: "/assets/photos/thumb/Cailtin&Paul-121.jpg",
    width: 2,
    height: 3
  },
  {
    groups: {all: 6, maternity: 6},
    src: "/assets/photos/full/Cailtin&Paul-133.jpg",
    thumbnail: "/assets/photos/thumb/Cailtin&Paul-133.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 7, engagements: 1},
    src: "/assets/photos/full/Val&Austin-116.jpg",
    thumbnail: "/assets/photos/thumb/Val&Austin-116.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 8, engagements: 2},
    src: "/assets/photos/full/Val&Austin-117.jpg",
    thumbnail: "/assets/photos/thumb/Val&Austin-117.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 9, engagements: 3},
    src: "/assets/photos/full/Val&Austin-124.jpg",
    thumbnail: "/assets/photos/thumb/Val&Austin-124.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 10, engagements: 4},
    src: "/assets/photos/full/Val&Austin-151.jpg",
    thumbnail: "/assets/photos/thumb/Val&Austin-151.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 11, engagements: 5},
    src: "/assets/photos/full/Val&Austin-166.jpg",
    thumbnail: "/assets/photos/thumb/Val&Austin-166.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 12, engagements: 6},
    src: "/assets/photos/full/Val&Austin-170.jpg",
    thumbnail: "/assets/photos/thumb/Val&Austin-170.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 13, engagements: 7},
    src: "/assets/photos/full/Val&Austin-179.jpg",
    thumbnail: "/assets/photos/thumb/Val&Austin-179.jpg",
    width: 3,
    height: 2
  }
];
