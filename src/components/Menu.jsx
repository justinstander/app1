import React from "react";

import {
  MenuNavbar,
  MenuNav,
  MenuNavDropdown,
  MenuBrand
} from "./Menu.style";

export class Menu extends React.PureComponent {
	// TODO: Replace href links with React Router Links
	// 
	render() {
		return (
			<MenuNavbar expand="lg" variant="dark">
  				<MenuBrand href="/">Haas & Milan</MenuBrand>
  				<MenuNavbar.Toggle />
  				<MenuNavbar.Collapse>
    				<MenuNav className="mr-auto">
      					<MenuNav.Link href="/">Home</MenuNav.Link>
      					<MenuNav.Link href="/about">About</MenuNav.Link>
      					<MenuNavDropdown title="Dropdown">
        					<MenuNavDropdown.Item href="/">Action</MenuNavDropdown.Item>
        					<MenuNavDropdown.Item href="/about">Another action</MenuNavDropdown.Item>
        					<MenuNavDropdown.Item href="/">Something</MenuNavDropdown.Item>
        					<MenuNavDropdown.Divider />
        					<MenuNavDropdown.Item href="/about">Separated link</MenuNavDropdown.Item>
      					</MenuNavDropdown>
    				</MenuNav>
  				</MenuNavbar.Collapse>
			</MenuNavbar>
		);
	}
}