import { Button } from "@mui/material";
import {
	addDoc,
	collection,
	doc,
	serverTimestamp,
} from "firebase/firestore/lite";
import React, { useState } from "react";
import styled from "styled-components";
import { database } from "../firebase-config";

function ChatInput({ channelName, channelId }) {
	const [input, setInput] = useState("");
	const sendMessage = (e) => {
		e.preventDefault(); //Prevents Refresh when we press enter
		if (!channelId) {
			return false;
		}
		const docRef = doc(database, "channels", channelId);
		const colRef = collection(docRef, "messages");
		addDoc(colRef, {
			message: input,
			timestamp: serverTimestamp(),
			user: "Nalin Singh",
		});
		setInput("");
	};

	return (
		<ChatInputContainer>
			<form>
				<input
					value={input}
					placeholder={`Message #Room`}
					onChange={(e) => setInput(e.target.value)}
				/>
				<Button hidden type="submit" onClick={sendMessage}>
					Send
				</Button>
			</form>
		</ChatInputContainer>
	);
}

export default ChatInput;

const ChatInputContainer = styled.div`
	border-radius: 1.25rem;
	> form {
		position: relative;
		display: flex;
		justify-content: center;
	}
	> form > input {
		position: fixed;
		bottom: 2rem;
		width: 60%;
		border: 1px solid gray;
		border-radius: 0.2rem;
		padding: 1.25rem;
		outline: none;
	}
	> form > button {
		display: none !important;
	}
`;
