class ItmObjectProperty {
   private _data:ItmObjectPropertyData;

   constructor(name:string, value:string, validator:string='')
   {
      this._data=new ItmObjectPropertyData(name, value, validator);
   }

   get data():ItmObjectPropertyData
   {
      return this._data;
   }

   get name():string
   {
      return this._data.name;
   }
}