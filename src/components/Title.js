import {Link, useNavigate, useParams} from 'react-router-dom'

const Title = ({abcd,deleteTitle}) => {
  
  const navigate = useNavigate()

  const handleDelete1 = (event) => {
    event.preventDefault()
    deleteTitle(abcd.id)
    navigate('/title')
  }

  return(
    <div> 
      <Link to={`/title/${abcd.id}`}>
        <h1>{abcd.title}</h1>
      </Link>  

      <form onSubmit={handleDelete1}>
        <input className='deleteTitle'type='submit' value='Delete' />
      </form>

    </div>
  )  
}

export default Title