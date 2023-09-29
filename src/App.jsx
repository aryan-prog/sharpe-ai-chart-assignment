import { useState, useEffect } from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import './App.css'

function App() {

  const [info, setInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://api.llama.fi/summary/fees/lyra?dataType=dailyFees';

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        setInfo(responseData);
        // console.log(info);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, [info]);

  // Extract timestamps and values from apidata
  const timestamps = info?.totalDataChart?.map((dataPoint) => dataPoint[0]) || [];
  const values = info?.totalDataChart?.map((dataPoint) => dataPoint[1]) ||[] ;


  // To convert timestamps to human-readable date format
  const formattedDates = timestamps.map((timestamp) => {
    const date = new Date(timestamp * 1000); // Convert from Unix timestamp to JavaScript timestamp
    return date.toDateString(); // Convert to human-readable date format
  });



  // Chart configuration
  const chartData = {
    labels: formattedDates, // Use formatted dates as x-axis labels
    datasets: [
      {
        label: 'Total Data Chart',
        data: values, // Use values as y-axis data
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)', // Fill color (blue with opacity)
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className='App' style={{ width: 1500 }}>
      <h1>Lyra Total Data Chart</h1>
      <Line data={chartData} />;
    </div>
  )
}

export default App
