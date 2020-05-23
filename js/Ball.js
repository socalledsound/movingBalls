class Ball {
//the constructor function builds the object, and takes input arguments.
    constructor(x, y, radius, speed){
        //this is this object - uncomment this console message to see 'this'
        // console.log(this);

        //first we find the target element in the html
        this.target = document.querySelector('svg');
        //then we creat an svg element.  it's a circle but it doesn't have any atrtributes yet.
        this.el = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        //these values got passed into this function up above.
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.xSpeed = speed;
        this.ySpeed = 1;
        this.opacity = Math.random();
        //let's pick a random color.
        this.fill = this.getRandomColor();
        this.stroke = this.getRandomColor();
        this.strokeWidth = Math.random()*20;
        
        //let's init our object by calling it's init function
        this.init();
    }



    //check the edges and reverse direction if we hit them.
    checkEdges(){
        //if our center x value is less than the radius or more than the total width - the radius
        //then we do the thing inside the block
        if(this.x < this.radius || this.x > canvasWidth - this.radius){
            //multiuplying by negative value reverses the speed
            this.xSpeed *= -1;
            //pick a new random color
            this.fill = this.getRandomColor();
            
        }

    }

    ///  random color helper function
    getRandomColor(){
        // a number between 0 and 255 for each color value
        const r  = Math.random()*255;
        const g  = Math.random()*255;
        const b  = Math.random()*255;
        //using template literals to create a string value
        return `rgba(${r},${g}, ${b}, ${this.opacity})`;
     
     }

    init(){
        //we add this circle to the DOM as a child of our svg element
        this.target.appendChild(this.el);
        //add an event listener
        this.el.addEventListener('click', ()=>{
            this.radius -= 10;
        })
        
        

    }
    // increment x
    move(){
        this.x += this.xSpeed;
    }
    // update the values of our circle element aka draw our circle onto the screen
    render(){

        this.el.setAttribute('cx', `${this.x}`);
        this.el.setAttribute('cy', `${this.y}`);
        this.el.setAttribute('r', `${this.radius}`);
        this.el.setAttribute('fill', `${this.fill}`);
        this.el.setAttribute('stroke', `${this.stroke}`);
        this.el.setAttribute('stroke-width', `${this.strokeWidth}`);

    }


}


