import {useMemo, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const FormPerslib = (props) => {
  const navigate = useNavigate()
  const params = useParams()


  //Will get current document (perslib item) here for edit:
  const currentDoc = useMemo(() => props.perslibs.find(perslib => perslib.id === parseInt(params.id)), [params.id, props.perslibs])

  const[formData, setFormData] = useState(
    props.formType === 'newperslib' ? {
      image_url: '',
      description: '',
      date: '',
      time: ''
    }: {
      image_url: currentDoc.image_url,
      Description: currentDoc.description,
      date: currentDoc.date,
      time: currentDoc.time,
      id: parseInt(currentDoc.id)
    }
  )
  
  const handleChange = (event) => {
    setFormData((prev) => (
      {
        ...prev,
        [event.target.name]: event.target.value
      }
    ))
  }

  //Special handlechange for the images:
  const handleImageChange = (e) => {
    let newData = { ...formData }
    newData["image_url"] = e.target.files[0]
    setFormData(newData)
  }

  const handleSubmission = (event) => {     //Here, we need to bring our "event" object because we are waiting for that event on submit
    event.preventDefault()    //To disable default functionality with our form.
    props.handleFormPerslib(formData, props.formType)
    //Then, after we submit everything here and we pass the information fetch, let's go ahead and navigate to '/perslib':
    navigate('/perslib')      //To go back 
  }

  return(
  

    <form  onSubmit={handleSubmission} className='Form'>
        {/* <h3 className = 'EditTitle'>Description</h3> */}
        <input className='input'
        type='file'
        onChange={(e) => {handleImageChange(e)}}
        accept='image/jpeg, image/jpg, image/png, image/gif'
        // value={''}
        name='image_url'
        />

        <h3 className = 'EditTitle'>Description</h3>
        <input className='input'
        type='text'
        onChange={handleChange}
        value={formData.description}
        name='description'
        />

        <h3 className = 'EditTitle'>Date</h3>
        <input className='input'
        type='date'
        onChange={handleChange}
        value={formData.date}
        name='date'
        />

        <h3 className = 'EditTitle'>Time</h3>
        <input className='input'
        type='time'
        onChange={handleChange}
        value={formData.time}
        name='time'
        />         
        
        <input 
        type='submit' 
        value={props.buttonLabel_perslib} 
        className='submitBtn'
        // onClick={(event) => {event.preventDefault()}}
        />

      </form>
  )
};

export default FormPerslib