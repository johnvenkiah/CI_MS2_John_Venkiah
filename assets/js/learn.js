let KEY = 'AIzaSyDvqQZEbIUH5AC7YGcWfaaGK6hIiN8S9Tg';

let navbar = document.querySelector('.navbar')

navbar.style.boxShadow = '2px 0 4px #2a2a2a';

let options = {
  part: 'snippet',
  key: KEY,
  maxResults: 10
}

fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=music%20theory%20beginners%20piano%20sight%20reading&relevanceLanguage=en&key=${KEY}`)
  .then(response => response.json())
  .then(data => {
    var vidId = data.items[0].id.videoId;
    var vidTitle = data.items[0].snippet.title;

    mainVideo(vidId, vidTitle);
    videosList(data);
  })

function mainVideo(vidId, vidTitle) {
  let mainVidHtml = `<iframe src="https://www.youtube.com/embed/${vidId}" title="${vidTitle}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

  document.querySelector('#main-video').innerHTML = mainVidHtml;
  // console.log(vidId);

}

function videosList(data) {

  data.items.forEach(item => {
    let thumbNail = item.snippet.thumbnails.medium.url;
    let title = item.snippet.title;
    let description = item.snippet.description;
    let id = item.id.videoId;

    // let i = 0; i < items.length; i++;

    vidsListHtml = `<article class="vid-article" data-id="${id}">
    <h3 id="vid-title">${title}</h3>
    <img class="thumbn" src="${thumbNail}"></img>
      <p>${description}</p>
    </div>
  </article>`;

    let videosSection = document.querySelector('#videos-section')
    videosSection.insertAdjacentHTML('afterBegin', vidsListHtml);

  });

  let articles = document.querySelectorAll('.vid-article');

  articles.forEach(article => {
    article.addEventListener('click', function() {
      currentVidId = article.dataset.id
      // vidTitle = item.snippet.title;
      mainVideo(currentVidId);
  })
})

}