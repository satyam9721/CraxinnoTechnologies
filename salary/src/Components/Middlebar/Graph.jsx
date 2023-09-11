
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import "./Style.css"
import { connect } from 'react-redux';

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function Graph({ displayedBalance }) {
  const [chartData, setChartData] = useState({
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
    
    datasets: [
      {label: 'Salary',
      data: [{
       
        y: 6000,
     
      }],
       
        
        backgroundColor: 'aqua',
        borderColor: 'white',
        borderWidth: 0,
      }
    ]
  });
 

  useEffect(() => {
    // Update the chart data when displayedBalance changes
    const newChartData = {
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
          data: [displayedBalance, 0, , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        }
      ]
    };setChartData(newChartData);
}, [displayedBalance]);


  


  const options = {};


  return (
    <div >
         <div className='container'>
      <h2>Initial Balance: {displayedBalance}</h2>
     
      <label htmlFor="monthSelect">
      Monthly Payments:
      <input type="text" />
        </label>
        <h5>Balance of accounts after a number of months</h5>
       
        </div>



      <div
        style={{
            marginTop:'70px',
            marginLeft:'300px',
          padding: '40px',
          width: '40%',
         
        
        }}
      >
        <Bar
          data={chartData}
          options={options}
        />
      </div>

    </div>

   
  );
}


const mapStateToProps = (state) => ({
    displayedBalance: state.displayedBalance, // Map displayedBalance from Redux state to props
  });
  
  export default connect(mapStateToProps)(Graph); 

