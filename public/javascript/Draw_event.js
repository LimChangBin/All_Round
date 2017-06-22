var free_path = "";
function board_draw_dragStart()
{
    downX=event.pageX; downY=event.pageY;
    free_path = "m "+ (downX-boardStartX) + " " + (downY-boardStartY) + " ";
}

function board_draw_drag()
{
    var point = getDraggingCoordinate(downX,downY,event.pageX,event.pageY);
    var id = getID();
    board.select('g.'+id).remove();
    if(id.indexOf('line')===0)
        drawLine(downX-boardStartX,downY-boardStartY,d3.event.x,d3.event.y,point,id);
    else
    {
        //draw
        var path = get_Path(id,point);
        if(State.drawingFigure==FIGURE.FREELINE)
        {
            free_path += "L " + d3.event.x +" "+ d3.event.y;
            path = free_path;
        }
        var figure = drawFigure(point,path,id);
        setTransScale(point,figure,id);
    }
}
function board_draw_dragEnd()
{
      var id = getID();
      draw_id_list.push(id);
      angle_list.push(0);
      if(id.indexOf('line')===0)
          drawFigureRange(board.select('line.'+id));
      else
          drawFigureRange(board.select('path.'+ id));

      State.totalCount++;
      move_To_Sub();
      State.selectedID_List[0]=id;
      State.selectedCount=1;
      drawNothingModeSetting();

}

function setTransScale(points,figure,id)
{
    var transX=0,transY=0,scaleX=1,scaleY=1;
    if(id.indexOf('camel')===0 || id.indexOf('hart')===0 || id.indexOf('donut')===0 || id.indexOf('diamond')===0 || id.indexOf('airplane')===0 || id.indexOf('arrowA')===0 || id.indexOf('arrowB')===0 ||
       id.indexOf('arrowC')===0 || id.indexOf('arrowD')===0 || id.indexOf('bat')===0 || id.indexOf('bull')===0 || id.indexOf('hen')===0 || id.indexOf('eagle')===0 || id.indexOf('mouse')===0 ||
       id.indexOf('elk')===0 || id.indexOf('dialogA')===0 || id.indexOf('dialogB')===0 || id.indexOf('dialogC')===0 || id.indexOf('dialogD')===0 || id.indexOf('hare')===0 || id.indexOf('smiley')===0||
       id.indexOf('cloud')===0 || id.indexOf('capacitor')===0 || id.indexOf('diode')===0 || id.indexOf('gate_and')===0 || id.indexOf('gate_inverter')===0 || id.indexOf('gate_nand')===0 ||
       id.indexOf('gate_nor')===0 || id.indexOf('gate_or')===0 || id.indexOf('gate_xor')===0 || id.indexOf('inductor')===0 || id.indexOf('resister')===0 ||
       id.indexOf('recycle_3')===0|| id.indexOf('clef_alto')===0 || id.indexOf('clef_bass')===0 || id.indexOf('clef_treble')===0 || id.indexOf('note_4th')===0 || id.indexOf('note_8th')===0 ||
       id.indexOf('note_16th')===0 || id.indexOf('note_32th')===0 || id.indexOf('note_64th')===0 || id.indexOf('note_half')===0 || id.indexOf('note_2_8th')===0 || id.indexOf('note_2_16th')===0 ||
       id.indexOf('note_2_32th')===0 || id.indexOf('note_2_64th')===0 || id.indexOf('note_3_8th')===0 || id.indexOf('note_3_16th')===0 || id.indexOf('note_3_32th')===0 || id.indexOf('note_3_64th')===0)
    {
        transX = Math.min(points[0][0],points[1][0]);
        transY = Math.min(points[0][1],points[3][1]);
        scaleX = Math.abs(points[0][0]-points[1][0])/100;
        scaleY = Math.abs(points[1][1]-points[2][1])/100;
    }
    figure.attr('transform','translate('+[transX,transY]+')'+'scale('+[scaleX,scaleY]+')');
}

