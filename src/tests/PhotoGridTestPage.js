import React, { useEffect, useState } from 'react';
import Gallery from 'react-photo-gallery';

const nicImage = new Image();
nicImage.src = "https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTIwNjA4NjMzNzYwMjg2MjIw/nicolas-cage-9234498-1-402.jpg";

const NIC_CAGE = {
  image: nicImage,
  name: "Cage",
  src: nicImage.src,
  width: 31000,
  height: 20000
};

let it = 0;

const PhotoGridTestPage = () => {

  const [port, setPort] = useState(8887);

  const [photos, setPhotos] = useState([NIC_CAGE]);
  const [loadedPhotos, setLoadedPhotos] = useState(photos);

  const [selectedPhoto, setSelectPhoto] = useState(null);

  const SelectablePhoto = props => (
    <img
      alt=""
      src={props.photo.src}
      style={{
        display: "block",
        position: "absolute",
        margin: props.margin,
        top: props.top,
        left: props.left,
        height: props.photo.height,
        width: props.photo.width,
      }}
    />            
  )

  const onFileSelect = e => {
    setPhotos(photos.concat(Object.keys(e.target.files).map(i => {
      const image = new Image();
      image.src = 'http://127.0.0.1:'+port+'/'+e.target.files[i].name;
      return {
        image: image,
        name: e.target.files[i].name,
        src: image.src,
        width: 1,
        height: 1
      };
    })));
  }

  const handleKeyPress = e => {
    switch(e.keyCode) {
      case 37: // <-
        const x = e.clientX, y = e.clientY;
        console.log(x, y);
        // const elementMouseIsOver = document.elementFromPoint(x, y);
        break;
      case 39: // ->
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  })


  // Update image width/height ratios once image loads for photo grid library calcs
  useEffect(() => {
    it = setInterval(() => {
      let updateFlag = false;
      let ps = photos;
      // Filter Nic Cage
      if (photos.length > 1) {
        ps = ps.filter(p => p.name !== "Cage");
      }
      ps.forEach(p => {
        if (p.width !== p.image.naturalWidth || p.height !== p.image.naturalHeight) {
          p.width = p.image.naturalWidth;
          p.height = p.image.naturalHeight;
          updateFlag = true;
        }
      });
      console.log(updateFlag);
      if (updateFlag) {
        console.log(photos, ps);
        setLoadedPhotos(ps);
      }
    }, 200);
    return (() => {
      clearInterval(it);
    });
  });

  return (
    <React.Fragment>
      <Gallery
        photos={loadedPhotos}
        direction={"column"}
        renderImage={props => <SelectablePhoto {...props} />}
      />
      <div
        style={{
          zIndex: 10,
          position: "fixed",
          left: 10,
          bottom: 10,
          width: 180,
        }}
      >
        127.0.0.1:<input type="text" value={port} onChange={e => {setPort(e.target.value)}} style={{width:80}}/>
        <input type="file" multiple onChange={onFileSelect} />
        <button onClick={() => {console.log("click"); setPhotos([NIC_CAGE]); setLoadedPhotos([NIC_CAGE]);}} >Clear</button><br/>
      </div>
    </React.Fragment>
  );
}

export default PhotoGridTestPage;