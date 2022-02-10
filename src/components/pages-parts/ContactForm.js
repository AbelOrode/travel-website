import { useState } from "react"

const ContactForm = () => {
//Data binding using state
const [state, setState] = useState({
    name: '',
    email: '',
    message: ''
})

const submitContact = (e) =>{
    e.preventDefault();
    console.log(state)
}
    return(
        <>
            <form onSubmit={submitContact}>
                <h3 className="page__contact__heading">Contact Form</h3>
                <div className="group">
                    <input type="text" 
                            name= ''
                            className="group__control"
                            placeholder="Your name e.g. Smith"
                            value={state.name}
                            onChange={(e) => setState({...state, name : e.target.value})}
                    />
                </div>
                <div className="group">
                    <input type="email" 
                            name= ''
                            className="group__control"
                            placeholder="Your name e.g. Smith@email.com"
                            value={state.email}
                            onChange={(e) => setState({...state, email: e.target.value})}
                    />
                </div>
                <div className="group">
                    <textarea 
                        cols='45' 
                        rows='8' 
                        className="group__textarea"
                        placeholder="Write your message here...." 
                        defaultValue = {state.message}
                        onChange = {(e) => setState({...state, message: e.target.value})}    
                    />
                </div>
                <div className="group">
                    <input 
                        type='submit' 
                        value='send email &rarr;'
                        className="btn-dark"
                    />
                </div>
            </form>
        </>
    )

}

export default ContactForm;