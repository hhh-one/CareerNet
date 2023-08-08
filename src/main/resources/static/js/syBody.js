

	function fn_clickThemeCode(a){
    event.target.classList.toggle('on');
}

function fn_clear(){
    $('.type1 li a').removeClass("on");
}
function active(){
    
   if($(event.target.tagName=="A")){
    $(event.target).closest("ul").find(".active").toggleClass("active");
    $(event.target).closest("li").toggleClass("active");
    
    var active="#"+$(event.target).closest("li").data("tab");
    var all = document.querySelectorAll(".right_cont");
            for (var i = 0; i < all.length; i++) all[i].classList.remove("current");
    $(active).toggleClass("current");
    // $(active).add("current");
    }
}

function fn_changeTab(a){
    
    $(event.target).closest("ul").find(".selected").removeClass("selected");
    $(event.target).closest("li").addClass("selected");
   
    var tab=$(event.currentTarget).attr("href")
    
    var all=document.querySelectorAll(".tabWrap");
    for(var i=0; i<all.length;i++) all[i].style.display="none";



    $(tab).attr("style","display: block;")

}


function fn_clickAbltyCode(a,b,c){
	
	
	
	
	
    if($(event.target).closest("a").attr("name")=='abltyTagA'){
    $(event.target).closest("ul").find("li").children().removeClass("on");

    $(event.target).closest("a").addClass("on");
    var num=c.split(",");
    
    $("#searchAbltyCodes").val(a);
    $("#searchAptdCodes").val(c);
    $('#abltyStr').val($(event.target).closest("a").children().html())
    $('.job_type_fl').find("li").removeClass("check");
    $('.job_type_fl').find("input").removeAttr("checked");
    $('.job_type_fl').find("input").prop("checked",false);
    	console.log(num)
	   $.ajax({
		url:"../api/getData",
		type:"POST",
		data:JSON.stringify({"aptd_type_code":num}),
		contentType: "application/json",
    	dataType: "json",
		success:function(data){
			console.log("good!!")			
		},
		error:function(status,error){
			console.log(status)
		}
    
		
		
	})
    for(var i=0; i<num.length; i++){
        $('#aptdTagLi'+num[i]).addClass("check");
        $('#aptdTagLi'+num[i]).first().children().attr("checked","checked")
        $('#aptdTagLi'+num[i]).first().children().prop("checked",true)
        
	}
    }else{
        $(".on").removeClass("on")
        $('.job_type_fl').find("li").removeClass("check");
        $('.job_type_fl').find("input").prop("checked",false);
        $('.job_type_fl').find("input").removeAttr("checked");


        var tab=$(".jobdicType_icon_bx02").children();
        for(var i=0; i<tab.length; i++){
            if($(tab[i]).children().first().data("value").match(a)!=null){
                $(tab[i]).children().first().addClass("on")
                
            }
        }
        $(event.target).closest("li").toggleClass("check");
        $(event.target).closest("input").attr("checked","checked");
        $(event.target).closest("input").prop("checked",true);


	}
}

