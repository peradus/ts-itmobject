///<reference path='./itmview.ts'/>
// https://stackoverflow.com/questions/14742194/declaring-an-htmlelement-typescript

class ItmViewTestTimer extends ItmView  {

   /** construct an ItmView from an ItmObject   
    * @param itmObject - from which itmObject
    * @param selectedInstance - from which instance
    */
   constructor (element:HTMLElement) {
      super(element);
      this.autoRefreshMs=1000;
   }

   protected drawBody():string {
      let s:string='';
      s+=new Date().toUTCString();
      s+=super.drawBody();
      return s;
   }
}


   
