import { Component } from "react";
import { Actions } from "react-native-router-flux";

export default class redirectComponent extends Component {
  componentDidMount() {
    const redirectScene = this.props.redirectTo;
    Actions[redirectScene]();
  }

  render() {
    return null;
  }
}
