

var myPercentAccuracy: String = "45";

function Start () {

}

function Update () {

//renderer.material.shader = Shader.Find ("Specular");
renderer.material.SetColor ("_Color", Color.red);
GetComponent(TextMesh).text = (myPercentAccuracy+"%");

}