import { Component } from 'react';

export class SearchBar extends Component {
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
        <header className="searchbar">
          <form className="form" onSubmit={this.handleSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              className="input"
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
