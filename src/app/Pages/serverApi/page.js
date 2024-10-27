/** @format */

import React from "react";

const ServerApi = async () => {
	async function userData() {
		let response = await fetch("https://dummyjson.com/users");
		let jsonData = await response.json();
		return jsonData.users;
	}

	console.log(userData());
	let users = await userData();
	return (
		<>
			<div>ServerApi</div>
			{users.map((e) => (
				<p>{e.firstName}</p>
			))}
		</>
	);
};

export default ServerApi;
