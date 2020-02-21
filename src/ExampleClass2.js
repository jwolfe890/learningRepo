
import React from "react";
import ConnectedComponent from "./ConnectedComponent"

class Example2 extends React.Component {
  
  render() {
    return (
      <div>
        <h1>
            {this.props.greeting}
        </h1>
        {/* <ConnectedComponent /> */}
      </div>
    );
  }
}

export default Example2;