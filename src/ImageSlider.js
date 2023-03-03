import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

const images = [
  {
    url: 'https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-taj-mahal.jpg.rend.hgtvcom.616.462.suffix/1491581548979.jpeg',
  },
  {
    url: 'https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-christ-the-redeemer.jpg.rend.hgtvcom.616.462.suffix/1491581548898.jpeg',
  },
  {
    url: 'https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-machu-picchu.jpg.rend.hgtvcom.616.462.suffix/1491581548990.jpeg',
  },

  {
    url: 'https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-petra.jpg.rend.hgtvcom.616.462.suffix/1491581549062.jpeg',
  },
];

const ImageSlider = () => {
  return (
    <div>
      <center>
        <SimpleImageSlider
          width={500}
          height={300}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          style={{
            backgroundColor: 'white',
            position: 'relative',
            display: 'block',
            objectFit: 'cover',
            borderRadius: '10px',
          }}
        />
      </center>
    </div>
  );
};
export default ImageSlider;
