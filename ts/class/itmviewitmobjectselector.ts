///<reference path='./itmview.ts'/>
///<reference path='./itmviewbreadcrumbs.ts'/>
// https://stackoverflow.com/questions/14742194/declaring-an-htmlelement-typescript

class ItmViewItmObjectSelector extends ItmViewBreadCrumbs  {

   /** construct an ItmView from an ItmObject   
    */
   protected _selectedItmObject:string="";

   constructor () {
      super();
   }

   /**
    * select ITMObject and update breadcrumbs 
    * @param itmobject:string = '/a/b/c/d/e';
    */
   set selectedItmObject(itmobject:string){
      this._selectedItmObject=itmobject;

      // update breadcrumbs
      let crumbs:string[]=[];
      if (itmobject != "") {
         crumbs=itmobject.split('/');
      }
      this.setBreadCrumbs(crumbs);
   }

   get selectedItmObject():string {
      return this._selectedItmObject;
   }

}


   
