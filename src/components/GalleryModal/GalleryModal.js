import React, { useCallback, useEffect, useRef } from 'react'
import Modal from 'react-modal';
import ImageGallery from 'react-image-gallery';

const gallery = React.createRef();

function GalleryModal(props) {

  const onOpen = () => {
    props.onOpen?.()
    gallery.current?.fullScreen();
  }

  return (
    <Modal isOpen={props.isOpen}
          onAfterOpen={onOpen}
          onRequestClose={() => props.onClose?.()}
    >
      <ImageGallery ref={gallery}
                    items={props.photos}
                    startIndex={props.startIndex}
                    useBrowserFullscreen={false}
      />
    </Modal>
  );

}

export default GalleryModal;