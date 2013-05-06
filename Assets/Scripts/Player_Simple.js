



var mouseHoldDown : float;
var suffocate: boolean = false;
var timeElapsedSinceSuffocate: float;
var tapAfterSuffocate: boolean = false;
var aimingAtBadGuy: boolean = false;

var myCurrTarget: GameObject;
var iNoLike: GameObject;


function Start () {

  myCurrTarget = iNoLike; 

  var targetRotation = Quaternion.LookRotation(myCurrTarget.transform.position - transform.position);
  //targetRotation.x = 0.0;
  //targetRotation.y = 0.0;
  transform.rotation = targetRotation;
  
  aimingAtBadGuy = true;

}

function Update () {

}