



var thisSlide: Transform;
var myDropZ: float;
private var myCurrZ: float;
var myCloseBtn_script: closeScript;
var closedHit: boolean = false;
var dropped: boolean = false;
var myStartZ: float;
//var tutLeft: boolean = false;
var speed: float = 3.0;

var tut_script: tut_script;
var sceneManager: SceneManager_Simple;

function Start () {

myStartZ = transform.position.z;

}

function Update () {


	if(tut_script.tutLeft && !dropped){
		GoingDown();
	}
	
	if(myCloseBtn_script.closedHit){
		GoingUp();
		
	}
}


function GoingDown(){

	yield WaitForSeconds (1.5);
	if(transform.position.z > myDropZ){
	
		transform.Translate(0, 0, speed*(-1), Space.World);
		
		}


//yield WaitForSeconds (1.5);
dropped = true;
sceneManager.guiPresent = true;

}

function GoingUp(){


	if(transform.position.z < myStartZ){
	
		transform.Translate(0, 0, speed, Space.World);
		
		}

}