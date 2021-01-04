import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../containers/App";
import ShiftCipher from "../containers/ShiftCipher";
import AtbashCipher from "../containers/AtbashCipher";
import Rot13Cipher from "../containers/Rot13Cipher";
import AffineCipher from "../containers/AffineCipher";

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/shiftcipher" component={ShiftCipher} />
      <Route path="/atbashcipher" component={AtbashCipher} />
      <Route path="/rot13cipher" component={Rot13Cipher} />
      <Route path="/affinecipher" component={AffineCipher} />
    </Router>
  );
};

export default AppRouter;
