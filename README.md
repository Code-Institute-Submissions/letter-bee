# Letter Bee

![Letter Bee](/wireframes/multi-device-mockup.jpg)

<p align="center"> :honeybee: <strong>Welcome to Letter Bee!</strong> :honeybee: <br>
Thanks for coming to take a look.
Letter Bee is a children's game that aims to teach and test children on the letters of the alphabet.</p>

## Contents

[:sparkles: UX](#sparkles-ux)\
\
              [:books: User Stories](#books-user-stories)\
\
              [:game_die: Strategy Plane](#game_die-strategy-plane)\
\
              [:earth_africa: Scope Plane](#earth_africa-scope-plane)\
\
              [:rainbow: Surface Plane/Design Choices](#rainbow-surface-planedesign-choices)\
\
              [:clipboard: Wireframes](#clipboard-wireframes)\
\
[:construction: Development Process](#construction-development-process)\
\
              [:unlock: Technologies Used](#unlock-technologies-used)\
\
              [:computer: External Sources Used](#computer-external-sources-used)\
\
              [:bug: Bugs](#bug-bugs)\
\
[:test_tube: Testing](#test_tube-testing)\
\
              [:child: Toddler Tests](#child-toddler-tests)\
\
              [:family_woman_girl: 'Mum-friend' Tests](#family_woman_girl-mum-friend-tests)\
\
              [:people_holding_hands: Peer Tests](#people_holding_hands-peer-tests)\
\
              [:sparkle: Jasmine Tests](#sparkle-jasmine-tests)\
\
              [:memo: Manual Tests](#memo-manual-tests)\
\
              [:heavy_check_mark: W3C Tests](#heavy_check_mark-w3c-tests)\
\
[:flight_departure: Deployment](#flight_departure-deployment)\
\
[:clapper: Credits](#clapper-credits)\
\
              [:movie_camera: Media](#movie_camera-media)\
\
              [:trophy: Acknowledgements](#trophy-acknowledgements)

## :sparkles: UX

I was inspired to create this site by my 2-year-old son (Eddie) who loves to be tested on the letters of the alphabet.

Alphabet products for small children tend to be quite traditional: 'A is for apple :apple:, B is for ball :soccer:...'. I wanted to create something that extends this concept using objects that children will be familiar with and enthusiastic about. In particular, vehicles ('A is for ambulance :ambulance:, F is for fire engine :fire_engine:, P is for police car :police_car:') and cartoon characters ('B is for Bing :rabbit:, X is for Xuli :woman_pilot:') feature quite heavily (although, disclaimer: apple and ball do also make an appearance)!

It's also intended as a shameless attempt to lessen the guilt that most parents feel about using/relying on screen time. We all have the best of intentions, but sometimes a five-minute break is needed and if you're going to hand the parenting over to an electronic device, at least you can tell yourself you're giving them an educational opportunity!


### :books: User Stories
---
* :woman: **Parent** 
    * As a user I want an educational game so that my child can play to learn and practise the letters of the alphabet. 
    * As a user I want customisable levels of difficulty to allow my child to use the game at each stage of development. 
    * As a user I want the option to turn any sound off! 

* :woman_teacher: **Educational Professional**
    * As a user I want a game that gives constructive feedback so that the child is continually motivated to learn.

* :child: **Small Child** 
    * As a user I want something fun and interactive that shows me images that I will easily recognise so that I can relate the game to my experience of every day life. 

### :game_die: Strategy Plane
---
Opportunity/Problem | Importance | Viability/Feasibility
--------------------|------------|----------------------
Alphabet game to match image with given letter | 5 | 5
Learning mode to cycle through different letters and show all matching images | 4 | 3
Parent-interaction mode | 3 | 3
Audio: voice files for each image to aid learning | 4 | 5
Audio: on/off modes | 3 | 4
Customisation: allow known letters of the alphabet to be selected for game | 3 | 3
Customisation: allow number of ‘alternative’ images to be selected (between 2-4) | 4 | 4
Connect to dictionary API – for explore mode | 5 | 5
Full screen mode to avoid child going onto menu | 3 | 2

### :earth_africa: Scope Plane
---
* :video_game: **Play mode** - Alphabet game to match image with given letter
    * A letter will appear at the top of the screen “A is for…” and a selection of ‘real-life’ images will be show below for the child to select the correct match.
    * If a correct answer is selected, the image will highlight in green, and confirm “A is for… apple” and next question will appear
    * If incorrect answer is selected, image will highlight in orange (to show it’s been selected) and ‘Have another go’ will show on screen – repeat until correct answer is selected
    * Scoring – at end of game, the letters that were right first time will show in one collection with ‘Great, you know these letters really well’. 
    * Letters that had errors will show in second collection with ‘Would you like to practise these letters?’ and link to learning mode
    * Default mode (i.e. no options selected) – sound on, voice on, 26 letters (random order), 4 picture options

* :pencil: **Learning mode** - Cycle through different letters and show all matching images
    * In this mode, the site will cycle through the alphabet with matching images for each letter
    * If directed to this page directly from the game, only the letters that need practice will be shown
    * Otherwise, parent will be given the option to limit which letters are shown

* :mag_right: **Discover mode** (Parent-interaction)
    * ‘I spy’ type mode where child is directed to find things that begin with the given letter. For each letter ‘How many things did you find that begin with the letter…’ – 0, 1, 2, 3 or more – with link to explore mode for each letter

* :telescope: **Explore mode**
    * This will display data from the dictionary API for each letter selected

### :rainbow: Surface Plane/Design Choices
---
:pencil2: **Font families**

Fonts have been selected based on how well they align to the handwriting style that is taught to children in England. In particular, this means a loopy-style ‘k’ and a single-story ‘a’.
For general website content (i.e. headings, navigation etc):

[Montserrat Alternates](https://fonts.google.com/specimen/Montserrat+Alternates?category=Sans+Serif&preview.text_type=custom&query=montserr)
![Montserrat Alternates Font](/wireframes/montserrat-alternates.jpg)

For text directed at children (i.e. ‘A is for…’):

[ABeeZee (Regular Italic – as this features the loopy ‘k’)](https://fonts.google.com/specimen/ABeeZee?category=Sans+Serif&preview.text_type=custom&query=abeezee)
![ABeeZee Font](/wireframes/abeezee.jpg)


:art: **Colour choices**

I wanted to use bright colours that would be engaging to young children, and in particular wanted a vibrant yellow as the main colour for the site.
After searching for shades of yellow used in children's products I came across the image below on the children's sectio of a [lifestyle site](https://www.trendbible.com/colour-direction-2020-baby-kids-spring-preview/):

![Colour palette](/wireframes/colour-choices.jpg)

This was then used as my main colour palette.

Font colours were decided using [Juicy Studio](http://juicystudio.com/services/luminositycontrastratio.php#specify)
![Font colours](/wireframes/font-colours.jpg)

:framed_picture: **Image sources**

All images have been taken from the free site [Needpix](https://www.needpix.com/), with the exception of the known cartoon images, which have been taken from [Stick PNG](https://www.stickpng.com/)

Needpix images “can be freely used by anyone for any purpose, whether commercial or non-commercial”. [T&Cs](https://www.needpix.com/about)

Stickpng allows use of its images for “non commercial personal projects”. [T&Cs](https://www.stickpng.com/tos)

Images were uniformly resized using Gimp.

:sound: **Audio**

Audio files were recorded by my very patient mum and dad. 

Files were edited to a consistent volume and white noise reduced using Audacity.

### :clipboard: Wireframes
---
The site was designed with a mobile-first approach. 

I decided to use the same layout for both mobile, tablet and desktop as the main 'game display' should be the focal
point for all devices. 

Therefore, the only real difference in design is the menu which is a horizontal nav bar for larger devices, and a collapsed menu icon with modal for smaller devices.

[Wireframe document can be seen here](/wireframes/letter-bee-wireframes.pdf)


:bulb: **Deviation from wireframe**
* Footer
    * This wasn't originally included in the design, but during development I realised that I would want to have a way for users to contact me

* Honeycomb background
    * The background effect wasn't included in the orginal scope. I felt that the page looked too 'bare' with the large expanse of colour surrounding the game display div, and wanted to add some relevant detail.

* Moving options box from page to modal
    * I decided to keep all options settings inside a separate modal, rather than having some options displayed on the page (as in the wireframe). I felt this looked a lot cleaner and allowed the majority of the page to be devoted to the game display.

* Removal of 'Discover' and 'Explore' modes
    * Here's the big one... As the last page I worked on, the 'Explore' page went through many, many iterations.\
    Whilst I was able to get the functionality working how I wanted I was never satisfied with the API I was using (because the perfect one for me just doesn't exist!). During the page's development, I worked with (and discarded) the following APIs:

API | Issue | Attempted solution
--------------------|------------|----------------------
[Oxford Dictionary](https://developer.oxforddictionaries.com/) | Not compatible with Javascript/JQuery | Find another API
[Merriam-Webster](https://dictionaryapi.com/) | The images that are provided as part of the API are not consistently present. Some words have an attached image, many do not. Images that are present are not of great quality | Use of the Unsplash API for images
[Merriam-Webster](https://dictionaryapi.com/) | No 'random word beginning with...' functionality | Creation of own wordlist on Wordnik API (which has a random search function)
[Merriam-Webster](https://dictionaryapi.com/) | As an American site, the word spellings and pronunciations were (unsurprisingly!) American. |  Nothing I could do about this but try and accept it or use a different dictionary API (I attempted both of these...)
[Unsplash](https://unsplash.com/developers) | API was very easy to use and images were of great quality. However, consistency between dictionary definition and image shown was poor. For example, the word 'needle' might show an image of a needle for sewing, and a dictionary definition for a needle on a dial. | I tried searching for the image using the definition rather than the word itself but the connection between image and word was still more bad than good.
[Wordnik](https://developer.wordnik.com/) | I created extensive word lists for each letter in order to ensure they were words that would have an obvious image attached and a child-friendly definition. However, it turns out the ability to search your own word lists using the API has now been deprecated (although it still features in the documentation). | No solution but big lesson learnt: Try API with a small sample before spending hours creating word lists...
[WordsAPI](https://rapidapi.com/dpventures/api/wordsapi) | This API has a random word search function but no way of ensuring the words are child-friendly or that they have a definition and an example of usage. There is also no pronunciation option. | No solution except to try another dictionary API...

**Final attempt**\
My last desperate attempt at getting this page working as I wanted was to use the word lists I had created with the Wordnik API, and save them as a JSON file. I then used these word lists to select a random word beginning with my chosen letter and look it up in the Merriam-Webster dictionary API and match it with an image from the Unsplash API.\
This solution also 'worked' in terms of functionality but I was (to be perfectly honest) ashamed of it in all its Frankenstein glory. Words were spelt with a British spelling, defined and pronounced with American spellings/pronunciations and paired with an image that sometimes obviously matched, and other times didn't.

Removing the entire page was a bitter pill to swallow, but it pretty clearly failed my original user stories so had to be done. On a personal note, it did give me (if nothing else) a very thorough lesson on working with APIs and has also given me several pointers for what additional research to do in future before I start work on it.

As the 'Discover' page didn't really work as a standalone page, that was sadly removed as well.

## :construction: Development Process

### :unlock: Technologies Used
---
**Languages**
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**Libraries & Frameworks**
* [Bootstrap](https://getbootstrap.com/)
* [Font Awesome](https://fontawesome.com/)
* [Google Fonts](https://fonts.google.com/)
* [jQuery](https://jquery.com/)
* [Popper](https://popper.js.org/)

**Tools**
* [Audacity (audio editing)](https://www.audacityteam.org/)
* [Gimp (image editing)](https://www.gimp.org/)


### :computer: External Sources Used
---
* Navbar
    * The navbar is taken from [Bootstrap](https://getbootstrap.com/docs/4.0/components/navbar/) and styled in keeping with the website
    * Additional functionality (to have the burger icon transition to a cross) was taken from this [site.](https://mdbootstrap.com/docs/jquery/navigation/hamburger-menu/)

* Audio
    * Adding the audio and the delay before it begins playing was carried out with guidance from these sources:\
        * [Adding audio](https://medium.com/@ericschwartz7/adding-audio-to-your-app-with-jquery-fa96b99dfa97)
        * [Delaying start of audio](https://www.codespeedy.com/play-audio-with-time-delay-javascript)

* Honeycomb background
    * The CSS for the background effect was taken from [here.](https://leaverou.github.io/css3patterns/#honeycomb)

* Loading gif
    * The loading gif design and code was found on [this site](https://smallenvelop.com/display-loading-icon-page-loads-completely)

* Full screen 
    * Code for changing to full screen layout taken from [W3schools](https://www.w3schools.com/howto/howto_js_fullscreen.asp)

### :bug: Bugs
---
1. The first major bug encountered caused an 'on click' build up. When the function was called to display the next letter, it would first be called once, and then on the next click it would be called twice and then three times...

This took quite a while to find a solution but in the end it was a relatively simple case of turning the click handler off:

**Original code**
```javascript
$('audio#play--confirmation__audio').on('ended', function() {
  resetDisplay();
  playLetterBee.checkGameProgress();
});
```

**Modified code**
```javascript
$('audio#play--confirmation__audio').on('ended', function() {
  $('audio#play--confirmation__audio').off('ended');
  resetDisplay();
  playLetterBee.checkGameProgress();
});
```

2. The second bug appeared during the testing phase. 

The purpose of this function is to pass an array between the play/learn pages (in either direction). I had originally stored the values in the URL (see code below). However, whilst this worked in development mode, it caused a 404 error in the deployed version.\
The solution was to use session storage instead.

**Original code**
```javascript
function goToLearnMode() {
  window.location.href = `learn.html?${playLetterBee.playIncorrectArray}`;
}
```
```javascript
$(window).on('load', function() {
  $(".se-pre-con").fadeOut("slow");
  let queryString = location.search.substring(1);

  if (queryString.length >=
    1) { //Checks whether url has substring assigned by play page
    let lettersToLearn = queryString.split(",");
    initialiseLearn(lettersToLearn);
  };
});
```

**Modified code**
```javascript
function goToLearnMode() {
  sessionStorage.setItem('playArray', playLetterBee.playIncorrectArray);
  window.location.href = `learn.html`;
}
```
```javascript
$(window).on('load', function() {
  $(".se-pre-con").fadeOut("slow");
  if (sessionStorage.getItem("playArray") !== null) {
  let playArray = sessionStorage.getItem('playArray');
    initialiseLearn(playArray);
    sessionStorage.clear();
  };
});
```

3. My third tricky bug was as a result of the fix for bug two. It took me a long time (longer than it should) to fix, and resulted in many unnecessary commits (resulting in me understanding - too late - why git branches are a good idea). It was particularly frustrating as it didn't cause any issues in the Gitpod preview, and was only apparent when live.

Anyway, the solution... When I was previously using the URL to pass my arrays, I had an additional line of code further down to then remove the array from the URL.

**Original code**
```javascript
window.history.replaceState({}, document.title, "/" + "learn.html");
```
This didn't affect my previewed version, but in the live version removed part of the pathname which obviously caused many issues. 
The modifed code simply doesn't include this line.

4. This wasn't exactly a bug, but rather a workaround. During testing, I discovered that Firefox doesn't allow autoplay unless the page has been interacted with first. This meant that when the user navigates from play mode directly to learn mode, the code was stopped by the autoplay blocker.\
To fix this, I have added an additional modal that appears on page load and then runs the code upon the user's acceptance. 

5. During testing, I found that the navigation between the play and learn pages via button click wasn't working in Safari (although there were no issues with the navbar).\
The solution for this was suggested to me by a peer on Slack.

**Original code**
```javascript
window.location.href = "index.html";
```

**Modified code**
```javascript
document.location = "index.html";
```

6. I also discovered that the ABeeZee font doesn't display on Safari. I tried to fix this using [Google webfonts helper](https://google-webfonts-helper.herokuapp.com/fonts/montserrat-alternates?subsets=latin) and uploading the fonts to be stored in my assets folder. However, this made no difference in Safari and I felt it was an unnecessary use of storage so reverted to the original google import.\
It's frustrating that the font doesn't display on Safari as it was chosen for its suitability for a letter-learning game for children. However, it is a minor issue in the overall game.

## :test_tube: Testing    

### :child: Toddler Tests
---
Aside from frequent testing in Google Dev whilst building the site, the first 'live' tests were conducted by the inspiration for the project: my son Eddie.\
Two-year-olds don't make the best software testers as they lack the necessary logic and they also don't really care whether your project is a success or not. However, I did learn that:
* the game is appropriate and enjoyable for the target age group
* my child definitely likes pictures of vehicles above all else
* wrestling your phone out of a small child's determined grip is easier said than done as they are surprisingly strong

However, as haphazard as this testing was, it was a positive result for my third user story:\
*As a small child, I want something fun and interactive that shows me images that I will easily recognise so that I can relate the game to my experience of every day life.*

### :family_woman_girl: 'Mum-friend' Tests
---
I also recruited some 'mum-friends' to carry out testing alongside their children.

The general feedback was good, with the only suggestions for improvement being:
* Not all images were recognisable to their children 
* One tester did not like the mix of photos and cartoon images (would prefer all to be the same style)

Whilst this feedback has not resulted in any changes to the code, it has given me some thoughts for future development.\
The feedback also satisfied user stories 1 and 2, with the 'audio off' option being mentioned by several users!

### :people_holding_hands: Peer Tests
---
I submitted by project to the peer-review process on Code Institute's Slack platform.

Again, feedback was good, with the main suggeestion for improvement being:
* <em>"Because your project is so well executed I will pass on something that I did not really grasp until much later in the course which is that duplicating code should be avoided in an ideal world."</em>

This feedback is something which I have come to understand during the process of creating this project and will be much more mindful in future projects. 

My strategy for this site was to create working functions for the 'play' mode, and then replicate this for the 'learn' mode. In hindsight, it would have been more 'DRY' if I had then amended the 'play' functions to work for 'learn' mode.

### :sparkle: Jasmine Tests
---
The main function that I felt unable to test manually, was the function to create the 'distractor' letters in 'play' mode. 

In order to test this, I created a jasmine test which showed no errors.

Outcome of test can be viewed [here](https://jess-bennett.github.io/letter-bee/testing/jasmine.html)

### :memo: Manual Tests
---
Manual testing was carried out on all devices available to me:
* Google Dev Tools:
    * Mobile device
    * iPad vertical
    * iPad horizontal
    * desktop

* Published site:
    * Samsung Galaxy S8
    * desktop

* Browser
    * Chrome
    * Edge
    * Firefox
    * Safari (Using [Lambdatest](https://www.lambdatest.com/))
    * Opera 

All tests produced good results with the following exceptions:
* Issues were found with autoplay in Firefox - see [Bug 4](#bug-bugs) for details and solution
* Navigation between play and learn pages didn't work in Safari - see [Bug 5](#bug-bugs) for details and solution
* ABeeZee font not displaying in Safari - see [Bug 6](#bug-bugs) for details

Full testing-frame can be found [here](/testing/manual-testing.pdf)

### :heavy_check_mark: Online Validators
---
HTML and CSS code was run through the W3C validator tools and JS was run through JSHint

The [HTML validator](https://validator.w3.org/) gave one error:
* element div not allowed as child of element button in this context.

The piece of code with this error was taken directly from:
https://mdbootstrap.com/docs/jquery/navigation/hamburger-menu/

An attempt was made to change the div element to a span, in order to satisfy W3C requirements, however the icon then didn't display. I have left this error in place as it doesn't seem to have any detrimental effect on the site.

The [CSS validator](https://jigsaw.w3.org/css-validator/) gave no errors but two categories of warnings:
* unknown vendor extension/pseudo-class/pseudo-element
    * No action – advice taken from: https://stackoverflow.com/questions/52490004/what-are-all-of-these-w3c-css-validation-warnings-about
* same color for background-color and border-top-color
    * No action - the border colour and background colour are intended to be the same colour

Full testing-frame can be found [here](/testing/html-css-testing.pdf)

[JSHint](https://jshint.com/) gave no errors, just some warnings about unnecessary/missing semicolons which was rectified.

## :flight_departure: Deployment   

Letter Bee was developed on GitPod and is hosted on GitHub

**The site was deployed using the following steps from the GitHub site:**
1. Navigated to my [Letter Bee repository](https://github.com/jess-bennett/letter-bee)
1. Selected 'Settings'
1. Scrolled to 'Github pages'
1. Selected 'Master Branch' and saved my choice

**To clone Letter Bee from GitHub:**
1. Navigate to [Letter Bee repository](https://github.com/jess-bennett/letter-bee)
1. Above the list of files, click the green 'Code' button
1. Copy the URL under 'Clone with HTTPS' using the clipboard icon
1. Open Git Bash
1. Change the current working directory to the location where you want the cloned directory
1. Type ```git clone```, and then paste the URL you copied earlier.
```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```
7. Press 'Enter'

## :clapper: Credits

* Loading gif\
[Smallenvelop.com](https://smallenvelop.com/display-loading-icon-page-loads-completely)

* Animation for hamburger icon\
[MDBootstrap](https://mdbootstrap.com/docs/jquery/navigation/hamburger-menu/)

* Honeycomb background\
[Leaverou.github](https://leaverou.github.io/css3patterns/#honeycomb)


### :movie_camera: Media
---

* Photographs\
[Needpix.com](https://www.needpix.com/)

* Cartoon images\
[Stickpng.com](https://www.stickpng.com/)

### :trophy: Acknowledgements
---
In no particular order, I would like to thank:

:star: My darling, little Eddie - for inspiring this project.

:star: My wonderful husband, Tom - for general patience and enthusiasm (even when he has no idea what I'm talking about).

:star: My parents, Jane and Chris - for the audio and for following my somewhat anal instructions without complaint.

:star: My mentor, [Simen](https://github.com/Eventyret) - for the incredible level of support and guidance.

:star: [Geomint](https://github.com/Geomint) - for a great demonstration of how to level up your README.

:star: The Slack community - for answering many questions, and reviewing my project.

:star: Code Institute - for getting me to this point.