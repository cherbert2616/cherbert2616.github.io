$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(700,0, 20, 400, "white");
    createPlatform(700, 500, 20, 290, "white");
    createPlatform(1350, 400, 50, 50, "lightgreen");
    createPlatform(450, 630,100, 50, "white");
    createPlatform(950,550, 60, 50, "white");
    createPlatform(1160, 450, 60, 50, "white");
    createPlatform(230, 510, 60, 50, "white");



    // TODO 3 - Create Collectables
    createCollectable("kitty", 480, 500, 0.5, 0.7);
    createCollectable("kitty", 250, 370, 0.5, 0.7);
    createCollectable("kitty", 700, 430, 0.5, 0.7);
    createCollectable("kitty", 1160, 300, 0.5, 0.7);
  


    
    // TODO 4 - Create Cannons
    createCannon("right", 500, 3000);
    createCannon("left", 600, 2000);
    createCannon("top", 1000, 1000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
