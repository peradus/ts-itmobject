///<reference path='./itmobjectpropertydata.ts'/>

class ItmObjectProperty {
   private _data:ItmObjectPropertyData;

   constructor(name:string, value:string, validator:string='') {
      this._data=new ItmObjectPropertyData(name, value, validator);
   }

   get data():ItmObjectPropertyData {
      return this._data;
   }

   get name():string {
      return this._data.name;
   }

   get parameters():string {
      let obj={
         "validator":this._data.validator
      }
      return JSON.stringify(obj);
   }

}