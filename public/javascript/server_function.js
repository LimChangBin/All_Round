var socket = io.connect('http://localhost:7000');
var currentRowIndex=0;


function changeTrColor(trObj, oldColor, newColor) {
    trObj.style.backgroundColor = newColor;
    trObj.onmouseout = function(){
      trObj.style.backgroundColor = oldColor;
    }
}
 
function delete_btn_click()
{
  if(document.getElementById("loadFile").value){
     if(confirm("삭제 하시겠습니까?"))
    {
       var load_name=document.getElementById("loadFile").value;
       socket.emit('delete_DB',load_name);
    }
    else
    {
    
    }
  }
}


function save_modal()
{
  if(d3.select('#user_id').node().innerHTML)
    $('#saveModal').modal();
  else
    $('#login_please').modal();
}

function load_modal()
{
  var load_name=document.getElementById("loadFile").value;
  if(d3.select('#user_id').node().innerHTML)
  {
    socket.emit('loadready',load_name);
    $('#loadModal').modal();
  }
  else
    $('#login_please').modal();
}


function login_btn()
{
  if(document.getElementById("login_button").id=="login_button")
      window.open('../LoginRegistrationForm/LogIn.html','','resizable=no width=550 height=560');
}

function save_btn_click()
{
      var board_name=document.getElementById("saveFile").value;
      var data = new saveData();
      var i;

      data.board_html = d3.select('#'+slide_list[0]+"_g").html();
      for(i=0;i<slide_list.length;i++)
          data.slide_html.push(d3.select('#'+slide_list[i]+"_g").html());
      for(i=0;i<draw_id_list.length;i++)
          data.draw_id_list[i]=draw_id_list[i];
      for(i=0;i<angle_list.length;i++)
          data.angle_list[i]=angle_list[i];
      socket.emit('save',data,board_name);
}


function saveData()
{
      this.board_html = "";
      this.slide_length = slide_list.length;
      this.slide_html = [];
      this.angle_list = [];
      this.draw_id_list = [];
      this.total_count = State.totalCount;
      this.svg_background_img = State.svg_background_img;
      this.svg_background_color = State.svg_background_color;
}


socket.on('id_array',function(data){
  
  var target = document.getElementById("list_table");
  var cell;
  var row

    for (var j=0;j<currentRowIndex-1;j++)
      target.deleteRow(-1);
    for(var i=0;data[i];i++)
        {         
           row = target.insertRow();
           row.setAttribute("id", "Row"+i);
          
           row.onmouseover=function(){target.clickedRowIndex=this.rowIndex;
            changeTrColor(this, '#FFFFFF', '#F4FFFD');
           };

           row.onclick=function(row){
                    
                var file_name=document.getElementById("Row"+(target.clickedRowIndex-1)).innerHTML.split('<td>')[1].split('</td>')[0];
                //$("loadFile").attr("value", file_name);
                d3.select('#loadFile').attr('value',file_name);

               };
           
           cell = row.insertCell(-1); 
           cell.innerHTML=data[i].name;

           cell=row.insertCell(-1);   
           cell.innerHTML=data[i].time.split('T')[0];

        }
        currentRowIndex = target.rows.length;
        //target.deleteRow(2);
});

socket.on('already_exist',function(data){
  alert("같은 이름의 파일이 존재합니다.");
});

socket.on('save_done',function(data){
  alert("저장 완료!");
});

socket.on('load',function(data){

    var i;
    for(i=1;i<State.Editor_count;i++)
      d3.select('#'+slide_list[i] ).remove();

      slide_list=[];
      slide_list[0]="id_sub0";
      angle_list=[];
      angle_list = data[0].angle_list;
      draw_id_list=[];
      draw_id_list = data[0].draw_id_list;
      State.selectedEditor_id="sub0";
      State.Editor_count=1;
      State.svg_background_img = data[0].svg_background_img;
      State.svg_background_color = data[0].svg_background_color;

      for(i=1;i<data[0].slide_length;i++)
      {
        onclick_add_slide();

      }

     board.html(data[0].board_html);
     document.getElementById('board').style.backgroundImage = State.svg_background_img;
     document.getElementById('board').style.backgroundColor = State.svg_background_color;
     for(i=0;i<data[0].slide_length;i++)
     {
       document.getElementById(slide_list[i]).style.backgroundImage = State.svg_background_img;
       document.getElementById(slide_list[i]).style.backgroundColor = State.svg_background_color;
       d3.select('#'+slide_list[i]+"_g").html(data[0].slide_html[i]);
     }
    Sync_Data_Event();
    drawNothingModeSetting();
});


socket.on('login',function(data){
      
      document.getElementById("login_button").style.display = "none";
      document.getElementById("logout_button").style.display = "inline-block";

      d3.select('#user_id').node().innerHTML=data;
});


socket.on('logout',function(data){
      document.getElementById("login_button").style.display = "inline-block";
      document.getElementById("logout_button").style.display = "none";
      d3.select('#user_id').node().innerHTML="";
});

function load_btn_click()
{
    var load_name=document.getElementById("loadFile").value;
    //console.log(load_name);
    socket.emit('loadask',load_name);
    
}

function exportBoard(type) {
  board.selectAll('.textTemp').remove();
  board.selectAll('.range').remove();
  if(type=='png')
    saveSvgAsPng(document.getElementById("board"), "board.png");
  if(type=='jpg')
    saveSvgAsPng(document.getElementById("board"), "board.jpg");
  if(type=='bmp')
    saveSvgAsPng(document.getElementById("board"), "board.bmp");
}
