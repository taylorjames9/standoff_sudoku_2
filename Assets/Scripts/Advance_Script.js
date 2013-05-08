

var thisObject: Transform;
var sceneManager: SceneManager_Simple;
var myLiftZ: float;
var myOriginalZ: float;

var timeLoop: float;
var lerpedColor : Color;

function Start () {

myOriginalZ = transform.position.z;
//print("start color is "+  gameObject.getColor());

}

function Update () {



if(sceneManager.badGuyIsDead){
	Delay();
	transform.position.z = myLiftZ;
	timeLoop = Mathf.PingPong(Time.time, 1.3);
	lerpedColor = Color.Lerp(Color (0, 0, 0, 0), Color (0, 0, 0, 1), timeLoop);
    renderer.material.color = lerpedColor;
}

if (Input.GetMouseButtonDown(0)) {
            var hit: RaycastHit;
            var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            Debug.DrawRay (ray.origin, ray.direction * 100, Color.red);
            
            if (Physics.Raycast(ray, hit)) {
            	if(hit.collider.gameObject.name == gameObject.name){
             		
             	//load next level
             	Application.LoadLevel ("Standoff_Sudoku_Level_2");
             	
					}
				}
			}
}

function Delay(){
	yield WaitForSeconds(3);
}