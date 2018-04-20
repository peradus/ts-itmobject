///<reference path='./itmobjectmethods.ts'/>
///<reference path='./itmobjectproperties.ts'/>
///<reference path='./itmobjectinstances.ts'/>

class ItmObject  {
   
   private _instances:ItmObjectInstances;
   private _methods:ItmObjectMethods;
   private _properties:ItmObjectProperties;

   constructor (name:string)
   {
         this._methods=new ItmObjectMethods();
         this._properties=new ItmObjectProperties();
         this._instances=new ItmObjectInstances();

         this._properties.set( new ItmObjectProperty('_name',name) );
         this._properties.set( new ItmObjectProperty('_className','itmobject') );
         this._properties.set( new ItmObjectProperty('_displayname',name) );
         this._properties.set( new ItmObjectProperty('_description','') );
         this._properties.set( new ItmObjectProperty('_status','') );
      }

   public instances():ItmObjectInstances
   {
      return this._instances;
   }
   
   // LOCAL ITMOBJECT METHODS
   public getPropertyValue(property:string):string 
   {
      return this._properties.getValue(property);
   }

   public setPropertyValue(property:string, value:string):string 
   {
      return this._properties.setValue(property, value);
   }

   public getName():string
   {
      return this.getPropertyValue('_name');

   }

   public getClassName():string
   {
      return this.getPropertyValue('_classname');
   }
   
   public getDisplayName():string
   {
      return this.getPropertyValue('_displayname');
   }
   
   public getStatus():string
   {
      return this.getPropertyValue('_status');
   }

   // INSTANCE REFERENCED METHODS
   
   public getInstancePropertyValue(instance:string, property:string):string
   {
      if (instance=="") return this.getPropertyValue(property);
      
      let instanceArray:string[] = instance.split('/');
      let findInstance:string | undefined=instanceArray.shift();

      let obj:ItmObject | undefined;
      obj=this._instances.get(findInstance);
      if (obj) 
      {  let nextInstance:string = instanceArray.join('/');
         return obj.getInstancePropertyValue(nextInstance, property);
      }

      return "";
   }

   public setInstancePropertyValue(instance:string, property:string, value:string):string
   {
      if (instance=="") return this.setPropertyValue(property, value);
      
      let instanceArray:string[] = instance.split('/');
      let findInstance:string | undefined=instanceArray.shift();

      let obj:ItmObject | undefined;
      obj=this._instances.get(findInstance);
      if (obj) 
      {  let nextInstance:string = instanceArray.join('/');
         return obj.setInstancePropertyValue(nextInstance, property, value);
      }

      return "";
   }

   public getInstanceName(instance:string):string
   {
      return this.getInstancePropertyValue(instance,'_name');
   }
   
   public getInstanceClassName(instance:string):string
   {
      return this.getInstancePropertyValue(instance,'_classname');
   }
   
   public getInstanceDisplayName(instance:string):string
   {
      return this.getInstancePropertyValue(instance,'_displayname');
   }
   
   public getInstanceStatus(instance:string):string
   {
      return this.getInstancePropertyValue(instance,'_status');
   }
}