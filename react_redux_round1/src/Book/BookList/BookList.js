import React from 'react';
import { connect } from 'react-redux';
import Book from '../Book/Book';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false,
      newBookName: '',
      newBook: {}
    };
  }
  onAddButtonClicked = () => {
    this.setState({ isAdding: true });
  };
  onSaveButtonClicked = () => {};
  onNewBookNameChanged = event => {
    console.log(`event.target.value:`, event.target.value);
    this.setState({ newBookName: event.target.value });
  };
  render() {
    return (
      <div>
        <div>
          BookList
          {/* <div>{this.state.newBookName}</div> */}
          <button onClick={this.onAddButtonClicked}>add</button>
          {this.state.isAdding ? (
            <div>
              <input
                value={this.state.newBookName}
                onChange={this.onNewBookNameChanged}
              />
              <button onClick={this.onSaveButtonClicked}>save</button>
            </div>
          ) : null}
        </div>

        <Book />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {};
};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
