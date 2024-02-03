import { useRouteError } from "react-router-dom/dist"
import Root from "../components/Root"

const PageError = () => {
    const error = useRouteError()

    console.log(error.status)

    return <>
        <Root />
        <h1>L'erreur {error.status} s'est produite.</h1>
    </>
}

export default PageError