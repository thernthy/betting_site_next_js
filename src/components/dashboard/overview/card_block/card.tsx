
"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Box } from '@mui/system';

export interface CustomCardcomponentProp {
  main_title: string;
  total_amount: number;
  data: any[];
}

export default function CustomCardcomponent({main_title, total_amount, data }:CustomCardcomponentProp) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader 
        style={{textAlign:'center'}}
        
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="551,344 won"
      />
      <CardContent>
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={2} textAlign={'center'}>
                {data?.map(element=>(
                    <Typography variant="body2" color="black">
                        {element.subitlte}
                        <Typography variant="body2" color={'rgb(14 165 233)'}>
                           {element.subData}
                        </Typography>
                    </Typography>
                ))}
            </Box>
      </CardContent>
    </Card>
  );
}