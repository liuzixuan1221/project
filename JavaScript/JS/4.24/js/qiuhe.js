/**
 * Created by liuzi on 2018/4/24.
 */
window.onload = function(){
    var arrInput = document.getElementsByTagName('input');
    arrInput[2].onclick = function(){
        var result=Number(arrInput[0].value)+Number(arrInput[1].value);
        if(isNaN(result)){
            alert("输入错误，请输入正确的数字");
        }else{
            console.log(result);
        }
    }
}