import React, {useState} from 'react'

const Contact = () => {
  const initialState = {
    name: "",
    message: "",
    email: ""
  }

  const [formDetails, setFormDetails] = useState(initialState)

  const onValueChange = (fieldName, value) =>{ {
    const updateFormDetails = { ...formDetails, [fieldName]: value};
    setFormDetails(updateFormDetails)
    }
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(formDetails)
    setFormDetails(initialState)
  }

  return (
    <section>
      <h1 className="text-4xl text-left font-bold my-6" >Contact me</h1>
      <div className="bg-white text-left rounded-xl p-8">
        <p>Intreststed in worling together @KarimiDev
          <a href="mailto:test@email.com"> test@email.com </a>
        </p>
        <form onSubmit={onHandleSubmit}  className=" mt-3 flex flex-col gap-6">
          <input type="text" placeholder='your name' 
          className='text-md bg-background rounded-xl px-4 py-3 
          placeholder-opacity-50 focus:outline-none border w-full'
          value={formDetails.name}
          onChange={(e) => onValueChange("name", e.target.value)}
          />
          <input type="email" placeholder='your email'
            className='text-md bg-background rounded-xl px-4 py-3 
            placeholder-opacity-50 focus:outline-none border w-full'
            value={formDetails.email}
            onChange={(e) => onValueChange("email", e.target.value)}

          />
          <textarea placeholder='your message'
          rows="4"
          className='text-md bg-background rounded-xl px-4 py-3 
          placeholder-opacity-50 focus:outline-none border w-full'
          value={formDetails.message}
          onChange={(e) => onValueChange("message", e.target.value)}
          
          />
          <button type='submit' className="bg-blue-600 text-white">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
