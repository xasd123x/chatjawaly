
$("style").last().append(`
#users .uzr.shihanh1 .fitimg.u-pic {
  border-radius: 100px !important;
  margin-top: 2px !important;
  height: 55px !important;
  margin-left: -5px !important;
  width: 55px;
}
#users .uzr.shihanh1 .d-flex.dots {
  margin-top: 7px !important;
  margin-left: 5px;
}
#users .uzr.shihanh1 .u-msg {
  text-align: center;
  -webkit-background-clip: text;
  padding: 1px !important;
  font-size: 89% !important;
  -webkit-text-fill-color: #0000;
  background-image: url(https://i.ibb.co/JzgnvW8/61.gif);
  color: transparent !important;
  background-size: 90% 100%;
}
#users .uzr.shihanh1 .ustat {
width: 12px !important;
border-radius: 50px !important;
height: 12px !important;
min-height: 0% !important;
z-index: 0 !important;
}
#users .uzr.shihanh1 span.uhash {
  margin-right: 324px;
  margin-top: 24px;
  margin-left: 0px;
}
#users .uzr.shihanh1 img.co {
  transform: rotate(90deg);
  margin-top: -60px !important;
  margin-right: 282px;
}
#users .uzr.shihanh1 {
  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
  border-radius: 4px;
  background-size: cover;
  border: 1px solid #fff;
}
#users .uzr.shihanh1 .c-flex.fr {
  margin-left: -4px!important;
  float: left;
}
#users .uzr.shihanh1 .d-flex.fl {
  padding-right: 0px !important;
}
#users .uzr.shihanh1 .u-topic {
  margin-left: 5px;
}
#users .uzr.shihanh1 .shihanh_star1 {
width: 61px;
margin-top: -2px;
height: 60px;
margin-left: -4px;
}


`);
var l_itvshihanh=setInterval(function(){
    if(myid!=null){
        clearInterval(l_itvshihanh);
        $("#users .uzr:contains('شيهَانـَه')").addClass('shihanh1');
        $("#users .uzr.shihanh1 .fitimg.u-pic").append('<img class="shihanh_star1" src="https://up6.cc/2023/02/167579621323341.png">');
		$("#users .uzr.shihanh1 span.u-topic").after('<img id="mystory1" class="My_vedio1" title="ستوري" style="float: right;width: 20px;margin-top: 0px;margin-right: 5px;cursor: pointer;" src="https://i.ibb.co/47VS4nY/image.png">');
        $("#users .uzr.shihanh1 span.uhash, #users .uzr.shihanh1 img.co").hide(); 
        $("#upro").before('<div id="movon1" onclick="$(this).hide().html(``);" class="moveon1" style="display:none;width:100%;height:100%;z-index:999999;position: fixed;left: 0px;top: 0px;background-color: rgba(0, 0, 0, 0.6);">');
        $("div#users .uzr.shihanh1 .My_vedio1").click(function(){
        $("#movon1").show();
        $('#movon1').addClass('athb1');
        $("#movon1").before('<div class="modal-dialog fr break" style="height: 338px; max-width: 340px; min-width: 300px; min-height: 599px;overflow: visible;margin-top:40px;"></div>');
        $("#movon1").append('<div style="max-width: 340px; min-width: 300px; color:white; width: 338px; float: right;" class="modal-header label-primary"><span class="pull-right clickable badge"><i class="fa fa-times"></i></span><label style="margin:1px; float: right;" > My vedio </label></div>');  
        $("#movon1").append('<iframe id="ifr_mov1" style="max-width: 340px;min-width: 300px;right: 0; top: 35px; left: auto;" class="modal in" role="dialog" style="z-index: 2100; display: none; style="max-width:240px;" src="https://www.youtube.com/embed/ubts5AU4kWA" allowfullscreen="" width="338" height="490" frameborder="0"></iframe>');
        $("#ifr_mov1").show(function(){
        $("#upro").modal("hide");
    } ); 
});
    }
}, 10000);
