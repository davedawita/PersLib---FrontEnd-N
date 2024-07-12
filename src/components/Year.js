import {Link, useNavigate} from 'react-router-dom'

const Year = ({asdf, deleteYear}) => { 
  const navigate = useNavigate()  

  const handleDelete = (event) => {
    event.preventDefault()
    deleteYear(asdf.id)
    navigate('/')
  }

  return(    
    <div className='yearcontainer'>      
      <Link to={`/year/${asdf.id}`} >
        <h1 className='yeartitle'>Years</h1>
        <h2 className='years'>{asdf.year}</h2>
      </Link>      
              
      <form onSubmit={handleDelete}>
        <input className='deleteYear'type='submit' value='Delete' />
      </form>

    </div>      
  )
}

export default Year