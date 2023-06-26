import { Fragment } from "react";
import BottomNavBar from "../components/BottomNavBar";
import Header from "../components/Header/Header";

export default function NonAuthPagesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <div className="md:max-w-screen-lg md:mx-auto md:flex md:gap-4">
        <Header />
        {children}
      </div>
      <BottomNavBar />
    </Fragment>
  );
}
