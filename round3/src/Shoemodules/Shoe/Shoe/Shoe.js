import React from 'react';
import { connect } from 'react-redux';
import { deleteShoeStart, updateShoeStart } from '../../store/ShoeActions';

class Shoe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Shoe: props.Shoe,
      isUpdating: false
    };
  }
  onDeleteButtonClicked = () => {
    this.props.deleteShoeStart(this.props.shoe.id);
  };
  onUpdateButtonClicked = () => {
    this.setState({ isUpdating: true });
  };
  onSubmitButtonClicked = () => {
    let newShoe = { shoeNumber: this.state.shoeNumber };
    this.props.updateShoeStart(this.props.shoe.id, newShoe);
    this.setState({ isUpdating: false });
  };
  onShoeNumberChanged = event => {
    this.setState({ shoeNumber: event.target.value });
  };

  render() {
    return (
      <div>
        Shoe#:
        {this.props.shoe.shoeNumber}
        {this.state.isUpdating ? (
          <div>
            <input
              value={this.state.shoeNumber}
              onChange={this.onShoeNumberChanged}
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
  deleteShoeStart,
  updateShoeStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shoe);
