///<reference path='./itmobject.ts'/>
interface InstanceMap {
   [name:string]:ItmObject;
}

class ItmObjectInstances {

   private _instances:InstanceMap={};
   
   constructor()
   {
      this._instances={};
   }
}