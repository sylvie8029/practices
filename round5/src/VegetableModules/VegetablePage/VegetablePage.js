import React from 'react';
import { connect } from 'react-redux';
import VegetableList from '../VegetableList/VegetableList';
import {
  addNewVegetableStart,
  getAllVegetablesStart
} from '../store/VegetableActions';
class VegetablePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false
    };
  }

  componentDidMount() {
    this.props.getAllVegetablesStart();
  }
  onAddButtonClicked = () => {
    this.setState({ isAdding: true });
  };
  onOkButtonClicked = () => {
    let newVegetable = {
      vegetableName: this.state.vegetableName,
      vegetableMount: this.state.vegetableMount
    };
    this.props.addNewVegetableStart(newVegetable);
    this.setState({ isAdding: false });
  };
  onVegetableNameChanged = event => {
    this.setState({ vegetableName: event.target.value });
  };
  onVegetableMountChanged = event => {
    this.setState({ vegetableMount: event.target.value });
  };
  render() {
    return (
      <div>
        Vegetables
        {this.state.isAdding ? (
          <div>
            Name:
            <input
              value={this.state.vegetableName}
              onChange={this.onVegetableNameChanged}
            />
            Mount:
            <input
              value={this.state.vegetableMount}
              onChange={this.onVegetableMountChanged}
            />
            <button onClick={this.onOkButtonClicked}>Ok</button>
          </div>
        ) : (
          <button onClick={this.onAddButtonClicked}>Add</button>
        )}
        <VegetableList />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {};
};
const mapDispatchToProps = {
  addNewVegetableStart,
  getAllVegetablesStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VegetablePage);
