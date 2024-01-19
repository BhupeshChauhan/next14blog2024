"use client";
import React from "react";
import BlankLayout from "./blank/BlankLayout";
import FullLayout from "./full/FullLayout";
import SnackBarComponent from "@/ui/SnackBarComponent";
import AuthProvider from "@/utils/AuthProvider";
import { GlobalContextProvider } from "@/context/GlobalContext";
import AuthGard from "./AuthGard";

interface Props {
  children: React.ReactNode;
  type: string;
}

const Layout: React.FC<Props> = ({ children, type }) => {
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <AuthProvider>
      <GlobalContextProvider>
        {type === "Full" && (
          <>
            {/* {loading && <LoadingSpinner />} */}
            <FullLayout>{children}</FullLayout>
          </>
        )}
        {type === "Blank" && (
          <>
            {/* {loading && <LoadingSpinner />} */}
            <BlankLayout>{children}</BlankLayout>
          </>
        )}
        <SnackBarComponent />
      </GlobalContextProvider>
    </AuthProvider>
  );
};

export default Layout;
