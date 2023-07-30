import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "../styles/Mydropdown.scss";
import track from "../icons/track.svg";
import heartbeat from "../icons/heartbeat.gif";
import accepted from "../icons/accept.svg";
import rejected from "../icons/decline.svg";
import futureStat from "../icons/futureStat.svg";
import leftArrow from "../icons/left-arrow.gif";

function MyDropdown({
  addHandle,
  rmvHandle,
  selectedTracks,
  currentStatus,
  futureStatus,
  addFutureStat,
}) {
  const handleStatusChange = (status) => {
    addHandle(status);
  };

  const handleTrackSelection = (selectedTrack) => {
    rmvHandle(selectedTrack);
  };
  const handleFutureTrack = (selectedTrack) => {
    addFutureStat(selectedTrack);
  };

  return (
    <div className="wrapper">
      <Navbar>
        <NavItem icon="▼">
          <DropdownMenu
            handleStatusChange={handleStatusChange}
            handleTrackSelection={handleTrackSelection}
            handleFutureTrack={handleFutureTrack}
            selectedTracks={selectedTracks}
            currentStatus={currentStatus}
            futureStatus={futureStatus}
          />
        </NavItem>
      </Navbar>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar" id="navbar_slide">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(true);

  return (
    <li className="nav-item">
      <span
        className="icon-button"
        onClick={() => {
          setOpen(!open);
        }}
      ></span>
      {open && props.children}
    </li>
  );
}

function DropdownMenu({
  handleStatusChange,
  handleTrackSelection,
  handleFutureTrack,
  selectedTracks,
  currentStatus,
  futureStatus,
}) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    const handleClick = () => {
      if (props.goToMenu) {
        setActiveMenu(props.goToMenu);
      } else if (props.status) {
        handleStatusChange(props.status);
      } else if (props.track) {
        handleTrackSelection(props.children);
      } else if (props.futureStatus) {
        handleFutureTrack(props.children.toLowerCase());
      }
    };
    return (
      <a
        href="#"
        className={`menu-item ${props.goToMenu ? "go-back" : ""}`}
        onClick={handleClick}
        style={{ textAlign: "center" }}
      >
        {props.goToMenu ? (
          <span
            className="icon-button"
            style={{ color: "white", marginRight: "15px" }}
          >
            {props.leftIcon}
          </span>
        ) : (
          <span
            className="icon-button"
            style={{
              backgroundColor:
                selectedTracks.includes(props.children) ||
                (currentStatus.includes(props.children.toLowerCase()) &&
                  props.mode == "status") ||
                (futureStatus == props.children.toLowerCase() &&
                  props.mode == "future")
                  ? "#FF7373"
                  : "#0f0f14",
            }}
          >
            {props.leftIcon}
          </span>
        )}
        {props.children}
      </a>
    );
  }

  const tracks = [
    "All Tracks",
    "C-prog",
    "AVR",
    "ARM",
    "FullStack",
    "FrontEnd",
    "React",
    "Nodejs",
    "Digital",
    "Python",
    "Flutter",
    "Desktop",
  ];

  const StatusEnum = {
    ACCEPTED: "accepted",
    REJECTED: "rejected",
    PENDING: "pending",
    EMAILED: "emailed",
    FILTERED: "filtered",
    SCHEDULED: "scheduled",
    SECONDPREF: "secondpref",
  };

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
      >
        <div className="menu">
          <DropdownItem
            leftIcon={
              <img
                src={heartbeat}
                alt="Status Icon"
                style={{ height: "60px" }}
              />
            }
            goToMenu="status"
          >
            Status
          </DropdownItem>
          <DropdownItem
            leftIcon={
              <img src={track} alt="Status Icon" style={{ height: "50px" }} />
            }
            goToMenu="tracks"
          >
            Track
          </DropdownItem>
          <DropdownItem
            leftIcon={
              <img
                src={futureStat}
                alt="Status Icon"
                style={{ height: "50px" }}
              />
            }
            goToMenu="futureStatus"
            futureStatus={futureStatus}
          >
            Planned Status
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "status"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            goToMenu="main"
            leftIcon={
              <img
                src={leftArrow}
                alt="Status Icon"
                style={{
                  height: "30px",
                  width: "30px",
                  borderRadius: "10%",
                  objectFit: "cover",
                }}
              />
            }
          >
            <h2>Select Status</h2>
          </DropdownItem>
          {Object.values(StatusEnum).map((status) => (
            <DropdownItem key={status} status={status} mode={"status"}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </DropdownItem>
          ))}
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "tracks"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu" id="tracks-menu">
          <DropdownItem
            goToMenu="main"
            leftIcon={
              <img
                src={leftArrow}
                alt="Status Icon"
                style={{
                  height: "45px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            }
          >
            <h4 style={{ fontSize: "13px" }}>Select Track</h4>
          </DropdownItem>
          {tracks.map((track) => (
            <DropdownItem key={track} track mode={"track"}>
              {track.charAt(0).toUpperCase() + track.slice(1)}
            </DropdownItem>
          ))}
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "futureStatus"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            goToMenu="main"
            leftIcon={
              <img
                src={leftArrow}
                alt="Status Icon"
                style={{
                  height: "45px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            }
          >
            <h2>Select Status</h2>
          </DropdownItem>
          {Object.values(StatusEnum).map((status) => (
            <DropdownItem key={status} futureStatus mode={"future"}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </DropdownItem>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
}

export default MyDropdown;
