/*************************************************
Copyright © 2021 Ennio Marke
 ____    ____  ____  ____   ______   _________  
|_   \  /   _||_  _||_  _|.' ____ \ |  _   _  | 
  |   \/   |    \ \  / /  | (___ \_||_/ | | \_| 
  | |\  /| |     \ \/ /    _.____`.     | |     
 _| |_\/_| |_    _|  |_   | \____) |   _| |_    
|_____||_____|  |______|   \______.'  |_____| 
*************************************************/

document.addEventListener("DOMContentLoaded", () => {

  const minWindowVal = window.innerHeight<window.innerWidth ? window.innerHeight:window.innerWidth;
  const maxWindowVal = window.innerHeight>window.innerWidth ? window.innerHeight:window.innerWidth;
  const earthSunDistance = minWindowVal/3;
  const earthMoonDistance = earthSunDistance/4;

  const sunEllipseRadiusHeight = window.innerHeight/4;
  const sunEllipseRadiusWidth = window.innerWidth/3;

  const timeScale = 1;

  bg =  {
    svg: document.getElementById("Background"),
    createCircle: (x, y, radius, color, id, strokeWidth, strokeColor) => {
      if(!(x&&y&&radius&&id)) return;
      color = color ?? "black";
      strokeWidth = strokeWidth ?? 0;
      strokeColor = strokeColor ?? "black";
      bg.createCircle2(x, y, radius, color, id, strokeWidth, strokeColor)
      const circle = document.getElementById(id)
      return circle
    },
    createCircle2: (x, y, radius, color, id, strokeWidth, strokeColor) => {
      const Circle = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'circle'
      );

      Circle.setAttribute('cx', x);
      Circle.setAttribute('cy', y);
      Circle.setAttribute('r', radius);
      Circle.setAttribute('fill', color);
      Circle.setAttribute('id', id);
      Circle.setAttribute('stroke-width', strokeWidth)
      Circle.setAttribute('stroke', strokeColor)

      bg.svg.appendChild(Circle)
    }
  }

  var earthAngle = 0;
  var moonAngle = 0;
  var Day = 0;

  function update() {
    $(bg.svg).empty();
    var sun = bg.createCircle(window.innerWidth / 2 + window.innerWidth / 8, window.innerHeight / 2, 10, "yellow", "sun")
    var earth = bg.createCircle((sunEllipseRadiusWidth*Math.cos(earthAngle)+window.innerWidth / 2), (sunEllipseRadiusHeight*Math.sin(earthAngle)+window.innerHeight / 2), 10, "blue", "earth")
    var moon = bg.createCircle((earthMoonDistance*Math.cos(moonAngle)+earth.cx.animVal.value), (earthMoonDistance*Math.sin(moonAngle)+earth.cy.animVal.value), 10, "gray", "moon")
    earthAngle += 0.01 * timeScale;
    moonAngle -= 0.05 * timeScale;

    Day += 0.55;
    $("#Day").text(Math.floor(Day))
    // UpdateUI();
    window.requestAnimationFrame(update)
  }

  window.requestAnimationFrame(update);
  
  
  //#region functions
    
  //#endregion

})

/*********************************
       :\     /;               _
      ;  \___/  ;             ; ;
     ,:-"'   `"-:.            / ;
    /,---.   ,---.\         _; /
   ((  |  ) (  |  ))    ,-""_,"
    \`````   `````/""""",-""
     '-.._ v _..-'      )
       / ___   ____,..  \
      / /   | |   | ( \. \
     / /    | |    | |  \ \
     `"     `"     `"    `"
     We dont talk about the cat
*********************************/