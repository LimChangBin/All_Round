function drawFigure(points,pathString,classname)
{
      //사각형의 네 꼭짓점 배열 Points
      //path경로의 string값
      //id값으로 도형 그림

      var data = [{"x1":points[0][0],"y1":points[0][1],"x2":points[1][0],"y2":points[1][1],
                   "x3":points[2][0],"y3":points[2][1],"x4":points[3][0],"y4":points[3][1],
                   "angle":0,"centerX":points[0][0]+(points[1][0]-points[0][0])/2,"centerY":points[0][1]+(points[3][1]-points[0][1])/2,
                   "transX":0,"transY":0}];
      var group = board.append('g').attr('class',classname);

      var figure = group.append('path')
                   .attr('d',pathString)
                   .attr('class',classname)
                   .attr('fill',State.fill)
                   .attr('stroke',State.stroke)
                   .attr('id','figures')
                   .attr('stroke-width',State.stroke_width)
                   .style('cursor','move')
                   .data(data);

      if(classname.indexOf('text')===0)
          makeText(group,points,figure,classname);

      return figure;
}
function drawLine(x1,y1,x2,y2,points,classname)
{
      var data = [{"x1":points[0][0],"y1":points[0][1],"x2":points[1][0],"y2":points[1][1],
                   "x3":points[2][0],"y3":points[2][1],"x4":points[3][0],"y4":points[3][1],
                   "angle":0,"centerX":points[0][0]+(points[1][0]-points[0][0])/2,"centerY":points[0][1]+(points[3][1]-points[0][1])/2,
                   "transX":0,"transY":0}];
      var group = board.append('g').attr('class',classname);
      var figure = group.append('line')
                   .attr('x1',x1)
                   .attr('y1',y1)
                   .attr('x2',x2)
                   .attr('y2',y2)
                   .attr('class',classname)
                   .attr('fill',State.fill)
                   .attr('stroke',State.stroke)
                   .attr('id','figures')
                   .attr('stroke-width',State.stroke_width)
                   .style('cursor','move')
                   .data(data);
      return figure;
}
function drawLineRange(figure)
{
     var g = board.select('g.'+figure.attr('class'));
     var x1 = figure.attr('x1'); var y1 = figure.attr('y1');
     var x2 = figure.attr('x2'); var y2 = figure.attr('y2');
     drawRangeCircle(x1-1,y1-1,g,"point1").attr('cursor','crosshair');
     drawRangeCircle(x2-1,y2-1,g,"point2").attr('cursor','crosshair');
}
function makeText(group,points,figure,id)
{
      var width = Math.max(points[0][0],points[1][0]) - Math.min(points[0][0],points[1][0]);
      var height = Math.max(points[0][1],points[3][1]) - Math.min(points[0][1],points[3][1]);

      //처음 만들때 한번만 호출된다
      figure.attr('fill','transparent');
      figure.attr('stroke','transparent');

      var foreignObject = group.append('foreignObject').attr('id',id)
                                .attr('x',points[0][0]+20).attr('y',points[0][1]+20);
      var div = foreignObject.append('xhtml:div').attr('id',id)
                .attr('z-index','0').attr('ContentEditable','true')
                .style('width',width-40+'px').style('height',height-40+'px').style('cursor','text');
      group.append('path').attr('d',get_Rect_Path_String(points)).attr('pointer-events','none').attr('fill','transparent').attr('class','textTemp')
                          .attr('stroke','black').attr('stroke-dasharray','5,5').attr('stroke-width','3').attr("stroke","darkgray");
      // 텍스트 영역 클릭 이벤트 추가
      Add_TextArea_MouseDown_Event(figure,div,group,id);
      div.node().focus();
}
function drawFigureRange(figure)
{
      if(figure.attr('class').indexOf('line')===0)
      {
          drawLineRange(figure);
      }
      else{
          var figure_box = figure.datum();
          var group = board.select('g.'+figure.attr('class'));
          //범위를 그릴 도형이 사각형이 아닌 경우에는 둘러싸는 사각형을 그림
          var id = figure.attr('class');
          if(id.indexOf('text')!==0)
              drawRangeRect(group,'roundRect',figure_box);

          /*---------------------------- 모든 도형의 공통 조절점(반드시 있는) ----------------------*/
          var centerX = figure_box.x1+(figure_box.x3-figure_box.x1)/2;
          var centerY = figure_box.y1+(figure_box.y4-figure_box.y1)/2;
          //모서리
          drawRangeCircle(figure_box.x1,figure_box.y1,group,"size1");
          drawRangeCircle(figure_box.x2,figure_box.y2,group,"size2");
          drawRangeCircle(figure_box.x3,figure_box.y3,group,"size3");
          drawRangeCircle(figure_box.x4,figure_box.y4,group,"size4");
          //선분중앙

          drawRangeCircle(centerX,figure_box.y1,group,"size5");
          drawRangeCircle(figure_box.x3,centerY,group,"size6");
          drawRangeCircle(centerX,figure_box.y3,group,"size7");
          drawRangeCircle(figure_box.x1,centerY,group,"size8");

          //회전조절점
          var y = figure_box.y1-15;
          if(figure_box.y1>figure_box.y4) y+=30;
          drawRangeCircle(centerX,y,group,"rotate");
          settingCursor_main(figure.attr('class'),figure_box.angle);
      }
}
function drawRangeCircle(x,y,g,rangeID)
{
      var circle_box = new Array(4);
      for(var i = 0; i < 4; i++)
        circle_box[i] = new Array(2);
      circle_box[0][0]=x-3;
      circle_box[0][1]=y-3;
      circle_box[1][0]=x+3;
      circle_box[1][1]=y-3;
      circle_box[2][0]=x+3;
      circle_box[2][1]=y+3;
      circle_box[3][0]=x-3;
      circle_box[3][1]=y+3;
      var path = get_Rect_Path_String(circle_box);
      var range = g.append('path')
                   .attr('d',path)
                   .attr('class','range')
                   .attr('fill', "white")
                   .attr('stroke', "black")
                   .attr('stroke-width', 2)
                   .attr('id',rangeID).call(resizeDrag.on('dragstart',range_DragStart)
                                                      .on('drag',range_Drag)
                                                      .on('dragend',range_DragEnd));
      return range;
}
function drawRangeRect(g,rangeID,figure_box)
{
      var box = getBoxArray(figure_box);
      var path = get_Rect_Path_String(box);
      var data = [{"transX":0,"transY":0}];
      var range = g.append('path')
                   .attr('d',path)
                   .attr('class','range')
                   .attr('fill','transparent')
                   .attr('stroke','black')
                   .attr('stroke-width',1 )
                   .attr("stroke-dasharray","5,5")
                   .attr('id',rangeID).style('cursor','move')
                   .data(data)
                   .call(moveDrag.on('dragstart', figures_move_dragStart)
                                 .on('drag', figures_move_drag)
                                 .on('dragend', figures_move_dragEnd));
      return range;
}
function settingCursor_main(figure_id,angle)
{
    // '|' : n-resize
    if(angle < 22.5 || 337.5 < angle || (157.5 < angle && angle <202.5))
      settingCursor(figure_id,'n','ne','e','se','n','ne','e','se');

    // '/' : ne-resize
    else if((22.5 < angle && angle < 67.5) || (202.5 < angle && angle < 247.5))
      settingCursor(figure_id,'ne','e','se','n','ne','e','se','n');

    // '-' : e-resize
    else if((67.5 < angle && angle < 112.5) || (247.5 < angle && angle < 292.5))
      settingCursor(figure_id,'e','se','n','ne','e','se','n','ne');

    // '\' : se-resize
    else if((112.5 < angle && angle < 157.5) || (292.5 < angle && angle < 337.5))
      settingCursor(figure_id,'se','n','ne','e','se','n','ne','e');
}
function settingCursor(figure_id,mT,rT,rM,rB,mB,lB,lM,lT)
{
     board.select('g.'+figure_id).selectAll('path#rotate').style('cursor','crosshair');
     board.select('g.'+figure_id).selectAll('path#size5').style('cursor',mT +'-resize');
     board.select('g.'+figure_id).selectAll('path#size2').style('cursor',rT+'-resize');
     board.select('g.'+figure_id).selectAll('path#size6').style('cursor',rM+'-resize');
     board.select('g.'+figure_id).selectAll('path#size3').style('cursor',rB+'-resize');
     board.select('g.'+figure_id).selectAll('path#size7').style('cursor',mB+'-resize');
     board.select('g.'+figure_id).selectAll('path#size4').style('cursor',lB+'-resize');
     board.select('g.'+figure_id).selectAll('path#size8').style('cursor',lM+'-resize');
     board.select('g.'+figure_id).selectAll('path#size1').style('cursor',lT+'-resize');
}
