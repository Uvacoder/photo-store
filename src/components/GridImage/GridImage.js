import { FadeLoadImage } from '../';
import { preloadImage } from '../../util';

export default (
  props
) => (
  <FadeLoadImage
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
      cursor: "pointer"
    }}
    loadCheckInterval={50}
    onMouseEnter={() => preloadImage(props.photo.src.replace("thumb", "full"))}
    onClick={props.isMobile
      ? undefined
      : () => props.openGallery(props.index)
    }
  />            
)
