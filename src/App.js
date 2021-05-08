import React from 'react';
import axios from 'axios';
import Form from './Components/form';
import WeatherData from './Components/WeatherData';
require('dotenv').config();
class App extends React.Component {
  constructor (props)
  {
    super(props);
    this.state = {
      data : '',
      query:'',
      show:false,
      reqServer:[]
    };
  };
  getLoc = async (e) =>{
    this.setState({
      query: await e})
      console.log(e);
      const serverUrl=process.env.REACT_APP_URL;
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.React_App_api_Key}&q=${this.state.query}&format=json`;
      let req={};
      let reqMyServer=[];
      const port = process.env.REACT_APP_PORT;
      try{req = await axios.get(url)
        reqMyServer = await axios.get(serverUrl)
      } 
      catch(ex) {alert('Wrong location Input\n'+ex); return };
      this.setState ({
        data: req.data[0],
        reqServer:reqMyServer.data,
        show:true,
      })
      console.log(this.state.reqServer);
    
  };
  
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
        {this.state.show && <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.React_App_api_Key}&q&center=${this.state.data.lat},${this.state.data.lon}&zoom=10`} alt='' style={{ width: '350px'}} />}
        < WeatherData 
        weatherInfo = {this.state.reqServer} />
      </div>
    )
  }
}
export default App;