/*-----------------------------------------------------------------------------------*/
/*----------------------------------- 도형 Move --------------------------------------*/
/*------------------ 가변: path, centerX, centerY / 불변: angle ----------------------*/
/*-----------------------------------------------------------------------------------*/
var dxdy=false;
function figures_move_dragStart(d)
{
    dxdy=false;
    d3.select(document.activeElement).node().blur();
    d3.select('body').node().focus();
    d.transX=0;
    d.transY=0;
    downX = event.pageX; downY = event.pageY;
    var classname = d3.select(this).attr('class');
    var group = board.select('g.'+classname);
    // console.log(classname);
    if(classname!="range")
      set_selected_global_values(group,classname,d);
    //범위 감추고 시작
    for(var i=0;i<State.selectedCount;i++)
      board.selectAll('.'+State.selectedID_List[i]).selectAll('.range').style('visibility','hidden');
}
function figures_move_drag(d)
{
      d.transX = event.pageX-downX;
      d.transY = event.pageY-downY;
      if(d3.event.dx===0&&d3.event.dy===0)dxdy=true;
      for(var i=0; i<State.selectedCount;i++)
      {
          if(State.selectedID_List[i].indexOf('line')===0)
          {
                var line = board.select('line.'+State.selectedID_List[i]);
                line.attr('x1',line.attr('x1')*1+d3.event.dx);line.attr('y1',line.attr('y1')*1+d3.event.dy);
                line.attr('x2',line.attr('x2')*1+d3.event.dx);line.attr('y2',line.attr('y2')*1+d3.event.dy);
          }
          else
          {
                var figure = board.select('path.'+State.selectedID_List[i]);
                var data = figure.datum();
                var points = getBoxArray(data);
                for(var j=0; j<4; j++)
                {
                    //네 점의 좌표 이동
                    points[j][0] += d.transX;
                    points[j][1] += d.transY;
                }
                //도형에 따라 다른 path값 리턴
                var path = get_Path(State.selectedID_List[i],points);
                // 변경된 path 좌표, 회전중심축 이동

                setTransScale(points,figure,State.selectedID_List[i]);
                figure.attr('d',path);
                board.select('g.'+State.selectedID_List[i]).attr('transform','rotate('+[data.angle,data.centerX+d.transX,data.centerY+d.transY]+')');
                if(State.selectedID_List[i].indexOf('text')===0)
                    settingText(points,figure.attr('class'));
          }
      }

}
function figures_move_dragEnd(d)
{
      for(var i=0; i<State.selectedCount;i++)
      {
            if(State.selectedID_List[i].indexOf('line')===0)
            {
              var line = board.select('line.'+State.selectedID_List[i]);
              board.selectAll('.'+State.selectedID_List[i]).selectAll('.range').remove();
              drawFigureRange(line);
            }
            else{
              var data = board.select('path.'+State.selectedID_List[i]).datum();
              data.x1+=d.transX; data.x2+=d.transX; data.x3+=d.transX; data.x4+=d.transX; data.centerX+=d.transX;
              data.y1+=d.transY; data.y2+=d.transY; data.y3+=d.transY; data.y4+=d.transY; data.centerY+=d.transY;
              var figure = board.select('path.' + State.selectedID_List[i]);
              board.selectAll('.'+State.selectedID_List[i]).selectAll('.range').remove();
              if(dxdy)
                move_To_Sub();
              drawFigureRange(figure);
            }
      }

}

function settingText(points,id)
{
    var foreign = board.select('foreignObject#'+id);
    foreign.attr('x',Math.min(points[0][0],points[1][0])+20).attr('y',Math.min(points[0][1],points[3][1])+20);
    var div = board.select('div#'+id);
    div.style('width',(Math.max(points[0][0],points[1][0])-Math.min(points[0][0],points[1][0])-40)+"px");
    div.style('height',(Math.max(points[0][1],points[3][1])-Math.min(points[0][1],points[3][1])-40)+"px");
    board.select('g.'+id).selectAll('.textTemp').remove();
    board.select('g.'+id).append('path').attr('d',get_Rect_Path_String(points)).attr('pointer-events','none').attr('fill','transparent').attr('class','textTemp')
                        .attr('stroke','black').attr('stroke-dasharray','5,5').attr('stroke-width','1');
}

function set_selected_global_values(group,classname,d)
{
  var selectedText = false;
  var i;
  if(classname.indexOf('text')===0)
  {
    for(i=0;i<State.selectedCount;i++)
    {
      if(State.selectedID_List[i]==classname)
        selectedText = true;
    }
  }
  if(classname.indexOf('line')===0)
  {
    for(i=0;i<State.selectedCount;i++)
    {
      if(State.selectedID_List[i]==classname)
        selectedText = true;
    }
  }
  if(!selectedText)
  {
      if(!event.ctrlKey&&State.drawingFigure==FIGURE.NOTHING)
      {
          board.selectAll('.textTemp').remove();
          board.selectAll('.range').remove();
          if(classname.indexOf('text')===0)
          {
              group.append('path').attr('d',get_Rect_Path_String(getBoxArray(d))).attr('pointer-events','none').attr('fill','transparent').attr('class','textTemp')
                                  .attr('stroke','black').attr('stroke-dasharray','5,5').attr('stroke-width','1');
              board.select('div#'+classname).node().focus();
          }
          State.selectedID_List[0]=classname;
          State.selectedCount=1;
      }
      else if(event.ctrlKey&&State.drawingFigure==FIGURE.NOTHING)
      {
          if(classname.indexOf('text')===0)
          {
              group.append('path').attr('d',get_Rect_Path_String(getBoxArray(d))).attr('pointer-events','none').attr('fill','transparent').attr('class','textTemp')
                                  .attr('stroke','black').attr('stroke-dasharray','5,5').attr('stroke-width','1');
              board.select('div#'+classname).node().focus();
          }
          State.selectedID_List[State.selectedCount] = classname;
          State.selectedCount++;
      }
  }
}
