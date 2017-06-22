function zIndexButtonCilck(id)
{
    for(var i=0;i<State.selectedCount;i++)
    {
        var figure = board.select('g.'+State.selectedID_List[i]);
        switch (id)
        {
              case "moveToFirstFront":
                  figure.moveToFirstFront();
                break;
              case "moveToLastBack":
                  figure.moveToLastBack();
               break;
             case "moveToFront":
                 figure.moveToFront();
               break;
             case "moveToBack":
                 figure.moveToBack();
               break;
              default:
        }
    }
}


// 맨뒤로 가져오기 d3.select(id).moveToLastBakc();
d3.selection.prototype.moveToLastBack = function() {
  return this.each(function() {
      var firstChild = this.parentNode.firstChild;
      if (firstChild) {
          this.parentNode.insertBefore(this, firstChild);
      }
  });
};
// 맨 앞으로 가져오기 d3.select(id).moveToFirstFront();
d3.selection.prototype.moveToFirstFront = function() {
  return this.each(function(){
    var rangeStartIndex=-1;
    for(i=0;i<this.parentNode.childNodes.length;i++)
    {
      var figure = this.parentNode.childNodes[i];
      if(figure.nodeName!='#text'&&figure.className.animVal=='range'&&rangeStartIndex==-1)
          rangeStartIndex=i;
    }
    this.parentNode.insertBefore(this, this.parentNode.childNodes[rangeStartIndex]);
  });
};
function findRow(node){
    var i=1;
    while(node.previousSibling){
        node = node.previousSibling;
        if(node.nodeType === 1){
            i++;
        }
    }
    return i; //Returns 3
}
// 뒤로 가져오기
d3.selection.prototype.moveToBack = function() {
  //figure.className.animVal
  return this.each(function() {
      var checkTextNode=false;
      for(var i=0;i<this.parentNode.childNodes.length;i++)
      {
        if(this.parentNode.childNodes[i].nodeName=="#text"){checkTextNode=true;break;}
      }
      if(checkTextNode)
        this.parentNode.insertBefore(this, this.parentNode.childNodes[findRow(this)-1]);
      else{if(findRow(this)!=1)this.parentNode.insertBefore(this, this.parentNode.childNodes[findRow(this)-2]);}
  });
};
// 앞으로 가져오기 d3.select(id).moveToFront();
d3.selection.prototype.moveToFront = function() {
  return this.each(function(){
    var checkTextNode=false;
    for(var i=0;i<this.parentNode.childNodes.length;i++)
    {
      if(this.parentNode.childNodes[i].nodeName=="#text"){checkTextNode=true;break;}
    }
    if(checkTextNode)
      this.parentNode.insertBefore(this, this.parentNode.childNodes[findRow(this)+2]);
      else{this.parentNode.insertBefore(this, this.parentNode.childNodes[findRow(this)+1]);}
  });
};
