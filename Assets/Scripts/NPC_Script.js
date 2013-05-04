
var iAm : GameObject;
var iLike1: GameObject;
var iLike2: GameObject;
var iLike3: GameObject;

var iNoLike1: GameObject;
var iNoLike2: GameObject;
var iNoLike3: GameObject;

var jumpy: float;
var retaliate: float;
var frequnecyOfBullets: float;
var amAlive: boolean = true;

var myThreat: GameObject = null;
var myCurrTarget: GameObject;


var sceneManager = SceneManagerScript;
var playerScript = player;

var myAttackersName: String;


function Start () {

var RandomNum = Random.Range(1, 3);
//myCurrTarget = ("iNoLike"+[RandomNum]); 
myCurrTarget = iNoLike1; 


}

function Update () {

myAttackerIs();
iAimAt();

}


function myAttackerIs()
{

	if(sceneManager.npc_black1_aimState == gameObject.name){
		
		myAttackersName	= "black1"; 	
		
		}
		
	if(sceneManager.npc_white1_aimState == gameObject.name){
		
		myAttackersName	= "white1"; 	
		
		}
	
	if(sceneManager.npc_grey1_aimState == gameObject.name){
		
		myAttackersName	= "grey1"; 	
		
		}
		
	if(sceneManager.mainCharacter_aimState_aimState == gameObject.name){
		
		myAttackersName	= "mainCharacter"; 	
		
		}	
	
}

function iAimAt()
{

switch (myAttackersName)
{
	case("black1"):
	//rotate to aim at
	
	break;
	
	case("white1"):
	//rotate to aim at
	
	break;
	
	case("grey1"):
	//rotate to aim at
	
	break;

	case("mainCharacter"):
	//rotate to aim at
	
	break;
}
}