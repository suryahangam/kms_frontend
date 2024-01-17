import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems, mainItems } from './listItems';
import Chart from './Chart';
// import Deposits from './stats/Deposits';
import Orders from './Orders';
import ProjectStat from './stats/ProjectsStat';
import ClientStat from './stats/ClientStat';
import KnowledgeStat from './stats/KnowledgeStat';
import RewardStat from './stats/RewardStat';
import RecentProjectList from './RecentProjects';
import Announcement from './Announcement';
import Dashboard from './Dashboard';
import Title from './Title';

import Histogram from './charts/HistogramComponent';
import PieChartComponent from './charts/PieChartComponent';
import { HistorySharp } from '@mui/icons-material';


export default function DashboardHome() {

    const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#0088fe', '#00c49f'];

    const historgram_data = [
        { name: 'Category A', value: 20 },
        { name: 'Category B', value: 30 },
        { name: 'Category C', value: 50 },
    ];

    const piechart_data = [
        { name: 'Category A', value: 20 },
        { name: 'Category B', value: 30 },
        { name: 'Category C', value: 50 },
    ];
    

    return (
        <Dashboard>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={4} lg={3}
                    >
                    {/* <Paper
                        sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                        // backgroundColor: '#EEA47F',
                        color: '#00539C'
                        }}
                    >
                    </Paper> */}
                        <ProjectStat />
                    </Grid>

                    <Grid item xs={12} md={4} lg={3}>
                    {/* <Paper
                        sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                        // backgroundColor: '#FBEAEB',
                        color: '#00539C'
                        }}
                    >
                    </Paper> */}
                        <ClientStat />
                    </Grid>

                    <Grid item xs={12} md={4} lg={3}>
                    {/* <Paper
                        sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                        // backgroundColor: '#F9E795',
                        color: '#00539C'
                        }}
                    >
                    </Paper> */}
                        <KnowledgeStat />
                    </Grid>

                    <Grid item xs={12} md={4} lg={3}>
                    {/* <Paper
                        sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                        // backgroundColor: '#ADD8E6',
                        color: '#00539C'
                        }}
                    >
                    </Paper> */}
                        <RewardStat />
                    </Grid>


                    <Grid item xs={12} md={4} lg={6}>
                        <Histogram data={historgram_data} dataKey="value" xAxisLabel="Categories" yAxisLabel="Values" />
                    </Grid>

                    <Grid item xs={12} md={4} lg={6}>
                    <PieChartComponent data={piechart_data} dataKey="value" />
                    </Grid>


                    {/* Recent Projects */}
                    <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <RecentProjectList />
                        {/* <Orders /> */}
                    </Paper>
                    </Grid>
                        {/* Recent Announcement */}
                    <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Title>Recent Announcements</Title>
                        <Announcement />
                        {/* <Orders /> */}
                    </Paper>
                    </Grid>
                </Grid>
                {/* <Copyright sx={{ pt: 4 }} /> */}
            </Container>
        </Dashboard>
    )
}


