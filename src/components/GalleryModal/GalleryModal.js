import React, { useCallback, useEffect, useRef } from 'react'
import Modal from 'react-modal';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const gallery = React.createRef();

const GalleryModal = props => (

  <Modal isOpen={props.isOpen}
        onAfterOpen={() => {
          props.onOpen?.()
          gallery.current?.fullScreen();
        }}
        onRequestClose={() => props.onClose?.()}
  >
    <ImageGallery ref={gallery}
                  items={props.photos}
                  startIndex={props.startIndex}
                  useBrowserFullscreen={false}
    />
  </Modal>
);

export default GalleryModal;