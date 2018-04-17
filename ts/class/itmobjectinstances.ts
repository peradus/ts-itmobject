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

   public set(itmobject:ItmObject):ItmObject {
      this._instances[itmobject.getName()]=itmobject;
      return itmobject;
   }

   public get(name:string):ItmObject {
      return (this._instances[name]);
   }

   public exist(name:string):boolean {
      return (name in this._instances);
   }
   
}