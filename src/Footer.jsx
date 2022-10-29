import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  parentFooter:{
display:"flex",
justifyContent:"space-between"
  },
  [theme.breakpoints.down('sm')]:{
    display:"flex",
    flexDirection:"column",
    // textAlign:"center"
      },
  footer:{
backgroundColor:"lightgray"
  },
  rootBox: {
    display:"flex",
    justifyContent:"space-between",
    [theme.breakpoints.down('md')]: {
      // justifyContent: 'center'
    }
  },
  footerNav: {
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(0),

    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: 'auto',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    }
  },
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    }
  },
}));

function Footer(props) {
    const content = {
        'copy': '© 2022 Book Management System',
        ...props.content
      };
    
    //   let brand;
    
    //   if (content.brand.image) {
    //     brand = <img src={ content.brand.image } alt="" width={ content.brand.width } />;
    //   } else {
    //     brand = content.brand.text || '';
    //   }


    const classes = useStyles();
  return (
    <div className='parentFooter'>
       <footer className={classes.footer} >
      <Container  maxWidth="lg">
        <Box py={6} display="flex" flexWrap="wrap" alignItems="center" className={classes.rootBox}>
          <Typography color="textSecondary" component="p" variant="h5" gutterBottom={false}>{content['copy']}</Typography>
          <Typography variant='h5'>({props?.items?.length}) {props?.items?.length <= 1 ? "Book Of Data" : "Books Of Data" }    </Typography>
        </Box>
      </Container>
    </footer>
    </div>
  )
}

export default Footer


