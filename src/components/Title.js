import {Link, useNavigate} from 'react-router-dom'

const Title = ({abcd,deleteTitle}) => {
  
  const navigate = useNavigate()

  const handleDelete1 = (event) => {
    event.preventDefault()
    deleteTitle(abcd.id)
    navigate('/title')
  }

  return(
    <div className='container'> 
      <Link to={`/title/${abcd.id}`}>
        <h1 className='list'>{abcd.title}</h1>
      </Link>  

      <form onSubmit={handleDelete1}>
        <input className='delete'type='submit' value='Delete' />
      </form>

    </div>
  )  
}

export default Title