import Typography from '@mui/material/Typography';

const Vehicle = (props) => {
    const {name, model, max_atmosphering_speed, manufacturer} = props.vehicles

    return (
        <div>
            <Typography variant='h4' sx={{borderBottom:'3px solid #FFE81F'}}>{name}</Typography>
            <ul>
                <li><span className='attribute'>Model:</span> {model} cm</li>
                <li><span className='attribute'>Manufacturer:</span> {manufacturer} kg</li>
                <li><span className='attribute'>Speed:</span> {max_atmosphering_speed}</li>
            </ul>
        </div>
    )
}

export default Vehicle
