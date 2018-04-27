///<reference path='./itmobjectproperty.ts'/>
interface PropertyMap {
   [name: string]: ItmObjectProperty;
}

class ItmObjectProperties {

   private _properties: PropertyMap = {};

   constructor() {
      this._properties = {};
   }

   /**
    * set ITMObject property 
    * @param property - ItmObjectProperty
    * @return ItmObjectProperty
    */
   public set(property: ItmObjectProperty): ItmObjectProperty {
      this._properties[property.name] = property;
      return property;
   }

   /**
    * get ITMObject property 
    * @param name - name of property
    * @return ItmObjectProperty
    */
   public get(name: string): ItmObjectProperty {
      return this._properties[name];
   }

   /**
    * does ITMObject property exist?
    * @param name - name of property
    * @return true/false
    */
   public exist(name: string | undefined): boolean {
      if (name == undefined) return false
      else
         return (name in this._properties);
   }

   /**
    * get ITMObject property value
    * @param name - name of property
    * @return string value or "" if not exist
    */
   public getValue(name: string) {
      if (this.exist(name)) {
         return this.get(name).value;
      }
      else {
         return "";
      }
   }

   /**
    * set ITMObject property value, add if not exist
    * @param name - name of property
    * @param value - value of property
    * @return string value of property
    */
   public addValue(name: string, value: string): string {
      if (this.exist(name)) {
         this.get(name).value = value;
      }
      else {
         this.set(new ItmObjectProperty(name, value));
      }
      return this.getValue(name);
   }

   /**
    * set ITMObject property value, only! if exist
    * @param name - name of property
    * @param value - value of property
    * @return string value of property
    */
   public setValue(name: string, value: string): string {
      if (this.exist(name)) {
         this.get(name).value = value;
      }
      return this.getValue(name);
   }

   /**
    * get ITMObject property data
    * @return property data
    * * {
         <property>:{
            "validator":p.data(),
         },
         <property2>:{...}
      }
  
    */
   public data(): {} {
      var result:StringMap={};
      let propertykeys: string[] = Object.keys(this._properties);
      let t = this;
      propertykeys.forEach(function (key) {
         result[key]=t.get(key).data();
      });
      return result;
   }

   /**
    * get ITMObject property data
    * @return property data as JSONstring
    * * {
         <property>:{
            "validator":p.data(),
         },
         <property2>:{...}
      }
  
    */
   public toString(): string {
      return JSON.stringify(this.data());
   }

}