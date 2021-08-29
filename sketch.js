const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var weapon1;
var weapon11;
var tank, enemy;
var ground;
var score = 0;
var score1 = 0;
var bg1, bg2;
var weaponimg;
var weapon1ary = [];
var weapon11ary = [];
var w1Count = 0;
var w11Count = 0;

function setup() {
  createCanvas(1280,615);

  engine = Engine.create();
  world = engine.world;
  bg1 = loadImage('images/bg1.jpg')
  bg2 = loadImage('images/bg2.jpg')
  w1img = loadImage('images/weapon1.png')

  tank = new Tank(200, 580, 100, 50, 'images/tank.png');
  enemy = new Tank(1080, 580, 100, 50, 'images/enemy.png');
  ground = new Ground(700, 610, 1400, 10)
}

function draw() {
  background(bg1);  

  Engine.update(engine);

  push()
  fill('white')
  textFont('Times New Roman')
  textSize(20)
  text('Press "h" to launch ', 120, 100);
  text('Press "s" to launch ', 120, 125);
  text('Press "k" to launch ', 120, 150);
  text('Press "v" to launch ', 120, 175);
  text('Press "r" to launch ', 120, 200);
  text('Press "d" to launch ', 120, 225);
  text('Press "b" to launch ', 120, 250);
  text('Score : ' + Math.round(score), 150,50);
  pop()

  // enemy
  push()
  fill('white')
  textFont('Times New Roman')
  textSize(20)
  text('Press "a" to launch ', 1000, 100);
  text('Press "m" to launch ', 1000, 125);
  text('Press "n" to launch ', 1000, 150);
  text('Press "i" to launch ', 1000, 175);
  text('Press "u" to launch ', 1000, 200);
  text('Press "y" to launch ', 1000, 225);
  text('Press "t" to launch ', 1000, 250);
  text('Score : ' + Math.round(score1), 1030,50);
  pop()

  tank.display();
  enemy.display();
  ground.display();
  
  for(var i = 0; i< weapon1ary.length; i++){
    weapon1ary[i].display();

    // if(weapon1ary[i]){
      // weapon1ary[i].display()
      var collision = Matter.SAT.collides(enemy.body, weapon1ary[i].body)
      // console.log(collision.collided)
      if(collision.collided)  {
        score = score + (5/3);
        
        weapon1ary.pop(weapon1ary[i])
        // World.remove(world, weapon1ary[i].body)
        collision = null;
      }
    // }
  }

  for(var i = 0; i< weapon11ary.length; i++){
    weapon11ary[i].display();

    // if(weapon11ary[i]){
      // weapon11ary[i].display()
      var collision = Matter.SAT.collides(tank.body, weapon11ary[i].body)
      if(collision.collided)  {
        score1 = score1 + (5/3);

        weapon11ary.pop(weapon11ary[i])
        // World.remove(world, weapon11ary[i].body)
        collision = null;
      }
    // }
    
  }

  drawSprites();
}

function keyPressed() {
  console.log('keyPressed')
   if(keyCode === 72 && w1Count < 10) /* h */ {
    
    weapon1 = new Weapon(tank.body.position.x, tank.body.position.y, w1img)
    weapon1ary.push(weapon1);
    console.log(weapon1)
    Body.applyForce( weapon1.body, {x: weapon1.body.position.x, y: weapon1.body.position.y}, {x: 0.024, y: - 0.004});
    w1Count = w1Count + 1;

  } else if (keyCode === 83) /* s */ {

  } else if (keyCode === 75) /* k */ {

  } else if (keyCode === 86) /* v */ {

  } else if (keyCode === 82) /* r */ {

  } else if (keyCode === 68) /* d */ {
    
  }  else if (keyCode === 66) /* b */ {

  }

  //enemy
  if(keyCode === 65 && w11Count < 10) /* a */ {
    
    weapon11 = new Weapon(enemy.body.position.x, enemy.body.position.y, w1img);
    weapon11ary.push(weapon11);
    console.log(weapon11)
    Body.applyForce( weapon11.body, {x: weapon11.body.position.x, y: weapon11.body.position.y}, {x: - 0.024, y: - 0.004});
    w11Count = w11Count + 1;

  } else if (keyCode === 77) /* m */ {

  } else if (keyCode === 78) /* n */ {

  } else if (keyCode === 73) /* i */ {

  } else if (keyCode === 85) /* u */ {

  } else if (keyCode === 89) /* y */ {
    
  }  else if (keyCode === 84) /* t */ {

  }
}