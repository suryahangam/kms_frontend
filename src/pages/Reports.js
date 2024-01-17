import React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableRow from '@mui/material/TableRow';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';

// import TableRow from '@mui/material/TableRow';
// import FolderIcon from '@mui/icons-material/Folder';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete'; // Placeholder action icon
// import EditIcon from '@mui/icons-material/Edit';
// import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
// import { Paper } from '@mui/material';

import Dashboard from '../components/dashboard/Dashboard';
import Histogram from '../components/dashboard/charts/HistogramComponent';
import PieChartComponent from '../components/dashboard/charts/PieChartComponent';

const data = [
    { name: 'Category A', value: 20 },
    { name: 'Category B', value: 30 },
    { name: 'Category C', value: 50 },
];

const Reports = () => {
//   const data = [
//     { title: 'Folder 1', uploadedBy: 'User A', uploadedDate: '2022-01-01', type: 'folder' },
//     { title: 'File 1', uploadedBy: 'User B', uploadedDate: '2022-01-02', type: 'file' },
//     // Add more data as needed
//   ];

  return (
    <Dashboard>
        <Histogram data={data} dataKey="value" xAxisLabel="Categories" yAxisLabel="Values" />
        <PieChartComponent data={data} dataKey="value" />
    </Dashboard>
  );
};

export default Reports;
