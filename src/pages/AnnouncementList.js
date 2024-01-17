import React from 'react';
import { Paper, Typography, Divider } from '@mui/material';
import Dashboard from '../components/dashboard/Dashboard';
// import Announcement from '@mui/icons-material/Announcement';
import Announcement from '../components/dashboard/Announcement';


const announcements = [
  {
    title: 'Important Announcement 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2022-12-01',
  },
  {
    title: 'Upcoming Event',
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2022-12-15',
  },
  // Add more announcements as needed
];

const AnnouncementDisplayPage = () => {
  return (
    <Dashboard>
      <div>
        {announcements.map((announcement, index) => (
          <Announcement key={index} {...announcement} />
        ))}
      </div>
      {/* <Announcement /> */}
    </Dashboard>
  );
};

export default AnnouncementDisplayPage;
