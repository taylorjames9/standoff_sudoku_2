
var npc_black1: GameObject;
var npc_white1: GameObject;
var npc_grey1: GameObject;
var mainCharacter: GameObject;
var lady: GameObject;

var npc_black1isThreatened = boolean;
var npc_white1isThreatened = boolean;
var npc_grey1isThreatened = boolean;
var mainCharacter_isThreatened = boolean;
var lady_isThreatened = boolean;

var npc_black1_script = null;
var npc_white1_script = null;
var npc_grey1_script = null;
var mainCharacter_script = null;
var lady_script = null;

npc_black1_script = npc_black1.GetComponent("NPC_Script");
npc_white1_script = npc_white1.GetComponent("NPC_Script");
npc_grey1_script = npc_grey1.GetComponent("NPC_Script");
mainCharacter_script = mainCharacter.GetComponent("player");
lady_script = lady.GetComponent("NPC_Script");

var npc_black1_aimState = null;
var npc_white1_aimState = null;
var npc_grey1_aimState = null;
var mainCharacter_aimState = null;
var lady_aimState = null;

function Start () {

npc_black1_aimState = mainCharacter;
npc_white1_aimState = npc_black1;
npc_grey1_aimState = npc_black1;
mainCharacter_aimState = npc_black1;
lady_aimState = npc_grey1;


}

function Update () {

//keeps an array of all characters in a scene

//keeps track of of everyone's bullet count

//keeps track of who is aiming at whom

npc_black1_aimState = npc_black1_script.myCurrTarget;
npc_white1_aimState = npc_white1_script.myCurrTarget;
npc_grey1_aimState = npc_grey1_script.myCurrTarget;
mainCharacter_aimState = mainCharacter_script.myCurrTarget;
lady_aimState = lady_script.myCurrTarget;

//print("SceneManager Knows the Main Character CurrTarget is" + mainCharacter_script.myCurrTarget); 

//keeps track of time since start of the level

//keeps track of who is alive and who is dead

}