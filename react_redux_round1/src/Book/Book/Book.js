import React from 'react';
import { connect } from 'react-redux';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onDeleteButtonClicked = () => {};
  onEditButtonClicked = () => {};
  render() {
    return (
      <div>
        {this.props.bookName}
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
