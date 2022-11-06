// tái sử dụng nhiều lần bằng cách tạo hàm cho nó vào folder common -> file method.js
function zoomFontSize(size,id){
    var tagID= domID(id).style.fontSize;
    tagID=Number(tagID.replace('px',''));
    // console.log(tagID);
    domID(id).style.fontSize = (tagID+size) +'px';
}
