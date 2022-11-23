import { useState, useEffect } from "react";
import axios from "axios";
import Chart from "./Chart";

import LineChartInegi from "./LineChart";
import LineChartEstates from "./LineChartEstates";
import LineChartViv from "./LineChartViv";
function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://gaia.inegi.org.mx/wscatgeo/mgee/`
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  console.log(data.datos);

  

  return (
    <>
     <h1>INEGI api</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <Chart data={data.datos}/>
      <LineChartInegi data={data.datos}/>
      <LineChartEstates data={data.datos}/>
      <LineChartViv data={data.datos}/>
      
    </>
  )
}

export default App
