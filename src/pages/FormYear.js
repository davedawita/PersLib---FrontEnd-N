import {useMemo, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const FormYear = (props) => {

  const navigate = useNavigate()
  const params = useParams()


  //Will get current year here for edit:
  const currentYear = useMemo(() => props.years.find(asdf => asdf.id === parseInt(params.id)), [params.id, props.years])

  const[formData3, setFormData3] = useState(
    props.formType === 'newyear' ? {
      year: ''      
    }: {
      year: currentYear.year,      
      id: parseInt(currentYear.id)
    }
  )
  const handleChange3 = (event) => {
    setFormData3((prev) => (
      {
        ...prev,
        [event.target.name]: event.target.value
      }
    ))
  }

  const handleSubmission3 = (event) => {     //Here, we need to bring our "event" object because we are waiting for that event on submit
    event.preventDefault()    //To disable default functionality with our form.
    props.handleFormYear(formData3, props.formType)
    //Then, after we submit everything here and we pass the information fetch, let's go ahead and navigate to '/year':
    navigate('/')      //To go and submit to the years page
  }


  return(
    <form  onSubmit={handleSubmission3} className='FormTitle'>
        <h3>Year</h3>
        <input className='input'
        type='number'
        onChange={handleChange3}
        value={formData3.year}
        name='year'
        />  
        
        <input 
        type='submit' 
        value={props.buttonLabel_year} 
        class='submitBtn'
        // onClick={(event) => {event.preventDefault()}}
        />

      </form>
  )
};

export default FormYear