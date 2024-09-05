let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissior = document.querySelector("#scissior");
let msg = document.querySelector(".Msg");
let you_s = document.querySelector("#you-s");
let computer_s = document.querySelector("#computer-s");

let you_value;
let comp_value;
let winner;
let y = 0;
let c = 0;

const showMsg = (winner) => {
    if (winner === "you") {
        msg.innerText = "winner is you";
        y++;
        you_s.innerText = y; // Update the score for "you"
    }
    else if (winner === "computer") {
        msg.innerText = "winner is computer";
        c++;
        computer_s.innerText = c; // Update the score for "computer"
    }
    else if (winner === "draw") {
        msg.innerText = "match is draw";
    }
}

const check_winner = () => {
    if (you_value == comp_value) {
        winner = "draw";
    }
    else if (you_value === "r") {
        (comp_value === "s") ? winner = "you" : winner = "computer";
    }   ///  use of condisnol opreator

    else if (you_value === "p") {
        (comp_value === "r") ? winner = "you" : winner = "computer";
    }
    else if (you_value === "s") {
        (comp_value === "p") ? winner = "you" : winner = "computer";
    }

    showMsg(winner);
}

const Comp_value = () => {
    let c_v = Math.floor(Math.random() * 3);
    if (c_v == 0) {
        comp_value = "r";
    }
    else if (c_v == 1) {
        comp_value = "p";
    }
    else if (c_v == 2) {
        comp_value = "s";
    }
    check_winner();
}
const r = () => {
    you_value = "r";
    Comp_value();
}
const p = () => {
    you_value = "p";
    Comp_value();
}
const s = () => {
    you_value = "s";
    Comp_value();
}

rock.addEventListener("click", r);
paper.addEventListener("click", p);
scissior.addEventListener("click", s);