import * as React from 'react';
import { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography, Box } from '@mui/material';
import {Link as RouterLink}from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'; // Placeholder action icon
import EditIcon from '@mui/icons-material/Edit';


import Title from '../components/dashboard/Title';
import Dashboard from '../components/dashboard/Dashboard';
import SearchComponent from '../components/dashboard/Search';
import CustomPagination from '../components/dashboard/Pagination';
import DeleteButton from '../components/dashboard/DeleteButton';

import { PROJECT_API } from '../components/apis/api';


export default function ProjectList() {

    const [projects, setProjects] = useState([]);
    // Project list api call

    const fetchProjects = async (searchTerm) => {
        try {
            let url;
            if (searchTerm){
                url = PROJECT_API + `?search=${searchTerm}`;
            }
            else {
                url = PROJECT_API;
            }
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            setProjects(data);

        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);


    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handlePageChange = (page) => {
        // Add your logic to fetch and display data for the selected page
        setCurrentPage(page);
    };

    const handleDelete = (deletedItemId) => {
        fetchProjects();
    }

    const handleSearch = (searchTerm) => {
        fetchProjects(searchTerm)
    }

    const BoldTableCell = ({ children }) => (
        <TableCell>
          <Typography variant="subtitle1" fontWeight="bold">
            {children}
          </Typography>
        </TableCell>
      );

  return (

    <Dashboard>
    {/* <React.Fragment> */}
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
    
        <Title>Project List</Title>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <SearchComponent onSearch={handleSearch} />
        {/* Create New Project Button */}
        <Link to="/project-create" style={{ textDecoration: 'none', color: 'inherit', marginRight: '30px' }}>
        <Button
            variant="contained"
            color="primary"
            style={{ marginBottom: '20px', width: '100%' }}
            to="/project-create"
            component={RouterLink}
            //   onClick={() => {
            //     // Add your logic to handle the "Create New Project" button click
            //     console.log('Create New Project button clicked');
            //   }}
            >
            Create New Project
            </Button>
            </Link>
        </div>

      <Table size="small">
        <TableHead>
          <TableRow>
            <BoldTableCell>Project ID</BoldTableCell>
            <BoldTableCell>Title</BoldTableCell>
            <BoldTableCell>Description</BoldTableCell>
            <BoldTableCell>Project Type</BoldTableCell>
            <BoldTableCell>Start Date</BoldTableCell>
            <BoldTableCell>End Date</BoldTableCell>
            <BoldTableCell>Status</BoldTableCell>
            <BoldTableCell>Action</BoldTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <TableRow>
            <TableCell>{project.project_id}</TableCell>
              <TableCell>{project.project_title}</TableCell>
              <TableCell>{project.description}</TableCell>
              <TableCell>{project.project_type}</TableCell>
              <TableCell>{project.start_date}</TableCell>
              <TableCell>{project.end_date}</TableCell>
              <TableCell>{project.status}</TableCell>
              <TableCell>
                
              <Box sx={{ display: 'flex' }}>
                <Button to={`/project-edit/${project.id}`} color="primary" aria-label="edit" component={RouterLink}>
                <EditIcon />
                </Button>
                <DeleteButton onDelete={handleDelete} itemId={project.id} />
                </Box>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      </Paper>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Projects
      </Link> */}
    {/* </React.Fragment> */}
    </Dashboard>
  );
}