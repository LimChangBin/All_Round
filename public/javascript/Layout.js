function base_layout()
{
    onclick_add_slide();
    State.selectedCount=0;
    draw_Layout("text",    [[73,52], [770,52], [770,282], [73,282]], "<font size='7'>제목을 입력하십시오</font>");
    draw_Layout("text",    [[73,300], [770,300], [770,416], [73,416]], "<font size='6'>부제목을 입력하십시오</font>");
    move_To_Sub();
    drawNothingModeSetting();
}
function title_content_layout()
{
    onclick_add_slide();
    State.selectedCount=0;
    draw_Layout("text",    [[73,52], [770,52], [770,150], [73,150]], "<font size='7'>제목을 입력하십시오</font>");
    draw_Layout("text",    [[73,160], [770,160], [770,416], [73,416]], "<ul><li style='text-align:left; font-size:24px'>부제목을 입력하십시오<br></li></ul>");
    move_To_Sub();
    drawNothingModeSetting();
}
function compare_layout()
{
    onclick_add_slide();
    State.selectedCount=0;
    draw_Layout("text",    [[71,27], [768,27], [768,124], [71,124]], "<font size='7'>제목을 입력하십시오</font>");
    draw_Layout("text",    [[71,135], [417,135], [417,183], [71,183]], "<ul><li style='text-align:left; font-size:20px'>텍스트를 입력하십시오<br></li></ul>");
    draw_Layout("text",    [[422,135], [768,135], [768,183], [422,183]], "<ul><li style='text-align:left; font-size:20px'>텍스트를 입력하십시오<br></li></ul>");
    draw_Layout("text",    [[71,195], [417,195], [417,425], [71,425]], "<ul><li style='text-align:left; font-size:24px'>텍스트를 입력하십시오<br></li></ul>");
    draw_Layout("text",    [[422,195], [768,195], [768,425], [422,425]], "<ul><li style='text-align:left; font-size:24px'>텍스트를 입력하십시오<br></li></ul>");
    move_To_Sub();
    drawNothingModeSetting();
}
function draw_Layout(figure_type, point, text)
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

  board.select("path."+id);
  board.selectAll('.textTemp').attr("stroke","darkgray");
  board.selectAll('.textTemp').attr("stroke-width","3");

  if(figure_type =="text")
    board.select("div#"+id).node().innerHTML = text;
}

draw_Layout("text",    [[73,47], [770,47], [770,272], [73,272]], "<font size='48px'>제목을 입력하십시오</font>");
draw_Layout("text",    [[73,295], [770,295], [770,411], [73,411]], "<font size='5px'>부제목을 입력하십시오</font>");
drawNothingModeSetting();
move_To_Sub();

d3.select('div#text_0').attr('pointer-events','none');
