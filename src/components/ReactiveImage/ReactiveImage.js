import { useState, useRef } from 'react';

const ReactiveImage = ({
  requestBy,
  minRequest,
  discreteRequests,
  loadCheckInterval,
  onImageLoad,
  onImageUpdate,
  ...props
}) => {

  // Keep track of downloaded image sizes
  const [downloadedSizes, setDownloadedSizes] = useState([0]);
  const addDownloadedSize = size => {
    var arr = downloadedSizes;
    arr[arr.length] = size;
    setDownloadedSizes(arr);
  }

  // <img> ref
  const ref = useRef(null);

  const isLoaded = () => (
    ref.current !== null
    && ref.current.complete
    && ref.current.naturalHeight !== 0
  );

  // Checks if image has finished downloading in browser
  const checkIsLoaded = delay => {
    setTimeout(() => {
      if (isLoaded()) {
        onImageLoad?.();
        alert("Downloaded");
      } else {
        checkIsLoaded(delay);
      }
    }, delay);
  }

  // Build request url for specified height or width
  var requestUrl = props.src;
  const minRequestInt = parseInt(minRequest, 10);
  var requestedSize = undefined;
  // choose smallest size in discrete requests larger than the min size
  if (discreteRequests) {
    discreteRequests.forEach(r => {
      if (r >= minRequestInt) {
        requestedSize = requestedSize ?? r;
      }
    });
    requestedSize = requestedSize ?? discreteRequests[discreteRequests.length - 1];
  } else {
    requestedSize = minRequestInt;
  }
  // if there's a larger size already downloaded use that
  if (downloadedSizes.length > 0) {
    downloadedSizes.forEach(size => {
      requestedSize = Math.max(requestedSize, size);
    });
    requestUrl += '_' + requestBy + '=' + requestedSize;
  }
  
  // If size isn't downloaded add to list of downloads
  if (!downloadedSizes.includes(requestedSize)) {
    console.log("dl", downloadedSizes);
    addDownloadedSize(requestedSize);
    // checkIsLoaded(loadCheckInterval || 10);
  }

  // Update props
  const newProps = {
    ...props,
    src: requestUrl,
    ref
  }

  // Kick off download checks
  if (!isLoaded()) {
    checkIsLoaded(loadCheckInterval || 10);
  }

  return (
    <img alt="" {...newProps} />        
  );
}

export default ReactiveImage;