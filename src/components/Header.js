import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import { AccessTime, Search, HelpOutline } from "@mui/icons-material";

function Header() {
	return (
		<>
			<HeaderContainer>
				<HeaderLeft>
					<HeaderAvatar />
					<AccessTime />
				</HeaderLeft>
				<HeaderSearch>
					<Search />
					<input placeholder="Search Craftic"></input>
				</HeaderSearch>
				<HeaderRight>
					<HelpOutline />
				</HeaderRight>
			</HeaderContainer>
		</>
	);
}

export default Header;

const HeaderContainer = styled.div`
	display: flex;
	position: fixed;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	padding: 10px 0;
	background-color: var(--slack-color);
	color: #ffffff;
`;

const HeaderLeft = styled.div`
	flex: 0.2;
	display: flex;
	align-items: center;
	margin-left: 24px;

	> .MuiSvgIcon-root {
		margin-left: auto;
		margin-right: 24px;
	}
`;

const HeaderRight = styled.div`
	flex: 0.2%;
	display: flex;
	align-items: flex-end;

	> .MuiSvgIcon-root {
		margin-left: auto;
		margin-right: 24px;
	}
`;

const HeaderAvatar = styled(Avatar)`
	cursor: pointer;
	:hover {
		opacity: 0.8;
	}
`;

const HeaderSearch = styled.div`
	flex: 0.4;
	opacity: 1;
	border-radius: 0.25rem;
	text-align: center;
	display: flex;
	padding: 0 50px;
	color: gray;
	border: 1px gray solid;
	> input {
		background-color: transparent;
		border: none;
		text-align: center;
		min-width: 30vw;
		outline: 0;
		color: white;
	}
`;
