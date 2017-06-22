function update_svg_background_img()
{
  document.getElementById('board').style.backgroundImage = State.svg_background_img;
  document.getElementById('board').style.backgroundRepeat = "no-repeat";
  document.getElementById('board').style.backgroundSize = "100% 100%";
  for(var i=0; i<slide_list.length; i++)
  {
    document.getElementById(slide_list[i]).style.backgroundImage = State.svg_background_img;
    document.getElementById(slide_list[i]).style.backgroundRepeat = "no-repeat";
    document.getElementById(slide_list[i]).style.backgroundSize = "100% 100%";
  }
  document.getElementById("id_sub_hidden").style.backgroundImage = State.svg_background_img;
  document.getElementById("id_sub_hidden").style.backgroundRepeat = "no-repeat";
  document.getElementById("id_sub_hidden").style.backgroundSize = "100% 100%";
  move_To_Sub();
}

function onclick_change_img()
{
  var target_figure = event.target.src;
  target_figure = target_figure.split('38000')[1];
  switch(target_figure)
  {
    case "/img/backgroundImg/bgimg1.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg1.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg2.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg2.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg3.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg3.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg4.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg4.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg5.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg5.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg6.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg6.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg7.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg7.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg8.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg8.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg9.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg9.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg10.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg10.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg11.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg11.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg12.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg12.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg13.png" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg13.png')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg14.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg14.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg15.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg15.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg16.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg16.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg17.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg17.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg18.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg18.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg19.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg19.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg20.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg20.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg21.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg21.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg22.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg22.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg23.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg23.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg24.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg24.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg25.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg25.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg26.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg26.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg27.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg27.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg28.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg28.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg29.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg29.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg30.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg30.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg31.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg31.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg32.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg32.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg33.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg33.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg34.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg34.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg35.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg35.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg36.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg36.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg37.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg37.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg38.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg38.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg39.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg39.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg40.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg40.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg41.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg41.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg42.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg42.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg43.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg43.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg44.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg44.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg45.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg45.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg46.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg46.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg47.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg47.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg48.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg48.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg49.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg49.jpg')";
        update_svg_background_img();
        break;
    case "/img/backgroundImg/bgimg50.jpg" :
        State.svg_background_img = "url('./img/backgroundImg/bgimg50.jpg')";
        update_svg_background_img();
        break;
  }

  // if(event.target.src = "file:///C:/Users/%EA%B2%BD%EB%AF%BC/Desktop/Editor_server8%3B/Editor_server8/public/img/backgroundImg/bgimg1.jpg")
  // {
  //   State.svg_background_img = "url('./img/backgroundImg/bgimg1.jpg')";
  //   update_svg_background_img();
  // }

}
//////////////////////////////////////////////////////////////////////

$("#figure_template1").on('click',function()
{
  board.select("path."+State.selectedID_List[0]).attr("fill","yellow");
  board.select("path."+State.selectedID_List[0]).attr("stroke","blue");
  board.select("path."+State.selectedID_List[0]).attr("stroke-width","5");
});




// 전체850-450
//
// 1/2  425-224
//
// 1/3  283-150
//
// 1/4  212-112

//////////////////////////////////////////////////////////////////////////////////////
$("#smartArt1").on('click',function()
{
  d3.selectAll('.textTemp').remove();
  d3.selectAll('.range').remove();
  State.selectedCount=0;
  draw_smartArt_figure("text",    [[225,174], [325,174], [325,274], [225,274]]);
  draw_smartArt_figure("arrowA",  [[338,211], [363,211], [363,232], [338,232]]);
  draw_smartArt_figure("text",    [[375,174], [475,174], [475,274], [375,274]]);
  draw_smartArt_figure("arrowA",  [[487,211], [512,211], [512,232], [487,232]]);
  draw_smartArt_figure("text",    [[525,174], [625,174], [625,274], [525,274]]);
  move_To_Sub();
  drawNothingModeSetting();
});

$("#smartArt2").on('click',function()
{
  d3.selectAll('.textTemp').remove();
  d3.selectAll('.range').remove();
  State.selectedCount=0;
  draw_smartArt_figure("text",    [[90,153], [260,153], [260,260], [90,260]]);
  draw_smartArt_figure("text",  [[310,153], [480,153], [480,260], [310,260]]);
  draw_smartArt_figure("text",    [[530,153], [700,153], [700,260], [530,260]]);
  draw_smartArt_figure("arrowA",  [[170,90], [660,90], [660,330], [170,330]]);
  move_To_Sub();
  drawNothingModeSetting();
});

