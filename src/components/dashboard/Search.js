import {React, useState} from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchComponent = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');


    const handleSearch = (event) => {
      const newSearchTerm = event.target.value;
      setSearchTerm(newSearchTerm);
      onSearch(newSearchTerm);
    };
  
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          label="Search"
          variant="outlined"
          size="medium"
          style={{height: '30px', marginBottom: '50px', minWidth: '300px'}}
          onChange={handleSearch}
        />
        <IconButton color="primary" style={{ marginBottom: '30px' }} onClick={onSearch}>
          <SearchIcon />
        </IconButton>
      </div>
    );
  };
  
  export default SearchComponent;