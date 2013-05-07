


var redPool: Transform;
//var badGuyDead: boolean = false;

function Start () {

}

function Update () {

}


function OnTriggerEnter (other:Collider){

	if(other.gameObject.tag =="bullet")
	{
		print("Got hit!");
		redPool.localScale += Vector3(1,0,1);
		
		//GetParent. GetParentScript tell the parent script that this person is dead. 
		
		
	}
}