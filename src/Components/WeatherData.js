import React from 'react'

export class weatherData extends React.Component {

  render() {
    console.log(this.props.weatherInfo)
    return (
      this.props.weatherInfo.map(data => {
        // console.log(data);
        return (
          <div>
            <p>{data.date}</p>
            <p>{data.description}</p>
            <p>----------------</p>
          </div>)
      })
    )
  }
}

export default weatherData;
