const searchMusic = () => {
  const searchInput = document.getElementById("searchInput").value;
  const url = `https://api.lyrics.ovh/suggest/${searchInput}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => showData(data));
    
};

const showData = allData => {
    const lyricsName = allData.data[0].title;
    console.log(lyricsName);
   const musicData = `
    <div class="col-md-9">
                        <h3 class="lyrics-name">Purple Noon</h3>
                        <p class="author lead">Album by <span>Washed Out</span></p>
                    </div>
   `;
}