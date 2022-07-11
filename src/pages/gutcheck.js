import React, { useState, useRef } from 'react'
// import OmLogo from '../components/OmLogo'
import StepForm from '../components/StepForm'
import CursorWrapper from '../components/CursorWrapper'

const Form = () => {
		const formRef = useRef(null)
		const scriptUrl = "https://script.google.com/a/macros/overhaulmedia.com/s/AKfycbwE4Ed4-OEhVdeY_Kvfp2O-6GMlGc9-0Jwf9tXGJB8oDUFtxC1aRoGxgUj_HsVbX_lc/exec"
		const [finished, setFinished] = useState(false)

		const handleSubmit = (e) =>{
				e.preventDefault()
				fetch(scriptUrl, {
					method: 'POST', 
					body: new FormData(formRef.current),
				})
				.then(res => {
					document.getElementsByClassName('gutcheck').innerHtml = "DONE"
					setFinished(true)
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
					{ (!finished) ?
						<form className="gutcheck" ref={formRef} onSubmit={handleSubmit} name="google-sheet" >
							<StepForm />
						</form> :
						<div className="end-message">
							<h2>Form Submitted,</h2>
							<h2>Good Job!</h2>
						</div>
					}
				</div>
    		</CursorWrapper>
		</div>

	)
}

export default Form