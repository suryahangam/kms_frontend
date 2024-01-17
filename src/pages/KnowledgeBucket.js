// DynamicGridsComponent.js
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FolderIcon from '@mui/icons-material/Folder';
import Dashboard from '../components/dashboard/Dashboard';

import CustomPagination from '../components/dashboard/Pagination';
import SearchComponent from '../components/dashboard/Search';

const KnowledgeBucket = () => {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 6', 'Item 8'];

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handlePageChange = (page) => {
        // Add your logic to fetch and display data for the selected page
        setCurrentPage(page);
      };

  return (
    <Dashboard>
        {/* <SearchComponent /> */}
        <Grid container spacing={1} style={{margin:2}}>
        {items.map((item, index) => (
            <Grid key={index} item xs={12} md={6} lg={3}>

            {/* <Paper
              style={{ padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              component={Link} // Make the Paper component a Link
              to={`/detail/${index + 1}`} // Define the link path (you can customize this based on your routing setup)
            > */}

            <Paper style={{ padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                component={Link} to={`/bucket-detail/${item}`}>
                <FolderIcon style={{ fontSize: 50, marginBottom: 10 }} />
                {`${item}`}
            </Paper>
            </Grid>
        ))}
        </Grid>
        <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Dashboard>
  );
};

export default KnowledgeBucket;
