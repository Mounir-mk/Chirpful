import { Fragment } from "react";
import BottomNavBar from "../components/BottomNavBar";
import Header from "../components/Header";

export default function NonAuthPagesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <Header />
      {children}
      <BottomNavBar />
    </Fragment>
  );
}
