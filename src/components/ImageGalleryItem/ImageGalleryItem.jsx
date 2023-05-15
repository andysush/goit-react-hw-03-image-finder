import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImgItem = ({ tags, webformatURL, largeImageURL, onModalOpen }) => {
  return (
    <div
      className={css.gallery__item}
      onClick={() => {
        onModalOpen(largeImageURL, tags);
      }}
    >
      <img className={css.gallery__image} src={webformatURL} alt={tags} />
    </div>
  );
};

ImgItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onModalOpen: PropTypes.func.isRequired,
};
