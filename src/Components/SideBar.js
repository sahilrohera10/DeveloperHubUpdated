import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { MdContentPaste } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div
      style={{
        width: "290px",
        height: "745px",
        background: "#25233B",
        color: "#a6a6a6",
        position: "fixed",
      }}
    >
      <h1 style={{ width: "130px", margin: "30px", color: "white" }}>
        UNBOUNCE
      </h1>
      <Link
        to="/dashboard"
        style={{ textDecoration: "none", color: "#a6a6a6" }}
      >
        <div className="sidebarDiv">
          {" "}
          <RiDashboardFill size={25} />{" "}
          <p className="sidebarContent">Dashboard</p>
        </div>
      </Link>
      <Link to="/courses" style={{ textDecoration: "none", color: "#a6a6a6" }}>
        <div className="sidebarDiv">
          <MdOutlineMiscellaneousServices size={25} />
          <p className="sidebarContent">Courses</p>
        </div>
      </Link>
      <Link to="/lectures" style={{ textDecoration: "none", color: "#a6a6a6" }}>
        <div className="sidebarDiv">
          <MdContentPaste size={25} />
          <p className="sidebarContent"> Lectures</p>
        </div>
      </Link>

      <Link to="/profile" style={{ textDecoration: "none", color: "#a6a6a6" }}>
        <div className="sidebarDiv">
          <MdContentPaste size={25} /> <p className="sidebarContent">Profile</p>
        </div>
      </Link>
    </div>
  );
}
