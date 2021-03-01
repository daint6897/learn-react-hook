import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoListIndex from "./TodoListIndex";

import useRandomText from "../Hook/useRandomText";
Index.propTypes = {};
function getRandomText() {
  const TEXT_LIST = ["asdad", "bcs", "jazzz"];
  const randomText =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  return randomText;
}
function Index(props) {
  const [text, setText] = useState(() => {
    const initialText = "aaaaa";
    return initialText;
  });

  function handTextClick() {
    const newTextRandom = getRandomText();
    setText(newTextRandom);
  }

  //custom hook
  // const randomText = useRandomText();
  return (
    <React.Fragment>
      {/* <h3>{randomText}</h3> */}
      <div onClick={handTextClick}>{text}</div>
      <TodoListIndex />
    </React.Fragment>
  );
}

export default Index;
