


var sceneManager: SceneManager_Simple;
var prefabBullet: Transform;
var shootForce: float = 80;

function Start () {

}

function Update () {

//print("transform.root.gameObject.name = "+ transform.root.gameObject.name);


	/*if(sceneManager.shotFired){
		if(transform.root.gameObject.name == "BadGuy"){
		//function: I fire my bullets at a steady rate at my target. 
	
			var instanceBullet = Instantiate(prefabBullet, transform.position, Quaternion.identity);
			instanceBullet.rigidbody.AddForce((transform.parent.gameObject.GetComponent(BadGuy_Simple).myCurrTarget.transform.position - transform.position) * shootForce);
			Physics.IgnoreCollision(instanceBullet.collider, collider);
			//Delay();
			sceneManager.shotFired = false;		
	
	}	
	else if(transform.root.gameObject.name == "GoodGuy"){
	//function: I fire my bullets at a steady rate at my target. 
	
			var instanceBullet_1 = Instantiate(prefabBullet, transform.position, Quaternion.identity);
			instanceBullet_1.rigidbody.AddForce((transform.parent.gameObject.GetComponent(Lackey_Simple).myCurrTarget.transform.position - transform.position) * shootForce);
			
			Physics.IgnoreCollision(instanceBullet_1.collider, collider);
			//Delay();
			sceneManager.shotFired = false;
		}	
	
}*/
}

function Delay(){
yield WaitForSeconds(1);
}