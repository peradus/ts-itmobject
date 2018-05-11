///<reference path='./itmview.ts'/>
///<reference path='./itmviewelement.ts'/>
// https://stackoverflow.com/questions/14742194/declaring-an-htmlelement-typescript

class ItmViewTestTimer extends ItmViewElement  {

   protected timerToken:number;

   /** construct an ItmView from an ItmObject   
    * @param itmObject - from which itmObject
    * @param selectedInstance - from which instance
    */
   constructor (element:HTMLElement) {
      super(element);
      
      this.timerToken=0;
   }

   protected drawBody():string {
      let s:string='';
      s+=new Date().toUTCString();
      s+=super.drawBody();
      return s;
   }

   public start() {
      this.timerToken=setInterval(()=>this.redraw(),1000);
   }

   public stop() {
      clearTimeout(this.timerToken);
   }

}


   
