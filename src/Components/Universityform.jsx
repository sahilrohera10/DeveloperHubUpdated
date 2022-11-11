import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import ReCAPTCHA from "react-google-recaptcha";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
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

const Universityform = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const [type, setType] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(1);

  //university
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [phone, setPhone] = React.useState();
  const [city, setCity] = React.useState();
  const [state, setState] = React.useState();
  const [country, setCountry] = React.useState();

  //Reporting Manager
  const [rname, setRname] = React.useState();
  const [remail, setRemail] = React.useState();
  const [rphone, setRphone] = React.useState();
  const [rdepartment, setRdepartment] = React.useState();
  const [rdesignation, setRdesignation] = React.useState();

  const [uniQuali, setUniQuali] = React.useState("");
  const [traineeNo, setTraineeNo] = React.useState();
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();
  const [prerequisite, setPrerequisite] = React.useState();
  // const [courses, setCourses] = React.useState([]);
  const [training, setTraining] = React.useState();
  const [projectType, setProjectType] = React.useState();
  // const [trainingMedia, setTrainingMedia] = React.useState([]);
  const [activeAwareness, setActiveAwareness] = React.useState();

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

  const register = async () => {
    try {
      const body = {
        UniversityName: name,
        UniversityPhone: phone,
        Role: "University",
        email: email,
        City: city,
        State: state,
        Country: country,
        ReposManagerName: rname,
        ReposManagerEmail: remail,
        ReposManagerDesignation: rdesignation,
        ReposManagerContactNo: rphone,
        ReposManagerDepartment: rdepartment,
        TraineeQualification: uniQuali,
        TotalTraineeNo: traineeNo,
        startDate: startDate,
        EndDate: endDate,
        PreRequisite: prerequisite,
        Courses: ["AI/ML", "AR/VR"],
        TrainingMode: training,
        ProjectType: projectType,
        TrainingMedia: ["Audio", "Video"],
        ActivateAwareness: parseInt(activeAwareness),
        Certification: 1,
        PanImage: "nd3de389dn37",
        AadharImage: "h487dh8724d27",
      };

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };

      const resp = await fetch(
        "http://localhost:3301/UniversityRegistration",
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
      <div className="univ_conatainer">
        <div className="soft_heading">University</div>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
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
                value={city}
                onChange={(e) => setCity(e.target.value)}
                variant="outlined"
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
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                variant="outlined"
                style={{ width: "250px" }}
              />
            </div>
            <div className="uniDiv">
              <h3 className="reportHead">Reporting Manager</h3>
              <div className="input_box1">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  value={rname}
                  onChange={(e) => setRname(e.target.value)}
                  variant="outlined"
                  style={{ margin: "10px" }}
                  className="uniInput"
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  value={remail}
                  onChange={(e) => setRemail(e.target.value)}
                  variant="outlined"
                  style={{ margin: "10px" }}
                  className="uniInput"
                />
              </div>
              <div className="input_box1">
                <TextField
                  id="outlined-basic"
                  label="Designation"
                  value={rdesignation}
                  onChange={(e) => setRdesignation(e.target.value)}
                  variant="outlined"
                  style={{ margin: "10px" }}
                  className="uniInput"
                />
                <TextField
                  id="outlined-basic"
                  label="Phone"
                  value={rphone}
                  onChange={(e) => setRphone(e.target.value)}
                  variant="outlined"
                  style={{ margin: "10px" }}
                  className="uniInput"
                />
              </div>
              <div className="input_box1">
                <TextField
                  id="outlined-basic"
                  label="Department"
                  value={rdepartment}
                  onChange={(e) => setRdepartment(e.target.value)}
                  style={{ margin: "10px" }}
                  variant="outlined"
                  className="uniInput"
                />
              </div>
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
          <div className="University_form_container">
            <div className="uniDiv2Main">
              <h1 className="uniHead2">{type}</h1>
              <TextField
                id="outlined-basic"
                label="Total no. of Trainee"
                value={traineeNo}
                onChange={(e) => setTraineeNo(e.target.value)}
                variant="outlined"
                className="uni2Input"
                style={{ marginBottom: "20px" }}
              />
              <FormControl
                sx={{ minWidth: 220, marginTop: 1 }}
                className="uniInput"
              >
                <InputLabel id="demo-simple-select-label">
                  Trainee Qualification
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="outlined-basic"
                  value={uniQuali}
                  label="Trainee Qualification"
                  onChange={(e) => setUniQuali(e.target.value)}
                >
                  <MenuItem value="UG">UG</MenuItem>
                  <MenuItem value="PG">PG</MenuItem>
                </Select>
              </FormControl>
              <br />
              <b>Training Time</b> <br />
              <label style={{ marginLeft: "40px" }}>Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                name="Start Date"
                className="inputDate"
              />
              <label style={{ marginLeft: "40px" }}>End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                name="End Date"
                className="inputDate"
              />
              <>
                <div className="user-details">
                  <div className="input-box">
                    <FormControl
                      sx={{ minWidth: 220, marginTop: 1 }}
                      className="uniInput"
                    >
                      <InputLabel id="demo-simple-select-label">
                        Pre-requisite
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="outlined-basic"
                        value={prerequisite}
                        label="Pre-requisite"
                        onChange={(e) => setPrerequisite(e.target.value)}
                      >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value="python">Python</MenuItem>
                        <MenuItem value="JavaScript">JavaScript</MenuItem>
                        <MenuItem value="both">Both</MenuItem>
                        <MenuItem value="none">None</MenuItem>
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
                  <div className="input-box">
                    <FormControl
                      sx={{ minWidth: 220, marginTop: 1 }}
                      className="uniInput"
                    >
                      <InputLabel id="demo-simple-select-label">
                        Training Mode
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="outlined-basic"
                        value={training}
                        label="Training Mode"
                        onChange={(e) => setTraining(e.target.value)}
                      >
                        <MenuItem value="Online">Online</MenuItem>
                        <MenuItem value="Offline">Offline</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl
                      sx={{ minWidth: 220, marginTop: 1 }}
                      className="uniInput"
                    >
                      <InputLabel id="demo-simple-select-label">
                        Project Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="outlined-basic"
                        value={projectType}
                        label="Project Type"
                        onChange={(e) => setProjectType(e.target.value)}
                      >
                        <MenuItem value="Live">Live</MenuItem>
                        <MenuItem value="Simulator">Simulator</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  <div className="input-box">
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
                      sx={{ minWidth: 220, marginTop: 1 }}
                      className="uniInput"
                    >
                      <InputLabel id="demo-simple-select-label">
                        Active Awareness
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="outlined-basic"
                        value={activeAwareness}
                        label="Active Awareness"
                        onChange={(e) => setActiveAwareness(e.target.value)}
                      >
                        <MenuItem value="1">Yes</MenuItem>
                        <MenuItem value="0">No</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </>
              <div className="certification-details">
                <div className="category">
                  <div className="certification-title">
                    Certification :
                    <br />
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
                          <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        <Button
                          variant="contained"
                          component="label"
                          style={{ margin: "2px" }}
                        >
                          Upload Aadhar
                          <input hidden accept="image/*" multiple type="file" />
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

export default Universityform;
