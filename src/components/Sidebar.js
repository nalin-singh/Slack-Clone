import {
	Add,
	Apps,
	BookmarkBorder,
	Create,
	Drafts,
	ExpandLess,
	ExpandMore,
	FiberManualRecord,
	FileCopy,
	Inbox,
	InsertComment,
	PeopleAlt,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebase-config";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";

function Sidebar() {
	const databaseRef = collection(database, "channels");
	const [channels, setData] = useState([]);

	const getData = async () => {
		const data = await getDocs(databaseRef);
		setData(
			data.docs.map((item) => {
				return { ...item.data(), id: item.id };
			})
		);
	};

	useEffect(() => {
		getData();
	}, []);
	return (
		<SidebarContainer>
			<SidebarHeader>
				<SidebarInfo>
					<h2>Craftic.io</h2>
					<h3>
						<FiberManualRecord />
						Nalin Singh
					</h3>
				</SidebarInfo>
				<Create />
			</SidebarHeader>
			<SidebarOption Icon={InsertComment} title="Threads" />
			<SidebarOption Icon={Inbox} title="Mentions & Reactions" />
			<SidebarOption Icon={Drafts} title="Saved Items" />
			<SidebarOption Icon={BookmarkBorder} title="Channel Browser" />
			<SidebarOption Icon={PeopleAlt} title="People & User Groups" />
			<SidebarOption Icon={Apps} title="Apps" />
			<SidebarOption Icon={FileCopy} title="File Browser" />
			<SidebarOption Icon={ExpandLess} title="Show Less" />
			<hr />
			<SidebarOption Icon={ExpandMore} title="Channels" />
			<hr />
			<SidebarOption Icon={Add} addChannelOption title="Add Channel" />
			{channels.map((channel) => {
				return (
					<SidebarOption
						key={channel.id}
						channelId={channel.id}
						title={channel.name}
					/>
				);
			})}
		</SidebarContainer>
	);
}

export default Sidebar;

const SidebarContainer = styled.div`
	background-color: var(--slack-color);
	color: white;
	flex: 0.3;
	border-top: 0.16rem solid #49274b;
	max-width: 25rem;
	padding-top: 3.75rem;
	> hr {
		margin: 0.5rem 0;
		border: 1px solid #49274b;
	}
`;

const SidebarHeader = styled.div`
	display: flex;
	border-bottom: 1px solid #49274b;
	padding: 13px;

	> .MuiSvgIcon-root {
		padding: 8px;
		color: #49274b;
		font-size: 18px;
		background-color: white;
		border-radius: 2rem;
	}
`;

const SidebarInfo = styled.div`
	flex: 1;
	> h2 {
		font-size: 1rem;
		font-weight: 900;
		margin-bottom: 0.25rem;
	}
	> h3 {
		display: flex;
		font-size: 0.75rem;
		font-weight: 400;
		align-items: center;
	}
	> h3 > .MuiSvgIcon-root {
		font-size: 0.75rem;
		margin-top: 0.16rem 0.2rem;
		color: green;
	}
`;
