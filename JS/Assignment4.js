$(document).ready(function(){
    $("#areaDropdown").change(function() {
        var selectedIndex = $("#areaDropdown option:selected").index();
        
        if (selectedIndex == "0") {
            if ($("#area1Wrapper").css("display") != "none"){
                $("#area1Wrapper").fadeOut();
            }
            else if ($("#area2Wrapper").css("display") != "none") {
                $("#area2Wrapper").fadeOut();
            }    
        }
        
        else if(selectedIndex == "1"){
            if ($("#area2Wrapper").css("display") != "none"){
                $("#area2Wrapper").fadeOut(function(){
                    $("#area1").show();
                    $("#area1Wrapper").fadeIn();
                });
            }
            else{
                $("#area1").show();
                $("#area1Wrapper").fadeIn();
            }
        }
        
        else if(selectedIndex == "2"){
            if ($("#area1Wrapper").css("display") != "none"){
                 $("#area1Wrapper").fadeOut(function(){
                    $("#area2").show();
                    $("#area2Wrapper").fadeIn();
                 });
            }
            else{
                $("#area2").show();
                $("#area2Wrapper").fadeIn();
            }
        }
    });
});