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
    videosList(data);
})

function mainVideo(vidId, vidTitle) {
  let mainVidHtml = `<iframe src="https://www.youtube.com/embed/${vidId}" title="${vidTitle}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    document.querySelector('#main-video').innerHTML = mainVidHtml;
    console.log(vidId);

}

function videosList(data) {

  data.items.forEach(item => {
    let thumbNail = item.snippet.thumbnails.medium.url;
    let title = item.snippet.title;
    let description = item.snippet.description;

    // let i = 0; i < items.length; i++;

    vidsListHtml = `<article>
    <h3>${title}</h3>
    <img class="thumbn" src="${thumbNail}"></img>
      <p>${description}</p>
    </div>
  </article>`;

    // document.createElement
    
    let emptyDiv = document.querySelector('#empty-div');
    document.querySelector('#videos-section').insertAdjacentHTML('afterBegin', vidsListHtml);
    // let vidListHtml = ;

  })

  // let videosContainer =
  
  // videosContainer.append(vidListHtml);

  }