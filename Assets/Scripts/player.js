



var myCurrTargetPlayer: GameObject;
var iNoLike1: GameObject;

function Start () {

  myCurrTargetPlayer = iNoLike1; 

  var targetRotato = Quaternion.LookRotation(iNoLike1.transform.position - transform.position);
  //targetRotato.x = 0.0;
  //targetRotato.y = 0.0;
  transform.rotation = targetRotato;
 
}
function Update () {


if (Input.GetMouseButtonDown(0)) {
            var hit: RaycastHit;
            var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            Debug.DrawRay (ray.origin, ray.direction * 100, Color.red);

            
            if (Physics.Raycast(ray, hit)) {
            	if(hit.collider.gameObject.tag == "npc"){
             		var targetPosition = hit.point;
             		myCurrTargetPlayer = hit.collider.gameObject;
             		print("myCurrTargetPlayer = "+ myCurrTargetPlayer.name);
             		
             		var targetRotation = Quaternion.LookRotation(targetPosition - transform.position);
					//targetRotation.x = 0.0;
    				//targetRotation.y = 0.0;
					
					transform.rotation = targetRotation;
                    
                    //print("npc HIT");
                    
                    //var newRotation = Quaternion.LookRotation(transform.position - targetPosition, Vector3.forward);
    				//newRotation.x = 0.0;
    				//newRotation.y = 0.0;
    				//transform.rotation = Quaternion.Slerp(transform.rotation, newRotation, Time.deltaTime);
              
         }                                                                                                    
    }
}
	
}

