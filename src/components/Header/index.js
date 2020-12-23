import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import "./styles.css";
import { IconButton } from "@material-ui/core";

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>

        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png"
          alt=""
        />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input placeholder="search email" type="text" />
        <KeyboardArrowDownIcon className="header_inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>

        <IconButton>
          <NotificationsIcon />
        </IconButton>
      </div>
    </div>
  );
}
