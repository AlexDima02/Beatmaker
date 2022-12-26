// We want to create a loop through each pad when i press the play button
// When we loop each pad needs to have a scale(1)




class drumPad{

    constructor(){

// Declare all pads and the play button -
// Now we want to click play button and select in the same time each of the pad -
// When we loop over the pads we want to add a scale(1) -  
// Click button will execute the instructions from the next functions- 
// Function 1 will execute the repeat functionality for each pad-
// Function 2 will start the first Function and give it a functionality on how fast it can repeat each pad-
// Stop functionality -
// Declare the stop button -
// When the stop button is clicked the interval will be cleared and the color of each pad will be removed -
// When each option from the select dropdown is clicked, it would select our desired source audios based on the values-
// To change the tempo, it needs to input with the slider a value that controls the rythm and output the value into the bpm slider
// Declare bpm slider-
// Create a function that updates the bpm output and based on that update the input value-
// Create a function that updates that bpm value once the click on the slider has been released, this allows us to just update the input value not starting the beatmaker once we change the value-
// Inside the last function we declared the play btn to start the function once the button has been activated-
// Event listeners were put on the bpm slider once we input a value with the slider and once when we release the click to update the bpm property-
// Make the button to be active when the input value has been updated in order to start the beatmaker with the new tempo-
// Create save project functionality - this allows us to save the colors of the drumpads and the sounds that are already activated
// When a pad is active, he has a number on it and that number is stored into an array that is saved into the local storage

        this.pad = document.querySelectorAll('.pad');
        this.playBtn = document.querySelector('.play-btn');
        this.index = 0;
        this.bpm = 150;
        this.bpmInput = document.querySelector('.bpm-interval');
        this.isPlaying = null;
        this.stopBtn = document.querySelector('.mute-btn');
        this.eraseBtn = document.querySelector('.erase-btn');
        this.saveBtn = document.querySelector('.save-button');
        this.loadBtn = document.querySelector('.load-button');
        this.newBtn = document.querySelector('.new-button');
        this.kickAudio = document.querySelector('.kick-sound');
        this.snareAudio = document.querySelector('.snare-sound');
        this.hihatAudio = document.querySelector('.hihat-sound');
        this.selectAudio = document.querySelectorAll('.drum-tonalities');
        this.popupContainer = document.querySelector('.popup-background');
        this.loadMenu = document.querySelector('.load-container');
        this.closeLib = document.querySelector('.close-container');
    
// Project menu and background

        this.backMenu = document.querySelector('.project-menu-background');
        this.inputMenu = document.querySelector('.project-menu');
        this.closeProj = document.querySelector('.close-button');
        this.setsName = document.querySelector('.drumpads-input');
        this.submitBtn = document.querySelector('.input-sets');

        this.savedPads = [];
        
    }

    // Function that selects the coloured pads- 
    // This function can input all the active pads already coloured and with the desired sound into the local storage-
    // We need to save drumpads order by giving to every coloured pad a number of its position-
    
// Input method

    activePad(e){

      this.classList.toggle('active');
      this.classList.toggle('saved');
    
    
        
        
        const padNr = e.target.classList[2];
        const name = e.target.classList[0];
        const state = e.target.classList[4];
        

        const padObj = {name, state, nr: padNr};

        

    
        
// Save all the pads with only the class of active
        
        
        
        if(e.target.classList.contains('saved')){

            beatMaker.savedPads.push(padObj);

            
            
            


        }else{

// Push the objects without state property and they will no longer be readable
// When those pads are deactivated, make them colorful only if two properties are existent
// Avoid dupliicates

            beatMaker.savedPads.push(padObj);
            
            // const newArr = beatMaker.savedPads.filter((object) => {

                
            //     object !== object.state;
                

            // });
    
            // console.log(newArr);
        }
 
       

            // const newArr = beatMaker.savedPads.indexOf((object) => {

            //     clearContainer.push(padObj);
            //     return object.state === undefined;
                

            // });

            // console.log(newArr);

       
    }



// Save method

    saveToLocal(padObj){

    // We need to add a statement that says:
    // Introduce them into an array
    // Create an object and then introduce him into the array everytime we click on save
    
    
     let save;
     
       
    // // // Check if it is something in the array

    if(localStorage.getItem('pads') === null){

        save = [];



    }else {


        save = JSON.parse(localStorage.getItem('pads'));

        
    }

    
    
    
    
    
    localStorage.setItem('pads', JSON.stringify(beatMaker.savedPads));  
    
               
    }
 


// Output method

