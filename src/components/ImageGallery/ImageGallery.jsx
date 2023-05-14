import { ImgItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImgGallery = ({ imagesData, onModalOpen }) => {
  return (
    <ul class="gallery">
      <ImgItem imagesData={imagesData} onClick={onModalOpen}></ImgItem>
    </ul>
  );
};
