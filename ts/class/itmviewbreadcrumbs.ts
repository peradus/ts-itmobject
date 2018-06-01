///<reference path='./itmview.ts'/>
///<reference path='./itmviewchildren.ts'/>
///<reference path='./itmviewbreadcrumb.ts'/>
// https://stackoverflow.com/questions/14742194/declaring-an-htmlelement-typescript

class ItmViewBreadCrumbs extends ItmViewChildren  {

   protected breadCrumbs:Array<string>=[];
   
   /** construct an ItmView from an ItmObject   
    * @param itmObject - from which itmObject
    * @param selectedInstance - from which instance
    */
   constructor () {
      super();
      this.breadCrumbs=['abc','def','ghi','jkl','mno','pqr','stu','vwx','yz'];
      this.rebuildBreadCrumbs();
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

   protected drawChildrenBegin():string {
      let s:string='';
      s+=`<ol class="breadcrumb">
      `;
      return s;
   }

   protected drawChildrenEnd():string {
      let s:string='';
      s+=`</ol>
      `;
      return s;
   }

   protected rebuildBreadCrumbs() {
      this.removeChildren();
      let thisView=this;
      this.breadCrumbs.forEach(function(name){
         let breadCrumb=new ItmViewBreadCrumb(name);
         thisView.addChild(breadCrumb);
      })
   }

}


   
