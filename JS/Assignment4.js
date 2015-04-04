$(document).ready(function(){
    $("#areaDropdown").change(function() {
        var selectedIndex = $("#areaDropdown option:selected").index();
        
        if (selectedIndex == "0") {
            if ($("#area1Wrapper").css("display") != "none"){
                $("#area1Wrapper").fadeOut("slow");
            }
            else if ($("#area2Wrapper").css("display") != "none") {
                $("#area2Wrapper").fadeOut("slow");
            }    
        }
        
        else if(selectedIndex == "1"){
            if ($("#area2Wrapper").css("display") != "none"){
                $("#area2Wrapper").fadeOut("slow",function(){
                    $("#area1").show();
                    $("#area1Wrapper").fadeIn("slow");
                });
            }
            else{
                $("#area1").show();
                $("#area1Wrapper").fadeIn("slow");
            }
        }
        
        else if(selectedIndex == "2"){
            if ($("#area1Wrapper").css("display") != "none"){
                 $("#area1Wrapper").fadeOut("slow",function(){
                    $("#area2").show();
                    $("#area2Wrapper").fadeIn("slow");
                 });
            }
            else{
                $("#area2").show();
                $("#area2Wrapper").fadeIn("slow");
            }
        }
    });
});