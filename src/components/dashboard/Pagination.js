// Pagination.js
import React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      color="primary"
      size="small"
      onChange={(event, page) => onPageChange(page)}
      renderItem={(item) => (
        <PaginationItem
          component="div"
          {...item}
          sx={{
            '&.Mui-selected': {
              fontWeight: 'bold',
            },
          }}
        />
      )}
      sx={{ marginTop: '16px' }}
    />
  );
};

export default CustomPagination;
