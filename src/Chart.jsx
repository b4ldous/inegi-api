import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";

const Chart = ({data}) => {
  return (
    <>
    <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 50,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nom_abrev" />
          <YAxis domain={[0, 20000000]} />
          <Tooltip />
          <Legend />
          
          <Bar dataKey="pob" fill="#e0a37b" />
          <Bar dataKey="pob_fem" fill="#e07bd9" />
          <Bar dataKey="pob_mas" fill="#7b82e0" />
        </BarChart>
      </ResponsiveContainer>
    
    
    
    </>
  )
}

export default Chart