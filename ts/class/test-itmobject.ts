///<reference path='./itmobject.ts'/>
class TestItmObject extends ItmObject {
   
   constructor (name:string)
   {
         super(name);
   }

   // LOCAL ITMOBJECT METHODS
   public getName():string 
   {
      return "DIT IS EEN TEST";
   }
   
}