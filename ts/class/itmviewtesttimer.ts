///<reference path='./itmview.ts'/>
// https://stackoverflow.com/questions/14742194/declaring-an-htmlelement-typescript

class ItmViewTestTimer extends ItmView  {

   protected timerToken:number;

   /** construct an ItmView from an ItmObject   
    * @param itmObject - from which itmObject
    * @param selectedInstance - from which instance
    */
   constructor (element:HTMLElement, itmObject:ItmObject, selectedInstance:string) {
      super(element,itmObject,selectedInstance);
      
      this.timerToken=0;
   }

   protected drawBody(s:string):string {
      // s+=super.drawBody(s);
      s+=new Date().toUTCString();
      return s;
   }

   public start() {
      this.timerToken=setInterval(()=>this.redraw(),1000);
   }

   public stop() {
      clearTimeout(this.timerToken);
   }

}


   
