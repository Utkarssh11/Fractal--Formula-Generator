//Copy to clipboard does not work in the Glitch.com editor

var btn2 = document.getElementById("generate2");
var btn3 = document.getElementById("generate3");
var btn4 = document.getElementById("generate4");
var btn5 = document.getElementById("generate5");
btn2.addEventListener("click", render2);
btn3.addEventListener("click", render3);
btn4.addEventListener("click", render4);
btn5.addEventListener("click", render5);
document.getElementById("hide").style.display = "none";
document.getElementById("about").style.display = "none";

var java = "";
var cpp = "";
var glsl = "";

function copyJava() {navigator.clipboard.writeText(java);}
function copyCPP() {navigator.clipboard.writeText(cpp);}
function copyGLSL() {navigator.clipboard.writeText(glsl);}

function aboutToggle() {
  var x = document.getElementById("about");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function render2() {
  document.getElementById("hide").style.display = "block";
  var id = document.getElementById("enter").value;
  if (isNaN(id) || document.getElementById("enter").value === '') {
    id = 0;
    document.getElementById("enter").value = '';
  } else {
    id = id % 256;
    if (id < 0) {
      id += 256;
    }
    document.getElementById("enter").value = id;
  }

  
  java = "temp = "
  cpp = "temp = "
  glsl = "z = vec2("
  if (id % 2 == 0) {
    java = java + "";
    cpp = cpp + "";
    glsl = glsl + "";
  } else {
    java = java + "-1 * ";
    cpp = cpp + "-1 * ";
    glsl = glsl + "-1 * ";
  }
  if (Math.floor(id / 128) % 2 == 0) {
    java = java + "((";
    cpp = cpp + "((";
    glsl = glsl + "((";
  } else {
    java = java + "Math.abs((";
    cpp = cpp + "abs((";
    glsl = glsl + "abs((";
  }
  if (Math.floor(id / 8) % 2 == 0) {
    java = java + "zr * zr) ";
    cpp = cpp + "zr * zr) ";
    glsl = glsl + "z.x * z.x) ";
  } else {
    java = java + "Math.abs(zr) * zr) ";
    cpp = cpp + "abs(zr) * zr) ";
    glsl = glsl + "abs(z.x) * z.x) ";
  }
  if (Math.floor(id / 2) % 2 == 0) {
    java = java + "- (";
    cpp = cpp + "- (";
    glsl = glsl + "- (";
  } else {
    java = java + "+ (";
    cpp = cpp + "+ (";
    glsl = glsl + "+ (";
  }
  if (Math.floor(id / 16) % 2 == 0) {
    java = java + "zi * zi)) + cr;\nzi = (";
    cpp = cpp + "zi * zi)) + cr;\nzi = (";
    glsl = glsl + "z.y * z.y)), (";
  } else {
    java = java + "Math.abs(zi) * zi)) + cr;\nzi = (";
    cpp = cpp + "abs(zi) * zi)) + cr;\nzi = (";
    glsl = glsl + "abs(z.y) * z.y)), ("
  }
  if (Math.floor(id / 32) % 2 == 0) {
    java = java + "zr * ";
    cpp = cpp + "zr * ";
    glsl = glsl + "z.x * ";
  } else {
    java = java + "Math.abs(zr) * ";
    cpp = cpp + "abs(zr) * ";
    glsl = glsl + "abs(z.x) * ";
  }
  if (Math.floor(id / 64) % 2 == 0) {
    java = java + "zi * ";
    cpp = cpp + "zi * ";
    glsl = glsl + "z.y * ";
  } else {
    java = java + "Math.abs(zi) * ";
    cpp = cpp + "abs(zi) * ";
    glsl = glsl + "abs(z.y) * ";
  }
  if (Math.floor(id / 4) % 2 == 0) {
    java = java + "2) + ci;\nzr = temp;";
    cpp = cpp + "2) + ci;\nzr = temp;";
    glsl = glsl + "2) + c;";
  } else {
    java = java + "-2) + ci;\nzr = temp;";
    cpp = cpp + "-2) + ci;\nzr = temp;";
    glsl = glsl + "-2) + c;";
  }
  document.querySelector("#java span").textContent = java;
  document.querySelector("#cpp span").textContent = cpp;
  document.querySelector("#glsl span").textContent = glsl;
  //zr = s1 * Math.abs((zr1 * zr) - (s2 * zi1 * zi));
  //zi = zr2 * zi2 * 2 * s3;
  render(id,2);
}
render2();

function render3() {
  document.getElementById("hide").style.display = "block";
  var id = document.getElementById("enter").value;
  if (isNaN(id) || document.getElementById("enter").value === '') {
    id = 0;
    document.getElementById("enter").value = '';
  } else {
    id = id % 16384;
    if (id < 0) {
      id += 16384;
    }
    document.getElementById("enter").value = id;
  }
  
  java = "temp = "
  cpp = "temp = "
  glsl = "z = vec2("
  if (Math.floor(id / 16) % 2 == 0) {
    java = java + "";
    cpp = cpp + "";
    glsl = glsl + "";
  } else {
    java = java + "-1 * ";
    cpp = cpp + "-1 * ";
    glsl = glsl + "-1 * ";
  }
  if (Math.floor(id / 4096) % 2 == 0) {
    java = java + "((";
    cpp = cpp + "((";
    glsl = glsl + "((";
  } else {
    java = java + "Math.abs((";
    cpp = cpp + "abs((";
    glsl = glsl + "abs((";
  }
  if (id % 2 == 0) {
    java = java + "";
    cpp = cpp + "";
    glsl = glsl + "";
  } else {
    glsl = glsl + "-1 * ";
    java = java + "-1 * ";
    cpp = cpp + "-1 * ";
  }
  if (Math.floor(id / 64) % 2 == 0) {
    java = java + "zr * zr * zr) ";
    cpp = cpp + "zr * zr * zr) ";
    glsl = glsl + "z.x * z.x * z.x) ";
  } else {
    java = java + "Math.abs(zr) * zr * zr) ";
    cpp = cpp + "abs(zr) * zr * zr) ";
    glsl = glsl + "abs(z.x) * z.x * z.x) ";
  }
  if (Math.floor(id / 2) % 2 == 0) {
    java = java + "- (3 * ";
    cpp = cpp + "- (3 * ";
    glsl = glsl + "- (3 * ";
  } else {
    java = java + "+ (3 * ";
    cpp = cpp + "+ (3 * ";
    glsl = glsl + "+ (3 * ";
  }
  if (Math.floor(id / 256) % 2 == 0) {
    java = java + "zr * ";
    cpp = cpp + "zr * ";
    glsl = glsl + "z.x * ";
  } else {
    java = java + "Math.abs(zr) * ";
    cpp = cpp + "abs(zr) * ";
    glsl = glsl + "abs(z.x) * ";
  }
  if (Math.floor(id / 128) % 2 == 0) {
    java = java + "zi * zi)) + cr;\nzi = ";
    cpp = cpp + "zi * zi)) + cr;\nzi = ";
    glsl = glsl + "z.y * z.y)), ";
  } else {
    java = java + "Math.abs(zi) * zi)) + cr;\nzi = ";
    cpp = cpp + "abs(zi) * zi)) + cr;\nzi = ";
    glsl = glsl + "abs(z.y) * z.y)), ";
  }
  if (Math.floor(id / 32) % 2 == 0) {
    java = java + "";
    cpp = cpp + "";
    glsl = glsl + "";
  } else {
    java = java + "-1 * ";
    cpp = cpp + "-1 * ";
    glsl = glsl + "-1 * ";
  }
  if (Math.floor(id / 8192) % 2 == 0) {
    java = java + "((";
    cpp = cpp + "((";
    glsl = glsl + "((";
  } else {
    java = java + "Math.abs((";
    cpp = cpp + "abs((";
    glsl = glsl + "abs((";
  }
  if (Math.floor(id / 4) % 2 == 0) {
    java = java + "3 * ";
    cpp = cpp + "3 * ";
    glsl = glsl + "3 * ";
  } else {
    java = java + "-3 * ";
    cpp = cpp + "-3 * ";
    glsl = glsl + "-3 * ";
  }
  if (Math.floor(id / 1024) % 2 == 0) {
    java = java + "zr * zr * ";
    cpp = cpp + "zr * zr * ";
    glsl = glsl + "z.x * z.x * ";
  } else {
    java = java + "Math.abs(zr) * zr * ";
    cpp = cpp + "abs(zr) * zr * ";
    glsl = glsl + "abs(z.x) * z.x * ";
  }
  if (Math.floor(id / 512) % 2 == 0) {
    java = java + "zi) ";
    cpp = cpp + "zi) ";
    glsl = glsl + "z.y) ";
  } else {
    java = java + "Math.abs(zi)) ";
    cpp = cpp + "abs(zi)) ";
    glsl = glsl + "abs(z.y)) ";
  }
  if (Math.floor(id / 8) % 2 == 0) {
    java = java + "- (";
    cpp = cpp + "- (";
    glsl = glsl + "- (";
  } else {
    java = java + "+ (";
    cpp = cpp + "+ (";
    glsl = glsl + "+ (";
  }
  if (Math.floor(id / 2048) % 2 == 0) {
    java = java + "zi * zi * zi)) + ci;\nzr = temp;";
    cpp = cpp + "zi * zi * zi)) + ci;\nzr = temp;";
    glsl = glsl + "z.y * z.y * z.y))) + c;";
  } else {
    java = java + "Math.abs(zi) * zi * zi)) + ci;\nzr = temp;";
    cpp = cpp + "abs(zi) * zi * zi)) + ci;\nzr = temp;";
    glsl = glsl + "abs(z.y) * z.y * z.y))) + c;";
  }
  //"z = vec2(s5 * abs(s1 * (zr1 * z.x * z.x) - (s2 * (3 * zr2 * zi1 * z.y))), s6 * abs((s3 * (3 * zr3 * z.x * zi2)) - (s4 * (zi3 * z.y * z.y)))) + c;"
  document.querySelector("#java span").textContent = java;
  document.querySelector("#cpp span").textContent = cpp;
  document.querySelector("#glsl span").textContent = glsl;
  render(id,3);
  //document.querySelector("#binary span").textContent = (id >>> 0).toString(2);
}

function render4() {
  document.getElementById("hide").style.display = "block";
  var id = document.getElementById("enter").value;
  if (isNaN(id) || document.getElementById("enter").value === '') {
    id = 0;
    document.getElementById("enter").value = '';
  } else {
    id = id % 131072;
    if (id < 0) {
      id += 131072;
    }
    document.getElementById("enter").value = id;
  }

  var formula = [];
  for (let q = 0; q < 17; q++) {
    if ((id >> q) % 2 == 1) {
      formula[q] = true;
    } else {
      formula[q] = false;
    }
  }
  
  java = "temp = "
  cpp = "temp = "
  glsl = "z = vec2("
  if (formula[5] == false) { //s6
    java = java + "";
    cpp = cpp + "";
    glsl = glsl + "";
  } else {
    java = java + "-1 * ";
    cpp = cpp + "-1 * ";
    glsl = glsl + "-1 * ";
  }
  if (formula[15] == false) { //abs r
    java = java + "(";
    cpp = cpp + "(";
    glsl = glsl + "(";
  } else {
    java = java + "Math.abs(";
    cpp = cpp + "abs(";
    glsl = glsl + "abs(";
  }
  if (formula[0] == false) { //s1
    java = java + "(";
    cpp = cpp + "(";
    glsl = glsl + "(";
  } else {
    java = java + "-1 * (";
    cpp = cpp + "-1 * (";
    glsl = glsl + "-1 * (";
  }
  if (formula[7] == false) { //zr1
    java = java + "zr * zr * zr * zr)";
    cpp = cpp + "zr * zr * zr * zr)";
    glsl = glsl + "z.x * z.x * z.x * z.x)";
  } else {
    java = java + "Math.abs(zr) * zr * zr * zr)";
    cpp = cpp + "abs(zr) * zr * zr * zr)";
    glsl = glsl + "abs(z.x) * z.x * z.x * z.x)";
  }
  if (formula[1] == false) { //s2
    java = java + " - 6 * (";
    cpp = cpp + " - 6 * (";
    glsl = glsl + " - 6 * (";
  } else {
    java = java + " + 6 * (";
    cpp = cpp + " + 6 * (";
    glsl = glsl + " + 6 * (";
  }
  if (formula[9] == false) { //zr2
    java = java + "zr * zr * ";
    cpp = cpp + "zr * zr * ";
    glsl = glsl + "z.x * z.x * ";
  } else {
    java = java + "Math.abs(zr) * zr * ";
    cpp = cpp + "abs(zr) * zr * ";
    glsl = glsl + "abs(z.x) * z.x * ";
  }
  if (formula[8] == false) { //zi1
    java = java + "zi * zi)";
    cpp = cpp + "zi * zi)";
    glsl = glsl + "z.y * z.y)";
  } else {
    java = java + "Math.abs(zi) * zi)";
    cpp = cpp + "abs(zi) * zi)";
    glsl = glsl + "abs(z.y) * z.y)";
  }
  if (formula[2] == false) { //s3
    java = java + " + (";
    cpp = cpp + " + (";
    glsl = glsl + " + (";
  } else {
    java = java + " - (";
    cpp = cpp + " - (";
    glsl = glsl + " - (";
  }
  if (formula[10] == false) { //zi2
    java = java + "zi * zi * zi * zi)) + cr;\nzi = ";
    cpp = cpp + "zi * zi * zi * zi)) + cr;\nzi = ";
    glsl = glsl + "z.y * z.y * z.y * z.y)), ";
  } else {
    java = java + "Math.abs(zi) * zi * zi * zi)) + cr;\nzi = ";
    cpp = cpp + "abs(zi) * zi * zi * zi)) + cr;\nzi = ";
    glsl = glsl + "abs(z.y) * z.y * z.y * z.y)), ";
  }
  if (formula[6] == false) { //s7
    java = java + "";
    cpp = cpp + "";
    glsl = glsl + "";
  } else {
    java = java + "-1 * ";
    cpp = cpp + "-1 * ";
    glsl = glsl + "-1 * ";
  }
  if (formula[16] == false) { //abs i
    java = java + "(";
    cpp = cpp + "(";
    glsl = glsl + "(";
  } else {
    java = java + "Math.abs(";
    cpp = cpp + "abs(";
    glsl = glsl + "abs(";
  }
  if (formula[3] == false) { //s4
    java = java + "4 * (";
    cpp = cpp + "4 * (";
    glsl = glsl + "4 * (";
  } else {
    java = java + "-4 * (";
    cpp = cpp + "-4 * (";
    glsl = glsl + "-4 * (";
  }
  if (formula[11] == false) { //zr3
    java = java + "zr * zr * zr * ";
    cpp = cpp + "zr * zr * zr * ";
    glsl = glsl + "z.x * z.x * z.x * ";
  } else {
    java = java + "Math.abs(zr) * zr * zr * ";
    cpp = cpp + "abs(zr) * zr * zr * ";
    glsl = glsl + "abs(z.x) * z.x * z.x * ";
  }
  if (formula[12] == false) { //zi3
    java = java + "zi)";
    cpp = cpp + "zi)";
    glsl = glsl + "z.y)";
  } else {
    java = java + "Math.abs(zi))";
    cpp = cpp + "abs(zi))";
    glsl = glsl + "abs(z.y))";
  }
  if (formula[4] == false) { //s5
    java = java + " - 4 * (";
    cpp = cpp + " - 4 * (";
    glsl = glsl + " - 4 * (";
  } else {
    java = java + " + 4 * (";
    cpp = cpp + " + 4 * (";
    glsl = glsl + " + 4 * (";
  }
  if (formula[13] == false) { //zr4
    java = java + "zr * zi * zi * ";
    cpp = cpp + "zr * zi * zi * ";
    glsl = glsl + "z.x * z.y * z.y * ";
  } else {
    java = java + "Math.abs(zr) * zi * zi * ";
    cpp = cpp + "abs(zr) * zi * zi * ";
    glsl = glsl + "abs(z.x) * z.y * z.y * ";
  }
  if (formula[14] == false) { //zi4
    java = java + "zi)) + ci;\nzr = temp;";
    cpp = cpp + "zi)) + ci;\nzr = temp;";
    glsl = glsl + "z.y))) + c;";
  } else {
    java = java + "Math.abs(zi))) + ci;\nzr = temp;";
    cpp = cpp + "abs(zi))) + ci;\nzr = temp;";
    glsl = glsl + "abs(z.y)))) + c;";
  }
  
  // temp = s6 * Math.abs(s1 * (zr1 * zr * zr * zr) - s2 * (zr2 * zr * zi1 * zi) + s3 * (zi2 * zi * zi * zi)) + cr;
  // zi = s7 * Math.abs(s4 * (zr3 * zr * zr * zi3) - s5 * (zr4 * zi4 * zi * zi)) + ci;
  // zr = temp;
  document.querySelector("#java span").textContent = java;
  document.querySelector("#cpp span").textContent = cpp;
  document.querySelector("#glsl span").textContent = glsl;
  render(id,4);
}

function render5() {
   document.getElementById("hide").style.display = "block";
  var id = document.getElementById("enter").value;
  if (isNaN(id) || document.getElementById("enter").value === '') {
    id = 0;
    document.getElementById("enter").value = '';
  } else {
    id = id % 1048576;
    if (id < 0) {
      id += 1048576;
    }
    document.getElementById("enter").value = id;
  }

  var signChange = [];
  var absChange = [];
  var outerChange = [];
  let q = 0;
  for (q = 0; q < 6; q++) { //0-5
    if ((id >> q) % 2 == 1) {
      signChange[q] = true;
    } else {
      signChange[q] = false;
    }
  }
  for (q = 6; q < 8; q++) { //6-7
    if ((id >> q) % 2 == 1) {
      outerChange[q - 6] = true;
    } else {
      outerChange[q - 6] = false;
    }
  }
  for (q = 8; q < 18; q++) { //8-17
    if ((id >> q) % 2 == 1) {
      absChange[q - 8] = true;
    } else {
      absChange[q - 8] = false;
    }
  }
  for (q = 18; q < 20; q++) { //18-19
    if ((id >> q) % 2 == 1) {
      outerChange[q - 16] = true;
    } else {
      outerChange[q - 16] = false;
    }
  }
  
  java = "temp = "
  cpp = "temp = "
  glsl = "z = vec2("
  if (outerChange[0] == false) { //s7
    java = java + "";
    cpp = cpp + "";
    glsl = glsl + "";
  } else {
    java = java + "-1 * ";
    cpp = cpp + "-1 * ";
    glsl = glsl + "-1 * ";
  }
  if (outerChange[2] == false) { //abs r
    java = java + "(";
    cpp = cpp + "(";
    glsl = glsl + "(";
  } else {
    java = java + "Math.abs(";
    cpp = cpp + "abs(";
    glsl = glsl + "abs(";
  }
  if (signChange[0] == false) { //s1
    java = java + "(";
    cpp = cpp + "(";
    glsl = glsl + "(";
  } else {
    java = java + "-1 * (";
    cpp = cpp + "-1 * (";
    glsl = glsl + "-1 * (";
  }
  if (absChange[0] == false) { //zr1
    java = java + "zr * zr * zr * zr * zr)";
    cpp = cpp + "zr * zr * zr * zr * zr)";
    glsl = glsl + "z.x * z.x * z.x * z.x * z.x)";
  } else {
    java = java + "Math.abs(zr) * zr * zr * zr * zr)";
    cpp = cpp + "abs(zr) * zr * zr * zr * zr)";
    glsl = glsl + "abs(z.x) * z.x * z.x * z.x * z.x)";
  }
  if (signChange[1] == false) { //s2
    java = java + " - 10 * (";
    cpp = cpp + " - 10 * (";
    glsl = glsl + " - 10 * (";
  } else {
    java = java + " + 10 * (";
    cpp = cpp + " + 10 * (";
    glsl = glsl + " + 10 * (";
  }
  if (absChange[2] == false) { //zr2
    java = java + "zr * zr * zr * ";
    cpp = cpp + "zr * zr * zr * ";
    glsl = glsl + "z.x * z.x * z.x * ";
  } else {
    java = java + "Math.abs(zr) * zr * zr * ";
    cpp = cpp + "abs(zr) * zr * zr * ";
    glsl = glsl + "abs(z.x) * z.x * z.x * ";
  }
  if (absChange[1] == false) { //zi1
    java = java + "zi * zi)";
    cpp = cpp + "zi * zi)";
    glsl = glsl + "z.y * z.y)";
  } else {
    java = java + "Math.abs(zi) * zi)";
    cpp = cpp + "abs(zi) * zi)";
    glsl = glsl + "abs(z.y) * z.y)";
  }
  if (signChange[2] == false) { //s3
    java = java + " + 5 * (";
    cpp = cpp + " + 5 * (";
    glsl = glsl + " + 5 * (";
  } else {
    java = java + " - 5 * (";
    cpp = cpp + " - 5 * (";
    glsl = glsl + " - 5 * (";
  }
  if (absChange[4] == false) { //s3
    java = java + "zr * ";
    cpp = cpp + "zr * ";
    glsl = glsl + "z.x * ";
  } else {
    java = java + "Math.abs(zr) * ";
    cpp = cpp + "abs(zr) * ";
    glsl = glsl + "abs(z.x) * ";
  }
  if (absChange[3] == false) { //zi2
    java = java + "zi * zi * zi * zi)) + cr;\nzi = ";
    cpp = cpp + "zi * zi * zi * zi)) + cr;\nzi = ";
    glsl = glsl + "z.y * z.y * z.y * z.y)), ";
  } else {
    java = java + "Math.abs(zi) * zi * zi * zi)) + cr;\nzi = ";
    cpp = cpp + "abs(zi) * zi * zi * zi)) + cr;\nzi = ";
    glsl = glsl + "abs(z.y) * z.y * z.y * z.y)), ";
  }
  if (outerChange[1] == false) { //s8
    java = java + "";
    cpp = cpp + "";
    glsl = glsl + "";
  } else {
    java = java + "-1 * ";
    cpp = cpp + "-1 * ";
    glsl = glsl + "-1 * ";
  }
  if (outerChange[3] == false) { //abs i
    java = java + "(";
    cpp = cpp + "(";
    glsl = glsl + "(";
  } else {
    java = java + "Math.abs(";
    cpp = cpp + "abs(";
    glsl = glsl + "abs(";
  }
  if (signChange[3] == false) { //s4
    java = java + "5 * (";
    cpp = cpp + "5 * (";
    glsl = glsl + "5 * (";
  } else {
    java = java + "-5 * (";
    cpp = cpp + "-5 * (";
    glsl = glsl + "-5 * (";
  }
  if (absChange[6] == false) { //zr4
    java = java + "zr * zr * zr * zr * ";
    cpp = cpp + "zr * zr * zr * zr * ";
    glsl = glsl + "z.x * z.x * z.x * z.x * ";
  } else {
    java = java + "Math.abs(zr) * zr * zr * zr * ";
    cpp = cpp + "abs(zr) * zr * zr * zr * ";
    glsl = glsl + "abs(z.x) * z.x * z.x * z.x * ";
  }
  if (absChange[5] == false) { //zi3
    java = java + "zi)";
    cpp = cpp + "zi)";
    glsl = glsl + "z.y)";
  } else {
    java = java + "Math.abs(zi))";
    cpp = cpp + "abs(zi))";
    glsl = glsl + "abs(z.y))";
  }
  if (signChange[4] == false) { //s5
    java = java + " - 10 * (";
    cpp = cpp + " - 10 * (";
    glsl = glsl + " - 10 * (";
  } else {
    java = java + " + 10 * (";
    cpp = cpp + " + 10 * (";
    glsl = glsl + " + 10 * (";
  }
  if (absChange[8] == false) { //zr5
    java = java + "zr * zr * ";
    cpp = cpp + "zr * zr * ";
    glsl = glsl + "z.x * z.x * ";
  } else {
    java = java + "Math.abs(zr) * zr * ";
    cpp = cpp + "abs(zr) * zr * ";
    glsl = glsl + "abs(z.x) * z.x * ";
  }
  if (absChange[7] == false) { //zi4
    java = java + "zi * zi * zi)";
    cpp = cpp + "zi * zi * zi * zi)";
    glsl = glsl + "z.y * z.y * z.y * z.y)";
  } else {
    java = java + "Math.abs(zi) * zi * zi)";
    cpp = cpp + "abs(zi) * zi * zi)";
    glsl = glsl + "abs(z.y) * z.y * z.y)";
  }
  if (signChange[5] == false) { //s6
    java = java + " + (";
    cpp = cpp + " + (";
    glsl = glsl + " + (";
  } else {
    java = java + " - (";
    cpp = cpp + " - (";
    glsl = glsl + " - (";
  }
  if (absChange[9] == false) { //zi5
    java = java + "zi * zi * zi * zi * zi)) + ci;\nzr = temp;";
    cpp = cpp + "zi * zi * zi * zi * zi)) + ci;\nzr = temp;";
    glsl = glsl + "z.y * z.y * z.y * z.y * z.y))) + c;";
  } else {
    java = java + "Math.abs(zi) * zi * zi * zi * zi)) + ci;\nzr = temp;";
    cpp = cpp + "abs(zi) * zi * zi * zi * zi)) + ci;\nzr = temp;";
    glsl = glsl + "abs(z.y) * z.y * z.y * z.y * z.y))) + c;";
  }
  
  // temp = s6 * Math.abs(s1 * (zr1 * zr * zr * zr) - s2 * (zr2 * zr * zi1 * zi) + s3 * (zi2 * zi * zi * zi)) + cr;
  // zi = s7 * Math.abs(s4 * (zr3 * zr * zr * zi3) - s5 * (zr4 * zi4 * zi * zi)) + ci;
  // zr = temp;
  document.querySelector("#java span").textContent = java;
  document.querySelector("#cpp span").textContent = cpp;
  document.querySelector("#glsl span").textContent = glsl;
  render(id,5);
}