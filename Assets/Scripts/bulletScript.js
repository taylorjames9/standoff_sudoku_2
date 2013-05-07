
function Start () {

}

function Update () {

}


function OnTriggerEnter (other:Collider)

{

		//Instantiate(explosion, transform.position, transform.rotation);
		//npc1_scriptActivate.NPC_1_ReactionShot = true; 
		Destroy (gameObject);
		//sceneManager.transform.GetComponent("scriptSceneManager").AdScore();
}