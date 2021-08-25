import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { loadGames } from "../actions/gamesAction";

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadGames());
	});
	return <div>
		<h1>Homea</h1>
	</div>;
};

export default Home;
