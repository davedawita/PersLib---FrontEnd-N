import Lib from '../components/Lib'
import {Link} from 'react-router-dom'

const AllPerslibs = (props) => {   //This function defines all the perslib or data items such as pictures, docs, etc.
  return(
    <div className='mainpage'>
      
      {props.perslibs?.map((lib) => <Lib lib={lib} key={lib.id} deletePersLib={props.deletePersLib} />
      )}

    </div>

  )
     
}

export default AllPerslibs