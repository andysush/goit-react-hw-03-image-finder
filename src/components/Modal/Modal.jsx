import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onModalClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleCloseESC);
    document.documentElement.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleCloseESC);
    document.documentElement.style.overflow = '';
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
        <div className={css.overlay} onClick={this.handleCloseBackdrop}>
          <div className={css.modal}>
            <img src={this.props.largeImageURL} alt={this.props.tags} />
          </div>
        </div>
      </>,
      modalRoot
    );
  }
}
