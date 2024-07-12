import Year from '../components/Year'
import {Link} from 'react-router-dom'


const AllYears = (props) => {  
  
  return(
    
      <div className='mainpage'>
        <h1 className="maintitle">PersLib</h1>
        <p className='introduction'>PersLib is an application that allows users to record and track their life moments. It encourages users to save pictures, important documents, etc. It is basically a personal library that holds important recorded information in life. It is more safe from local computers and hard drives and it enables users to easily manipulate their personal data by adding features, editing records, and with deleting functionality.</p>
        <Link to='/newyear'>
          <button className='addYear'>Add Year</button>
        </Link>    
       

        {props.years.map((asdf) => <Year asdf={asdf} key={asdf.id}  deleteYear={props.deleteYear} />)} 

      </div>              
    
  ) 
      
}
 
export default AllYears