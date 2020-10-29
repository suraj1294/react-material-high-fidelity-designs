import React, { FC, useMemo, useState } from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";
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
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Tabs from "@material-ui/core/Tabs";
import Tab, { TabProps } from "@material-ui/core/Tab";
import logo from "../assets/logo.svg";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const LinkTab: React.ComponentType<
  TabProps & LinkProps
> = Tab as React.ComponentType<TabProps & LinkProps>;

const LinkButton: React.ComponentType<
  ButtonProps & LinkProps
> = Button as React.ComponentType<ButtonProps & LinkProps>;

const LinkMenuItem: React.ComponentType<
  LinkProps & MenuItemProps
> = MenuItem as React.ComponentType<LinkProps & MenuItemProps>;

const LinkListItem: React.ComponentType<
  LinkProps & ListItemProps
> = ListItem as React.ComponentType<LinkProps & ListItemProps>;

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
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.2em",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
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
  buttonEstimate: {
    ...theme.typography.estimate,
    marginRight: "24px",
    marginLeft: "50px",
    height: "45px",
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerMenuIcon: {
    height: "50px",
    width: "50px",
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 0,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      opacity: 0.7,
    },
  },
  selectedDrawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 1,
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

const routes = [
  { name: "Home", path: "/", index: 0 },
  { name: "Services", path: "/services", index: 1, haveSubMenu: true },
  { name: "The Revolution", path: "/revolution", index: 2 },
  { name: "About Us", path: "/about", index: 3 },
  { name: "Contact Us", path: "/contact", index: 4 },
];

const menuOptions = [
  { name: "Services", path: "/services", index: 1 },
  {
    name: "Custom Software Development",
    path: "/services/customSoftware",
    index: 1,
  },
  { name: "Mobile App development", path: "/services/mobileApps", index: 1 },
  { name: "Website Development", path: "/services/websites", index: 1 },
];

const getRouteIndex = (path: string) => {
  const route = [...routes, ...menuOptions].find(
    (route) => path.toLowerCase() === route.path.toLowerCase()
  );
  return route?.index;
};

const Header: FC<{}> = () => {
  const location = useLocation();
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS =
    (process as any).browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = React.useState(false);

  const selectedTabIndex = useMemo(() => getRouteIndex(location.pathname), [
    location,
  ]);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const isSelectedRoute = (path: string) => {
    if (path === "/") {
      return location.pathname === path;
    } else {
      return location.pathname.toLowerCase().includes(path.toLowerCase());
    }
  };

  const tabs = (
    <Tabs
      value={selectedTabIndex}
      indicatorColor="primary"
      className={classes.tabContainer}
    >
      {routes.map((route) =>
        !route.haveSubMenu ? (
          <LinkTab
            key={route.index}
            className={classes.tab}
            label={route.name}
            component={Link}
            to={route.path}
          />
        ) : (
          <LinkTab
            key={route.index}
            aria-controls={anchorEl ? "simple-menu" : undefined}
            aria-haspopup={openMenu ? "true" : undefined}
            className={classes.tab}
            label={route.name}
            component={Link}
            to={route.path}
            onMouseOver={handleClick}
          />
        )
      )}

      <LinkButton
        variant="contained"
        color="secondary"
        className={classes.buttonEstimate}
        component={Link}
        to="/estimate"
      >
        Free Estimate
      </LinkButton>
    </Tabs>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin}></div>
        <List disablePadding>
          {routes.map((route) => (
            <LinkListItem
              key={`${route.name}${route.index}`}
              button
              divider
              component={Link}
              to={route.path}
              selected={isSelectedRoute(route.path)}
              onClick={() => setOpenDrawer(false)}
              classes={{ selected: classes.selectedDrawerItem }}
              className={classes.drawerItem}
            >
              <ListItemText disableTypography>{route.name}</ListItemText>
            </LinkListItem>
          ))}

          <LinkListItem
            button
            component={Link}
            to="/estimate"
            selected={location.pathname
              .toLowerCase()
              .includes("/estimate".toLowerCase())}
            onClick={() => setOpenDrawer(false)}
            className={classes.drawerItemEstimate}
            classes={{ selected: classes.selectedDrawerItem }}
          >
            <ListItemText disableTypography>Free Estimate</ListItemText>
          </LinkListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        disableRipple
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerMenuIcon} />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <LinkButton
              component={Link}
              to="/"
              disableRipple
              className={classes.logoContainer}
            >
              <img src={logo} alt="Company logo" className={classes.logo} />
            </LinkButton>
            {matches ? drawer : tabs}
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={openMenu}
              onClose={handleClose}
              classes={{ paper: classes.menu }}
              elevation={0}
              style={{ zIndex: 1302 }}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              {menuOptions.map((menuOption, index) => (
                <LinkMenuItem
                  key={index}
                  component={Link}
                  to={menuOption.path}
                  classes={{
                    root: classes.menuItem,
                  }}
                  selected={isSelectedRoute(menuOption.path)}
                  onClick={handleClose}
                >
                  {menuOption.name}
                </LinkMenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>
  );
};

export default Header;
