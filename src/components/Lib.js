import {Link, useNavigate} from 'react-router-dom'

const Lib = ({lib, deletePersLib}) => {
const navigate = useNavigate()

const handleDelete2 = (event) => {
  event.preventDefault()
  deletePersLib(lib.id)
  navigate('/perslib')
}
return(
  <div>
  <Link to={`/perslib/${lib.id}`}>
    <img src={lib.image_url}/>
    <h1>Description:{lib.description}</h1>
    <h1>Date: {lib.date}</h1>
    <h1>Time:{lib.time}</h1>
  </Link>      
 
  <form onSubmit={handleDelete2}>
    <input className='deletePerslib'type='submit' value='Delete' />

  </form>
</div>
)
}

export default Lib