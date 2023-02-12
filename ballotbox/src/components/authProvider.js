// import { Navigate, useLocation} from "react-router-dom";

// export default {
//     login: ({ username }) => {
//         localStorage.setItem('email', email);
//         return Promise.resolve();
//     },
//    logout: () => {
//         localStorage.removeItem('email');
//         return Promise.resolve();
//     },
//     checkError: ({ status }) => {
//         if (status === 401 || status === 403) {
//             localStorage.removeItem('email');
//             return Promise.reject();
//         }
//         return Promise.resolve();
//     },
//     checkAuth: () => {
//         return localStorage.getItem('email')
//             ? Promise.resolve()
//             : Promise.reject();
//     },
//     getPermissions: () => Promise.resolve(),
//  };


// export const ProtectedRoute = ({children}) => {
//    let location = useLocation();
//    if(!localStorage.getItem("id")){
//      return <Navigate  to="/login" state={{ from: location }}  replace />;
//    }
//    return children;
//  };