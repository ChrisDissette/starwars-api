import Typography from '@mui/material/Typography';

const Starship = (props) => {
    const {name, model, hyperdrive_rating, starship_class, max_atmosphering_speed} = props.starship



    return (
        <div>
            <Typography variant='h4' sx={{borderBottom:'3px solid #FFE81F'}}>{name}</Typography>
            <ul>
                <li><span className='attribute'>Model:</span> {model} cm</li>
                <li><span className='attribute'>Hyperdrive Rating:</span> {hyperdrive_rating} kg</li>
                <li><span className='attribute'>Starship Class:</span> {starship_class}</li>
                <li><span className='attribute'>Speed:</span> {max_atmosphering_speed}</li>
            </ul>
        </div>
    )
}

export default Starship