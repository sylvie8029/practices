import React from 'react';
import { connect } from 'react-redux';

class ClothPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>ClothPage Works!</div>;
  }
}

const mapStateToProps = store => {return {}};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClothPage);