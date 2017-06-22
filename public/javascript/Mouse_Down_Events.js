
function Add_TextArea_MouseDown_Event(figure,div,group,id)
{
      div.on('focus',function(e){
          div.style('outline','transparent');
      });
      div.on('keydown',function(e){
      });

      div.on('mousedown',function(e){
            div.node().focus();
            if(!event.ctrlKey&&State.drawingFigure==FIGURE.NOTHING)
            {
                board.selectAll('.textTemp').remove();
                group.append('path').attr('d',get_Rect_Path_String(getBoxArray(figure.datum()))).attr('pointer-events','none').attr('fill','transparent').attr('class','textTemp')
                                    .attr('stroke','black').attr('stroke-dasharray','5,5').attr('stroke-width','2');
                board.selectAll('.range').remove();
                State.selectedID_List[0] = id;
                State.selectedCount = 1;
            }
            else if(event.ctrlKey&&State.drawingFigure==FIGURE.NOTHING)
            {
                group.append('path').attr('d',get_Rect_Path_String(getBoxArray(figure.datum()))).attr('pointer-events','none').attr('fill','transparent').attr('class','textTemp')
                                    .attr('stroke','black').attr('stroke-dasharray','5,5').attr('stroke-width','2');
                State.selectedID_List[State.selectedCount] = id;
                State.selectedCount++;
            }
            drawFigureRange(board.select('path.'+ id));
            event.stopPropagation();
      });
}