$("#smartArt3").on('click',function()
{
  d3.selectAll('.textTemp').remove();
  d3.selectAll('.range').remove();
  State.selectedCount=0;
  draw_smartArt_figure("circle",    [[375,55], [475,55], [475,155], [375,155]]);
  draw_smartArt_figure("circle",    [[375,175], [475,175], [475,275], [375,275]]);
  draw_smartArt_figure("circle",    [[375,295], [475,295], [475,395], [375,395]]);
  draw_smartArt_figure("circle",    [[495,175], [595,175], [595,275], [495,275]]);
  draw_smartArt_figure("circle",    [[255,175], [355,175], [355,275], [255,275]]);

  move_To_Sub();
  drawNothingModeSetting();
});

$("#smartArt4").on('click',function()
{
  d3.selectAll('.textTemp').remove();
  d3.selectAll('.range').remove();
  State.selectedCount=0;
  draw_smartArt_figure("text",    [[225,175], [325,175], [325,200], [225,200]]);
  draw_smartArt_figure("text",    [[325,175], [425,175], [425,200], [325,200]]);
  draw_smartArt_figure("text",    [[425,175], [525,175], [525,200], [425,200]]);
  draw_smartArt_figure("text",    [[525,175], [625,175], [625,200], [525,200]]);

  draw_smartArt_figure("text",    [[225,200], [325,200], [325,225], [225,225]]);
  draw_smartArt_figure("text",    [[325,200], [425,200], [425,225], [325,225]]);
  draw_smartArt_figure("text",    [[425,200], [525,200], [525,225], [425,225]]);
  draw_smartArt_figure("text",    [[525,200], [625,200], [625,225], [525,225]]);

  draw_smartArt_figure("text",    [[225,225], [325,225], [325,250], [225,250]]);
  draw_smartArt_figure("text",    [[325,225], [425,225], [425,250], [325,250]]);
  draw_smartArt_figure("text",    [[425,225], [525,225], [525,250], [425,250]]);
  draw_smartArt_figure("text",    [[525,225], [625,225], [625,250], [525,250]]);

  draw_smartArt_figure("text",    [[225,250], [325,250], [325,275], [225,275]]);
  draw_smartArt_figure("text",    [[325,250], [425,250], [425,275], [325,275]]);
  draw_smartArt_figure("text",    [[425,250], [525,250], [525,275], [425,275]]);
  draw_smartArt_figure("text",    [[525,250], [625,250], [625,275], [525,275]]);


  move_To_Sub();
  drawNothingModeSetting();
});

$("#smartArt5").on('click',function()
{
  d3.selectAll('.textTemp').remove();
  d3.selectAll('.range').remove();
  State.selectedCount=0;
  draw_smartArt_figure("camel",    [[200,210], [400,210], [400,350], [200,350]]);
  draw_smartArt_figure("dialogA",  [[410,80], [710,80], [710,210], [410,210]]);


  move_To_Sub();
  drawNothingModeSetting();
});

$("#smartArt6").on('click',function()
{
  d3.selectAll('.textTemp').remove();
  d3.selectAll('.range').remove();
  State.selectedCount=0;
  draw_smartArt_figure("circle",    [[30,130], [170,130], [170,270], [30,270]]);
  draw_smartArt_figure("arrowA",  [[80,100], [280,100], [280,300], [80,300]]);

  draw_smartArt_figure("circle",    [[300,130], [440,130], [440,270], [300,270]]);
  draw_smartArt_figure("arrowA",  [[350,100], [550,100], [550,300], [350,300]]);

  draw_smartArt_figure("circle",    [[570,130], [710,130], [710,270], [570,270]]);
  draw_smartArt_figure("arrowA",  [[620,100], [820,100], [820,300], [620,300]]);

  move_To_Sub();
  drawNothingModeSetting();
});

