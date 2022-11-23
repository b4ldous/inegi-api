import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const LineChartInegi = ({ data }) => {
  return (
    <>
      <h2>Line chart</h2>
      <p>Población por estado</p>

      <ResponsiveContainer width="100%" height={400}>
      <LineChart margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }} data={data}>
          <Line type="monotone" dataKey="pob" stroke="#e0a37b" />
          
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="nom_abrev"  tickCount={0} />
          <YAxis type="number" domain={[0, 20000000]} />
          <Tooltip />
  <Legend />
        </LineChart>



      </ResponsiveContainer>
      
       
     
    </>
  );
};

export default LineChartInegi;
