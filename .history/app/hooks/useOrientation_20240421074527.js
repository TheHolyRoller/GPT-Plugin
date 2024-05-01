// useLockOrientation.js
import { useEffect } from 'react';

const useLockOrientation = () => {
  useEffect(() => {
    const lockOrientation = async () => {
      try {
        await screen.orientation.lock('portrait');
      } catch (error) {
        console.error(`Orientation lock failed: ${error}`);
      }
    };

    window.addEventListener('orientationchange', lockOrientation);
    lockOrientation(); // Lock on initial load

    return () => {
      window.removeEventListener('orientationchange', lockOrientation);
    };
  }, []);
};

export default useLockOrientation;
