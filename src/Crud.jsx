import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import db from "./firebase"
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
import { bookCreateRequest, bookDeleteRequest, bookGetRequest ,bookUpdateRequest} from "./Actions/crudAction";
import { useDispatch, useSelector } from "react-redux";
import { textAlign } from "@mui/system";
import Header from "./Header";
import Footer from "./Footer";
import { onSnapshot, collection, doc,addDoc,deleteDoc, getFirestore,query,where,orderBy,serverTimestamp,getDoc } from "firebase/firestore";
import { logEvent } from "firebase/analytics";
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

 
  inputbg: {
    backgroundColor: "white",
  },
  field: {
    display: "flex",
    justifyContent:"center",
   
    [Theme.breakpoints.down('sm')]: {
      display: "flex",
    flexDirection: "column",
    alignItems: "center",
    },
  },
  field1 :{
    display: "flex",
    justifyContent:"center",
    [Theme.breakpoints.down('sm')]: {
      display: "flex",
    flexDirection: "column",
    alignItems: "center",
    },
  },

  field2 :{
    display: "flex",
    justifyContent:"center",
    marginTop:"-30px",
    [Theme.breakpoints.down('sm')]: {
      display: "flex",
    flexDirection: "column",
    alignItems: "center",
    },
  },
 



  button:{
    display:"flex",
    justifyContent:"center"
  },
  table:{
    [Theme.breakpoints.down('sm')]: {
    },
  }
}));

