///<reference path='./itmobject.ts'/>
class TestItmObject extends ItmObject {
   
   constructor (name:string)
   {
         super(name);
         this._properties.setValue('_description','blablabka');

   }

   
}