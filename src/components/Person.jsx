import Typography from '@mui/material/Typography';

const Person = (props) => {
    const {name, height, mass, hair_color, skin_color} = props.person

    return (
        <div>
            <Typography variant='h4' sx={{borderBottom:'3px solid #FFE81F'}}>{name}</Typography>
            <ul>
                <li><span className='attribute'>Height:</span> {height} cm</li>
                <li><span className='attribute'>Mass:</span> {mass} kg</li>
                <li><span className='attribute'>Hair Color:</span> {hair_color}</li>
                <li><span className='attribute'>Skin Color:</span> {skin_color}</li>
            </ul>
        </div>
    )
}

export default Person
