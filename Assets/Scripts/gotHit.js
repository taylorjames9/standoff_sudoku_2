


var redPool: Transform;

function Start () {

}

function Update () {

}


function OnTriggerEnter (other:Collider){

	if(other.gameObject.tag =="bullet")
	{
		print("Got hit!");
		redPool.localScale += Vector3(1,0,1);
	}
}