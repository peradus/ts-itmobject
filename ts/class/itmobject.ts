///<reference path='./itmobjectmethods.ts'/>
///<reference path='./itmobjectproperties.ts'/>
///<reference path='./itmobjectinstances.ts'/>

class ItmObject {
   
   private _name:string;
   private _classname:string;
   private _displayname:string;
   private _description:string;
   private _instances:ItmObjectInstances;
   private _methods:ItmObjectMethods;
   private _properties:ItmObjectProperties;

   constructor(name:string)
   {
         this._name=name;
         this._classname="itmobject";
         this._displayname=this._name;
         this._description="";
         this._methods=new ItmObjectMethods();
         this._properties=new ItmObjectProperties();
         this._instances=new ItmObjectInstances();

         this._properties.set(
            new ItmObjectProperty('className').setValue('itmobjectclass')
         );
   }

   // GET ITMOBJECT BASED ON INSTANCENAME
   public getItmObject(instance:string):any
   {
      var obj:ItmObject;
      
      if (instance == "") {
         // do nothing
         obj=this;
      }
      else {
         // pass to instance method
         // split instance into parts a/b/c/d == ['a','b','c','d']
         var instanceArray:string[] = instance.split('/');
         
         while (instanceArray.length > 0) {

         }

      }
      return obj;
   }

   // LOCAL ITMOBJECT METHODS
   public getName():string 
   {
      return this._name;
   }

   // INSTANCE REFERENCED METHODS
   public getInstanceName(instance:string):string
   {
      // if instance='' getName local method
      if (instance=="") return this.getName();
      
      // pass to instance method
      // split instance into parts a/b/c/d == ['a','b','c','d']
      var instanceArray:string[] = instance.split('/');

      // get direct local instance from instance parts, 'a'
      var localInstance:string = localInstance=instanceArray.shift() || '';

      // check if local instance exist
      if (this._instances.exist(localInstance)) {
         // get instance as itmobject
         var obj:ItmObject=this._instances.get(localInstance);
         // recreate subInstanceName, ['b','c',d'] == 'b/c/d'
         var subInstanceName=instanceArray.join('/');
         return obj.getInstanceName(subInstanceName);
      }

      return "";
   }
}