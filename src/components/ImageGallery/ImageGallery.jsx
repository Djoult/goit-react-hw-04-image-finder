import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Ul } from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = ({ pictures }) => {
  return (
    <Ul className="gallery">
      {pictures.map(el => (
        <ImageGalleryItem el={el} key={el.id} />
      ))}
    </Ul>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};

export default ImageGallery;
