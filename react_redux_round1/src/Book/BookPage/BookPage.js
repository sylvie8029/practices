import React from 'react';
import { connect } from 'react-redux';
import BookList from '../BookList/BookList';

class BookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>BookPage</div>
        <div>
          <BookList bookName="book1" />
        </div>
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
)(BookPage);
