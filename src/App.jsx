import Search from './components/Search'
import {useState} from 'react'
import {Router, navigate} from '@reach/router'
import Display from './Views/Display'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Logo from  './images/starwarsLogo.png'
import Typography from '@mui/material/Typography';



const theme = createTheme({
  palette: {
      primary: {
          main: "#FFE81F",
      },
      secondary: {
          main: "#000000",
  },
  },
});

const useStyles = makeStyles({
  root: {

  },
  paper: {
    opacity: '80%'
  }
});

function App() {

  const classes = useStyles()

  const [searchTerms, setSearchTerms] = useState({
    category: 'people',
    id: ''
  })

  const [data, setData] = useState({})

  const changeHandler = event => {
    setSearchTerms({
      ...searchTerms,
      [event.target.name] : event.target.value
    })
  }

  const submitHandler = (event) => {
    const { category, id } = searchTerms
    event.preventDefault()
    navigate(`/${category}/${id}`)
  }


  return (
    <ThemeProvider theme={theme}>
      <Box className='container'>
        <Box width={{ xs: 350, sm: 550, md: 700}} p={{xs:2, sm: 3, md: 4}}>
          <Paper className={classes.paper} elevation={15} sx={{minHeight:675, display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', borderRadius:3}}>
            <img style={{marginTop:'15px'}} src={Logo}/>
            <Typography variant='h6' sx={{mb: 4, fontWeight:'bold'}}>
              (The API Strikes Back)
            </Typography>
            <Search searchTerms={searchTerms} changeHandler={changeHandler} submitHandler={submitHandler} theme={theme}/>
            <Box mt={5} width={{ xs: 300, sm: 500, md:600}}>
              <Router>
                <Display path='/:category/:id' />
              </Router>
            </Box>
          </Paper>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
