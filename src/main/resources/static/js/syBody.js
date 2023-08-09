
$(document).ready(function(){
	
	$.ajax({
		
		url:"../api/getTarget?bno=1&amount=9",
		type:"GET",
		dataType:"json",
		success:function(data){
			$.ajax({
			url:"../api/getPageN?bno=1&amount=9",
			type:"GET",
			dataType:"json",
			success:function(data1){
				var pn="";
					
					if(data1.prev!=false){
						pn+='<a class="pageBtngo" href="#" onclick="fn_page();return false; " data-set=1 ><img src="/img/icon_prevend.gif" alt="맨앞" ></a>&nbsp';
						pn+='<a class="pageBtngo" href="#" onclick="fn_page();return false; " data-set='+(data1.start-1)+'><img src="/img/icon_prev.gif" alt="이전"></a>&nbsp;'
					}
            		for(var i=0; i<data1.pageList.length; i++){
						if(data1.pageList[i]%10==1){
            			pn+='<a class="onHere" href="#" onclick="fn_page();return false;" data-set="'+data1.pageList[i]+'">'+data1.pageList[i]+'</a>&nbsp';
						}else{
            			pn+='<a class="pageBtn" href="#" onclick="fn_page();return false;" data-set="'+data1.pageList[i]+'">'+data1.pageList[i]+'</a>&nbsp';
							
						}
					}
           
           	    	if(data1.next!=false){
           			pn+='<a class="pageBtngo" href="#" onclick="fn_page();return false; "data-set='+(data1.end+1)+'><img src="/img/icon_next.gif" alt="다음"></a>&nbsp';
            		pn+='<a class="pageBtngo" href="#" onclick="fn_page();return false; " data-set='+(data1.realEnd)+'><img src="/img/icon_nextend.gif" alt="맨뒤" ></a>&nbsp</div>'
					}            
					
					$('#pagination').html(pn);
					
				
				},
			error:function(err){
			
			}
		
			})
			console.log(data)
			var str="";
			for(var i=0; i<data.length; i++){
				
				str+='<li th:each="vo : ${list}" >';
				str+='<a href=/syBody/syBody1?seq='+data[i].jobdicSeq+'  onclick="javascript:fn_view(this.href, 122); return false;" class="gallery_job_bx">';
				str+='<div class="job_tit_bx">';
				str+='<strong>'+data[i].job+'</strong>';
				str+='<p>'+data[i].summary+'</p></div>';
				str+='<ul class="job_terms_bx"><li><em>평균연봉</em>';
				str+='<span>'+data[i].salery+'</span></li><li>';
				str+='<em>일가정균형</em>';
				str+='<span>보통이상</span></li><li>';
				str+='<em>사회공헌</em>';
				str+='<span>'+data[i].equalemployment+'</span></li></ul></a></li>';
			}
			
			$("#JOB_DETAIL_LIST").html(str);
		},
		error:function(err){
			
		}
		
		
	})
	
	
})


	function fn_clickThemeCode(a){
    event.target.classList.toggle('on');
}

