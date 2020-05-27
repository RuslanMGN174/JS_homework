"use strict";

import "./css/style.css"
import * as $ from "jquery"

$("button").click(function () {
  document.querySelector("h1").innerHTML++;
});