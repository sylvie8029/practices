import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ClothPage from './ClothModules/Cloth/ClothPage/ClothPage';
import ShoePage from './Shoemodules/Shoe/ShoePage/ShoePage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <ClothPage />
          <ShoePage />
        </div>
      </Router>
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
)(App);
