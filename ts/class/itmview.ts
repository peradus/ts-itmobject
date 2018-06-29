///<reference path='./itmobject.ts'/>
///<reference path='./itmhelperfunctions.ts'/>
// https://stackoverflow.com/questions/14742194/declaring-an-htmlelement-typescript
class ItmView  {
   protected _debug:boolean=false;
   protected _drawID:boolean=true;

   protected _id:string="";
   protected _parent:ItmView;
   protected _viewitems:Array<ItmView>=[];

   protected _timerToken:number=0;

   protected _autoRefreshInterval=0;
      
   get debug():boolean    {
      return this._debug;
   }

   set debug(enable:boolean)    {
      this._debug=enable;
   }

   get element():HTMLElement | null {
      return document.getElementById(this._id);
   }

   get drawID():boolean    {
      return this._drawID;
   }

   set drawID(enable:boolean)    {
      this._drawID=enable;
   }
   
   set id(newid:string)    {
      this._id=newid;
   }

   get id():string    {
      return this._id;
   }

   get parent():ItmView    {
      return this._parent;
   }

   set parent(p:ItmView)    {
      this._parent=p;
   }
   
   get viewItems():Array<ItmView>   {
      return this._viewitems;
   }

   
   set autoRefreshMs(intervalMs:number) {
      this._autoRefreshInterval=intervalMs;
      if (intervalMs==0){
         clearTimeout(this._timerToken);
      }
      else {
         this._timerToken=setInterval(()=>this.autoRefresh(),intervalMs);
      }
   }

   /** construct an ItmView   
    */
   constructor (id:string="") {
      if (id == "") {
         this._id=this.uniqueID();
      }
      else {
         this._id=id;
      }
      
      this._parent=this;
      this._viewitems=[];
   }
  
   /**
    * Generate Unique ID
    * @param addText - add additional text to unique id
    * @return uniqueID - like 'jgl9tsrq0.jttxkhan9s8'
    */
   protected uniqueID(addText:string='') {
      return Date.now().toString(36)+Math.random().toString(36);
   }

   public addView(view:ItmView):ItmView {
      view.parent=this;
      this._viewitems.push(view);
      return view;
   }

   protected getViewIndex(id:string):number {
      for(let i=0; i++; i<this._viewitems.length){
         let view=this._viewitems[i];
         if (view.id==id) return i;
      }   
      return -1;
   }
   
   protected removeViewId(id:string):ItmView | null{
      let idx:number;
      idx=this.getViewIndex(id);
      if (idx !== -1) {
         let view=this._viewitems[idx];
         view.parent=view;
         delete this._viewitems[idx];
         return view;
      }      
      return null;
   }
   
   protected removeViews() {
      while (this._viewitems.length > 0) {
         let view:ItmView;
         view=this._viewitems[0];         
         this.removeViewId(view.id);
      }
   }

   /**
    * @param s - debugging string
    * @return - returns string is debugging enabled 
    */
   public drawDebug(s:string):string {
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

   protected drawViewItemsBegin():string {
      let s:string='';
      return s;
   }

   protected drawViewItemsEnd():string {
      let s:string='';
      return s;
   }

   protected drawViewItems():string {
      let s:string='';
      let thisView=this;
      s+=this.drawDebug('drawViewItems');

      s+=this.drawViewItemsBegin();

      this._viewitems.forEach(function(view:ItmView){
         s+=thisView.drawDebug('drawChild id=[{0}]'.format(view.id));
         s+=view.draw();
      });
      
      s+=this.drawViewItemsEnd();

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
      
      s+=this.drawViewItems();

      return s;
   }
   /**
    * draw entire view
    * @param s - draw string stream
    * @return - returns begin string stream 
    */
   public draw():string {
      let s:string='';
      s+=this.drawBegin();
      s+=this.drawBody();
      s+=this.drawEnd();
      return s;
   }

   /**
    * setup All Event Handlers for current and all child views, this function triggered after redraw to DOM
    *
    */
   protected setupEventHandlers() {
      this.setupEventHandler();
      this._viewitems.forEach(function(view:ItmView){
         view.setupEventHandlers();
      });
   }

   /**
    * setup Event Handler for current view, this function triggered after redraw to DOM
    *
    */
   protected setupEventHandler() {
      // initial do nothing
   }

   /**
    * rebuild view, after this redraw may happen
    * @return - true/false if redraw is needed
    */
   protected rebuild():boolean {
      // do nothing
      return true;
   }

   /**
    * redraw entire view, rebuild view before redrawing
    */
   public redraw() {
      if (this.rebuild()) {
         if (this.element) {
            this.element.outerHTML=this.draw();
         }
      }
   }

   protected autoRefresh() {
      this.redraw();
   }
}


   
