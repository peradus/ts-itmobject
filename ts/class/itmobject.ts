///<reference path='./itmobjectmethods.ts'/>
///<reference path='./itmobjectproperties.ts'/>
///<reference path='./itmobjectinstances.ts'/>

class ItmObject  {
   
   protected _instances:ItmObjectInstances;
   protected _methods:ItmObjectMethods;
   protected _properties:ItmObjectProperties;

   constructor (name:string)
   {
         this._methods=new ItmObjectMethods();
         this._properties=new ItmObjectProperties();
         this._instances=new ItmObjectInstances();

         this._properties.set( new ItmObjectProperty('_name',name) );
         this._properties.set( new ItmObjectProperty('_className','itmobject') );
         this._properties.set( new ItmObjectProperty('_displayname',name) );
         this._properties.set( new ItmObjectProperty('_description','') );
         this._properties.set( new ItmObjectProperty('_status','ok') );
      }

   
   get instances():ItmObjectInstances 
   {
      return this._instances;
   }
   
   get properties():ItmObjectProperties
   {
      return this._properties;
   }

   get methods():ItmObjectMethods
   {
      return this._methods;
   }

   // LOCAL ITMOBJECT METHODS
   /**
    * Get ITMObject property value
    * @param property 
    */
      public getPropertyValue(property:string):string 
   {
      return this._properties.getValue(property);
   }

   /**
    * Set ITMObject property value
    * @param property - property to set
    * @param value    - value to set 
    */
      public setPropertyValue(property:string, value:string):string 
   {
      return this._properties.setValue(property, value);
   }

   /**
    * Get ITMObject name
    */
      public getName():string
   {
      return this.getPropertyValue('_name');

   }

   /**
    * Get ITMObject classname
    */
      
   public getClassName():string
   {
      return this.getPropertyValue('_classname');
   }
   
   /**
    * Get ITMObject displayname
    */
   public getDisplayName():string
   {
      return this.getPropertyValue('_displayname');
   }
   
   /**
    * Get ITMObject status
    */
      public getStatus():string
   {
      return this.getPropertyValue('_status');
   }

   /**
    * Get ITMObject description
    */
   public getDescription():string
   {
      return this.getPropertyValue('_description');
   }

   /**
    * Get ITMObject properties
    */
   public getProperties():string
   {
      return this._properties.toString(); 
   }

   /**
    * Get ITMObject methods, returns comma-separated method list
    */
      public getMethods():string
   {
      return this._methods.toString(); 
   }

   /**
    * Do ITMObject method, returns status after method execution
    * @param method 
    */
      public doMethod(method:string):string
   {
      return "doMethod: result=["+method+"]";

   }

   // INSTANCE REFERENCED METHODS
   /**
    * Get ITMObject instances, returns comma-separated instance list
    * @param instance - select instance
    */
   public getInstances(instance:string=""):string
   {
      if (instance=="") return this._instances.toString();
      
      let instanceArray:string[] = instance.split('/');
      let findInstance:string | undefined=instanceArray.shift();

      let obj:ItmObject | undefined;
      obj=this._instances.get(findInstance);
      if (obj) 
      {  let nextInstance:string = instanceArray.join('/');
         return obj.getInstances(nextInstance);
      }
      return "";
   }
   
   /**
    * Get ITMObject selected instance property value
    * @param instance - instance select
    * @param property - property select
    */
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

   /**
    * Set ITMObject selected instance property value
    * @param instance - instance select
    * @param property - property select
    * @param value    - set value
    */
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

   /**
    * Get ITMObject selected instance properties
    * @param instance - instance select
    */
   public getInstanceProperties(instance:string):string
   {
      if (instance=="") return this.getProperties();
      
      let instanceArray:string[] = instance.split('/');
      let findInstance:string | undefined=instanceArray.shift();

      let obj:ItmObject | undefined;
      obj=this._instances.get(findInstance);
      if (obj) 
      {  let nextInstance:string = instanceArray.join('/');
         return obj.getInstanceProperties(nextInstance);
      }
      return "";
   }

   /**
    * Get ITMObject selected instance methods
    * @param instance - instance select
    */
   public getInstanceMethods(instance:string):string
   {
      if (instance=="") return this.getMethods();
      
      let instanceArray:string[] = instance.split('/');
      let findInstance:string | undefined=instanceArray.shift();

      let obj:ItmObject | undefined;
      obj=this._instances.get(findInstance);
      if (obj) 
      {  let nextInstance:string = instanceArray.join('/');
         return obj.getInstanceMethods(nextInstance);
      }
      return "";
   }

   /**
    * Do ITMObject method, returns result of method
    * @param instance - instance select
    * @param method - method select
    */
   public doInstanceMethod(instance:string, method:string):string
   {
      if (instance=="") return this.doMethod(method);
      
      let instanceArray:string[] = instance.split('/');
      let findInstance:string | undefined=instanceArray.shift();

      let obj:ItmObject | undefined;
      obj=this._instances.get(findInstance);
      if (obj) 
      {  let nextInstance:string = instanceArray.join('/');
         return obj.doInstanceMethod(nextInstance,method);
      }
      return "";
   }

   /**
    * Get ITMObject selected instance name
    * @param instance - instance select
    */

   public getInstanceName(instance:string):string 
   {
      return this.getInstancePropertyValue(instance,'_name');
   }
   
   /**
    * Get ITMObject selected instance classname
    * @param instance - instance select
    */
   public getInstanceClassName(instance:string):string
   {
      return this.getInstancePropertyValue(instance,'_classname');
   }
   
   /**
    * Get ITMObject selected instance displayname
    * @param instance - instance select
    */
    public getInstanceDisplayName(instance:string):string
   {
      return this.getInstancePropertyValue(instance,'_displayname');
   }
   
   /**
    * Get ITMObject selected instance status
    * @param instance - instance select
    */
    public getInstanceStatus(instance:string):string
   {
      return this.getInstancePropertyValue(instance,'_status');
   }

   /**
    * Get ITMObject selected instance description
    * @param instance - instance select
    */
    public getInstanceDescription(instance:string):string
   {
      return this.getInstancePropertyValue(instance,'_description');
   }
}