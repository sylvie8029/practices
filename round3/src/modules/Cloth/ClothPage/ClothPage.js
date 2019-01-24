import React from 'react';
import { connect } from 'react-redux';
import ClothList from '../ClothList/ClothList';
import { getAllClothsStart, addNewClothStart } from '../../store/ClothActions';

class ClothPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false,
      Size: '',
      clothName: ''
    };
  }

  componentDidMount() {
    this.props.getAllClothsStart();
  }
  onAddNewButtonClicked = () => {
    this.setState({ isAdding: true });
  };
  onClothNameChanged = event => {
    this.setState({ newClothName: event.target.value });
  };
  onClothSizeChanged = event => {
    this.setState({ newSize: event.target.value });
  };
  onOkButtonClicked = () => {
    this.setState({ isAdding: false });
    let newCloth = {
      newClothName: this.state.newClothName,
      newSize: this.state.newSize
    };
    this.props.addNewClothStart(newCloth);
  };
  render() {
    return (
      <div>
        ClothShopping
        <button onClick={this.onAddNewButtonClicked}>add new</button>
        {this.state.isAdding ? (
          <div>
            Name
            <input
              value={this.state.ClothName}
              onChange={this.onClothNameChanged}
            />
            Size
            <input
              value={this.state.ClothSize}
              onChange={this.onClothSizeChanged}
            />
            <button onClick={this.onOkButtonClicked}>Ok</button>
          </div>
        ) : null}
        <ClothList />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {};
};
const mapDispatchToProps = {
  getAllClothsStart,
  addNewClothStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClothPage);
