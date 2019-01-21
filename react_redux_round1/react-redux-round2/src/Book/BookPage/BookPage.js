import React from 'react';
import { connect } from 'react-redux';
import BookList from '../BookList/BookList';
import { getAllBooksStart, addNewBookStart } from '../BookActions';

class BookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newBookName: '',
      isAdding: false
    };
  }
  onAddButtonClicked = () => {
    this.setState({ isAdding: true });
  };
  componentDidMount() {
    this.props.getAllBooksStart();
  }
  onNewBookNameChanged = event => {
    this.setState({ newBookName: event.target.value });
  };
  onSaveButtonClicked = () => {
    let newBook = { bookName: this.props.newBooknName };
    this.props.addNewBookStart(newBook);
    this.setState({ isAdding: false });
  };

  render() {
    return (
      <div>
        BookPage
        {this.state.isAdding ? (
          <div>
            <input
              value={this.state.newBookName}
              onChange={this.onNewBookNameChanged}
            />
            <button onClick={this.onSaveButtonClicked}>save</button>
          </div>
        ) : null}
        <button onClick={this.onAddButtonClicked}>add</button>
        <BookList />
      </div>
    );
  }
}

const mapStateToProps = store => {};
const mapDispatchToProps = {
  getAllBooksStart,
  addNewBookStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookPage);
