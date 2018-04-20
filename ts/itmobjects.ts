///<reference path='./class/itmobject.ts'/>
///<reference path='./class/test-itmobject.ts'/>

let obj=new ItmObject('test');
let testobj=new TestItmObject('test123');

obj.instances().set(testobj);

