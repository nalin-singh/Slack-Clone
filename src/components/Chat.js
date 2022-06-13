import React from "react";
import styled from "styled-components";
import { StarBorderOutlined, InfoOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectChannelID } from "../features/channelSlice";
function Chat() {
	const channelId = useSelector(selectChannelID);
	return (
		<ChatContainer>
			<Header>
				<HeaderLeft>
					<h4>
						<strong>#Room-Name</strong>
					</h4>
					<StarBorderOutlined />
				</HeaderLeft>
				<HeaderRight>
					<p>
						<InfoOutlined /> Details
					</p>
				</HeaderRight>
			</Header>
			<ChatMessages></ChatMessages>
			<ChatInput channelID={channelId}></ChatInput>
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

const ChatMessages = styled.div``;

const ChatInput = styled.div``;
