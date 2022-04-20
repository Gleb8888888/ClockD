import React, { Component } from "react";
import "./App.css";
import DC from "./DigitalClock"


class App extends Component {

  render() {

    const deg = 6;

    setInterval(() => {
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;
    
      window.hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
      window.mn.style.transform = `rotateZ(${(mm)}deg)`;
      window.sc.style.transform = `rotateZ(${(ss)}deg)`;
    })

    return (
      <div className="clock">
              <div className="hour">
                <div className="hr" id="hr"></div>
              </div>
              <div className="min">
                <div className="mn" id="mn"></div>
              </div>
              <div className="sec">
                <div className="sc" id="sc"></div>
              <DC z-index="999"></DC>
              </div>
    </div>
    )
  }
}

export default App;