# Letter Bee

![Letter Bee](/wireframes/multi-device-mockup.jpg)

:honeybee: Welcome to Letter Bee! Thanks for coming to take a look.
Letter Bee is a children's game that aims to teach and test children on the letters of the alphabet. :honeybee:

## UX
---
I was inspired to create this site by my 2-year-old son (Eddie) who loves to be tested on the letters of the alphabet.

Alphabet products for small children tend to be quite traditional: 'A is for apple, B is for ball...'. I wanted to create something that extends this concept using objects that children will be familiar with and enthusiastic about. In particular, vehicles ('A is for ambulance, F is for fire engine, P is for police car') and cartoon characters ('B is for Bing, X is for Xuli') feature quite heavily!

It's also intended as a shameless attempt to lessen the guilt that most parents feel about using/relying on screen time. We all have the best of intentions, but sometimes a five-minute break is needed and if you're going to hand the parenting over to an electronic device, at least you can tell yourself you're giving them an educational opportunity!


I wanted the site to have a learning aspect as well as a playing aspect and have chosen to use a dictionary API to further extend potential learning for older children.

### User Stories

* As a parent, I want: 
    * an educational game that my child can play to learn and practise the letters of the alphabet. 
    * it to be quick and easy for me to set up. 
    * the level of difficulty to be customisable for my child. 
    * the option to turn any sound off! 
    * different modes to allow me to play with my child or allow them to play independently. 

* As an educational professional, I want:
    * a game that gives constructive feedback, but doesn't focus too heavily on ‘right or wrong’. I.e. an incorrect answer given should be an opportunity to learn, rather than give a sense of having failed. 

* As a small child, I want: 
    * something fun and interactive that shows me images that I will easily recognise. 
    * the game-length to be limited in some way so that I don’t get bored and start exploring the internet by myself(!).

### Strategy Plane

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

### Scope Plane

* **Play mode** - Alphabet game to match image with given letter
    * A letter will appear at the top of the screen “A is for…” and a selection of ‘real-life’ images will be show below for the child to select the correct match.
    * If a correct answer is selected, the image will highlight in green, and confirm “A is for… apple” and next question will appear
    * If incorrect answer is selected, image will highlight in orange (to show it’s been selected) and ‘Have another go’ will show on screen – repeat until correct answer is selected
    * Scoring – at end of game, the letters that were right first time will show in one collection with ‘Great, you know these letters really well’. 
    * Letters that had errors will show in second collection with ‘Would you like to practise these letters?’ and link to learning mode
    * Default mode (i.e. no options selected) – sound on, voice on, 26 letters (random order), 4 picture options

* **Learning mode** - Cycle through different letters and show all matching images
    * In this mode, the site will cycle through the alphabet with matching images for each letter
    * If directed to this page directly from the game, only the letters that need practice will be shown
    * Otherwise, parent will be given the option to limit which letters are shown

* **Discover mode** (Parent-interaction)
    * ‘I spy’ type mode where child is directed to find things that begin with the given letter. For each letter ‘How many things did you find that begin with the letter…’ – 0, 1, 2, 3 or more – with link to explore mode for each letter

* **Explore mode**
    * This will display data from the dictionary API for each letter selected

### Surface Plane

**Font families**

Fonts have been selected based on how well they align to the handwriting style that is taught to children in England. In particular, this means a loopy-style ‘k’ and a single-story ‘a’.
For general website content (i.e. headings, navigation etc):

[Montserrat Alternates](https://fonts.google.com/specimen/Montserrat+Alternates?category=Sans+Serif&preview.text_type=custom&query=montserr)
![Montserrat Alternates Font](/wireframes/montserrat-alternates.jpg)

For text directed at children (i.e. ‘A is for…’):

[ABeeZee (Regular Italic – as this features the loopy ‘k’)](https://fonts.google.com/specimen/ABeeZee?category=Sans+Serif&preview.text_type=custom&query=abeezee)
![ABeeZee Font](/wireframes/abeezee.jpg)


**Colour choices**

I wanted to use bright colours that would be engaging to young children, and in particular wanted a vibrant yellow as the main colour for the site.
After searching for shades of yellow used in children's products I came across the image below on the children's sectio of a [lifestyle site](https://www.trendbible.com/colour-direction-2020-baby-kids-spring-preview/):

![Colour palette](/wireframes/colour-choices.jpg)

This was then used as my main colour palette.

Font colours were decided using [Juicy Studio](http://juicystudio.com/services/luminositycontrastratio.php#specify)
![Font colours](/wireframes/font-colours.jpg)

**Image sources**

All images have been taken from the free site [Needpix](https://www.needpix.com/), with the exception of the known cartoon images, which have been taken from [Stick PNG](https://www.stickpng.com/)

Needpix images “can be freely used by anyone for any purpose, whether commercial or non-commercial”. [T&Cs](https://www.needpix.com/about)

Stickpng allows use of its images for “non commercial personal projects”. [T&Cs](https://www.stickpng.com/tos)

Images were uniformly resized using Gimp.

**Audio**

Audio files were recorded by my very patient mum and dad. 

Files were edited to a consistent volume and white noise reduced using Audacity.

### Wireframes

The site was designed with a mobile-first approach. 

I decided to use the same layout for both mobile, tablet and desktop as the main 'game display' should be the focal
point for all devices. 

Therefore, the only real difference in design is the menu which is a horizontal nav bar for larger devices, and a collapsed menu icon with modal for smaller devices.

[Wireframe document can be seen here](/wireframes/letter-bee-wireframes.pdf)


**Deviation from wireframe**
* Footer
    * This wasn't originally included in the design, but during development I realised that I would want to have a way for users to contact me

* Honeycomb background
    * The background effect wasn't included in the orginal scope. I felt that the page looked too 'bare' with the large expanse of colour surrounding the game display div, and wanted to add some relevant detail.

## Development process
---
### External sources used

* Navbar
    * The navbar is taken Bootstrap and styled in keeping with the website
    * Additional functionality (to have the burger icon transition to a cross) was taken from this [site.](https://mdbootstrap.com/docs/jquery/navigation/hamburger-menu/)

* Audio
    * Adding the audio and the delay before it begins playing was carried out with guidance from these sources:\
        * [Adding audio](https://medium.com/@ericschwartz7/adding-audio-to-your-app-with-jquery-fa96b99dfa97)
        * [Delaying start of audio](https://www.codespeedy.com/play-audio-with-time-delay-javascript)

* Passing array between pages
    * Using [this](https://lage.us/Javascript-Pass-Variables-to-Another-Page.html) site, I considered using local/session storage but felt the url suffix was a preferable solution as I only wanted the data held temporarily\
    

* Honeycomb background
    * The CSS for the background effect was taken from [here.](https://leaverou.github.io/css3patterns/#honeycomb)

### Bugs

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

    