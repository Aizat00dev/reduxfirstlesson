import { useDispatch } from "react-redux"
import { changeAboutTitleAction } from "../redux/action"

const ChangeTitle = () => {

    const dispatch = useDispatch()

    const change = () => {
        dispatch(
            dispatch(changeAboutTitleAction())
        )
    }

    return(
        <div>
            <button onClick={change}>change</button>
        </div>
    )
}

export default ChangeTitle;