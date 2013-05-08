



var thisSlide: Transform;
var myDropZ: float;
private var myCurrZ: float;
var myCloseBtn_script: closeScript;
var closedHit: boolean = false;
var dropped: boolean = false;
var myStartZ: float;
//var tutLeft: boolean = false;

var tut_script: tut_script;

function Start () {

myStartZ = transform.position.z;

}

function Update () {


	if(tut_script.tutLeft && !dropped){
		Delay();
	}
	
	if(myCloseBtn_script.closedHit){
		thisSlide.position.z = myStartZ;
		
	}
}


function Delay(){

yield WaitForSeconds (0.5);
thisSlide.position.z = myDropZ;
dropped = true;


}