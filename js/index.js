// Cách 1 : 
/*
document.getElementById('zoomIn').onclick = function () {
    var fontSize = document.getElementById('homeIcon').style.fontSize;
    console.log(fontSize);
    // sau khi dom được font size của icon ta xóa chữ px đi
    var fontSizePx = Number(fontSize.replace('px', ''));
    console.log(fontSizePx);
    fontSizePx += 5;
    console.log(fontSizePx);
    document.getElementById('homeIcon').style.fontSize= fontSizePx + 'px';
}
document.getElementById('zoomOut').onclick = function () {
    var fontSize = document.getElementById('homeIcon').style.fontSize;
    console.log(fontSize);
    // sau khi dom được font size của icon ta xóa chữ px đi
    var fontSizePx = Number(fontSize.replace('px', ''));
    console.log(fontSizePx);
    fontSizePx -= 5;
    console.log(fontSizePx);
    document.getElementById('homeIcon').style.fontSize= fontSizePx + 'px';
}
*/

// CÁCH 2 
// viết hàm trả về 1 thẻ sau khi DOM ( cách viết gọn )
// function domID(id) {
//     return document.getElementById(id);
// }
// document.getElementById('zoomIn').onclick = function () {
//     var fontSize = domID('homeIcon').style.fontSize;
//     var fontSizePx = Number(fontSize.replace('px', ''));
 
//     domID('homeIcon').style.fontSize = (fontSizePx+10) + 'px';
// }
// document.getElementById('zoomOut').onclick = function () {
//     var fontSize = domID('homeIcon').style.fontSize;
//     var fontSizePx  = Number(fontSize.replace('px', ''));

//     domID('homeIcon').style.fontSize = (fontSizePx-10) + 'px';
// }
// CÁCH 3 dùng hàm
// tái sử dụng nhiều lần bằng cách tạo hàm cho nó vào folder common -> file method.js 
function domID(id) {
    return document.getElementById(id);
}

domID('zoomIn').onclick = function () {
    zoomFontSize(5,'homeIcon');
}

domID('zoomOut').onclick = function () {
    zoomFontSize(-5,'homeIcon');
}

domID('zoomInText').onclick=function(){
    zoomFontSize(1,'text');
}
domID('zoomOutText').onclick=function(){
    zoomFontSize(-1,'text');
}
