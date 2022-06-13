import React from "react";
import styled from "styled-components";
import { useCollection } from "react-firebase-hooks/firestore";
import { database } from "../firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";

import { useDispatch } from "react-redux";
import { enterChannel } from "../features/channelSlice";

function SidebarOption({ channelId, Icon, title, addChannelOption }) {
	const databaseRef = collection(database, "channels");
	const addChannel = () => {
		const channelName = prompt("Please enter the channel name : ");
		if (channelName) {
			addDoc(databaseRef, { name: channelName });
		}
	};

	const dispatch = useDispatch();
	const selectChannel = () => {
		if (channelId) {
			dispatch(enterChannel({ channelID: channelId }));
		}
	};

	return (
		<SidebarOptionContainer
			onClick={addChannelOption ? addChannel : selectChannel}
		>
			{Icon && <Icon fontSize="small" style={{ padding: 8 }} />}
			{Icon ? (
				<h3>{title}</h3>
			) : (
				<SidebarOptionChannel>
					<span>#</span>
					{title}
				</SidebarOptionChannel>
			)}
		</SidebarOptionContainer>
	);
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
	display: flex;
	font-size: 0.75rem;
	padding-left: 0.25rem;
	align-items: center;
	cursor: pointer;
	:hover {
		opacity: 0.9;
		background-color: #340e36;
	}

	> h3 {
		font-weight: 500;
	}
	> h3 > span {
		padding: 1rem;
	}
`;
const SidebarOptionChannel = styled.h3`
	padding: 8px;
	font-weight: 300;
`;
