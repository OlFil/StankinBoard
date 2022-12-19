/*import { Route,Routes, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './component/routes';
import { LOGIN_ROUTE,CREATE_ROUTE } from './component/routes';
import Login from "./pages/Login";

const AppRouter = () => {
    const user = false;
    return user ?
    (
        <Routes>
            {privateRoutes.map(({path, Component})=>
            <Route path={path} component={Component}/>
            )}
        </Routes>
    )
    :
    (
        <Routes>
             {publicRoutes.map(({path, Component})=>
            <Route path={path} component={Component}/>
            )}
        </Routes>
    )
};

export default AppRouter;*/