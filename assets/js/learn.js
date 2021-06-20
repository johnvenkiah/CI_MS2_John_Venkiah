let KEY = 'AIzaSyCENLiRl8jnjs8Nc0kkDXEltYIuhqoNfeE';

let options = {
  part: 'snippet',
  key: KEY,
  maxResults: 15
}

fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=music%20theory%20beginners%20piano%20sight%20reading&relevanceLanguage=en&key=${KEY}`)
  .then(response => response.json())
  .then(data => {
    document.querySelector('#learn-text').innerText = data;
    var vidId = data.items[0].id.videoId;
    var vidTitle = data.items[0].snippet.title;
    console.log(data);

    mainVideo(vidId, vidTitle);
    videosList();
})

function mainVideo(vidId, vidTitle) {
  let mainVidHtml = `<iframe src="https://www.youtube.com/embed/${vidId}" title="${vidTitle}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    document.querySelector('#main-video').innerHTML = mainVidHtml;
    console.log(vidId);

}

function videosList() {
  let vidListHtml = `<article>
    <img class="thumbn" src="assets/images/learn/thumbn_videos/thumb1.webp"></img>
    <div class="video-info">
      <h3>Title</h3>
      <p>Description</p>
    </div>
  </article>`

  let videosContainer = document.querySelector('#videos-section');
  videosContainer.innerHTML = vidListHtml;
  }