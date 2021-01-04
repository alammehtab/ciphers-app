import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 style={{ textDecoration: "underline" }}>SUBSITUTION CIPHERS</h1>
      <br />
      <br />
      <h2>Select a cipher that you wanna use</h2>
      <Link to="shiftcipher">
        <button className="btn btn-primary">Shift Cipher</button>
      </Link>
      <Link to="atbashcipher">
        <button className="btn btn-primary">Atbash Cipher</button>
      </Link>
      <Link to="rot13cipher">
        <button className="btn btn-primary">Rot13 Cipher</button>
      </Link>
      <Link to="affinecipher">
        <button className="btn btn-primary">Affine Cipher</button>
      </Link>
    </div>
  );
};

export default Home;
