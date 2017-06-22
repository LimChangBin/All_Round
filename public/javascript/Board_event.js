board.on('mousedown',function(){
        d3.select(document.activeElement).node().blur();
        board.selectAll('.textTemp').remove();
        board.selectAll('.range').remove();
        board.selectAll('path#group').attr('stroke-width','0');
        State.selectedCount=0;
});
d3.select('#workarea').node().focus();
// console.log(document.activeElement);

function KeyPress(e) {
     var evtobj = window.event ? event : e;
     //Do action on CTRL + Z4
     if (evtobj.keyCode == 90 && evtobj.ctrlKey)
         load_before_data();
     if (evtobj.keyCode == 89 && evtobj.ctrlKey)
         load_after_data();
     if(evtobj.keyCode==46&&document.activeElement.nodeName!="DIV")
     {
       for(var i=0;i<State.selectedCount;i++)
       {
         draw_id_list.splice(draw_id_list.indexOf(State.selectedID_List[i]),1);
         angle_list.splice(draw_id_list.indexOf(State.selectedID_List[i]),1);
         board.select('g.'+State.selectedID_List[i]).remove();
       }
       State.selectedCount=0;
     }
 }
 document.onkeydown = KeyPress;
