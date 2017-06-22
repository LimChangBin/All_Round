function getBoxArray(box)
{
      var points = new Array(4);
      for(var i=0;i<4;i++)
          points[i] = new Array(2);
      points[0][0] = box.x1; points[0][1] = box.y1;
      points[1][0] = box.x2; points[1][1] = box.y2;
      points[2][0] = box.x3; points[2][1] = box.y3;
      points[3][0] = box.x4; points[3][1] = box.y4;
      return points;
}
function rotateCoord(points,angle,rotateX,rotateY)
{
      var radian = (angle * (Math.PI/180)).toFixed(5);
      var rotate_points = new Array(4);
      for(var i=0;i<4;i++)
          rotate_points[i]=new Array(2);
      for(var j=0;j<4;j++)
      {
          points[j][0] -= rotateX;
          points[j][1] -= rotateY;
          rotate_points[j][0] = Math.cos(radian).toFixed(5)*points[j][0] - Math.sin(radian).toFixed(5)*points[j][1];
          rotate_points[j][1] = Math.sin(radian).toFixed(5)*points[j][0] + Math.cos(radian).toFixed(5)*points[j][1];
          rotate_points[j][0] += rotateX;
          rotate_points[j][1] += rotateY;

          //원래값 복원해야됨
          points[j][0] += rotateX;
          points[j][1] += rotateY;
      }
      return rotate_points;
}
function rotateCoord2(x,y,angle,rotateX,rotateY)
{
      var radian = (angle * (Math.PI/180)).toFixed(5);
      var rotate_points = new Array(2);
      x -= rotateX;
      y -= rotateY;
      rotate_points[0] = Math.cos(radian).toFixed(5)*x - Math.sin(radian).toFixed(5)*y;
      rotate_points[1] = Math.sin(radian).toFixed(5)*x + Math.cos(radian).toFixed(5)*y;
      rotate_points[0] += rotateX;
      rotate_points[1] += rotateY;
      return rotate_points;
}
function dotProduct(x1,y1,x2,y2)
{
      var cos_theta = ((x1*x2) + (y1*y2)) / ((Math.sqrt(x1*x1+y1*y1))*(Math.sqrt(x2*x2+y2*y2)));
      var angle = Math.acos(cos_theta);
      angle = angle * 180/Math.PI;
      return angle;
}
function settingFigureData(figure,box)
{
      figure.x1 = box[0][0];
      figure.y1 = box[0][1];
      figure.x2 = box[1][0];
      figure.y2 = box[1][1];
      figure.x3 = box[2][0];
      figure.y3 = box[2][1];
      figure.x4 = box[3][0];
      figure.y4 = box[3][1];
}
