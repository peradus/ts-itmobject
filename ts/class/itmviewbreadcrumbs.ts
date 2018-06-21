///<reference path='./itmview.ts'/>
///<reference path='./itmviewbreadcrumb.ts'/>
// https://stackoverflow.com/questions/14742194/declaring-an-htmlelement-typescript

class ItmViewBreadCrumbs extends ItmView  {

   protected _breadCrumbs:Array<string>=[];
   
   /** construct an ItmView from an ItmObject   
    * @param itmObject - from which itmObject
    * @param selectedInstance - from which instance
    */
   constructor () {
      super();
      this._breadCrumbs=[];
    }

   get breadCrumbs():string[] {
      return this._breadCrumbs;
   }

   protected setBreadCrumbs(crumbs:string[]){
      this._breadCrumbs=crumbs;
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
      let target:string="";
      // add home breadcrumb
      thisView.addView(
         // add breadcrumb and target
         new ItmViewBreadCrumb("Home",target)
      );

      this.breadCrumbs.forEach(function(name){
         target=target+name;
         thisView.addView(
            // add breadcrumb and target
            new ItmViewBreadCrumb(name,target)
         );
         target=target+"/";
      });
      return true;
   }

}


   
