import { Button } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase-config";

function Login() {
	const signIn = (e) => {
		e.preventDefault();
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
			});
	};
	return (
		<LoginContainer>
			<LoginInnerContainer>
				<img src="https://cdn.bfldr.com/5H442O3W/at/pl546j-7le8zk-6gwiyo/Slack_Mark.svg?auto=webp&format=png" />
				<h1>Sign in to Craftic.co</h1>
				<p>craftic.slack.com</p>
				<Button onClick={signIn}>Sign in with Google</Button>
			</LoginInnerContainer>
		</LoginContainer>
	);
}

export default Login;

const LoginContainer = styled.div`
	background-color: #f8f8f8;
	height: 100vh;
	display: grid;
	place-items: center;
`;
const LoginInnerContainer = styled.div`
	padding: 8rem;
	text-align: center;
	background-color: white;
	border-radius: 2rem;
	box-shadow: 0 0.2rem 0.4rem rgbc(0, 0, 0, 0.12),
		0 0.2rem 0.4rem rgba(0, 0, 0, 0.24);
	> img {
		object-fit: contain;
		height: 8rem;
		margin-bottom: 3.25rem;
	}
	> button {
		margin-top: 2rem;
		padding: 0.5rem 2rem;
		text-transform: inherit;
		background-color: #0a8d48;
		color: white;
	}
`;
