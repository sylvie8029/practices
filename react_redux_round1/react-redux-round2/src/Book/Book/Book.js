import React from 'react';
import { connect } from 'react-redux';
import { deleteBookStart, updateBookStart } from '../BookActions';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Book: props.Book,
      isUpdating: false
    };
  }
  onDeleteButtonClicked = () => {
    this.props.deleteBookStart(this.props.book.id);
  };
  onUpdateButtonClicked = () => {
    this.props.updateBookStart(this.props.book.id);
    this.setState({ isUpdating: true });
  };
  onBookNameChanged = event => {
    this.setState({ newBookName: event.target.value });
  };
  onOkButtonClicked = () => {
    let newBook = { bookName: this.state.newBookName };
    this.props.updateBookStart(newBook);
    this.setState({ isUpdating: false });
  };
  render() {
    return (
      <div>
        {this.props.book.bookName}

        {this.state.isUpdating ? (
          <div>
            <input
              value={this.props.book.bookName}
              onChange={this.onBookNameChanged}
            />
            <button onClick={this.onOkButtonClicked}>ok</button>
          </div>
        ) : (
          <div>
            <button onClick={this.onUpdateButtonClicked}>update</button>
            <button onClick={this.onDeleteButtonClicked}>delete</button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return { Book: store.Books.Book };
};
const mapDispatchToProps = {
  deleteBookStart,
  updateBookStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);
