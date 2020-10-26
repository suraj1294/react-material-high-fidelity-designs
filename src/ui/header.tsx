import React, { FC, useState } from "react";
import { Link, LinkProps } from "react-router-dom";
import {
  AppBar,
  makeStyles,
  Toolbar,
  useScrollTrigger,
  Button,
  ButtonProps,
  MenuItem,
  Menu,
  MenuItemProps,
} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";

import Tab, { TabProps } from "@material-ui/core/Tab";

import logo from "../assets/logo.svg";

const LinkTab: React.ComponentType<
  TabProps & LinkProps
> = Tab as React.ComponentType<TabProps & LinkProps>;

const LinkButton: React.ComponentType<
  ButtonProps & LinkProps
> = Button as React.ComponentType<ButtonProps & LinkProps>;

const LinkMenuItem: React.ComponentType<
  LinkProps & MenuItemProps
> = MenuItem as React.ComponentType<LinkProps & MenuItemProps>;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "7em",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "24px",
  },
  button: {
    ...theme.typography.estimate,
    marginRight: "24px",
    marginLeft: "50px",
    height: "45px",
  },
}));

const routes = ["/", "/services", "/revolution", "/about", "/contact"];

const Header: FC<{}> = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [selectedTabIndex, setTabIndex] = useState(
    routes.findIndex((path) => path === window.location.pathname)
  );

  const handleTabChange = (e: React.ChangeEvent<{}>, value: number) => {
    setTabIndex(value);
  };

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <LinkButton
              component={Link}
              to="/"
              disableRipple
              className={classes.logoContainer}
              onClick={() => setTabIndex(0)}
            >
              <img src={logo} alt="Company logo" className={classes.logo} />
            </LinkButton>
            <Tabs
              value={selectedTabIndex}
              indicatorColor="primary"
              className={classes.tabContainer}
              onChange={handleTabChange}
            >
              <LinkTab
                className={classes.tab}
                label="Home"
                component={Link}
                to="/"
              />

              <LinkTab
                aria-controls="simple-menu"
                aria-haspopup="true"
                className={classes.tab}
                label="Services"
                component={Link}
                to="/services"
                onMouseOver={handleClick}
              />
              <LinkTab
                className={classes.tab}
                label="The Revolution"
                component={Link}
                to="/revolution"
              />
              <LinkTab
                className={classes.tab}
                label="About Us"
                component={Link}
                to="/about"
              />
              <LinkTab
                className={classes.tab}
                label="Contact Us"
                component={Link}
                to="/contact"
              />
            </Tabs>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <LinkMenuItem
                onClick={() => {
                  handleClose();
                  setTabIndex(1);
                }}
                component={Link}
                to="/services"
              >
                Services
              </LinkMenuItem>
              <LinkMenuItem
                onClick={() => {
                  handleClose();
                  setTabIndex(1);
                }}
                component={Link}
                to="/customServices"
              >
                Custom Services
              </LinkMenuItem>
              <LinkMenuItem
                onClick={() => {
                  handleClose();
                  setTabIndex(1);
                }}
                component={Link}
                to="/mobileApps"
              >
                Mobile Apps
              </LinkMenuItem>
              <LinkMenuItem
                onClick={() => {
                  handleClose();
                  setTabIndex(1);
                }}
                component={Link}
                to="/websites"
              >
                Websites
              </LinkMenuItem>
            </Menu>
            <LinkButton
              variant="contained"
              color="secondary"
              className={classes.button}
              component={Link}
              to="/estimate"
            >
              Free Estimate
            </LinkButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>
  );
};

export default Header;
