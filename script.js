const frames = [
  { img: "frame-1-pastry.jpg", text: "You were sad.<br>I didn’t know what else might help.<br><br>So I brought one pastry.<br>And only one spoon.", sorry:false },
  { img: "frame-2-nutties.jpg", text: "Somewhere along the way,<br>this became our energy.<br><br>Between walks.<br>Between days.", sorry:false },
  { img: "frame-3-pastry.jpg", text: "This one wasn’t impulse.<br>It was intention.<br><br>I just wanted the day<br>to feel lighter for you.", sorry:false },
  { img: "frame-4-hot-chocolate.jpg", text: "This was the first sorry.<br><br>Warm.<br>Honest.<br><br>Not the last.", sorry:true },
  { img: "frame-5-toblerone.jpg", text: "Shimla was good.<br><br>The chocolate was there.<br><br>Until someone stole it.", sorry:false },
  { img: "frame-6-brownie.jpg", text: "This wasn’t a gift.<br>It was a question.<br><br>Were you happy with this?", sorry:false },
  { img: "frame-7-crackle.jpg", text: "This became our default.<br><br>For every time<br>you were going away from me.", sorry:false },
  { img: "frame-8-twix.jpg", text: "And maybe now this.<br><br>Our Morni helper.<br><br>From now on?", sorry:false }
];

let index = 0;
const imgEl = document.getElementById("image");
const textEl = document.getElementById("text");
const foxEl = document.getElementById("fox");
const sorryEl = document.getElementById("sorryIcon");

function showFrame(i) {
  imgEl.classList.remove("show");
  textEl.classList.remove("show");
  sorryEl.style.opacity = 0;

  setTimeout(() => {
    imgEl.src = frames[i].img;
    textEl.innerHTML = frames[i].text;

    foxEl.style.left = `${(i / (frames.length - 1)) * 80}%`;

    if (frames[i].sorry) {
      setTimeout(() => sorryEl.style.opacity = 1, 700);
    }

    imgEl.onload = () => {
      imgEl.classList.add("show");
      setTimeout(() => textEl.classList.add("show"), 400);
    };
  }, 400);
}

function nextFrame() {
  if (index < frames.length - 1) {
    index++;
    showFrame(index);
  }
}

showFrame(index);
