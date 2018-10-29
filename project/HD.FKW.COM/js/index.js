window.onload = function () {
  var body = document.getElementsByTagName('body')[0];
    var oMyXx = document.getElementById('myXx');
  var oMyXxL = oMyXx.children[0];
  var oMyXxR = oMyXx.children[1];
  var oXxLa = document.getElementById('xxLa');
  var oXxRa = document.getElementById('xxRa');
  oMyXxL.onmouseover = function () {
      oMyXxL.classList.add('now');
      oMyXxR.classList.remove('now');
      oXxLa.classList.add('now');
      oXxRa.classList.remove('now');
      oXNavBox1.classList.add('now');
      oXNavBox2.classList.remove('now');
  };

  oMyXxR.onmouseover = function () {
      oMyXxR.classList.add('now');
      oMyXxL.classList.remove('now');
      oXxRa.classList.add('now');
      oXxLa.classList.remove('now');
      oXNavBox2.classList.add('now');
      oXNavBox1.classList.remove('now');
  };

  var oXBBox = document.getElementById('xBBox');
  var oXBBtn = document.getElementById('xBBtn');
  var oXBBtn1 = oXBBtn.children[0];
  var oXBBtn2 = oXBBtn.children[1];
  var oXNavBox1 = document.getElementById('navBox1');
  var oXNavBox2 = document.getElementById('navBox2');

  oXBBtn1.onclick = function () {
      oXBBox.style.transform = 'translateX(0)';
      oXBBtn1.classList.add('now');
      oXBBtn2.classList.remove('now');
  };
  oXBBtn2.onclick = function () {
      oXBBox.style.transform = 'translateX(-280px)';
      oXBBtn1.classList.remove('now');
      oXBBtn2.classList.add('now');
  };
  var xBtemp =-1;
  var xBnum = -280;
  function xBtime() {
      setInterval(function () {
          oXBBox.style.transform = 'translateX('+xBnum+'px)';
          xBtemp *= -1;
          xBnum +=280*xBtemp;
          if (xBtemp == 1){
              oXBBtn1.classList.remove('now');
              oXBBtn2.classList.add('now');
          }
          if (xBtemp == -1){
              oXBBtn1.classList.add('now');
              oXBBtn2.classList.remove('now');
          }
      },2000)
  }
    xBtime();

    var oSearch = document.getElementById('search');
    var oSearchBox = document.getElementById('searchBox');

    oSearch.onclick = function(ev){
        oSearchBox.classList.add('now');
        var oEvent = ev || event;
        if (oEvent.stopPropagation){
            oEvent.stopPropagation();
        }else {
            oEvent.cancelBubble = true;
        }
    };
    oSearchBox.onclick = function(ev){
        oSearchBox.classList.add('now');
        var oEvent = ev || event;
        if (oEvent.stopPropagation){
            oEvent.stopPropagation();
        }else {
            oEvent.cancelBubble = true;
        }
    };
    body.onclick = function(){
        oSearchBox.classList.remove('now');
    };

    var oSearchClose = document.getElementById('searchClose');

    oSearchClose.onclick = function(){
        oSearchBox.classList.remove('now');
    }
















};