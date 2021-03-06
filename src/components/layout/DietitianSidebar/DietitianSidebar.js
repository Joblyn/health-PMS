import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Col } from "shards-react";

import SidebarMainNavbar from "../MainSidebar/SidebarMainNavbar";
import SidebarSearch from "../MainSidebar/SidebarSearch";
import SidebarNavItems from "./SidebarNavItems";

import { Store } from "../../../flux";

class DietitianSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuVisible: false,
      sidebarNavItems: Store.getDietitianSidebarItems()
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      ...this.state,
      menuVisible: Store.getMenuState(),
      sidebarNavItems: Store.getDietitianSidebarItems()
    });
  }

  render() {
    const classes = classNames(
      "main-sidebar",
      "px-0",
      "col-12",
      this.state.menuVisible && "open"
    );

    return (
      <Col
        tag="aside"
        className={classes}
        lg={{ size: 2 }}
        md={{ size: 3 }}
      >
        <SidebarMainNavbar hideLogoText={this.props.hideLogoText} />
        <SidebarSearch />
        <SidebarNavItems />
      </Col>
    );
  }
}

DietitianSidebar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool
};

DietitianSidebar.defaultProps = {
  hideLogoText: false
};

export default DietitianSidebar;
