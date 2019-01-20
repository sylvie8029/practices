import React from 'react';
import { connect } from 'react-redux';
import BookList from '../BookList/BookList';
import { getAllBooksStart } from '../BookActions';

class BookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getAllBooksStart();
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
const mapDispatchToProps = {
  getAllBooksStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookPage);
