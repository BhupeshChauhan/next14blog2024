"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  styled,
  IconButton,
  Grid,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";

// components
import Logo from "../shared/logo/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuItems from "../sidebar/MenuItems";

interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: ItemType) => {
  const pathname = usePathname();
  const { items }: any = MenuItems();
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: theme.palette.background.paper,
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    [theme.breakpoints.up("lg")]: {
      minHeight: "70px",
    },
    padding: 0,
    width: "cal(100vw - 270px)",
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled
      position="fixed"
      color="default"
      style={{
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ToolbarStyled
        className="p-0 w-full"
        style={{
          borderBottom: "1px solid #f7f7f7",
          borderBottomRightRadius: "10px",
          borderBottomLeftRadius: "10px",
          zIndex: "100",
          maxWidth: "1300px",
          backgroundColor: "white",
        }}
      >
        <nav
          className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
          style={{ width: "100%" }}
        >
          <Grid
            container
            className="max-w-screen-xl w-full flex flex-wrap items-center justify-between mx-auto p-4"
          >
            <Grid
              item
              xs={3}
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Link href="/">
                <Logo />
              </Link>
            </Grid>
            <Grid
              item
              xs={7}
              sx={{
                display: {
                  lg: "flex",
                  xs: "none",
                },
                alignItems: "center",
                justifyContent: "flex-end",
              }}
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            >
              <Grid
                container
                className="flex p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                justifyContent="end"
              >
                {items.map((item: any) => (
                  <Grid item key={item?.id}>
                    <Link
                      href={item?.href}
                      style={
                        pathname === item?.href
                          ? {
                              color: "white",
                              background: "#5D87FF",
                              padding: "5px 10px 5px 10px",
                              margin: "0 2px 0 2px",
                              borderRadius: "5px",
                            }
                          : {
                              padding: "3px 10px 3px 10px",
                            }
                      }
                    >
                      {item?.title}
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
            >
              <Button
                variant="contained"
                sx={{
                  display: {
                    lg: "inline",
                    xs: "none",
                  },
                }}
              >
                Get started
              </Button>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={toggleMobileSidebar}
                sx={{
                  display: {
                    lg: "none",
                    xs: "inline",
                  },
                }}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </IconButton>
            </Grid>
          </Grid>
        </nav>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
