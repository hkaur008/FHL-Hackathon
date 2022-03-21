import React from "react";
import "./SponsorsContainer.css";
import SponsorsSubContainer from "./SponsorsSubContainer/SponsorsSubContainer";
import stickermule from "./logo/stickermule.png";
import bharatX from "./logo/bharatX.png";
import gdsc from "./logo/template2_white.png";
import ShardingSphere from "./logo/ShardingSphere Logo.jpeg";
import givemycertificates from "./logo/givemycertificates.png"
import eclipse from "./logo/eclipse.png"
import jina from "./logo/jina.png"
import Heading from "../Heading";
import IEEEDTU from "./logo/IEEEDTU.png"
import gdscamity from "./logo/gdscemity.png"
import TurningClub from "./logo/Turning Club.jpeg"
import LWM from "./logo/LWM.jpeg"
import HITK from "./logo/HITK.png"
import IEEEBITS from "./logo/IEEEBITS.png"
import GDSCRur from "./logo/GDSCRourkela.png"
import GDSCBITW from "./logo/GDSCBITW.png"
import GDSCKalindiDU  from "./logo/GDSCKalindiDU.png"
import IOS  from "./logo/IOS.png"
import IEEEMSIT from "./logo/IEEEMSIT.png"
import topmate from "./logo/topmate.png"
import pepcoding from "./logo/pepcoding.png"
import nados from "./logo/nados.png"
import github from "./logo/github.png"
import hackclub from "./logo/hackclub.png"
import mlsa from "./logo/MLSA badge.png"
import thecompany from "./logo/thecompany.png"
import lpu from "./logo/lpu.png"
import GDSCbuvdc from "./logo/GDSCbuvdc.png"
import GDSCsvpvc from "./logo/GDSCsvpvc.png"
import GDSCindus from "./logo/GDSCindus.png"
import GDSCIIST from "./logo/GDSCIIST.png"
import GDSCTERV from "./logo/GDSCTERV.png"
import devincept from "./logo/devincept.png"
import gdscjaipur from "./logo/GDSCjaipur.png"
import studcolab from "./logo/studcollab.jpg"
import apache from "./logo/apache.png"
import codedazzlers from "./logo/codedazzlers.png"


