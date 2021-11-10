function fn_ObjectTypeFY(elementId) {
    var d = typeof (elementId) === 'object' ? elementId : document.getElementById(elementId);
    return d;
}
function id(elementId) {
    return fn_ObjectTypeFY(elementId);
}
function fn_Hide(elementId) {
    var d = fn_ObjectTypeFY(elementId);
    if (d) { d.style.display = 'none'; }
}
function fn_Show(elementId) {
    var d = fn_ObjectTypeFY(elementId);
    if (d) { d.style.display = ''; }
}























/*  */