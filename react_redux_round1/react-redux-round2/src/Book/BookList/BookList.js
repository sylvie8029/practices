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
        BookList
        <div>
          {this.props.Books.map((b, index) => {
            return <Book book={b} key={index} />;
            //map 中加入key的值，与实际值写在一起，用空格隔开即可
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(`store:`, store);
  return { Books: store.Books };
};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
