import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { Typography, Paper } from '@mui/material';

const PieChartComponent = ({ data, dataKey }) => {
  return (
    <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
      <Typography variant="h6" gutterBottom>
        Pie Chart
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie data={data} dataKey={dataKey} nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#be4d25" label />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default PieChartComponent;
