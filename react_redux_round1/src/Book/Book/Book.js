import React from 'react';
import { connect } from 'react-redux';
import './book.scss';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // bookName: this.props.bookName
    };
  }
  onDeleteButtonClicked = () => {};
  onEditButtonClicked = () => {};
  render() {
    return (
      <div className="book">
        <div>{this.props.book.bookName}</div>
        <button onClick={this.onDeleteButtonClicked}>delete</button>
        <button onClick={this.onEditButtonClicked}>edit</button>
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
)(Book);
