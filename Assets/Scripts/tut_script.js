



var thisSlide: GameObject;
var myDropZ: float;
private var myCurrZ: float;
var myCloseBtn_script: closeScript;
var closedHit: boolean = false;
var dropped:boolean = false;
var myStartZ:float;

function Start () {

myStartZ = transform.position.z;

}

function Update () {


	//if(!dropped){
		//Delay();
		thisSlide.transform.position.z = myDropZ;
		//dropped = true;
	//}
	
	if(myCloseBtn_script.closedHit){
		thisSlide.transform.position.z = myStartZ;
	}
}


function Delay(){

yield WaitForSeconds (2.5);


}