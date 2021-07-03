// jshint esversion: 6

/* LEARN.JS */

let KEY = 'AIzaSyAXwLQ3QpA152YNY8Aa0A8pz_3w4fd1s6o';

fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=music%20theory%20beginners%20piano%20sight%20reading&relevanceLanguage=en&key=${KEY}`)
  .then(response => response.json())
  .then(data => {
    let vidId = data.items[0].id.videoId;
    let vidTitle = data.items[0].snippet.title;
    let vidDescr = data.items[0].snippet.description;
    
    mainVideo(vidId, vidTitle, vidDescr);
    videosList(data);
    
  })
  .catch((err) => {
    console.error('Error: ', err);
  });


function mainVideo(id, title, descr) {
  let mainVidHtml = `<iframe src="https://www.youtube.com/embed/${id}"
        title="${title}" aria-labelledby="main-vid-title" frameborder="0" allow="accelerometer; autoplay;
        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <h3 id="main-vid-title" class="vid-title smaller-green-text">${title}</h3>
    <p class="paragraph">${descr}</p>`;

  document.querySelector('#main-video').innerHTML = mainVidHtml;
}

function videosList(data) {

  data.items.forEach(item => {
    let thumbNail = item.snippet.thumbnails.medium.url;
    let title = item.snippet.title;
    let description = item.snippet.description;
    let id = item.id.videoId;

    let screenSize = window.matchMedia('(max-width: 450px) and (max-height: 840px)');

        if (screenSize.matches) {
            description = description.substr(0, 80) + '...';
        }

    let vidsListHtml = `<article class="vid-article" data-id="${id}" data-title="${title}" data-descr="${description}">
    <h4 class="vid-title smaller-green-text">${title}</h4>
    <img class="thumbn" src="${thumbNail}" alt="click to view the video in the main window"></img>
      <p aria-label="Description for video">${description}</p>
    </div>
  </article>`;

    let videosSection = document.querySelector('#videos-section');
    videosSection.insertAdjacentHTML('afterBegin', vidsListHtml);
  });

  let articles = document.querySelectorAll('.vid-article');

  articles.forEach(article => {
    article.addEventListener('click', function() {
      let newVidId = article.dataset.id;
      let newVidTitle = article.dataset.title;
      let newVidDescr = article.dataset.descr;
      mainVideo(newVidId, newVidTitle, newVidDescr);
  });
});
}