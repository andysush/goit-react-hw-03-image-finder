export const ImgItem = ({ imagesData }) => {
  return imagesData.map(({ id, webformatURL, tags }) => (
    <li class="gallery-item" key={id}>
      <img src={webformatURL} alt={tags} />
    </li>
  ));
};