$("#smartArt7").on('click',function()
{
  d3.selectAll('.textTemp').remove();
  d3.selectAll('.range').remove();
  State.selectedCount=0;
   draw_smartArt_figure("rect",    [[210,60], [310,60], [310,160], [210,160]]);
   draw_smartArt_figure("text",  [[230,70], [630,70], [630,170], [230,170]]);

   draw_smartArt_figure("rect",    [[210,180], [310,180], [310,280], [210,280]]);
   draw_smartArt_figure("text",  [[230,190], [630,190], [630,290], [230,290]]);

   draw_smartArt_figure("rect",    [[210,300], [310,300], [310,400], [210,400]]);
   draw_smartArt_figure("text",  [[230,310], [630,310], [630,410], [230,410]]);

  move_To_Sub();
  drawNothingModeSetting();
});

$("#smartArt8").on('click',function()
{
  d3.selectAll('.textTemp').remove();
  d3.selectAll('.range').remove();
  State.selectedCount=0;
   draw_smartArt_figure("rect",    [[210,90], [310,90], [310,160], [210,160]]);
   draw_smartArt_figure("rect",  [[230,155], [630,155], [630,160], [230,160]]);
   draw_smartArt_figure("text",  [[310,100], [630,100], [630,155], [310,155]]);

   draw_smartArt_figure("rect",    [[210,170], [310,170], [310,240], [210,240]]);
   draw_smartArt_figure("rect",  [[230,235], [630,235], [630,240], [230,240]]);
   draw_smartArt_figure("text",  [[310,180], [630,180], [630,235], [310,235]]);

   draw_smartArt_figure("rect",    [[210,250], [310,250], [310,320], [210,320]]);
   draw_smartArt_figure("rect",  [[230,315], [630,315], [630,320], [230,320]]);
   draw_smartArt_figure("text",  [[310,260], [630,260], [630,315], [310,315]]);

  move_To_Sub();
  drawNothingModeSetting();
});

$("#smartArt9").on('click',function()
{
  d3.selectAll('.textTemp').remove();
  d3.selectAll('.range').remove();
  State.selectedCount=0;

   draw_smartArt_figure("hart",    [[190,60], [290,60], [290,160], [190,160]]);
   draw_smartArt_figure("rect",  [[240,155], [610,155], [610,160], [240,160]]);
   draw_smartArt_figure("hart",    [[560,60], [660,60], [660,160], [560,160]]);

   draw_smartArt_figure("hart",    [[190,180], [290,180], [290,280], [190,280]]);
   draw_smartArt_figure("rect",  [[240,275], [610,275], [610,280], [240,280]]);
   draw_smartArt_figure("hart",    [[560,180], [660,180], [660,280], [560,280]]);

   draw_smartArt_figure("hart",    [[190,300], [290,300], [290,400], [190,400]]);
   draw_smartArt_figure("rect",  [[240,395], [610,395], [610,400], [240,400]]);
   draw_smartArt_figure("hart",    [[560,300], [660,300], [660,400], [560,400]]);

  move_To_Sub();
  drawNothingModeSetting();
});


$("#smartArt10").on('click',function()
{
  d3.selectAll('.textTemp').remove();
  d3.selectAll('.range').remove();
  State.selectedCount=0;

   draw_smartArt_figure("smiley",    [[150,60], [250,60], [250,160], [150,160]]);
   draw_smartArt_figure("diamond",  [[100,160], [300,160], [300,260], [100,260]]);

   draw_smartArt_figure("rect",  [[100,210], [101,210], [101,160], [100,160]]);
   draw_smartArt_figure("rect",  [[299,210], [300,210], [300,160], [299,160]]);
   draw_smartArt_figure("rect",  [[150,235], [151,235], [151,400], [150,400]]);
   draw_smartArt_figure("rect",  [[250,235], [251,235], [251,400], [250,400]]);


   draw_smartArt_figure("smiley",    [[600,60], [700,60], [700,160], [600,160]]);
   draw_smartArt_figure("diamond",  [[550,160], [750,160], [750,260], [550,260]]);

   draw_smartArt_figure("rect",  [[550,210], [551,210], [551,160], [550,160]]);
   draw_smartArt_figure("rect",  [[749,210], [750,210], [750,160], [749,160]]);
   draw_smartArt_figure("rect",  [[600,235], [601,235], [601,400], [600,400]]);
   draw_smartArt_figure("rect",  [[700,235], [701,235], [701,400], [700,400]]);

  move_To_Sub();
  drawNothingModeSetting();
});

