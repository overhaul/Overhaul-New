import React, {useState, useRef} from 'react'
import Radios from '../components/Radios'
import FormName from '../components/FormName'


const Form = () => {
    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/a/macros/overhaulmedia.com/s/AKfycbwE4Ed4-OEhVdeY_Kvfp2O-6GMlGc9-0Jwf9tXGJB8oDUFtxC1aRoGxgUj_HsVbX_lc/exec"
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setLoading(true)

        fetch(scriptUrl, {
        method: 'POST', 
        body: new FormData(formRef.current),

    }).then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
            setLoading(false)
        })
        .catch(err => console.log(err))
    }

  return (
    <div>
        <div className="container">
        <form  ref={formRef} onSubmit={handleSubmit} name="google-sheet">
            <FormName/> 
            <Radios/>
          <div className="input-style">
              <input type="submit" value={loading ? "Loading..." : "SEND MESSAGE"} />
          </div> 
        </form>
        </div>
    </div>

  )
}

export default Form