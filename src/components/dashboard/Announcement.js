import React from 'react';
import { Paper, Typography, Divider } from '@mui/material';
import Title from './Title';


const Announcement = ({ title, content, date }) => {
  return (
    <>
    {/* // <Paper elevation={3} style={{ padding: 20, marginBottom: 20, borderRadius: 10 }}> */}
    <Paper sx={{ p: 2, m:2, display: 'flex', flexDirection: 'column' }}>
    {/* <Title>Announcements</Title> */}
      <Typography variant="h6" gutterBottom style={{ color: '#3B71CA' }}>
        {title}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary" gutterBottom>
        {date}
      </Typography>
      <Divider style={{ marginBottom: 10 }} />
      <Typography>
        {content}
      </Typography>
        </ Paper>
    </>
  );
};

export default Announcement;
