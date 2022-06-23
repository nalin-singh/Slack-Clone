import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";

import Spinner from "react-spinkit";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase-config";

function App() {
	const [user, loading] = useAuthState(auth);

	if (loading) {
		return (
			<AppLoading>
				<AppLoadingContainer>
					<img src="https://cdn.bfldr.com/5H442O3W/at/pl546j-7le8zk-6gwiyo/Slack_Mark.svg?auto=webp&format=png" />
					<Spinner name="circle" />
				</AppLoadingContainer>
			</AppLoading>
		);
	}

	return (
		<div className="App">
			<BrowserRouter>
				{!user ? (
					<Login />
				) : (
					<>
						<AppBody>
							<Header />
							<Sidebar />
							<Chat />
						</AppBody>
						<Routes>
							<Route path="/" exact />
						</Routes>
					</>
				)}
			</BrowserRouter>
		</div>
	);
}

export default App;

const AppBody = styled.div`
	display: flex;
	height: 100vh;
`;

const AppLoading = styled.div``;

const AppLoadingContainer = styled.div`
	text-align: center;
	padding: 12rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	> img {
		height: 8rem;
		padding: 2rem;
		margin-bottom: 5rem;
	}
`;
