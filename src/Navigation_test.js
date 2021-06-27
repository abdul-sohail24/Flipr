import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

const Navigationbar = () => {
	return (
		<>
			<Nav>
				<Bars />
				<NavMenu>
					<NavLink to="/list" activeStyle>
						Home
					</NavLink>
					<NavLink to="/history" activeStyle>
						History
					</NavLink>
					<NavLink to="/login" activeStyle>
						Login
					</NavLink>
					<NavLink to="/signup" activeStyle>
						Signup
					</NavLink>
					<NavLink to="/form" activeStyle>
						To
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navigationbar;
