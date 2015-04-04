$(document).ready(function(){
    $("#areaDropdown").change(function() {
        var selectedIndex = $("#areaDropdown option:selected").index();
        
        if (selectedIndex == "0") {
            if ($("#area1Wrapper").css("display") != "none"){
                $("#area1Wrapper").hide();
            }
            else if ($("#area2Wrapper").css("display") != "none") {
                $("#area2Wrapper").hide();
            }    
        }
        
        else if(selectedIndex == "1"){
            if ($("#area2Wrapper").css("display") != "none"){
                $("#area2Wrapper").hide(function(){
                    $("#area1").show();
                    $("#area1Wrapper").show();
                });
            }
            else{
                $("#area1").show();
                $("#area1Wrapper").show();
            }
        }
        
        else if(selectedIndex == "2"){
            if ($("#area1Wrapper").css("display") != "none"){
                 $("#area1Wrapper").hide(function(){
                    $("#area2").show();
                    $("#area2Wrapper").show();
                 });
            }
            else{
                $("#area2").show();
                $("#area2Wrapper").show();
            }
        }
    });
});