function CRUD() {
  const [inputText, setInputText] = useState({
    // id: "",
    bookTitle: "",
    authorName: "",
    published: "",
    price: "",
  });
  const [items, setItems] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const getBooksData =  useSelector((state) => state?.bookGetRequest)
  const booksData = getBooksData?.books
  console.log("booksData:" , booksData);
 const {loading} = getBooksData
  // const db = getFirestore()
  // const colRef = collection(db ,"books")

  // const q = query(colRef,orderBy("createAt"))
  //   onSnapshot(colRef,(snapshot)=>{
  //       let books =[]
  //       snapshot.docs.forEach((docs)=>{
  //         books.push({...docs.data ,id :doc.id})
  //       })
  //       setItems(books)
  //       console.log({books});
  //     })
  

  useEffect(()  => {
      dispatch(bookGetRequest());
  }, []);


//  getDocs(colRef).then((snapshot)=>{
 
//  })
//  .catch( error =>{
// console.log(error.message);
//  })

const getAllData = () =>{
  let loadedUsers =  [];
      for(const key in booksData) {
        loadedUsers.push({
          id: key,
          bookTitle: booksData[key].bookTitle,
          authorName: booksData[key].authorName,
          published: booksData[key].published,
          price: booksData[key].price,
        });
    }
    setItems(loadedUsers);
}

 useEffect(()=>{
  getAllData()
},[getBooksData])
  
 const handleSubmit = async  (event) => {
   event.preventDefault();
   const { bookTitle, authorName, published, price } = inputText;
   setInputText({
     bookTitle: "",
     authorName: "",
     published: "",
     price: "",
    });
    await dispatch(bookCreateRequest(inputText))
      dispatch(bookGetRequest())

      alert("data stored")
    };

  const deleteItems =  (id) => {
    try {
          setItems(
            items.filter((user) => {
              return user.id !== id;
            })
          );
      dispatch(bookDeleteRequest(id))
         }catch (err) {
      }
  };
  const handleUpdateSubmit = async (e, id) => {
    e.preventDefault();
    const { bookTitle, authorName, published, price } = inputText;
    try {
      setInputText({
        bookTitle: "",
        authorName: "",
        published: "",
        price: "",
      });
      setIsUpdate(false)
      await dispatch(bookUpdateRequest(inputText,id))
      dispatch(bookGetRequest())
      console.log("update", inputText);
    }catch (error) {
    }
  };
  const editItem = (id) => {
    let updateEditItems = items.find((elem) => {
      return elem.id === id;
    });
    setIsUpdate(true);
    setInputText({ id: id, ...updateEditItems });
  };

 



  const classes = useStyles();
  return (
    <>
      <ThemeProvider>
        <CssBaseline />
       
       <Header/>
       
          <div className={classes.inputbg}>
            <div
              className={classes.input}
              onSubmit={handleSubmit}
              method='POST'
            >
              <Typography variant="h4" sx={{textAlign:"center",paddingTop:"20px"}}>Enter The Books Detail</Typography>
              <Typography className={classes.field} sx={{ py: 3 }}>
                <TextField
                  placeholder='Enter Book Title'
                  required
                  id='outlined-required'
                  name='bookTitle'
                  value={inputText.bookTitle}
                  // inputProps={ariaLabel}
                  sx={{ margin: "20px" }}
                  onChange={(e) =>
                    setInputText({ ...inputText, bookTitle: e.target.value })
                  }
                />
                <TextField
                  required
                  id='outlined-required'
                  placeholder='Enter Author Name'
                  name='authorName'
                  sx={{ margin: "20px" }}
                  value={inputText.authorName}
                  onChange={(e) =>
                    setInputText({ ...inputText, authorName: e.target.value })
                  }
                  // inputProps={ariaLabel}
                />
              </Typography>

              <Typography className={classes.field1} >
                <TextField
                  required
                  id='outlined-required'
                  placeholder='Enter Published Year'
                  name='published'
                  value={inputText.published}
                  sx={{ margin: "20px" }}
                  onChange={(e) =>
                    setInputText({ ...inputText, published: e.target.value })
                  }
                  // inputProps={ariaLabel}
                />

                <TextField
                  id='outlined-required'
                  placeholder='Enter Price'
                  name='price'
                  value={inputText.price}
                  sx={{ margin: "20px" }}
                  onChange={(e) =>
                    setInputText({ ...inputText, price: e.target.value })
                  }
                  // inputProps={ariaLabel}
                />
              </Typography>
              {!isUpdate ? (
              <Typography className={classes.button} sx={{ py: 3 }}>
                <Button
                  onClick={handleSubmit}
                  disabled={!inputText.bookTitle || !inputText.authorName || !inputText.published || !inputText.price}
                  variant='contained'
                  sx={{cursor:"pointer"}}
                
                >
                  Submit
                </Button>
              </Typography>
                ) :(
              <Typography className={classes.button} sx={{ py: 2 }}>
                <Button
                 
                  onClick={(e) => handleUpdateSubmit(e, inputText.id)}
                  variant='contained'
                >
                  Update
                </Button>
              </Typography>) }
            </div>
          </div>
        <TableContainer
        className={classes.table}
          component={Paper}
          sx={{
            // border: "4px solid rgb(0,0,0,0.2)",
            height: 400,
            // marginBottom: "12px",
            "&::-webkit-scrollbar-x": {
              width: 600,
            },
            // "&::-webkit-scrollbar-track": {
            //   backgroundColor: "orange",
            // },
            // "&::-webkit-scrollbar-thumb": {
            //   borderRadius: "2px",
            //   backgroundColor: "red",
            // },
          }}
        >
           {loading ? (
                <Typography sx={{display:"flex", justifyContent:"center",marginTop:"10px"}}>
                    <ClipLoader loading={loading} size={70} />
                </Typography>
            ) : (
          <Table>
            {items.length === 0 ? <Typography variant="h3" sx={{textAlign:"center", marginTop:"10px"}}>Not yet Books Selected</Typography> : (
              <TableHead sx={{ position: "sticky", top: 0 }}>
                <TableRow>
                  <StyledTableCell>Sr No</StyledTableCell>
                  <StyledTableCell>Book Title</StyledTableCell>
                  <StyledTableCell align='right'>Author Name</StyledTableCell>
                  <StyledTableCell align='right'>Year Published</StyledTableCell>
                  <StyledTableCell align='right'>Price</StyledTableCell>
                  <StyledTableCell align='right'>Actions</StyledTableCell>
                </TableRow>
              </TableHead>
            )}

            <TableBody>
              {items?.map((elem, index) => {
                return (
                  <StyledTableRow key={elem.id}>
                    <StyledTableCell component='th' scope='row'>
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell component='th' scope='row'>
                      {elem.bookTitle}
                    </StyledTableCell>
                    <StyledTableCell align='right'>
                      {elem.authorName}
                    </StyledTableCell>
                    <StyledTableCell align='right'>
                      {elem.published}
                    </StyledTableCell>
                    <StyledTableCell align='right'>${elem.price}</StyledTableCell>
                    <StyledTableCell
                      align='right'
                      sx={{ display: "flex", cursor: "pointer" }}
                    >
                      <img
                        src='https://img.icons8.com/fluency/48/000000/delete-forever.png'
                        width={30}
                        title='Delete-Item'
                        onClick={() => deleteItems(elem.id)}
                      />
                      <img
                        src='https://img.icons8.com/color-glass/48/000000/edit.png'
                        width={30}
                        title='Edit-Item'
                        onClick={() => editItem(elem.id)}
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>)}
        </TableContainer>
      </ThemeProvider>
      <Footer  items={items} setItems={setItems} />
    </>
  );
}
export default CRUD;