$("#smartArt11").on('click',function()
{
  d3.selectAll('.textTemp').remove();
  d3.selectAll('.range').remove();
  State.selectedCount=0;
  draw_smartArt_figure("text",    [[375,55], [475,55], [475,155], [375,155]]);
  draw_smartArt_figure("text",    [[375,175], [475,175], [475,275], [375,275]]);
  draw_smartArt_figure("text",    [[375,295], [475,295], [475,395], [375,395]]);
  draw_smartArt_figure("text",    [[495,175], [595,175], [595,275], [495,275]]);
  draw_smartArt_figure("text",    [[255,175], [355,175], [355,275], [255,275]]);

  move_To_Sub();
  drawNothingModeSetting();
});



$("#smartArt12").on('click',function()
{
  d3.selectAll('.textTemp').remove();
  d3.selectAll('.range').remove();
  State.selectedCount=0;

   draw_smartArt_figure("cloud",    [[120,20], [320,20], [320,60], [120,60]]);
   draw_smartArt_figure("cloud",  [[340,20], [540,20], [540,60], [340,60]]);
   draw_smartArt_figure("cloud",    [[560,20], [760,20], [760,60], [560,60]]);

   draw_smartArt_figure("triangle",    [[50,420], [150,420], [150,450], [50,450]]);
   draw_smartArt_figure("triangle",    [[170,420], [270,420], [270,450], [170,450]]);
   draw_smartArt_figure("triangle",    [[290,420], [390,420], [390,450], [290,450]]);
   draw_smartArt_figure("triangle",    [[410,420], [510,420], [510,450], [410,450]]);
   draw_smartArt_figure("triangle",    [[530,420], [630,420], [630,450], [530,450]]);
   draw_smartArt_figure("triangle",    [[650,420], [750,420], [750,450], [650,450]]);

  draw_smartArt_figure("eagle",    [[560,80], [660,80], [660,130], [560,130]]);
  draw_smartArt_figure("bat",    [[160,80], [260,80], [260,120], [160,120]]);

  draw_smartArt_figure("camel",    [[140,350], [260,350], [260,450], [140,450]]);
  draw_smartArt_figure("bull",    [[460,350], [580,350], [580,450], [460,450]]);
  draw_smartArt_figure("elk",    [[720,350], [840,350], [840,450], [720,450]]);

  move_To_Sub();
  drawNothingModeSetting();
});



function draw_smartArt_figure(figure_type, point)
{
  var id =  figure_type + "_" + State.totalCount;
  var path = get_Path(id,point);

  var figure = drawFigure(point,path,id);
  setTransScale(point,figure,id);

  draw_id_list.push(id);
  angle_list.push(0);

  drawFigureRange(board.select('path.'+ id));
  State.selectedID_List[State.selectedCount]=id;
  State.selectedCount++;
  State.totalCount++;

  board.select("path."+id).attr("fill","gray");
  board.select("path."+id).attr("stroke","darkgray");
  board.select("path."+id).attr("stroke-width","3");
  if(figure_type =="text")
  {
    board.select("div#"+id).style("font","20");
    board.select("div#"+id).style("font-weight","bold");
    board.select("div#"+id).style("color","white");
    board.select("div#"+id).style("font-size","15px");
    board.select("div#"+id).node().innerHTML = "텍스트를 입력하세요!";
  }
}
function update_figure_template(f1,f2,f3,s1,s2,s3,c1,c2,c3)
{
  for(var i=0;i<State.selectedCount;i++)
  {
      board.select("path." + State.selectedID_List[i]).attr("fill","rgb(" + f1 + "," + f2 + "," + f3 + ")" );
      board.select("path." + State.selectedID_List[i]).attr("stroke","rgb(" + s1 + "," + s2 + "," + s3 + ")" );
      board.select("path." + State.selectedID_List[i]).attr("stroke-width","5");

      board.select("div#"+State.selectedID_List[i]).style("font","20");
      board.select("div#"+State.selectedID_List[i]).style("font-weight","bold");
      board.select("div#"+State.selectedID_List[i]).style("color","rgb(" + c1 + "," + c2 + "," + c3 + ")" );
  }
  move_To_Sub();
}

