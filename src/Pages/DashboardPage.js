import { Button } from "@material-ui/core";
import React from "react";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";
import { TbNotes } from "react-icons/tb";

// import NavBar from "../Components/NavBar";

const listData = [
  {
    name: "Meta",
    email: "Metaverse",
    img: "https://www.cnet.com/a/img/resize/2715aac9e2099982b092dc16e77b25fe0d5a4734/hub/2022/01/18/141595b6-ec1b-4aab-a70f-d2882821e885/gettyimages-1348369701.jpg?auto=webp&fit=crop&height=675&width=1200",
    // img: "rohera.jpeg",
  },
  {
    name: "Blockchain",
    email: "Decentralising the future",
    img: "https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/blockchain.png",
    // img: "singhal.jpeg",
  },
  {
    name: "Augmented reality",
    email: "Unleashing the new real",
    img: "https://www.mining-technology.com/wp-content/uploads/sites/19/2022/01/Augmented-Reality-Technology-Trends-1038x720.jpg",
    // img: "arora.jpeg",
  },
  {
    name: "Virtual Reality",
    email: "Living in the virtual",
    img: "https://www.forbesindia.com/media/images/2021/Nov/img_170999__augmentedreality_bg.jpg",
    // img: "bhawna.jpeg",
  },
];

export default function DashboardPage() {
  return (
    <div>
      <p
        style={{
          fontSize: "30px",
          fontWeight: "700",
          color: "#25233B",
          marginLeft: "20px",
        }}
      >
        WELCOME TO DASHBOARD
      </p>

      <div style={{ display: "flex" }}>
        <div>
          <div
            style={{
              width: "800px",
              height: "160px",
              background: "#6159C9",
              color: "white",
              marginLeft: "20px",
              borderRadius: "20px",
              display: "flex",
            }}
          >
            <img
              style={{
                width: "150px",
                height: "150px",
                marginLeft: "40px",
                marginTop: "5px",
              }}
              src="adminImage.png"
              alt=""
            />{" "}
            <div style={{ marginLeft: "30px" }}>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "550",
                  // marginLeft: "30px",
                  marginTop: "45px",
                  marginBottom: "5px",
                }}
              >
                Hello User
              </p>
              <p style={{ marginTop: "0px" }}>
                Now you can check all updates from this panel 🚀
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "15px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                width: "250px",
                height: "150px",
                background: "white",
                borderRadius: "20px",
                margin: "10px",
                position: "relative",
              }}
            >
              {" "}
              <BsJournalBookmarkFill
                size={25}
                style={{
                  position: "absolute",
                  top: "75%",
                  left: "80%",
                  color: "#6159C9",
                }}
              />{" "}
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                Total Courses
              </p>{" "}
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: "500",
                  textAlign: "center",
                  marginTop: "0px",
                }}
              >
                2 +
              </p>
            </div>
            <div
              style={{
                width: "250px",
                height: "150px",
                background: "white",
                borderRadius: "20px",
                margin: "10px",
                position: "relative",
              }}
            >
              <MdOndemandVideo
                size={25}
                style={{
                  position: "absolute",
                  top: "75%",
                  left: "80%",
                  color: "#6159C9",
                }}
              />
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                Watched Lectures
              </p>
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: "500",
                  textAlign: "center",
                  marginTop: "0px",
                }}
              >
                45 +
              </p>
            </div>
            <div
              style={{
                width: "250px",
                height: "150px",
                background: "white",
                borderRadius: "20px",
                margin: "10px",
                position: "relative",
              }}
            >
              <TbNotes
                size={25}
                style={{
                  position: "absolute",
                  top: "75%",
                  left: "80%",
                  color: "#6159C9",
                }}
              />{" "}
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                Submitted Assignments
              </p>{" "}
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: "500",
                  textAlign: "center",
                  marginTop: "0px",
                }}
              >
                10 +
              </p>
            </div>
          </div>
          {/* <Graphs /> */}
        </div>
        <div
          style={{
            width: "300px",
            height: "auto",
            background: "white",
            marginLeft: "30px",
            borderRadius: "20px",
          }}
        >
          <p
            style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}
          >
            UPCOMING TOPICS
          </p>
          {listData.map((data) => (
            <div
              style={{
                marginLeft: "20px",
                borderBottom: "1px solid black",
                marginRight: "20px",
                marginBottom: "10px",
                display: "flex",
                paddingBottom: "10px",
              }}
            >
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50px",
                  marginRight: "10px",
                }}
                src={data.img}
                alt=""
              />
              <div>
                <p
                  style={{
                    marginBottom: "1px",
                    marginTop: "0px",
                    fontWeight: "500",
                    fontSize: "17px",
                  }}
                >
                  {data.name}
                </p>
                <p
                  style={{
                    marginBottom: "2px",
                    marginTop: "0px",
                    fontWeight: "300",
                    fontSize: "15px",
                  }}
                >
                  {data.email}
                </p>
              </div>
            </div>
          ))}
          <Button
            variant="contained"
            style={{
              marginLeft: "100px",
              marginBottom: "20px",
              background: "#6159C9",
              color: "white",
            }}
          >
            View All
          </Button>
        </div>
      </div>
    </div>
  );
}
