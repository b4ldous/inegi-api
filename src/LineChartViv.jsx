import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const LineChartViv = ({data}) => {
  return (
    <>
    <h2>LineChart</h2>
    <p>Población vivienda</p>
    <ResponsiveContainer width="100%" height={400}>
    <LineChart margin={{ top: 5, right: 20, bottom: 5, left: 50 }} data={data}>
          <Line type="monotone" dataKey="pob" stroke="#e0a37b" />
          <Line type="monotone" dataKey="viv" stroke="#0ef974" />
          
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="nom_abrev"  tickCount={0} />
          <YAxis type="number" domain={[0, 20000000]} />
          <Tooltip />
  <Legend />
        </LineChart>


      </ResponsiveContainer>
    
    
    
    </>
  )
}

export default LineChartViv