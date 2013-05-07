


var mainCharacter: GameObject;
var npc_black1: GameObject;
var npc_white1: GameObject;

var mainCharacter_isThreatened = boolean;
var npc_black1isThreatened = boolean;
var npc_white1isThreatened = boolean;
var npc_grey1isThreatened = boolean;

var shotFired: int = 0;
var shotFiredLackey: int = 0;

var mainCharacter_aimState : GameObject;
var npc_black1_aimState: GameObject;
var npc_white1_aimState: GameObject;

var mainCharacterIsDead: boolean = false;
var badGuyIsDead: boolean = false;
var goodGuyIsDead: boolean = false;

var mainCharacterShotState: int = 0;
var badGuyShotState: int = 0;
var goodShotState: int = 0;



function Start () {


}

function Update () {

var npc_black1_script:BadGuy_Simple=npc_black1.GetComponent("BadGuy_Simple");
var npc_white1_script: Lackey_Simple= npc_white1.GetComponent("Lackey_Simple");
var mainCharacter_script: Player_Simple = mainCharacter.GetComponent("Player_Simple");


npc_black1_aimState = npc_black1_script.myCurrTarget;
npc_white1_aimState = npc_white1_script.myCurrTarget;
mainCharacter_aimState = mainCharacter_script.myCurrTarget;



if(shotFired>0){
	print("THE POP OFF");
	}

if(mainCharacterShotState ==2){
	mainCharacterIsDead = true;
	print("maincharacter dead");
	}

if(badGuyShotState ==2){
	badGuyIsDead = true;
	print("badguy is dead");
	}
if(goodShotState ==2){
	goodGuyIsDead = true;
	print("goodguy is dead");
	}
}