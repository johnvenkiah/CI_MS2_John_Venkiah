// jshint esversion: 6

// LEARN.JS
/**
 * This JS-file makes use of the YouYube API, and fills the page with the results from a search for videos on music theory.
 * The base logic is based on this tutorial: https://www.youtube.com/watch?v=9sWEecNUW-o&t=2241s
 */

// The API key
let KEY = 'AIzaSyAXwLQ3QpA152YNY8Aa0A8pz_3w4fd1s6o';

/** I used fetch with the help of the video on fetch API by Matt Rudge, in the course material to
 * fetch data from the youtube API and parse the response to json and parse that response to data to
 * be used in the videos
 * */
fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=music%20theory%20beginners%20piano%20sight%20reading&relevanceLanguage=en&key=${KEY}`)
  .then(response => response.json())
  .then(data => {

    // Variables to hold the first video that comes up and their data
    let vidId = data.items[0].id.videoId;
    let vidTitle = data.items[0].snippet.title;
    let vidDescr = data.items[0].snippet.description;
    
    // Execute the function mainVideo with these variables
    mainVideo(vidId, vidTitle, vidDescr);

    // Execute the videosList function making the videos data accessible to it
    videosList(data);
    
  })
  // Display an error if data could not be fetch didn't work
  .catch((err) => {
    console.error('Error: ', err);
  });

/**
 * The main video function, injects html into the document with video info from the article clicked on
 * in the videos list.
 */
function mainVideo(id, title, descr) {

    // Variable for the main video html with data from the arrow function at the bottom (article clicked on)
  let mainVidHtml = `<iframe src="https://www.youtube.com/embed/${id}"
        title="${title}" aria-labelledby="main-vid-title" frameborder="0" allow="accelerometer; autoplay;
        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <h3 id="main-vid-title" class="vid-title smaller-green-text">${title}</h3>
    <p class="paragraph">${descr}</p>`;

    // Set the inner HTML of the main video to the above
  document.querySelector('#main-video').innerHTML = mainVidHtml;
}

/**
 * This function takes the data and injects it into the videos list, so the list contains the results of the API
 * search.
 */
function videosList(data) {
    
    // For each arrow function to fill each article with data for each video
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