import PropTypes from 'prop-types';
import { ImgItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImgGallery = ({ imagesData, onModalOpen }) => {
  return (
    <ul className={css.gallery}>
      {imagesData.map(({ id, tags, webformatURL, largeImageURL }) => {
        return (
          <ImgItem
            key={id}
            tags={tags}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onModalOpen={onModalOpen}
          ></ImgItem>
        );
      })}
    </ul>
  );
};

ImgGallery.propTypes = {
  imagesData: PropTypes.arrayOf(PropTypes.object),
  onModalOpen: PropTypes.func.isRequired,
};
