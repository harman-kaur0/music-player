document.addEventListener("DOMContentLoaded", function () {
  const weeknd = document.getElementById("The-Weeknd");
  const khalid = document.getElementById("Khalid");
  const bruno = document.getElementById("Bruno-Mars");
  const sam = document.getElementById("sam-smith");
  const rihanna = document.getElementById("rihanna");
  const song = document.getElementById("song");
  const ctx = new AudioContext();
  let audio;

  fetch("http://localhost:3000/Artists")
    .then((resp) => resp.json())
    .then((data) => {
      //   function fetch1(song) {
      //     return fetch(song)
      //       .then((data) => data.arrayBuffer())
      //       .then((arrayBuffer) => ctx.decodeAudioData(arrayBuffer))
      //       .then((decodedAudio) => {
      //         audio = decodedAudio;
      //       });
      //   }
      //   function playback() {
      //     const playSound = ctx.createBufferSource();
      //     playSound.buffer = audio;
      //     playSound.connect(ctx.destination);
      //     playSound.start(ctx.currentTime);
      //   }

      function table(img1, play) {
        const tab = document.createElement("table");
        const tr = document.createElement("tr");
        const image = document.createElement("img");
        const tr2 = document.createElement("tr");
        const button = document.createElement("button");
        song.appendChild(tab).appendChild(tr);
        tab.appendChild(tr2);
        tr2.appendChild(button);
        image.src = img1;
        tr.appendChild(image);
        button.innerText = "▷";
        audio = new Audio(play);
        function pause() {
          button.innerText = "▷";
          audio.pause();
        }
        function resume() {
          button.innerText = "||";
          audio.play();
        }

        button.addEventListener("click", function (e) {
          var restart = e.target.innerText;
          if (restart === "▷") {
            resume();
          } else if (restart === "||") {
            pause();
          }
        });
      }

      weeknd.addEventListener("click", function () {
        song.innerHTML = "";
        table(data[0]["album"], "./audio/Die For You.mp3");
      });

      khalid.addEventListener("click", function () {
        song.innerHTML = "";
        table(data[1]["album"], "./audio/Location.mp3");
      });

      bruno.addEventListener("click", function () {
        song.innerHTML = "";
        table(data[2]["album"], "./audio/24K Magic.mp3");
      });

      sam.addEventListener("click", function () {
        song.innerHTML = "";
        table(data[3]["album"], "./audio/Too Good At Goodbyes.mp3");
      });

      rihanna.addEventListener("click", function () {
        song.innerHTML = "";
        table(data[4]["album"], "./audio/Stay.mp3");
      });
    });
});
