


var myParentScript0: C2_msDad;


function Start () {

}

function Update () {


if(myParentScript0.rel_line_tapCount%2==0){
		renderer.enabled = false;
	}
	
else{
		renderer.enabled = true;
}
}