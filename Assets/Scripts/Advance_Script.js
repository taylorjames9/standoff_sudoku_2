

var thisObject: Transform;
var sceneManager: SceneManager_Simple;
var myLiftZ: float;
var myOriginalZ: float;

function Start () {

myOriginalZ = transform.position.z;



}

function Update () {



if(sceneManager.badGuyIsDead){
	transform.position.z = myLiftZ;
}

if (Input.GetMouseButtonDown(0)) {
            var hit: RaycastHit;
            var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            Debug.DrawRay (ray.origin, ray.direction * 100, Color.red);
            
            if (Physics.Raycast(ray, hit)) {
            	if(hit.collider.gameObject.name == gameObject.name){
             		
             	//load next level
             	Application.LoadLevel ("Standoff_Sudoku_Simplest");
             	
					}
				}
			}



}