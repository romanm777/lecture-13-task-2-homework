var BULLET_COUNT = 10;
var machineGun = [];
var bulletIndex = 0;

var playerEl = document.getElementById('player');
playerEl.style.top = '50px';
playerEl.style.left = '50px';

createBullets();


//////////////////////////////////////////////////////
// 		Functionality

function createBullets() {
	for(var i = 0; i < BULLET_COUNT; ++i) {
		var bullet = document.createElement("DIV");
		//bullet.style.display = '';

		// styles
		var classAttr = document.createAttribute("class");
		classAttr.value = "bullet";
		bullet.setAttributeNode(classAttr);

		// start position
		bullet.style.left = playerEl.style.left;
		bullet.style.top = playerEl.style.top;
		//bullet.style.top = (parseInt(playerEl.style.top) - 10) + 'px';

		// makes invisible
		bullet.style.display = 'none';

		// appends to the document
		document.body.appendChild(bullet);
		// insert in the machineGun
		machineGun.push(bullet);
	}
}

document.body.onkeydown = function (e) {
	var el = document.getElementById('player');

  var KEYCODE_LEFT = 37,
      KEYCODE_RIGHT = 39,
      KEYCODE_UP = 38,
      KEYCODE_DOWN = 40,
      KEYCODE_SPACE = 32,
      KEYCODE_ENTER = 13;

  if (e.keyCode == KEYCODE_LEFT) {
  	el.style.left = (parseInt(el.style.left) - 10) + 'px';
  }
  else if (e.keyCode == KEYCODE_RIGHT) {
  	el.style.left = (parseInt(el.style.left) + 10) + 'px';
  }
  else if (e.keyCode == KEYCODE_UP) {
    el.style.top = (parseInt(el.style.top) - 10) + 'px';
  }
  else if (e.keyCode == KEYCODE_DOWN) {
    el.style.top = (parseInt(el.style.top) + 10) + 'px';
  }
  else if(e.keyCode == KEYCODE_SPACE) {
    spaceProcess(el);
  }
  else if(e.keyCode == KEYCODE_ENTER) {
    enterProcess(el);
  }
}

function updateBulletPos(bullet, left, top) {
	bullet.style.left = (parseInt(left) + 2.5) + 'px';
	bullet.style.top = (parseInt(top) + 2.5) + 'px';
}

function spaceProcess(el) {
	if(bulletIndex >= BULLET_COUNT) {
		bulletIndex = 0;
	}

	var bullet = machineGun[bulletIndex];
	updateBulletPos(bullet, el.style.left, el.style.top);
	bullet.style.display = '';

	setTimeout(function() {
		// shot
	  bullet.style.top = '-10px';

		setTimeout(function() {
			bullet.style.display = 'none';
		}, 2000);
	}, 10);

	// go to the next bullet
	++bulletIndex;
}

function enterProcess(el) {
  ;
}
