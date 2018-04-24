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
      this._properties[property.name]=property;
      return property;
   }

   public setValue(name:string, value:string) {
      if (this.exist(name)) {
         this.get(name).data.value=value;
      }
      else {
         this.set(new ItmObjectProperty(name, value));
      }
   }

   public exist(name:string | undefined):boolean {
      if (name==undefined) return false
      else 
         return (name in this._properties);
   }
   
   public get(property:string):ItmObjectProperty {
      return this._properties[property];
   }

   public toString():string
   {
      return Object.keys(this._properties).join(",");
   }

   public toJSON():string
   {
      return JSON.stringify(this._properties)
   }
}