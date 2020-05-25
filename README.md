# Flappi byrd


<img src="/graphics/game.png" alt="game overview" width="275px" height="425px" />

LIVE :video_game:
Test out the game ()

## Installation
##### Clone this repo 
* ``` $ git clone https://github.com/henricbjork/GameOver.git```
##### Install dependencies 
* ``` $ npm install tone ```
##### Start up your local server

## Pull request Log 
You'll find past pull request [here](https://github.com/Juljulia/GameOver/blob/master/PULLREQUESTLOG.md)

## Testers 
*
*

### Code review 
by [Bernhard Stedt](https://github.com/Vehx) and [Marcus Augustsson](https://github.com/MarcusIsCode)

- When installing to test the game npm install worked.
- [sketch.js:2](https://github.com/henricbjork/GameOver/blob/44f974f0f05155c9668b0c3d4a1572a84710bb5c/sketch.js#L2) cnv variabel not necessary for creatcanvas in setup().
- [sketch.js:1-21](https://github.com/henricbjork/GameOver/blob/44f974f0f05155c9668b0c3d4a1572a84710bb5c/sketch.js#L1-L21) Long list with variabels some more comments describing what they are used for would be helpful.
- [sketch.js:108-187](https://github.com/henricbjork/GameOver/blob/44f974f0f05155c9668b0c3d4a1572a84710bb5c/sketch.js#L108-L187) Seperating functions into a seperate file to make it more readable.
- [sketch.js:171-187](https://github.com/henricbjork/GameOver/blob/44f974f0f05155c9668b0c3d4a1572a84710bb5c/sketch.js#L171-L187) The functions isResetButtonClick & isStartButtonClick have same code and can be reused.
- [pipe.js:38-41](https://github.com/henricbjork/GameOver/blob/44f974f0f05155c9668b0c3d4a1572a84710bb5c/pipe.js#L38-L41) Awesome way to make sure the image ratio stays correct.
- [index.html:10-16](https://github.com/henricbjork/GameOver/blob/44f974f0f05155c9668b0c3d4a1572a84710bb5c/index.html#L10-L16) Okay to use css in head when it's not much styling but generally preferred to use a seperate file.
- [bird.js:10-11](https://github.com/henricbjork/GameOver/blob/44f974f0f05155c9668b0c3d4a1572a84710bb5c/bird.js#L10-L11) If you use the constructor to set height and width the bird class can be more flexible for other options like a smaller size.
- [bird.js:13](https://github.com/henricbjork/GameOver/blob/44f974f0f05155c9668b0c3d4a1572a84710bb5c/bird.js#L13) Using a global variable makes it harder to follow the code, sending in the sprite in the constructor would make it easier.
- You have written efective code that needs few lines to work well, awesome job!
