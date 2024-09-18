import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fromInput, withParamsAction } from "../redux/action";


const ContactsPage = () => {

    const[input, setInput] = useState('');

    const contactsTitle = useSelector(state => state.contactsReducer.contactsTitle)

    const dispatch = useDispatch()

    const changeTitle = () =>{
      dispatch(withParamsAction())
    }

    const addInput = () => {
       dispatch(fromInput(input ))
    }

    return(
        <div>
            <h1>{contactsTitle}</h1>
            <button onClick={changeTitle}>change title by params</button>
            <p>----------------------------------</p>
            <input type="text" onChange={(event) => setInput(event.target.value)}/>
            <button onClick={addInput}>add</button>
        </div>
    )
}
 
export default ContactsPage;