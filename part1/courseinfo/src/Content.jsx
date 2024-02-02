import React from "react";
import parse from "html-react-parser";

function Content(props) {
  return <>{parse(generateContent(props.exercises))}</>;
}

function generateContent(exercises) {
  let content = "";

  exercises.forEach((exercise) => {
    console.log(exercise.name);
    console.log(exercise.exercises);

    content += `<p>${exercise.name} ${exercise.exercises}</p>`;
    console.log("content: ", content);
  });

  return content;
}

export default Content;
