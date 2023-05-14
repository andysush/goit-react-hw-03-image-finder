import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleCloseESC);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleCloseESC);
  }

  handleCloseESC = event => {
    if (event.code === 'Escape') this.props.onModalClose();
  };

  handleCloseBackdrop = event => {
    if (event.target === event.currentTarget) this.props.onModalClose();
  };

  render() {
    return createPortal(
      <>
        <div class="overlay" onClick={this.handleCloseBackdrop}>
          <div class="modal">
            <img src={this.props.largeImageURL} alt={this.props.tags} />
          </div>
        </div>
      </>,
      modalRoot
    );
  }
}
