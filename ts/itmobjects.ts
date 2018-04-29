///<reference path='./class/itmobject.ts'/>
///<reference path='./class/itmview.ts'/>
///<reference path='./class/itmviewtesttimer.ts'/>

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

// INIT CODE AFTER DOCUMENT LOAD
//window.onload = () => {
   let el=document.getElementById('main');
   var itmview:ItmView;
   if (el) {
      itmview=new ItmViewTestTimer(el,obj,'');
//      itmview.start();
   }
//};
