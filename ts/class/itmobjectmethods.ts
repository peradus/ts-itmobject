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
   
   public set(method:ItmObjectMethod):ItmObjectMethod {
      this._methods[method.name]=method;
      return method;
   }

   public get(method:string):ItmObjectMethod {
      return this._methods[method];
   }

   public exist(name:string | undefined):boolean {
      if (name==undefined) return false
      else 
         return (name in this._methods);
   }

   public toString():string {
      var resultArray:string[]=[];
      let methodkeys:string[]=Object.keys(this._methods);
      let t=this;
      methodkeys.forEach(function(key) {
         resultArray.push(t.get(key).toString());
      });
      return resultArray.join(",");
   }
}