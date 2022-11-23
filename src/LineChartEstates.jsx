import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer} from "recharts";
const LineChartEstates = ({data}) => {
  return (
    <>
      <h2>Line chart</h2>
      <p>Población por estado: Hombres-mujeres</p>

      <ResponsiveContainer width="100%" height={400}>
      <LineChart margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }} data={data}>
         
         <Line type="monotone" dataKey="pob_fem" stroke="#e07bd9" />
         <Line type="monotone" dataKey="pob_mas" stroke="#7b82e0" />
         
         <CartesianGrid stroke="#ccc" />
         <XAxis dataKey="nom_abrev"  tickCount={0} />
         <YAxis type="number" domain={[0, 10000000]} />
         <Tooltip />
 <Legend />
       </LineChart>


      </ResponsiveContainer>
      
        
     
    </>
  )
}

export default LineChartEstates