



npc_black1isThreatened = boolean;
npc_white1isThreatened = boolean;
npc_grey1isThreatened = boolean;
mainCharacter_isThreatened = boolean;

function Start () {

}

function Update () {

//keeps an array of all characters in a scene

//keeps track of of everyone's bullet count

//keeps track of who is aiming at whom


var npc_black1: GameObject;
var npc_white1: GameObject;
var npc_grey1: GameObject;
var mainCharacter: player;

var npc_black1_script = npc_black1.GetComponent("NPC_Script");
var npc_white1_script = npc_white1.GetComponent("NPC_Script");
var npc_grey1_script = npc_grey1.GetComponent("NPC_Script");

var npc_black1_aimState = npc_black1_script.myCurrTarget;
var npc_white1_aimState = npc_white1_script.myCurrTarget;
var npc_grey1_aimState = npc_grey1_script.myCurrTarget;
var mainCharacter_aimState = mainCharacter.myCurrTarget;


//keeps track of time since start of the level

//keeps track of who is alive and who is dead




}