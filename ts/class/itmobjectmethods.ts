///<reference path='./itmobjectmethod.ts'/>
interface MethodMap {
   [name:string]:ItmObjectMethod;
}

class ItmObjectMethods {

   private _methods:MethodMap={};
   
   constructor()
   {
      this._methods={};
   }

   public add(method:ItmObjectMethod):ItmObjectMethod {
      this._methods[method.name()]=method;
      return method;
   }
}