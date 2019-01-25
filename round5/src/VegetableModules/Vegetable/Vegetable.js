import React from 'react';
import { connect } from 'react-redux';

class Vegetable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.vegetable.vegetableName}
        {this.props.vegetable.vegetableMount}
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
)(Vegetable);
