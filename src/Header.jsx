import React from 'react'
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";
import { Avatar, makeStyles, TableRow } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import {
  Button,
  CssBaseline,
  TableBody,
  TableCell,
  TableHead,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
const ariaLabel = { "aria-label": "description" };

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const useStyles = makeStyles((Theme) => ({
    header :{
     display:"flex",
     justifyContent:"Center" ,
     background: "#101928",
     color: "white",
     position:"sticky",
     top:"0",
     zIndex:"999",
      [Theme.breakpoints.down('sm')]:{
    display:"flex",
    flexDirection:"column",
    textAlign:"center"
      }
    },
     
    }));
    
function Header({submitButton}) {
  const classes = useStyles();

  
  
  return (
    <div className={classes.header} sx={{ padding:"5px",textAlign:"center"  }}>
      <Typography  variant='h2'>
          Book Store App 
          </Typography>
        {/* <Button  onClick={ submitButton}
        sx={{margin:"10px"}}
        className={classes.headerButton}
                  variant='contained'>Add New Book </Button> */}

    </div>
  )
}

export default Header