import { useState } from 'react';

export const ImageWithLoader = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', height: '300px' }}>
      {!loaded && (
        <div className="spinner">
          {/* You can use a CSS spinner or a library like react-loading-skeleton */}
          Loading...
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
};
