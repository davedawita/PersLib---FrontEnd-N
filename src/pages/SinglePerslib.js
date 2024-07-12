import {useMemo} from 'react'
import {Link, useParams} from 'react-router-dom'
// import { Outlet } from 'react-router-dom'

const SinglePerslib = ({perslibs}) => {
  const params = useParams()
  
  const currentDoc = useMemo(() => perslibs.find(perslib => perslib.id === parseInt(params.id)), [params.id, perslibs])

  return (
    <div>
      <h2>{currentDoc.image_url}</h2>
      <Link to='/perslib'>
          <button className='addTitle'>Add Perslib</button>
      </Link>
      

      <Link to={`/editperslib/${params.id}`}>
        <button>Edit Item</button>
      </Link>
      <Link to={'/perslib'}>
        <button>Go Back</button>
      </Link>

  
    </div>
  )
}

export default SinglePerslib