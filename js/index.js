// let's just use constants for the starting location and size
const x = 100;
const y = 100;
const radius = 100;
// this was our first ball, just one......
const myBall = new Ball(x, y, radius, 1);
//the right edge of our sketch
const canvasWidth = 1000;
// this makes an empty array of length 'numBalls'
const numBalls = 100;
const balls = Array.from({ length: numBalls });


///this function gets called when the window is finished loading ie when it is ready.
window.onload =function(){

//here we use the forEach method of the class Array.
// for each peforms a function on each element of the array.
// i am using an arrow function with arguments ball and i.
// ball is kind of like another name for each element
// i is the index number of each ball.
// so balls[i] adds a new ball to each spot in the array.
   balls.forEach((ball,i)=>{
      const speed = Math.random()+ 0.001;
      balls[i] = new Ball(x, y, radius, speed);
   })


///after we do all this, we call the animate function, down below
   animate();
}

//this function is a recursive loop, 
// request animation frame is a method on the window object
//it calls itself again every time the window 
// is ready to draw itself again.
function animate(){
  //this was our original single ball
  //we call it's methods to checkedges, move and render
   myBall.checkEdges();
   myBall.move();
   myBall.render();
   // console.log(myBall.x);
   //and here we do the same, but for all of the balls in the balls array.
   balls.forEach((ball, i)=>{
       balls[i].checkEdges();
       balls[i].move();
       balls[i].render();
   })

   //the recursive call to the animate function.
   //since the function is a callback function we don't use () to call it.
   window.requestAnimationFrame(animate);
}
