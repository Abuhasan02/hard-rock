const searchMusic = () => {
  const searchInput = document.getElementById("searchInput").value;
  const url = `https://api.lyrics.ovh/suggest/${searchInput}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => showData(data.data));
};

const showData = (songs) => {
  const singleResult = document.querySelector(".search-result");
  //   const lyricsName = songs.data[0].title;
  //   const artistName = songs.data[0].artist.name;
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
                        <button onclick="getLyrics()" class="btn btn-success">Get Lyrics</button>
                    </div>
                   
   `;
    singleResult.appendChild(songDiv);
  });
};

