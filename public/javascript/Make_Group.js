function make_group()
{
    if(State.selectedCount>=2)
    {
        var group = board.append('g').attr('class','group_'+State.groupCount);
        for(var i=0;i<State.selectedCount;i++)
        {
            setParent(board.select('g.' + State.selectedID_List[i]).node(), group.node());
            board.selectAll('.'+State.selectedID_List[i]).selectAll('.range').remove();
        }
        //그룹박스 선택영역 만듬
        var group_box = group.node().getBBox();
        var range = drawGroupRange(group,group_box);
        range.call(groupMoveDrag.on('dragstart', group_move_dragStart));
        range.call(groupMoveDrag.on('drag', group_move_drag));
        range.call(groupMoveDrag.on('dragend', group_move_dragEnd));
        State.selectedID_List[0]="group"+State.groupCount;
        State.selectedCount=1;
        State.groupCount++;
    }
    resultShow();
}

function drawGroupRange(group,box)
{
      var points = new Array(4);
      for(var j=0;j<4;j++)
          points[j] = new Array(2);
      points[0][0] = box.x; points[0][1] = box.y;
      points[1][0] = box.x+box.width; points[1][1] = box.y;
      points[2][0] = box.x+box.width; points[2][1] = box.y+box.height;
      points[3][0] = box.x; points[3][1] = box.y+box.height;
      var path = get_Rect_Path_String(points);
      var data = [{"x1":points[0][0],"y1":points[0][1],"x2":points[1][0],"y2":points[1][1],
                 "x3":points[2][0],"y3":points[2][1],"x4":points[3][0],"y4":points[3][1],
                 "angle":0,"centerX":points[0][0]+(points[1][0]-points[0][0])/2,"centerY":points[0][1]+(points[3][1]-points[0][1])/2,
                 "transX":0,"transY":0}];
      var range = group.append('path').attr('d',path).attr('class','group_'+State.groupCount).attr('id','group').
                        attr('fill','transparent').attr('stroke-dasharray','5,5').attr('stroke-width','1').attr('stroke','black').data(data);
      return range;
}
function setParent(el, newParent) {
    newParent.appendChild(el);
}
function getCount(id)
{
    if(id.indexOf('rect')===0)
      return State.rectCount;
    else if(id.indexOf('triangle')===0)
      return State.triangleCount;
    else if(id.indexOf('circle')===0)
      return State.circleCount;
    else if(id.indexOf('camel')===0)
      return State.camelCount;
}
