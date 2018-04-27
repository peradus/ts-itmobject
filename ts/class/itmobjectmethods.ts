///<reference path='./itmobjectmethod.ts'/>
interface MethodMap {
   [name:string]:ItmObjectMethod;
}

interface StringMap { [s: string]: any; }

class ItmObjectMethods {

   private _methods:MethodMap={};
   
   constructor()
   {
      this._methods={};
   }
   
   /**
    * set ITMObject method 
    * @param method - ItmObjectMethod
    * @return ItmObjectMethod
    */
   public set(method:ItmObjectMethod):ItmObjectMethod {
      this._methods[method.name]=method;
      return method;
   }

   /**
    * get ITMObject method 
    * @param method - name of method
    * @return ItmObjectMethod
    */
   public get(method:string):ItmObjectMethod {
      return this._methods[method];
   }

   /**
    * does ITMObject method exist?
    * @param name - name of method
    * @return true/false
    */
   public exist(name:string | undefined):boolean {
      if (name==undefined) return false
      else 
         return (name in this._methods);
   }

    /**
    * get ITMObject methods 
    * @return object - methods
    * {
         <method>:{
            "parameters":p.data(),
            "methods":m.data()
         },
         <method2>:{...}
      }
    */
  
   public data():{} {
      var result:StringMap={};
      let methodkeys:string[]=Object.keys(this._methods);
      let t=this;
      methodkeys.forEach(function(key) {
         result[key]=t.get(key).data();
      });
      return result;
   }
   
   /**
    * get ITMObject methods as JSON string 
    * @return json string - methods
    */
    public toString():string {
      return JSON.stringify(this.data());
   }
}