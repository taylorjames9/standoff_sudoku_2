

var myName: GameObject;
var closedHit: boolean = false;

function Start () {


}

function Update () {


if (Input.GetMouseButtonDown(0)) {
            var hit: RaycastHit;
            var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            Debug.DrawRay (ray.origin, ray.direction * 100, Color.red);
            
            if (Physics.Raycast(ray, hit)) {
            	if(hit.collider.gameObject.name == myName.gameObject.name){
             		
             		closedHit = true;
             		print("HIT CLOSE BTN");
             	
					}
				}
			}
	}