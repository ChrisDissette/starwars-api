import Typography from '@mui/material/Typography';

const Film = (props) => {
    const { title, director, opening_crawl } = props.film
    return (
        <div>
            <Typography variant='h4' sx={{borderBottom:'3px solid #FFE81F'}}>{title}</Typography>
            <ul>
                <li><span className='attribute'>Director:</span> {director}</li>
                <li><span className='attribute'></span> {opening_crawl}</li>
            </ul>
        </div>
    )
}

export default Film