var theAjax = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
theAjax.onreadystatechange = function () {
    if(theAjax.readyState === 4) {
        if(theAjax.status >= 200 && theAjax.status < 300 || theAjax.status === 304) {
            console.log(theAjax.responseText)
        }else {
            throw 'error'
        }
    }
}
theAjax.onerror = function (err) {
    throw 'err'
}
theAjax.open('get', 'https://www.baidu.com/index.php?tn=mswin_oem_dg', true);
theAjax.send()
