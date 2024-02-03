import { createBrowserRouter } from "react-router-dom"
import Root from "../components/Root"
import Home from "../pages/Home"
import About from "../pages/About"
import PageError from "../pages/PageError"
import Housings from "../components/Housings"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <PageError />,
        children: [
            {
                path: "",
                element : <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "housings",
                children: [
                    {
                        path: "",
                        element: <div>Logement</div>
                    },
                    {
                        path: ":id",
                        element: <Housings />
                    }
                ]

            }

        ]
    }
])

export default router