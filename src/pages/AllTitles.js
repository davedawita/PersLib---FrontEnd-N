import Title from '../components/Title'
// import {Link} from 'react-router-dom'


const AllTitles = (props) => {  
  
  return(
    <div className='mainpage'>     
      
      {props.titles?.map((abcd) => <Title abcd={abcd} key={abcd.id} deleteTitle={props.deleteTitle} />)}
      
    </div>
  )    
}

export default AllTitles