///<reference path='./itmview.ts'/>
///<reference path='./itmviewbreadcrumb.ts'/>
// https://stackoverflow.com/questions/14742194/declaring-an-htmlelement-typescript

class ItmViewBreadCrumbs extends ItmView  {

   protected breadCrumbs:Array<string>=[];
   
   /** construct an ItmView from an ItmObject   
    * @param itmObject - from which itmObject
    * @param selectedInstance - from which instance
    */
   constructor () {
      super();
      this.breadCrumbs=['abc','def','ghi','jkl','mno','pqr','stu','vwx','yz'];
      this.rebuild();
   }

   protected drawBegin():string {
      let s:string='';
      s+=super.drawBegin();
      s+=`<nav aria-label="breadcrumb">
      `;
      return s;
   }

   protected drawEnd():string {
      let s:string='';
      s+=`</nav>
      `;
      
      s+=super.drawEnd();
      return s;
   }

   protected drawViewItemsBegin():string {
      let s:string='';
      s+=`<ol class="breadcrumb">
      `;
      return s;
   }

   protected drawViewItemsEnd():string {
      let s:string='';
      s+=`</ol>
      `;
      return s;
   }

   protected rebuild():boolean {
      this.removeViews();
      let thisView=this;
      this.breadCrumbs.forEach(function(name){
         let breadCrumb=new ItmViewBreadCrumb();
         breadCrumb.name=name;
         thisView.addView(breadCrumb);
      });
      return true;
   }

}


   
