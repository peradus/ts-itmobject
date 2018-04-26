///<reference path='./class/itmobject.ts'/>
///<reference path='./class/test-itmobject.ts'/>

let obj=new ItmObject('test');
let testobj=new TestItmObject('test123');

obj.instances.set(testobj);

let method=new ItmObjectMethod('stop');
let methodA=new ItmObjectMethod('stopA');
let methodB=new ItmObjectMethod('stopB');
method.methods.set(methodA);
method.methods.set(methodB);

obj.methods.set(method);
