
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
    src: "/assets/photos/generated/CailtinPaul-34_h1200.jpg",
    thumbnail: "/assets/photos/generated/CailtinPaul-34_w600.jpg",
    width: 2,
    height: 3
  },
  {
    groups: {all: 2, maternity: 1},
    src: "/assets/photos/generated/CailtinPaul-72_h1200.jpg",
    thumbnail: "/assets/photos/generated/CailtinPaul-72_w600.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 3, maternity: 3},
    src: "/assets/photos/generated/CailtinPaul-101_h1200.jpg",
    thumbnail: "/assets/photos/generated/CailtinPaul-101_w600.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 4, maternity: 4},
    src: "/assets/photos/generated/CailtinPaul-118_h1200.jpg",
    thumbnail: "/assets/photos/generated/CailtinPaul-118_w600.jpg",
    width: 2,
    height: 3
  },
  {
    groups: {all: 5, maternity: 5},
    src: "/assets/photos/generated/CailtinPaul-121_h1200.jpg",
    thumbnail: "/assets/photos/generated/CailtinPaul-121_w600.jpg",
    width: 2,
    height: 3
  },
  {
    groups: {all: 6, maternity: 6},
    src: "/assets/photos/generated/CailtinPaul-133_h1200.jpg",
    thumbnail: "/assets/photos/generated/CailtinPaul-133_w600.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 7, engagements: 1},
    src: "/assets/photos/generated/ValAustin-116_h1200.jpg",
    thumbnail: "/assets/photos/generated/ValAustin-116_w600.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 8, engagements: 2},
    src: "/assets/photos/generated/ValAustin-117_h1200.jpg",
    thumbnail: "/assets/photos/generated/ValAustin-117_w600.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 9, engagements: 3},
    src: "/assets/photos/generated/ValAustin-124_h1200.jpg",
    thumbnail: "/assets/photos/generated/ValAustin-124_w600.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 10, engagements: 4},
    src: "/assets/photos/generated/ValAustin-151_h1200.jpg",
    thumbnail: "/assets/photos/generated/ValAustin-151_w600.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 11, engagements: 5},
    src: "/assets/photos/generated/ValAustin-166_h1200.jpg",
    thumbnail: "/assets/photos/generated/ValAustin-166_w600.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 12, engagements: 6},
    src: "/assets/photos/generated/ValAustin-170_h1200.jpg",
    thumbnail: "/assets/photos/generated/ValAustin-170_w600.jpg",
    width: 3,
    height: 2
  },
  {
    groups: {all: 13, engagements: 7},
    src: "/assets/photos/generated/ValAustin-179_h1200.jpg",
    thumbnail: "/assets/photos/generated/ValAustin-179_w600.jpg",
    width: 3,
    height: 2
  }
];
