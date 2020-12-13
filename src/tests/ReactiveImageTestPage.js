import { useState, useEffect } from 'react';
import { ReactiveImage } from '../components';

export const ReactiveImageTestPage = () => {

  const [w, setW] = useState(window.innerWidth-200);

  const handleUpdate = () => {
    setW(window.innerWidth-200);
  }
  
  useEffect(() => {
    window.addEventListener('resize', handleUpdate);
    return () => {
      window.removeEventListener('resize', handleUpdate);
    }
  });
  
  return (
    <ReactiveImage
      src='/assets/tests/testimage.jpg'
      requestBy={"width"}
      discreteRequests={[400,800,1200,1600,2000]}
      minRequest={w}
    />
  );
}