"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
	const route = useRouter();

	const [data, setData] = useState([]);
	async function userData() {
		let responce = await fetch("https://dummyjson.com/users");
		let jsonData = responce.json();
		console.log(jsonData);
	}
	useEffect(() => {
		userData();
	}, []);

	return (
		<>
			<div className="flex h-screen w-screen items-center justify-center">
				<button
					onClick={() => {
						route.push("/Pages/homePage");
					}}
					className="m-2 px4 py-2 bg-gray-400 w-48 h-18 border rounded-xl"
				>
					home
				</button>
				<button
					onClick={() => {
						route.push("/Pages/contactPage");
					}}
					className="m-2 px4 py-2 bg-gray-400 w-48 h-18 border rounded-xl"
				>
					contact
				</button>
				<button
					onClick={() => {
						route.push("/Pages/loginPage");
					}}
					className="m-2 px4 py-2 bg-gray-400 w-48 h-18 border rounded-xl"
				>
					login
				</button>
			</div>
		</>
	);
}
