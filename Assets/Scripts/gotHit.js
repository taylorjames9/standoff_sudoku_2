


var redPool: Transform;
var sceneManager: SceneManager_Simple;

var mainCharacterIsDead: boolean = false;
var badGuyIsDead: boolean = false;
var goodGuyIsDead: boolean = false;

function Start () {

}

function Update () {

}


function OnTriggerEnter (other:Collider){

	if(gameObject.tag == "mainGuy" && other.gameObject.tag =="bullet" && !sceneManager.mainCharacterIsDead)
	{
		//print("Got hit!");
		redPool.localScale += Vector3(1,0,1);
		
		sceneManager.mainCharacterShotState++;	
	}
	
	if(gameObject.tag == "BadGuy" && other.gameObject.tag =="bullet" && !sceneManager.badGuyIsDead)
	{
		//print("Got hit!");
		redPool.localScale += Vector3(1,0,1);
		
		sceneManager.badGuyShotState++;	
	}
	
	if(gameObject.tag == "GoodGuy" && other.gameObject.tag =="bullet"  && !sceneManager.goodGuyIsDead)
	{
		//print("Got hit!");
		redPool.localScale += Vector3(1,0,1);
		
		sceneManager.goodShotState++;	
	}


}