import React from "react";
import TextArea from "../components/TextArea";
import { Link } from "react-router-dom";
import ActionButton from "../components/ActionButton";
import HomeButton from "../components/HomeButton";

const CipherTwo = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome To Atbash Cipher</h1>
      <TextArea />
      <br />
      <ActionButton />
      <Link to="/">
        <HomeButton />
      </Link>
    </div>
  );
};

export default CipherTwo;
