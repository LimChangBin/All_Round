function range_DragStart()
{
    dxdy=false;
    downX = event.pageX;
    downY = event.pageY;
    var figureID = d3.select(this.parentNode.className)[0][0].baseVal;
    if(this.id.indexOf('point')!==0)
    {
      var figure_box = board.select('path.'+figureID).datum();
      figure_box.transX=0;
      figure_box.transY=0;
    }
    for(var i=0;i<State.selectedCount;i++)
      board.selectAll('.'+State.selectedID_List[i]).selectAll('.range').style('visibility','hidden');
}
function range_Drag(d)
{
    if(d3.event.dx===0&d3.event.dy===0)dxdy=true;
    var figureID = d3.select(this.parentNode.className)[0][0].baseVal;
    if(this.id=="rotate")
      rotateSelected(figureID);
    else if(this.id.indexOf('point')===0)
    {
      var line = board.select('line.'+this.parentNode.className.animVal);
      if(this.id=="point1")
      {
        line.attr('x1',line.attr('x1')*1+d3.event.dx);
        line.attr('y1',line.attr('y1')*1+d3.event.dy);
      }
      else if(this.id=="point2")
      {
        line.attr('x2',line.attr('x2')*1+d3.event.dx);
        line.attr('y2',line.attr('y2')*1+d3.event.dy);
      }
    }
    else{
      resizeSelected(this.id,figureID);
    }
}
function range_DragEnd(d)
{
    if(this.id.indexOf('point')===0)
    {
         var line = board.select('line.'+this.parentNode.className.animVal);
         board.selectAll('.'+this.parentNode.className.animVal).selectAll('.range').remove();
         drawFigureRange(line);
    }
    else if(this.id.indexOf('point')!==0){
          var figureID = d3.select(this.parentNode.className)[0][0].baseVal;
          var figure_box = board.select('path.'+figureID).datum();
          if(this.id=="rotate")
          {

          }
          else
          {
              var box = getBoxArray(figure_box);
              var centerX = Math.min(box[0][0],box[1][0])+Math.abs((box[0][0]-box[1][0])/2);
              var centerY = Math.min(box[0][1],box[3][1])+Math.abs((box[0][1]-box[3][1])/2);
              var center = rotateCoord2(centerX,centerY,figure_box.angle,figure_box.centerX,figure_box.centerY);

              var dx = center[0]-centerX;
              var dy = center[1]-centerY;

              for(var j=0;j<4;j++)
              {
                  box[j][0] += dx;
                  box[j][1] += dy;
              }

              figure_box.centerX = center[0];
              figure_box.centerY = center[1];
              settingFigureData(figure_box,box);
              var path = get_Path(figureID,box);
              board.select('g.'+figureID).attr('transform','rotate('+[figure_box.angle,center[0],center[1]]+')');
              board.select('path.'+figureID).attr('d',path);
              setTransScale(box,board.select('path.'+figureID),figureID);
              if(figureID.indexOf('text')===0){console.log('text');
                settingText(box,figureID);}
          }
          for(var i=0;i<State.selectedCount;i++)
              board.selectAll('.'+State.selectedID_List[i]).selectAll('.range').style('visibility','visible');
          board.selectAll('.'+figureID).selectAll('.range').remove();
          if(dxdy)
            move_To_Sub();
          console.log(State.selectedEditor_id + "에서 도형 크기조절 or 회전");
          drawFigureRange(board.select('path.'+figureID));
    }

}

function resizeSelected(rangeID,figureID)
{
    var figure = board.select('path.'+figureID).datum();
    figure.transX = event.pageX-downX;
    figure.transY = event.pageY-downY;
    var box = getBoxArray(figure);
    var worldCoord = rotateCoord2(downX-boardStartX+figure.transX,downY-boardStartY+figure.transY,-figure.angle,figure.centerX,figure.centerY);
    switch(rangeID)
    {
      case 'size1':
          box[0][0] -= box[0][0]-worldCoord[0];
          box[0][1] -= box[0][1]-worldCoord[1];
          box[1][1] = box[0][1];
          box[3][0] = box[0][0];
        break;
      case 'size2':
          box[1][0] += worldCoord[0]-box[1][0];
          box[1][1] += worldCoord[1]-box[1][1];
          box[0][1] = box[1][1];
          box[2][0] = box[1][0];
        break;
      case 'size3':
          box[2][0] += worldCoord[0]-box[2][0];
          box[2][1] += worldCoord[1]-box[2][1];
          box[1][0] = box[2][0];
          box[3][1] = box[2][1];
        break;
      case 'size4':
          box[3][0] -= box[3][0]-worldCoord[0];
          box[3][1] -= box[3][1]-worldCoord[1];
          box[0][0] = box[3][0];
          box[2][1] = box[3][1];
        break;
      case 'size5':
          box[0][1] = worldCoord[1];
          box[1][1] = worldCoord[1];
        break;
      case 'size6':
          box[1][0] = worldCoord[0];
          box[2][0] = worldCoord[0];
        break;
      case 'size7':
          box[2][1] = worldCoord[1];
          box[3][1] = worldCoord[1];
        break;
      case 'size8':
          box[0][0] = worldCoord[0];
          box[3][0] = worldCoord[0];
        break;
      default:
    }
    var path = get_Path(figureID,box);
    board.select('path.'+figureID).attr('d',path);
    setTransScale(box,board.select('path.'+figureID),figureID);
    settingFigureData(figure,box);
    if(figureID.indexOf('text')===0)
      settingText(box,figureID);

}

function rotateSelected(figureID)
{
      var data = board.select('path.'+figureID).datum();
      var x2 = (event.pageX-boardStartX)-data.centerX;
      var y2 = (event.pageY-boardStartY)-data.centerY;
      /*------내적으로 각도구함-------*/
      var angle = dotProduct(0,-1,x2,y2);

      if(event.pageX-boardStartX < data.centerX)
          angle=360-angle;
      angle = Math.round(angle);
      if(data.y1>data.y4)
        angle-=180;
      if(angle<0)angle+=360;
      var dangle = angle-data.angle;
      data.angle = angle;
      angle_list[draw_id_list.indexOf(figureID)]=angle;
      board.select('g.'+figureID).attr('transform','rotate('+[data.angle,data.centerX,data.centerY]+')');
      for(var i=0;i<State.selectedCount;i++)
      {
          if(State.selectedID_List[i]!=figureID)
          {
              var figureData = board.select('path.'+State.selectedID_List[i]).datum();
              figureData.angle += dangle;
              board.select('g.'+State.selectedID_List[i]).attr('transform','rotate('+[figureData.angle,figureData.centerX,figureData.centerY]+')');
          }
      }
}
