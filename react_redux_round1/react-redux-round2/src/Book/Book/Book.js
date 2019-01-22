import React from 'react';
import { connect } from 'react-redux';
import { deleteBookStart, updateBookStart } from '../BookActions';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Book: props.Book
    };
  }
  onDeleteButtonClicked = () => {
    this.props.deleteBookStart(this.props.book.id);
  };
  onUpdateButtonClicked = () => {
    this.props.updateBookStart(this.state.book.id, { ...this.state.book });
  };

  render() {
    return (
      <div>
        {this.props.book.bookName}
        <button onClick={this.onDeleteButtonClicked}>delete</button>
        <button onClick={this.onUpdateButtonClicked}>update</button>
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
