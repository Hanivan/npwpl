import React from "react";
import Footer from "@/components/stateless/Footer";
import Navbar from "../statefull/Navbar";

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout = (props: BaseLayoutProps) => {
  return (
    <>
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
