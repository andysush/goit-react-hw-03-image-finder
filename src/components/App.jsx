import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import * as ImageService from 'services/pixabay';
import { ImgGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    value: '',
    page: 1,
    imagesData: [],
    showBtn: false,
    isLoading: false,
    isOpenModal: false,
    err: '',
    isEmpty: false,
    largeImageURL: '',
    tags: '',
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { value, page } = this.state;

    if (prevState.value !== value || prevState.page !== page) {
      this.setState({ isLoading: true });
      ImageService.getImages(value, page)
        .then(({ hits, totalHits }) => {
          if (!hits.length) {
            this.setState({ isEmpty: true });
            return;
          }
          this.setState(prevState => ({
            imagesData: [...prevState.imagesData, ...hits],
            showBtn: page < Math.ceil(totalHits / ImageService.perPage),
          }));
        })
        .catch(err => this.setState({ err: err.message }))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  };

  handleSubmit = value => {
    this.setState({
      value,
      page: 1,
      imagesData: [],
      err: '',
      isEmpty: false,
      showBtn: false,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onModalOpen = (largeImageURL, tags) => {
    this.setState({ isOpenModal: true, largeImageURL, tags });
  };
  onModalClose = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const {
      imagesData,
      showBtn,
      isLoading,
      err,
      isEmpty,
      isOpenModal,
      largeImageURL,
      tags,
    } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit}></SearchBar>
        {isEmpty && <p>Sorry. There are no images ... 😭</p>}
        {err && <p>Sorry. {err}😭</p>}
        <ImgGallery imagesData={imagesData} onModalOpen={this.onModalOpen} />
        {showBtn && <Button onClick={this.loadMore}></Button>}
        {isLoading && <Loader />}
        {isOpenModal && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            onModalClose={this.onModalClose}
          />
        )}
      </div>
    );
  }
}
