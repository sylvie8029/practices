import React from 'react';
import { connect } from 'react-redux';
import { deleteClothStart, updateClothStart } from '../../store/ClothActions';

class Cloth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Cloth: props.Cloth,
      isUpdating: false
    };
  }
  onDeleteButtonClicked = () => {
    this.props.deleteClothStart(this.props.cloth.id);
  };
  onUpdateButtonClicked = () => {
    this.setState({ isUpdating: true });
  };
  onSubmitButtonClicked = () => {
    let newCloth = {
      clothName: this.state.clothName,
      clothSize: this.state.clothSize
    };
    {
      this.props.updateClothStart(this.props.cloth.id, newCloth);
    }
    this.setState({ isUpdating: false });
  };
  onClothNameChanged = event1 => {
    this.setState({ clothName: event1.target.value });
  };
  onClothSizeChanged = event2 => {
    this.setState({ clothSize: event2.target.value });
  };

  render() {
    return (
      <div>
        ClothName:
        {this.props.cloth.clothName}
        ClothSize:
        {this.props.cloth.clothSize}
        {this.state.isUpdating ? (
          <div>
            Name：
            <input
              value={this.state.clothName}
              onChange={this.onClothNameChanged}
            />
            Size:
            <input
              value={this.state.clothSize}
              onChange={this.onClothSizeChanged}
            />
            <button onClick={this.onSubmitButtonClicked}>Submit</button>
          </div>
        ) : (
          <button onClick={this.onUpdateButtonClicked}>update</button>
        )}
        <button onClick={this.onDeleteButtonClicked}>delete</button>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {};
};
const mapDispatchToProps = {
  deleteClothStart,
  updateClothStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cloth);
