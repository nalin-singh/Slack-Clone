import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { StarBorderOutlined, InfoOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectChannelID } from "../features/channelSlice";
import ChatInput from "./ChatInput";
import Message from "./Message";
import { database } from "../firebase-config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";

function Chat() {
	const chatRef = useRef(null);
	const channelId = useSelector(selectChannelID);

	//Finding the channel name from channelID
	const docRef = doc(
		database,
		"channels",
		channelId ? channelId : "0jlLxGdxphQU5Wd3BGh9"
	);
	const colRef = collection(docRef, "messages");
	const [channelDetails, loading, error] = useDocument(docRef);
	const [channelMessages, stillLoading] = useCollection(colRef);
	const channelName = channelDetails?.data().name;

	//Automatically Scroll to Bottom
	useEffect(() => {
		chatRef?.current?.scrollIntoView({ behavior: "smooth"});
	}, [channelId, stillLoading]);

	return (
		<ChatContainer>
			<Header>
				<HeaderLeft>
					<h4>
						<strong>#{channelName}</strong>
					</h4>
					<StarBorderOutlined />
				</HeaderLeft>
				<HeaderRight>
					<p>
						<InfoOutlined /> Details
					</p>
				</HeaderRight>
			</Header>
			<ChatMessages>
				{channelMessages?.docs.map((doc) => {
					const { message, timestamp, user } = doc.data();
					return (
						<Message
							key={doc.id}
							message={message}
							timestamp={timestamp}
							user={user}
						/>
					);
				})}
				<ChatBottom ref={chatRef} />
			</ChatMessages>
			<ChatInput chatRef={chatRef} channelId={channelId} channelName={channelName} />
		</ChatContainer>
	);
}

export default Chat;

const ChatContainer = styled.div`
	flex: 0.8;
	flex-grow: 1;
	overflow-y: scroll;
	margin-top: 4rem;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1.25rem;
	border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
	display: flex;
	align-items: center;

	> h4 {
		display: flex;
		margin-right: 0.5rem;
		text-transform: lowercase;
	}
	> h4 > .MuiSvgIcon-root {
		font-size: 1rem;
	}
`;

const HeaderRight = styled.div`
	> p {
		display: flex;
		align-items: center;
		font-size: 0.75rem;
	}
	> p > .MuiSvgIcon-root {
		margin-right: 0.5rem;
		font-size: 0.75rem;
	}
`;

const ChatMessages = styled.div`
	display: block;
`;

const ChatBottom = styled.div`
	padding-bottom: 16rem;
`;
