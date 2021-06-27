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
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				{/* <NavBtn>
					<NavBtnLink to="/signin">Sign In</NavBtnLink>
				</NavBtn> */}
			</Nav>
		</>
	);
};

export default Navigationbar;
