import React from 'react';
import { connect } from 'react-redux';

class Cloth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Cloth: props.Cloth,
      clothName: '',
      clothSize: ''
    };
  }

  render() {
    return (
      <div>
        works
        {this.props.cloth.clothName}
        {this.props.cloth.clothSize}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return { Cloths: store.Cloths };
};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cloth);
