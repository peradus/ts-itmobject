/* ITMVIEW
 */
var main:ItmView = new ItmView("main");
var clock:ItmViewTestAutoRefresh = new ItmViewTestAutoRefresh();
var breadcrumbs:ItmViewBreadCrumbs = new ItmViewBreadCrumbs();

main.addView(breadcrumbs);
main.addView(clock);

// INIT CODE AFTER DOCUMENT LOAD
window.onload = () => {
   main.redraw();
};
