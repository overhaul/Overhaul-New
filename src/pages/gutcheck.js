import React, { useState, useRef } from 'react'
import { Helmet } from "react-helmet"
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
			<Helmet>
				<meta name="robots" content="noindex, nofollow" />
			</Helmet>
			<CursorWrapper>
				<div className="layout dark">
					{ (!finished) ?
						<form className="gutcheck" ref={formRef} onSubmit={handleSubmit} name="google-sheet" >
							<StepForm />
						</form> :
						<div className="end-message">
							<h1>That's It,<br></br>
							Good Job!</h1>
						</div>
					}
				</div>
    		</CursorWrapper>
		</div>

	)
}

export default Form