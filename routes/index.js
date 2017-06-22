var express = require('express');
var router = express.Router();

var passport = require('passport');
var LocalStrategy = require("passport-local").Strategy;

var flash    = require('connect-flash');

router.post('/signup', passport.authenticate('signup', {
    successRedirect : '/signed_up',
    failureRedirect : '/signup_fail',
    failureFlash : true
}));

router.post('/login', passport.authenticate('login', {
    successRedirect : '/logged_in',
    failureRedirect : '/login_fail',
    failureFlash : true
}));

router.post('/signout', passport.authenticate('signout', {
    successRedirect : '/signed_out',
    failureRedirect : '/signout_fail',
    failureFlash : true
}));

router.post('/auth/facebook',passport.authenticate('facebook'));

router.post('/auth/facebook/callback',passport.authenticate('facebook',{
  successRedirect: '/auth_logged_in',
  failureRedirect: '/login_fail',
  failureFlash : true
}));

router.post('/auth/kakao',passport.authenticate('kakao'));

router.post('/auth/kakao/callback',passport.authenticate('kakao',{
  successRedirect: '/auth_logged_in',
  failureRedirect: '/login_fail',
  failureFlash : true
}));

router.post('/auth/naver',passport.authenticate('naver'));

router.post('/auth/naver/callback',passport.authenticate('naver',{
  successRedirect: '/auth_logged_in',
  failureRedirect: '/login_fail',
  failureFlash : true
}));




function isLoggedIn(req, res,next) {

    if (req.isAuthenticated()){
      console.log("지금 로그인 돼있음 : ",req.user.name);


      //res.redirect('/logged_in');
      return next();
      //return 0;
    } else {
      console.log("로그인 안돼있음");
      //req.flash('islive', 'dead');

      return next();
      //res.redirect('/login');
    }
}

router.get('/auth/facebook', passport.authenticate('facebook', {
  authType: 'rerequest', scope: ['public_profile', 'email']
}));


router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), function(req, res) {
  console.log("4");
  res.redirect('/auth_logged_in');
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
router.get('/auth/kakao', passport.authenticate('kakao', {
}));


router.get('/auth/kakao/callback', passport.authenticate('kakao', { failureRedirect: '/' }), function(req, res) {
  console.log("4");
  res.redirect('/auth_logged_in');
});

router.get('/auth/naver', passport.authenticate('naver', {
}));

router.get('/auth/naver/callback', passport.authenticate('naver', { failureRedirect: '/' }), function(req, res) {
  console.log("4");
  res.redirect('/auth_logged_in');
});


router.get('/logout',isLoggedIn, function(req, res){

  console.log("로그아웃됨!!!");
  req.logout();
  res.redirect('/log_out');
});

router.get('/auth_logged_in', isLoggedIn, function(req, res, next) {
            console.log('auth_logged_in');
            req.flash('info', req.user.email);
            req.flash('islive', 'live');
            req.flash('auth','true');
            res.redirect('/send_id');
});
router.get('/logged_in', isLoggedIn, function(req, res, next) {
            console.log('logged_in');
            req.flash('info', req.user.name);
            req.flash('islive', 'live');
            req.flash('auth','false');
            res.redirect('/send_id');
});



router.get('/signed_up',  function(req, res, next) {
    console.log('가입 끝났다는데?');
    res.send('<script type="text/javascript">alert("가입이 완료되었습니다.");parent.close();</script>');
    return 0;
});

router.get('/login_fail', isLoggedIn, function(req, res, next) {
      console.log('로그인 fail!!!!!');
      res.send('<script type="text/javascript">alert("아이디와 비밀번호를 확인해주세요.");history.go(-1);</script>');
});


router.get('/signup_fail', function(req, res, next) {

    if(req.flash('signupMessage')=='아이디가 존재합니다.'){
        res.send('<script type="text/javascript">alert("아이디가 이미 존재합니다.");history.go(-1);</script>');
    }
    else {
        console.log('비밀번호틀림');
        res.send('<script type="text/javascript">alert("비밀번호가 불일치합니다.");history.go(-1);</script>');
    }

});


router.get('/signed_out',  function(req, res, next) {
    console.log('탈퇴끝났다는데??');
    res.send('<script type="text/javascript">alert("탈퇴가 완료되었습니다.");parent.close();</script>');
    return 0;
});

router.get('/signout_fail', function(req, res, next) {

    if(req.flash('signoutMessage')=='아이디가 존재하지 않는데? DB에?'){
        res.send('<script type="text/javascript">alert("아이디가 존재하지않는데 DB에.....");history.go(-1);</script>');
    }
    else if(req.flash('signoutMessage')=='hash비밀번호 틀림'){
        res.send('<script type="text/javascript">alert("hash비밀번호 틀림.....");history.go(-1);</script>');
    }
    else {
        console.log('비밀번호틀림');
        res.send('<script type="text/javascript">alert("비밀번호가 불일치합니다.");history.go(-1);</script>');
    }

});


module.exports = router;
