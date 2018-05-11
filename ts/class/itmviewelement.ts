///<reference path='./itmobject.ts'/>
///<reference path='./itmview.ts'/>
///<reference path='./itmhelperfunctions.ts'/>
// https://stackoverflow.com/questions/14742194/declaring-an-htmlelement-typescript
class ItmViewElement extends ItmView {
   protected element:HTMLElement;
   protected div:HTMLElement;

   /** construct an ItmView from an ItmObject   
    * @param itmObject - from which itmObject
    * @param selectedInstance - from which instance
    */
   constructor (element:HTMLElement) {
      super();
      this.element=element;
      this.div=document.createElement("div");
      this.div.innerHTML=this.draw();
      this.element.appendChild(this.div);
   }

}


   
