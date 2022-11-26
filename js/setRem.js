// 完成rem适配


function setRem() {
    var clientWidth = document.clientWidth || document.body.clientWidth;

    //屏幕最大1920
    clientWidth = clientWidth > 1920 ? 1920 : clientWidth;
    clientWidth = clientWidth < 1080 ? 1080 : clientWidth;

    //我的电脑  屏幕尺寸 1920  为了让每一个rem等于80px  /24
    var rem = clientWidth / 24;

    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = rem + 'px';
}


window.onload = setRem;
window.onresize = setRem;