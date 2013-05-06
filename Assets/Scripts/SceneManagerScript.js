
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

//private var npc_black1_script: NPC_Script = npc_black1.GetComponent("NPC_Script");
//private var npc_white1_script: Component;
//private var npc_grey1_script: Component;
//private var mainCharacter_script: Component;
//private var lady_script: Component;

var npc_black1_aimState: GameObject;
var npc_white1_aimState: GameObject;
var npc_grey1_aimState: GameObject;
var mainCharacter_aimState : GameObject;
var lady_aimState : GameObject;

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

//print("npc_black1_aimState " + npc_black1_aimState);

var npc_black1_script: NPC_Script = npc_black1.GetComponent("NPC_Script");
var npc_white1_script: NPC_Script= npc_white1.GetComponent("NPC_Script");
var npc_grey1_script: NPC_Script = npc_grey1.GetComponent("NPC_Script");
var mainCharacter_script: player = mainCharacter.GetComponent("player");
var lady_script: NPC_Script = lady.GetComponent("NPC_Script");

npc_black1_aimState = npc_black1_script.myCurrTarget0;
npc_white1_aimState = npc_white1_script.myCurrTarget0;
npc_grey1_aimState = npc_grey1_script.myCurrTarget0;
mainCharacter_aimState = mainCharacter_script.myCurrTargetPlayer;
lady_aimState = lady_script.myCurrTarget0;

//print("SceneManager Knows the Main Character CurrTarget is" + mainCharacter_script.myCurrTarget); 

//keeps track of time since start of the level

//keeps track of who is alive and who is dead

}