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

   public get(property:string):ItmObjectProperty {
      return this._properties[property];
   }

   public exist(name:string | undefined):boolean {
      if (name==undefined) return false
      else 
         return (name in this._properties);
   }
   
   public getValue(name:string) {
      if (this.exist(name)) {
         return this.get(name).value;
      }
      else {
         return "";
      }
   }
   
   public setValue(name:string, value:string):string {
      if (this.exist(name)) {
         this.get(name).value=value;
      }
      else {
         this.set(new ItmObjectProperty(name, value));
      }
      return this.getValue(name);
   }

   public toString():string {
      var resultArray:string[]=[];
      let propertykeys:string[]=Object.keys(this._properties);
      let t=this;
      propertykeys.forEach(function(key) {
         resultArray.push(t.get(key).toString());
      });
      return resultArray.join(",");
   }

}