function toggleAreas(){
    var dropDownListOption = document.getElementById("areaDropdown").selectedIndex;
    var area1 = document.getElementById("area1");
    var area2 = document.getElementById("area2");
    var area1Vis = window.getComputedStyle(area1,null).getPropertyValue("visibility");
    var area2Vis = window.getComputedStyle(area2,null).getPropertyValue("visibility");
    
    /* Test selected index of the dropdown list to determine which section toggle. This is to make the logic more dynamic in case the
     * dropdown option names were to change.
     * Index 0 = Area 1
     * Index 1 = Area 2, etc. */
    
    if (dropDownListOption == "0") {
        if (area2Vis == "visible") {
            area2.style.visibility = "hidden";
        }
        else if (area1Vis == "hidden") {
            area1.style.visibility = "visible";
        }
    }
    
    if (dropDownListOption == "1") {
        area2.innerHTML = "Area 2";
    }
}
