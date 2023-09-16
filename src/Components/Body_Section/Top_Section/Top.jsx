import React from "react";
import "./Top.css";
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { BsArrowRightShort, BsQuestionCircle } from "react-icons/bs";
import { MdOutlineNotificationsNone } from "react-icons/md";
import img from "../../../Assets/mahmud-alam.png";
// import img1 from "../../../Assets/img1.png";
import video from "../../../Assets/video.mp4";

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Plantpedia</h1>
          <p>Hello, Mahmud Alam, Welcome back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" name="" id="" placeholder="Search" />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={img} alt="Admin Image" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="leftCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p>
            The world's fast growing industry today are natural made products!
          </p>

          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="rightCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                  Today <br />
                  <small>4 Orders</small>
                </span>
                <span>
                  This Month <br />
                  <small>127 Orders</small>
                </span>
              </div>

              <span className="flex link">
                Go to my order <BsArrowRightShort className="icon" />
              </span>
            </div>

            {/* <div className="imgDiv">
              <img src={img1} alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
