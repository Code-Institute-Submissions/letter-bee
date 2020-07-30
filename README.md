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
              [:rainbow: Surface Plane](#rainbow-surface-plane)\
\
              [:clipboard: Wireframes](#clipboard-wireframes)\
\
[:construction: Development process](#construction-development-process)\
\
              [:unlock: Technologies Used](#unlock-user-stories)\
\
              [:computer: External sources used](#computer-external-sources-used)\
\
              [:bug: Bugs](#bug-bugs)\
\
[:test_tube: Testing](#test-tube-testing)\
\
[:flight_departure: Deployment](#flight-departure-deployment)\
\
[:clapper: Credits](#clapper-credits)\
\
              [:movie_camera: Media](#movie-camera-media)\
\
              [:trophy: Acknowledgements](#trophy-acknowledgements)\

## :sparkles: UX

I was inspired to create this site by my 2-year-old son (Eddie) who loves to be tested on the letters of the alphabet.

Alphabet products for small children tend to be quite traditional: 'A is for apple :apple:, B is for ball :soccer:...'. I wanted to create something that extends this concept using objects that children will be familiar with and enthusiastic about. In particular, vehicles ('A is for ambulance :ambulance:, F is for fire engine :fire_engine:, P is for police car :police_car:') and cartoon characters ('B is for Bing :rabbit:, X is for Xuli :woman_pilot:') feature quite heavily (although, disclaimer: apple and ball do also make an appearance)!

It's also intended as a shameless attempt to lessen the guilt that most parents feel about using/relying on screen time. We all have the best of intentions, but sometimes a five-minute break is needed and if you're going to hand the parenting over to an electronic device, at least you can tell yourself you're giving them an educational opportunity!


### :books: User Stories
---
* :woman: As a parent, I want: 
    * an educational game so that my child can play to learn and practise the letters of the alphabet. 
    * customisable levels of difficulty to allow my child to use the game at each stage of development. 
    * the option to turn any sound off! 

* :woman_teacher: As an educational professional, I want:
    * a game that gives constructive feedback so that the child is continually motivated to learn.

* :child: As a small child, I want: 
    * something fun and interactive that shows me images that I will easily recognise so that I can relate the game to my experience of every day life. 

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

### :rainbow: Surface Plane
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

## :construction: Development process

### :unlock: Technologies used
---
**Languages**
* HTML
* CSS
* Javascript

**Tools & Libraries**
* jQuery
* Bootstrap
* Font Awesome
* Gimp (image editing)
* Audacity (audio editing)

### :computer: External sources used
---
* Navbar
    * The navbar is taken from [Bootstrap](https://getbootstrap.com/docs/4.0/components/navbar/) and styled in keeping with the website
    * Additional functionality (to have the burger icon transition to a cross) was taken from this [site.](https://mdbootstrap.com/docs/jquery/navigation/hamburger-menu/)

* Audio
    * Adding the audio and the delay before it begins playing was carried out with guidance from these sources:\
        * [Adding audio](https://medium.com/@ericschwartz7/adding-audio-to-your-app-with-jquery-fa96b99dfa97)
        * [Delaying start of audio](https://www.codespeedy.com/play-audio-with-time-delay-javascript)

* Passing array between pages
    * Using [this](https://lage.us/Javascript-Pass-Variables-to-Another-Page.html) site, I considered using local/session storage but felt the url suffix was a preferable solution as I only wanted the data held temporarily\
    

* Honeycomb background
    * The CSS for the background effect was taken from [here.](https://leaverou.github.io/css3patterns/#honeycomb)

* Loading gif
    * The loading gif design and code was found on [this site](https://smallenvelop.com/display-loading-icon-page-loads-completely)

* Full screen 
    * Code for changing to full screen layout taken from [W3schools](https://www.w3schools.com/howto/howto_js_fullscreen.asp)

### :bug: Bugs
---
The first major bug encountered caused an 'on click' build up. When the function was called to display the next letter, it would first be called once, and then on the next click it would be called twice and then three times...

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

## :test_tube: Testing    

## :flight_departure: Deployment   

## :clapper: Credits

### :movie_camera: Media
---
### :trophy: Acknowledgements
---