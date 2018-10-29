
window.onload = function(){
    var arrInput = document.getElementsByTagName('input');
    var arrYs = document.getElementsByTagName('option').value;
    var result = null;
    arrInput[2].onclick = function(){
        if(arrYs == '+'){
            result=Number(arrInput[0].value)+Number(arrInput[1].value);
        }
        else if(arrYs == '-'){
            result=Number(arrInput[0].value)-Number(arrInput[1].value);
        }
        else if(arrYs == 'x'){
            result=Number(arrInput[0].value)*Number(arrInput[1].value);
        }
        else if(arrYs == '/'){
            result=Number(arrInput[0].value)/Number(arrInput[1].value);
        }
        else if(isNaN(result)){
            alert("输入错误，请输入正确的数字");
        }else{
            console.log(result);
        }
    }
}