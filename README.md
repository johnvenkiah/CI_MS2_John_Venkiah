# Musical Minds

PICTURE OF MOCKUP

## Contents

1. Project Goals

2. User Goals

3. User Stories

4. Site Owner Goals

5. User Requirements and Expectations

6. Design choices

7. Structure

8. Wireframes

9. Technologies used

10. Features

11. Validation

12. Testing of User Stories

13. Bugs

14. Deployment

15. Acnowledgements



## Project Goals

The main goal of this project is to give my own artist website, a completely new design, both for the purpose of gaining a new website that is beautiful, responsive and updated, but also as means of projecting what I have learnt so far concerning HTML and CSS. In this website, users can listen to or buy my music, watch videos, learn more about me, sign up for a newsletter or contact me.

[Here is the link to the deployed website:](https://johnvenkiah.github.io/CI_MS1_John_Venkiah/)

## User Goals

The design and content should ultimately invite users to want to book me as a musician, buy my music or follow me on social media. Users should be able to navigate easily, feeling a visual consistency throughout the whole website. The main element on that specific page should be clear, and the most important navigational links should be visible from everywhere, in the same place.

Users using screen readers should also be able to feel welcome thanks to correct arla-labelling and alt attributes for images.

## User Stories

# As a user of this website I would like to:

1. Learn about musician John Venkiah
2. Understand all content
3. Listen to John’s music
4. Watch John’s music videos
5. Be able to view this page correctly on a tablet or smartphone
6. Feel that the content appeals to me and the design is intuitive
7. Have access to relevant content while viewing with a screen reader
8. Be able to contact John for bookings, etc
9. Have the possibility to sign up for a newsletter
10. Access John’s press info
11. See any news or updates
12. View and/or download artist images

# As a returning user I would also like to:

13. Find specific music I heard and hear it again or purchase it
14. Find out more about John Venkiah and his music
15. See any news or updates
16. Be able to contact John for bookings, etc

## Site owner goals

These are in this specific case equal to my own goals, but to be more specific as a site owner, I would like to:

1. Gain more followers
2. Make it easier for fans to listen to my music
3. Gain a good image and reputation for potential collaborators with a well designed website
4.  Urge visitors to want to contact me and make the contact process easy
5.  Make everyone feel welcome and be able to access the relevant content of the site

## User requirements and expectations

# Users should:

* Receive a high quality user experience design while navigating within this website.
* Be able to view or experience the website and its contents with different devices, screen sizes or a screen reader while still maintaining this high quality.
* Never feel confused about any content, images or links.
* Be able to find the song, video or album they are looking for.

## Design choice

As I have just released a new album, with cover-art that I am fond of, I thought that I should be inspired by that design. I found free fonts that were as similar as possible to the fonts used (due to copyright could not use the same ones) and color-coded active text with the same orange color as on the cover. I also added a black background and consistent white text, as I like dark themes in general.

![Fonts I have used:](https://github.com/johnvenkiah/CI_MS1_John_Venkiah/blob/master/docs/features/main_logo.png?raw=true)
![Barlow Sans and Source Sans from Google Fonts](https://github.com/johnvenkiah/CI_MS1_John_Venkiah/blob/master/docs/features/nav_bar)

I also thought that good images that cover the whole background make a big impact on users, so I chose images that I like, with different ones on each page. This also make the users aware of the page they are on.

A navigation bar at the top is visible and fixed on all pages, which includes the website name at the top left, and Home, Listen, Videos, Bio and Get in Touch links.

On the right hand side, there are icons with links to Spotify, Facebook, YouTube and Instagram.

Text or icons that is hovered over has a darker shade of orange than pages that are active, or the submit button, which insinuates that the links are clickable.

I also used a translucent grey for mid-level elements to create a feeling of three-dimensionality and transparence.

![Fonts I have used:](https://github.com/johnvenkiah/CI_MS1_John_Venkiah/blob/master/docs/features/main_logo.png?raw=true)

I also used easily recognisable icons from Font Awesome for social media and music service-links that follow the same color scheme.

Structure

The website structure is basic, where the header, footer and social media navigational bars are always visible, and the main content of the page navigated to is central.

Home - The main content is the new album, almost in the middle, with a short description urging the user to listen to my new album

Listen - Here, the main content is a scrollable element containing embedded web-players of different albums or playlists with my music. Below each one are four icons, to my music on different music services.

Videos - Several embedded videos from YouTube fill out the main content of this page, with live concerts and music videos that I have been a part of.

Get in touch - This is a web form in which users can enter their name, email, a message and subscribe to a newsletter.

Wireframes

I created wireframes for the five different pages, for smartphone, tablet and computer screens, you can view them [here](https://github.com/johnvenkiah/CI_MS1_John_Venkiah/tree/master/docs/wireframes)

![Wireframe for contact.html](https://github.com/johnvenkiah/CI_MS1_John_Venkiah/blob/master/docs/wireframes/wireframes_contact_desktop.png?raw=true)

I picture the website as part mini-gallery, so the different pages also are pro photographs, as this also gives an artistic impression.

My wireframes evolved over time and I wanted each page to be a full photo, with a indicator urging the user to scroll down to the page content, which I found more appealing visually.

I also later decided to use a menu bar for small screens, as a hamburger icon is so widely used and also to make use of CSS as much as possible.

The main logo retains the full width of the screen on all pages.

![The home page](https://github.com/johnvenkiah/CI_MS1_John_Venkiah/blob/master/docs/wireframes/wireframes_home_desktop.png?raw=true)

# Home

Here, it is clear what the focus is - my new album. No other main content is visible, but all the menu elements are there, both social media and website navigation. A nice colourful picture fills the rest of the screen.

The idea is the same on tablet and smartphone, and due to the single hero image of the cd cover, the home page doesn't get crowded. A menu icon to the top right, which I eventually removed from the design.

# Listen

Here is a grid filled with links to music you can listen to both right there in the window but also whole albums or singles that are links to listen to on the preferred media. The grid should also contain short info about the music.

For smaller screens, the grid of music is resized to fit smaller screens, and has one element per row. The user can see the social media icons upon loading and at the very bottom of the page.

# Videos

Here, users can watch carefully chosen videos with my music.
I wanted the user to see a full screen video as soon as they click the videos link, if watching on a large screen, while the video aspect ratio remains the same. This means that when using a smaller screen, thte user sees several videos when scrolling, which is what I was after.

# About

I later renamed this page About, which I preferred. Here is basic info about my life as a musician and background. Also, some images nicely placed within the content.

# Contact

On this page, I put a simple form, where users can enter their name, email address, write a short message and sign up for newsletters. Here is also links to my press material for bookings, etc.

On large screens, the form will take up one side of the page while there is an image on the other. On smartphone screens, the form will fill the whole page.

Technologies used

- ![Github](https://github.com/)

- ![Gitpod](https://gitpod.com/)

- ![HTML5](https://en.wikipedia.org/wiki/HTML5)

- ![CSS3](https://en.wikipedia.org/wiki/CSS)

## Features

# Existing features

1. Navigation bar

A nav bar at the top of the page, to match most user expectations. Here you can navigate between the pages "Home, "Listen", "Videos", "About" and "Contact". This dissapears as users scroll down to the main content of some pages.

2. Side/bottom bar with social media links

Well known icons for Spotify, Facebook, Instagram and YouTube that are visible throughout the whole website.

3. Footer

Simple footer with copyright information.

4. CD-cover as hero image as a center item of the screen with slight zoom animation when hovering. A colourful image fills the rest of the screen.

5. Contact Form on [Contact]()


## Validation

The site passed most validation and only had an alert about my aria-label for bckground picture. [Here](https://github.com/johnvenkiah/CI_MS1_John_Venkiah/tree/master/docs/validation) are the results.

# Testing of User Stories

    - I think the user will have enough to read, but maybe the site needs a updates section, so content feels new.

    [Mobile View of about](https://github.com/johnvenkiah/CI_MS1_John_Venkiah/blob/master/docs/Responsivity/desktop_about_2.png)

    -  I also think that all users can understand all content, due to the fact that I have added aria-labels and titles as much as I can.

    -  My music is there to listen to, there is more than enough!

    _ Pages are viewed correctly on different screen sizes. [Mockup](https://github.com/johnvenkiah/CI_MS1_John_Venkiah/blob/master/docs/mockup/mockup_3.png) I have tested all functions on all screensizes.

    - The content appeals to me with pictures and music, all it needs is a news feed.

    - One can easily contact med for bookings on the form.

    _ My press info is available for download as a PDF-file.

    - News or updates are missing still.

    Images are downloadable but more to come!

## Deployment

Pasted from Tara Rhoseyns Github:

Deployment
GitHub Pages
This website has been deployed using GitHub pages. To do the same...

Log into your GitHub account and find the repository.
Click on 'Settings' in the repository.
Click 'Pages' in the left-hand menu once you're in Settings.
Click 'Source'.
Click the dropdown menu which says 'None', then select 'Master Branch'.
Wait for page to refresh automatically.
Under GitHub pages you can now find a link to the published live website.
Forking the GitHub Repository
By forking this GitHub repository you are making a copy of the original to view or make changes without affecting the original. You can do this by following these steps...

Log into your GitHub account and find the repository.
Click 'Fork' (last button on the top right of the repository page).
You will then have a copy of the repository in your own GitHub account.
Making a Local Clone
Log into your GitHub account and find the repository.
Click on the 'Code' button (next to 'Add file').
To clone the repository using HTTPS, under clone with HTTPS, copy the link.
Then open Git Bash.
Change the current working directory to where you want the cloned directory to be made.
In your IDE's terminal type 'git clone' followed by the URL you copied.
Press Enter.
Your local clone will now be made.

## Acnowledgements


https://stackoverflow.com/questions/2861247/center-aligning-a-fixed-position-div

Kyle:
https://www.youtube.com/watch?v=9zBsdzdE4sM

Traversy Media

https://www.youtube.com/watch?v=-qOe8lBAChE

Responsive Video:

https://medium.com/@tylerduprey_52451/a-perfect-video-container-with-css-37fd454c5eb5

The tutors at Code Institute

And of course my wonderful Mentor Mo, has guided me wonderfully.