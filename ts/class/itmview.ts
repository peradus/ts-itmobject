///<reference path='./itmobject.ts'/>
///<reference path='./itmhelperfunctions.ts'/>
// https://stackoverflow.com/questions/14742194/declaring-an-htmlelement-typescript
class ItmView  {
   protected id="";
   protected debug:boolean;
   protected children:Array<ItmView>=[];
   protected parent:ItmView;
   protected drawID:boolean;

   /** construct an ItmView   
    */
   constructor () {
      this.id=this.uniqueID();
      this.children=[];
      this.debug=false;
      this.parent=this;
      this.drawID=true;
   }
   
   /**
    * Generate Unique ID
    * @param addText - add additional text to unique id
    * @return uniqueID - like 'jgl9tsrq0.jttxkhan9s8'
    */
   protected uniqueID(addText:string='') {
      return Date.now().toString(36)+Math.random().toString(36);
   }

   public addChild(view:ItmView):ItmView {
      view.parent=this;
      this.children.push(view);
      return view;
   }

   protected getChildIdIndex(id:string):number {
      for(let i=0; i++; i<this.children.length){
         let view=this.children[i];
         if (view.id==id) return i;
      }   
      return -1;
   }
   
   protected removeChildId(id:string):ItmView | null{
      let idx:number;
      idx=this.getChildIdIndex(id);
      if (idx !== -1) {
         let view=this.children[idx];
         view.parent=view;
         delete this.children[idx];
         return view;
      }      
      return null;
   }
   
   protected removeChildren() {
      while (this.children.length > 0) {
         let view:ItmView;
         view=this.children[0];         
         this.removeChildId(view.id);
      }
   }
   
   
   /**
    * @param s - debugging string
    * @return - returns string is debugging enabled 
    */
   protected drawDebug(s:string):string {
      let rs:string='';
      if (this.debug===true) {
         let ds:string;
         ds="[{0}]".format(s);
         rs+=ds;
      }
      return rs;
   }

   /**
    * draw begin of view
    * @param s - draw string stream
    * @return - returns begin string stream 
    */
   protected drawBegin():string {
      let s:string='';
      if (this.drawID) {
         s+=`<span id="{0}">`.format(this.id);
      }  
      s+=this.drawDebug('drawBegin');
      return s;
   }

   /**
    * draw end of view
    * @param s - draw string stream
    * @return - returns begin string stream 
    */
   protected drawEnd():string {
      let s:string='';
      s+=this.drawDebug('drawEnd');
      if (this.drawID) {
         s+=`</span>`;
      }
      return s;
   }

   /**
    * draw main body of view
    * @param s - draw string stream
    * @return - returns begin string stream 
    */
   protected drawBody():string {
      let s:string='';
      s+=this.drawDebug('drawBody');
      s+=this.drawChildren();
      return s;
   }

   protected drawChildrenBegin():string {
      let s:string='';
      s+=this.drawDebug('drawChildrenBegin');
      return s;
   }
   
   protected drawChildrenEnd():string {
      let s:string='';
      s+=this.drawDebug('drawChildrenEnd');
      return s;
   }

   protected drawChildren():string {
      let s:string='';
      s+=this.drawChildrenBegin();
      let thisView:ItmView=this;
      s+=this.drawDebug('drawChildren');
     
      this.children.forEach(function(view:ItmView){
         s+=thisView.drawDebug('drawChild id=[{0}]'.format(view.id));
         s+=view.draw();
      });
      s+=this.drawChildrenEnd();
      return s;
   }
   /**
    * draw entire view
    * @param s - draw string stream
    * @return - returns begin string stream 
    */
   protected draw():string {
      let s:string='';
      s+=this.drawBegin();
      s+=this.drawBody();
      s+=this.drawEnd();
      return s;
   }

   protected redraw() {
      let el:HTMLElement | null;
      el=document.getElementById(this.id);
      if (el) {
         el.outerHTML=this.draw();
      }

   }
}


   
