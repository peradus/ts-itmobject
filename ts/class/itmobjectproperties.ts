///<reference path='./itmobjectproperty.ts'/>
interface PropertyMap {
   [name:string]:ItmObjectProperty;
}

class ItmObjectProperties {

   private _properties:PropertyMap={};
   
   constructor()
   {
      this._properties={};
   }

   public set(property:ItmObjectProperty):ItmObjectProperty {
      this._properties[property.name()]=property;
      return property;
   }
}