process.env.NODE_ENV = process.env.NODE_ENV || 'development';


var express=require('express');
var app = express();
var router2 = express.Router();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var mongoose=require('mongoose');
var router=require('./router/main')(app);
var path=require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

passport=require('./config/passport');
var passport = require('passport');

var LocalStrategy=require('passport-local').Strategy;
var session = require('express-session');
var flash = require('connect-flash');

var index = require('./routes/index');
var users = require('./routes/users');

var id_info;
var auth;

var global_socket;

var life;

var sid;

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));


require('./config/passport')(passport);//
app.use(flash());

server.listen(7000,() => {
  console.log('Start the server using the port 7000');
});

app.set('views', __dirname + '/views');
app.set("view engine",'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'public')));




app.get('/isliving',function(req,res){

  life=req.flash('islive');
  console.log("살았니??? : ",life);

});


app.get('/send_id',function(req,res){

    id_info=req.flash('info');
    life=req.flash('islive');
    auth=req.flash('auth');
    console.log("아이디 : ",id_info);
    if(auth=='true'){
        res.send('<script type="text/javascript">parent.close();</script>');
    }
    else
    {
        res.send('<script type="text/javascript">parent.close();</script>');
    }

        //global_socket.emit('login',id_info,sid);
        global_socket.emit('login',id_info);

});



app.get('/log_out',function(req,res){
  console.log('로그아웃 됨!');
     life="dead";
     auth="false";
     global_socket.emit('logout',sid);
     res.redirect('/Editor.html');
 });

//passport

app.use(passport.initialize());
app.use(passport.session()); //로그인 세션 유지

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found????');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


//DB 연결
mongoose.connect("mongodb://SYJ:yj1234@ds129260.mlab.com:29260/all-round");
var db=mongoose.connection;

db.once("open",function(){
  console.log("DB connected!");
});

//board 저장
var dataSchema=mongoose.Schema({
  id:String,
  name:String,
  data_array:Array,
  time: {type: Date, default: Date.now}
});
var Data=mongoose.model('boards',dataSchema);

io.on('connection',(socket) => {

  global_socket=socket;

  console.log("Client connected!");




  if(life=='live')
    global_socket.emit('login',id_info);
    //global_socket.emit('login',id_info,sid);

  socket.on('save',function(data,data2){

    var data_array=data;
      if(!data)
        alert('파일명을 입력해주세요.')
      else{
      Data.findOne({name:data2,id:id_info},function(err,data){
        if(err)return console.log("Data ERROR:",err);
        //console.log(data);
        if(data)
          global_socket.emit('already_exist');
        else
        {
        Data.create({name:data2,data_array:data,id:id_info},function(err,data){
          
             if(err)return console.log("Data ERROR:",err);
            data.data_array=data_array;
            data.save();
           });
              console.log('saved!!!!');
          global_socket.emit('save_done');
        }
      });
    }
    });



 socket.on('delete_DB',function(data){

    var load_name=data;
    Data.findOne({id:id_info,name:load_name},function(err,data){
      if(err)return console.log("Data ERROR:",err);
      data.remove();
      //console.log(data.html);
      console.log('deleted!!!');
      Data.find({id:id_info},function(err,data){
        if(err)return console.log("Data ERROR:",err);

        socket.emit('id_array',data);

      });
      
    });

  });

  socket.on('loadready',function(data){
    var load_name=data;
    Data.find({id:id_info},function(err,data){
      if(err)return console.log("Data ERROR:",err);
      var capacity=0;

      socket.emit('id_array',data);

    });
  });

  socket.on('loadask',function(data){
    var load_name=data;
    Data.findOne({id:id_info,name:load_name},function(err,data){
      if(err)return console.log("Data ERROR:",err);

      socket.emit('load',data.data_array);
      console.log('loaded!!!');
    });
  });

});



module.exports=app;
