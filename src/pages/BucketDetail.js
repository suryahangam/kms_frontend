import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';

// import TableRow from '@mui/material/TableRow';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'; // Placeholder action icon
import EditIcon from '@mui/icons-material/Edit';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { Paper } from '@mui/material';

import Dashboard from '../components/dashboard/Dashboard';

const FileTable = () => {
  const data = [
    { title: 'Folder 1', uploadedBy: 'User A', uploadedDate: '2022-01-01', type: 'folder' },
    { title: 'File 1', uploadedBy: 'User B', uploadedDate: '2022-01-02', type: 'file' },
    // Add more data as needed
  ];

  return (
    <Dashboard>
        <Paper sx={{ p: 2, m:2, display: 'flex', flexDirection: 'column' }}>
            <Table style={{margin:0}}>
            <TableHead>
            <TableRow>
                <TableCell style={{fontWeight: 'bold'}}>Type</TableCell>
                <TableCell style={{fontWeight: 'bold'}}>Title</TableCell>
                <TableCell style={{fontWeight: 'bold'}}>Uploaded By</TableCell>
                <TableCell style={{fontWeight: 'bold'}}>Uploaded Date</TableCell>
                <TableCell style={{fontWeight: 'bold'}}>Type</TableCell>
                <TableCell style={{fontWeight: 'bold'}}>Action</TableCell>
            </TableRow>

            </TableHead>
            <TableBody>
                {data.map((item, index) => (
                <TableRow key={index}>
                    <TableCell>
                    {item.type === 'folder' ? (
                        <FolderIcon color="primary" />
                    ) : (
                        <InsertDriveFileIcon color="secondary" />
                    )}
                    </TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.uploadedBy}</TableCell>
                    <TableCell>{item.uploadedDate}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>
                     {/* Edit action button */}
                        <IconButton color="primary" aria-label="edit">
                        <EditIcon />
                        </IconButton>
                        {/* Download action button */}
                        <IconButton color="primary" aria-label="download">
                        <CloudDownloadIcon />
                        </IconButton>
                        {/* Placeholder delete action button */}
                        <IconButton color="secondary" aria-label="delete">
                        <DeleteIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </Paper>
    </Dashboard>
  );
};

export default FileTable;
