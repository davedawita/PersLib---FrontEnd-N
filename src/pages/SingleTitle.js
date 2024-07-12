import {useMemo} from 'react'
import {Link, useParams} from 'react-router-dom'

const SingleTitle = ({titles}) => {
  const params = useParams()
  
  const currentTitle = useMemo(() => titles.find(title => title.id === parseInt(params.id)), [params.id, titles])

  return (
    <div>
      <h2>{currentTitle.title}</h2>       
      <Link to='/newperslib'>
          <button className='addTitle'>Add Perslib</button>
      </Link> 

      <Link to={`/edititle/${params.id}`}>
        <button>Edit Title</button>
      </Link>
      <Link to={'/title'}>
        <button>Go Back</button>
      </Link>
    </div>
  )
}

export default SingleTitle