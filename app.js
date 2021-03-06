document
  .getElementById("searchInput")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.key === 'Enter') {
      document.getElementById("searchBtn").click();
    }
  });
const searchMusic = async () => {
  const searchInput = document.getElementById("searchInput").value;
  const url = `https://api.lyrics.ovh/suggest/${searchInput}`;
  toggleSpinner();
  try {
    const res = await fetch(url);
    const data = await res.json();
    showData(data.data);
  } catch {
    displayError("Failed to load data.Please try again later!!!");
  }
};

const showData = async (songs) => {
  const singleResult = document.querySelector(".search-result");
  singleResult.innerHTML = "";
  songs.forEach((song) => {
    const songDiv = document.createElement("div");
    songDiv.className = `single-result row align-items-center my-3 p-3`;
    songDiv.innerHTML = `
                       <div class="col-md-9">
                        <h3 class="lyrics-name">${song.title}</h3>
                        <p class="author lead">Album by <span>${song.artist.name}</span></p>
                        <audio controls>
                            <source src="${song.preview}" type="audio/mp3">
                        </audio>
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button onclick="getLyrics('${song.title}','${song.artist.name}')" class="btn btn-success">Get Lyrics</button>
                    </div>
                   
   `;
    singleResult.appendChild(songDiv);
    toggleSpinner();
  });
};
const getLyrics = async (title, artist) => {
  const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
  const res = await fetch(url);
  const data = await res.json();
  showLyrics(data.lyrics);
};

const showLyrics = async (lyric) => {
  const lyricDiv = document.querySelector(".single-lyrics");
  const p = document.createElement("p");
  p.innerText = lyric;
  lyricDiv.appendChild(p);
};
const displayError = (error) => {
  const err = document.getElementById("error");
  err.innerHTML = error;
};
const toggleSpinner = () => {
  const toggle_spinner = document.getElementById("spinner");
  toggle_spinner.classList.toggle("d-none");
};
