import React from "react";
import './activity.css';

const Activity = (props)=>{
    if(props.event === "Buy"){
        return(
            <div className="buyMain">
                <p className="buyEvent">{props.event}</p>
                <p className="buyPrice">{props.price}</p>
                <p className="buyFrom">{props.from}</p>
                <p className="buyTo">{props.to}</p>
                <p className="buyDate">{props.date}</p>
                <p className="buyTime">{props.time}</p>
            </div>
        )
    }
    else if(props.event === "Minted"){
        return(
            <div className="mintMain">
                <p className="mintEvent">{props.event}</p>
                <p className="mintFrom">{props.from}</p>
                <p className="mintDate">{props.date}</p>
                <p className="mintTime">{props.time}</p>
            </div>
        )
    }
    else if(props.event === "Transfer"){
        return(
            <div className="transMain">
                <p className="transEvent">{props.event}</p>
                <p className="transFrom">{props.from}</p>
                <p className="transTo">{props.to}</p>
                <p className="transDate">{props.date}</p>
                <p className="transTime">{props.time}</p>
            </div>
        )
    }

}

export default Activity