import React, { useEffect, useState } from "react";
import mentors from "./MentorDetails.js";
import "./style.css";
import MentorCard from "./MentorCard";
import steps from "./photos/steps.png";

export default function Mentors() {
    const [text, settext] = useState("");
    const [ment, setment] = useState(mentors)
    const [expfilter, setexpfilter] = useState("All");
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
        
            // Generate random number
            var j = Math.floor(Math.random() * (i + 1));
                        
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
            
        return array;
    }
    useEffect(() => {
        document.getElementById("root").scrollTop = 0;
        setment(shuffleArray(mentors));
    }, []);

    return (
        <div className="indvmentors">
            <div className="upper">
                <div className="mentortext">
                    Our communication partner{" "}
                    <a href="https://topmate.io/" target="_blank">
                        topmate.io
                    </a>{" "}
                    has helped to bridge the gap between our amazing mentors and
                    students. You can now have a 1 : 1 mentorship session with
                    our mentors. follow few steps and you are good to go:
                </div>
                <div className="steps">
                    <div className="mentorimg">
                        <img src={steps} alt="" className="stp" />
                    </div>
                    <div className="mentorsearchtext">
                        <i className="fas fa-search"></i>
                        <input
                            type="text"
                            onChange={(e) => {
                                settext(e.target.value);
                            }}
                            value={text}
                            placeholder="Search by name, role"
                        />
                    </div>
                    <select
                        name=""
                        id="mentorfilter"
                        onChange={(e) => {
                            setexpfilter(e.target.value);
                        }}
                    >
                        <option value="All">All</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Android Development">Android Development</option>
                        <option value="ML/AI">ML/AI</option>
                        <option value="Opensource">Opensource</option>
                        <option value="DSA">DSA</option>
                        <option value="UI/UX">UI/UX</option>
                        <option value="Data Science">Data Science</option>
                        <option value="IoT">IoT</option>
                        <option value="Python Development">Python Development</option>
                        <option value="Blockchain">Blockchain</option>
                        <option value="Basic Systems Administration">Basic Systems Administration</option>
                        <option value="Flutter">Flutter</option>

                    </select>
                </div>
            </div>
            <div className="lower">
                {ment.map((member) => {
                    return (
                        <MentorCard
                            key={member[1]}
                            imageLink={member[0]}
                            name={member[1]}
                            linkedin={member[2]}
                            topmate={member[3]}
                            position={member[4]}
                            role={member[5]}
                            expfilter={expfilter}
                            text={text}
                            expertize={member[6]}
                        />
                    );
                })}
            </div>
        </div>
    );
}
