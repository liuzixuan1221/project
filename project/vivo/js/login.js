var oBgWrap = document.getElementById('bgWrap');
var oMark = document.getElementById('mark');
var oLinkBtn = document.getElementById('linkBtn');
var oMClose = document.getElementById('mClose');
var oCg1 = document.getElementById('cg1');
var oCg2 = document.getElementById('cg2');

oLinkBtn.onclick = function(){
    oMark.style.display = 'block';
    oBgWrap.style.display = 'block';
    return false;
};
oMClose.onclick = function(){
    oMark.style.display = 'none';
    oBgWrap.style.display = 'none';
};




var oZczhInp = document.getElementById('zczhInp');
var oZcmmInp = document.getElementById('zcmmInp');
var oZcBtn = document.getElementById('zcBtn');
var oChecked1 = document.getElementById('checked1');
var oChecked2 = document.getElementById('checked2');
var oJgBox = document.getElementById('jgBox');
var oDlyc = document.getElementById('dlyc');

var sjre = /^1[3-8]\d{9}$/g;
var yxre = /^[0-9a-z\-_\.]+@[a-z0-9]+\.[a-z]+$/;
var flag = true;

oChecked1.onclick = function(){
    if (flag){
        oChecked1.classList.add('now');
        flag = false;
    }
    else{
        oChecked1.classList.remove('now');
        flag = true;
    }
};
oChecked2.onclick = function(){
    if (flag){
        oChecked2.classList.add('now');
        flag = false;
    }
    else{
        oChecked2.classList.remove('now');
        flag = true;
    }
};

oZcBtn.onclick = function(){
    var zczhInp = oZczhInp.value;
    var zcmmInp = oZcmmInp.value;

    if(zcmmInp==""){
        oJgBox.innerHTML ='*请输入密码';
        return false;
    }

    if (sjre.test(zczhInp) == false){
        oJgBox.innerHTML ='*请输入正确的手机号';
        setTimeout(function(){
            oJgBox.innerHTML ='';
        },3000);
        return false;
    }

    function  setCookie(name,value,iDay){
        var oDate = new Date();
        oDate.setDate(oDate.getDate() + iDay);
        document.cookie = name + "=" + value + ";expires=" + oDate;
    }
    setCookie("userName",zczhInp,7);
    setCookie("password",zcmmInp,7);
    oCg1.style.display = 'block';
    oMark.style.display = 'none';
    oZczhInp.value = '';
    oZcmmInp.value = '';
    setTimeout(function(){
        oCg1.style.display = 'none';
        oBgWrap.style.display = 'none';
    },3000);

    return false;
};



var oLoginInput = document.getElementById('loginInput');
var oPasswordInput = document.getElementById('passwordInput');
var oLoginBtn = document.getElementById('loginBtn');



oLoginBtn.onclick = function(){
    var loginInput = oLoginInput.value;
    var passwordInput = oPasswordInput.value;

    function getCookie(name){
        var arr = document.cookie.split('; ');  //["age=18","userName=lzx","password=666666"]
        console.log(arr);
        for(var i = 0; i < arr.length; i++){

            var arr2 = arr[i].split("=");   //["age","18"] ["userName","lzx"] ["password","666666"]
            console.log(arr2);
            if(arr2[0] == name){
                return arr2[1];
            }
        }
        return "";
    }
    var getUserName = getCookie("userName");
    var getPassWord = getCookie("password");

    if(loginInput == getUserName && passwordInput == getPassWord){
        oCg2.style.display = 'block';
        oMark.style.display = 'none';
        setTimeout(function(){
            oCg2.style.display = 'none';
            window.location.href = "index.html";
        },3000)
    }
    else{
        oDlyc.innerHTML = '*账号不存在或账号密码错误';
        setTimeout(function(){
            oDlyc.innerHTML ='';
        },3000);
    }
};