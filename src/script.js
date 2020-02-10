$(document).ready(function() {
  
  $(".ani1").addClass('animated fadeInUp');
   $("#searchbar").addClass('animated flash');
   $(".b").addClass('animated fadeInDown');
  
  
   //$("#statustable").hide();
    $("#s").hide();
   
    var userarr = ["monstercat","ESL_SC2", "OgamingSC2", "cretetion", "habathcx", "freecodecamp" , "RobotCaleb", "noobs2ninjas", "frinlet"];
  
  //start of displaying codecamp status
    $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/freecodecamp", function(result) {
      // console.log(result);
        if (result.stream == null) {
            $(".fccstatus").html("<a href='https://www.twitch.tv/freecodecamp' target='_blank'><b> Freecodecamp</b></a> is offline at the moment");
        } else {
            $(".fccstatus").html("<a href='https://www.twitch.tv/freecodecamp'>Freecodecamp</a> is streaming now");
        }
    });
    //end of displaying codecamp status
  
     //strat of displaying  all channels in array when loaded
    for (var i = 0; i < userarr.length; i++)
    // $.each(userarr,function(i,arr){   
    {
        (function(i) {
            url = 'https://wind-bow.glitch.me/twitch-api/channels/' + userarr[i];

            $.getJSON(url, function(result) {
                console.log(i);
                $(".tablebody1").append("<tr id='"+i+"'><td><a target ='_blank' href='" + result.url + "'><img src='" + result.logo + "'></a></td><td id='abc'>" + result.display_name + "</td><td>" + result.status + "</td></tr>");

            });
        })(i);
    }
    //end of  displaying  all channels in array when loaded

//status
  for(i=0;i<userarr.length;i++){(
    
    function(i)
    {    
  //start of displaying codecamp status
      url="https://wind-bow.glitch.me/twitch-api/streams/"+userarr[i];
    $.getJSON(url, function(result) 
      { 
        
        if (result.stream != null)
        {    
           
               $("#"+i).css("background-color","#d9f2f4"); 
                $("#"+i).css("color","#141f23"); 
        } 
     
    });
    //end of displaying codecamp status
})(i);
}
  
  
  
  
  
  
  
  
  
    //start of search field  output
    $("#search").on("click", function(event) {
        event.preventDefault();
        $('.tablebody0').html('');
         $(".fly").addClass('animated rollOut');
        $("p").html("Result for searched channel")
        $("#s").show();
        var searchval = $("#searchaterm").val();
        console.log(searchval);
        var url4 = 'https://wind-bow.glitch.me/twitch-api/channels/' + searchval;
       // console.log(url4);
        $.getJSON(url4, function(result) {
            console.log(result.stream);
            // console.log(typeof(result.status)=="number");
            if (typeof(result.status) == "number") {
                $(".tablebody0").prepend("<tr ><td></td><td>" + searchval + "</td><td>This channel doesn't exist.Please try another one.</td></tr>");
                
            } else {

                $(".tablebody0").prepend("<tr><td><a target ='_blank' href='" + result.url + "'><img alt=" + searchval + " src='" + result.logo + "'></a></td><td>" + result.display_name + "</td><td>" + result.status + "</td></tr>");
              
            }



        });
        $("#searchaterm").val('');
    });

    //end of  search field  output

 $("#searchaterm").keypress(function(e){
      if(e.which==13){
        $("#search").click();
      }
    //operations performed on pressing enter button
 
   
    });

 
  
   
  
});

function myFun() {
  
    location.reload(true);
}