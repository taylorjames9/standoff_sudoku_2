



var thisSlide: Transform;
var myDropZ: float;
private var myCurrZ: float;
var myCloseBtn_script: closeScript;
var closedHit: boolean = false;
var dropped:boolean = false;
var myStartZ: float;
var tutLeft: boolean = false;

function Start () {

myStartZ = transform.position.z;

}

function Update () {


	if(!dropped){
		Delay();
	}
	
	if(myCloseBtn_script.closedHit){
		thisSlide.position.z = myStartZ;
		tutLeft = true;
	}
}


function Delay(){

yield WaitForSeconds (2.5);
thisSlide.position.z = myDropZ;
dropped = true;

}