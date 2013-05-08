



var thisSlide: Transform;
var myDropZ: float;
private var myCurrZ: float;
var myCloseBtn_script: closeScript;
var closedHit: boolean = false;
var dropped:boolean = false;
var myStartZ: float;
var tutLeft: boolean = false;
var speed: float =3.0;

var sceneManager: SceneManager_Simple;

function Start () {

myStartZ = transform.position.z;

}

function Update () {


	if(!dropped){
		GoingDown();
	}
	
	if(myCloseBtn_script.closedHit){
		
		GoingUp();
	}
}


function GoingDown(){

yield WaitForSeconds (1);
//thisSlide.position.z = myDropZ;
/*for(var i=myStartZ; i>myDropZ; i--) {

i=Time.deltaTime;

}*/
	if(transform.position.z > myDropZ){
	
		transform.Translate(0, 0, speed*(-1), Space.World);
		
		}


//yield WaitForSeconds (1.5);
dropped = true;
sceneManager.guiPresent = true;
}



function GoingUp(){

//yield WaitForSeconds (0.5);

			
	if(transform.position.z < myStartZ){
	
		transform.Translate(0, 0, speed, Space.World);
		
		}
		tutLeft = true;
}