"use client";
import { useRouter } from "next/navigation";

export default function Home() 
{
	const route = useRouter();
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
