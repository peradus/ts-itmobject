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

   /**
    * get ITMObject method name
    * @return name
    */
   get name():string {
      return this._name;
   }

   /**
    * set ITMObject method name
    * @param name - name of method
    */
   set name(name) {
      this._name=name;
   }

   /**
    * get ITMObject method parameters
    * @return ItmObjectProperties
    */
   get parameters():ItmObjectProperties {
      return this._parameters;
   }

   /**
    * get ITMObject method submethods
    * @return ItmObjectMethods
    */
   get methods():ItmObjectMethods {
      return this._methods;
   }

   /**
    * set ITMObject method action
    * @param action - function to be executed
    */
   set action(action:Function) {
      this._action=action;
   }

   /**
    * get ITMObject method data 
    * @return object - method data
    * {
         "parameters":p.data(),
         "methods":m.data()
      }
    */
   public data():{} {
      let n=this.name;
      let p=this._parameters;
      let m=this._methods;
      return {
         "parameters":p.data(),
         "methods":m.data()
      }
   }
}
