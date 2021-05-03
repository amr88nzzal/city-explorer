import React from 'react';
import Form from 'react-bootstrap/Form';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: '',
     
    };
  };
  setLocationName = (e) => {
    this.setState({ locationName: e.target.value })
    console.log(this.state.locationName);
  }
  setData = (e) => {
    e.preventDefault(); 
    this.props.dataFromForm(this.state.locationName)
    console.log(this.state.locationName);

  }

  render() {
    return (
        <Form onSubmit={this.setData}>
          <input onChange={this.setLocationName} type='text' placeholder='city name' />
          <br></br>
          <input type='submit' value='get city' />
        </Form>
    )
  }}
  export default Forms;