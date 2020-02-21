
import React from "react";
import { connect } from "react-redux";
import ExampleClass2 from "./ExampleClass2"

class ExampleClassComponent extends React.Component {

  stateValues = {}


  componentDidMount() {
    fetch("randomApiCall")
      .then(responseData =>
        this.setState({
          apiData: responseData
        })
      )
  }


  contentToRender = () => {
    
    let itemArray = ["bob", "steve"]
    if (this.state.apiData.length > 0) {
      let renderContent = itemArray.map(index => {
        return (
          <div>Hello {index}</div>
        )
      })
      return renderContent
    }
    return "NO DATA FOUND"
  }


  render() {


    return (
      <div>
        {questions}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.addPersonReducer
  };
};


export default connect(mapStateToProps, {})(ExampleClassComponent);






