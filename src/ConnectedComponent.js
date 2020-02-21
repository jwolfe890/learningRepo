
import React from "react";
import { connect } from "react-redux";
import { addPerson } from "./actions/addPerson"

class ExampleClassComponent extends React.Component {

  state = {
    firstname: "",
    superPower: ""
  };

    updateFirstName = (event) => {
        this.setState({
            firstname: event.target.value
        })
    } 

    updatePersonReducer = () => {
        this.props.addPerson(this.state.firstname)
    }



    render() {
            return (
            <div>
                First Name: <input type="text" onChange={event => this.updateFirstName(event)} value={this.state.firstname} />
                <br />
                {/* Super Power: <input type="text" onChange={event => this.updateSuperPower(event)} value={this.state.lastname}  />
                <br /> */}
                <input onClick={this.updatePersonReducer} type="submit" />
            </div>
            );
    }
}


const mapDispatchToProps = {
    addPerson
  };

export default connect(null, mapDispatchToProps)(ExampleClassComponent);


