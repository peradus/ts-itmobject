///<reference path='./class/itmobject.ts'/>
///<reference path='./class/itmview.ts'/>
///<reference path='./class/itmviewbreadcrumbs.ts'/>
///<reference path='./class/itmviewtestautorefresh.ts'/>

// ******************
// MAIN CODE START
//

// Create an ITMObject for test
let obj=new ItmObject('test');

// Create an instance
let testobj=new ItmObject('test123');
obj.instances.set(testobj);


let prop1=new ItmObjectProperty("HOST","123");
obj.properties.set(prop1);

let methodA=new ItmObjectMethod('stopA');
let methodB=new ItmObjectMethod('stopB');
let method=new ItmObjectMethod('stop');

method.methods.set(methodA);
method.methods.set(methodB);

obj.methods.set(method);
let method2=new ItmObjectMethod('start');
method2.parameters.set(prop1);
obj.methods.set(method2);

/* ITMVIEW
 */
var itmmainview:ItmView = new ItmView("main");

var clock:ItmViewTestAutoRefresh = new ItmViewTestAutoRefresh();
      
var breadcrumbs:ItmViewBreadCrumbs = new ItmViewBreadCrumbs();

itmmainview.addView(breadcrumbs);
itmmainview.addView(clock);

// INIT CODE AFTER DOCUMENT LOAD
window.onload = () => {
   itmmainview.redraw();
};