function onclick_figure_template()
{
  var target_figure = event.target.src;
  target_figure = target_figure.split('public')[1];
  console.log(event.target.src + "," + target_figure);

  switch(target_figure)
  {
    case "/img/colortemplate/template1.png" :
      update_figure_template(0,0,255,255,128,192,255,255,0);
      break;
    case "/img/colortemplate/template2.png" :
      update_figure_template(11,186,244,0,255,64,255,128,0);
      break;
    case "/img/colortemplate/template3.png" :
      update_figure_template(153,217,234,255,201,14,255,0,0);
      break;
    case "/img/colortemplate/template4.png" :
      update_figure_template(34,177,76,195,195,195,255,174,201);
      break;
    case "/img/colortemplate/template5.png" :
      update_figure_template(181,230,29,163,73,164,136,0,21);
      break;
    case "/img/colortemplate/template6.png" :
      update_figure_template(185,254,129,64,128,128,115,6,223);
      break;
    case "/img/colortemplate/template7.png" :
      update_figure_template(255,242,0,0,162,232,255,255,255);
      break;
    case "/img/colortemplate/template8.png" :
      update_figure_template(255,127,39,136,0,21,127,127,127);
      break;
    case "/img/colortemplate/template9.png" :
      update_figure_template(237,28,36,255,242,0,255,174,201);
      break;
    case "/img/colortemplate/template10.png" :
      update_figure_template(255,149,255,0,128,255,64,128,128);
      break;
    case "/img/colortemplate/template11.png" :
      update_figure_template(163,73,164,255,127,39,153,217,234);
      break;
    case "/img/colortemplate/template12.png" :
      update_figure_template(91,91,91,255,1274,201,255,242,0);
      break;
  }
}

// function update_figure_template(f1,f2,f3,s1,s2,s3,c1,c2,c3)
// {
//   console.log('hi');
//   console.log(State.selectedCount);
//       board.select("path." + State.selectedID_List[i]).attr("fill","rgb(" + f1 + "," + f2 + "," + f3 + ")" );
//       board.select("path." + State.selectedID_List[i]).attr("stroke","rgb(" + s1 + "," + s2 + "," + s3 + ")" );
//       board.select("path." + State.selectedID_List[i]).attr("stroke-width","5");
//
//       board.select("div#"+State.selectedID_List[i]).style("font","20");
//       board.select("div#"+State.selectedID_List[i]).style("font-weight","bold");
//       board.select("div#"+State.selectedID_List[i]).style("color","rgb(" + c1 + "," + c2 + "," + c3 + ")" );
// }
//
// function onclick_figure_template()
// {
//   var target_figure = event.target.src;
//   target_figure = target_figure.split('public')[1];
//   console.log('hi');
//   switch(target_figure)
//   {
//     case "/img/colortemplate/template1.png" :
//       update_figure_template(0,0,255,255,128,192,255,255,0);
//       break;
//     case "/img/colortemplate/template2.png" :
//       update_figure_template(11,186,244,0,255,64,255,128,0);
//       break;
//     case "/img/colortemplate/template3.png" :
//       update_figure_template(153,217,234,255,201,14,255,0,0);
//       break;
//     case "/img/colortemplate/template4.png" :
//       update_figure_template(34,177,76,195,195,195,255,174,201);
//       break;
//     case "/img/colortemplate/template5.png" :
//       update_figure_template(181,230,29,163,73,164,136,0,21);
//       break;
//     case "/img/colortemplate/template6.png" :
//       update_figure_template(185,254,129,64,128,128,115,6,223);
//       break;
//     case "/img/colortemplate/template7.png" :
//       update_figure_template(255,242,0,0,162,232,255,255,255);
//       break;
//     case "/img/colortemplate/template8.png" :
//       update_figure_template(255,127,39,136,0,21,127,127,127);
//       break;
//     case "/img/colortemplate/template9.png" :
//       update_figure_template(237,28,36,255,242,0,255,174,201);
//       break;
//     case "/img/colortemplate/template10.png" :
//       update_figure_template(255,149,255,0,128,255,64,128,128);
//       break;
//     case "/img/colortemplate/template11.png" :
//       update_figure_template(163,73,164,255,127,39,153,217,234);
//       break;
//     case "/img/colortemplate/template12.png" :
//       update_figure_template(91,91,91,255,1274,201,255,242,0);
//       break;
//   }
// }
