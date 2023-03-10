import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = ({ setAdmin }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [ errors, setErrors ] = useState([]);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post(
				"http://localhost:8000/api/admin/login",
				{
					email,
					password,
				},
				{ withCredentials: true, credentials: "include" }
			)
			.then((res) => {
				console.log("admin", res.data);
				navigate("/admin");
			})
			.catch((err) => {
				setErrors(err.response.data.error);
			});
	};

	return (
		<div className="bg-div">
			{/* <p className="text-3xl">Admin Login</p> */}

			{/* FORM STARTS */}
			<div className="rotate">
				<div className="font-sans flex min-h-full p-3 pt-5">
					<form
						className="m-auto bg-white drop-shadow-lg rounded-lg overflow-hidden w-96 accent-gray-800"
						onSubmit={handleSubmit}
					>
						<div className="p-6">
							<p className="text-3xl pl-3">Admin Login</p>
							<div className="mt-4 relative">
								<div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
									<i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
								</div>
								<input
									onChange={(e) => setEmail(e.target.value)}
									className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
									placeholder="Email"
									type="text"
								/>
							</div>
							<div className="mt-4 relative">
								<div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
									<i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
								</div>
								<input
									onChange={(e) => setPassword(e.target.value)}
									className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
									placeholder="Password"
									type="password"
								/>
							</div>
						</div>
						{
							errors ? <p className="text-red-600 text-center mb-2">{errors}</p> : null
						}
						<div>
							<button
								className="bg-[#c03e3c] uppercase py-4 w-full text-white text-xs tracking-widest"
								value="submit"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
			{/* FORM ENDS  */}
		</div>
	);
};

export default Login;
