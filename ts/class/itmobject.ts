///<reference path='./itmobjectmethods.ts'/>
///<reference path='./itmobjectproperties.ts'/>
///<reference path='./itmobjectinstances.ts'/>

class ItmObject  {
   
   private _name:string;
   private _classname:string;
   private _displayname:string;
   private _description:string;
   private _instances:ItmObjectInstances;
   private _methods:ItmObjectMethods;
   private _properties:ItmObjectProperties;

   constructor (name:string)
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

   public instances():ItmObjectInstances
   {
      return this._instances;
   }
   
   // GET ITMOBJECT BASED ON INSTANCENAME
   public getItmObject(instance:string):ItmObject | undefined
   {
      if (instance == "") {
         // do nothing
         return this;
      }
      else {
         let instanceArray:string[] = instance.split('/');
         let findInstance:string | undefined;
         findInstance=instanceArray.shift();
         if (findInstance) 
         {
            if (this._instances.exist(findInstance))
            {
               let obj:ItmObject=this._instances.get(findInstance);
               if (obj) 
               {
                  let nextInstance:string=instanceArray.join('/');
                  return obj.getItmObject(nextInstance);
               }
            }
         }
      }
      return undefined;
   }

   // LOCAL ITMOBJECT METHODS
   public getName():string 
   {
      return this._name;
   }

   // INSTANCE REFERENCED METHODS
   public getInstanceName(instance:string):string
   {
      let obj:ItmObject | undefined;
      obj=this.getItmObject(instance);
      if (obj) 
      {
         return obj.getName();
      }
      else {
         return "";
      }
   }
}