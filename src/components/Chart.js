// importing react and community library
import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';

class Chart extends Component{

  // set default data on first generation of component
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    return (
      <div className="chart">
        <Radar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Digits dexterity results '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;