"use client";
import { AuthProvider, useAuth } from "@pangeacyber/react-auth";
import AppBar from "../components/AppBar";
import SideBar from "../components/SideBar";

import "./globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const hostedLoginURL = process?.env?.NEXT_PUBLIC_AUTHN_HOSTED_LOGIN_URL || "";
  const authConfig = {
    clientToken: process?.env?.NEXT_PUBLIC_AUTHN_CLIENT_TOKEN || "",
    domain: process?.env?.NEXT_PUBLIC_PANGEA_DOMAIN || "",
  };

  const { user } = useAuth(); // get user's authentication status

  if (!authConfig.clientToken || !authConfig.domain) {
    return (
      <html lang="en">
        <head />
        <body style={{ padding: "40px", textAlign: "center" }}>
          <h2>
            Please configure your environment variables. See the README for
            more...
          </h2>
        </body>
      </html>
    );
  }
  return (
    <html lang="en">
      <head />
      <body>
        <AuthProvider loginUrl={hostedLoginURL} config={authConfig}>
          <>
            <AppBar />
            {user  && <SideBar />} {/* Sidebar will only render if user is authenticated and not loading */}
            {children}
          </>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;