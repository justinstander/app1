import React from "react";

import ReactGA from "react-ga";

/**
 * Page Component
 */
class Page extends React.PureComponent {
  /**
   * Tracks a pageview in Google Analytics when it mounts
   * 
   * @return {undefined}
   */
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