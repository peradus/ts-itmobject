///<reference path='./class/itmviewmain.ts'/>
/* ITMVIEW
 */
var main:ItmViewMain = new ItmViewMain();

// INIT CODE AFTER DOCUMENT LOAD
window.onload = () => {
   main.itmObjectSelector.selectedItmObject="a/b/c/d/e/f";
   main.redraw();
};
