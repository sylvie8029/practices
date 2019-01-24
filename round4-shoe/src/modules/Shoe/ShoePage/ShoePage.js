import React from 'react';
import { connect } from 'react-redux';
import ShoeList from '../ShoeList/ShoeList';
import {
  getAllShoesStart,
  addNewShoeStart
} from '../../Shoe/store/ShoeActions';

class ShoePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false,
      shoeNumber: ''
    };
  }
  componentDidMount() {
    this.props.getAllShoesStart();
  }
  onAddButtonClicked = () => {
    this.setState({ isAdding: true });
  };
  onShoeNumberChanged = event => {
    this.setState({ shoeNumber: event.target.value });
  };
  onOkButtonClicked = () => {
    let newShoe = { shoeNumber: this.state.shoeNumber };
    this.props.addNewShoeStart(newShoe);
    this.setState({ isAdding: false });
  };
  render() {
    return (
      <div>
        Shoes Shopping Car!!
        {this.state.isAdding ? (
          <div>
            Shoe#:
            <input
              value={this.state.shoeNumber}
              onChange={this.onShoeNumberChanged}
            />
            <button onClick={this.onOkButtonClicked}>OK</button>
          </div>
        ) : null}
        <button onClick={this.onAddButtonClicked}>Add New </button>
        <ShoeList />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {};
};
const mapDispatchToProps = {
  getAllShoesStart,
  addNewShoeStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoePage);
