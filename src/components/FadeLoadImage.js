import { useState } from 'react';
import { ReactiveImage } from '.';

const FadeLoadImage = ({
  loadCheckInterval,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const newProps = {
    ...props,
    style: {
      ...props.style,
      opacity: isLoaded ? 1 : 0,
      transition: "opacity 1s",
    }
  }

  return (
    <ReactiveImage
      loadCheckInterval={loadCheckInterval || 50}
      onImageLoad={() => setIsLoaded(true)}
      {...newProps}
    />            
  );
}

export default FadeLoadImage;