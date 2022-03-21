import React from "react";
import "./App.css";
import Sessions from "./Components/Sessions";
import Home from "./Components/Home";
import Organization from "./Components/Organization";
import IssueFullPage from "./Components/IssueFullPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TeamContainer from "./Components/Team/TeamContainer";
import SponsorsContainer from "./Components/Sponsors/SponsorsContainer";
import Panel from "./Components/Panel/Panel";
import Particles from "./Components/Particles";
import NavBar from "./Components/NavBar";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Swags from "./Components/Swags/Swags";
import Timeline from "./Components/Timeline";
import FAQ from "./Components/FAQ";
import FAQCont from "./Components/FAQCont";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import ScrollTop from "./Components/ScrollTop";
import Content from "./Components/Content";
import ChallengeContainer from "./Components/Challenge/ChallengeContainer";
import PreLoader from "./Components/PreLoader/PreLoader";
import Mentors from "./Components/Mentors/Mentors";
import Overview from "./Components/Overview";


function App() {


    const resetTimeline = () => {
        const a = document.querySelector(".dark");
        const dots = document.querySelectorAll(".dot");
        const line = document.querySelector(".tlline");
        const timelineCont = document.querySelector(".timelineCont");
        if(timelineCont == null) return;
        var padding = window
            .getComputedStyle(timelineCont)
            .paddingLeft.substring(
                0,
                window.getComputedStyle(timelineCont).paddingLeft.length - 2
            );
        for (var i of dots) {
            i.style.left = `${line.offsetLeft - a.offsetLeft - padding - 10}px`;
        }
    };

    window.addEventListener('load', () => {
        var sc = sessionStorage.getItem("scroll");
        
        if (sc !== null) {
            
            document.getElementById("root").scrollTop = sc;
        }
    })

    document.getElementById("root").addEventListener('scroll', () => {
        sessionStorage.setItem("scroll", document.getElementById("root").scrollTop);
    })
    
    setTimeout(() => {
        if(document.getElementsByClassName("App")[0])document.getElementsByClassName("App")[0].classList.remove("hide");
        if(document.getElementsByClassName("preloader")[0])document.getElementsByClassName("preloader")[0].classList.add("hide");
        setTimeout(resetTimeline, 100);
        window.addEventListener('resize',resetTimeline);
    },1500);
    return (
        <div>
        <PreLoader/>
        <BrowserRouter>
            <div className="App hide">
                <Particles />
                <NavBar/>
                <Switch>
                    <Route exact path="/">
                        <Home />
                        <AboutUs />
                        <Timeline resetTimeline={resetTimeline}/>
                        <Content/>
                        <Organization />
                        <Sessions />
                        <SponsorsContainer />
                        {/* <Registration /> */}
                        <FAQCont />
                        <TeamContainer />
                        <Contact />
                        <Footer />
                        <ScrollTop/>
                    </Route>
                    <Route exact path={"/swags"}>
                        <Swags />
                        <Footer/>
                    </Route>
                    <Route exact path="/issue">
                        <IssueFullPage />
                    </Route>
                    <Route exact path="/panel">
                        <Panel />
                    </Route>
                    <Route exact path="/FAQs">
                        <FAQ />
                    </Route>
                    <Route exact path="/error">
                        <Error />
                    </Route>
                    <Route exact path="/challenges">
                        <ChallengeContainer/>
                        <Footer/>
                    </Route>
                    <Route exact path="/mentors">
                        <Mentors/>
                        <Footer/>
                    </Route>
                    <Route exact path="/overview">
                        <Overview/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
        </div>
    );
}

export default App;
