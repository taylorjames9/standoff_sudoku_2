
var iAmThisButton: GameObject;
var assocImageToDrop: GameObject;
var dropGUI: boolean = false;
var amountFall: float;
var dropEven: int =0;
var GuiInfoOriginalZPosition: float;


function Start () {

GuiInfoOriginalZPosition = assocImageToDrop.transform.position.z; 


}

function Update () {


if (Input.GetMouseButtonDown(0) && dropEven%2 ==0){
		var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		var hit : RaycastHit;
	if (Physics.Raycast (ray, hit)) {
    	if(hit.collider.gameObject == iAmThisButton){
    		assocImageToDrop.transform.position.z -= amountFall;
    		dropEven++;
    	
    	}	
    }
   }
   
   else if(Input.GetMouseButtonDown(0) && dropEven%2 == 1)
   {
   		var ray2 = Camera.main.ScreenPointToRay (Input.mousePosition);
		var hit2 : RaycastHit;
	if (Physics.Raycast (ray2, hit2)) {
    	if(hit2.collider.gameObject == iAmThisButton){
   		assocImageToDrop.transform.position.z = GuiInfoOriginalZPosition;
   		dropEven++;
   
   }
   
}
}
}