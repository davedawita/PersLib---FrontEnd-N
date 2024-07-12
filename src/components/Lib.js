import {Link, useNavigate} from 'react-router-dom'

const Lib = ({lib, deletePersLib}) => {
const navigate = useNavigate()

const handleDelete2 = (event) => {
  event.preventDefault()
  deletePersLib(lib.id)
  navigate('/perslib')
}
return(
  <div className='container'>
  <Link to={`/perslib/${lib.id}`}>
    <img src={lib.image_url} alt="personal Photos"/>
    <h1 className='list'>Description:{lib.description}</h1>
    <h1 className='list'>Date: {lib.date}</h1>
    <h1 className='list'>Time:{lib.time}</h1>
  </Link>      
 
  <form onSubmit={handleDelete2}>
    <input className='delete'type='submit' value='Delete' />

  </form>
</div>
)
}

export default Lib