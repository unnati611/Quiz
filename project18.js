//1-a
//2-b   3=c 4=a  5 =c 6=a 7=a 8 =b  9= a 10=a
let score = 0;
function checkans1(ev) {
  //debugger;
  let a = document.querySelector('input[name="question1"]:checked');
  console.log(a);
  if (a === null) {
    document.getElementById("ans2").innerHTML = "select your ans";
  } else {
    let a1 = a.value;
    console.log(a1);
    if (a1 === "A") {
      document.getElementById("ans1").innerHTML = "your ans is true";
      score++;
    } else {
      document.getElementById("ans1").innerHTML = "your ans is false";
    }
    console.log(ev);
    ev.setAttribute("disabled", "true");
  }
}
function checkans2(ev) {
  let a = document.querySelector('input[name="question2"]:checked');
  if (a === null) {
    document.getElementById("ans2").innerHTML = "select your ans";
  } else {
    let a1 = a.value;
    console.log(a1);
    if (a1 === "b") {
      document.getElementById("ans2").innerHTML = "your ans is true";
      score++;
    } else {
      document.getElementById("ans2").innerHTML = "your ans is false";
    }
    ev.setAttribute("disabled", "true");
  }
}

function checkans3(ev) {
  //debugger;
  let a = document.querySelector('input[name="question3"]:checked');
  if (a === null) {
    document.getElementById("ans2").innerHTML = "select your ans";
  } else {
    let a1 = a.value;
    console.log(a1);
    if (a1 === "c") {
      document.getElementById("ans3").innerHTML = "your ans is true";
      score++;
    } else {
      document.getElementById("ans3").innerHTML = "your ans is false";
    }
    ev.setAttribute("disabled", "true");
  }
}
function checkans4(ev) {
  //debugger;
  let a = document.querySelector('input[name="question4"]:checked');
  if (a === null) {
    document.getElementById("ans2").innerHTML = "select your ans";
  } else {
    let a1 = a.value;
    console.log(a1);
    if (a1 === "A") {
      document.getElementById("ans4").innerHTML = "your ans is true";
      score++;
    } else {
      document.getElementById("ans4").innerHTML = "your ans is false";
    }
    ev.setAttribute("disabled", "true");
  }
}
function checkans5(ev) {
  //debugger;
  let a = document.querySelector('input[name="question5"]:checked');
  if (a === null) {
    document.getElementById("ans2").innerHTML = "select your ans";
  } else {
    let a1 = a.value;
    console.log(a1);
    if (a1 === "c") {
      document.getElementById("ans5").innerHTML = "your ans is true";
      score++;
    } else {
      document.getElementById("ans5").innerHTML = "your ans is false";
    }
    ev.setAttribute("disabled", "true");
  }
}
function checkans6(ev) {
  //debugger;
  let a = document.querySelector('input[name="question6"]:checked');
  if (a === null) {
    document.getElementById("ans2").innerHTML = "select your ans";
  } else {
    let a1 = a.value;
    console.log(a1);
    if (a1 === "A") {
      document.getElementById("ans6").innerHTML = "your ans is true";
      score++;
    } else {
      document.getElementById("ans6").innerHTML = "your ans is false";
    }
    ev.setAttribute("disabled", "true");
  }
}
function checkans7(ev) {
  //debugger;
  let a = document.querySelector('input[name="question7"]:checked');
  if (a === null) {
    document.getElementById("ans2").innerHTML = "select your ans";
  } else {
    let a1 = a.value;
    console.log(a1);
    if (a1 === "A") {
      document.getElementById("ans7").innerHTML = "your ans is true";
      score++;
    } else {
      document.getElementById("ans7").innerHTML = "your ans is false";
    }
    ev.setAttribute("disabled", "true");
  }
}
function checkans8(ev) {
  //debugger;
  let a = document.querySelector('input[name="question8"]:checked');
  if (a === null) {
    document.getElementById("ans2").innerHTML = "select your ans";
  } else {
    let a1 = a.value;
    console.log(a1);
    if (a1 === "b") {
      document.getElementById("ans8").innerHTML = "your ans is true";
      score++;
    } else {
      document.getElementById("ans8").innerHTML = "your ans is false";
    }
    ev.setAttribute("disabled", "true");
  }
}
function checkans9(ev) {
  //debugger;
  let a = document.querySelector('input[name="question9"]:checked');
  if (a === null) {
    document.getElementById("ans2").innerHTML = "select your ans";
  } else {
    let a1 = a.value;
    console.log(a1);
    if (a1 === "A") {
      document.getElementById("ans9").innerHTML = "your ans is true";
      score++;
    } else {
      document.getElementById("ans9").innerHTML = "your ans is false";
    }
    ev.setAttribute("disabled", "true");
  }
}
function checkans10(ev) {
  //debugger;
  let a = document.querySelector('input[name="question10"]:checked');
  if (a === null) {
    document.getElementById("ans2").innerHTML = "select your ans";
  } else {
    let a1 = a.value;
    console.log(a1);
    if (a1 === "A") {
      document.getElementById("ans10").innerHTML = "your ans is true";
      score++;
    } else {
      document.getElementById("ans10").innerHTML = "your ans is false";
    }
    ev.setAttribute("disabled", "true");
  }
}
function submit() {
  document.getElementById("score").innerHTML = "your score is " + score;
}
