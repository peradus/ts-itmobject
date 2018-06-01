///<reference path='./itmobject.ts'/>
///<reference path='./itmview.ts'/>
///<reference path='./itmhelperfunctions.ts'/>
// https://stackoverflow.com/questions/14742194/declaring-an-htmlelement-typescript
class ItmViewChildren extends ItmView {
   protected children:Array<ItmView>=[];
  
   /** construct an ItmView   
    */
   constructor () {
      super();
      this.children=[];
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
  
   protected drawChildrenBegin():string {
      let s:string='';
      return s;
   }
   
   protected drawChildrenEnd():string {
      let s:string='';
      return s;
   }

   protected drawBody():string {
      let s:string='';
      let thisView=this;
      s+=this.drawDebug('drawChildren');

      s+=this.drawChildrenBegin();
      this.children.forEach(function(view:ItmView){
         s+=thisView.drawDebug('drawChild id=[{0}]'.format(view.id));
         s+=view.draw();
      });
      s+=this.drawChildrenEnd();


      return s;
   }
}


   
