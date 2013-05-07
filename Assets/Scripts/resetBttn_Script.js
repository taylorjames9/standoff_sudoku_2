



function Start () {

}



function Update () {

if (Input.GetMouseButtonDown(0)) {
            var hit: RaycastHit;
            var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            Debug.DrawRay (ray.origin, ray.direction * 100, Color.red);
       if (Physics.Raycast(ray, hit)) {
       		if(hit.collider.gameObject.name == "ResetBttn")
        		Application.LoadLevel ("Standoff_Sudoku_Simplest");
        }
}

}