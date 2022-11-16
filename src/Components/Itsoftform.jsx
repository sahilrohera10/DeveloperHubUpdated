import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import ReCAPTCHA from "react-google-recaptcha";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./AllForm.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Courses = ["Blockchain", "Metaverse", "AI/ML", "AR/VR"];
const trainingMode = ["Text", "Audio", "Video", "All"];

function getStyles1(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function getStyles2(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Itsoftform = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const [type, setType] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(1);

  const [open5, setOpen5] = React.useState(false);

  const handleNext = () => {
    setIsVisible(isVisible + 1);
  };

  const handleBack = () => {
    setIsVisible(isVisible - 1);
  };

  const handleChange1 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName1(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName2(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleClickOpen = () => {
    setOpen5(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen5(false);
    }
  };

  const theme = useTheme();
  const [personName1, setPersonName1] = React.useState([]);
  const [personName2, setPersonName2] = React.useState([]);

  //IT Soft Form

  // const [name, setName] = React.useState();
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [phone, setPhone] = React.useState();
  const [city, setCity] = React.useState();
  const [state, setState] = React.useState();
  const [country, setCountry] = React.useState();
  const [prerequisite, setPrerequisite] = React.useState();
  const [training, setTraining] = React.useState();
  const [projectType, setProjectType] = React.useState();
  const [activeAwareness, setActiveAwareness] = React.useState();

  const register = async () => {
    try {
      const body = {
        ITName: name,
        Role: "ItSoftware",
        ITPhone: phone,
        email: email,
        City: city,
        State: state,
        Country: country,
        PreRequisite: prerequisite,
        Courses: ["AI/ML", "AR/VR"],
        TrainingMode: training,
        ProjectType: projectType,
        TrainingMedia: ["Audio", "Video"],
        ActivateAwareness: 1,
        Certification: 1,
        PanImage: "",
        AadharImage: "",
      };

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };

      const resp = await fetch(
        "http://localhost:3301/ITRegistration",
        requestOptions
      );

      if (resp.status === 200) {
        alert("register success");
      }
      if (resp.status === 300) {
        alert("user Already registered");
      }
    } catch (error) {
      console.log("error=>", error);
      alert("error");
    }
  };
  return (
    <div className="formMainDiv">
      <div className="IT_container">
        <div className="soft_heading">IT-Software</div>
        {isVisible === 1 ? (
          <>
            <div style={{ marginTop: "20px" }}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  marginRight: "50px",
                  width: "250px",
                  marginBottom: "20px",
                }}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "250px" }}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <TextField
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  marginRight: "50px",
                  width: "250px",
                  marginBottom: "20px",
                }}
              />
              <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{ width: "250px" }}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <TextField
                id="outlined-basic"
                label="State"
                variant="outlined"
                value={state}
                onChange={(e) => setState(e.target.value)}
                style={{
                  marginRight: "50px",
                  width: "250px",
                  marginBottom: "20px",
                }}
              />
              <TextField
                id="outlined-basic"
                label="Country"
                variant="outlined"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                style={{ width: "250px" }}
              />
            </div>
            <div className="btnDiv1">
              <Button
                style={{ width: "200px", marginBottom: "20px" }}
                variant="contained"
                onClick={() => handleNext()}
              >
                Ok & Next
              </Button>
            </div>
          </>
        ) : (
          <></>
        )}
        {isVisible === 2 ? (
          <>
            <div className="IT_form_container">
              <div className="input_box">
                <div className="input-box1">
                  <FormControl
                    sx={{ minWidth: 300, marginTop: 1 }}
                    className="uniInput"
                  >
                    <InputLabel id="demo-simple-select-label">
                      Pre-Requisite
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="outlined-basic"
                      value={prerequisite}
                      label="Pre-requisite"
                      onChange={(e) => setPrerequisite(e.target.value)}
                    >
                      <MenuItem value="UG">Python</MenuItem>
                      <MenuItem value="PG">Javascript</MenuItem>
                      <MenuItem value="PG">Both</MenuItem>
                      <MenuItem value="PG">None</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ width: 300, marginTop: 1 }}>
                    <InputLabel id="demo-multiple-chip-label">
                      Course
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-chip-label"
                      id="demo-multiple-chip"
                      multiple
                      value={personName1}
                      onChange={handleChange1}
                      input={
                        <OutlinedInput
                          id="select-multiple-chip"
                          label="Course"
                        />
                      }
                      renderValue={(selected) => (
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 0.5,
                          }}
                        >
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    >
                      {Courses.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles1(name, personName1, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="input-box1">
                  <FormControl
                    sx={{ minWidth: 300, marginTop: 1 }}
                    className="uniInput"
                  >
                    <InputLabel id="demo-simple-select-label">
                      Training Mode
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="outlined-basic"
                      value={training}
                      label="training-mode"
                      onChange={(e) => setTraining(e.target.value)}
                    >
                      <MenuItem value="UG">Online</MenuItem>
                      <MenuItem value="PG">Offline</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl
                    sx={{ minWidth: 300, marginTop: 1 }}
                    className="uniInput"
                  >
                    <InputLabel id="demo-simple-select-label">
                      Project Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="outlined-basic"
                      value={projectType}
                      label="project-type"
                      onChange={(e) => setProjectType(e.target.value)}
                    >
                      <MenuItem value="UG">Live</MenuItem>
                      <MenuItem value="PG">Simulator</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="input-box1">
                  <FormControl sx={{ width: 300, marginTop: 1 }}>
                    <InputLabel id="demo-multiple-name-label">
                      Training-Media
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      multiple
                      value={personName2}
                      onChange={handleChange2}
                      input={<OutlinedInput label="Training-Media" />}
                      MenuProps={MenuProps}
                    >
                      {trainingMode.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles2(name, personName2, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl
                    sx={{ minWidth: 300, marginTop: 1 }}
                    className="uniInput"
                  >
                    <InputLabel id="demo-simple-select-label">
                      Active Awareness
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="outlined-basic"
                      value={activeAwareness}
                      label="active awareness"
                      onChange={(e) => setActiveAwareness(e.target.value)}
                    >
                      <MenuItem value="UG">Yes</MenuItem>
                      <MenuItem value="PG">No</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="gender-details">
                  <div className="category">
                    <div className="gender-title">
                      Certification :
                      <br />
                      {/*      
          <Button onClick={handleClickOpen}>Yes</Button>
          <Button >No</Button> */}
                      <FormControl>
                        <RadioGroup>
                          <FormControlLabel
                            value="yes"
                            onClick={handleClickOpen}
                            control={<Radio />}
                            label="Yes"
                          />
                          <FormControlLabel
                            value="no"
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <Dialog
                      disableEscapeKeyDown
                      open={open5}
                      onClose={handleClose}
                    >
                      <DialogTitle>Fill the details</DialogTitle>
                      <DialogContent>
                        <Box
                          component="form"
                          sx={{ display: "flex", flexWrap: "wrap" }}
                        >
                          <Button
                            variant="contained"
                            component="label"
                            style={{ margin: "2px" }}
                          >
                            Upload PAN
                            <input
                              hidden
                              accept="image/*"
                              multiple
                              type="file"
                            />
                          </Button>
                          <Button
                            variant="contained"
                            component="label"
                            style={{ margin: "2px" }}
                          >
                            Upload Aadhar
                            <input
                              hidden
                              accept="image/*"
                              multiple
                              type="file"
                            />
                          </Button>
                        </Box>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Ok</Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </div>
              </div>
              <div className="btnDiv">
                <Button
                  style={{ width: "200px", marginBottom: "20px" }}
                  variant="contained"
                  onClick={() => handleBack()}
                >
                  Back
                </Button>
                <Button
                  style={{ width: "200px", marginBottom: "20px" }}
                  variant="contained"
                  onClick={() => handleNext()}
                >
                  Next
                </Button>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}

        {isVisible === 3 ? (
          <>
            {" "}
            <div>
              <h2>{type}</h2>
              <TextField id="outlined-basic" label="OTP" variant="outlined" />
              <Button variant="contained" className="otpBtn">
                Send Otp
              </Button>
              <ReCAPTCHA
                style={{ marginTop: "40px" }}
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChange}
              />
              <div style={{ display: "flex", marginTop: "30px" }}>
                <Checkbox {...label} /> <p style={{ marginTop: "9px" }}>T&C</p>
                <Checkbox {...label} />{" "}
                <p style={{ marginTop: "9px" }}>Data Privacy</p>
                <Checkbox {...label} />{" "}
                <p style={{ marginTop: "9px" }}>Cross Promotions</p>
              </div>
              <div className="btnDiv">
                <Button
                  style={{ width: "100px" }}
                  variant="contained"
                  onClick={() => handleBack()}
                >
                  Back
                </Button>
                <Button
                  style={{ width: "100px" }}
                  variant="contained"
                  onClick={() => register()}
                >
                  Submit
                </Button>
              </div>
            </div>
          </>
        ) : isVisible === 4 ? (
          <>
            <div className="thankupage">
              <i>
                <b>Thank you for signing up !</b>
              </i>
              <span>
                {" "}
                Please check your email for all further details it will recieve
                within 24 hours.
              </span>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="form_img">
        <img className="rightImg" src="RegisterImg.png" alt="img" />
      </div>
    </div>
  );
};

export default Itsoftform;
