import { Fragment } from "react";
import BottomNavBar from "../components/BottomNavBar";

export default function NonAuthPagesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      {children}
      <BottomNavBar />
    </Fragment>
  );
}
