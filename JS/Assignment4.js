$(document).ready(function(){
    $("footer").animate({width: "toggle"},"slow");
    $("#areaDropdown").change(function() {
        var selectedIndex = $("#areaDropdown option:selected").index();
        
        if (selectedIndex == "0") {
            if ($("#area1Wrapper").css("display") != "none"){
                $("#area1Wrapper").fadeOut("medium");
            }
            else if ($("#area2Wrapper").css("display") != "none") {
                $("#area2Wrapper").fadeOut("medium");
            }    
        }
        
        else if(selectedIndex == "1"){
            if ($("#area2Wrapper").css("display") != "none"){
                $("#area2Wrapper").fadeOut("medium",function(){
                    $("#area1").show();
                    //Run this code if height has the inherit property -- for mobile
                    if ($("#area1Wrapper").css("height") == "inherit") {
                        $("#area1Wrapper").fadeIn("medium").css({"display": "block"});
                    }
                    else{
                        $("#area1Wrapper").fadeIn("medium").css({"display": "inline-block"});   
                    }
                });
            }
            else{
                $("#area1").show();
                if ($("#area1Wrapper").css("height") == "inherit") {
                        $("#area1Wrapper").fadeIn("medium").css({"display": "block"});
                    }
                else{
                        $("#area1Wrapper").fadeIn("medium").css({"display": "inline-block"});   
                    }
            }
        }
        
        else if(selectedIndex == "2"){
            if ($("#area1Wrapper").css("display") != "none"){
                 $("#area1Wrapper").fadeOut("medium",function(){
                    $("#area2").show();
                    if ($("#area2Wrapper").css("height") == "inherit") {
                        $("#area2Wrapper").fadeIn("medium").css({"display": "block"});
                    }
                    else{
                        $("#area2Wrapper").fadeIn("medium").css({"display": "inline-block"});   
                    }
                 });
            }
            else{
                $("#area2").show();
                if ($("#area1Wrapper").css("height") == "inherit") {
                        $("#area1Wrapper").fadeIn("medium").css({"display": "block"});
                    }
                    else{
                        $("#area1Wrapper").fadeIn("medium").css({"display": "inline-block"});   
                    }
            }
        }
    });
});
/*    
    var areasWrapper = document.getElementById("areasWrapper");
    var area1 = document.getElementById("area1");
    var area2 = document.getElementById("area2");
    var area1Vis = window.getComputedStyle(area1,null).getPropertyValue("display");
    var area2Vis = window.getComputedStyle(area2,null).getPropertyValue("display");
    
    /* Test selected index of the dropdown list to determine which section toggle. This is to make the logic more dynamic in case the
     * dropdown option names were to change.
     * Index 0 = None
     * Index 1 = Area 1
     * Index 2 = Area 2, etc. 
    
    if (dropDownListOption == "0") {
        if ((area1Vis != "none") || (area2Vis != "none")) {
            $("areasWrapper").fadeOut("fast", function(){
                $(area1).toggle(false);
                $(area2).toggle(false)
            });
        }
    }
    
    else if (dropDownListOption == "1") {
        if (area2Vis != "none") {
            $("areasWrapper").fadeOut("fast", function(){
                $(area2).toggle(false);
            });
        }
        if (area1Vis == "none") {
            $(area1).toggle(true);
            $("#areasWrapper").fadeIn("fast").css({"display":"inline-block"});
            var newArea1Dis = window.getComputedStyle(area1,null).getPropertyValue("display");
        }
    }
    
    else if (dropDownListOption == "2") { 
        if (area1Vis != "none") {
            $(area1).toggle(false);  
        }
        /*
        if (area2Vis == "none") {
            $(area2).toggle(true);
            $("#areasWrapper").fadeIn("fast").css({"display":"inline-block"});
              
        }
        
    }
    
}
*/