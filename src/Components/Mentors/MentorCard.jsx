import React from "react";
import "./style.css";

export default function MentorCard(props) {
    const name = props.name.toLowerCase();
    const role = props.role.toLowerCase();
    const isValid = () => {
        if (
            (name.includes(props.text) || role.includes(props.text)) &&
            (props.expertize === props.expfilter || props.expfilter === "All")
        )
            return true;
        return false;
    };

    if (isValid()) {
        return (
            <div
                style={{
                    position: "relative",
                    width: "200px",
                    height: "250px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    margin: "10px",
                }}
            >
                <div className="mentordetails">
                    <div className="nameandpos">
                        <div>{props.name}</div>
                        <div>{props.expertize}</div>
                    </div>
                    <a
                        className="linkedinmentor"
                        href={props.linkedin}
                        target="_blank"
                    >
                        <i
                            className="fab fa-linkedin"
                            style={{ color: "#0077b5" }}
                        ></i>
                    </a>
                </div>
                <a
                    className="mentorCardCont"
                    href={props.topmate}
                    target="_blank"
                >
                    <img src={props.imageLink} alt="" className="mentorimage" />
                    <div className="mentorCover"></div>
                </a>
            </div>
        );
    } else return <></>;
}
