import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase-config";

function App() {
	const [user, laoding] = useAuthState(auth);
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
