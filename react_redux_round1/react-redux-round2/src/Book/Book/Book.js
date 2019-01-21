import React from 'react';
import { connect } from 'react-redux';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>Book Works!</div>;
  }
}

const mapStateToProps = store => {};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);
