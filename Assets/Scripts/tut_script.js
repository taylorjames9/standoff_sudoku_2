



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
		GoingDown();
	}
	
	if(myCloseBtn_script.closedHit){
		
		GoingUp();
	}
}


function GoingDown(){

yield WaitForSeconds (0);
//thisSlide.position.z = myDropZ;
for(var i=myStartZ; i>myDropZ; i--) {

i=Time.deltaTime*3;

}
transform.Translate(0, 0, i, Space.World);

yield WaitForSeconds(1.5);
dropped = true;

}

function GoingUp(){

yield WaitForSeconds (0);
//thisSlide.position.z = myStartZ;
		for(var j=myDropZ; j>myStartZ; j++) {

			j=Time.deltaTime*3;

			}
		transform.Translate(0, 0, j, Space.World);

		yield WaitForSeconds(1.5);
		tutLeft = true;
}