function fn_clear(){
			$("#totalCnt").html(454)
    $('.type1 li a').removeClass("on");
     $('.job_type_fl').find("input").removeAttr("checked");
    $('.job_type_fl').find("input").prop("checked",false);
     $('.job_type_fl').find("li").removeClass("check");
     	$.ajax({
		
		url:"../api/getTarget?bno=1&amount=9",
		type:"GET",
		dataType:"json",
		success:function(data){
     console.log(data)
			var str="";
			for(var i=0; i<data.length; i++){
				
				str+='<li th:each="vo : ${list}" >';
				str+='<a href=/syBody/syBody1?seq='+data[i].jobdicSeq+'  onclick="javascript:fn_view(this.href, 122); return false;" class="gallery_job_bx">';
				str+='<div class="job_tit_bx">';
				str+='<strong>'+data[i].job+'</strong>';
				str+='<p>'+data[i].summary+'</p></div>';
				str+='<ul class="job_terms_bx"><li><em>평균연봉</em>';
				str+='<span>'+data[i].salery+'</span></li><li>';
				str+='<em>일가정균형</em>';
				str+='<span>보통이상</span></li><li>';
				str+='<em>사회공헌</em>';
				str+='<span>'+data[i].equalemployment+'</span></li></ul></a></li>';
			}
			
			$("#JOB_DETAIL_LIST").html(str);
			
		},
		error:function(err){
			
		}
		
		
	})
	
     
     
     
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
    
    	
	   $.ajax({
		url:"../api/getData",
		type:"POST",
		data:JSON.stringify({
			"aptd_type_code":num}),
		contentType: "application/json",
    	dataType: "json",
		success:function(data){
			
			

			var str="";
			for(var i=0; i<data.length; i++){
				
				str+='<li th:each="vo : ${list}" >';
				str+='<a href=/syBody/syBody1?seq='+data[i].jobdicSeq+' onclick="javascript:fn_view(this.href, 122); return false;" class="gallery_job_bx">';
				str+='<div class="job_tit_bx">';
				str+='<strong>'+data[i].job+'</strong>';
				str+='<p>'+data[i].summary+'</p></div>';
				str+='<ul class="job_terms_bx"><li><em>평균연봉</em>';
				str+='<span>'+data[i].salery+'</span></li><li>';
				str+='<em>일가정균형</em>';
				str+='<span>보통이상</span></li><li>';
				str+='<em>사회공헌</em>';
				str+='<span>'+data[i].equalemployment+'</span></li></ul></a></li>';
			}
			
			$("#JOB_DETAIL_LIST").html(str);
			$("#totalCnt").html(data.length)
		
			
			
			
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
        
        $.ajax({
		url:"../api/getDataOne?bno="+$(event.target).closest("input").val(),
		type:"GET",
		contentType: "application/json",
    	dataType: "json",
		success:function(data){
			

			var str="";
			for(var i=0; i<data.length; i++){
				
				str+='<li th:each="vo : ${list}" >';
				str+='<a href=/syBody/syBody1?seq='+data[i].jobdicSeq+' onclick="javascript:fn_view(this.href, 122); return false;" class="gallery_job_bx">';
				str+='<div class="job_tit_bx">';
				str+='<strong>'+data[i].job+'</strong>';
				str+='<p>'+data[i].summary+'</p></div>';
				str+='<ul class="job_terms_bx"><li><em>평균연봉</em>';
				str+='<span>'+data[i].salery+'</span></li><li>';
				str+='<em>일가정균형</em>';
				str+='<span>보통이상</span></li><li>';
				str+='<em>사회공헌</em>';
				str+='<span>'+data[i].equalemployment+'</span></li></ul></a></li>';
			}
			
			$("#JOB_DETAIL_LIST").html(str);
			$("#totalCnt").html(data.length)
	
			

			
		},
		error:function(status,error){
			console.log(status)
		}
    
		
		
	})
        
        $(event.target).closest("li").toggleClass("check");
        $(event.target).closest("input").attr("checked","checked");
        $(event.target).closest("input").prop("checked",true);


	}
}


function fn_page(){
	
	
		$(".onHere").removeClass("onHere").addClass("pageBtn");
		
	
	var target= $(event.currentTarget).data("set");
	var a= $("select[name=pageSize] option:selected").val();
	$.ajax({
		
		url:"../api/getTarget?bno="+target+"&amount="+a,
		type:"GET",
		dataType:"json",
		success:function(data){
			
			$.ajax({
			url:"../api/getPageN?bno="+target+"&amount="+a,
			type:"GET",
			dataType:"json",
			success:function(data1){
				var pn="";
					
					if(data1.prev!=false){
						pn+='<a class="pageBtngo" href="#" onclick="fn_page();return false; " data-set=1 ><img src="/img/icon_prevend.gif" alt="맨앞" ></a>&nbsp';
						pn+='<a class="pageBtngo" href="#" onclick="fn_page();return false; " data-set='+(data1.start-1)+'><img src="/img/icon_prev.gif" alt="이전"></a>&nbsp;'
					}
            		for(var i=0; i<data1.pageList.length; i++){
						if(data1.pageList[i]==data1.cri.page){
            			pn+='<a class="onHere" href="#" onclick="fn_page();return false;" data-set="'+data1.pageList[i]+'">'+data1.pageList[i]+'</a>&nbsp';
						}else{
            			pn+='<a class="pageBtn" href="#" onclick="fn_page();return false;" data-set="'+data1.pageList[i]+'">'+data1.pageList[i]+'</a>&nbsp';
							
						}
					}
           
           	    	if(data1.next!=false){
           			pn+='<a class="pageBtngo" href="#" onclick="fn_page();return false; "data-set='+(data1.end+1)+'><img src="/img/icon_next.gif" alt="다음"></a>&nbsp';
            		pn+='<a class="pageBtngo" href="#" onclick="fn_page();return false; " data-set='+(data1.realEnd)+'><img src="/img/icon_nextend.gif" alt="맨뒤" ></a>&nbsp</div>'
					}            
					
					$('#pagination').html(pn);
					
				
				},
			error:function(err){
			
			}
		
			})
			var str="";
			for(var i=0; i<data.length; i++){
				
				str+='<li th:each="vo : ${list}" >';
				str+='<a href=/syBody/syBody1?seq='+data[i].jobdicSeq+' onclick="javascript:fn_view(this.href, 122); return false;" class="gallery_job_bx">';
				str+='<div class="job_tit_bx">';
				str+='<strong>'+data[i].job+'</strong>';
				str+='<p>'+data[i].summary+'</p></div>';
				str+='<ul class="job_terms_bx"><li><em>평균연봉</em>';
				str+='<span>'+data[i].salery+'</span></li><li>';
				str+='<em>일가정균형</em>';
				str+='<span>보통이상</span></li><li>';
				str+='<em>사회공헌</em>';
				str+='<span>'+data[i].equalemployment+'</span></li></ul></a></li>';
			}
			
			$("#JOB_DETAIL_LIST").html(str);
		},
		error:function(err){
			
		}
		
		
	})
	
	$(event.currentTarget).removeClass("pageBtn").addClass("onHere");
	
}



function changeAmount(){
	$(".onHere").removeClass("onHere").addClass("pageBtn");
	$("#pagination").children().first().removeClass("pageBtn").addClass("onHere");
	
	var a= $("select[name=pageSize] option:selected").val();
	$.ajax({
		url:"../api/getTarget?bno=1&amount="+a,
		type:"GET",
		dataType:"json",
		success:function(data){
				$.ajax({
			url:"../api/getPageN?bno=1&amount="+a,
			type:"GET",
			dataType:"json",
			success:function(data1){
				var pn="";
					
					if(data1.prev!=false){
						pn+='<a class="pageBtngo" href="#" onclick="fn_page();return false; " data-set=1 ><img src="/img/icon_prevend.gif" alt="맨앞" ></a>&nbsp';
						pn+='<a class="pageBtngo" href="#" onclick="fn_page();return false; " data-set='+(data1.start-1)+'><img src="/img/icon_prev.gif" alt="이전"></a>&nbsp;'
					}
            		for(var i=0; i<data1.pageList.length; i++){
						if(data1.pageList[i]==data1.cri.page){
            			pn+='<a class="onHere" href="#" onclick="fn_page();return false;" data-set="'+data1.pageList[i]+'">'+data1.pageList[i]+'</a>&nbsp';
						}else{
            			pn+='<a class="pageBtn" href="#" onclick="fn_page();return false;" data-set="'+data1.pageList[i]+'">'+data1.pageList[i]+'</a>&nbsp';
							
						}
					}
           
           	    	if(data1.next!=false){
           			pn+='<a class="pageBtngo" href="#" onclick="fn_page();return false; "data-set='+(data1.end+1)+'><img src="/img/icon_next.gif" alt="다음"></a>&nbsp';
            		pn+='<a class="pageBtngo" href="#" onclick="fn_page();return false; " data-set='+(data1.realEnd)+'><img src="/img/icon_nextend.gif" alt="맨뒤" ></a>&nbsp</div>'
					}            
					
					$('#pagination').html(pn);
					
				
				},
			error:function(err){
			
			}
		
			})
			var str="";
			for(var i=0; i<data.length; i++){
				
				str+='<li th:each="vo : ${list}" >';
				str+='<a href=/syBody/syBody1?seq='+data[i].jobdicSeq+' onclick="javascript:fn_view(this.href, 122); return false;" class="gallery_job_bx">';
				str+='<div class="job_tit_bx">';
				str+='<strong>'+data[i].job+'</strong>';
				str+='<p>'+data[i].summary+'</p></div>';
				str+='<ul class="job_terms_bx"><li><em>평균연봉</em>';
				str+='<span>'+data[i].salery+'</span></li><li>';
				str+='<em>일가정균형</em>';
				str+='<span>보통이상</span></li><li>';
				str+='<em>사회공헌</em>';
				str+='<span>'+data[i].equalemployment+'</span></li></ul></a></li>';
			}
			
			$("#JOB_DETAIL_LIST").html(str);
		},
		error:function(err){
			
		}
		
		
	})
	
	
	
}

function fn_pagebtn(){
	
	
	var target= $(event.currentTarget).data("set");
	var a= $("select[name=pageSize] option:selected").val();
	$.ajax({
		
		url:"../api/getTarget?bno="+target+"&amount="+a,
		type:"GET",
		dataType:"json",
		success:function(data){
			var str="";
			for(var i=0; i<data.length; i++){
				
				str+='<li th:each="vo : ${list}" >';
				str+='<a href=/syBody/syBody1?seq='+data[i].jobdicSeq+' onclick="javascript:fn_view(this.href, 122); return false;" class="gallery_job_bx">';
				str+='<div class="job_tit_bx">';
				str+='<strong>'+data[i].job+'</strong>';
				str+='<p>'+data[i].summary+'</p></div>';
				str+='<ul class="job_terms_bx"><li><em>평균연봉</em>';
				str+='<span>'+data[i].salery+'</span></li><li>';
				str+='<em>일가정균형</em>';
				str+='<span>보통이상</span></li><li>';
				str+='<em>사회공헌</em>';
				str+='<span>'+data[i].equalemployment+'</span></li></ul></a></li>';
				
				
				
				
				
			}
			
			$("#JOB_DETAIL_LIST").html(str);
		},
		error:function(err){
			
		}
		
		
	})
	
	
	
}



