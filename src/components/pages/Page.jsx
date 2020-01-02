import React from "react";

import ReactGA from "react-ga";

class Page extends React.PureComponent {
	componentDidMount() {
		const { pathname } = this.props.location;

		if( pathname ) {
			ReactGA.pageview(pathname);
		}
  	}

  	render() {
  		return null;
  	}
}

export default Page;