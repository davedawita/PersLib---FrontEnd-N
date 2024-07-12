import {useMemo} from 'react'
import {useParams, Link, useLocation} from 'react-router-dom'   

//HashLink to render on the same page. I need to render All Titles on this same page.
// import {HashLink as Link} from 'react-router-hash-link'
const SingleYear = (props) => {
  const params = useParams()
  
  const currentYear = useMemo(() => props.years?.find(year => year.id === parseInt(params.id)), [params.id, props.years])
  
  // const title = props.years?.find((p) => p._id === params.id)
  const location = useLocation()
  console.log(location)
  return (    
    <div className='addTitles'>      
      <h2 className = 'EditTitle'>{currentYear.year} Documents</h2> 
      <div className='add'>
        <Link to='/newtitle'>
            <button className='addTitle'>Add Title</button>
        </Link> 

        <Link to={`/edityear/${params.id}/`}>
          <button className='addTitle'>Edit Year</button>
        </Link>
        
        <Link to={'/'}>
          <button className='addTitle'>Go Back</button>
        </Link>  
        
      </div>
      
    </div>     
  ) 
}

export default SingleYear