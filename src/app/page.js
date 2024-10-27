/** @format */

"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
	const route = useRouter();

	const [data, setData] = useState([]);

	async function userData() {
		let response = await fetch("https://dummyjson.com/users");
		let jsonData = await response.json();
		setData(jsonData.users);
	}

	useEffect(() => {
		userData();
	}, []);

	return (
		<>
			<div className="flex h-screen w-screen items-center justify-center">
				<button
					onClick={() => route.push("/Pages/homePage")}
					className="m-2 px-4 py-2 bg-gray-400 w-48 h-18 border rounded-xl">
					Home
				</button>
				<button
					onClick={() => route.push("/Pages/contactPage")}
					className="m-2 px-4 py-2 bg-gray-400 w-48 h-18 border rounded-xl">
					Contact
				</button>
				<button
					onClick={() => route.push("/Pages/loginPage")}
					className="m-2 px-4 py-2 bg-gray-400 w-48 h-18 border rounded-xl">
					Login
				</button>
				<button
					onClick={() => route.push("/Pages/serverApi")}
					className="m-2 px-4 py-2 bg-gray-400 w-48 h-18 border rounded-xl">
					Server API
				</button>
			</div>
			{data.map((user) => {
				return <p key={user.id}>{user.firstName}</p>;
			})}
			<Image
				alt="img"
				width={1000}
				height={1000}
				src="https://images.unsplash.com/photo-1542397284385-6010376c5337?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
			/>
		</>
	);
}
