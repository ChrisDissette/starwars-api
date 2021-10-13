import Typography from '@mui/material/Typography';

const Species = (props) => {
    const { name, average_height, classification } = props.species
    return (
        <div>
            <Typography variant='h4' sx={{borderBottom:'3px solid #FFE81F'}}>{name}</Typography>
            <ul>
                <li><span className='attribute'>Average Height:</span> {average_height} cm</li>
                <li><span className='attribute'>Classification:</span> {classification}</li>
            </ul>
        </div>
    )
}

export default Species
