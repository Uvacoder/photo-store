import { useState, useEffect } from 'react';
import { FadeLoadImage } from '.';

const SlideshowImage = (
  props
) => {

  const [[w, setW], [h, setH]] = [useState(window.innerWidth), useState(window.innerHeight)];

  const handleWindowSizeChange = () => {
    const [wNew, hNew] = [window.innerWidth, window.innerHeight];
    if (Math.abs(wNew - w) > 200) {
      setW(wNew);
    }
    if (Math.abs(hNew, h) > 150) {
      setH(hNew);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  });

  const iwr = 0.75;

  const useHBars = (w < ((3*h) / (2*iwr)));
  const hBarHeight = Math.floor(useHBars
    ? (h - (2 * iwr * w)/3) / 2
    : 0
  );
  const hImg = h - (2*hBarHeight);
  
  const imgProps = {
    ...props,
    style: {
      ...props.style,
      height: hImg.toString()+"px",
      width: "auto",
    }
  }

  const hBarStyle = { height: hBarHeight.toString()+"px" }
  const marginStyle = { paddingLeft: "2px", paddingRight: "2px" }

  return (
    <div style={marginStyle}>
      <div style={hBarStyle} />
        <FadeLoadImage
          {...imgProps}
        />
      <div style={hBarStyle} />
    </div>
  );
}

export default SlideshowImage;