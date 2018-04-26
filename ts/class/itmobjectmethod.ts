class ItmObjectMethod {

   private _name:string;
   private _parameters:ItmObjectProperties;
   private _methods:ItmObjectMethods;
   private _action:Function;

   constructor (name:string)
   {
      this._name=name;
      this._parameters=new ItmObjectProperties;
      this._methods=new ItmObjectMethods;
      this._action=function(){};
   }

   get name():string {
      return this._name;
   }
   set name(name) {
      this._name=name;
   }

   get parameters():ItmObjectProperties {
      return this._parameters;
   }

   get methods():ItmObjectMethods {
      return this._methods;
   }

   set action(action:Function) {
      this._action=action;
   }

   public toString():string {
      let obj={
         "parameters":this._parameters.toString(),
         "methods":this._methods.toString()
      }  
      
      return this._name+JSON.stringify(obj);
   }
   
}
