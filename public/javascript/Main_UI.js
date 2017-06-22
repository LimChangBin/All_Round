function drawSetting()
{
      board.selectAll('.range').remove();
      board.selectAll('.textTemp').remove();
      board.selectAll('foreignObject').attr('pointer-events','none');
      board.style('cursor','crosshair');

      /*--------------board Event 등록----------------*/
      board.call(board_drag.on('dragstart', board_draw_dragStart)
                           .on('drag', board_draw_drag)
                           .on('dragend', board_draw_dragEnd));
      board.call(moveDrag.on('dragstart', board_draw_dragStart)
                          .on('drag', board_draw_drag)
                          .on('dragend', board_draw_dragEnd));
      board.call(groupMoveDrag.on('dragstart', board_draw_dragStart)
                          .on('drag', board_draw_drag)
                          .on('dragend', board_draw_dragEnd));
}

function drawNothingModeSetting()
{
      board.selectAll('foreignObject').attr('pointer-events','auto');
      board.style('cursor','default');
      board.call(board_drag.on('dragstart', null)
                           .on('drag', null)
                           .on('dragend', null));
      //move 이벤트
      board.selectAll('line#figures').call(moveDrag.on('dragstart', figures_move_dragStart));
      board.selectAll('line#figures').call(moveDrag.on('drag', figures_move_drag));
      board.selectAll('line#figures').call(moveDrag.on('dragend', figures_move_dragEnd));

      board.selectAll('path#figures').call(moveDrag.on('dragstart', figures_move_dragStart));
      board.selectAll('path#figures').call(moveDrag.on('drag', figures_move_drag));
      board.selectAll('path#figures').call(moveDrag.on('dragend', figures_move_dragEnd));
      State.drawingFigure=FIGURE.NOTHING;
}