function SponsorsContainer() {
    const titleSpon = [
        [
            {
                website: "https://bharatx.tech/",
                desc: "BharatX enables Consumer facing apps & websites to give their users Credit, as a Feature, using their APIs in under 60 minutes.",
                logo: bharatX,
                logoPadding:"10px",
                padding:"20px",
                tags: ["Hiring Opportunities", "Cash Prize", "Goodie Bags"],
            },
            {
                website: "https://atsign.com/",
                desc: "The @ Company is a community of Internet optimists compelled by the belief that privacy is a fundamental right. The @ Company is flipping the Internet by giving consumers control of their private information through the open-source @platform.",
                logo: thecompany,
                tags: ["Hiring Opportunities", "Goodies", "Swags", "Mentorship" ],
                padding:"45px"
            },

        ],
    ];
    
    const sponsorTypes = [
        [
            "Diamond Sponsors 💎",
            [
                {
                    website: "https://shardingsphere.apache.org/",
                    logo: ShardingSphere,
                    logoSize:"25%",
                    tags: ["Goodies", "Workshops"],
                    desc :"Apache ShardingSphere is an open source Big Data ecosystem, and one of the most successful Apache Software Foundation projects.",
                    padding:"20px",
                    logoPadding:"10px"
                },
                // "2",
                // "3",
            ],
        ],
        // ["Platinum Sponsors 🏆", ["4", "5", "6"]],
        [
            "Gold Sponsors 🥇",
            [
                {
                    website: "https://projects.eclipse.org/projects/adoptium.aqavit",
                    // name: "Eclipse AqAvit",
                    logo: eclipse,
                    logoSize:"35%",
                    logoPadding:"10px",
                    padding:"10px", 
                    tags: ["Goodies", "Workshops"],
                    desc : "Eclipse AQAvit project began about 4 years ago as a community effort to improve the quality of OpenJDK binaries"
                },
                ,
                // "8",
                // "9",
            ],
        ],
        [
            "Silver Sponsors 🥈",
            [
                {
                    website: "https://github.com/",
                    name: "GitHub",
                    logo: github,
                    logoSize:"35%"
                },
                {
                    website: "https://www.stickermule.com/",
                    name: "Stickermule",
                    logo: stickermule,
                },
                // "11",
                // "12",
            ],
        ],
        [
            "Bronze Sponsors 🥉",
            [
                {
                    website: "https://jina.ai/",
                    name: "Jina.Ai",
                    logo: jina,
                },
                {
                    website: "https://hackclub.com/",
                    name: "Hack Club",
                    logo: hackclub,
                    logoSize:"35%"
                },
                // "13",
                // "14",
            ],
        ],
        [
            "Special Partners 📜",
            [
                {
                    logo: topmate,
                    website: "https://topmate.io/",
                    name: "Topmate",
                    width : "320px",
                    height : "180px",
                    fontSize:"15px",
                    logoSize:"60%",
                    tags:["Communication Partner"]
                },
                {
                    website: "https://www.pepcoding.com/",
                    name: "Pepcoding",
                    logo: pepcoding,
                    padding:"20px",
                    width : "320px",
                    height : "180px",
                    fontSize:"15px",
                    logoSize:"30%",
                    tags:["Education Partner"]
                },
                {
                    website: "https://nados.io/feed",
                    name: "NADOS",
                    logo: nados,
                    // padding:"20px",
                    width : "320px",
                    height : "180px",
                    fontSize:"15px",
                    logoSize:"60%",
                    tags:["Education Partner"]
                },
                {
                    website: "https://givemycertificate.com/",
                    name: "Give My Certificates",
                    logo: givemycertificates,
                    logoSize:"20%",
                    width : "320px",
                    height : "180px",
                    fontSize:"15px",
                    tags:["Certificate Partner"]
                },
                {
                    website: "mailto:codefloworg@gmail.com",
                    name: "Become Our Partner!",
                    width : "320px",
                    height : "180px",
                    fontSize:"23px",
                    tags:["Platform Partner"]
                },
                {
                    website: "mailto:codefloworg@gmail.com",
                    name: "Become Our Partner!",
                    width : "320px",
                    height : "180px",
                    fontSize:"23px",
                    tags:["Media Partner"]
                },
                
            ],
        ],
        [
            "Community Partners 🤝",
            [
                {
                    website: "#",
                    name: "GDSC NIT Kurukshetra",
                    logo: gdsc,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"80%"
                },
                {
                    website: "#",
                    // name: "IEEE Delhi Technological University",
                    logo: IEEEDTU,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"60%"
                },
                {
                    website: "#",
                    name: "Turning Club",
                    logo: TurningClub,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"45%"
                },
                {
                    website: "#",
                    name: "GDSC Amity",
                    logo: gdscamity,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"90%"
                },
                {
                    website: "#",
                    name: "Learn With Mitul Community",
                    logo: LWM,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"40%"
                },
                {
                    website: "#",
                    name: "HITK Tech Community",
                    logo: HITK,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"40%"
                },
                {
                    website: "#",
                    // name: "HITK Tech Community",
                    logo: IEEEBITS,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"60%"
                },
                {
                    website: "#",
                    name: "GDSC NIT Rourkela",
                    logo: GDSCRur,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"80%"
                },
                {
                    website: "#",
                    name: "GDSC BITW",
                    logo: GDSCBITW,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"80%"
                },
                {
                    website: "#",
                    name: "GDSC Kalindi",
                    logo: GDSCKalindiDU,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"80%"
                },
                {
                    website: "#",
                    name: "International Organisation of software Developers",
                    logo: IOS,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"80%"
                },
                {
                    website: "#",
                    // name: "IEEE MSIT",
                    logo: IEEEMSIT,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"65%"
                },
                {
                    website: "#",
                    // name: "IEEE MSIT",
                    logo: mlsa,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"65%"
                },
                {
                    website: "#",
                    name: "LPU Punjab",
                    logo: lpu,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"65%"
                },
                {
                    website: "#",
                    name: "Google Developer Students Clubs Bharati Vidyapeeth",
                    logo: GDSCbuvdc,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"90%"
                },
                {
                    website: "#",
                    name: "GDSC SVPCET",
                    logo: GDSCsvpvc,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"90%"
                },
                {
                    website: "#",
                    name: "GDSC Indus University",
                    logo: GDSCindus,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"90%"
                },
                {
                    website: "#",
                    name: "GDSC Indore Institute of Science and Technology",
                    logo: GDSCIIST,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"90%"
                },
                {
                    website: "#",
                    name: "Institute of Technical Education & Research - Bhubaneswar",
                    logo: GDSCTERV,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"90%"
                },
                {
                    website: "#",
                    name: "Devincept",
                    logo: devincept,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"90%"
                },
                {
                    website: "#",
                    name: "Rajasthan College of Engineering for Women, Jaipur",
                    logo: gdscjaipur,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"90%"
                },
                {
                    website: "#",
                    // name: "Rajasthan College of Engineering for Women, Jaipur",
                    logo: studcolab,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"60%"
                },
                {
                    website: "#",
                    name: "Apache IoTDB",
                    logo: apache,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"60%"
                },
                {
                    website: "#",
                    name: "Codedazzlers",
                    logo: codedazzlers,
                    width : "180px",
                    height : "150px",
                    fontSize:"11px",
                    logoSize:"50%"
                }
                
                
            ],
        ],

    ];

    return (
        <div id="sponserLink" className="component-container">
            <Heading name="Sponsors and Partners" />
            <div className="sponsors-container">
                <SponsorsSubContainer
                    key={0}
                    subheading={`Title and Co-Title Sponsor⚡`}
                    links={titleSpon[0]}
                />
                {sponsorTypes.map((sponsorType, i) => {
                    return (
                        <SponsorsSubContainer
                            key={i}
                            subheading={sponsorType[0]}
                            links={sponsorType[1]}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default SponsorsContainer;
