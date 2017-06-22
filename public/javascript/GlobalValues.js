/*--------------- 전역 변수 ----------------*/
var board = d3.select('#board');
var FIGURE = {NOTHING:0,LINE:1,RECT:2,TRIANGLE:3,CIRCLE:4,STAR:5,HART:6,DONUT:7,DIAMOND:8,AIRPLANE:9,ARROWA:10,ARROWB:11,ARROWC:12,ARROWD:13,
              BAT:14,BULL:15,HEN:16,EAGLE:17,MOUSE:18,ELK:19,DIALOGA:20,DIALOGB:21,DIALOGC:22,DIALOGD:23,TEXT:24,HARE:25, SMILEY:26,CLOUD:27,
              CAPACITOR:28, DIODE:29, GATE_AND:30, GATE_INVERTER:31, GATE_NAND:32, GATE_NOR:33, GATE_OR:34, GATE_XOR:35, INDUCTOR:36, RESISTER:37,
              RECYCLE_3:38, CLEF_ALTO:39, CLEF_BASS:40, CLEF_TREBLE:41, NOTE_4TH:42, NOTE_8TH:43, NOTE_16TH:44, NOTE_32TH:45, NOTE_64TH:46,
              NOTE_HALF:47, NOTE_2_8TH:48, NOTE_2_16TH:49, NOTE_2_32TH:50, NOTE_2_64TH:51, NOTE_3_8TH:52, NOTE_3_16TH:53, NOTE_3_32TH:54,
              NOTE_3_64TH:55,FREELINE:56};
var COORD = {VIEWING:0,WORLD:1};
var boardStartX = $('#board').offset().left;
var boardStartY = $('#board').offset().top;
/*-------------- 드래그 객체 ---------------*/
var board_drag = d3.behavior.drag();
var resizeDrag = d3.behavior.drag();
var moveDrag = d3.behavior.drag();
var groupMoveDrag = d3.behavior.drag();

var draw_id_list = new Array();
var angle_list = new Array();
function state()
{
    this.drawingFigure=FIGURE.NOTHING;
    this.selected = false;
    this.selectedID = 'nothing';
    this.selectedID_List = new Array([]);
    this.selectedCount = 0;
    //선택된 svg
    this.selectedEditor_id = "id_sub0";
    this.Editor_count = '1';
    this.svg_background_color = "white";
    this.svg_background_img = "none";
    /*-------------Css Style-------------*/
    this.fill = '#FFFFFF';
    this.stroke = 'black';
    this.stroke_width = 2;
    this.font_size = 3;
    /*-------------Figure Count--------------*/
    this.totalCount = 0;
}
var State = new state();
var downX, downY;
var slide_list = new Array();
slide_list[0] = "id_sub0";

var bool_in_slide_show = "false";