function getID()
{
    var id;
    switch(State.drawingFigure)
    {
        case FIGURE.LINE:
            id = "line_" + State.totalCount;
            break;
        case FIGURE.RECT:
            id = "rect_" + State.totalCount;
            break;
        case FIGURE.CIRCLE:
            id = "circle_" + State.totalCount;
            break;
        case FIGURE.TRIANGLE:
            id = "triangle_" + State.totalCount;
            break;
        case FIGURE.CAMEL:
            id = "camel_" + State.totalCount;
            break;
         case FIGURE.HART:
            id = "hart_" + State.totalCount;
            break;
          case FIGURE.DONUT:
            id = "donut_" + State.totalCount;
            break;
          case FIGURE.DIAMOND:
            id = "diamond_" + State.totalCount;
            break;
          case FIGURE.AIRPLANE:
            id = "airplane_" + State.totalCount;
            break;
          case FIGURE.ARROWA:
            id = "arrowA_" + State.totalCount;
            break;
          case FIGURE.ARROWB:
            id = "arrowB_" + State.totalCount;
            break;
          case FIGURE.ARROWC:
            id = "arrowC_" + State.totalCount;
            break;
          case FIGURE.ARROWD:
            id = "arrowD_" + State.totalCount;
            break;
          case FIGURE.BAT:
            id = "bat_" + State.totalCount;
            break;
          case FIGURE.BULL:
            id = "bull_" + State.totalCount;
            break;
          case FIGURE.HEN:
            id = "hen_" + State.totalCount;
            break;
          case FIGURE.EAGLE:
            id = "eagle_" + State.totalCount;
            break;
          case FIGURE.MOUSE:
            id = "mouse_" + State.totalCount;
            break;
          case FIGURE.ELK:
            id = "elk_" + State.totalCount;
            break;
          case FIGURE.DIALOGA:
            id = "dialogA_" + State.totalCount;
            break;
          case FIGURE.DIALOGB:
            id = "dialogB_" + State.totalCount;
            break;
          case FIGURE.DIALOGC:
            id = "dialogC_" + State.totalCount;
            break;
          case FIGURE.DIALOGD:
            id = "dialogD_" + State.totalCount;
            break;
          case FIGURE.TEXT:
            id = "text_" + State.totalCount;
          break;
          case FIGURE.HARE:
            id = "hare_" + State.totalCount;
            break;
          case FIGURE.FREELINE:
            id = "freeline_" + State.totalCount;
            break;
          case FIGURE.SMILEY:
            id = "smiley_" + State.totalCount;
            break;
          case FIGURE.CLOUD:
            id = "cloud_" + State.totalCount;
            break;
          case FIGURE.CAPACITOR:
            id = "capacitor_" + State.totalCount;
            break;
          case FIGURE.DIODE:
            id = "diode_" + State.totalCount;
            break;
          case FIGURE.GATE_AND:
            id = "gate_and_" + State.totalCount;
            break;
          case FIGURE.GATE_INVERTER:
            id = "gate_inverter_" + State.totalCount;
            break;
          case FIGURE.GATE_NAND:
            id = "gate_nand_" + State.totalCount;
            break;
          case FIGURE.GATE_NOR:
            id = "gate_nor_" + State.totalCount;
            break;
          case FIGURE.GATE_OR:
            id = "gate_or_" + State.totalCount;
            break;
          case FIGURE.GATE_XOR:
            id = "gate_xor_" + State.totalCount;
            break;
          case FIGURE.INDUCTOR:
            id = "inductor_" + State.totalCount;
            break;
          case FIGURE.RESISTER:
            id = "resister_" + State.totalCount;
            break;
          case FIGURE.RECYCLE_3:
            id = "recycle_3_" + State.totalCount;
            break;
          case FIGURE.CLEF_ALTO:
            id = "clef_alto" + State.clef_altoCount;
            break;
          case FIGURE.CLEF_BASS:
            id = "clef_bass" + State.clef_bassCount;
            break;
          case FIGURE.CLEF_TREBLE:
            id = "clef_treble" + State.clef_trebleCount;
            break;
          case FIGURE.NOTE_4TH:
            id = "note_4th" + State.note_4thCount;
            break;
          case FIGURE.NOTE_8TH:
            id = "note_8th" + State.note_8thCount;
            break;
          case FIGURE.NOTE_16TH:
            id = "note_16th" + State.note_16thCount;
            break;
          case FIGURE.NOTE_32TH:
            id = "note_32th" + State.note_32thCount;
            break;
          case FIGURE.NOTE_64TH:
            id = "note_64th" + State.note_64thCount;
            break;
          case FIGURE.NOTE_HALF:
            id = "note_half" + State.note_halfCount;
            break;
          case FIGURE.NOTE_2_8TH:
            id = "note_2_8th" + State.note_2_8thCount;
            break;
          case FIGURE.NOTE_2_16TH:
            id = "note_2_16th" + State.note_2_16thCount;
            break;
          case FIGURE.NOTE_2_32TH:
            id = "note_2_32th" + State.note_2_32thCount;
            break;
          case FIGURE.NOTE_2_64TH:
            id = "note_2_64th" + State.note_2_64thCount;
            break;
          case FIGURE.NOTE_3_8TH:
            id = "note_3_8th" + State.note_3_8thCount;
            break;
          case FIGURE.NOTE_3_16TH:
            id = "note_3_16th" + State.note_3_16thCount;
            break;
          case FIGURE.NOTE_3_32TH:
            id = "note_3_32th" + State.note_3_32thCount;
            break;
          case FIGURE.NOTE_3_64TH:
            id = "note_3_64th" + State.note_3_64thCount;
            break;
        default:
    }
    return id;
}
function drawEndSetting()
{
}






















function getDraggingCoordinate(downX,downY,movingX,movingY)
{
      var point = new Array(4); // 매개변수는 배열의 크기
      for (var i = 0; i < 4; i++)
          point[i] = new Array(2);
      point[0][0] = Math.min(downX,movingX)-boardStartX;
      point[0][1] = Math.min(downY,movingY)-boardStartY;
      point[1][0] = Math.min(downX,movingX)-boardStartX + Math.abs(movingX-downX);
      point[1][1] = Math.min(downY,movingY)-boardStartY;
      point[2][0] = Math.min(downX,movingX)-boardStartX + Math.abs(movingX-downX);
      point[2][1] = Math.min(downY,movingY)-boardStartY + Math.abs(movingY-downY);
      point[3][0] = Math.min(downX,movingX)-boardStartX;
      point[3][1] = Math.min(downY,movingY)-boardStartY + Math.abs(movingY-downY);
      return point;
}
