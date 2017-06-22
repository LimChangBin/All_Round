//onclick 이벤트 핸들러 : Sub 슬라이드 클릭
function onclick_sub_svg()
{
  console.log('hi');
  //전역변수(선택된 슬라이드) 변경
  State.selectedEditor_id = event.target.id.split('_')[0]+'_'+event.target.id.split('_')[1];
  //작은 SVG내용 복사해서 Main SVG로
  document.getElementById("board").innerHTML=document.getElementById(State.selectedEditor_id+"_g").innerHTML;

  drawNothingModeSetting();
  // console.log("선택 : ID = " + State.selectedEditor_id + ", array index = " + slide_list.indexOf(State.selectedEditor_id));
  State.selectedCount=0;

  Sync_Data_Event();
}
function onclick_add_slide()
{
    board.selectAll('.tempText').remove();
    board.selectAll('.range').remove();
      //Sub SVG 생성
    var svg =  d3.select("#slide_container").append("svg")
                                  .attr("id","id_sub"+State.Editor_count)
                                  .attr("width","170")
                                  .attr("height","90")
                                  .attr("class","")
                                  .style("background-color",State.svg_background_color)
                                  .style("border","1px solid black")
                                  .style('text-align','center')
                                  .style("margin","0 0 0 10");
                                  svg.on('mouseover',function(e){
                                      d3.select(this).style('border','5px solid black');
                                  });
                                  svg.on('mouseout',function(e){
                                      d3.select(this).style('border','1px solid black');
                                  });
     document.getElementById("id_sub" + State.Editor_count).style.backgroundImage = State.svg_background_img;
     document.getElementById("id_sub" + State.Editor_count).style.backgroundRepeat = "no-repeat";
     document.getElementById("id_sub" + State.Editor_count).style.backgroundSize = "100% 100%";

  //Sub SVG의 클릭이벤트
  d3.select("#id_sub"+State.Editor_count);

  //Suv SVG안에 G태그 생성
  d3.select("#id_sub"+State.Editor_count).append("g")
                                        .attr("id","id_sub"+State.Editor_count+"_g")
                                        .attr("transform", "scale(0.2)");

  //둘러싸고 있는 사각형
  var rect = d3.select("#id_sub"+State.Editor_count).append('rect')
                                                    .attr('id','id_sub'+State.Editor_count+"_rect")
                                                    .attr('x','0').attr('y','0').attr('width','100%').attr('height','100%').attr('fill','transparent').attr('class','slide')
                                                    .on('mousedown',onclick_sub_svg);console.log("#id_sub"+State.Editor_count);

  //슬라이드 id 리스트 추가
  slide_list.push("id_sub"+State.Editor_count);

  //추가된 슬라이드 내용 Main에 복사
  document.getElementById("board").innerHTML=document.getElementById(slide_list[parseInt(slide_list.length)-1]+"_g").innerHTML;

  //전역변수 변경
  // console.log("생성 : "+ State.Editor_count + "번째, ID = id_sub"+State.Editor_count);
  State.Editor_count = parseInt(State.Editor_count)+1;
  State.selectedEditor_id = slide_list[parseInt(slide_list.length)-1];
}

// onclick 이벤트 핸들러 : -버튼
function onclick_remove_slide()
{
  var target_index = slide_list.indexOf(State.selectedEditor_id);

  //갯수가 1개이상인경우
  if(slide_list.length!=1)
  {
    //삭제
    d3.select("#"+State.selectedEditor_id).remove();
    slide_list.splice(slide_list.indexOf(State.selectedEditor_id),1);

    // console.log("삭제 : " + slide_list.indexOf(State.selectedEditor_id) + "번째, ID = id_sub"+State.Editor_count);

    // 삭제 후 보여줄 view 선택
    // 마지막 슬라이드 삭제 : 마지막-1 view
    // console.log(target_index + "=" +(parseInt(slide_list.length)-1));

    if(target_index==parseInt(slide_list.length))
    {
      // console.log("마지막번호삭제 : 변경된 view = " + slide_list[parseInt(slide_list.length)-1]);
      document.getElementById("board").innerHTML=document.getElementById(slide_list[parseInt(slide_list.length)-1] +"_g").innerHTML;
      State.selectedEditor_id = slide_list[parseInt(slide_list.length)-1];
    }
    // 그 외의 슬라이드 삭제 : 삭제슬라이드 다음거
    else
    {
      // console.log("마지막번호가 아닌거 삭제 : 변경된 view = " + slide_list[target_index]);
      document.getElementById("board").innerHTML=document.getElementById(slide_list[target_index]+"_g").innerHTML;
      State.selectedEditor_id = slide_list[target_index];
    }
  }
}


function move_To_Sub()
{
      board.selectAll('.textTemp').attr('stroke-width','0');
      board.selectAll('.range').style('visibility','hidden');
      document.getElementById(State.selectedEditor_id+"_g").innerHTML=document.getElementById("board").innerHTML;
      save_now_data();
      board.selectAll('.textTemp').attr('stroke-width','1');
      board.selectAll('.range').style('visibility','visible');
}

function Sync_Data_Event()
{
      for(var i=0;i<board.node().childNodes.length;i++)
      {
        if(board.node().childNodes[i].nodeName=="g")
        {
          var classname = d3.select(board.node().childNodes[i]).attr('class');
          if(classname.indexOf('line')===0)
          {
                var lineData = [{"transX":0,"transY":0}];
                board.select('line.'+classname).data(lineData);
          }
          else{
                var box = d3.select(board.node().childNodes[i]).node().getBBox();
                var figure = board.select('path.'+classname);
                var points = new Array(4);
                for(var j=0;j<4;j++)
                    points[j] = new Array(2);
                points[0][0] = box.x; points[0][1] = box.y;
                points[1][0] = box.x+box.width; points[1][1] = box.y;
                points[2][0] = box.x+box.width; points[2][1] = box.y+box.height;
                points[3][0] = box.x; points[3][1] = box.y+box.height;
                var angle = angle_list[draw_id_list.indexOf(classname)];
                var data = [{"x1":points[0][0],"y1":points[0][1],"x2":points[1][0],"y2":points[1][1],
                           "x3":points[2][0],"y3":points[2][1],"x4":points[3][0],"y4":points[3][1],
                           "angle":angle,"centerX":points[0][0]+(points[1][0]-points[0][0])/2,"centerY":points[0][1]+(points[3][1]-points[0][1])/2,
                           "transX":0,"transY":0}];
                figure.data(data);
                if(classname.indexOf('text')===0)
                {
                    var div = board.select('div#'+classname);
                    var group = board.select('g.'+classname);
                    Add_TextArea_MouseDown_Event(figure,div,group,classname);
                }
          }
        }
      }
}
