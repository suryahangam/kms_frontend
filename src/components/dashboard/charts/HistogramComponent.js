import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography, Paper } from '@mui/material';


const Histogram = ({ data, dataKey, colors, xAxisLabel, yAxisLabel }) => {
  return (
    <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
      <Typography variant="h6" gutterBottom>
        Histogram
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxisLabel} />
          <YAxis label={{ value: yAxisLabel, angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          {/* {data.map((entry, index) => (
            <Bar key={index} dataKey={dataKey} fill={colors[index % colors.length]} />
          ))} */}
          
          <Bar dataKey={dataKey} fill="#96be25" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default Histogram;
