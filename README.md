# Musical Minds

## Music theory learning fun for beginners

![Mockup of Musical Minds on different devices](https://github.com/johnvenkiah/CI_MS2_John_Venkiah/blob/master/docs/mockup/musical_minds_mockup.png)

Musical Minds is a simple website with the main goal of making learning music theory fun.

<a href="https://johnvenkiah.github.io/CI_MS2_John_Venkiah/" target="_blank">Click here</a> to visit the deployed site.

## Contents

1. [Project Goals](#project-goals)

2. [User Goals](#user-goals)

3. [User Stories](#user-stories)

4. [Site Owner Goals](#site-owner-goals)

5. [User Requirements and Expectations](#user-requirements-and-expectations)

6. [Design choices](#design-choices)

7. [Structure](#structure)

8. [Wireframes](#wireframes)

9. [Technologies used](#technologies-used)

10. [Features](#features)

11. [Validation](#validation)

12. [Testing of User Stories](#testing-of-user-stories)

13. [Bugs](#bugs)

14. [Deployment](#deployment)

15. [Acknowledgements](#acknowledgements)

## User Experience

### Strategy Plane
___

#### Project Goals

The main goals of Musical Minds are:

- Creating a fun website that users feel they want to learn more
- Making users aware of how easy it is to learn sight reading
- Personally, for me, learning to apply JavaScript to websites

#### Future Goals

Schools and music institutions could in the future purchase licenses for Musical minds as a web application, and its functionality could be developed even further. 

#### User Goals

- Users who visit this site want to learn basic music theory and have fun doing it. It is as simple as that!

The user should see straight away that the content of this web application is simple; lots of space and a user-friendly but elegant design makes it attracive for both children and adults.

Target Audience

- Children
- People with learning difficulties
- Beginners or parents

### Structure
___

This website has 5 pages, plus a 404 error page for when entering an invalid link. No libraries or frameworks were used. I wanted to keep the structure clear and simple. Buttons are large and a navigation bar or menu is visible at the top on all pages except the home page.

A footer is always visible with copyright info and relevant technologies depending on the page.

#### 1. Home

Here, the user is given three main options:

- To play a quiz
- To learn about music theory
- To play the piano and see the notes played

Users can also contact the website owner at the top right of the page.

#### 2. Quiz

Here users can play a simple game where they are presented with notes or musical symbols and have to answer correctly to get a point. Users have to answer as many questions correctly in one minute and are then greeted with their score and a message of how the quiz went.

#### 3. Learn

On this page, users can view videos implemented from YouTube API. There are two sections; a main video and a videos list. Users can click on the video in the list to view it in the main frame.

#### 4. Play

This mainly a piano and a stave above. When the user clicks a key, they can see how the note looks on the stave and can hear it being played. Users can also play the notes with the computer keyboard.

#### 5. Contact

On the Contact page, users can fill in a simple contact form to get in touch.

#### 6. 404

This page is shown when users enter an invalid link, and contains the menu and links to get home or get in touch.

### Scope
___

#### User Stories

##### As a new or existing user of this website I would like to:

1. Easily navigate the websites pages via the menu or links provided
2. Be presented with a well designed, user-friendly interface
3. Experience the same quality in design, user interaction and structure on small mobile devices, tablets as on larger screens
4. Get responses and confirmation from the website by my interactions with it
5. Be able to play a quiz on note names, symbols and note lengths
6. Get points if I answer a question right
7. See a timer ticking down from one minute
8. See an end game screen alerting me of my score and how the quiz went
9. Be able to choose to close the end game screen or play again
10. Be able to play notes on a piano on the screen and see which tone is being played
11. Also be able to play the notes on the computer keyboard
12. View videos from a YouTube search for music theory
13. Get in touch with the site owner

#### Site owner goals

The main goal is to create a web app that can be used for amusement but also in the early stages of music education.

##### As a site owner I would like to:

14. Display simple clear options on the home page
15. Display a menu in a navigation bar or popout menu at the top of the page
15. Display a quiz for users to test their knowledge
16. Display a learn page where users can view videos on music theory
17. Display a page where users can play the piano
18. Be able to be contacted should the user wish to do so
19. Have a website that contains validated HTML, CSS and JavaScript

### Skeleton
___

#### Wireframes

Wireframes like the one below were made for both mobile device, tablet and desktop versions of the website in the application [Balsamiq Wireframes](https://balsamiq.com/).

![Screenshot:](https://github.com/johnvenkiah/CI_MS2_John_Venkiah/blob/master/docs/wireframes/wireframes_screenshot_home_mobile.png)

[Click here](https://github.com/johnvenkiah/CI_MS2_John_Venkiah/blob/master/docs/wireframes/all_wireframes_musical_minds.pdf) to view them

### Surface
___

#### Design choices

My goal was to let the design appeal to all sorts of people, and create a design that was unique. At the same time i wanted to keep things simple and not use too many colors.

To make the site as friendly as possible, most elements have slightly rounded edges. The environment should seem playful but not childish or silly, which I accomplished with a combination of the colors, fonts and CSS styling.
I have tried to create a three dimentional feeling, so I spent alot of time with borders, shadows, and gradients to create this.

Hovering over the buttons makes them grow slightly larger, and more transparent.
![Example:](https://github.com/johnvenkiah/CI_MS2_John_Venkiah/blob/master/docs/screenshots/to_show_design/zoom_in_home.png)

Using the design has also bee inplemented with JavaScript to confirm user interaction, for example that a wrong answer in the quiz fires a red shadow around the button and the correct answer expands.

For the bakground I chose a simple music symbols collage and filled it with my chosen background color.

##### Fonts

I have used two types of fonts;

- Grandstander (with Trebuchet MS and cursive as backup fonts) for titles, buttons and links
- Newsreader, (with Garamond and serif as backup fonts) for subheadings and paragraphs. They can both be viewed above in the screenshot.

##### Colors

I chose a bright green color (#86ac00) and different shades of it for the main heading, buttons andd links. The colors can be viewed above in the screenshot.

The background has a very dark brown color (#211d16) which contrasts well to it.

Finally, smaller text like subheadings and paragraphs have a peachy beige color (#daa054).

## Features

### Existing features
___

#### Feature 1: The Navbar/Navmenu

This is the users way to get around the website. The navbar is part of the header, implemented by JavaScript on all pages except home, shich only consists of the buttons to navigate.

As some users like to have a "home" link in the navmenu, as well as being able to get "home" by clicking the page title, users can get to the home page here by doing both.

The Nav element is fixed at the top of the screen and displays links to the 5 pages of the website.

When on mobile, a hamburger is visible instead on the top right of the screen. Clicking it will reveal the links to the five pages.

When viewing on mobile in landscape mode, the nav-menu is displayed vertically so users can still view the content. When open, the navmenu closes once a user either has tapped on a link or clicked anywhere on the screen, closing the menu.

**User stories/site-owner goals covered:**

1. Easily navigate the websites pages via the menu or links provided
3. Experience the same quality in design, user interaction and structure on small mobile devices, tablets as on larger screens
4. Get responses and confirmation from the website by my interactions with it
16. Display a menu in a navigation bar or popout menu at the top of the page
121. Have a website that contains validated HTML, CSS and JavaScript

___
#### Feature 2: The Home Page

The Home page has three big buttons, each containing a main feature of the site; Quiz, Learn and Play. Due to the simple nature of this site, there is little more here to distract, only the main logo, the contact link at the bottom and the footer.

**User stories/site-owner goals covered:**

1. Easily navigate the websites pages via the menu or links provided
2. Be presented with a well designed, user-friendly interface
3. Experience the same quality in design, user interaction and structure on small mobile devices, tablets as on larger screens.
21. Have a website that contains validated HTML, CSS and JavaScript


#### Feature 3: The Quiz (Quiz Page)

The quiz is a seemingly simple feature, but with a lot of functionality. The user has 60 seconds to answer the most questions correctly.

The quiz has several sub-features of its own:

- The staffbox

Displays an image of the note in question for the user to answer. When answered, the image is updated to display the next note in question.

- The answers box

On opening the page, the answers box contains one button: "Lets Play!"

Clicking on this starts the quiz and displays four buttons, with three incorrect and one correct answer. The value of these buttons are updated for each question answered.

If the user clicks on the incorrect answer button, the user is alerted that this was incorrect by sounds and animation, and the user is informed of the correct answer.

If the user clicks on the correct answer-button, the user is greeted with a different sound and animation, and and the score above is incremented.

- The Timer

This keeps track of the time, once the user has clicked "Let's Play!"; the timer counts down from 60 to 0.

- The Score

Once a user has answered a question correctly, the score is incremented with 10 points. The score is then displayed in an end game modal.

- The End Game Modal

This is displayed once the 60 seconds are up, covering the screen. The user is greeted with one of five different greetings, depending on the score they have achieved.

The modal window also displays two buttons with choices for the user; "Play Again" and "Close".

**User stories/site-owner goals covered:**

1. Easily navigate the websites pages via the menu or links provided
2. Be presented with a well designed, user-friendly interface
3. Experience the same quality in design, user interaction and structure on small mobile devices, tablets as on larger screens
4. Get responses and confirmation from the website by my interactions with it
5. Be able to play a quiz on note names, symbols and note lengths
6. Get points if I answer a question right
7. See a timer ticking down from one minute
8. See an end game screen alerting me of my score and how the quiz went
9. Be able to choose to close the end game screen or play again
16. Display a menu in a navigation bar or popout menu at the top of the page
17. Display a quiz for users to test their knowledge
21. Have a website that contains validated HTML, CSS and JavaScript


#### Feature 4: The Piano (Play Page)

The Play page has two sub-features;

- A miniature piano that is clickable, or playable with the computer keys, that play the corresponding note
- A box showing an image of a staff, with both the bass clef and treble clef. When the user clicks a key, the corresponding note displays on the stave, together with the note name. If the active key is black, both the sharp and the flat version are diaplayed.

**User stories/site-owner goals covered:**

1. Easily navigate the websites pages via the menu or links provided
2. Be presented with a well designed, user-friendly interface
3. Experience the same quality in design, user interaction and structure on small mobile devices, tablets as on larger screens
4. Get responses and confirmation from the website by my interactions with it
10. Be able to play notes on a piano on the screen and see which tone is being played
11. Be able to play the notes on the computer keyboard
16. Display a menu in a navigation bar or popout menu at the top of the page
19. Display a page where users can play the piano and view the note played
21. Have a website that contains validated HTML, CSS and JavaScript


#### Feature 5: The Learn Page

The learn page features to main sections, which are features in themselves;

- The videos list, containing data from a YouTube video search on "music theory beginners sight reading", each with their own article. Click the article and the corresponding video will appear in the main video section.

- The main video section, contains the video clicked by the user in the videos list, also displaying the title and description data (depending on the screen-size and/or orientation).

**User stories/site-owner goals covered:**

1. Easily navigate the websites pages via the menu or links provided
2. Be presented with a well designed, user-friendly interface
3. Experience the same quality in design, user interaction and structure on small mobile devices, tablets as on larger screens
4. Get responses and confirmation from the website by my interactions with it
12. View videos to learn about music theory and sight reading
16. Display a menu in a navigation bar or popout menu at the top of the page
18. Display a learn page containing the results of a YouTube search dynamically updated, using YouTube API
21. Have a website that contains validated HTML, CSS and JavaScript


#### Feature 6: The Contact Page

The contact page contains a simple form, where the user can fill in their name, email address and query, which they can send by clicking the submit-button.

The form is validated with JavaScript so the form will only be sent if the adress is filled in correctly and there is a name in the name field.

If the fields are incorrectly filled, a message appears and the user can enter their information again.
If the fields are correctly filled, the user is greeted with a thankyou and their name, and that the message is sent.

The form is posted from JavaScript and via the Email service EmailJS, which sends the message to my private inbox.


**User stories/site-owner goals covered:**

1. Easily navigate the websites pages via the menu or links provided
2. Be presented with a well designed, user-friendly interface
3. Experience the same quality in design, user interaction and structure on small mobile devices, tablets as on larger screens
4. Get responses and confirmation from the website by my interactions with it
13. Get in touch with the site owner
20. Be able to be contacted should the user wish to do so, through an emailing service to my private email address
21. Have a website that contains validated HTML, CSS and JavaScript


#### Feature 7: The 404-error Page

The 404 page is displayed if the user has entered an old or invalid link on the page. This page only contains text and links to refer the user to the other pages on the website. The nav menu at the top is present here too.

1. Easily navigate the websites pages via the menu or links provided
14. View an errors page if I have entered an invalid url within the website
16. Display a menu in a navigation bar or popout menu at the top of the page
21. Have a website that contains validated HTML, CSS and JavaScript



### Features to be implemented
___

This is a basic web application but could be expanded with all kinds of sections and functions. For example, there could be a play-by-ear section, where notes are played and the user has to answer which note. There could also be a chords-section, introducing chords and their uses in music. I am sure this platform will be expanded in the future.

## Technologies used

### Languages
___

- [HTML5](https://en.wikipedia.org/wiki/HTML5)

- [CSS3](https://en.wikipedia.org/wiki/CSS)

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Applications, Tools and Platforms

No libraries were used except for Google Fonts.

- [Google Fonts](https://fonts.google.com/) - Were used for all fonts and icons in this project.

- [Git](https://git-scm.com/) - Version control system used to commit and push to Github via Gitpod.

- [Github](https://github.com/) - The projects repository and all its branches were commited, pushed and deployed to Github.

- [Gitpod](https://gitpod.com/) - All code was written and tested with the Gitpod web-based IDE.

- [Balsamiq](https://balsamiq.com/wireframes/) - Balsamiq Wireframes was used to create wireframe images of the website.

- [Logic Pro](https://www.apple.com/logic-pro/) - Used to create the samples and sound-effects for play and quiz pages.

- [MuseScore 3](https://musescore.org/en) - Used to create the images of notes displayed on play and quiz pages.

## Validation

Below are the details of validation and tests performed on the website.

<details>
  <summary>HYML Validation</summary>

### HTML Validation

All pages passed the Valdation tests.
![The results of W3C HTML validation of index.html](https://github.com/johnvenkiah/CI_MS2_John_Venkiah/blob/master/docs/validation/w3c/html/w3c_html_404.png)

Two warnings were given on learn.html, due to that heading tags were not present.

![results from HTML-validation, learn.html](https://github.com/johnvenkiah/CI_MS2_John_Venkiah/blob/master/docs/validation/w3c/html/w3c_html_learn.png)

This is due to that the element containing these tags are in the learn.js file, implemented when the page is loaded.

More screenshots can be viewed [here](https://github.com/johnvenkiah/CI_MS2_John_Venkiah/tree/master/docs/validation/w3c/html)

</details>

<details>

<summary>CSS Validation</summary>

### CSS Validation

Musical Minds passed the test for CSS Validation. Here are the results:

![Results, Jigsaw CSS-test](https://github.com/johnvenkiah/CI_MS2_John_Venkiah/blob/master/docs/validation/w3c/css_jigsaw/w3c_css_jigsaw.png)

Warnings were given for using vendor prefixes for user-select, but using without them made user select non functional for me.

![Warnings, CSS Validation](https://github.com/johnvenkiah/CI_MS2_John_Venkiah/blob/master/docs/validation/w3c/css_jigsaw/jigsaw_warnings.png)

<details>


### JavaScript Validation

All JavaScript files were validated with JSHint. Only notifications I recieved were that variables were not used, which is incorrect, as they are used in other linked JavaScript-files.

[Here](https://github.com/johnvenkiah/CI_MS2_John_Venkiah/blob/master/docs/validation/jshint.md) are the results.

<summary>HYML Validation</summary>

### Accessibility

<details>

<summary>HYML Validation</summary>

### Performance

<details>

<summary>HYML Validation</summary>

### Device Testing

<details>



### Testing of User Stories

#### 1. Easily navigate the websites pages via the menu or links provided

| Feature       | Action            | Expected result   | Actual result    |
| ------------- | ----------------  | ----------------- | ---------------- |

#### 2. Be presented with a well designed, user-friendly interface

| Feature       | Action            | Expected result   | Actual result    |
| ------------- | ----------------  | ----------------- | ---------------- |

#### 3. Experience the same quality in design, user interaction and structure on small mobile devices, tablets as on larger screens

| Feature       | Action            | Expected result   | Actual result    |
| ------------- | ----------------  | ----------------- | ---------------- |

#### 4. Get responses and confirmation from the website by my interactions with it

| Feature       | Action            | Expected result   | Actual result    |
| ------------- | ----------------  | ----------------- | ---------------- |

#### 5. Be able to play a quiz on note names, symbols and note lengths

| Feature       | Action            | Expected result   | Actual result    |
| ------------- | ----------------  | ----------------- | ---------------- |

#### 6. Get points if I answer a question right

| Feature       | Action            | Expected result   | Actual result    |
| ------------- | ----------------  | ----------------- | ---------------- |

#### 7. See a timer ticking down from one minute

| Feature       | Action            | Expected result   | Actual result    |
| ------------- | ----------------  | ----------------- | ---------------- |

#### 8. See an end game screen alerting me of my score and how the quiz went

| Feature       | Action            | Expected result   | Actual result    |
| ------------- | ----------------  | ----------------- | ---------------- |

#### 9. Be able to choose to close the end game screen or play again

| Feature       | Action            | Expected result   | Actual result    |
| ------------- | ----------------  | ----------------- | ---------------- |

#### 10. Be able to play notes on a piano on the screen and see which tone is being played

| Feature       | Action            | Expected result   | Actual result    |
| ------------- | ----------------  | ----------------- | ---------------- |

#### 11. Be able to play the notes on the computer keyboard

| Feature       | Action            | Expected result   | Actual result    |
| ------------- | ----------------  | ----------------- | ---------------- |

#### 12. View videos to learn about music theory and sight reading

| Feature       | Action            | Expected result   | Actual result    |
| ------------- | ----------------  | ----------------- | ---------------- |

#### 13. Get in touch with the site owner

| Feature       | Action            | Expected result   | Actual result    |
| ------------- | ----------------  | ----------------- | ---------------- |

#### 14. View an errors page if I have entered an invalid url within the website

| Feature       | Action            | Expected result   | Actual result    |
| ------------- | ----------------  | ----------------- | ---------------- |




</details>

### Bugs

## Deployment

### GitHub Pages

This website has been deployed using GitHub pages.

To deploy a page yourself, do the following:

1. Access your GitHub account and find the relevant repository.
2. Click 'Settings' in the repository.
3. In Settings, click 'Pages' in the left-hand menu.
4. Click 'Source'.
5. In the dropdown menu displaying 'None', select 'Master Branch' or 'Main'6.
6. Allow the page some time to deploy your website.
7. At the top of Github Pages you will see a link to your live website.

### Forking the GitHub Repository

To make a clone, or 'Fork' this repository, follow the steps below.

1. Access your GitHub account and find the relevant repository.
2. Click on 'Fork' on the top right of the page.
3. You will find a copy of the repository in your own Github account.

## Making a Local Clone

1. Access your GitHub account and find the relevant repository.
2. Click the 'Code' button next to 'Add file'.
3. To clone the repository using HTTPS, under clone with HTTPS, copy the link.
4. Open Git Bash.
5. Access the directory you want the clone to be have.
6. In your IDE's terminal type 'git clone' and the paste the URL you copied.
7. Press Enter.
8. You now have a local clone.

## Acknowledgements

The tutors at Code Institute, especially John and Sean, gave me very good advice.