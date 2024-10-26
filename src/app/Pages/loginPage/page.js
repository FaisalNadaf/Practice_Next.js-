"use client"
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
	const route = useRouter();
	return (
		<div>
			<div>Login Page</div>
			<button
				onClick={() => {
					route.push("/");
				}}
				className="m-2 px4 py-2 bg-gray-400 w-48 h-18 border rounded-xl"
			>
				Back
			</button>
		</div>
	);
};

export default LoginPage;
