


var iAm: GameObject;
var iLike1: GameObject;
var iLike2: GameObject;
var iLike3: GameObject;

var iNOLike1: GameObject;
var iNOLike2: GameObject;
var iNOLike3: GameObject;

var friendlySpirit1: GameObject;
var friendlySpirit2: GameObject;
var friendlySpirit3: GameObject;

var EnemyLine_1: GameObject;
var EnemyLine_2: GameObject;
var EnemyLine_3: GameObject;

var rel_line_tapCount: int;



function Start () {

}

function Update () {

if (Input.GetMouseButtonDown(0)) {
            var hit: RaycastHit;
            var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            Debug.DrawRay (ray.origin, ray.direction * 100, Color.red);
       if (Physics.Raycast(ray, hit)) {
       		if(hit.collider.gameObject.name == "MsDad"){
       			rel_line_tapCount++;
        		
        }
	}
}
}