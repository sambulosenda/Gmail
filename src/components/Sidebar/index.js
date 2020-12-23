import React from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "../SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelIcon from "@material-ui/icons/Label";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import "./styles.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize={"large"} />}
        className="sidebar__compose"
      >
        Compose
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        title="inbox"
        number={54}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={24} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={24} />
      <SidebarOption Icon={LabelIcon} title="Important" number={14} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={34} />
      <SidebarOption Icon={NoteIcon} title="Draft" number={54} />
      <SidebarOption Icon={KeyboardArrowDownIcon} title="More" number={54} />
    </div>
  );
}
