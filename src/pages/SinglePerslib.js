import {useMemo} from 'react'
import {Link, useParams} from 'react-router-dom'
// import { Outlet } from 'react-router-dom'

const SinglePerslib = ({perslibs}) => {
  const params = useParams()
  
  const currentDoc = useMemo(() => perslibs.find(perslib => perslib.id === parseInt(params.id)), [params.id, perslibs])

  return (
    <div className='addTitles'>
      <h2 className = 'EditTitle'>{currentDoc.image_url}</h2>
      <div>
      <Link to='/perslib'>
          <button className='addTitle'>Add Perslib</button>
      </Link>  
      <Link to={`/editperslib/${params.id}`}>
        <button className='addTitle'>Edit Item</button>
      </Link>
      <Link to={'/perslib'}>
        <button className='addTitle'>Go Back</button>
      </Link>
      </div>  
    </div>
  )
}

export default SinglePerslib