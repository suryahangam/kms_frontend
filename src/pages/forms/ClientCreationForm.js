import {React, useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Paper, Typography, Grid } from '@mui/material';
import Dashboard from '../../components/dashboard/Dashboard';
import { PROJECT_API } from '../../components/apis/api';
import { CLIENT_API } from '../../components/apis/api';

const ClientCreationForm = () => {

  const navigate = useNavigate();
  const {id} = useParams();

  const [formData, setFormData] = useState({
    name: '',
    sector: '',
    company_email: '',
    company_phone: '',
    post_code: '',
    address1: '',
    address2: '',
    company_size: '',
    key_personnel: '',
    company_history: '',
    contactTerm: '',
    company_logo: null,
  });

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

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value});
  }

  const handleFileChange = (e) => {
    console.log("File change triggered...")
    const file = e.target.files[0];
    console.log("File::: ", file)
    setFormData({ ...formData, company_logo: file});
  }

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('form data: ', formData);
    
    try{
        
        const formDataForFile = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataForFile.append(key, value)
        })
        // formDataForFile.append('company_logo', formData.company_logo);
        
        // const formDataForFields = { ...FormData };
        // delete formDataForFields.company_logo;
        const apiUrl = CLIENT_API;
        const response = await fetch(apiUrl,
        {
            method: 'POST',
            redirect: 'follow',
            headers: {
                'Accept': 'application/json',
                // 'Content-Type': 'multipart/form-data'
            },
            // body: JSON.stringify(formData)
            body: formDataForFile,
        });

        if (!response.ok){
            const responseData = await response.json();
            console.log("error::: ", responseData);
            // throw new Error('Failed to create project');
        }

        const responseData = await response.json();
        console.log('response: ', responseData);
        console.log('Project created successfully');
        navigate('/clients');
    }
    catch(error){
        console.error('Error creating project:', error);
    }

  };

  return (
    <Dashboard>
    <Paper elevation={3} style={{ padding: 20, margin: 20, borderRadius: 10 }}>
      <Typography variant="h6" gutterBottom style={{ color: '#3B71CA' }}>
        Add Client
      </Typography>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
      <Grid container spacing={3}>
        {/* Add other form fields based on your model */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            fullWidth
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Sector</InputLabel>
            <Select
              label="Sector"
              name="sector"
              value={formData.sector}
              onChange={handleChange}
              required
            >
                <MenuItem value="Technology">Technology</MenuItem>
                <MenuItem value="Finance">Finance</MenuItem>
                <MenuItem value="Healthcare">Healthcare</MenuItem>
                <MenuItem value="Retail">Retail</MenuItem>
              {/* {SECTOR_CHOICES.map((sector) => (
                <MenuItem key={sector} value={sector}>
                  {sector}
                </MenuItem>
              ))} */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Company Email"
            fullWidth
            required
            name="company_email"
            value={formData.company_email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Company Phone"
            fullWidth
            required
            name="company_phone"
            value={formData.company_phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Post Code"
            fullWidth
            required
            name="post_code"
            value={formData.post_code}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Address 1"
            fullWidth
            required
            name="address1"
            value={formData.address1}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Address 2"
            fullWidth
            required
            name="address2"
            value={formData.address2}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Company Size"
            fullWidth
            required
            name="company_size"
            value={formData.company_size}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Key Personnel"
            fullWidth
            required
            name="key_personnel"
            value={formData.company_email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
              fullWidth
              name="company_history"
              label="History"
              variant="outlined"
              multiline
              rows={3}
              value={formData.company_history}
              onChange={handleChange}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
                <InputLabel>Contract Term</InputLabel>
                <Select
                label="Term"
                name="contactTerm"
                value={formData.contactTerm}
                onChange={handleChange}
                required
                >
                <MenuItem value="6">6 Months</MenuItem>
                <MenuItem value="9">9 Months</MenuItem>
                <MenuItem value="12">12 Months</MenuItem>
                <MenuItem value="24">24 Months</MenuItem>
                <MenuItem value="36">36 Months</MenuItem>
                <MenuItem value="0">Unlimited</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
            <InputLabel>Company Logo</InputLabel>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
    </Paper>
    </Dashboard>
  );
};

export default ClientCreationForm;



