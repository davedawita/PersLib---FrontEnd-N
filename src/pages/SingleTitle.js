import {useMemo} from 'react'
import {Link, useParams} from 'react-router-dom'

const SingleTitle = ({titles}) => {
  const params = useParams()
  
  const currentTitle = useMemo(() => titles.find(title => title.id === parseInt(params.id)), [params.id, titles])

  return (
    <div className='addTitles'>
      <h2 className = 'EditTitle'>{currentTitle.title}</h2> 
      <div className='add'>
        <Link to='/newperslib'>
            <button className='addTitle'>Add Perslib</button>
        </Link> 

        <Link to={`/edititle/${params.id}`}>
          <button className='addTitle'>Edit Title</button>
        </Link>
        <Link to={'/title'}>
          <button className='addTitle'>Go Back</button>
        </Link>
      </div>      
      
    </div>
  )
}

export default SingleTitle