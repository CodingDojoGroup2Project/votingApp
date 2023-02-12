import React from "react";
import { NavLink } from "react-router-dom";
// import { Admin, Resource, CustomRoutes } from 'react-admin';
// import jsonServerProvider from 'ra-data-json-server';
// import authProvider from "./authProvider";
// import {
// 	FirebaseAuthProvider,
//  } from 'react-admin-firebase';
 
 //connect the data provider to the REST endpoint
 
//  const config = {
// 	apiKey: "xxxxxxxxxxxxxxxxxxxxxxx",
// 	authDomain: "xxxxxxxxxxxxxxxxxxxxxxx",
// 	databaseURL: "xxxxxxxxxxxxxxxxxxxxxxx",
// 	projectId: "xxxxxxxxxxxxxxxxxxxxxxx",
// 	storageBucket: "xxxxxxxxxxxxxxxxxxxxxxx",
// 	messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxx",
//  };
 

// //connect the data provider to the REST endpoint
// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


const AdminLogReg = () => {
	return (
		<div className="bg-div p-20 flex flex-col items-center">
			<button className="navButton m-1 w-40"> 
				{/* <NavLink to="/login">ADMIN LOGIN</NavLink>
				{/* <Admin dataProvider={dataProvider} authProvider={firebaseAuthProvider}>
					<Resource name="admin" create={AdminRegister}/>
       			</Admin> */}
			</button>
			<br />
			<button className="navButton m-1 w-40">
				<NavLink to="/register">ADMIN REGISTER</NavLink>
			</button>
		{/* // 	<CustomRoutes>
		// 		<Route path="/login" element={<Login />} />
		// 		<Route path="/register" element={<Register />} />
        // </CustomRoutes> */}
		</div>
	);
};

export default AdminLogReg;
