



var myCurrTarget: GameObject = null;
var iNoLike1: GameObject;

function Start () {
  targetRotation = Quaternion.LookRotation(iNoLike1.transform.position - transform.position);
  targetRotation.x = 0.0;
  targetRotation.y = 0.0;
  transform.rotation = targetRotation;
}
function Update () {


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

