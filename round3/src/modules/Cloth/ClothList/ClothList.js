import React from 'react';
import { connect } from 'react-redux';
import Cloth from '../Cloth/Cloth';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(newProps) {
    this.setState({ Cloths: newProps.Cloths.Cloths });
  }

  render() {
    return (
      <div>
        {this.props.Cloths.map((c, index) => {
          return <Cloth cloth={c} key={index} />;
          //map 中加入key的值，与实际值写在一起，用空格隔开即可
        })}

        <Cloth />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return { Cloths: store.Cloths.Cloths };
};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
