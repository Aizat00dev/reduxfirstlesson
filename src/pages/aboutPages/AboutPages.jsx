import { useDispatch, useSelector } from "react-redux";
import { asyncFunctionAction } from "../../redux/action";






const AboutPage = () => {

    const aboutTitle = useSelector(state => state.aboutReducer.aboutTitle)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>{aboutTitle}</h1>
            <button onClick={() => dispatch(asyncFunctionAction())}>after 2 s</button>
        </div>
    )

}

export default AboutPage;