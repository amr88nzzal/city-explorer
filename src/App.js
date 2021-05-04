import React from 'react';
import axios from 'axios';
import Form from './Components/form';
require('dotenv').config();
class App extends React.Component {
  constructor (props)
  {
    super(props);
    this.state = {
      data : '',
      query:'',
      show:false
    };
  }
  getLoc = async (e) =>{
    this.setState({
    query: await e})
    console.log(e);
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.React_App_api_Key}&q=${this.state.query}&format=json`;
    let req={};
    try{req = await axios.get(url) } 
    catch {alert('Wrong location Input'); return };
    this.setState ({
      data: req.data[0],
      show:true

    })
  };
// updateQuery = (e) => {
//   });
// }
  render() {
    // 
    return (
      <div>
        <h1>City Explorer</h1>
        < Form dataFromForm={this.getLoc}/>
        <p>
          {this.state.data.display_name} <br />
          {this.state.data.lat} / {this.state.data.lon}
        </p>
        <br/>
        {this.state.show && <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.data.lat},${this.state.data.lon}&zoom=10`} alt='' style={{ width: '350px'}} />}
      </div>
    )
  }
}
export default App;