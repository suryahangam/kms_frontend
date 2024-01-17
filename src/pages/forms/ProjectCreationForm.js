import {React, useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Paper, Typography, Grid } from '@mui/material';
import Dashboard from '../../components/dashboard/Dashboard';
import { PROJECT_API } from '../../components/apis/api';

const ProjectCreationForm = () => {

  const navigate = useNavigate();
  const {id} = useParams();

  const [formData, setFormData] = useState({
    project_title: '',
    description: '',
    start_date: '',
    end_date: '',
    project_type: '',
    status: ''
  })

  console.log("id::: ", id);

  useEffect(() => {
    if (id){
      console.log("Getting project details....")
        const fetchProjectData = async () => {
            try{
                const projectUrl = PROJECT_API + `${id}/`
                const projectResponse = await fetch(
                    projectUrl,
                    {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                });
                if (!projectResponse.ok){
                    const responseData = await projectResponse.json();
                    console.error('Error', responseData);
                }
                else {
                    const projectData = await projectResponse.json();
                    console.log("form data:: ", projectData)
                    setFormData(projectData);
                }
                
            } catch (error){
                console.error('Error: ', error)
            }
        };

        fetchProjectData();
    }
  }, [id])

  const handleInputChage = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value});
  }

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('form data: ', formData);
    
    try{
        const apiUrl = id ? PROJECT_API+`${id}/` : PROJECT_API;
        const method = id ? 'PATCH' : 'POST'; 
        const response = await fetch(apiUrl,
        {
            method: method,
            redirect: 'follow',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok){
            const responseData = await response.json();
            console.log("error::: ", responseData);
            // throw new Error('Failed to create project');
        }

        console.log("url", PROJECT_API);
        const responseData = await response.json();
        console.log('response: ', responseData);
        console.log('Project created successfully');
        navigate('/project-list');
    }
    catch(error){
        console.error('Error creating project:', error);
    }

  };

  return (
    <Dashboard>
    <Paper elevation={3} style={{ padding: 20, margin: 20, borderRadius: 10 }}>
      <Typography variant="h6" gutterBottom style={{ color: '#3B71CA' }}>
        {id ? 'Update Project' : 'Create Project' }
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="project_title"
              label="Project Title"
              variant="outlined"
              required
              value={formData.project_title}
              onChange={handleInputChage}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="description"
              label="Description"
              variant="outlined"
              multiline
              rows={3}
              value={formData.description}
              onChange={handleInputChage}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="start_date"
              label="Start Date"
              type="date"
              variant="outlined"
              required
              InputLabelProps={{
                shrink: true,
              }}
              value={formData.start_date}
              onChange={handleInputChage}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="End Date"
              name="end_date"
              type="date"
              variant="outlined"
              required
              value={formData.end_date}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleInputChage}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Project Type</InputLabel>
              <Select
                label="Project Type"
                name="project_type"
                value={formData.project_type}
                onChange={handleInputChage}
                required
              >
                <MenuItem value="Media Relation">Media Relation</MenuItem>
                <MenuItem value="Crisis Communication">Crisis Communication</MenuItem>
                <MenuItem value="Social Media Management">Social Media Management</MenuItem>
                <MenuItem value="Event Planning and Management">Event Planning and Management</MenuItem>
                <MenuItem value="Brand Positioning">Brand Positioning</MenuItem>
                <MenuItem value="Influencer and Celebrity Partnerships">Influencer and Celebrity Partnerships</MenuItem>
                <MenuItem value="Content Creation">Content Creation</MenuItem>
                <MenuItem value="Community Engagement">Community Engagement</MenuItem>


              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Status</InputLabel>
              <Select
                label="Status"
                name="status"
                value={formData.status}
                onChange={handleInputChage}
                required
              >
                <MenuItem value="not_started">Not Started</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
                <MenuItem value="abandoned">Abandoned</MenuItem>
                <MenuItem value="on_hold">On Hold</MenuItem>

              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" style={{ backgroundColor: '#3B71CA', color: '#fff' }}>
              {id ? 'Update Project' : 'Create Project' }
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
    </Dashboard>
  );
};

export default ProjectCreationForm;



