let key = 'AIzaSyCENLiRl8jnjs8Nc0kkDXEltYIuhqoNfeE';

fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=rating&q=piano%20music%20theory%20beginners%20sight%20reading&relevanceLanguage=en&safeSearch=moderate&key=${key}`)
  .then(response => response.text())
  .then(data => {
    document.querySelector('#learn-text').innerText = data;
  })