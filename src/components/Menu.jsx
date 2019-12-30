import React from "react";

import {
  MenuNavbar,
  MenuNav,
  MenuBrand,
  MenuLink
} from "./Menu.style";

export class Menu extends React.PureComponent {
	render() {
		return (
			<MenuNavbar expand="md">
  				<MenuBrand>
            <MenuLink to="/">Haas & Milan</MenuLink>
          </MenuBrand>
  				<MenuNavbar.Toggle />
  				<MenuNavbar.Collapse>
    				<MenuNav className="mr-auto"/>
            <MenuNav>
              <MenuLink to="/search">Search</MenuLink>
              <MenuLink to="/schedules">Schedules</MenuLink>
              <MenuLink to="/settings">Settings</MenuLink>
            </MenuNav>
  				</MenuNavbar.Collapse>
			</MenuNavbar>
		);
	}
}