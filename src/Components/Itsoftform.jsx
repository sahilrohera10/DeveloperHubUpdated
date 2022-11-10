import React, { useEffect } from 'react'
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

// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
import FormHelperText from "@mui/material/FormHelperText";
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import Chip from "@mui/material/Chip";
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Radio from '@mui/material/Radio';
// import FormLabel from '@mui/material/FormLabel';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
// import Button from '@mui/material/Button';
import './AllForm.css';

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
      const [name, setName] = React.useState();
    
      const [value1, setvalue1] = React.useState("");
      const [value2, setvalue2] = React.useState("");
      const [value3, setvalue3] = React.useState("");
      const [value4, setvalue4] = React.useState("");
      const [open1, setOpen1] = React.useState(false);
      const [open2, setOpen2] = React.useState(false);
      const [open3, setOpen3] = React.useState(false);
      const [open4, setOpen4] = React.useState(false);
      const [open5, setOpen5] = React.useState(false);
    
      const handleChange = (event) => {
        setType(event.target.value);
      };
      const handleNext = () => {
        if (type) {
          setIsVisible(isVisible + 1);
        }
      };
    
      const handleBack = () => {
        setIsVisible(isVisible - 1);
      };
    
      const [uniQuali, setUniQuali] = React.useState("");
    
      const handleuniQuali = (event) => {
        setUniQuali(event.target.value);
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
    
      const handleChange3 = (event) => {
        setvalue1(event.target.value);
      };
    
      const handleChange4 = (event) => {
        setvalue2(event.target.value);
      };
    
      const handleChange5 = (event) => {
        setvalue3(event.target.value);
      };
      const handleChange6 = (event) => {
        setvalue4(event.target.value);
      };
    
      const handleClickOpen = () => {
        setOpen5(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason !== "backdropClick") {
          setOpen5(false);
        }
      };
    
      const handleClose1 = () => {
        setOpen1(false);
      };
      const handleClose2 = () => {
        setOpen2(false);
      };
      const handleClose3 = () => {
        setOpen3(false);
      };
      const handleClose4 = () => {
        setOpen4(false);
      };
    
      const handleOpen1 = () => {
        setOpen1(true);
      };
      const handleOpen2 = () => {
        setOpen2(true);
      };
      const handleOpen3 = () => {
        setOpen3(true);
      };
      const handleOpen4 = () => {
        setOpen4(true);
      };
    
      const theme = useTheme();
      const [personName1, setPersonName1] = React.useState([]);
      const [personName2, setPersonName2] = React.useState([]);
  return (
    <div className="formMainDiv">
    <div className='univ_container'>
    <div>
            <h1 className="ItHead">{type}</h1>
            <div className="container-form">
              {/* <div className="title">Registration</div> */}
              <div className="content">
                <form action="#">
                  <div className="user-details">
                    <div className="input-box">
                      <FormControl sx={{ minWidth: 300, marginTop: 1 }}>
                        <InputLabel id="demo-controlled-open-select-label">
                          Pre-requisite
                        </InputLabel>
                        <Select
                          labelId="demo-controlled-open-select-label"
                          id="demo-controlled-open-select"
                          open={open1}
                          onClose={handleClose1}
                          onOpen={handleOpen1}
                          value={value1}
                          label="Pre-requisite"
                          onChange={handleChange3}
                        >
                          <MenuItem value=""></MenuItem>
                          <MenuItem value="python">Python</MenuItem>
                          <MenuItem value="js">JavaScript</MenuItem>
                          <MenuItem value="both">Both</MenuItem>
                          <MenuItem value="none">None</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="input-box">
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
                      <FormControl sx={{ minWidth: 300, marginTop: 1 }}>
                        <InputLabel id="demo-controlled-open-select-label">
                          Training Mode
                        </InputLabel>
                        <Select
                          labelId="demo-controlled-open-select-label"
                          id="demo-controlled-open-select"
                          open={open2}
                          onClose={handleClose2}
                          onOpen={handleOpen2}
                          value={value2}
                          label="Training Mode"
                          onChange={handleChange4}
                        >
                          <MenuItem value=""></MenuItem>
                          <MenuItem value="Online">Online</MenuItem>
                          <MenuItem value="Offline">Offline</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="input-box">
                      <FormControl sx={{ minWidth: 300, marginTop: 1 }}>
                        <InputLabel id="demo-controlled-open-select-label">
                          Project Type
                        </InputLabel>
                        <Select
                          labelId="demo-controlled-open-select-label"
                          id="demo-controlled-open-select"
                          open3={open3}
                          onClose={handleClose3}
                          onOpen={handleOpen3}
                          value={value3}
                          label="Project Type"
                          onChange={handleChange5}
                        >
                          <MenuItem value=""></MenuItem>
                          <MenuItem value="python">Live </MenuItem>
                          <MenuItem value="js">Simulator</MenuItem>
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
                    </div>
                    <div className="input-box">
                      <FormControl sx={{ minWidth: 300, marginTop: 1 }}>
                        <InputLabel id="demo-controlled-open-select-label">
                          Active Awareness
                        </InputLabel>
                        <Select
                          labelId="demo-controlled-open-select-label"
                          id="demo-controlled-open-select"
                          open4={open4}
                          onClose={handleClose4}
                          onOpen={handleOpen4}
                          value={value4}
                          label="Active Awareness"
                          onChange={handleChange6}
                        >
                          <MenuItem value=""></MenuItem>
                          <MenuItem value="python">Yes </MenuItem>
                          <MenuItem value="js">No</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
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
                              value="female"
                              onClick={handleClickOpen}
                              control={<Radio />}
                              label="Yes"
                            />
                            <FormControlLabel
                              value="male"
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

                  {/* <div className="button">
                    <input type="button" defaultValue="Ok & Next" />
                  </div> */}
                </form>
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
                  Ok & Next
                </Button>
              </div>
            </div>
          </div>
    </div>
    </div>
  )
}

export default Itsoftform
