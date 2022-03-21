import React from "react";
import "./Challenge.css"

export default function ChallengeCard({data}) {
    return (
        <div className="challengeCard">
            <div className="companyChallHeading">{data.heading}</div>
            <div className="challengeDesc">
                {data.desc.map((elem)=><div key={elem}>{elem}</div>)}
                {
                    data.submission?<div style={{marginTop:"20px", fontWeight:"bolder"}}>Submission : <a href={data.submission}>Click Here</a></div>:<></>
                }
            </div>
            <div className="fromOrg">From - {data.org}</div>
        </div>
    );
}
