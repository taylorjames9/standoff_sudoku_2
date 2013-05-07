


var sceneManager: SceneManager_Simple;

var iNoLike: GameObject;
var myBoss: GameObject;
var iAmDead: boolean = false;

var myCurrTarget: GameObject;

var prefabBullet: Transform;
var shootForce: float = 80;



function Start () {

  myCurrTarget = iNoLike; 

  var targetRotation = Quaternion.LookRotation(myCurrTarget.transform.position - transform.position);
  transform.rotation = targetRotation;
}

function Update () {

	if(sceneManager.shotFiredLackey > 0 && !sceneManager.goodGuyIsDead){
	//function: I fire my bullets at a steady rate at my target. 
	
	var instanceBullet = Instantiate(prefabBullet, transform.position, Quaternion.identity);
	instanceBullet.rigidbody.AddForce((myCurrTarget.transform.position - transform.position) * shootForce);
	Physics.IgnoreCollision(instanceBullet.collider, collider);
	
	sceneManager.shotFiredLackey = 0;
	
	
	}	

}