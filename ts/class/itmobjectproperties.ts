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

   public exist(name:string | undefined):boolean {
      if (name==undefined) return false
      else 
         return (name in this._properties);
   }
   
   public get(property:string):ItmObjectProperty {
      return this._properties[property];
   }

   public getValue(property:string):string {
      if (this.exist(property)) {
         return this._properties[property].getValue();
      }
      return "";
   }

   public setValue(property:string, value:string):string {
      if (this.exist(property)) {
         return this._properties[property].setValue(value);
      }
      else {
         this.set(new ItmObjectProperty(property,value));
         return value;
      }
   }

}