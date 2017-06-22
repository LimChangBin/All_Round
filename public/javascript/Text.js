function testCircle(cx, cy)
{
      var circle = board.append("circle")
            .attr("cx",cx)
            .attr("cy",cy)
            .attr("r",4)
            .attr("fill","white")
            .attr("stroke","black")
            .attr("id",'tmz')
            .attr('class','tmz')
            .attr("stroke-width",2);
      return circle;
}

function resultShow()
{
    var result="";
    result += "drawingFigure : " + State.drawingFigure + "<br>";
    result += "selectedCount : " + State.selectedCount + "<br>";
    for(var i=0;i<State.selectedCount;i++)
      result += "["+i+"] : " + State.selectedID_List[i] + "<br>";
    d3.select('#result').html(result);
}
  $("#size").click(function()
  {
    document.execCommand("FontSize", false, $("#size_value").val());
    move_To_Sub();
  });

  $("#size_down").click(function()
  {
    var base_size = document.queryCommandValue("FontSize");
    document.execCommand("FontSize", false, parseInt(base_size)-1);
    move_To_Sub();
  });

  $("#size_up").click(function()
  {
    if(State.font_size==7)
      State.font_size = 1;
    else
      State.font_size++;
    var base_size = document.queryCommandValue("FontSize");
    document.execCommand("FontSize", false, State.font_size);
    move_To_Sub();
  });

  $("#btn_font").on('click',function()
  {
    console.log(State.font);
    document.execCommand("FontName", false, State.font);
    move_To_Sub();
  });

  $("#colors_word").on('change',function()
  {
    document.execCommand("ForeColor", false, $("#colors_word").val());
    move_To_Sub();
  });

  $("#colors_wordbackground").on('change',function()
  {
    document.execCommand("backColor", false, $("#colors_wordbackground").val());
    move_To_Sub();
  });

  $("#reset").click(function()
  {
    document.execCommand("RemoveFormat");
    move_To_Sub();
  });

  $("#print").click(function()
  {
    document.execCommand("print");
    move_To_Sub();
  });

  $("#left").click(function()
  {
    document.execCommand("JustifyLeft");
    move_To_Sub();
  });

  $("#justify").click(function()
  {
    document.execCommand("JustifyLeft");
    move_To_Sub();
  });


  $("#right").click(function()
  {
    document.execCommand("JustifyRight");
    move_To_Sub();
  });

  $("#center").click(function()
  {
    document.execCommand("JustifyCenter");
    move_To_Sub();
  });

  $("#orderedList").click(function()
  {
    document.execCommand("insertOrderedList");
    // board.select('div#'+State.selectedID_List[0]).select('li').style('font-size','50px');
    move_To_Sub();
  });

  $("#unOrderedList").click(function()
  {
    document.execCommand("insertUnorderedList");
    move_To_Sub();
  });

  $("#createLink").click(function()
  {
    document.execCommand("createLink", false, $("#createLink_value").val());
    move_To_Sub();
  });

  $("#unLink").click(function()
  {
    document.execCommand("unLink");
    move_To_Sub();
  });

  $("#shtml").on('click',function()
  {
    $("#text").val($("#textEditor").contents().find("body").html());
    move_To_Sub();
  });


///////////////////////////////////////
  $("#colors_svgbackground").on('change',function()
  {
    State.svg_background_color = $("#colors_svgbackground").val();

    board.style("background-color",State.svg_background_color);
    document.getElementById('board').style.backgroundImage = "none";

    for(var i=0; i<slide_list.length; i++)
    {
      d3.select("#"+ slide_list[i]).style("background-color",State.svg_background_color);
      document.getElementById(slide_list[i]).style.backgroundImage = "none";
    }
    d3.select("#id_sub_hidden").style("background-color",State.svg_background_color);
    document.getElementById("id_sub_hidden").style.backgroundImage = "none";
    move_To_Sub();
  });

  $("#colors_figurebackground").on('change',function()
  {
    State.fill = $("#colors_figurebackground").val();
    console.log('back');
    for(var i=0; i< State.selectedCount; i++)
    {
      board.select('path.'+State.selectedID_List[i]).attr('fill',State.fill);
    }
    move_To_Sub();
  });

  $("#colors_figureborder").on('change',function()
  {
    State.stroke = $("#colors_figureborder").val();
    for(var i=0; i< State.selectedCount; i++)
    {
      board.select('path.'+State.selectedID_List[i]).attr('stroke',State.stroke);
    }
    move_To_Sub();
  });

  $("#width_figure").on('click',function()
  {
    if(State.stroke_width==5)
      State.stroke_width = 1;
    else
      State.stroke_width++;
    for(var i=0; i< State.selectedCount; i++)
    {
      board.select('path.'+State.selectedID_List[i]).attr('stroke-width',State.stroke_width);
      if(State.selectedID_List[i].indexOf('line')===0)
          board.select('line.'+State.selectedID_List[i]).attr('stroke-width',State.stroke_width);
    }
    move_To_Sub();
  });


  d3.select('#opacity_set').on('change',function(e){
        var opacity = this.value/100;
        for(var i=0;i<State.selectedCount;i++)
        {
            console.log(d3.select('path.'+State.selectedID_List[i]));
           board.select('path.'+State.selectedID_List[i]).attr('opacity',opacity);
        }
        move_To_Sub();
  });
