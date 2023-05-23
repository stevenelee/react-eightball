import React, { useState } from "react";

const ANSWERS = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" }
]

function EightBall({answers = ANSWERS }) {
    const [eightBall, setEightBall] = useState({msg: "Think of a Question.",
                                                color: "black"});

    let ballStyle = {
      display: "flex",
      color: "white",
      backgroundColor: eightBall.color,
      borderRadius: "50%",
      width: "400px",
      height: "400px",
      justifyContent: "center",
      alignItems: "center"
    };


    function handleClick(){
        let answersIndex = Math.floor(Math.random() * answers.length);
        console.log("answersIndex", answersIndex);
        console.log("answers.answersIndex", answers.answersIndex);
        setEightBall(answers[answersIndex]);
        console.log('eightBall.color', eightBall.color);
    }

    return (
      <div style={ballStyle} onClick={ handleClick }>
        <p>{eightBall.msg}</p>
      </div>
    )
  }

  export default EightBall;