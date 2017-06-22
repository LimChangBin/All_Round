function Stack() {
   this.dataStore = [];
   this.top = 0;
   this.push = push;
   this.pop = pop;
   this.peek = peek;
   this.clear = clear;
   this.length = length;
 }

 function push(element) {
   this.dataStore[this.top++] = element;
 }

 function peek() {
   return this.dataStore[this.top - 1];
 }

 function pop() {
   return this.dataStore[--this.top];
 }

 function clear() {
   this.top = 0;
 }

 function length() {
   return this.top;
 }
var stack1 = new Stack();
var stack2 = new Stack();
var init = new saveData2();
init.slide_html[0]="";
stack1.push(init);

function saveData2()
{
      this.board_html = board.html();
      this.slide_length = slide_list.length;
      this.slide_html = [];
      this.angle_list = [];
      this.draw_id_list = [];
      this.total_count = State.totalCount;
      this.selectedEditor_id = State.selectedEditor_id;
      this.Editor_count = State.Editor_count;
}

function save_now_data()
{
      var data = new saveData2();
      var i;
      for(i=0;i<slide_list.length;i++)
          data.slide_html.push(d3.select('#'+slide_list[i]).html());
      for(i=0;i<draw_id_list.length;i++)
          data.draw_id_list[i]=draw_id_list[i];
      for(i=0;i<angle_list.length;i++)
          data.angle_list[i]=angle_list[i];
      stack1.push(data);
      stack2.clear();
      console.log('save');
      console.log(stack1);
}

function load_before_data()
{
      console.log('before');
      console.log(stack1);
      if(stack1.length()>=2)
      {
          stack2.push(stack1.pop());
          var data = stack1.peek();
          draw_id_list = data.draw_id_list;
          var slide_html = data.slide_html;
          angle_list = data.angle_list;
          State.selectedCount=0;
          State.selectedEditor_id=data.selectedEditor_id;
          State.Editor_count= 1;
          State.totalCount = data.total_count;
          for(var i=1;i<slide_list.length;i++)
            d3.select('#'+slide_list[i]).remove();

          slide_list = new Array();
          slide_list[0] = "id_sub0";
          // slide 생성 + html 백업
          for(i=0;i<data.slide_length;i++)
          {
            if(i!==0)
              onclick_add_slide();
            if(i===0&&slide_html[0]==="")
                d3.select('#id_sub0_g').html("");
            else
                d3.select('#'+slide_list[i]).html(slide_html[i]);
          }
          board.html(data.board_html);
          Sync_Data_Event();
          drawNothingModeSetting();
      }
}

function load_after_data()
{
      console.log('after');
      console.log(stack1);
      if(stack2.length()>=1)
      {
          stack1.push(stack2.pop());
          var data = stack1.peek();
          draw_id_list = data.draw_id_list;
          var slide_html = data.slide_html;
          angle_list = data.angle_list;
          State.selectedCount=0;
          State.selectedEditor_id=data.selectedEditor_id;
          State.Editor_count=1;
          State.totalCount = data.total_count;
          for(var i=1;i<slide_list.length;i++)
            d3.select('#'+slide_list[i]).remove();

          slide_list = new Array();
          slide_list[0] = "id_sub0";

          // slide 생성 + html 백업
          for(i=0;i<data.slide_length;i++)
          {
            if(i!==0)
              onclick_add_slide();
            d3.select('#'+slide_list[i]).html(slide_html[i]);
          }
          board.html(data.board_html);
          Sync_Data_Event();
          drawNothingModeSetting();
      }
}
