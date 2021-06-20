
  /**
   * Sample JavaScript code for youtube.search.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/guides/code_samples#javascript
   */

  // function authenticate() {
  //   return gapi.auth2.getAuthInstance()
  //       .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
  //       .then(function() { console.log("Sign-in successful"); },
  //             function(err) { console.error("Error signing in", err); });
  // }

  window.onload(loadClient, execute());

  function loadClient() {
    gapi.client.setApiKey("AIzaSyBKMQZlfKuvbhmyF99jz5wNmF1A1x7jFZM");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.search.list({
      "part": [
        "snippet"
      ],
      "maxResults": 15,
      "order": "rating",
      "q": "music theory beginners",
      "relevanceLanguage": "en",
      "safeSearch": "strict"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  // gapi.load("client:auth2", function() {
  //   gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
  // });



// document.onload(function() {

//   let key = 'AIzaSyBKMQZlfKuvbhmyF99jz5wNmF1A1x7jFZM';
//   let eTag = 'DgDalgcFj4FYHL1ylkD8gAGENw4';
//   let URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=rating&q=music%20theory%20beginners&relevanceLanguage=en&key=[${key}] HTTP/1.1`;

//   let details = {
//     part: 'snippet',
//     key: key,
//     maxResults: 20,
//   }

//   function loadVideo() {
//     JSON.parse()
//   }

// });