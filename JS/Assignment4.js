$(document).ready(function(){
    $("#areaDropdown").change(function() {
        var selectedIndex = $("#areaDropdown option:selected").index();
        
        if (selectedIndex == "0") {
                $("#area1Wrapper").toggle(false);
                $("#area2Wrapper").toggle(false);
        }
        
        else if(selectedIndex == "1"){
            $("#area2Wrapper").toggle(false);
            $("#area1Wrapper").show("fast");
        }
        
        else if(selectedIndex == "2"){
            $("#area1Wrapper").toggle(false);
            $("#area2Wrapper").show("fast");
        }
    });
});