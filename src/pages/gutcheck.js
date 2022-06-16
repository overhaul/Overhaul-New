import React, {useState, useRef} from 'react'
import OmLogo from '../components/OmLogo'
import StepForm from '../components/StepForm'
import CursorWrapper from '../components/CursorWrapper'

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
						alert('Successfully submitted!')
						document.getElementsByClassName('gutcheck').innerHtml = "DONE"
						setLoading(false)
				})
				.catch(err => console.log(err))
		}

	return (
		<div>
			<CursorWrapper>
				<div className="layout dark" style={{height: '100vh'}}>
					{/* <div className="OM-logo">
						<OmLogo />
					</div> */}
					<form className="gutcheck" ref={formRef} onSubmit={handleSubmit} name="google-sheet">
						<StepForm />
					</form>					
				</div>
      		</CursorWrapper>
		</div>

	)
}

export default Form