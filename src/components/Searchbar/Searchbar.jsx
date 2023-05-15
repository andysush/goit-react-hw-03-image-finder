import PropTypes from 'prop-types';
import { Component } from 'react';
import { ReactComponent as SearchIcon } from '../../icons/image-search-min.svg';
import css from './SearchBar.module.css';

export class SearchBar extends Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired };

  state = { value: '' };

  handleChange = event => {
    const { value } = event.currentTarget;

    this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.value) {
      window.alert('Please enter your request ');
      return;
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <>
        <header className={css.searchbar}>
          <form className={css.form} onSubmit={this.handleSubmit}>
            <button type="submit" className={css.button}>
              <SearchIcon />
            </button>

            <input
              className={css.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
              value={this.state.value}
            />
          </form>
        </header>
      </>
    );
  }
}
