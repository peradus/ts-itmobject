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

   public name():string {
      return this._name;
   }

   public setAction(f:Function):ItmObjectMethod {
      this._action=f;
      return this;
   }

   public parameters(p:ItmObjectProperties):ItmObjectMethod {
      this._parameters=p;
      return this;
   }

   public methods(m:ItmObjectMethods):ItmObjectMethod {
      return this;
   }
}