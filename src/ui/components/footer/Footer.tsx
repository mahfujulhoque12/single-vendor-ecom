import React from "react";

import DesktopFooter from "./atom/DesktopFooter";
import MobileFooter from "./atom/MobileFoote";

const Footer = () => {
  return (
    <div>
      <div className="block sm:hidden">
        <MobileFooter />
      </div>
      <div className="hidden sm:block">
        <DesktopFooter />
      </div>
    </div>
  );
};

export default Footer;