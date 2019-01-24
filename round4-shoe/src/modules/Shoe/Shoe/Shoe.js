import React from 'react';
import { connect } from 'react-redux';

class Shoe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Shoe: props.Shoe
    };
  }

  render() {
    return (
      <div>
        Shoe Works!
        {this.props.shoe.shoeNumber}
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
)(Shoe);
