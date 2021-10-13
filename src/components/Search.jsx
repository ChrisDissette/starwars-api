import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';


const Search = (props) => {

    const {submitHandler, changeHandler, searchTerms} = props

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

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Box width={{ xs: 300, sm: 500, md:600}}>
                    <form onSubmit={submitHandler} >
                        <FormControl fullWidth>
                            <InputLabel htmlFor='category'>Category</InputLabel>
                            <Select
                                name='category'
                                label="Category"
                                value={searchTerms.category}
                                onChange = {changeHandler}
                                color='primary'
                            >
                                <MenuItem value='people'>People</MenuItem>
                                <MenuItem value='films'>Films</MenuItem>
                                <MenuItem value='starships'>Starships</MenuItem>
                                <MenuItem value='vehicles'>Vehicles</MenuItem>
                                <MenuItem value='species'>Species</MenuItem>
                                <MenuItem value='planets'>Planets</MenuItem>
                            </Select>
                            <br />
                            <TextField
                                onChange={changeHandler}
                                id="outlined-number"
                                label="id #"
                                placeholder='Enter a Number'
                                name='id'
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <Button type='submit' mt={3} variant="contained" sx={{mt:1}}>Search</Button>
                        </FormControl>
                    </form>
                </Box>
            </ThemeProvider>
        </div>
    )
}

export default Search
