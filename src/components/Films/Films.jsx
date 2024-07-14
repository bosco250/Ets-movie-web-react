import React from "react";
import "./Films.css";
import Recent from "../Recent/Recent";
import Tranding from "../Tranding/Tranding";
import Flash from "../../assets/flash.png";
import Fubar from "../../assets/fubar.png";
import Manifest from "../../assets/manifest.png";
import Silo from "../../assets/silo.png";
import NextIcon from "../../assets/nextAllow.png";
import ViewIcon from "../../assets/viewall.png";
import Medellin from "../../assets/medellin.png";
import Play from "../../assets/play-button.png";
import FastX from "../../assets/fastx.png";
import TheBlack from "../../assets/theblack.png";
import Time from "../../assets/time.png";
import Star from "../../assets/star.png";
import NewReleased from "../NewReleased/NewReleased";
import Ghosted from '../../assets/ghosted.png'
import John from '../../assets/john.png'
import Guadian from '../../assets/guardians.png'
import Coventant from '../../assets/covenant.png'
import SiloS from '../../assets/siloSeries.png'
import BlackNight from '../../assets/blackNight.png'
import DropsOfGod from '../../assets/dropsOfGod.png'
import NightAgent from '../../assets/nightAgent.png'

import TheMother from '../../assets/theMother.png'
import Sisu from '../../assets/sisu.png'
import Robot from '../../assets/robot.png'
import Paint from '../../assets/paint.png'
import LoveAgain from '../../assets/loveAgain.png'
import January from '../../assets/january.png'
import Hypnotic from '../../assets/hypnotic.png'
import Book from '../../assets/bookClub.png'

