import React from "react";
import styled from "styled-components";

import { Avatar } from "@mui/material";

function Message({ message, timestamp, user }) {
	return (
		<MessageContainer>
			<Avatar />
			<MessageInfo>
				<h4>
					{user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
				</h4>
				<p>{message}</p>
			</MessageInfo>
		</MessageContainer>
	);
}

export default Message;

const MessageContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 1.5rem;
`;

const MessageInfo = styled.div`
	padding-left: 1rem;
	> h4 > span {
		color: gray;
		font-weight: 300;
		margin-left: 0.5rem;
		font-size: 0.75rem;
	}
`;
