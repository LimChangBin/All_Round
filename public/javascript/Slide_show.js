function full_screen()
{
    // check if user allows full screen of elements. This can be enabled or disabled in browser config. By default its enabled.
    //its also used to check if browser supports full screen api.
    if("fullscreenEnabled" in document || "webkitFullscreenEnabled" in document || "mozFullScreenEnabled" in document || "msFullscreenEnabled" in document)
    {
      console.log("location 1-1");
        if(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
        {
            bool_in_slide_show="true";

            d3.select("#id_sub_hidden").attr('transform','scale(7)');
            d3.select("#id_sub_hidden").style("display","inline");
            var element = document.getElementById("id_sub_hidden");
            document.getElementById("id_sub_hidden").innerHTML=document.getElementById(State.selectedEditor_id).innerHTML;
            //requestFullscreen is used to display an element in full screen mode.
            if("requestFullscreen" in element)
                element.requestFullscreen();
            else if ("webkitRequestFullscreen" in element)
                element.webkitRequestFullscreen();
            else if ("mozRequestFullScreen" in element)
                element.mozRequestFullScreen();
            else if ("msRequestFullscreen" in element)
                element.msRequestFullscreen();

            console.log("location 1-2");
        }
    }
    else
        console.log("User doesn't allow full screen");
}


d3.select("body").on("keydown", function()
{
    if(bool_in_slide_show == "true")
    {
      console.log(d3.event.keyCode);
      if(d3.event.keyCode == "13" || d3.event.keyCode=="39")
      {
        if(slide_list.indexOf(State.selectedEditor_id) < slide_list.length-1)
        {
          State.selectedEditor_id = slide_list[(slide_list.indexOf(State.selectedEditor_id))+1];
          // document.getElementById("board").innerHTML=document.getElementById(State.selectedEditor_id+"_g").innerHTML;
          document.getElementById("id_sub_hidden").innerHTML=document.getElementById(State.selectedEditor_id).innerHTML;
        }
      }
      if(d3.event.keyCode == "37")
      {
        if(slide_list.indexOf(State.selectedEditor_id) != 0)
        {
          State.selectedEditor_id = slide_list[(slide_list.indexOf(State.selectedEditor_id))-1];
          // document.getElementById("board").innerHTML=document.getElementById(State.selectedEditor_id+"_g").innerHTML;
          document.getElementById("id_sub_hidden").innerHTML=document.getElementById(State.selectedEditor_id).innerHTML;
        }
      }
    }
    else {
      ;
    }
});

function screen_change()
{
    //fullscreenElement is assigned to html element if any element is in full screen mode.
    if(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)
        console.log("Current full screen element is : " + (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement));
    else
    {
        d3.select("#id_sub_hidden").style("display","none");

        bool_in_slide_show="false";
        console.log("location 2");
        d3.select("#id_sub_hidden").attr('transform','scale(1/7)');
        // exitFullscreen us used to exit full screen manually
        if ("exitFullscreen" in document)
            document.exitFullscreen();
        else if ("webkitExitFullscreen" in document)
            document.webkitExitFullscreen();
        else if ("mozCancelFullScreen" in document)
            document.mozCancelFullScreen();
        else if ("msExitFullscreen" in document)
            document.msExitFullscreen();

    }
}

//called when an event goes full screen and vice-versa.
document.addEventListener("fullscreenchange", screen_change);
document.addEventListener("webkitfullscreenchange", screen_change);
document.addEventListener("mozfullscreenchange", screen_change);
document.addEventListener("MSFullscreenChange", screen_change);

//called when requestFullscreen(); fails. it may fail if iframe don't have allowfullscreen attribute enabled or for something else.
document.addEventListener("fullscreenerror", function(){console.log("Full screen failed");});
document.addEventListener("webkitfullscreenerror", function(){console.log("Full screen failed");});
document.addEventListener("mozfullscreenerror", function(){console.log("Full screen failed");});
document.addEventListener("MSFullscreenError", function(){console.log("Full screen failed");});
