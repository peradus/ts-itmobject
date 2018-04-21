
///<reference path='./itmobjectpropertydata.ts'/>

class ItmObjectProperty {

   private _data:ItmObjectPropertyData;

   constructor(name:string, value:string)
   {
      this._data=new ItmObjectPropertyData();
      this._data.name=name;
      this._data.value=value;
   }


   /**
    * Set Property value, if regexpr match set- value will be checked and only set if match
    * @param value 
    * returns true/false upon succesful set
    */
   get data() {
      return this._data;
   }

   get name() {
      return this._data.name;
   }
}