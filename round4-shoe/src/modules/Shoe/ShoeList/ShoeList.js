import React from 'react';
import { connect } from 'react-redux';
import Shoe from '../Shoe/Shoe';

class ShoeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    console.log(`this.props.Shoes:`, this.props.Shoes);
  }
  componentDidMount() {
    console.log(`this.props.Shoes:`, this.props.Shoes);
  }
  componentWillReceiveProps(newProps) {
    console.log(`newProps.Shoes :`, newProps.Shoes);
    this.setState({ Shoes: newProps.Shoes });
  }
  render() {
    return (
      <div>
        ShoeList Works!
        {this.props.Shoes.Shoes.map((s, index) => {
          return <Shoe shoe={s} key={index} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(`store.Shoes:`, store.Shoes);
  return {
    Shoes: store.Shoes
  };
};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoeList);
