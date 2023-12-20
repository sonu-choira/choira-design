import React from "react";
import "../produce/dashboard.css";
import logo from "../../assets/img/logo-choira.svg";
import create from "../../assets/img/dashboard_img/create.svg";
import produce from "../../assets/img/dashboard_img/produce_selected.svg";
import community from "../../assets/img/dashboard_img/community.svg";
import tanmay from "../../assets/img/dashboard_img/tanmay.png";
import folder from "../../assets/img/dashboard_img/folder.svg";
import progress from "../../assets/img/dashboard_img/progress.svg";
import payment from "../../assets/img/dashboard_img/payment.svg";
import message from "../../assets/img/dashboard_img/message.svg";
import files from "../../assets/img/folder.svg";

import { IoIosArrowBack } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import ProjecDetails from "../../components/user-project-detail/ProjecDetails";

function ChoiraTest() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { userProjectData } = state || {};
  console.log("userProjectData:", userProjectData);
  const gotoNewproject = () => {
    navigate("/newproject");
  };
  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <div className="sidebar-main">
            <div className="section1">
              <div>
                <img src={logo} alt="" />
              </div>
              <div className="create-btn">
                <button>
                  <img src={create} alt="" />
                  Create
                </button>
              </div>
              <div className="community">
                <div>
                  <img src={community} alt="" />
                  Community
                </div>
                <div>
                  <img src={produce} alt="" />
                  Produce
                </div>
              </div>
            </div>

            <div className="section2">
              <div className="section2-main">
                <div>
                  <img src={tanmay} alt="" />
                </div>
                <div>
                  <h5>Tanmay</h5>
                  <h6>Music Producer</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard">
          <div className="produce-section">
            <div className="produce-section-main2">
              <div>
                <img src={folder} alt="" /> <h1>Choira-test</h1>
              </div>
              <div className="produce-section-tabs">
                <div>
                  <img src={folder} alt="" />
                  <h6>Projects</h6>
                </div>

                <div>
                  <img src={progress} alt="" />
                  <h6>Progress</h6>
                </div>

                <div>
                  <img src={payment} alt="" />
                  <h6>Payment</h6>
                </div>

                <div>
                  <img src={message} alt="" />
                  <h6>Message</h6>
                </div>
              </div>
              <div className="choira-test-btn">
                <div>
                  <button>
                    <IoIosArrowBack />
                    Back
                  </button>
                </div>
                <div>
                  <div>
                    <button>
                      Edit <FiEdit />
                    </button>
                  </div>
                  <div>
                    <button>
                      Delete
                      <RiDeleteBin5Fill />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="choira-test-project-section">
            <ProjecDetails userProjectData={userProjectData} />
            {/* <div className="choira-test-project-section-main-2">
              <div className="progress-div">
                <div className="progress-main-div">
                  <div>
                    <span>Progress</span>
                    <div>Under Prcducticn</div>
                  </div>
                  <div>
                    <span>Time Left</span>
                    <div></div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ChoiraTest;
