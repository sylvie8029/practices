import React from 'react';
import { connect } from 'react-redux';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Cloth: props.Cloth
    };
  }

  render() {
    return (
      <div>
        Cloth Works!
        {this.props.clothName}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return { Cloth: store.Cloths.Cloth };
};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);
