import { useRef } from 'react';

const ReactiveImage = ({
  loadCheckInterval,
  onImageLoad,
  ...props
}) => {

  const ref = useRef(null);

  const newProps = {
    alt: "",
    ...props,
    ref
  }

  const checkIsLoaded = delay => {
    setTimeout(() => {
      const isLoadedNow =
        ref.current !== null
        && ref.current.complete
        && ref.current.naturalHeight !== 0
      ;
      if (isLoadedNow === true) {
        onImageLoad?.();
      } else {
        checkIsLoaded(delay);
      }
    }, delay);
  }

  checkIsLoaded(loadCheckInterval || 10);

  return (
    <img {...newProps} />        
  );
}

export default ReactiveImage;