// import * as React from 'react';
// import Link from '@mui/material/Link';
// import Typography from '@mui/material/Typography';
// import Title from '../Title';

// import Button from '@mui/material/Button';


// function preventDefault(event) {
//   event.preventDefault();
// }

// export default function ClientStat() {
//   return (
//     <React.Fragment>
//         <Title>
//         HANDLED CLIENTS
//         </Title>
        
//       <Typography 
//       component="p" 
//       variant="h4"
//       align="center"
//       sx={{ fontWeight: 'bold' }}
//       >
//         25
//       </Typography>
//       <Typography color="text.secondary" sx={{ flex: 1 }}>
//         {/* on 15 March, 2019 */}
//       </Typography>
//       <div>
//       <Button variant="contained" style={{backgroundColor: 'transparent', color: '#3B71CA'}}>
//         View All Clients
//       </Button>
//         {/* <Link color="primary" href="#" onClick={preventDefault}>
//           View All Clients
//         </Link> */}
//       </div>
//     </React.Fragment>
//   );
// }


import React from 'react';
import { Typography, Button, Paper } from '@mui/material';

const ClientStat = () => {
  return (
    <Paper elevation={3} style={{ padding: 20, borderRadius: 10, textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom>
        HANDLED CLIENTS
      </Typography>
      <Typography component="p" variant="h4" align="center" sx={{ fontWeight: 'bold' }}>
        230
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {/* on 15 March, 2019 */}
      </Typography>
      <div>
        <Button variant="contained" style={{ backgroundColor: 'transparent', color: '#3B71CA' }}>
          View Knowledge Bucket
        </Button>
      </div>
    </Paper>
  );
};

export default ClientStat;