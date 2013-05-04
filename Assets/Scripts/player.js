

function Start () {

}


function Update () {


if (Input.GetMouseButtonDown(0)) {
            var hit: RaycastHit;
            var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            Debug.DrawRay (ray.origin, ray.direction * 100, Color.red);

            
            if (Physics.Raycast(ray, hit)) {
            	if(hit.collider.gameObject.tag == "npc"){
             		var targetPosition = hit.point;
             		var targetRotation = Quaternion.LookRotation(targetPosition - transform.position);
					transform.rotation = targetRotation;
                    
                    print("npc HIT");
              
         }                                                                                                    
    }
}
	
}

