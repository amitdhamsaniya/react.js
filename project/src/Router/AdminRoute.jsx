import { useRoutes } from "react-router-dom";
import AdminTemplate from './../Component/Admin/AdminTemplate.jsx'
import AdminDeshboard from './../Component/Admin/AdminDeshboard.jsx'
import Allusers from './../Component/Admin/Allusers.jsx'

const ClassCompoRoute = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <AdminTemplate />,
            children: [
                {
                    path:"dashboard",
                    element:<AdminDeshboard/>
                },
                {
                    path:"allusers",
                    element:<Allusers/>
                }

            ]
        }])
        return routes
}
export default ClassCompoRoute