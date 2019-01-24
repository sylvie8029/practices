import React from 'react';
import { connect } from 'react-redux';
import ClothList from '../ClothList/ClothList';
import { getAllClothsStart, addNewClothStart } from '../../store/ClothActions';

class ClothPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false,
      clothSize: '',
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
    this.setState({ clothName: event.target.value });
  };
  onClothSizeChanged = event => {
    this.setState({ clothSize: event.target.value });
  };
  onOkButtonClicked = () => {
    let newCloth = {
      clothName: this.state.clothName,
      clothSize: this.state.clothSize
    };
    this.props.addNewClothStart(newCloth);
    this.setState({ isAdding: false });
  };
  render() {
    return (
      <div>
        ClothShopping
        <button onClick={this.onAddNewButtonClicked}>add new</button>
        <div>
          {this.state.isAdding ? (
            <div>
              Name
              <input
                value={this.state.clothName}
                onChange={this.onClothNameChanged}
              />
              Size
              <input
                value={this.state.clothSize}
                onChange={this.onClothSizeChanged}
              />
              <button onClick={this.onOkButtonClicked}>Ok</button>
            </div>
          ) : null}
        </div>
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
