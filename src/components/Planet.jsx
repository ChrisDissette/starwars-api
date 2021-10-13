import Typography from '@mui/material/Typography';

const Planet = (props) => {
    const {name, climate, terrain, surface_water, population, diameter} = props.planet
    console.log(diameter)

    return (
        <div>
            <Typography variant='h4' sx={{borderBottom:'3px solid #FFE81F'}}>{name}</Typography>
            <ul>
                <li><span className='attribute'>Climate</span> {climate}</li>
                <li><span className='attribute'>Terrain:</span> {terrain}</li>
                <li><span className='attribute'>Surface Water</span> {surface_water}</li>
                <li><span className='attribute'>Population:</span> {population}</li>
            </ul>
        </div>
    )
}

export default Planet