    loadSounds(){

    // The second method needs to do the next things:
    // Take all the active objects from the array and display them once the load btn is pressed   
    // For loop that check unitl the last object from the array
        // Store all the objects inside a variable
    // If an item from the array is active, try to add the correct color for that item(OBJECT)
       
         
    
     // All the objects from the array will be transfred to the preview containers inside the load project
        // We select each of the array saved in the load project by the number of the clicked pad
            // This means the pressed button would have the class of the pad's nr property 
        // After it was clicked, we loop over each of the element inside the array and select each of them with the nr of the button
        // Then we can select every element with the class id of the btn
        // We can make another loop and say for every element inside the pad node color the one who has the specific value declared in the array
        // Make input clear after the submit button was clicked

        
        let save;
        let check;
        
    
        //    Background and library menu

       beatMaker.popupContainer.classList.add('active');
       const popup = beatMaker.popupContainer.children[0];
       popup.classList.add('active');
    
                         
    }




    limitExceeds(save){

            let limitLength = 7;
            let exceedsLimit = false;
    
            if(save.length > limitLength) {
                
                exceedsLimit = true;
                console.log(2);
            }
            
            return exceedsLimit;
            
           
    }

// New project functionality

    getLocal(){

        // Takes all the element from the local storage
        // Takes an input value and store it 

       
       
       
       const name = beatMaker.setsName.value;

       const palette = document.createElement('div');
       palette.classList.add('custom-palette');

       const title = document.createElement('h4');

       title.innerText = name;
       
       const paletteBtn = document.createElement('button');
       paletteBtn.classList.add('pick-palette-btn');
       paletteBtn.innerText = 'Select';
          
       let drumpadsSet = JSON.parse(localStorage.getItem('pads'));

       paletteBtn.addEventListener('click', () => {

           console.log(drumpadsSet);
    
        // Close the popup

            beatMaker.popupContainer.classList.remove('active');
            const popup = beatMaker.popupContainer.children[0];
            popup.classList.remove('active');

           for(let value of drumpadsSet){

            beatMaker.pad.forEach((pads) => {

                if(pads.classList.contains(value.nr) && pads.classList.contains(value.state)){

                    pads.classList.toggle('active');



                }



            });


       }
        
       });
       
       // Append to the load project menu

       palette.appendChild(title);
       palette.appendChild(paletteBtn);
       beatMaker.loadMenu.appendChild(palette);

       
        

    }


    closeProjectMenu(){

        beatMaker.backMenu.classList.remove('active');
        const popup = beatMaker.backMenu.children[0];
        popup.classList.remove('active');
        



    }


    erase(){

        
        const allPads = this.pad
       
        allPads.forEach((pads) => {

            

                if(pads.classList.contains('active')){

                    pads.classList.remove('active');
                    


                }else if(pads.classList.contains('default') || this.isPlaying) {

                    pads.classList.remove('default');
                    
                    clearInterval(this.isPlaying);
                    this.isPlaying = null;
                    this.index = 0;
                    
                }


                
                
        });
        





        


        

    }
    

    repeat(){
       

        let repeatIndex = this.index % 8;
        const activeBars = document.querySelectorAll(`.b${repeatIndex}`)
        this.index++;
        console.log(repeatIndex);
        console.log(activeBars);
        console.log(this.bpm);
        


            activeBars.forEach((bar) => {

                bar.style.animation = "playTrack alternate 0.3s ease-in-out 2";
               
                
                // Default behaviour of the drumpads that are not active

                if(!bar.classList.contains('active')){

                    bar.classList.add('default');
                    


                }else {

                    bar.classList.remove('default');
                    


                }


                // Check if it is any pad active

                if(bar.classList.contains('active')){

                    // Check if it is kick-pad

                    if(bar.classList.contains('kick-pad')){

                        this.kickAudio.play();
                        this.kickAudio.currentTime = 0;
                       
                    }

                    // Check if it is snare-pad

                    if(bar.classList.contains('snare-pad')){

                        this.snareAudio.play();
                        this.snareAudio.currentTime = 0;
                       

                    }

                    // Check if it is hihat-pad
                    
                    if(bar.classList.contains('hihat-pad')){

                        this.hihatAudio.play();
                        this.hihatAudio.currentTime = 0;
                        

                    }



                }

            
                
           

            });


        





    }

