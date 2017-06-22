var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User          = require('../models/User');

var FacebookStrategy = require('passport-facebook').Strategy;
var KakaoStrategy = require('passport-kakao').Strategy;
var NaverStrategy = require('passport-naver').Strategy;



module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        console.log("serialize!!!");
        done(null, user.id);
    });
    passport.deserializeUser(function(id, done) {
                console.log("deserialize!!!");
          User.findById({'_id':id}, function(err, user) {
              done(err, user);
          });
    });

    passport.use('facebook',new FacebookStrategy({
           clientID: '2135774143315672',
           clientSecret: 'edb06b06e3ba8ff8982f187751a8de1d',
           callbackURL: "http://localhost:7000/auth/facebook/callback",
           passReqToCallback: true
       },
       function(req, accessToken, refreshToken, profile, done) {

         User.findOne({ 'name' : profile.id }, function(err, user) {
             if (err) return done(err);
             if (user) {
             return done(null,user);

             } else {

                 var newUser = new User();
         console.log(profile.displayName);
                 newUser.name = profile.id;
                 newUser.email = profile.displayName;

                 newUser.save(function(err) {
                     if (err)
                         throw err;

                     return done(null, newUser);

                 });
             }
         });
       }
   ));

   passport.use(new KakaoStrategy({
       clientID: '6baa20471764c19af2bbf3fb795a3c6d',
       callbackURL: "http://localhost:7000/auth/kakao/callback",
       passReqToCallback: true
     },
       function(req, accessToken, refreshToken, profile, done) {
         User.findOne({ 'name' : profile.id }, function(err, user) {
             if (err) return done(err);
             if (user) {
             return done(null,user);

             } else {

                 var newUser = new User();
         console.log(profile.displayName);
                 newUser.name = profile.id;
                 newUser.email = profile.displayName;

                 newUser.save(function(err) {
                     if (err)
                         throw err;
                     return done(null, newUser);

                 });
             }
         });
       }
   ));

   passport.use(new NaverStrategy({
       clientID: 'ckYvXX8ubV1iczhynFRZ',
       clientSecret: '4LkQu2af9n',
       callbackURL: "http://localhost:7000/auth/naver/callback",
       passReqToCallback: true
     },
       function(req, accessToken, refreshToken, profile, done) {
         User.findOne({ 'name' : profile.id }, function(err, user) {
             if (err) return done(err);
             if (user) {
             return done(null,user);

             } else {

                 var newUser = new User();
         console.log(profile.displayName);
                 newUser.name = profile.id;
                 newUser.email = profile.displayName;

                 newUser.save(function(err) {
                     if (err)
                         throw err;

                     return done(null, newUser);

                 });
             }
         });
       }
   ));


    //프로그램 작성
  passport.use('signup', new LocalStrategy({
        usernameField : 'name',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, name, password, done) {
          if(password==req.body.confirm_password){
            console.log("비밀번호 일치해~");
          }
          else {
            console.log("비밀번호 불일치야 ");
            return done(null,false);
          }
        User.findOne({ 'name' : name }, function(err, user) {
            if (err) return done(err);
            if (user) {
            console.log("응 아이디 이미 있어~") ;
            return done(null, false, req.flash('signupMessage', '아이디가 존재합니다.'));
            } else {

                var newUser = new User();

                newUser.name = name;
                newUser.email = req.body.email;
                newUser.password = newUser.generateHash(password);

                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                console.log("가입 끝났다") ;
                });
            }
        });
    }));

passport.use('login', new LocalStrategy({
            usernameField : 'name',
            passwordField : 'password',
            passReqToCallback : true
        },
        function(req, name, password, done) {
            User.findOne({ 'name' : name }, function(err, user) {
                console.log("로그인중") ;
                      //console.log("지금 로그인 돼있음 : ",req.body.name);
                if (err)
                    return done(err);
                if (!user) {
                   console.log("그런 아이디 없음") ;
                   return done(err);
                }
                if (!user.validPassword(password))
                {
                    console.log("비밀번호 틀림") ;
                    return done(err);
                }
                else
                {
                console.log("로그인됨!!!") ;

                return done(null, user);
                }
            });
        }));

  passport.use('signout', new LocalStrategy({
          usernameField : 'name',
          passwordField : 'password',
          passReqToCallback : true
      },
      function(req, name, password, done) {
            if(password==req.body.confirm_password){
              console.log("비밀번호 일치해~");
            }
            else {
              console.log("비밀번호 불일치야 ");
              return done(null,false);
            }
          User.findOne({ 'name' : name }, function(err, user) {
              if (err) return done(err);
              if (user) {
              console.log("아이디 있으니깐 이제 지울수 있겠지? 비번만 확인하면?") ;

                if(!user.validPassword(password)){
                  console.log("비밀번호 틀렸어 !");
                  return done(null,false, req.flash('signoutMessage', 'hash비밀번호 틀림'));
                }
                else{
                  console.log("비밀번호까지 정다압!");
                  user.remove(function(err){
                      if(err){
                          console.log(err);
                            return;
                      }
                      else{
                          console.log("회원탈퇴 이제 됬어~!~!");
                          return done(null,user);
                      }
                  });
                }
              }

              else
              {
              console.log("아이디가 DB에 존재하지 않는데?");
              return done(null, false, req.flash('signoutMessage', '아이디가 존재하지 않는데? DB에?'));

              }
          });
      }));
};
