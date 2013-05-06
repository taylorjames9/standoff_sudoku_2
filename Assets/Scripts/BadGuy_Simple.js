


var iAm: GameObject;
var iLike1: GameObject;
var iNoLike: GameObject;
var iNoLike2: GameObject;
var threateningMe1: GameObject;
var threatneingMe2: GameObject;

var sceneManager: SceneManager_Simple;
var myCurrTarget: GameObject = null;
var even: boolean = true;

var targetRotation: Quaternion;

function Start () {

myCurrTarget = iNoLike;
targetRotation = Quaternion.LookRotation(myCurrTarget.transform.position - transform.position);
transform.rotation = targetRotation;

}

function Awake (){
    InvokeRepeating("Switch", 6, 6);
}


function Update () {

	//Every 20 Seconds, the bad guy switches aim to the Good Guy or to the main character
	if(even){
		myCurrTarget = iNoLike;
		targetRotation = Quaternion.LookRotation(myCurrTarget.transform.position - transform.position);
		transform.rotation = targetRotation;
		}
		
	else if (!even){
		myCurrTarget = iNoLike2;
		targetRotation = Quaternion.LookRotation(myCurrTarget.transform.position - transform.position);
		transform.rotation = targetRotation;
		}
		
	if(sceneManager.shotFired){
	//function: I fire my bullets at a steady rate at my target. 
	
	}	
}

function Switch(){
    even = !even;
}


