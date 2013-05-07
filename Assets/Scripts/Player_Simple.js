



var mouseHoldDown : float;
var suffocate: boolean = false;
var timeElapsedSinceSuffocate: float;
var tapAfterSuffocate: boolean = false;
var aimingAtBadGuy: boolean = false;

var myCurrTarget: GameObject;
var iNoLike: GameObject;

var prefabBullet: Transform;
var shootForce: float;
var sceneManager : SceneManager_Simple;


function Start () {

  myCurrTarget = iNoLike; 

  var targetRotation = Quaternion.LookRotation(myCurrTarget.transform.position - transform.position);
  transform.rotation = targetRotation;
  
  aimingAtBadGuy = true;

}

function Update () {

	aim();
	shoot();

}


function aim(){

if(!sceneManager.mainCharacterIsDead){
if (Input.GetMouseButtonDown(0)) {
            var hit: RaycastHit;
            var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            Debug.DrawRay (ray.origin, ray.direction * 100, Color.red);
            
            if (Physics.Raycast(ray, hit)) {
            	if(hit.collider.gameObject.tag == "npc"){
             		var targetPosition = hit.point;
             		myCurrTarget = hit.collider.gameObject;
             		print("myCurrTarget = "+ myCurrTarget.name);
             		
             		var targetRotation = Quaternion.LookRotation(targetPosition - transform.position);
					transform.rotation = targetRotation;
					print("mainCharacter has aimed");
					}
				}
		}
		}
}

function shoot(){

if(!sceneManager.mainCharacterIsDead){
if (Input.GetMouseButtonDown(0)){
		var rayo = Camera.main.ScreenPointToRay (Input.mousePosition);
		var hito : RaycastHit;
	if (Physics.Raycast (rayo, hito)) {
    	if(hito.collider.gameObject == myCurrTarget){
			var instanceBullet = Instantiate(prefabBullet, transform.position, Quaternion.identity);
			instanceBullet.rigidbody.AddForce((myCurrTarget.transform.position - transform.position) * shootForce);
			
			//Physics.IgnoreCollision(instanceBullet.collider, collider);
			//Physics.IgnoreCollision(instanceBullet.collider, collider);
			yield WaitForSeconds(0.4);
			sceneManager.shotFired++;
			yield WaitForSeconds(0.6);
			sceneManager.shotFiredLackey++;
			
			print("mainCharacter has shot");
		}
		
	}
}
}
}

