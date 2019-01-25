import React from 'react';
import { connect } from 'react-redux';
import VegetableList from '../VegetableList/VegetableList';

class VegetablePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        VegetablePage Works!
        <VegetableList />
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
)(VegetablePage);
