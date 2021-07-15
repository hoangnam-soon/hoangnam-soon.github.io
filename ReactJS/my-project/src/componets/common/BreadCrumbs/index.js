import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function SimpleBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Trang chủ
      </Link>
      <Link color="inherit" href="/Item/" onClick={handleClick}>
        Sản phẩm
      </Link>
      <Typography color="textPrimary">Thức ăn khô</Typography>
    </Breadcrumbs>
  );
}