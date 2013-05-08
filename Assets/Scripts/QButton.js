
var iAmThisButton: GameObject;
var assocImageToDrop: Transform;
//var dropGUI: boolean = false;
var amountFall: float;
var dropEven: int = 0;
var GuiInfoOriginalZPosition: float;
var guiOriginalVec: Vector3;


//var pointA:Vector3;
//var pointB:Vector3;
var time:float = 10;
private var i:float = 0.0;
private var rate:float = 0.0;
var speed: float;


function Start () {
    GuiInfoOriginalZPosition = assocImageToDrop.transform.position.z; 
	guiOriginalVec = assocImageToDrop.position; 
	print("guiOriginalVec "+guiOriginalVec);
	print("assocImageToDrop.position " + assocImageToDrop.position);

}

function Update () {

    rate = 1.0/time;
    if (i < 1.0)
    {
        i += Time.deltaTime * rate;
        //GuiImage.position = Vector3.Lerp(startPos, endPos, i);
    }


if (Input.GetMouseButtonDown(0) && dropEven%2 == 0){
		var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		var hit : RaycastHit;
	if (Physics.Raycast (ray, hit)) {
    	if(hit.collider.gameObject == iAmThisButton){
    		print("Hit Question Mark. Gui should be going down.");
    		assocImageToDrop.transform.position.z -= amountFall;
    		//assocImageToDrop.transform.position = Vector3.Lerp(guiOriginalVec, Vector3(guiOriginalVec.x, guiOriginalVec.y, (guiOriginalVec.z - amountFall)), i);
    		//MoveObject(assocImageToDrop, guiOriginalVec, Vector3(guiOriginalVec.x, guiOriginalVec.y, (guiOriginalVec.z - amountFall)), time);
    		 //transform.Translate(Vector3(guiOriginalVec.x, guiOriginalVec.y, (guiOriginalVec.z - amountFall)) * Time.deltaTime);
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
    	print("Hit Question Mark Gui Should be going up.");
   		assocImageToDrop.transform.position.z = GuiInfoOriginalZPosition;
   		//assocImageToDrop.transform.position = Vector3.Lerp(assocImageToDrop.transform.position, guiOriginalVec, i);
   		//MoveObject(assocImageToDrop, assocImageToDrop.position, guiOriginalVec, time);
   		
   		dropEven++;
   
   			}
		}
	}
}



function MoveObject (GuiImage : Transform, startPos : Vector3, endPos : Vector3, time : float) 
{
    rate = 1.0/time;
    if (i < 1.0)
    {
        i += Time.deltaTime * rate;
        GuiImage.position = Vector3.Lerp(startPos, endPos, i);
    }
}