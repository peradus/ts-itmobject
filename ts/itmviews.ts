///<reference path='./class/itmview.ts'/>
/* ITMVIEW
 */
//var main:ItmViewMain = new ItmViewMain();
var view:ItmView = new ItmView();
view.redraw();

// INIT CODE AFTER DOCUMENT LOAD
window.onload = () => {
//   main.itmObjectSelector.selectedItmObject="a/b/c/d/e/f";
//   main.redraw();
   
   view.autoRefreshMs=1000;
};
