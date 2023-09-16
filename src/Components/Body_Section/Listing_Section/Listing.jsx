import React from "react";
import "./Listing.css";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import img from "../../../Assets/img3.png";
import img1 from "../../../Assets/img6.png";
import img2 from "../../../Assets/img8.png";
import img3 from "../../../Assets/img7.png";
import img4 from "../../../Assets/img4.png";
import img5 from "../../../Assets/img5.png";
import user from "../../../Assets/mahmud-alam.jpg";
import user1 from "../../../Assets/user1.jpg";
import user2 from "../../../Assets/user2.jpg";
import user3 from "../../../Assets/user3.jpg";

const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <div className="imgDiv">
            <img src={img} alt="Image Name" />
          </div>
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <div className="imgDiv">
            <img src={img1} alt="Image Name" />
          </div>
          <h3>Buttom Fern</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <div className="imgDiv">
            <img src={img2} alt="Image Name" />
          </div>
          <h3>Red Leaf Plant</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <div className="imgDiv">
            <img src={img3} alt="Image Name" />
          </div>
          <h3>Spider Plant</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <div className="imgDiv">
            <img src={img4} alt="Image Name" />
          </div>
          <h3>Leaf Plant</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <div className="imgDiv">
            <img src={img5} alt="Image Name" />
          </div>
          <h3>Beauty Garden</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user} alt="Users Image" />
              <img src={user1} alt="Users Image" />
              <img src={user2} alt="Users Image" />
              <img src={user3} alt="Users Image" />
            </div>
            <div className="cardText">
              <span>
                14,556 Palnt sold! <br />
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user2} alt="Users Image" />
              <img src={user} alt="Users Image" />
              <img src={user3} alt="Users Image" />
              <img src={user1} alt="Users Image" />
            </div>
            <div className="cardText">
              <span>
                28,556 Palnt sold! <br />
                <small>
                  26 Sellers <span className="date">31 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Listing;
