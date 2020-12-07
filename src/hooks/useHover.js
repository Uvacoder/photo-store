import { useState, useRef, useEffect } from 'react';

// TODO: figure out most robust way to implement hover
// onmouse events aren't consistent and onmove events screw up on firefox
const useHover = () => {
  
  const [isHovered, setIsHovered] = useState(false);

  const ref = useRef(null);

  const checkMouseLeave = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsHovered(false);
      window.removeEventListener('mousemove', checkMouseLeave);
    }
  }

  useEffect(() => setInterval(() => console.log(""), 100));

  const hoverProps = {
    ref,
    onMouseEnter: () => {
      setIsHovered(true);
      // window.addEventListener('mousemove', checkMouseLeave);
    },
    onMouseLeave: () => {
      setIsHovered(false);
      window.removeEventListener('mousemove', checkMouseLeave);
    }
  };

  return [isHovered, hoverProps];
}

export default useHover;
