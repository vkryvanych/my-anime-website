import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  const path = location.pathname;

  let headerProps = { showBackButton: false };
  let footerProps = { showAuthButtons: false, showContactLink: false };

  if (path === "/" || path === "/home") {
    headerProps = { showBackButton: false };
    footerProps = { showAuthButtons: true, showContactLink: true };
  } 
  else if (path.startsWith("/test")) {
    headerProps = { showBackButton: true };
    footerProps = { showAuthButtons: true, showContactLink: true };
  } 
  else if (path.startsWith("/auth")) {
    headerProps = { showBackButton: true };
    footerProps = { showAuthButtons: false, showContactLink: true };
  } 
  else if (path.startsWith("/contact")) {
    headerProps = { showBackButton: true };
    footerProps = { showAuthButtons: false, showContactLink: false };
  }

  return (
    <>
      <Header {...headerProps} />
        <Outlet />
      <Footer {...footerProps} />
    </>
  );
}
export default Layout;