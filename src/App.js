import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<AppBody>
					<Header />
					<Sidebar />
					<Chat />
				</AppBody>
				<Routes>
					<Route path="/" exact />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

const AppBody = styled.div`
	display: flex;
	height: 100vh;
`;
