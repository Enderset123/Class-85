canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

mars_img_array=["mars.jpg","Mar1.jpg","Mars2.jpg","Mars3.jpg","Mars4.jpg"];
random_number=Math.floor(Math.random()*5);
console.log(random_number);

background_image=mars_img_array[random_number];
console.log("background image= "+background_image);


rover_image="rover.png";
rover_x=10;
rover_y=10;
rover_width=100;
rover_height=90;

var background_imgTag,rover_imgTag;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = rover_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    if(keyPressed=="37"){
        left();
    }
    if(keyPressed=="38"){
        up();
    }
    if(keyPressed=="39"){
        right();
    }
    if(keyPressed=="40"){
        down();
    }
}
function left(){
    if(rover_x>0){
        rover_x=rover_x-10;
        console.log("Left Key Pressed " +rover_x + " ,"+rover_y );
        uploadBackground();
        uploadrover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("Right Key Pressed " +rover_x + " ,"+rover_y );
        uploadBackground();
        uploadrover();
    }
}
function up(){
    if(rover_y>0){
        rover_y=rover_y-10;
        console.log("Up Key Pressed " +rover_x + " ,"+rover_y );
        uploadBackground();
        uploadrover();
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("Down Key Pressed " +rover_x + " ,"+rover_y );
        uploadBackground();
        uploadrover();
    }
}