const Films = () => {
  return (
    <>
      <div className="films-container">
        <div style={{ paddingBottom: "20px", width: "200px" }}>
          <h2>Recent Updated</h2>
        </div>
        <div className="recent-container">
          <Recent
            imgsrc={Flash}
            title="The Flash"
            episode="Series/S 2/EP 9"
            date="11/05/23"
          />
          <Recent
            imgsrc={Fubar}
            title="Fubar"
            episode="Series/S 1/EP 8"
            date="11/05/23"
          />
          <Recent
            imgsrc={Manifest}
            title="Manifest"
            episode="Series/S 4/EP 12"
            date="11/05/23"
          />
          <Recent
            imgsrc={Silo}
            title="Silo"
            episode="Series/S 1/EP 10"
            date="11/05/23"
          />
          <div className="next-arrow">
            <div>
              <img src={NextIcon} alt="Next" />
            </div>
          </div>
        </div>
        <div className="tranding-container">
          <div>
            <h2>Trending</h2>
          </div>
          <div>
            <h3 style={{ color: "gray" }}>
              View All <img src={ViewIcon} alt="" />
            </h3>
          </div>
        </div>
        <div className="trandings">
          <Tranding
            imageSrc={Medellin}
            playImgsrc={Play}
            timeSrc={Time}
            time="3:12:00"
            starSrc={Star}
            star="8.0"
            title="Madellin"
            btn1=""
            btn2="Action"
            btn3="Comedy"
          />

          <Tranding
            imageSrc={FastX}
            playImgsrc={Play}
            timeSrc={Time}
            time="3:12:00"
            starSrc={Star}
            star="8.0"
            title="Fast X"
            btn1="Action"
            btn2="Crime"
            btn3="Thriller"
          />

          <Tranding
            imageSrc={TheBlack}
            playImgsrc={Play}
            timeSrc={Time}
            time="3:12:00"
            starSrc={Star}
            star="8.0"
            title="The Black Dem..."
            btn1=""
            btn2="Honor"
            btn3="Thriller"
          />
        </div>
        <div className="tranding-container">
          <div>
            <h2>New Release - Movies</h2>
          </div>
          <div>
            <h3 style={{ color: "gray" }}>
              View All <img src={ViewIcon} alt="" />
            </h3>
          </div>
        </div>
        <div className="new-container">
        <NewReleased 
        profSrc={Ghosted}
        title="Ghosted"
        timeSrc={Time}
        btn1="HD"
        btn2="3:12:00"
        ep=""
        />
        <NewReleased 
        profSrc={John}
        title="John Wick: Ch..."
        timeSrc={Time}
        btn1="HD"
        btn2="3:12:00"
        ep=""
        />
        <NewReleased 
        profSrc={Guadian}
        title="Guardians of th..."
        timeSrc={Time}
        btn1="HD"
        btn2="3:12:00"
        ep=""
        />
        <NewReleased 
        profSrc={Coventant}
        title="The Conven..."
        timeSrc={Time}
        btn1="HD"
        btn2="3:12:00"
        ep=""
        />
        </div>
        <div className="tranding-container">
          <div>
            <h2>New Release - Series</h2>
          </div>
          <div>
            <h3 style={{ color: "gray" }}>
              View All <img src={ViewIcon} alt="" />
            </h3>
          </div>
        </div>
        <div className="new-container">
        <NewReleased 
        profSrc={SiloS}
        title="Silo"
        timeSrc=""
        btn1="HD"
        btn2="Season 1"
        ep="EP 6"
        />
        <NewReleased 
        profSrc={BlackNight}
        title="Black Knigh"
        timeSrc=""
        btn1="HD"
        btn2="Season 1"
        ep="EP 6"
        />
        <NewReleased 
        profSrc={DropsOfGod}
        title="Drops of God"
        timeSrc=""
        btn1="HD"
        btn2="Season 1"
        ep="EP 6"
        />
        <NewReleased 
        profSrc={NightAgent}
        title="The Night Agent"
        timeSrc=""
        btn1="HD"
        btn2="Season 1"
        ep="EP 6"
        />
        </div>
        <div className="tranding-container">
          <div style={{display:"flex",gap:"20px"}}>
            <h2>Recommended</h2>
            <button className="lbutton active">Movies</button>
            <button className="lbutton">Series</button>
            <button className="lbutton">Animation</button>
          </div>
          <div>
            <h3 style={{ color: "gray" }}>
              View All <img src={ViewIcon} alt="" />
            </h3>
          </div>
        </div>
        <div className="new-container">
        <NewReleased 
        profSrc={Robot}
        title="Robots"
        timeSrc={Time}
        btn1="CAM"
        btn2="3:12:00"
        ep=""
        />
        <NewReleased 
        profSrc={LoveAgain}
        title="Love Again"
        timeSrc={Time}
        btn1="CAM"
        btn2="3:12:00"
        ep=""
        />
        <NewReleased 
        profSrc={Hypnotic}
        title="Hypnotic"
        timeSrc={Time}
        btn1="CAM"
        btn2="3:12:00"
        ep=""
        />
        <NewReleased 
        profSrc={Paint}
        title="Paint"
        timeSrc={Time}
        btn1="HD"
        btn2="3:12:00"
        ep=""
        />
        </div>
        <div className="new-container">
        <NewReleased 
        profSrc={Book}
        title="Book Club"
        timeSrc={Time}
        btn1="CAM"
        btn2="3:12:00"
        ep=""
        />
        <NewReleased 
        profSrc={TheMother}
        title="The Mother"
        timeSrc={Time}
        btn1="HD"
        btn2="3:12:00"
        ep=""
        />
        <NewReleased 
        profSrc={January}
        title="January 6th"
        timeSrc={Time}
        btn1="HD"
        btn2="3:12:00"
        ep=""
        />
        <NewReleased 
        profSrc={Sisu}
        title="Sisu"
        timeSrc={Time}
        btn1="HD"
        btn2="3:12:00"
        ep=""
        />
        </div>
      </div>
      <footer style={{
  height: "80px",
  backgroundColor: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  textAlign: "center",
  paddingBottom: "10px",
  color: "white"
}}>
  &copy; BOSCO {new Date().getFullYear()}, All Rights Reserved
</footer>

    </>
  );
};

export default Films;
