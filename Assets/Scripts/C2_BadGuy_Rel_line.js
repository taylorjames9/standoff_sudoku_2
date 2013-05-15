



var myParentScript: C2_BadGuy;


function Start () {

}

function Update () {


if(myParentScript.rel_line_tapCount_2%2==0){
renderer.enabled = false;

	}
	
else{

renderer.enabled = true;
}
}