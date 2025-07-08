import { useEffect } from 'react';

const useSequentialBackground = () => {
  // Automatically import all image files from assets folder
  const importAllImages = (r) => {
    let images = {};
    r.keys().forEach((item) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  };

  // This will automatically find all images in the assets/background folder
  const images = importAllImages(
    require.context('../assets/background', false, /\.(png|jpe?g|svg)$/)
  );
  
  // Convert to array of image URLs
  const backgroundImages = Object.values(images);

  useEffect(() => {
    // Get current index from sessionStorage (resets when browser closes)
    let currentIndex = parseInt(sessionStorage.getItem('backgroundIndex') || '0');
    
    // Make sure the index is valid (safety check)
    if (currentIndex >= backgroundImages.length || currentIndex < 0) {
      currentIndex = 0;
    }
    
    // Select the current image
    const selectedImage = backgroundImages[currentIndex];
    
    // Move to next image for next time (cycle back to 0 when reaching the end)
    const nextIndex = (currentIndex + 1) % backgroundImages.length;
    sessionStorage.setItem('backgroundIndex', nextIndex.toString());

    // Apply the background to the body
    document.body.style.backgroundImage = `url(${selectedImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';

    // Cleanup function to remove background when component unmounts
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundAttachment = '';
    };
  }, [backgroundImages]); // Include backgroundImages as dependency

  return null; // This hook doesn't return anything visual
};

export default useSequentialBackground;
