///<reference path='./itmobject.ts'/>
///<reference path='./itmhelperfunctions.ts'/>
// https://stackoverflow.com/questions/14742194/declaring-an-htmlelement-typescript

class ItmView  {

   protected itmObject:ItmObject | undefined;
   protected selectedInstance:string="";
   protected id="";
   protected element:HTMLElement;
   protected span:HTMLElement;
   protected timerToken:number;

   /** construct an ItmView from an ItmObject   
    * @param itmObject - from which itmObject
    * @param selectedInstance - from which instance
    */
   constructor (element:HTMLElement, itmObject:ItmObject, selectedInstance:string) {
      this.itmObject=itmObject;
      this.selectedInstance=selectedInstance;
      this.id=this.uniqueID();
      this.element=element;
      
      this.span=document.createElement("span");
      this.span.setAttribute('id',this.id);
      this.element.appendChild(this.span);

      this.timerToken=0;

   }

   /**
    * Generate Unique ID
    * @param addText - add additional text to unique id
    * @return uniqueID - like 'jgl9tsrq0.jttxkhan9s8'
    */
   protected uniqueID(addText:string='') {
      return Date.now().toString(36)+Math.random().toString(36);
   }

   protected drawBegin(s:string):string{
      s+='begin>';
      return s;
   }

   protected drawEnd(s:string):string{
      s+='<end';
      return s;
   }

   protected drawBody(s:string):string {
      return s;
   }

   protected draw(s:string):string {
      s+=this.drawBegin(s);
      s+=this.drawBody(s);
      s+=this.drawEnd(s);
      return s;
   }

   protected redraw() {
      this.span.innerHTML=this.draw('');
   }
}


   
