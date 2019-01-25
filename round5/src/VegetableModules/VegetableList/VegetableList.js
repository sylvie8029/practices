import React from 'react';
import { connect } from 'react-redux';
import Vegetable from '../Vegetable/Vegetable';

class VegetableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillReceiveProps(newProps) {
    this.setState({ Vegetables: newProps.Vegetables.Vegetables });
  }
  render() {
    return (
      <div>
        VegetableList
        {this.props.Vegetables.map((v, index) => {
          return <Vegetable vegetable={v} key={index} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return { Vegetables: store.Vegetables.Vegetables };
};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VegetableList);