  // We make the start function in order to match the bpm functionality and not raise up the speed when click on the start button
    start(){

    // We establish the formula of x bpm per minute depending on the desired bpm

    const interval = (60/this.bpm) * 1000;

        

        if(!this.isPlaying){
        
        this.isPlaying = setInterval(() => {


            this.repeat();
            
            
            

        }, interval)


        
    }




    }

    


    mute(){


        if(this.isPlaying){


            clearInterval(this.isPlaying);
            this.isPlaying = null;
            


        }


    }

// We change of each category pad according to the value of each option inside the selector

    changeSound(e){

        const selector = e.target.value;
        const audioSet = e.target.name;
        
        // Put in the option value my desired sounds to match audios sources
        // Matched the source of the audio with the value of each option from the entire selector
        // Then matched name of each selector with the correct audio
       


        switch(audioSet){

            case 'kick-selector':
                this.kickAudio.src = selector;
            break;

            case 'snare-selector':
                this.snareAudio.src = selector;
            break;

            case 'hihat-selector':
                this.hihatAudio.src = selector;
            break;



        }



       
        
        

    }

    slideTempo(e){

        // This is the ouput that will display our desired bpm

        const bpmOutput = document.querySelector('.bpm');
        this.bpm = e.target.value;
        bpmOutput.innerHTML = e.target.value;
        
        console.log(this.bpm);






    }

    updateTempo(){


        // This will change the tempo once the click on the slider is released and everything about the bpm will be updated

        clearInterval(this.isPlaying);
        this.isPlaying = null;

        const playBtn = document.querySelector('.play-btn');
        console.log(playBtn);
        if(playBtn.classList.contains('active')){


            this.start();
            console.log(this.bpm);
            console.log(playBtn);

        }

    }



    
    




}




const beatMaker = new drumPad();



// Event Listeners

beatMaker.playBtn.addEventListener('click', () => {

    
    
    beatMaker.start();
    

});

beatMaker.stopBtn.addEventListener('click', () => {

    beatMaker.mute();


});

beatMaker.eraseBtn.addEventListener('click', () => {

    beatMaker.erase();


});


beatMaker.selectAudio.forEach((select) => {

    
    select.addEventListener('change', (e) => {


        beatMaker.changeSound(e);
        

    });



});

beatMaker.bpmInput.addEventListener('input', (e) => {

    beatMaker.slideTempo(e);
    

});

beatMaker.bpmInput.addEventListener('change', () => {


    beatMaker.updateTempo();

});

// Save all the selected pads

beatMaker.saveBtn.addEventListener('click', (padObj) => {

    beatMaker.saveToLocal(padObj);



});


beatMaker.loadBtn.addEventListener('click', () => {


    beatMaker.loadSounds();
   

});

// Closing library menu

beatMaker.closeLib.addEventListener('click', () => {

    beatMaker.popupContainer.classList.remove('active');
    const popup = beatMaker.popupContainer.children[0];
    popup.classList.remove('active');

});

// New project menu 

beatMaker.newBtn.addEventListener('click', () => {

    beatMaker.backMenu.classList.add('active');
    const popup = beatMaker.backMenu.children[0];
    popup.classList.add('active');


});

// Submiting the entire pad

beatMaker.submitBtn.addEventListener('click', () => {

    beatMaker.getLocal();
    beatMaker.setsName.value = '';
    beatMaker.backMenu.classList.remove('active');
    const popup = beatMaker.backMenu.children[0];
    popup.classList.remove('active');
    let reseted = JSON.parse(localStorage.getItem('pads'));
    reseted = localStorage.clear();

});



// Closing save project menu

beatMaker.closeProj.addEventListener('click', beatMaker.closeProjectMenu);



// After the ending of each pad animation, start again the same animation style

beatMaker.pad.forEach((pads) => {

    // What to do after i click on a specific pad

    pads.addEventListener('click', beatMaker.activePad);


    // What to do after the end of the animation
    pads.addEventListener('animationend', function(){

        this.style.animation = '';
        


    });
    

});