
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

//var myThreat: GameObject = null;
var myCurrTarget0: GameObject;

var sceneManager : SceneManagerScript;
var playerScript : player;

var myAttackersName: String;

var targetRotation: Quaternion;

function Start () {

//var RandomNum = Random.Range(1, 3);
//myCurrTarget = ("iNoLike"+[RandomNum]); 

  myCurrTarget0 = iNoLike1; 
  targetRotation = Quaternion.LookRotation(iNoLike1.transform.position - iAm.transform.position);
  targetRotation.x = 0.0;
  targetRotation.y = 0.0;
  transform.rotation = targetRotation;
}

function Update () {

//myAttackerIs();
//iAimAt();


if(sceneManager.npc_black1_aimState == gameObject){
		
		myAttackersName	= "black1";
		//print("myAttackersName is " +myAttackersName ); 	
		
		}
		
	if(sceneManager.npc_white1_aimState == gameObject){
		
		myAttackersName	= "white1"; 
		//print("myAttackersName is " + myAttackersName ); 	
		
		}
	
	if(sceneManager.npc_grey1_aimState == gameObject){
		
		myAttackersName	= "grey1"; 	
		//print("myAttackersName is " + myAttackersName ); 	
		
		}
		
	if(sceneManager.mainCharacter_aimState == gameObject){
		
		myAttackersName	= "mainCharacter"; 	
		//print("myAttackersName is " + myAttackersName ); 	
		
		}	
		
	if(sceneManager.lady_aimState == gameObject){
		
		myAttackersName	= "Lady"; 	
		//print("myAttackersName is " + myAttackersName ); 	
		
		}



switch (myAttackersName)
{
	case("black1"):
	//rotate to aim at
	//print("I should be rotating towards black1");
	targetRotation = Quaternion.LookRotation(sceneManager.npc_black1.transform.position - transform.position);
	transform.rotation = targetRotation;
	myCurrTarget0 = sceneManager.npc_black1;
	
	break;
	
	case("white1"):
	//rotate to aim at
	//print("I should be rotating towards white1");
	targetRotation = Quaternion.LookRotation(sceneManager.npc_white1.transform.position - transform.position);
	transform.rotation = targetRotation;
	myCurrTarget0 = sceneManager.npc_white1;
	
	break;
	
	case("grey1"):
	//rotate to aim at
	//print("I should be rotating towards grey1");
	targetRotation = Quaternion.LookRotation(sceneManager.npc_grey1.transform.position - transform.position);
	transform.rotation = targetRotation;
	myCurrTarget0 = sceneManager.npc_grey1;
	
	break;

	case("mainCharacter"):
	//rotate to aim at
	//print("I should be rotating towards mainCharacter");
	targetRotation = Quaternion.LookRotation(sceneManager.mainCharacter.transform.position - transform.position);
	transform.rotation = targetRotation;
	//print("My Target is going to be the MAIN GUY");
	myCurrTarget0 = sceneManager.mainCharacter;
	break;
	
    case("Lady"):
	//rotate to aim at
	//print("I should be rotating towards mainCharacter");
	targetRotation = Quaternion.LookRotation(sceneManager.lady.transform.position - transform.position);
	transform.rotation = targetRotation;
	//print("My Target is going to be the MAIN GUY");
	myCurrTarget0 = sceneManager.lady;
	break;
	
	}
}


/*function myAttackerIs()
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
		
	if(sceneManager.mainCharacter_aimState == gameObject.name){
		
		myAttackersName	= "mainCharacter"; 	
		print("I'm the "+  gameObject.name +" and the main Character is aiming at me.");
		}	
		
		//return myAttackersName;
	
}*/

/*function iAimAt()
{


var targetRotation: Quaternion;

switch (myAttackersName)
{
	case("black1"):
	//rotate to aim at
	targetRotation = Quaternion.LookRotation(sceneManager.npc_black1.position - transform.position);
	transform.rotation = targetRotation;
	
	break;
	
	case("white1"):
	//rotate to aim at
	targetRotation = Quaternion.LookRotation(sceneManager.npc_black1.position - transform.position);
	transform.rotation = targetRotation;
	
	break;
	
	case("grey1"):
	//rotate to aim at
	targetRotation = Quaternion.LookRotation(sceneManager.npc_black1.position - transform.position);
	transform.rotation = targetRotation;
	
	break;

	case("mainCharacter"):
	//rotate to aim at
	targetRotation = Quaternion.LookRotation(sceneManager.mainCharacter.position - transform.position);
	transform.rotation = targetRotation;
	break;
}
}*/