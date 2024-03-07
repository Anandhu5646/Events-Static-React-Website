import { useCallback } from "react";
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
import { useNavigate } from "react-router-dom";
import RectangleFrame from "../components/RectangleFrame";
import "./EventRequest.css";

const MacBookPro16 = () => {
  const navigate = useNavigate();

  const onMacBookPro1626Click = useCallback(() => {
    navigate("/eventName");
  }, [navigate]);

  return (
    <div className="macbook-pro-16-26" onClick={onMacBookPro1626Click}>
      <div className="wrapper-group-1">
        <img className="wrapper-group-1-child" alt="" src="/group-1.svg" />
      </div>
      <main className="frame-frame">
        <RectangleFrame />
        <section className="frame-frame1">
          <form className="text-frame">
            <div className="text-frame1">
              <div className="rectangle-frame">
                <FormControl
                  className="text-frame2"
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
              <div className="rectangle-frame1">
                <div className="text-frame3">
                  <div className="group-frame">
                    <img
                      className="vector-container-icon"
                      alt=""
                      src="/vector-container.svg"
                    />
                    <img
                      className="vector-container-icon1"
                      alt=""
                      src="/vector-1.svg"
                    />
                    <img
                      className="vector-container-icon2"
                      alt=""
                      src="/vector-1.svg"
                    />
                    <img
                      className="vector-container-icon3"
                      loading="lazy"
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                  <div className="sub-requests-frame">
                    <TextField
                      className="sub-item"
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
                    <div className="campaign-boxes">
                      <div className="sub-item1">
                        <div className="campaigns">{`estimate `}</div>
                      </div>
                      <div className="january-labels">
                        <div className="january-labels1">9</div>
                      </div>
                    </div>
                    <div className="sub-item2">
                      <div className="campaigns1">Events</div>
                    </div>
                    <div className="sub-item3">
                      <div className="campaigns2">Partial Requests</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="january-labels2">
                <div className="january-labels3">
                  <div className="muhammad-asad-label">
                    <div className="positions">Positions</div>
                  </div>
                  <div className="muhammad-asad-label1">
                    <div className="contractors">Contractors</div>
                  </div>
                  <div className="rectangle-wrapper">
                    <div className="users">Users</div>
                    <img
                      className="arrow-icon"
                      loading="lazy"
                      alt=""
                      src="/arrow-1.svg"
                    />
                  </div>
                </div>
                <div className="text-element-group">
                  <div className="january-label-texts">
                    <div className="vector-parent">
                      <img className="vector-icon" alt="" src="/vector-4.svg" />
                      <img
                        className="vector-icon1"
                        alt=""
                        src="/vector-1.svg"
                      />
                      <img
                        className="vector-icon2"
                        loading="lazy"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="january-label-texts1">
                      <div className="list">
                        <div className="sub-item4">
                          <div className="campaigns3">admins</div>
                        </div>
                        <div className="sub-item5">
                          <div className="campaigns4">clients</div>
                        </div>
                        <div className="sub-item6">
                          <div className="campaigns5">Coordinators</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div">
                    <div className="profile">Profile</div>
                  </div>
                </div>
              </div>
              <Button
                className="navbar-container-frame"
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
            <div className="heading-perfectly-pick">
              <div className="arrow-left-symbol">
                <h1 className="event-requests">Event Requests</h1>
                <TextField
                  className="arrow-left-symbol-child"
                  placeholder="Search here"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <img width="24px" height="24px" src="/search01.svg" />
                    ),
                  }}
                  sx={{
                    "& fieldset": { borderColor: "#fff" },
                    "& .MuiInputBase-root": {
                      height: "44px",
                      backgroundColor: "rgba(0, 0, 0, 0.01)",
                      paddingLeft: "16px",
                      borderRadius: "8px",
                    },
                    "& .MuiInputBase-input": {
                      paddingLeft: "10px",
                      color: "rgba(255, 255, 255, 0.8)",
                    },
                    width: "300px",
                  }}
                />
                <div className="add-01-wrapper">
                  <img
                    className="add-01-icon"
                    loading="lazy"
                    alt=""
                    src="/add01.svg"
                  />
                </div>
              </div>
              <div className="column">
                <div className="rectangle-shape-parent">
                  <div className="rectangle-shape">
                    <div className="image-wrapper">
                      <div className="text-area">
                        <div className="event-start">Event Start</div>
                        <div className="event-end">Event End</div>
                      </div>
                      <div className="nested-children">
                        <img
                          className="arrow-icon1"
                          loading="lazy"
                          alt=""
                          src="/arrow-2.svg"
                        />
                      </div>
                      <div className="client-name">Client Name</div>
                      <div className="nested-children1">
                        <img
                          className="arrow-icon2"
                          loading="lazy"
                          alt=""
                          src="/arrow-3.svg"
                        />
                      </div>
                      <div className="contact-info">Contact Info</div>
                      <div className="logout-button">
                        <div className="venue">Venue</div>
                      </div>
                      <div className="city">City</div>
                      <div className="state">State</div>
                      <div className="zip-code">Zip Code</div>
                    </div>
                  </div>
                  <div className="filled-name-group">
                    <img className="show-icon" loading="lazy" alt="" />
                    <div className="event-name">Event Name</div>
                    <img
                      className="arrow-icon3"
                      loading="lazy"
                      alt=""
                      src="/arrow-3.svg"
                    />
                  </div>
                </div>
                <div className="lorem-para">
                  <div className="arrow-navigator">
                    <img className="show-icon1" alt="" src="/show-1.svg" />
                    <div className="filled-name">Filled Name</div>
                  </div>
                  <div className="jan-12-2024">Jan 12, 2024</div>
                  <div className="jan-14-2024">Jan 14, 2024</div>
                  <div className="muhammad-asad">Muhammad Asad</div>
                  <div className="get-order-frame">+ 1 234 566 7890</div>
                  <div className="lorem-ipsum-dolor">
                    Lorem ipsum dolor sit amet
                  </div>
                  <div className="divetpbslide">-</div>
                  <div className="heading">-</div>
                  <div className="try-our-delicious">-</div>
                </div>
                <div className="name-and-january-group">
                  <div className="link">
                    <div className="show-repeat-group">
                      <img className="show-icon2" alt="" src="/show-1.svg" />
                      <div className="filled-name1">Filled Name</div>
                    </div>
                    <div className="jan-12-20241">Jan 12, 2024</div>
                    <div className="jan-14-20241">Jan 14, 2024</div>
                    <div className="muhammad-asad1">Muhammad Asad</div>
                    <div className="empty-stack">+ 1 234 566 7890</div>
                    <div className="lorem-ipsum-dolor1">
                      Lorem ipsum dolor sit amet
                    </div>
                    <div className="group-of-rectangles">-</div>
                    <div className="navbar-menu">-</div>
                    <div className="navbar-link">-</div>
                  </div>
                  <div className="about">
                    <div className="show-parent">
                      <img className="show-icon3" alt="" src="/show-1.svg" />
                      <div className="filled-name2">Filled Name</div>
                    </div>
                    <div className="jan-12-20242">Jan 12, 2024</div>
                    <div className="jan-14-20242">Jan 14, 2024</div>
                    <div className="muhammad-asad2">Muhammad Asad</div>
                    <div className="pricing">+ 1 234 566 7890</div>
                    <div className="lorem-ipsum-dolor2">
                      Lorem ipsum dolor sit amet
                    </div>
                    <div className="div1">-</div>
                    <div className="div2">-</div>
                    <div className="div3">-</div>
                  </div>
                  <div className="filled-name-stack">
                    <div className="show-group">
                      <img className="show-icon4" alt="" src="/show-1.svg" />
                      <div className="filled-name3">Filled Name</div>
                    </div>
                    <div className="jan-12-20243">Jan 12, 2024</div>
                    <div className="jan-14-20243">Jan 14, 2024</div>
                    <div className="muhammad-asad3">Muhammad Asad</div>
                    <div className="div4">+ 1 234 566 7890</div>
                    <div className="lorem-ipsum-dolor3">
                      Lorem ipsum dolor sit amet
                    </div>
                    <div className="div5">-</div>
                    <div className="div6">-</div>
                    <div className="div7">-</div>
                  </div>
                  <div className="filled-name-stack1">
                    <div className="show-container">
                      <img className="show-icon5" alt="" src="/show-1.svg" />
                      <div className="filled-name4">Filled Name</div>
                    </div>
                    <div className="jan-12-20244">Jan 12, 2024</div>
                    <div className="jan-14-20244">Jan 14, 2024</div>
                    <div className="muhammad-asad4">Muhammad Asad</div>
                    <div className="div8">+ 1 234 566 7890</div>
                    <div className="lorem-ipsum-dolor4">
                      Lorem ipsum dolor sit amet
                    </div>
                    <div className="div9">-</div>
                    <div className="div10">-</div>
                    <div className="div11">-</div>
                  </div>
                  <div className="filled-name-stack2">
                    <div className="frame-div">
                      <img className="show-icon6" alt="" src="/show-1.svg" />
                      <div className="filled-name5">Filled Name</div>
                    </div>
                    <div className="jan-12-20245">Jan 12, 2024</div>
                    <div className="jan-14-20245">Jan 14, 2024</div>
                    <div className="muhammad-asad5">Muhammad Asad</div>
                    <div className="div12">+ 1 234 566 7890</div>
                    <div className="lorem-ipsum-dolor5">
                      Lorem ipsum dolor sit amet
                    </div>
                    <div className="div13">-</div>
                    <div className="div14">-</div>
                    <div className="div15">-</div>
                  </div>
                  <div className="filled-name-stack3">
                    <div className="show-parent1">
                      <img className="show-icon7" alt="" src="/show-1.svg" />
                      <div className="filled-name6">Filled Name</div>
                    </div>
                    <div className="jan-12-20246">Jan 12, 2024</div>
                    <div className="jan-14-20246">Jan 14, 2024</div>
                    <div className="muhammad-asad6">Muhammad Asad</div>
                    <div className="div16">+ 1 234 566 7890</div>
                    <div className="lorem-ipsum-dolor6">
                      Lorem ipsum dolor sit amet
                    </div>
                    <div className="div17">-</div>
                    <div className="div18">-</div>
                    <div className="div19">-</div>
                  </div>
                  <div className="filled-name-stack4">
                    <div className="show-parent2">
                      <img className="show-icon8" alt="" src="/show-1.svg" />
                      <div className="filled-name7">Filled Name</div>
                    </div>
                    <div className="jan-12-20247">Jan 12, 2024</div>
                    <div className="jan-14-20247">Jan 14, 2024</div>
                    <div className="muhammad-asad7">Muhammad Asad</div>
                    <div className="div20">+ 1 234 566 7890</div>
                    <div className="lorem-ipsum-dolor7">
                      Lorem ipsum dolor sit amet
                    </div>
                    <div className="div21">-</div>
                    <div className="div22">-</div>
                    <div className="div23">-</div>
                  </div>
                  <div className="filled-name-stack5">
                    <div className="show-parent3">
                      <img
                        className="show-icon9"
                        loading="lazy"
                        alt=""
                        src="/show-1.svg"
                      />
                      <div className="filled-name8">Filled Name</div>
                    </div>
                    <div className="jan-12-20248">Jan 12, 2024</div>
                    <div className="jan-14-20248">Jan 14, 2024</div>
                    <div className="muhammad-asad8">Muhammad Asad</div>
                    <div className="div24">+ 1 234 566 7890</div>
                    <div className="lorem-ipsum-dolor8">
                      Lorem ipsum dolor sit amet
                    </div>
                    <div className="div25">-</div>
                    <div className="div26">-</div>
                    <div className="div27">-</div>
                  </div>
                  <div className="filled-name-stack6">
                    <div className="show-parent4">
                      <img className="show-icon10" alt="" src="/show-1.svg" />
                      <div className="filled-name9">Filled Name</div>
                    </div>
                    <div className="jan-12-20249">Jan 12, 2024</div>
                    <div className="jan-14-20249">Jan 14, 2024</div>
                    <div className="muhammad-asad9">Muhammad Asad</div>
                    <div className="div28">+ 1 234 566 7890</div>
                    <div className="lorem-ipsum-dolor9">
                      Lorem ipsum dolor sit amet
                    </div>
                    <div className="div29">-</div>
                    <div className="div30">-</div>
                    <div className="div31">-</div>
                  </div>
                  <div className="filled-name-stack7">
                    <div className="show-parent5">
                      <img className="show-icon11" alt="" src="/show-1.svg" />
                      <div className="filled-name10">Filled Name</div>
                    </div>
                    <div className="jan-12-202410">Jan 12, 2024</div>
                    <div className="jan-14-202410">Jan 14, 2024</div>
                    <div className="muhammad-asad10">Muhammad Asad</div>
                    <div className="div32">+ 1 234 566 7890</div>
                    <div className="lorem-ipsum-dolor10">
                      Lorem ipsum dolor sit amet
                    </div>
                    <div className="div33">-</div>
                    <div className="div34">-</div>
                    <div className="div35">-</div>
                  </div>
                  <div className="filled-name-stack8">
                    <div className="show-parent6">
                      <img className="show-icon12" alt="" src="/show-1.svg" />
                      <div className="filled-name11">Filled Name</div>
                    </div>
                    <div className="jan-12-202411">Jan 12, 2024</div>
                    <div className="jan-14-202411">Jan 14, 2024</div>
                    <div className="muhammad-asad11">Muhammad Asad</div>
                    <div className="div36">+ 1 234 566 7890</div>
                    <div className="lorem-ipsum-dolor11">
                      Lorem ipsum dolor sit amet
                    </div>
                    <div className="div37">-</div>
                    <div className="div38">-</div>
                    <div className="div39">-</div>
                  </div>
                  <div className="filled-name-stack9">
                    <div className="show-parent7">
                      <img className="show-icon13" alt="" src="/show-1.svg" />
                      <div className="filled-name12">Filled Name</div>
                    </div>
                    <div className="jan-12-202412">Jan 12, 2024</div>
                    <div className="jan-14-202412">Jan 14, 2024</div>
                    <div className="muhammad-asad12">Muhammad Asad</div>
                    <div className="div40">+ 1 234 566 7890</div>
                    <div className="lorem-ipsum-dolor12">
                      Lorem ipsum dolor sit amet
                    </div>
                    <div className="div41">-</div>
                    <div className="div42">-</div>
                    <div className="div43">-</div>
                  </div>
                  <div className="filled-name-stack10">
                    <div className="show-parent8">
                      <img className="show-icon14" alt="" src="/show-1.svg" />
                      <div className="filled-name13">Filled Name</div>
                    </div>
                    <div className="jan-12-202413">Jan 12, 2024</div>
                    <div className="jan-14-202413">Jan 14, 2024</div>
                    <div className="muhammad-asad13">Muhammad Asad</div>
                    <div className="div44">+ 1 234 566 7890</div>
                    <div className="lorem-ipsum-dolor13">
                      Lorem ipsum dolor sit amet
                    </div>
                    <div className="div45">-</div>
                    <div className="div46">-</div>
                    <div className="div47">-</div>
                  </div>
                </div>
                <div className="top-level-group">
                  <div className="rectangle-parent">
                    <div className="frame-child" />
                    <div className="single-rectangle" />
                  </div>
                  <footer className="assetstable-footer">
                    <img
                      className="arrow-left-02-icon"
                      loading="lazy"
                      alt=""
                      src="/arrowleft02.svg"
                    />
                    <div className="arrow-pair">1</div>
                    <div className="arrow-pair1">2</div>
                    <div className="arrow-pair2">3</div>
                    <div className="empty-text-label">4</div>
                    <img
                      className="arrow-right-02-icon"
                      loading="lazy"
                      alt=""
                      src="/arrowright02.svg"
                    />
                  </footer>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default MacBookPro16;
