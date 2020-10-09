import React, { Component } from "react";
import {Container} from './MyComponent.styled';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as myComponentActions from "../../store/myComponent/actions";
export default class MyComponent extends Component {
  render() {
    return <Container>MyComponent</Container>;
  }
}
// export default connect(
//     ({ myComponent }) => ({ ...myComponent }),
//     dispatch => bindActionCreators({ ...myComponentActions }, dispatch)
//   )( myComponent );