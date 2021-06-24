let KEY = 'AIzaSyDvqQZEbIUH5AC7YGcWfaaGK6hIiN8S9Tg';
let navbar = document.querySelector('.navbar');

navbar.style.boxShadow = '2px 0 4px #2a2a2a';

var cors_api_host = 'cors-anywhere.herokuapp.com';
var cors_api_url = 'https://' + cors_api_host + '/';

(function() {
  var slice = [].slice;
  var origin = window.location.protocol + '//' + window.location.host;
  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function() {
      var args = slice.call(arguments);
      var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
      if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
          targetOrigin[1] !== cors_api_host) {
          args[1] = cors_api_url + args[1];
      }
      return open.apply(this, args);
  };
  console.log('cors setup complete');
})();



let myRequest = new Request(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=music%20theory%20beginners%20piano%20sight%20reading&relevanceLanguage=en&key=${KEY}`);

fetch(myRequest)
  .then(response => response.json())
  .then(data => {
    var vidId = data.items[0].id.videoId;
    var vidTitle = data.items[0].snippet.title;   // fix this so title shows for each video
    
    mainVideo(vidId, vidTitle);
    videosList(data);
    
  })
  .catch((err) => {
    console.error('Error: ', err);
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

    let vidsListHtml = `<article class="vid-article" data-id="${id}">
    <h3 id="vid-title">${title}</h3>
    <img class="thumbn" src="${thumbNail}"></img>
      <p>${description}</p>
    </div>
  </article>`;

    let videosSection = document.querySelector('#videos-section');
    videosSection.insertAdjacentHTML('afterBegin', vidsListHtml);

  });

  let articles = document.querySelectorAll('.vid-article');

  articles.forEach(article => {
    article.addEventListener('click', function() {
      let currentVidId = article.dataset.id;
      // vidTitle = item.snippet.title;
      mainVideo(currentVidId);
  });
});

}