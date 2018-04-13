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

         this._properties.add(
            new ItmObjectProperty('className').setValue('itmobjectclass')
         );
      }

}