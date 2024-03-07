import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import RectangleFrame from "../components/RectangleFrame";
import LabelLabelLabelLabelLabel from "../components/LabelLabelLabelLabelLabel";
import "./EventName.css";

const MacBookPro161 = () => {
  return (
    <div className="macbook-pro-16-28">
      <div className="wrapper-group-11">
        <img className="wrapper-group-1-item" alt="" src="/group-1.svg" />
      </div>
      <main className="frame-container">
        <RectangleFrame wrapperEllipse1Height="unset" propHeight="unset" />
        <section className="l-a-b-e-l-f-r-a-m-e">
          <form className="p-o-s-i-t-i-o-n-t-i-m-e-i-n-f">
            <div className="frame-parent">
              <div className="wrapper">
                <FormControl
                  className="formcontrol"
                  variant="standard"
                  sx={{
                    borderColor: "#d175b6",
                    borderStyle: "SOLID",
                    borderTopWidth: "2px",
                    borderRightWidth: "2px",
                    borderBottomWidth: "2px",
                    borderLeftWidth: "2px",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    borderRadius: "8px",
                    width: "100%",
                    height: "56px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "56px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "56px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "56px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "56px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#d175b6",
                      fontSize: 20,
                      fontWeight: "Regular",
                      fontFamily: "Kanit",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "20px",
                    },
                  }}
                >
                  <InputLabel color="success" />
                  <Select
                    color="success"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="24px"
                        height="24px"
                        src="/arrow.svg"
                        style={{ marginRight: "20px" }}
                      />
                    )}
                  >
                    <MenuItem>Events</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
              <div className="frame-wrapper">
                <div className="frame-group">
                  <div className="vector-group-parent">
                    <img
                      className="vector-group-icon"
                      alt=""
                      src="/vector-container.svg"
                    />
                    <img className="icon" alt="" src="/vector-1.svg" />
                    <img className="english-icon" alt="" src="/vector-1.svg" />
                    <img
                      className="register-icon"
                      loading="lazy"
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                  <div className="main-frame">
                    <TextField
                      className="sub-item7"
                      placeholder="New Requests"
                      variant="outlined"
                      sx={{
                        "& fieldset": { borderColor: "#d175b6" },
                        "& .MuiInputBase-root": {
                          height: "36px",
                          backgroundColor: "#000",
                          fontSize: "14px",
                        },
                        "& .MuiInputBase-input": { color: "#d175b6" },
                      }}
                    />
                    <div className="sub-item-parent">
                      <div className="sub-item8">
                        <div className="campaigns6">{`estimate `}</div>
                      </div>
                      <div className="if-you-already-have-an-account">
                        <div className="contractors-frame">9</div>
                      </div>
                    </div>
                    <div className="sub-item9">
                      <div className="campaigns7">Events</div>
                    </div>
                    <div className="sub-item10">
                      <div className="campaigns8">Partial Requests</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="positions-frame">
                <div className="assets-table">
                  <div className="rectangle">
                    <h3 className="positions1">Positions</h3>
                  </div>
                  <div className="x-icon">
                    <h3 className="contractors1">Contractors</h3>
                  </div>
                  <div className="div48">
                    <h3 className="users1">Users</h3>
                    <img
                      className="arrow-icon4"
                      loading="lazy"
                      alt=""
                      src="/arrow-1.svg"
                    />
                  </div>
                </div>
                <div className="frame-parent1">
                  <div className="asset-row-labels-parent">
                    <div className="asset-row-labels">
                      <img
                        className="info-vector-icon"
                        alt=""
                        src="/vector-4.svg"
                      />
                      <img className="age-icon" alt="" src="/vector-1.svg" />
                      <img
                        className="assets-table-header"
                        loading="lazy"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="assets-table-footer">
                      <div className="list1">
                        <div className="sub-item11">
                          <div className="campaigns9">admins</div>
                        </div>
                        <div className="sub-item12">
                          <div className="campaigns10">clients</div>
                        </div>
                        <div className="sub-item13">
                          <div className="campaigns11">Coordinators</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-positions-contractors">
                    <h3 className="profile1">Profile</h3>
                  </div>
                </div>
              </div>
              <Button
                className="upload-logout"
                startIcon={<img width="24px" height="24px" src="/upload.png" />}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#000",
                  borderRadius: "8px",
                  "&:hover": { background: "#000" },
                  height: 56,
                }}
              >
                Logout
              </Button>
            </div>
            <div className="assign-coordinator-event-name">
              <div className="event-name-venue-container">
                <span className="event-name1">{`Event Name `}</span>
                <span className="venue-details">(Venue Details)</span>
              </div>
              <div className="x-icon-wrapper">
                <div className="x-icon1">
                  <div className="meeting-room-one-to-four">
                    <Button
                      className="meeting-room-one-to-four1"
                      disableElevation={true}
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        color: "#d175b6",
                        fontSize: "16",
                        borderColor: "#d175b6",
                        borderRadius: "0px 0px 0px 0px",
                        "&:hover": { borderColor: "#d175b6" },
                        width: 134,
                      }}
                    >
                      Event Details
                    </Button>
                    <Button
                      className="meeting-room-one-to-four2"
                      disableElevation={true}
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        fontSize: "16",
                        background: "#d175b6",
                        borderRadius: "0px 0px 0px 0px",
                        "&:hover": { background: "#d175b6" },
                        height: 50,
                      }}
                    >
                      Assign Coordinator/Coordinator
                    </Button>
                  </div>
                  <div className="start-from-jan-end-at-j">
                    <Button
                      className="assets-table-row-label"
                      disableElevation={true}
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        color: "#d175b6",
                        fontSize: "16",
                        borderColor: "#d175b6",
                        borderRadius: "0px 0px 0px 0px",
                        "&:hover": { borderColor: "#d175b6" },
                      }}
                    >
                      Session Management
                    </Button>
                  </div>
                  <div className="generate-sow">Generate SOW</div>
                </div>
              </div>
              <div className="label-one-to-five">
                <div className="label-one-to-five1">
                  <h2 className="assign-coordinator">Assign Coordinator</h2>
                  <div className="data-table-header-time-info-qu">
                    <div className="search-coordinator-frame">
                      <FormControl
                        className="start"
                        variant="standard"
                        sx={{
                          borderColor: "#fff",
                          borderStyle: "SOLID",
                          borderTopWidth: "1px",
                          borderRightWidth: "1px",
                          borderBottomWidth: "1px",
                          borderLeftWidth: "1px",
                          borderRadius: "8px",
                          width: "100%",
                          height: "44px",
                          m: 0,
                          p: 0,
                          "& .MuiInputBase-root": {
                            m: 0,
                            p: 0,
                            minHeight: "44px",
                            justifyContent: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInputLabel-root": {
                            m: 0,
                            p: 0,
                            minHeight: "44px",
                            display: "inline-flex",
                          },
                          "& .MuiMenuItem-root": {
                            m: 0,
                            p: 0,
                            height: "44px",
                            display: "inline-flex",
                          },
                          "& .MuiSelect-select": {
                            m: 0,
                            p: 0,
                            height: "44px",
                            alignItems: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInput-input": { m: 0, p: 0 },
                          "& .MuiInputBase-input": {
                            color: "rgba(255, 255, 255, 0.7)",
                            fontSize: 16,
                            fontWeight: "Light",
                            fontFamily: "Kanit",
                            textAlign: "left",
                            p: "0 !important",
                            marginLeft: "16px",
                          },
                        }}
                      >
                        <InputLabel color="primary" />
                        <Select
                          color="primary"
                          disableUnderline
                          displayEmpty
                          IconComponent={() => (
                            <img
                              width="10px"
                              height="5px"
                              src="/vector-7.svg"
                              style={{ marginRight: "23px" }}
                            />
                          )}
                        >
                          <MenuItem>Search Coordinator</MenuItem>
                        </Select>
                        <FormHelperText />
                      </FormControl>
                    </div>
                    <div className="add-new-coordinator">
                      Add New Coordinator
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="event-name-venue-container1">
                    <span className="event-name2">{`Event Name `}</span>
                    <span className="venue-here">(Venue Here)</span>
                  </div>
                  <div className="rectangle1">
                    <div className="swasth-ai">
                      <div className="start-12-12-2023">
                        <span className="start1">Start:</span>
                        <span className="span"> 12-12-2023</span>
                      </div>
                      <div className="ends-15-12-2023">
                        <span className="ends">Ends:</span>
                        <span className="span1"> 15-12-2023</span>
                      </div>
                    </div>
                    <div className="venue-address-some-location-1-wrapper">
                      <div className="venue-address-some-container">
                        <span className="venue-address">Venue Address:</span>
                        <span className="some-location-12">
                          {" "}
                          Some Location 12, Name Here, City, State.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="positions-positions-positions">
                <div className="startfrom-jan-endsat-jan-start">
                  <h2 className="assign-contractor">Assign Contractor</h2>
                  <div className="home">
                    <div className="search-coordinator">
                      <div className="about-us">
                        <div className="how-to-use">
                          <div className="meeting-room-1">Meeting Room 1</div>
                          <div className="wrapper-startfrom-jan-endsat-j">
                            <img
                              className="startfrom-jan-endsat-jan-start1"
                              loading="lazy"
                              alt=""
                              src="/star-2.svg"
                            />
                          </div>
                          <div className="positions2">12 Positions</div>
                        </div>
                        <div className="start-from-12">
                          Start from 12 Jan, 2023 - Ends at 15 Jan, 2023
                        </div>
                      </div>
                    </div>
                    <LabelLabelLabelLabelLabel meetingRoom2="Meeting Room 2" />
                    <LabelLabelLabelLabelLabel meetingRoom2="Meeting Room 3" />
                    <LabelLabelLabelLabelLabel meetingRoom2="Meeting Room 4" />
                    <LabelLabelLabelLabelLabel meetingRoom2="Meeting Room 5" />
                  </div>
                </div>
                <div className="assigncoordinator">
                  <h2 className="assign-coordinator1">Assign Coordinator</h2>
                  <h3 className="positions3">Positions</h3>
                  <div className="data-table">
                    <div className="assetstable-header">
                      <div className="position">Position</div>
                      <div className="time">Time</div>
                      <div className="info">Info</div>
                      <div className="quantity">Quantity</div>
                      <div className="position-time-info">{` `}</div>
                    </div>
                    <div className="assetstable-row">
                      <div className="label">Camera 1 (Video)</div>
                      <div className="label1">9 am - 7 pm</div>
                      <div className="label2">
                        <b className="lp">LP</b>
                        <span className="default"> default</span>
                      </div>
                      <div className="label3">20</div>
                      <FormControl
                        className="parent"
                        variant="standard"
                        sx={{
                          borderColor: "#d175b6",
                          borderStyle: "SOLID",
                          borderTopWidth: "1px",
                          borderRightWidth: "1px",
                          borderBottomWidth: "1px",
                          borderLeftWidth: "1px",
                          backgroundColor: "rgba(0, 0, 0, 0.4)",
                          borderRadius: "4px",
                          width: "26.845637583892614%",
                          height: "36px",
                          m: 0,
                          p: 0,
                          "& .MuiInputBase-root": {
                            m: 0,
                            p: 0,
                            minHeight: "36px",
                            justifyContent: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInputLabel-root": {
                            m: 0,
                            p: 0,
                            minHeight: "36px",
                            display: "inline-flex",
                          },
                          "& .MuiMenuItem-root": {
                            m: 0,
                            p: 0,
                            height: "36px",
                            display: "inline-flex",
                          },
                          "& .MuiSelect-select": {
                            m: 0,
                            p: 0,
                            height: "36px",
                            alignItems: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInput-input": { m: 0, p: 0 },
                          "& .MuiInputBase-input": {
                            color: "rgba(255, 255, 255, 0.6)",
                            fontSize: 13,
                            fontWeight: "Light",
                            fontFamily: "Inter",
                            textAlign: "left",
                            p: "0 !important",
                            marginLeft: "8px",
                          },
                        }}
                      >
                        <InputLabel color="success" />
                        <Select
                          color="success"
                          disableUnderline
                          displayEmpty
                          IconComponent={() => (
                            <img
                              width="8.3px"
                              height="4.2px"
                              src="/vector-8.svg"
                              style={{ marginRight: "13.899999999999988px" }}
                            />
                          )}
                        >
                          <MenuItem>Select Contractor</MenuItem>
                        </Select>
                        <FormHelperText />
                      </FormControl>
                    </div>
                    <div className="assetstable-row1">
                      <div className="label4">Camera 1 (Video)</div>
                      <div className="label5">9 am - 7 pm</div>
                      <div className="label6">
                        <b className="lp1">LP</b>
                        <span className="default1"> default</span>
                      </div>
                      <div className="label7">20</div>
                      <FormControl
                        className="container"
                        variant="standard"
                        sx={{
                          borderColor: "#d175b6",
                          borderStyle: "SOLID",
                          borderTopWidth: "1px",
                          borderRightWidth: "1px",
                          borderBottomWidth: "1px",
                          borderLeftWidth: "1px",
                          backgroundColor: "rgba(0, 0, 0, 0.4)",
                          borderRadius: "4px",
                          width: "26.845637583892614%",
                          height: "36px",
                          m: 0,
                          p: 0,
                          "& .MuiInputBase-root": {
                            m: 0,
                            p: 0,
                            minHeight: "36px",
                            justifyContent: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInputLabel-root": {
                            m: 0,
                            p: 0,
                            minHeight: "36px",
                            display: "inline-flex",
                          },
                          "& .MuiMenuItem-root": {
                            m: 0,
                            p: 0,
                            height: "36px",
                            display: "inline-flex",
                          },
                          "& .MuiSelect-select": {
                            m: 0,
                            p: 0,
                            height: "36px",
                            alignItems: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInput-input": { m: 0, p: 0 },
                          "& .MuiInputBase-input": {
                            color: "rgba(255, 255, 255, 0.6)",
                            fontSize: 13,
                            fontWeight: "Light",
                            fontFamily: "Inter",
                            textAlign: "left",
                            p: "0 !important",
                            marginLeft: "8px",
                          },
                        }}
                      >
                        <InputLabel color="success" />
                        <Select
                          color="success"
                          disableUnderline
                          displayEmpty
                          IconComponent={() => (
                            <img
                              width="8.3px"
                              height="4.2px"
                              src="/vector-9.svg"
                              style={{ marginRight: "13.899999999999988px" }}
                            />
                          )}
                        >
                          <MenuItem>Select Contractor</MenuItem>
                        </Select>
                        <FormHelperText />
                      </FormControl>
                    </div>
                    <div className="assetstable-row2">
                      <div className="label8">Camera 1 (Video)</div>
                      <div className="label9">9 am - 7 pm</div>
                      <div className="label10">
                        <b className="lp2">LP</b>
                        <span className="default2"> default</span>
                      </div>
                      <div className="label11">20</div>
                      <FormControl
                        className="frame-formcontrol"
                        variant="standard"
                        sx={{
                          borderColor: "#d175b6",
                          borderStyle: "SOLID",
                          borderTopWidth: "1px",
                          borderRightWidth: "1px",
                          borderBottomWidth: "1px",
                          borderLeftWidth: "1px",
                          backgroundColor: "rgba(0, 0, 0, 0.4)",
                          borderRadius: "4px",
                          width: "26.845637583892614%",
                          height: "36px",
                          m: 0,
                          p: 0,
                          "& .MuiInputBase-root": {
                            m: 0,
                            p: 0,
                            minHeight: "36px",
                            justifyContent: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInputLabel-root": {
                            m: 0,
                            p: 0,
                            minHeight: "36px",
                            display: "inline-flex",
                          },
                          "& .MuiMenuItem-root": {
                            m: 0,
                            p: 0,
                            height: "36px",
                            display: "inline-flex",
                          },
                          "& .MuiSelect-select": {
                            m: 0,
                            p: 0,
                            height: "36px",
                            alignItems: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInput-input": { m: 0, p: 0 },
                          "& .MuiInputBase-input": {
                            color: "rgba(255, 255, 255, 0.6)",
                            fontSize: 13,
                            fontWeight: "Light",
                            fontFamily: "Inter",
                            textAlign: "left",
                            p: "0 !important",
                            marginLeft: "8px",
                          },
                        }}
                      >
                        <InputLabel color="success" />
                        <Select
                          color="success"
                          disableUnderline
                          displayEmpty
                          IconComponent={() => (
                            <img
                              width="8.3px"
                              height="4.2px"
                              src="/vector-10.svg"
                              style={{ marginRight: "13.899999999999988px" }}
                            />
                          )}
                        >
                          <MenuItem>Select Contractor</MenuItem>
                        </Select>
                        <FormHelperText />
                      </FormControl>
                    </div>
                    <div className="assetstable-row3">
                      <div className="label12">Camera 1 (Video)</div>
                      <div className="label13">9 am - 7 pm</div>
                      <div className="label14">
                        <b className="lp3">LP</b>
                        <span className="default3"> default</span>
                      </div>
                      <div className="label15">20</div>
                      <FormControl
                        className="parent1"
                        variant="standard"
                        sx={{
                          borderColor: "#d175b6",
                          borderStyle: "SOLID",
                          borderTopWidth: "1px",
                          borderRightWidth: "1px",
                          borderBottomWidth: "1px",
                          borderLeftWidth: "1px",
                          backgroundColor: "rgba(0, 0, 0, 0.4)",
                          borderRadius: "4px",
                          width: "26.845637583892614%",
                          height: "36px",
                          m: 0,
                          p: 0,
                          "& .MuiInputBase-root": {
                            m: 0,
                            p: 0,
                            minHeight: "36px",
                            justifyContent: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInputLabel-root": {
                            m: 0,
                            p: 0,
                            minHeight: "36px",
                            display: "inline-flex",
                          },
                          "& .MuiMenuItem-root": {
                            m: 0,
                            p: 0,
                            height: "36px",
                            display: "inline-flex",
                          },
                          "& .MuiSelect-select": {
                            m: 0,
                            p: 0,
                            height: "36px",
                            alignItems: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInput-input": { m: 0, p: 0 },
                          "& .MuiInputBase-input": {
                            color: "rgba(255, 255, 255, 0.6)",
                            fontSize: 13,
                            fontWeight: "Light",
                            fontFamily: "Inter",
                            textAlign: "left",
                            p: "0 !important",
                            marginLeft: "8px",
                          },
                        }}
                      >
                        <InputLabel color="success" />
                        <Select
                          color="success"
                          disableUnderline
                          displayEmpty
                          IconComponent={() => (
                            <img
                              width="8.3px"
                              height="4.2px"
                              src="/vector-11.svg"
                              style={{ marginRight: "13.899999999999988px" }}
                            />
                          )}
                        >
                          <MenuItem>Select Contractor</MenuItem>
                        </Select>
                        <FormHelperText />
                      </FormControl>
                    </div>
                    <div className="assetstable-row4">
                      <div className="label16">Camera 1 (Video)</div>
                      <div className="label17">9 am - 7 pm</div>
                      <div className="label18">
                        <b className="lp4">LP</b>
                        <span className="default4"> default</span>
                      </div>
                      <div className="label19">20</div>
                      <FormControl
                        className="parent2"
                        variant="standard"
                        sx={{
                          borderColor: "#d175b6",
                          borderStyle: "SOLID",
                          borderTopWidth: "1px",
                          borderRightWidth: "1px",
                          borderBottomWidth: "1px",
                          borderLeftWidth: "1px",
                          backgroundColor: "rgba(0, 0, 0, 0.4)",
                          borderRadius: "4px",
                          width: "26.845637583892614%",
                          height: "36px",
                          m: 0,
                          p: 0,
                          "& .MuiInputBase-root": {
                            m: 0,
                            p: 0,
                            minHeight: "36px",
                            justifyContent: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInputLabel-root": {
                            m: 0,
                            p: 0,
                            minHeight: "36px",
                            display: "inline-flex",
                          },
                          "& .MuiMenuItem-root": {
                            m: 0,
                            p: 0,
                            height: "36px",
                            display: "inline-flex",
                          },
                          "& .MuiSelect-select": {
                            m: 0,
                            p: 0,
                            height: "36px",
                            alignItems: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInput-input": { m: 0, p: 0 },
                          "& .MuiInputBase-input": {
                            color: "rgba(255, 255, 255, 0.6)",
                            fontSize: 13,
                            fontWeight: "Light",
                            fontFamily: "Inter",
                            textAlign: "left",
                            p: "0 !important",
                            marginLeft: "8px",
                          },
                        }}
                      >
                        <InputLabel color="success" />
                        <Select
                          color="success"
                          disableUnderline
                          displayEmpty
                          IconComponent={() => (
                            <img
                              width="8.3px"
                              height="4.2px"
                              src="/vector-12.svg"
                              style={{ marginRight: "13.899999999999988px" }}
                            />
                          )}
                        >
                          <MenuItem>Select Contractor</MenuItem>
                        </Select>
                        <FormHelperText />
                      </FormControl>
                    </div>
                    <div className="assetstable-row5">
                      <div className="label20">Camera 1 (Video)</div>
                      <div className="label21">9 am - 7 pm</div>
                      <div className="label22">
                        <b className="lp5">LP</b>
                        <span className="default5"> default</span>
                      </div>
                      <div className="label23">20</div>
                      <FormControl
                        className="parent3"
                        variant="standard"
                        sx={{
                          borderColor: "#d175b6",
                          borderStyle: "SOLID",
                          borderTopWidth: "1px",
                          borderRightWidth: "1px",
                          borderBottomWidth: "1px",
                          borderLeftWidth: "1px",
                          backgroundColor: "rgba(0, 0, 0, 0.4)",
                          borderRadius: "4px",
                          width: "26.845637583892614%",
                          height: "36px",
                          m: 0,
                          p: 0,
                          "& .MuiInputBase-root": {
                            m: 0,
                            p: 0,
                            minHeight: "36px",
                            justifyContent: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInputLabel-root": {
                            m: 0,
                            p: 0,
                            minHeight: "36px",
                            display: "inline-flex",
                          },
                          "& .MuiMenuItem-root": {
                            m: 0,
                            p: 0,
                            height: "36px",
                            display: "inline-flex",
                          },
                          "& .MuiSelect-select": {
                            m: 0,
                            p: 0,
                            height: "36px",
                            alignItems: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInput-input": { m: 0, p: 0 },
                          "& .MuiInputBase-input": {
                            color: "rgba(255, 255, 255, 0.6)",
                            fontSize: 13,
                            fontWeight: "Light",
                            fontFamily: "Inter",
                            textAlign: "left",
                            p: "0 !important",
                            marginLeft: "8px",
                          },
                        }}
                      >
                        <InputLabel color="success" />
                        <Select
                          color="success"
                          disableUnderline
                          displayEmpty
                          IconComponent={() => (
                            <img
                              width="8.3px"
                              height="4.2px"
                              src="/vector-13.svg"
                              style={{ marginRight: "13.899999999999988px" }}
                            />
                          )}
                        >
                          <MenuItem>Select Contractor</MenuItem>
                        </Select>
                        <FormHelperText />
                      </FormControl>
                    </div>
                    <div className="assetstable-row6">
                      <div className="label24">Camera 1 (Video)</div>
                      <div className="label25">9 am - 7 pm</div>
                      <div className="label26">
                        <b className="lp6">LP</b>
                        <span className="default6"> default</span>
                      </div>
                      <div className="label27">20</div>
                      <FormControl
                        className="parent4"
                        variant="standard"
                        sx={{
                          borderColor: "#d175b6",
                          borderStyle: "SOLID",
                          borderTopWidth: "1px",
                          borderRightWidth: "1px",
                          borderBottomWidth: "1px",
                          borderLeftWidth: "1px",
                          backgroundColor: "rgba(0, 0, 0, 0.4)",
                          borderRadius: "4px",
                          width: "26.845637583892614%",
                          height: "36px",
                          m: 0,
                          p: 0,
                          "& .MuiInputBase-root": {
                            m: 0,
                            p: 0,
                            minHeight: "36px",
                            justifyContent: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInputLabel-root": {
                            m: 0,
                            p: 0,
                            minHeight: "36px",
                            display: "inline-flex",
                          },
                          "& .MuiMenuItem-root": {
                            m: 0,
                            p: 0,
                            height: "36px",
                            display: "inline-flex",
                          },
                          "& .MuiSelect-select": {
                            m: 0,
                            p: 0,
                            height: "36px",
                            alignItems: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInput-input": { m: 0, p: 0 },
                          "& .MuiInputBase-input": {
                            color: "rgba(255, 255, 255, 0.6)",
                            fontSize: 13,
                            fontWeight: "Light",
                            fontFamily: "Inter",
                            textAlign: "left",
                            p: "0 !important",
                            marginLeft: "8px",
                          },
                        }}
                      >
                        <InputLabel color="success" />
                        <Select
                          color="success"
                          disableUnderline
                          displayEmpty
                          IconComponent={() => (
                            <img
                              width="8.3px"
                              height="4.2px"
                              src="/vector-14.svg"
                              style={{ marginRight: "13.899999999999988px" }}
                            />
                          )}
                        >
                          <MenuItem>Select Contractor</MenuItem>
                        </Select>
                        <FormHelperText />
                      </FormControl>
                    </div>
                    <div className="assetstable-row7">
                      <div className="label28">Camera 1 (Video)</div>
                      <div className="label29">9 am - 7 pm</div>
                      <div className="label30">
                        <b className="lp7">LP</b>
                        <span className="default7"> default</span>
                      </div>
                      <div className="label31">20</div>
                      <FormControl
                        className="parent5"
                        variant="standard"
                        sx={{
                          borderColor: "#d175b6",
                          borderStyle: "SOLID",
                          borderTopWidth: "1px",
                          borderRightWidth: "1px",
                          borderBottomWidth: "1px",
                          borderLeftWidth: "1px",
                          backgroundColor: "rgba(0, 0, 0, 0.4)",
                          borderRadius: "4px",
                          width: "26.845637583892614%",
                          height: "36px",
                          m: 0,
                          p: 0,
                          "& .MuiInputBase-root": {
                            m: 0,
                            p: 0,
                            minHeight: "36px",
                            justifyContent: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInputLabel-root": {
                            m: 0,
                            p: 0,
                            minHeight: "36px",
                            display: "inline-flex",
                          },
                          "& .MuiMenuItem-root": {
                            m: 0,
                            p: 0,
                            height: "36px",
                            display: "inline-flex",
                          },
                          "& .MuiSelect-select": {
                            m: 0,
                            p: 0,
                            height: "36px",
                            alignItems: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInput-input": { m: 0, p: 0 },
                          "& .MuiInputBase-input": {
                            color: "rgba(255, 255, 255, 0.6)",
                            fontSize: 13,
                            fontWeight: "Light",
                            fontFamily: "Inter",
                            textAlign: "left",
                            p: "0 !important",
                            marginLeft: "8px",
                          },
                        }}
                      >
                        <InputLabel color="success" />
                        <Select
                          color="success"
                          disableUnderline
                          displayEmpty
                          IconComponent={() => (
                            <img
                              width="8.3px"
                              height="4.2px"
                              src="/vector-15.svg"
                              style={{ marginRight: "13.899999999999988px" }}
                            />
                          )}
                        >
                          <MenuItem>Select Contractor</MenuItem>
                        </Select>
                        <FormHelperText />
                      </FormControl>
                    </div>
                    <div className="assetstable-footer1">
                      <img
                        className="arrow-left-02-icon1"
                        loading="lazy"
                        alt=""
                        src="/arrowleft02.svg"
                      />
                      <div className="assetstable-footer-child" />
                      <div className="assetstable-footer-item" />
                      <img
                        className="arrow-right-02-icon1"
                        loading="lazy"
                        alt=""
                        src="/arrowright02.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="saveedits"
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "20",
                  background: "#d85ad8",
                  borderRadius: "12px",
                  "&:hover": { background: "#d85ad8" },
                  width: 212,
                  height: 60,
                }}
              >
                Save Edits
              </Button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default MacBookPro161;
