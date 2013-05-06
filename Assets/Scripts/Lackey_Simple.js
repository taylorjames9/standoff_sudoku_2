


var sceneManager: SceneManager_Simple;

var iNoLike: GameObject;
var myBoss: GameObject;

var myCurrTarget: GameObject;



function Start () {

  myCurrTarget = iNoLike; 

  var targetRotation = Quaternion.LookRotation(myCurrTarget.transform.position - transform.position);
  transform.rotation = targetRotation;


}

function Update () {

}