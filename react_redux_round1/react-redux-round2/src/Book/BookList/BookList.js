import React from 'react';
import { connect } from 'react-redux';
import Book from '../Book/Book';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        BookList Works!
        <Book />
      </div>
    );
  }
}

const mapStateToProps = store => {
  // return newBooks:this.state.newBooks
};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
