## Introduction 

A simple browser-based Chrome Dino game built using HTML, CSS & JavaScript. Jump, dodge cactus obstacles & try to beat your highest score!



## Demo 

Open index.html in your browser & start playing instantly.



https://github.com/user-attachments/assets/fbb408bb-5a07-4474-9259-62b033dc25eb





## Features

           => Smooth dinosaur jump mechanics 
           => Random cactus generation
           => Collision detection system 
           => Score counter system
           => Best score saved using localStorage
           => Restart game button
           => Keyboard controls (Space/ Arrow keys)
           => Lightweight Canvas-based rendering



## Controls 

          Space / ↑	     Jump
           ↓	           Duck



## Project Structure

        project-folder/
                 index.html      # Main HTML file
                 style.css       # Game styling
                 script.js       # Game logic (Canvas)
                 dino.png
                 cactus1.png
                 cactus2.png
                 cactus3.png



## How It Works

          The game uses the HTML5 Canvas API to draw the dinosaur and obstacles.
          A game loop runs using requestAnimationFrame().
          Obstacles (cactus) are generated randomly using setInterval.
          Collision detection checks overlap between rectangles.
          Score increases over time.
          Best score is stored in browser memory using localStorage.


          
## Local Storage

    The game automatically saves your highest score:
    
    localStorage.setItem("highScore", highScore);
    
    Your best score remains even after refreshing the page.


    

## Setup

      I just wanted to let you know that there's no need for installation.
      
      Just:
      
      Download project
      Open index.html
      Play 🎮


      
## Future Improvements (Ideas)

           Running animation for a dinosaur
           Day/night cycle
           Sound effects (jump, hit, score)
           Increasing difficulty over time
           Mobile touch support
           Better pixel art sprites
 
 
 
 ## Built With
 
            HTML5
            CSS3
            JavaScript 


            
##  Author Note

      This project is a learning build inspired by the Chrome offline dinosaur game. It focuses on understanding game loops, collision detection
      and basic physics in JavaScript.

