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
              [:closed_lock_with_key: APIs](#closed_lock_with_key-apis)\
\
              [:computer: External sources used](#computer-external-sources-used)\
\
              [:bug: Bugs](#bug-bugs)

## :sparkles: UX

I was inspired to create this site by my 2-year-old son (Eddie) who loves to be tested on the letters of the alphabet.

Alphabet products for small children tend to be quite traditional: 'A is for apple :apple:, B is for ball :soccer:...'. I wanted to create something that extends this concept using objects that children will be familiar with and enthusiastic about. In particular, vehicles ('A is for ambulance :ambulance:, F is for fire engine :fire_engine:, P is for police car :police_car:') and cartoon characters ('B is for Bing :rabbit:, X is for Xuli :woman_pilot:') feature quite heavily (although, disclaimer: apple and ball do also make an appearance)!

It's also intended as a shameless attempt to lessen the guilt that most parents feel about using/relying on screen time. We all have the best of intentions, but sometimes a five-minute break is needed and if you're going to hand the parenting over to an electronic device, at least you can tell yourself you're giving them an educational opportunity!


I wanted the site to have a learning aspect as well as a playing aspect and have chosen to use a dictionary API to further extend potential learning for older children.

### :books: User Stories
---
* :woman: As a parent, I want: 
    * an educational game that my child can play to learn and practise the letters of the alphabet. 
    * it to be quick and easy for me to set up. 
    * the level of difficulty to be customisable for my child. 
    * the option to turn any sound off! 
    * different modes to allow me to play with my child or allow them to play independently. 

* :woman_teacher: As an educational professional, I want:
    * a game that gives constructive feedback, but doesn't focus too heavily on ‘right or wrong’. I.e. an incorrect answer given should be an opportunity to learn, rather than give a sense of having failed. 

* :child: As a small child, I want: 
    * something fun and interactive that shows me images that I will easily recognise. 
    * the game-length to be limited in some way so that I don’t get bored and start exploring the internet by myself(!).

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

* Removal of options from 'Discover' page
    * The original wireframe included an options box for each of the html pages. However, with the discover page this isn't actually relevant as there is no audio to switch on/off and no reason to reduce the number of letters/options being displayed.


## :construction: Development process

## :closed_lock_with_key: APIs

In the original specification, I had decided to use a dedicated dictionary API to provide an image, definition, example sentence and audio pronunciation for the selected word on the 'Explore' page.
The API I initially chose was from [Merriam-Webster](https://dictionaryapi.com/). However, as I started to use it, I realised there were some issues with it which made it less suited to my application. 
 1. **As an American site, the word spellings and pronunciations were (unsurprisingly!) American.**\
    I felt that as my site is a British site, focussing on learning new words, it would be confusing to a small child to have words spelt and pronounced differently, and perhaps (to them) unrecognisably.

1. **The images that are provided as part of the API are not consistently present. Some words have an attached image, many do not.**\
    As the site is largely about visual learning, this was a big problem.

1. **When images were provided, the quality wasn't great.**\
    I spent quite some time collating and editing the images for the 'Play/Learn' pages of the site, and didn't want to have the overall look of the site let down by poor quality images.


I looked through several other dictionary APIs to try and find one that fit my new criteria:
* Must have option for British spelling/pronunciation.
* Must have associated images for majority of words.

As it turns out, this doesn't exist!

So, I decided to use two separate APIs to fullfil my requirements:

1. [WordsAPI](https://rapidapi.com/dpventures/api/wordsapi) for the words/definition/pronunciation
2. [Unsplash](https://unsplash.com/developers) for the associated images

**WordsAPI**

Whilst I managed to find an API that fit my criteria, it took a great deal of further trial and error to find one that fit. I spent quite some time creating the functionality needed using the [Wordnik API](https://developer.wordnik.com/). I had almost finalised a working solution when I discovered that many of the endpoints described in the documentation have actually been deprecated. So, it was back to the drawing board and I settled on using WordsAPI.

The key feature in this API is its ability to generate a random word that starts with a given letter. Other parameters that were included in the search function are:

* frequencyMin
    * This optional parameter allows you to specify a value between 1.74 and 8.03 in order to generate words that are seen less or more frequently, respectively.\
     Initially I set this to a value of '7' (as I wanted easily recognisable words). However, this quickly caused issues as searching for words beginning with 'X' with this minimum frequency created an infinite loop, as there are no letter X words with such a high frequency!\
    To solve this, I added additional key/value pairs to specify the minimum frequency for each letter. Values were chosen using the [Wikipedia entry on letter frequency](https://en.wikipedia.org/wiki/Letter_frequency).
    ![Letter Frequency](/wireframes/letter-frequency.jpg)

*  hasDetails
    * This optional parameter has several possible values. I chose to only generate words that have an associated definition and example of usage.

**Unsplash API**

The Unsplash API requires an API key which I registered for.\
Requests are currently limited to 50 per hour whilst in the development stage. This can be increased to 5,000 when in production.

[The API guidelines](https://help.unsplash.com/en/articles/2511245-unsplash-api-guidelines) require photo credit to be displayed under all images. This has been placed at the bottom of the modal on the Explore page.

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

* Word resizing
    * As word length on the 'Explore' page is undetermined, it was necessary to find a way to dynamically resize the font according to word length. Solution was taken from [here.](https://codepen.io/jsstrn/pen/mMMmZB)

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

    