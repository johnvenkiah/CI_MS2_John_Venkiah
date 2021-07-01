let KEY = 'AIzaSyAXwLQ3QpA152YNY8Aa0A8pz_3w4fd1s6o';

fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=music%20theory%20beginners%20piano%20sight%20reading&relevanceLanguage=en&key=${KEY}`)
  .then(response => response.json())
  .then(data => {
    var vidId = data.items[0].id.videoId;
    var vidTitle = data.items[0].snippet.title;
    var vidDescr = data.items[0].snippet.description;   // fix this so title shows for each video
    
    mainVideo(vidId, vidTitle, vidDescr);
    videosList(data);
    
  })
  .catch((err) => {
    console.error('Error: ', err);
  });


function mainVideo(vidId, vidTitle, vidDescr) {
  let mainVidHtml = `<iframe src="https://www.youtube.com/embed/${vidId}"
        title="${vidTitle}" frameborder="0" allow="accelerometer; autoplay;
        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <h3 class="vid-title smaller-green-text">${vidTitle}</h3>
    <p class="paragraph">${vidDescr}</p>`;

  document.querySelector('#main-video').innerHTML = mainVidHtml;
  // console.log(vidId);

}

function videosList(data) {

  data.items.forEach(item => {
    let thumbNail = item.snippet.thumbnails.medium.url;
    let title = item.snippet.title;
    let description = item.snippet.description;
    let id = item.id.videoId;

    let vidsListHtml = `<article class="vid-article" data-id="${id}" data-title="${title}" data-descr="${description}">
    <h3 class="vid-title smaller-green-text">${title}</h3>
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
      VidId = article.dataset.id;
      VidTitle = article.dataset.title;
      vidDescr = article.dataset.descr;
      mainVideo(VidId, VidTitle, vidDescr);
  });
});

}