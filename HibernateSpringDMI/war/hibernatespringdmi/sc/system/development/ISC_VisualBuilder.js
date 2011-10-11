
/*

  SmartClient Ajax RIA system
  Version SC_SNAPSHOT-2011-08-02/Pro Development Only (2011-08-02)

  Copyright 2000 and beyond Isomorphic Software, Inc. All rights reserved.
  "SmartClient" is a trademark of Isomorphic Software, Inc.

  LICENSE NOTICE
     INSTALLATION OR USE OF THIS SOFTWARE INDICATES YOUR ACCEPTANCE OF
     ISOMORPHIC SOFTWARE LICENSE TERMS. If you have received this file
     without an accompanying Isomorphic Software license file, please
     contact licensing@isomorphic.com for details. Unauthorized copying and
     use of this software is a violation of international copyright law.

  DEVELOPMENT ONLY - DO NOT DEPLOY
     This software is provided for evaluation, training, and development
     purposes only. It may include supplementary components that are not
     licensed for deployment. The separate DEPLOY package for this release
     contains SmartClient components that are licensed for deployment.

  PROPRIETARY & PROTECTED MATERIAL
     This software contains proprietary materials that are protected by
     contract and intellectual property law. You are expressly prohibited
     from attempting to reverse engineer this software or modify this
     software for human readability.

  CONTACT ISOMORPHIC
     For more information regarding license rights and restrictions, or to
     report possible license violations, please contact Isomorphic Software
     by email (licensing@isomorphic.com) or web (www.isomorphic.com).

*/

if(window.isc&&window.isc.module_Core&&!window.isc.module_VisualBuilder){isc.module_VisualBuilder=1;isc._moduleStart=isc._VisualBuilder_start=(isc.timestamp?isc.timestamp():new Date().getTime());if(isc._moduleEnd&&(!isc.Log||(isc.Log && isc.Log.logIsDebugEnabled('loadTime')))){isc._pTM={ message:'VisualBuilder load/parse time: ' + (isc._moduleStart-isc._moduleEnd) + 'ms', category:'loadTime'};
if(isc.Log && isc.Log.logDebug)isc.Log.logDebug(isc._pTM.message,'loadTime')
else if(isc._preLog)isc._preLog[isc._preLog.length]=isc._pTM
else isc._preLog=[isc._pTM]}isc.definingFramework=true;isc.ClassFactory.defineClass("VisualBuilder","VLayout");isc.A=isc.VisualBuilder;isc.A.titleEditEvent="doubleClick";isc.A=isc.VisualBuilder.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.vertical=true;isc.A.sControlIsomorphicDir="http://www.isomorphic.com/isomorphic/";isc.A.sControlSkin="SmartClient";isc.A.workspacePath="[VBWORKSPACE]";isc.A.workspaceURL="workspace/";isc.A.basePathRelWorkspace="..";isc.A.webRootRelWorkspace="../../..";isc.A.helpPaneProperties={headerTitle:"About Visual Builder",contentsURL:"visualBuilderHelp.html"};isc.A.canEditExpressions=true;isc.A.typeCount={};isc.A.dirty=false;isc.A.workspaceDefaults={_constructor:"TLayout",vertical:false,autoDraw:false,backgroundColor:"black"};isc.A.leftStackDefaults={_constructor:"TSectionStack",autoDraw:false,width:280,showResizeBar:true,visibilityMode:"multiple"};isc.A.middleStackDefaults={_constructor:"TSectionStack",autoDraw:false,showResizeBar:true,resizeBarTarget:"next",visibilityMode:"multiple",styleName:"pageBackground"};isc.A.modeSwitcherDefaults={_constructor:"TDynamicForm",autoDraw:false,autoParent:"middleStack",numCols:4,initWidget:function(){this.Super("initWidget",arguments);this.setValue("skin",this.creator.skin)},setSkin:function(_1){this.creator.doAutoSave(this.getID()+".doSetSkin('"+_1+"')")},doSetSkin:function(_1){var _2=isc.clone(isc.params);_2.skin=_1;var _3=location.href;if(_3.contains("?"))_3=_3.substring(0,_3.indexOf("?"));_3+="?";for(var _4 in _2){_3+=encodeURIComponent(_4)+"="+encodeURIComponent(_2[_4])+"&"}
_3=_3.substring(0,_3.length-1);isc.Cookie.set(this.creator.loadAutoSaveCookie,"true");location.replace(_3)},fields:[{name:"skin",editorType:"TSelectItem",width:100,valueMap:{Enterprise:"Enterprise",EnterpriseBlue:"Enterprise Blue",Graphite:"Graphite",Simplicity:"Simplicity",fleet:"Fleet",TreeFrog:"TreeFrog",SilverWave:"SilverWave",BlackOps:"Black Ops",SmartClient:"Stone",Cupertino:"Cupertino",standard:"Basic"},title:"Skin",change:"form.setSkin(value)"},{name:"switcher",showTitle:false,title:"Component mode",valueMap:["Live","Edit"],vertical:false,editorType:"TRadioGroupItem",wrapTitle:false,changed:function(_1,_2,_3){var _4=_3=="Edit";var _5=_1.creator.projectComponents.data;for(var i=0;i<_5.getLength();i++){var _7=_5.get(i);var _8=_7.liveObject;if(_8.setEditMode){_8.setEditMode(_4,_1.creator.projectComponents,_7)}else{_8.editingOn=_4}}
_1.creator.editingOn=_4;isc.EditContext.setEditMode(_4)}}]};isc.A.rightStackDefaults={_constructor:"TSectionStack",autoDraw:false,width:200,visibilityMode:"multiple"};isc.A.canvasItemWrapperConstructor="CanvasItem";isc.A.canvasItemWrapperDefaults={showTitle:false,colSpan:"*",width:"*"};isc.A.simpleTypeNodeConstructor="FormItem";isc.A.simpleTypeNodeDefaults={isGroup:true,cellPadding:5,showComplexFields:false,doNotUseDefaultBinding:true};isc.A.complexTypeNodeConstructor="DynamicForm";isc.A.complexTypeNodeDefaults={isGroup:true,cellPadding:5,showComplexFields:false,doNotUseDefaultBinding:true};isc.A.repeatingComplexTypeNodeDefaults={autoFitData:"vertical",leaveScrollbarGap:false};isc.A.paletteNodeDSDefaults={_constructor:"DataSource",ID:"paletteNode",recordXPath:"/PaletteNodes/PaletteNode",fields:{name:{name:"name",type:"text",length:8,required:true},title:{name:"title",type:"text",title:"Title",length:128,required:true},className:{name:"className",type:"text",title:"Class Name",length:128,required:true},icon:{name:"icon",type:"image",title:"Icon Filename",length:128},iconWidth:{name:"iconWidth",type:"number",title:"Icon Width"},iconHeight:{name:"iconHeight",type:"number",title:"Icon Height"},iconSize:{name:"iconSize",type:"number",title:"Icon Size"},showDropIcon:{name:"showDropIcon",type:"boolean",title:"Show Drop Icon"},defaults:{name:"defaults",type:"Canvas",propertiesOnly:true},children:{name:"children",type:"paletteNode",multiple:true}}};isc.A.libraryComponentsDefaults={_constructor:"TTreePalette",defaultEditContext:"projectComponents",autoShowParents:true,autoDraw:false,cellHeight:22,showRoot:false,showHeader:false,selectionType:Selection.SINGLE,treeFieldTitle:"Form Items",canDragRecordsOut:true,canAcceptDroppedRecords:false,dragDataAction:TreeViewer.COPY,iconSize:16,folderOpenImage:"cubes_blue.gif",folderClosedImage:"cubes_blue.gif",folderDropImage:"cubes_green.gif",fileImage:"cube_blue.gif"};isc.A.dataSourceListDefaults={_constructor:"TListPalette",showHeaderMenuButton:false,autoDraw:false,height:"40%",selectionType:"single",canDragRecordsOut:true,editSelectedDataSource:function(){var _1=this.getSelectedRecord();if(_1)isc.DS.get(_1.ID,this.creator.getID()+".showDSEditor(ds)")},doubleClick:function(){this.editSelectedDataSource()},selectionChanged:function(){this.creator.dsEditButton.setDisabled(this.getSelectedRecord()==null)},fields:[{name:"ID",width:"*"},{name:"type",title:"Type",width:65},{name:"download",showTitle:false,width:22}],formatCellValue:function(_1,_2,_3,_4){var _5=this.getField(_4);if(_5.name=="download"){return this.imgHTML("[SKINIMG]/actions/download.png",null,null,null,null,this.widgetImgDir)}else return _1},cellClick:function(_1,_2,_3){var _4=this.getField(_3);if(_4.name=="download"){isc.DS.get(_1.ID,this.creator.getID()+".downloadDataSource(ds)")}else return this.Super("cellClick",arguments)}};isc.A.dataSourceListToolbarDefaults={_constructor:"TLayout",vertical:false,autoDraw:true,membersMargin:10,height:20};isc.A.dsNewButtonDefaults={_constructor:"TButton",autoDraw:false,title:"New...",width:70,click:"this.creator.showDSWizard()",autoParent:"dataSourceListToolbar"};isc.A.dsEditButtonDefaults={_constructor:"TButton",autoDraw:false,disabled:true,title:"Edit...",width:70,click:"this.creator.dataSourceList.editSelectedDataSource()",autoParent:"dataSourceListToolbar"};isc.A.projectComponentsMenuDefaults={_constructor:"Menu",autoDraw:false,showIcon:false,enableIf:"var selection = target ? target.getSelection() : null, node = selection ? selection[0] : null",data:[{title:"Remove",enableIf:"node != null",click:function(_1){var _2=_1.getSelection();for(var i=0;i<_2.length;i++){var _4=_2[i];_1.destroyComponent(_4)}
_1.data.removeList(_2)}},{title:"Edit",enableIf:"node != null",click:function(_1,_2,_3){var _4=_1.getSelection()[0];_3.creator.editComponent(_4,_3.creator.projectComponents.getLiveObject(_4))}}]};isc.A.projectComponentsDefaults={_constructor:"TEditTree",showHeaderMenuButton:false,autoDraw:false,canSort:false,leaveScrollbarGap:false,nodeClick:function(_1,_2){this.hiliteSelected();this.creator.editComponent(_2,this.getLiveObject(_2))},hiliteSelected:function(){var _1=this.getSelectedRecord(),_2=_1?_1.liveObject:null;if((isc.isA.Canvas(_2)||isc.isA.FormItem(_2))&&_2.isDrawn()&&_2.isVisible()){isc.EditContext.selectCanvasOrFormItem(_2)}},autoShowParents:true,addComponent:function(_1,_2,_3,_4,_5){_1=this.Super("addComponent",arguments);if(!_1)return;if(!_1.dropped||(_1.loadData!=null&&!_1.isLoaded))return _1;var _6=isc.ClassFactory.getClass(_1.type);if(_6!=null&&_6.isA(isc.DataSource)){var _7=_1.liveObject,_8=_7.serverType||_7.type||_7.dataSourceType,_9=_2,_10=_2.liveObject;if((isc.isA.ListGrid(_10)||isc.isA.TileGrid(_10))&&(_8=="sql"||_8=="hibernate"||_7.dataURL!=null||_7.clientOnly||_7.serviceNamespace!=null)&&!_7.noAutoFetch&&_10.autoFetchData!=false)
{_9.initData.autoFetchData=true;if(isc.SForce&&isc.isA.SFDataSource(_7)&&!isc.SForce.sessionId){var _11=this;isc.SForce.ensureLoggedIn(function(){_10.fetchData()},true)}else{_10.fetchData()}}}
var _12=this.getLiveObject(_1);if(!_12.getEditableProperties)return;if(_12.setEditableProperties){_12.setEditableProperties({});if(_12.markForRedraw)_12.markForRedraw();else if(_12.redraw)_12.redraw()}
this.selection.delayCall("selectSingle",[_1]);this.delayCall("hiliteSelected",[true]);this.nodeClick(this,_1);return _1},removeComponent:function(_1,_2,_3,_4,_5){this.Super("removeComponent",[_1,_2,_3,_4,_5],arguments);this.creator.componentRemoved(_1)},removeAll:function(){this.creator.clearComponent();return this.Super("removeAll",arguments)},destroyAll:function(){this.creator.clearComponent();return this.Super("destroyAll",arguments)},folderOpenImage:"cubes_blue.gif",folderClosedImage:"cubes_blue.gif",folderDropImage:"cubes_green.gif",fileImage:"cube_blue.gif",hasComponents:function(){var _1=this.getData();var _2=_1.getLength();return _2>1||(_2==1&&_1.get(0).type!="DataView")},checkDiscardProject:function(_1,_2,_3){var _4=this;isc.confirm("Discard current project?",function(_5){if(_5){_4.destroyAll();isc.Class.fireCallback(_1,_2,_3)}})},loadView:function(_1,_2){var _3=this,_4=_3.creator;if(!_2&&this.hasComponents())
{this.checkDiscardProject(this.getID()+".loadView(screenName,confirmed)","screenName,confirmed",[_1,true]);return}
this.currentScreen=_1;var _5=_4.workspacePath+"/"+_1+".xml";this.loadNodeTreeFromFile(_5,{target:this,methodName:"addNodeTree"})},loadViewFromFile:function(_1){this.currentScreen=_1;this.loadNodeTreeFromFile(_1,{target:this,methodName:"addNodeTree"})},loadViewFromURL:function(_1){var _2=this,_3=_2.creator;this.currentScreen=_1;isc.RPCManager.send(null,function(_4){_2.loadNodeTree(_4,{target:_2,methodName:"addNodeTree"})},{actionURL:_1,useSimpleHttp:true,dataProtocol:"postMessage"})},loadViewFromXML:function(_1,_2){this.currentScreen=_2;this.loadNodeTreeFromXML(_1,{target:this,methodName:"addNodeTree"})},loadViewFromJS:function(_1,_2){this.currentScreen=_2;this.loadNodeTreeFromJS(_1,{target:this,methodName:"addNodeTree"})},loadNodeTreeFromFile:function(_1,_2){var _3=this,_4=_3.creator,_5=_2;_4.currentRepo.loadObject({criteria:{path:_1}},function(_6){_3.loadNodeTreeFromJS(_6,_5)})},loadNodeTreeFromXML:function(_1,_2){var _3=this,_4=_2;isc.DMI.callBuiltin({methodName:"xmlToJS",arguments:[_1],callback:function(_5){_3.loadNodeTree(_5.data,_4)}})},loadNodeTreeFromJS:function(_1,_2){this.loadNodeTree(_1,_2)},loadNodeTree:function(_1,_2){this.logDebug("fileContents: "+_1,"loadProject");this.nodeTreeLoadedCallback=_2;isc.captureInitData=true;isc.Class.globalEvalWithCapture(_1,{target:this,methodName:"nodeTreeLoaded"},null,false)},nodeTreeLoaded:function(_1,_2){this.getCapturedComponents(_1,_2);if(this.nodeTreeLoadedCallback){isc.Class.fireCallback(this.nodeTreeLoadedCallback,["paletteNodes"],[this.capturedComponents],this);this.nodeTreeLoadedCallback=null}
return this.capturedComponents},viewLoaded:function(_1){this.logDebug("fileContents: "+_1,"loadProject");isc.captureInitData=true;isc.Class.globalEvalWithCapture(_1,{target:this,methodName:"addViewToTree"},null,false)},addViewToTree:function(_1,_2){this.getCapturedComponents(_1,_2);this.addNodeTree(this.capturedComponents);this.creator.setIsDirty(false)},getCapturedComponents:function(_1,_2){isc.captureInitData=null;if(_2){isc.warn("The following error occurred during loading of your view<br><br>: "+_2+".<br><br>  The portion of the view that loaded succesfully will be shown.")}
var _3=this.capturedComponents=isc.capturedComponents;isc.capturedComponents=null;var _4=(_3?_3.getProperty("defaults").getProperty("ID"):null);this.logInfo("capturedComponents are: "+_4,"loadProject");var _5;for(var i=0;i<_4.length;i++)window[_4[i]]=_5},addNodeTree:function(_1){this.componentsToCreate=[];this.addComponentCalls=[];this.requiredDataSources=[];for(var i=0;i<_1.length;i++){this.addChildComponent(null,_1[i])}
for(var i=0;i<_1.length;i++){if(!_1[i].hasParent){this.addChildComponent(this.data.getRoot(),_1[i])}}
var _3,_4;for(var i=0;i<this.capturedComponents.length;i++){_3=this.capturedComponents[i];_3.component=this.palette.makeNewComponent(_3)}
for(var i=0;i<this.componentsToCreate.length;i++){_3=this.componentsToCreate[i];if(!_3.component){_3.component=this.palette.makeNewComponent(_3)}}
var _5=-1,_6=this.addComponentCalls,_7=[];isc.$75u=true;while(_6.length>0&&_5!=_6.length){_5=_6.length;var _8=_6.duplicate();for(var i=0;i<_8.length;i++){var _9=_8[i],_4=_9[1],_3=_9[0],_10=_9[2];if(_4.name=="/"){this.addComponent(_3.component,this.data.getRoot());_6.remove(_9);_7.add(_9)}else if(this.data.contains(_4.component)){var _11=_3.component;if(this.data.contains(_11)){_11=isc.addProperties({},_11)}
this.addComponent(_11,_4.component,null,_10);_6.remove(_9);_7.add(_9)}}}
delete isc.$75u;if(this.logIsDebugEnabled("loadProject")){this.logDebug("addComponent() calls during project loading:","loadProject");for(var i=0;i<_7.length;i++){var _9=_7[i],_4=_9[1],_3=_9[0];this.logDebug("addComponent("+this.echoLeaf(_3)+","+this.echoLeaf(_4),"loadProject")}}
if(_6.length>0){this.logWarn("the following components could not be added to the project tree: "+isc.echoAll(_6.getProperty("0")))}},makeDSPaletteNode:function(_1,_2){var _3={ID:_1,className:"DataSource",type:_2||"DataSource",title:_1,icon:"DataSource.png",iconSize:16,loadData:function(_3,_4){isc.DS.get(_3.ID,function(_5){_3.liveObject=_5;_3.initData={_constructor:"DataSource",ID:_5.ID};isc.Class.fireCallback(_4,"",[_3])})}};return _3},palette:isc.HiddenPalette.create(),addChildComponent:function(_1,_2,_3){var _4=_2.className;var _5=this.logIsInfoEnabled("loadProject"),_6=this.logIsDebugEnabled("loadProject");if(_5){this.logInfo("inspecting defaults of component: "+this.echoLeaf(_2)+" of type: "+_4,"loadProject")}
var _7=_2.defaults,_8=this,_9=_8.creator;var _10=[],_11=[],_12=isc.DS.get(_4);for(var _13 in _7){var _14=_7[_13];if(!isc.isAn.Array(_14)){_11[0]=_14;_14=_11}else if(_6){this.logDebug("checking Array property: "+_13+", value: "+this.echoLeaf(_14)+(_17?" with schema: "+_17:""),"loadProject")}
var _15=_12?_12.getField(_13):null,_16=_15?_15.type:null,_17=isc.DS.get(_16),_18=false;for(var i=0;i<_14.length;i++){var _20=_14[i];if(_6){this.logDebug("checking property: "+_13+", value: "+this.echoLeaf(_20),"loadProject")}
if(this.capturedComponents.contains(_20)){if(_5){this.logInfo("found capturedComponent: "+this.echoLeaf(_20)+" under property: "+_13+" of component: "+this.echoLeaf(_2),"loadProject")}
_10.add([_13,_20]);_18=true;continue}
if(_20==null){this.logInfo("null property: "+_13+" on component: "+this.echoLeaf(_2))}
var _21=(_20?_20._constructor:null)||_16,_22=isc.ClassFactory.getClass(_21);if(_17&&((_22&&_22.isA(isc.Canvas))||(_22&&_22.isA(isc.DataSource))||(_22&&_22.isA(isc.FormItem))||(this.creator.libraryComponents&&this.creator.libraryComponents.data.find("className",_21)!=null)))
{if(_5){this.logInfo("found palettized component: "+this.echoLeaf(_20)+" of type: "+_21+" under property: "+_13+" of component: "+this.echoLeaf(_2),"loadProject")}
if(isc.isA.String(_20)){var _23=this.capturedComponents.find("ID",_20);if(_23==null){if(isc.DataSource.isA(_16)&&_9.dataSourceList){var _24=_9.dataSourceList.data.find("ID",_20);if(_24){_23=this.makeDSPaletteNode(_20)}}
if(_23==null)continue}
_10.add([_13,_23])}else{var _25=_20;_10.add([_13,{ID:_25.ID,name:_25.name,className:_21,defaults:_25}])}
_18=true}}
if(_18)delete _7[_13]}
var _26=_9.libraryComponents?_9.libraryComponents.data.find("className",_4):null||_9.dataSourceList?_9.dataSourceList.data.find("className",_4):null;if(_26){_2.icon=_2.icon||_26.icon;_2.iconSize=_2.iconSize||_26.iconSize;_2.showDropIcon=_2.showDropIcon||_26.showDropIcon}
this.componentsToCreate.add(_2);if(_1!=null){_2.hasParent=true;this.addComponentCalls.add([_2,_1,_3])}
if(_10.length>0){for(var i=0;i<_10.length;i++){this.addChildComponent(_2,_10[i][1],_10[i][0])}}}};isc.A.codePreviewDefaults={_constructor:"DynamicForm",autoDraw:false,overflow:"auto",browserSpellCheck:false,items:[{name:"codeField",editorType:"TTextAreaItem",showTitle:false,colSpan:"*",width:"*",height:"*"}],saveCode:function(_1,_2){this.creator.updateSource(true);var _3=this.getValue("codeField");if(!_3)return;this.creator.saveSourceToRepo(null,null,_2)},saveToSalesForce:function(){if(!this.$48y){this.$48y=true;var _1=this;isc.say("This feature will save your application to your SalesForce account as an 'SControl'"+", which can be shown in a Custom Tab via the customization interfaces within SalesForce."+"<P>In order to be successfully deployed to SalesForce, an application must consist "+" strictly of SalesForce DataSources, 'clientOnly' DataSources and XJSONDataSources."+"<P>The deployed application does not require Java or other external server functionality, "+"instead accessing SalesForce APIs via SOAP, and loading the SmartClient framework itself "+"as static web assets (from SmartClient.com by default - see the "+"visualBuilder/index.jsp 'builderConfig' block to customize).",function(){_1.saveSControl()})}else{this.saveSControl()}},saveSControl:function(_1){if(!_1){var _2=this;isc.SForce.ensureLoggedIn(function(){_2.saveSControl(true)},true);return}
var _3=this.builder.projectComponents.serializeComponents(true);var _4=this.creator;isc.xml.toJSCode(_3,function(_6,_7){isc.askForValue("Name your SControl :",function(_8){if(_8==null)return;var _5=isc.WebService.get("urn:partner.soap.sforce.com");_5.controlIsomorphicDir=_4.sControlIsomorphicDir;_5.controlSkin=_4.sControlSkin;_5.deploySControl(_8,_7)},{defaultValue:"ISC"})})}};isc.A.jsCodePreviewDefaults={_constructor:"DynamicForm",autoDraw:false,overflow:"auto",browserSpellCheck:false,items:[{name:"codeField",editorType:"TTextAreaItem",showTitle:false,colSpan:"*",width:"*",height:"*"}],setContents:function(_1){this.setValue("codeField",_1)}};isc.A.codePaneDefaults={_constructor:"TTabSet",autoDraw:false,height:"35%",tabSelected:function(_1){this.creator.updateSource()}};isc.A.componentAttributeEditorDefaults={_constructor:"TComponentEditor",autoDraw:false,autoFocus:false,overflow:"auto",alwaysShowVScrollbar:true,showAttributes:true,showMethods:false,backgroundColor:"black",basicMode:true};isc.A.componentMethodEditorDefaults={_constructor:"TComponentEditor",sortFields:true,autoDraw:false,autoFocus:false,overflow:"auto",alwaysShowVScrollbar:true,showAttributes:false,showMethods:true,backgroundColor:"black",basicMode:true};isc.A.editorPaneDefaults={_constructor:"TTabSet",autoDraw:false,paneContainerProperties:{customEdges:["T"]},tabBarProperties:{baseLineCapSize:0},tabBarControls:[isc.Img.create({src:"[SKIN]/../../ToolSkin/images/actions/remove.png",autoDraw:false,width:16,height:16,layoutAlign:"center",cursor:"pointer",canHover:true,showHover:true,prompt:"Delete current component",click:function(){var _1=isc.SelectionOutline.getSelectedObject();if(_1&&_1.editContext){_1.editContext.destroyComponent(_1.editNode);isc.SelectionOutline.deselect();isc.EditContext.hideDragHandle()}}}),isc.LayoutSpacer.create({width:10}),"tabScroller","tabPicker"],tabDeselected:function(_1,_2,_3,_4){this.$710=_2.ID},tabSelected:function(_1,_2,_3,_4){if(!this.$710)return;var _5=this.creator.getCurrentComponent(),_6=_5?_5[this.$710+"BasicMode"]:null,_7=_5?_5[_2.ID+"BasicMode"]:null;if(_6!=_7){this.creator.editComponent(_5,_5.liveObject)}else{this.creator.applyBasicModeSettings()}},selectedEditorName:function(){var _1=this.getTabObject(this.selectedTab);if(_1&&_1.title)return _1.title.toLowerCase();return null},PROPERTIES:"properties",EVENTS:"events"};isc.A.applyButtonDefaults={_constructor:"TButton",resizeable:false,autoDraw:false,title:"Apply",click:"this.creator.saveComponentEditors();",disabled:true};isc.A.advancedButtonDefaults={_constructor:"TButton",resizeable:false,autoDraw:false,click:function(){var _1=this.creator.getCurrentComponent();this.creator.toggleBasicMode(_1);this.creator.editComponent(_1,_1.liveObject)},disabled:true};isc.A.helpPaneDefaults={_constructor:"THTMLFlow",padding:10,autoDraw:false,overflow:"auto"};isc.A.fileMenuButtonDefaults={_constructor:"TMenuButton",autoDraw:false,title:"File",height:16,layoutAlign:"center",extraSpace:4};isc.A.fileMenuDefaults={_constructor:"TMenu",title:"File",width:100,data:[{title:"New",click:function(_1,_2,_3){if(_3.creator.projectComponents.data.getRoot().children.length>0){isc.confirm("Discard current project?",function(_4){if(_4)_3.creator.newProject()})}else{_3.creator.newProject()}}},{title:"Load View...",click:function(_1,_2,_3){_3.creator.showRepoLoadUI()}},{title:"Import..",click:function(_1,_2,_3){var _4="../../isomorphic/system/reference/SmartClient_Reference.html#group..visualBuilder";var _5=this;isc.ask("This feature allows you to import externally edited XML or JS code."+" The Visual Builder cannot fully capture all externally edited files."+" For more information, see the <a target=_blank href='"+_4+"'>Visual Builder Docs</a><br><br>Proceed with Import?",function(_6){if(_6){_5.showImportDialog(_3)}})},showImportDialog:function(_1){if(!this.$482){this.$482=isc.LoadFileDialog.create({actionStripControls:["spacer:10","pathLabel","previousFolderButton","spacer:10","upOneLevelButton","spacer:10","refreshButton","spacer:2"],directoryListingProperties:{canEdit:false},title:"Import File",initialDir:"/",rootDir:"/",loadFile:function(_3){if(_3.match(/\.(xml|js)$/i)==null){isc.say("Only JS or XML files may be imported (must end with .js or .xml");return}
var _2=this;isc.confirm("Discard current project?",function(_4){if(_4){_1.creator.projectComponents.destroyAll();_2.importFile(_3)}})},importFile:function(_3){var _2=this;isc.DMI.callBuiltin({methodName:"loadFile",arguments:[this.currentDir+"/"+_3],callback:function(_4){if(_3.match(/\.xml$/i)!=null){isc.DMI.callBuiltin({methodName:"xmlToJS",arguments:_4.data,callback:function(_4){_2.fileLoaded(_4.data)}})}else{_2.fileLoaded(_4.data)}}})},fileLoaded:function(_3){_1.creator.projectComponents.loadNodeTreeFromJS(_3,{target:_1.creator.projectComponents,methodName:"addNodeTree"});this.hide()}})}else{this.$482.directoryListing.data.invalidateCache()}
this.$482.show()}},{title:"Import from Balsamiq...",click:function(_1,_2,_3){isc.BMMLImportDialog.create({showOutputField:false,showSkinSelector:false,height:240,submit:function(_4,_5,_6,_7,_8,_9){isc.confirm("Discard current project?",function(_10){if(_10){_3.creator.projectComponents.destroyAll();_3.creator.loadBMMLMockup(_4,_7,_8,_9)}})}})}},{title:"Save",enableIf:function(_1,_2,_3){var _4=_2.creator.getCurrentScreenName();return _4&&_4!=""},click:function(_1,_2,_3){_3.creator.saveSourceToRepo()}},{title:"Save As...",click:function(_1,_2,_3){_3.creator.saveSourceToRepo(null,{saveAs:true})}},{title:"Save To...",name:"saveTo",submenu:[],enableIf:"item.submenu.length > 0",click:function(_1,_2,_3){_3.creator.saveSourceToRepo(_2.name)}},{title:"Save As SControl ...",click:function(_1,_2,_3){_3.creator.codePreview.saveToSalesForce()}},{title:"Test",click:function(_1,_2,_3){var _4="isc_test",_5=_3.creator,_6=_5.getUpdatedSource(),_7=isc.addProperties({},_3.creator.viewContext,{screenName:_4,fileName:_4,caller:_5});_5.currentRepo.showSaveUI(_6,_7,"window.open('"+_3.creator.workspaceURL+_4+".jsp')")}}]};isc.A.mainDefaults={_constructor:"TTabSet",width:"100%",height:"100%",backgroundColor:"black",tabSelected:function(_1,_2,_3,_4){if(_1==1){isc.SelectionOutline.hideOutline();isc.EditContext.hideDragHandle();this.creator.updateSource()}else if(_1==0){isc.SelectionOutline.showOutline();isc.EditContext.showDragHandle()}}};isc.A.operationsPaletteDefaults={_constructor:isc.TTreePalette,getIcon:function(_1){var _2=this.creator.getServiceElementIcon(_1);if(_2)return _2;return this.Super("getIcon",arguments)}};isc.A.schemaViewerDefaults={_constructor:isc.TTreeGrid,autoDraw:false,recordDoubleClick:"this.creator.operationSelected()",fields:[{name:"name",title:"Service/PortType/Operation",treeField:true},{name:"type",title:"Type"}],getIcon:function(_1){var _2=this.creator.getServiceElementIcon(_1);if(_2)return _2;return this.Super("getIcon",arguments)}};isc.A.schemaViewerSelectButtonDefaults={_constructor:isc.TButton,autoDraw:false,title:"Select",click:"this.creator.operationSelected()"};isc.A.commonEditorFunctions={itemChange:function(_1,_2,_3){this.logInfo("itemChange on: "+_1+", value now: "+_2,"editing");if(_1.name=="classSwitcher"){this.builder.switchComponentClass(_2);return true}
if(this.immediateSave||isc.isA.ExpressionItem(_1)||isc.isA.ActionMenuItem(_1)||isc.isA.CheckboxItem(_1))
{this.saveItem(_1,_2);this.builder.updateSource();return true}else{_1.$48z=true;return true}},itemKeyPress:function(_1,_2){if(_2=="Enter")this.save()},saveItem:function(_1,_2){return this.saveItems([_1],[_2])},save:function(){if(!this.validate())return;var _1=[],_2=[];for(var i=0;i<this.items.length;i++){var _4=this.items[i];if(_4.$48z){_1.add(_4);_2.add(this.getValue(_4.name));_4.$48z=false}}
var _5=this.saveItems(_1,_2);this.builder.updateSource();return _5},saveItems:function(_1,_2){if(!_1)return true;if(this.builder.formLoading!=true)this.builder.setIsDirty(true);var _3=this.currentComponent,_4={};for(var i=0;i<_1.length;i++){var _6=_1[i],_7=_2[i];_4[_6.name]=_7}
return this.saveProperties(_4,_3)},saveProperties:function(_1,_2){var _3=_2.liveObject||this.builder.projectComponents.getLiveObject(_2);this.logInfo("applying changed properties: "+this.echo(_1)+" to: "+this.echoLeaf(_3),"editing");this.builder.projectComponents.setNodeProperties(_2,_1);var _4=this.builder.getCurrentlyVisibleEditor(),_5=_2[_4.ID+"BasicMode"];if(_5==false){_2.$711=true}
return true}};isc.A.autoSaveInterval=30000;isc.A.autoSaveCheckerInterval=5000;isc.A.loadAutoSaveCookie="isc_load_autoSave";isc.A.autoSaveFilename="AutoSave.xml";isc.A.librarySearchDefaults={_constructor:"GridSearch",searchProperty:"title",hint:"Find Component..."};isc.A.projectComponentsSearchDefaults={_constructor:"GridSearch",searchProperty:"title",searchProperty:"name",hint:"Find Live Component By ID..."};isc.A.dataSourceListSearchDefaults={_constructor:"GridSearch",searchProperty:"title",hint:"Find DataSource..."};isc.A.downloadDataSourceDialogTitle="Download DataSource [\${dsID}]";isc.A.downloadDataSourceDialogPrompt="Choose the format in which to export this DataSource "+"definition.  If you're making use of server capabilities, you should export to XML.";isc.A.downloadDataSourceDialogButtonTitle="Download";isc.B.push(isc.A.isDirty=function isc_VisualBuilder_isDirty(){return this.dirty}
,isc.A.setIsDirty=function isc_VisualBuilder_setIsDirty(_1){this.dirty=_1}
,isc.A.loadBMMLMockup=function isc_VisualBuilder_loadBMMLMockup(_1,_2,_3,_4){var _5=this;isc.DMI.callBuiltin({methodName:"loadFile",arguments:[_1],callback:function(_7){var _6=isc.BMMLImporter.create({dropMarkup:_2==null?false:_2,trimSpace:_3==null?false:_3,fillSpace:_4==null?false:_4});_6.bmmlToXml(_7.data,function(_8){isc.DMI.callBuiltin({methodName:"xmlToJS",arguments:_8,callback:function(_7){_5.projectComponents.loadNodeTreeFromJS(_7.data,{target:_5.projectComponents,methodName:"addNodeTree"})}})})}})}
,isc.A.getServiceElementIcon=function isc_VisualBuilder_getServiceElementIcon(_1){var _2=_1.type;if(_2=="service"||_2=="categoryProject")return"service.png";else if(_2=="portType")return"portType.png";else if(_2=="operation")return"operation.png";else if(_2=="message_in")return"email_in.png";else if(_2=="message_out")return"email_out.png";else if(_2=="simpleType")return"page_single.png";else if(_2=="complexType")return"page_multiple.png";return null}
,isc.A.keyPress=function isc_VisualBuilder_keyPress(){if(isc.EH.getKey()=="Delete"){if(!this.editingOn)return
var _1=isc.SelectionOutline.getSelectedObject();if(_1&&_1.editContext){_1.editContext.destroyComponent(_1.editNode);isc.SelectionOutline.deselect();isc.EditContext.hideDragHandle();return false}}}
,isc.A.initWidget=function isc_VisualBuilder_initWidget(){this.Super('initWidget',arguments);isc.designTime=true;isc.Page.setEvent("mouseDown",function(){var _1=isc.EditContext.titleEditor;if(_1){var x=isc.EH.getX(),y=isc.EH.getY();var _4=_1.getPageRect();if(x>=_4[0]&&x<=_4[0]+_4[2]&&y>=_4[1]&&y<=_4[1]+_4[3])
{}else{_1.blur(_1,_1.getItem("title"))}}});if(this.defaultApplicationMode){this.editingOn=this.defaultApplicationMode.toLowerCase()=="edit"}else{this.editingOn=false}
this.paletteNodeDS=this.createAutoChild("paletteNodeDS");this.buildLibraryTree();if(this.showDataSourceList!=false){this.dsRepo=isc.DSRepo.create({});this.dsRepo.loadObjects(null,this.getID()+".addDataSources(objects, context)")}
if(!this.rootComponent){this.rootComponent={_constructor:"Canvas",autoDraw:true}}
this.rootLiveObject=isc.ClassFactory.getClass(this.rootComponent._constructor).create(this.rootComponent,{autoDraw:false,editorRoot:true,width:"100%",height:"50%"})
this.previewArea=this.rootLiveObject;var _5=this;this.globalDependencies=isc.DataSource.create({dataURL:"globalDependencies.xml",recordXPath:"//dependency",fields:[{name:"type"}],loadDependencies:function(_8){this.deps=_8;for(var i=0;i<_8.length;i++){var _7=_8[i];if(_7.type=="js"||_7.type=="css"){if(_7.url.startsWith("/")){isc.FileLoader.loadFile("../.."+_7.url)}else{isc.FileLoader.loadFile(_7.url)}}else if(_7.type=="schema"){isc.DataSource.get(_7.id,function(){})}else if(_7.type=="ui"){}}}});this.globalDependencies.fetchData(null,this.getID()+".globalDependencies.loadDependencies(data)");this.addChildren()}
,isc.A.initComplete=function isc_VisualBuilder_initComplete(){if(isc.Cookie.get(this.loadAutoSaveCookie)=="true"){isc.Cookie.clear(this.loadAutoSaveCookie);this.loadAutoSave()}
if(this.autoSave)this.startAutoSaveChecker()}
,isc.A.loadAutoSave=function isc_VisualBuilder_loadAutoSave(){this.projectComponents.destroyAll();this.currentRepo.loadObject({fileName:this.autoSaveFilename,screenName:this.autoSaveFilename,criteria:{path:this.workspacePath+"/"+this.autoSaveFilename}},this.getID()+".loadRepoObjectReply(contents, context)")}
,isc.A.startAutoSaveChecker=function isc_VisualBuilder_startAutoSaveChecker(){this.renewAutoSaveCheckerTimer()}
,isc.A.renewAutoSaveCheckerTimer=function isc_VisualBuilder_renewAutoSaveCheckerTimer(){isc.Timer.setTimeout(this.getID()+".autoSaveCheckerTimerExpired()",this.autoSaveCheckerInterval)}
,isc.A.autoSaveCheckerTimerExpired=function isc_VisualBuilder_autoSaveCheckerTimerExpired(){this.checkAutoSave()}
,isc.A.checkAutoSave=function isc_VisualBuilder_checkAutoSave(){if(this.projectComponents.hasComponents()){this.doAutoSave();this.startAutoSave()}else{this.renewAutoSaveCheckerTimer()}}
,isc.A.startAutoSave=function isc_VisualBuilder_startAutoSave(){this.renewAutoSaveTimer()}
,isc.A.renewAutoSaveTimer=function isc_VisualBuilder_renewAutoSaveTimer(){this.$841=isc.Timer.setTimeout(this.getID()+".autoSaveTimerExpired()",this.autoSaveInterval)}
,isc.A.cancelAutoSaveTimer=function isc_VisualBuilder_cancelAutoSaveTimer(){if(this.$841!=null){isc.Timer.clearTimeout(this.$841);return true}
return false}
,isc.A.autoSaveTimerExpired=function isc_VisualBuilder_autoSaveTimerExpired(){this.doAutoSave();this.renewAutoSaveTimer()}
,isc.A.doAutoSave=function isc_VisualBuilder_doAutoSave(_1){var _2=this.getUpdatedSource();if(this.currentRepo.isActive()){this.logWarn("autoSave suppressed - repo dialog visible");return}
var _3=isc.addProperties({},this.viewContext,{caller:this,suppressPrompt:true,fileName:this.autoSaveFilename});this.currentRepo.saveObject(_2,_3,_1)}
,isc.A.hide=function isc_VisualBuilder_hide(){isc.SelectionOutline.deselect();this.Super("hide",arguments)}
,isc.A.clear=function isc_VisualBuilder_clear(){isc.SelectionOutline.deselect();this.Super("clear",arguments)}
,isc.A.addChildren=function isc_VisualBuilder_addChildren(){if(this.showBuilderOnly)this.showCodePane=false;this.projectComponentsMenu=this.createAutoChild("projectComponentsMenu");this.addAutoChild("libraryComponents",{data:this.libraryTree});this.addAutoChild("librarySearch",{grid:this.libraryComponents});this.addAutoChild("projectComponents",{contextMenu:this.projectComponentsMenu,rootComponent:this.rootComponent,rootLiveObject:this.rootLiveObject});this.projectTree=this.projectComponents.data;this.projectTree.observe(this.projectTree,"dataChanged",this.getID()+".updateSource()");if(this.showCodePane!=false){this.addAutoChild("codePane");this.addAutoChildren(["codePreview","jsCodePreview"]);if(this.showCodePreview!=false)
this.codePane.addTab({title:"XML Code",pane:this.codePreview,width:150,click:this.getID()+".updateSource();"});if(this.showJsCodePreview!=false)
this.codePane.addTab({title:"JS Code",pane:this.jsCodePreview,width:150,click:this.getID()+".updateSource();"})}
this.addAutoChild("componentAttributeEditor",isc.addProperties(this.commonEditorFunctions,{builder:this}));this.addAutoChild("componentMethodEditor",isc.addProperties(this.commonEditorFunctions,{canEditExpressions:this.canEditExpressions,builder:this}));this.addAutoChild("editorPane");if(this.showComponentAttributeEditor!=false)
this.editorPane.addTab({title:"Properties",pane:this.componentAttributeEditor});if(this.showComponentMethodEditor!=false)
this.editorPane.addTab({title:"Events",pane:this.componentMethodEditor});this.applyButton=this.createAutoChild("applyButton");if(this.showHelpPane!=false){this.helpPane=this.createAutoChild("helpPane",{contentsURL:this.helpPaneProperties.contentsURL})}
if(this.showLeftStack!=false){this.addAutoChild("leftStack");if(this.showEditorPane!=false){this.editorPaneButtonBar=isc.HStack.create({membersMargin:10,height:this.applyButton.height,members:[this.applyButton]});if(this.showAdvancedButton!=false){this.advancedButton=this.createAutoChild("advancedButton");this.advancedButton.setTitle(this.componentAttributeEditor.basicMode?this.componentAttributeEditor.moreTitle:this.componentAttributeEditor.lessTitle);this.editorPaneButtonBar.addMember(this.advancedButton)}
this.leftStack.addSection({title:"Component Properties",ID:"componentProperties",autoShow:true,items:[this.editorPane,this.editorPaneButtonBar]})}
if(this.showHelpPane!=false){this.leftStack.addSection({title:this.helpPaneProperties.headerTitle,autoShow:false,items:[this.helpPane]})}}
this.showMiddleStack=(this.showPreviewArea!=false||this.showProjectComponents!=false);var _1;if(this.showModeSwitcher!=false){var _2=this.createAutoChild("modeSwitcher");_2.getField("switcher").setValue(this.editingOn?"Edit":"Live");_1=[_2]}else{_1=[]}
if(this.showMiddleStack!=false){this.addAutoChild("middleStack");if(this.showPreviewArea!=false){this.middleStack.addSection({title:"Application",autoShow:true,ID:"applicationSection",items:[this.previewArea],controls:_1})}
if(this.showProjectComponents!=false){this.projectComponentsSearch=this.createAutoChild("projectComponentsSearch",{grid:this.projectComponents});this.middleStack.addSection({height:24,title:"Component Tree",autoShow:true,items:[this.projectComponents],controls:[this.projectComponentsSearch]})}}
if(this.collapseComponentTree==true)this.middleStack.collapseSection(1);this.showRightStack=(this.showLibraryComponents!=false||this.showDataSourceList!=false);if(this.showRightStack!=false){this.addAutoChild("rightStack");if(this.showLibraryComponents!=false){this.rightStack.addSection({title:"Component Library",autoShow:true,items:[this.librarySearch,this.libraryComponents]})}
if(this.showDataSourceList!=false){this.addAutoChildren(["dataSourceList","dataSourceListToolbar","dsNewButton","dsEditButton"]);this.dataSourceListSearch=this.createAutoChild("dataSourceListSearch",{grid:this.dataSourceList});this.rightStack.addSection({title:"DataSources",autoShow:true,items:[this.dataSourceListSearch,this.dataSourceList,this.dataSourceListToolbar]})}}
this.addAutoChild("workspace");if(this.showLeftStack!=false)this.workspace.addMember(this.leftStack);if(this.showMiddleStack!=false)this.workspace.addMember(this.middleStack);if(this.showRightStack!=false)this.workspace.addMember(this.rightStack);if(this.showCodePane==false)this.showFileMenu=false;if(this.showFileMenu!=false){this.fileMenu=this.createAutoChild("fileMenu");this.fileMenuButton=this.createAutoChild("fileMenuButton",{menu:this.fileMenu})}
if(this.showCodePane!=false){this.addAutoChild("main",isc.addProperties(this.showFileMenu!=false?{tabBarControls:[this.fileMenuButton]}:{},{tabs:[{title:"Build",pane:this.workspace}]}));this.main.addTab({title:"Code",ID:"generatedCodeTab",pane:this.codePane})}else{}
this.initializeRepos();if(this.loadFile=="null")this.loadFile=null;if(this.saveURL=="null")this.saveURL=null}
,isc.A.updateApplicationTitle=function isc_VisualBuilder_updateApplicationTitle(){if(!this.middleStack)return;var _1=this.getCurrentScreenName();if(_1==null||_1==""||this.autoSaveFilename.startsWith(_1))_1="Application";this.middleStack.setSectionTitle("applicationSection",_1)}
,isc.A.initializeRepos=function isc_VisualBuilder_initializeRepos(){this.repos=isc.DataSource.create({dataURL:"viewRepos.xml",recordXPath:"//Repo",fields:[{name:"name"},{name:"title"},{name:"className"},{name:"isDefault"}]});this.repos.fetchData(null,this.getID()+".reposLoaded(data)")}
,isc.A.reposLoaded=function isc_VisualBuilder_reposLoaded(_1){var _2=this.registeredRepos=_1,_3=null,_4=this;if(this.fileMenu!=null)_3=this.fileMenu.getItems().find("name","saveTo");this.loadedRepos=[];_2.setProperty("menu",_3?_3.menu:this.fileMenu);_2.setProperty("click",function(_7,_6,_8){_4.saveSourceToRepo(_6.className)});for(var i=0;i<_2.length;i++){var _6=_2.get(i);if(_6.isDefault==true||_6.isDefault=="true"){this.loadRepo(_6.className,true);break}}
if(this.registeredRepos&&this.registeredRepos.length>1){_3.submenu.addList(this.registeredRepos)}else if(this.fileMenu!=null&&_3!=null){this.fileMenu.removeItem(_3)}
if(this.loadFile&&this.loadFile.length>0)
this.projectComponents.loadView(this.loadFile);else this.newProject();this.initComplete()}
,isc.A.loadRepo=function isc_VisualBuilder_loadRepo(_1,_2){var _3=this.registeredRepos,_4=this.loadedRepos,_5=_4.find("className",_1);if(!_5){_5=isc.ClassFactory.newInstance(_1);this.loadedRepos.add(_5)}else
if(isc.isAn.Array(_5))_5=_5[0];this.currentRepo=_5;if(_2==true)this.defaultRepo=this.currentRepo;return this.currentRepo}
,isc.A.showRepoLoadUI=function isc_VisualBuilder_showRepoLoadUI(){if(!this.currentRepo)return;if(this.projectComponents.hasComponents()){this.projectComponents.checkDiscardProject(this.getID()+".showRepoLoadUI()");return}
var _1={target:this,methodName:"loadRepoObjectReply"};this.currentRepo.showLoadUI({caller:this},_1)}
,isc.A.loadRepoObjectReply=function isc_VisualBuilder_loadRepoObjectReply(_1,_2){this.viewContext={};if(_2)this.viewContext={screenName:_2.screenName,fileName:_2.fileName};this.updateApplicationTitle();this.projectComponents.destroyAll();if(this.currentRepo.objectFormat=="xml"){this.projectComponents.loadViewFromXML(_1)}else{this.projectComponents.loadViewFromJS(_1)}}
);isc.evalBoundary;isc.B.push(isc.A.showRepoSaveUI=function isc_VisualBuilder_showRepoSaveUI(){if(!this.currentRepo)return;var _1={target:this,methodName:"saveRepoObjectReply"},_2=this.getUpdatedSource();if(this.currentRepo.objectFormat=="js"){this.getUpdatedJSSource(this.getID()+"getJSSourceForSave(data)")}else{this.currentRepo.showSaveUI(_2,isc.addProperties({},this.viewContext,{caller:this}),_1)}}
,isc.A.getJSSourceForSave=function isc_VisualBuilder_getJSSourceForSave(_1){var _2={target:this,methodName:"saveRepoObjectReply"},_3=_1;this.currentRepo.showSaveUI(_3,isc.addProperties({},this.viewContext,{caller:this}),_2)}
,isc.A.saveRepoObjectReply=function isc_VisualBuilder_saveRepoObjectReply(_1,_2){this.viewContext={screenName:""};if(_2)this.viewContext={screenName:_2.screenName,fileName:_2.fileName};this.projectComponents.currentScreen=this.viewContext.screenName;this.setIsDirty(false);this.updateApplicationTitle()}
,isc.A.getCurrentScreenName=function isc_VisualBuilder_getCurrentScreenName(){if(this.viewContext)return this.viewContext.screenName;return this.projectComponents.currentScreen||""}
,isc.A.editComponent=function isc_VisualBuilder_editComponent(_1,_2){if(isc.isA.DataSource(_2))return;this.setBasicMode(_1);if(this.showComponentAttributeEditor!=false){this.componentAttributeEditor.editComponent(_1,_2)}
if(this.showComponentMethodEditor!=false)
this.componentMethodEditor.editComponent(_1,_2);if(this.showComponentAttributeEditor!=false||this.showComponentMethodEditor!=false){this.applyBasicModeSettings(_1)}
if(isc.Browser.isIE&&this.editorPane.paneContainer&&this.editorPane.paneContainer.isVisible())
{this.editorPane.paneContainer.hide();this.editorPane.paneContainer.show()}
if(this.leftStack){var _3=_2;if(!_3._constructor)_3=_1;this.leftStack.setSectionTitle("componentProperties",isc.DS.getAutoId(_3)+" Properties")}
this.setComponentList()}
,isc.A.setBasicMode=function isc_VisualBuilder_setBasicMode(_1){if(!_1)return;var _2=this.getCurrentlyVisibleEditor(),_3=_2.ID+"BasicMode";if(_1[_3]==null)_1[_3]=_2.basicMode;_2.$694=_1[_3]}
,isc.A.toggleBasicMode=function isc_VisualBuilder_toggleBasicMode(_1){if(!_1)return;var _2=this.getCurrentlyVisibleEditor();_2.$694=_2.$694==null?!_2.basicMode:!_2.$694;_1[_2.ID+"BasicMode"]=_2.$694}
,isc.A.applyBasicModeSettings=function isc_VisualBuilder_applyBasicModeSettings(_1){if(!_1)return;var _2=this.getCurrentlyVisibleEditor();this.setComponentEditorButtonState(_1);this.setClassSwitcherState(_1)}
,isc.A.setComponentEditorButtonState=function isc_VisualBuilder_setComponentEditorButtonState(_1){if(!_1)return;if(this.showAdvancedButton!=false){var _2=this.getCurrentlyVisibleEditor(),_3=_1[_2.ID+"BasicMode"];if(_3){this.advancedButton.setTitle(_2.moreTitle)}else{this.advancedButton.setTitle(_2.lessTitle)}
this.advancedButton.setDisabled(false)}
this.applyButton.setDisabled(false)}
,isc.A.setClassSwitcherState=function isc_VisualBuilder_setClassSwitcherState(_1){if(this.getCurrentlyVisibleEditor()!=this.componentAttributeEditor)return;if(!this.componentAttributeEditor.canSwitchClass)return;if(!this.componentAttributeEditor.getField("classSwitcher"))return;if(!this.componentAttributeEditor.$694||_1.$711){this.componentAttributeEditor.getField("classSwitcher").setDisabled(true)}else{this.componentAttributeEditor.getField("classSwitcher").setDisabled(false)}}
,isc.A.getCurrentlyVisibleEditor=function isc_VisualBuilder_getCurrentlyVisibleEditor(){if(this.editorPane.selectedEditorName()==this.editorPane.PROPERTIES){return this.componentAttributeEditor}
return this.componentMethodEditor}
,isc.A.saveComponentEditors=function isc_VisualBuilder_saveComponentEditors(){if(this.componentMethodEditor)this.componentMethodEditor.save();if(this.componentAttributeEditor)this.componentAttributeEditor.save()}
,isc.A.getCurrentComponent=function isc_VisualBuilder_getCurrentComponent(){return this.componentAttributeEditor?this.componentAttributeEditor.currentComponent:this.componentMethodEditor?this.componentMethodEditor.currentComponent:null}
,isc.A.setComponentList=function isc_VisualBuilder_setComponentList(){var _1=this.projectComponents,_2=_1.data.getDescendants(_1.data.getRoot());if(this.componentMethodEditor)this.componentMethodEditor.allComponents=_2;if(this.componentAttributeEditor)this.componentAttributeEditor.allComponents=_2}
,isc.A.componentAdded=function isc_VisualBuilder_componentAdded(){this.setComponentList();if(this.formLoading!=true)this.setIsDirty(true)}
,isc.A.componentRemoved=function isc_VisualBuilder_componentRemoved(_1){var _2=this.getCurrentComponent();if(_2==_1)this.clearComponent();this.setComponentList();if(this.formLoading!=true)this.setIsDirty(true)}
,isc.A.clearComponent=function isc_VisualBuilder_clearComponent(){if(this.componentAttributeEditor)this.componentAttributeEditor.clearComponent();if(this.componentMethodEditor)this.componentMethodEditor.clearComponent();if(this.leftStack){this.leftStack.setSectionTitle("componentProperties","Component Properties");if(this.applyButton)this.applyButton.setDisabled(true);if(this.advancedButton)this.advancedButton.setDisabled(true)}}
,isc.A.switchComponentClass=function isc_VisualBuilder_switchComponentClass(_1){var _2=this.getCurrentComponent(),_3=this.projectComponents.data,_4=_3.getParent(_2),_5=_3.getChildren(_4).indexOf(_2);var _6=this.projectComponents.makeEditNode({type:_1,defaults:_2.initData});this.projectComponents.removeComponent(_2);_6=this.projectComponents.addComponent(_6,_4,_5);if(_6&&_6.liveObject){isc.EditContext.selectCanvasOrFormItem(_6.liveObject,true)}}
,isc.A.getCustomComponentsURL=function isc_VisualBuilder_getCustomComponentsURL(){return"customComponents.xml"}
,isc.A.buildLibraryTree=function isc_VisualBuilder_buildLibraryTree(){this.libraryTree=isc.Tree.create();this.paletteNodeDS.dataURL=this.getCustomComponentsURL();this.paletteNodeDS.fetchData({},this.getID()+".fetchLibraryComponentsReply(data)");this.paletteNodeDS.dataURL="defaultComponents.xml";this.paletteNodeDS.fetchData({},this.getID()+".fetchLibraryComponentsReply(data); "+this.getID()+".openLibraryTree()")}
,isc.A.fetchLibraryComponentsReply=function isc_VisualBuilder_fetchLibraryComponentsReply(_1){this.libraryTree.addList(_1,this.libraryTree.getRoot())}
,isc.A.openLibraryTree=function isc_VisualBuilder_openLibraryTree(){var _1=this.libraryTree;_1.openFolders(_1.getChildren(_1.getRoot()));var _2=_1.findAll("isClosed","true");if(_2&&_2.length)_1.closeFolders(_2)}
,isc.A.addDataSources=function isc_VisualBuilder_addDataSources(_1,_2){var _3=_1,_4=[],_5;for(var i=0;i<_3.length;i++){var _7=_3[i];_5=this.projectComponents.makeDSPaletteNode(_7.dsName,_7.dsType);_4.add(_5)}
if(this.dataSourceList)this.dataSourceList.setData(_4)}
,isc.A.addDataSource=function isc_VisualBuilder_addDataSource(_1){if(this.dsEditorWindow){this.dsEditorWindow.hide();if(_1.serverType=="sql"||_1.serverType=="hibernate"){if(this.dsWizard!=null){var _2=this.dsWizard.dsTypeRecord,_3=_2.wizardDefaults,_4=_3?_3.existingTable=="true":false;if(!_4)
{var _5="http://"+window.location.host+"/tools/adminConsole.jsp";isc.say("To generate or regenerate SQL tables for this DataSource, use the "+"<a target=_blank href='"+_5+"'>Admin Console</a> or the "+"<i>DataSources</i> tab in the Developer Console")}}}}
var _6=_1.serviceNamespace?"webService":_1.serverType||_1.dataFormat,_7=this.projectComponents.makeDSPaletteNode(_1.ID,_6);var _8=this.dataSourceList.data,_9=_8.findIndex("ID",_1.ID);if(_9==-1){_8.addAt(_7,0)}else{_8.set(_9,_7)}}
,isc.A.newProject=function isc_VisualBuilder_newProject(){isc.EditContext.deselect();this.projectComponents.destroyAll();delete this.projectComponents.currentScreen;this.viewContext={};if(this.initialComponent){var _1=isc.HiddenPalette.create().makeNewComponent(this.initialComponent);this.projectComponents.addComponent(_1)}}
,isc.A.updateSource=function isc_VisualBuilder_updateSource(_1){if(this.showCodePane==false||!this.main)return;if(!_1&&this.main.getSelectedTabNumber()!=1)return;var _2=this.getUpdatedSource();if(!_2)return;if(this.codePreview)this.codePreview.setValue("codeField",_2);if(this.jsCodePreview&&this.codePane.isDrawn()&&this.codePane.getSelectedTab().pane==this.jsCodePreview)
{isc.xml.toJSCode(_2,this.getID()+".jsCodePreview.setContents(data)")}}
,isc.A.getUpdatedJSSource=function isc_VisualBuilder_getUpdatedJSSource(_1){isc.xml.toJSCode(this.getUpdatedSource(),_1)}
,isc.A.getUpdatedSource=function isc_VisualBuilder_getUpdatedSource(){return this.projectComponents.serializeComponents()}
,isc.A.saveSourceToRepo=function isc_VisualBuilder_saveSourceToRepo(_1,_2,_3){if(!_1)_1=this.currentRepo;if(!_1)return;if(isc.isA.String(_1))_1=this.loadRepo(_1);else this.currentRepo=_1;this.viewContext=isc.addProperties({},{screenName:this.getCurrentScreenName()},this.viewContext,_2);if(!_3)_3={target:this,methodName:"saveRepoObjectReply"};this.saveSource(this.viewContext.screenName,_3)}
,isc.A.saveSource=function isc_VisualBuilder_saveSource(_1,_2){var _3=this,_4=_3.getUpdatedSource(),_5=isc.addProperties({},this.viewContext,{caller:this});this.currentRepo.showSaveUI(_4,_5,_2)}
,isc.A.downloadDataSource=function isc_VisualBuilder_downloadDataSource(_1){var _2=this;var _3=this.downloadDataSourceDialogTitle.evalDynamicString(this,{dsID:_1.ID}),_4=this.downloadDataSourceDialogPrompt,_5=this.downloadDataSourceDialogButtonTitle;this.downloadDataSourceDialog=isc.TWindow.create({title:_3,width:300,height:160,isModal:true,showModalMask:true,autoCenter:true,padding:8,items:[isc.Label.create({width:"100%",padding:8,contents:_4}),isc.DynamicForm.create({width:"100%",numCols:3,items:[{name:"formatType",title:"Format",type:"select",width:"*",defaultValue:"XML",valueMap:["XML","JavaScript"]},{name:"downloadButton",title:_5,type:"button",startRow:false,click:function(){_2.continueDSDownload(_1,this.form.getValue("formatType"))}}]})]});this.downloadDataSourceDialog.show()}
,isc.A.continueDSDownload=function isc_VisualBuilder_continueDSDownload(_1,_2){this.downloadDataSourceDialog.hide();this.downloadDataSourceDialog.markForDestroy();var _3=this,_4=_1.getClassName(),_5;if(isc.DS.isRegistered(_4)){_5=isc.DS.get(_4)}else{_5=isc.DS.get("DataSource");_1._constructor=_4}
var _6=_5.xmlSerialize(_1);if(_2=="XML"){_3.downloadDataSourceReply(_1,_2,_6)}else{isc.XMLTools.toJSCode(_6,function(_7){_3.downloadDataSourceReply(_1,_2,_7.data)})}}
,isc.A.downloadDataSourceReply=function isc_VisualBuilder_downloadDataSourceReply(_1,_2,_3){var _4=_1.ID+".ds."+(_2=="XML"?"xml":"js"),_5=(_2=="XML"?"text/xml":"application/json");isc.DMI.callBuiltin({methodName:"downloadClientContent",arguments:[_3,_4,_5],requestParams:{showPrompt:false,useXmlHttpRequest:false,timeout:0}})}
,isc.A.showDSWizard=function isc_VisualBuilder_showDSWizard(){if(this.wizardWindow)return this.wizardWindow.show();var _1=this;this.wizardWindow=isc.TWindow.create({title:"DataSource Wizard",autoCenter:true,width:"85%",height:"85%",builder:_1,closeClick:function(){this.Super("closeClick",arguments);_1.dsWizard.resetWizard()},items:[_1.dsWizard=isc.DSWizard.create({callingBuilder:_1})]})}
,isc.A.showDSEditor=function isc_VisualBuilder_showDSEditor(_1,_2,_3){var _4=this,_5={target:_4,methodName:"addDataSource"}
this.makeDSEditor();if(_2)this.dsEditor.editNew(_1,_5,_3);else this.dsEditor.editSaved(_1,_5,_3);this.dsEditorWindow.show()}
,isc.A.makeDSEditor=function isc_VisualBuilder_makeDSEditor(){if(this.dsEditorWindow)return;var _1=this;if(!this.dsEditor){this.dsEditor=isc.DataSourceEditor.create({dataSource:"DataSource",width:"100%",height:"80%",autoDraw:false,canAddChildSchema:true,canEditChildSchema:true,builder:_1,mainStackProperties:{_constructor:"TSectionStack"},instructionsProperties:{_constructor:"THTMLFlow"},mainEditorProperties:{_constructor:"TComponentEditor",formConstructor:isc.TComponentEditor},fieldLayoutProperties:{_constructor:"TLayout"},getUniqueDataSourceID:function(){var _2,i=0;while(_2==null){_2="dataSource"+i;if(_1.dataSourceList.data.find("ID",_2)){_2=null;i++}}
return _2}})}
this.dsEditorWindow=isc.Window.create({title:"DataSource Editor",autoDraw:true,builder:this,isModal:true,autoCenter:true,width:"85%",height:"85%",canDragResize:true,items:[this.dsEditor]})}
,isc.A.hideRightMostResizeBar=function isc_VisualBuilder_hideRightMostResizeBar(){this.workspace.getMember(this.workspace.getMembers().length-1).showResizeBar=false}
,isc.A.addOperation=function isc_VisualBuilder_addOperation(){if(!this.schemaWindow){this.schemaWindow=isc.TWindow.create({title:this.schemaWindowTitle||"Webservice Operations",autoCenter:true,autoDraw:false,width:Math.round(this.width*.6),height:Math.round(this.height*.9),items:[this.addAutoChild("schemaViewer"),this.addAutoChild("schemaViewerSelectButton")]})}
this.getOperationsTreeData(this.getID()+".addOperationReply(data)")}
,isc.A.addOperationReply=function isc_VisualBuilder_addOperationReply(_1){this.schemaViewer.setData(isc.Tree.create({modelType:"children",root:_1,nameProperty:"name",childrenProperty:"children"}));this.schemaViewer.getData().openAll();this.schemaWindow.show()}
,isc.A.operationSelected=function isc_VisualBuilder_operationSelected(){var _1=this.schemaViewer.data,_2=this.schemaViewer.getSelectedRecord();if(_2!=null){if(_2.type=="service")_2=_1.getChildren(_2)[0];if(_2.type=="portType")_2=_1.getChildren(_2)[0];var _3=_1.getParent(_2);var _4=_1.getParent(_3);var _5=_2.location||_3.location||_4.location;var _6=this.projectComponents.data;_5=this.getOperationWSDLLocation(_5);var _7=this;this.loadWebService(_5,_4.name,_3.name,_2.name)}}
,isc.A.getOperationWSDLLocation=function isc_VisualBuilder_getOperationWSDLLocation(_1){return _1}
,isc.A.loadWebService=function isc_VisualBuilder_loadWebService(_1,_2,_3,_4){var _5=this;isc.xml.loadWSDL(_1,function(_6){_5.newServiceLoaded(_6,_2,_3,_4,_1)},null,true)}
,isc.A.newServiceLoaded=function isc_VisualBuilder_newServiceLoaded(_1,_2,_3,_4,_5){var _6={operationName:_4,serviceNamespace:_1.serviceNamespace,serviceName:_1.name,serviceDescription:_2,portTypeName:_3,location:_5}
this.addWebService(_1,_6);this.schemaWindow.hide()}
,isc.A.getOperationsTreeData=function isc_VisualBuilder_getOperationsTreeData(){var _1=this.operationsPalette,_2=_1?_1.data:null,_3=_2?_2.getChildren(_2.getRoot()):null;return _3}
,isc.A.trimOperationsTreeData=function isc_VisualBuilder_trimOperationsTreeData(_1,_2){if(!_1)return null;var _3=_2?"message_in":"message_out",_4=isc.addProperties({},_1),_5=false;while(!_5){var _6=_4.find("type",_3);if(_6){_4.remove(_6)}else _5=true}
return _4}
,isc.A.addWebService=function isc_VisualBuilder_addWebService(_1,_2){var _3={};_3.webService=_1;_3.inputSchema=_1.getRequestMessage(_2.operationName);_3.outputSchema=_1.getResponseMessage(_2.operationName);_2.inputSchema=_3.inputSchema;_2.outputSchema=_3.outputSchema;var _4=this.addServiceOperation(_2);var _5=this.getComplexOperationsPaletteTreeData(),_6="|"+_2.serviceDescription+"|"+_2.portTypeName+"|"+_2.operationName,_7;if(this.operationsPalette.getData()){_7=isc.Tree.create({root:this.operationsPalette.getData().getRoot()})}else{_7=isc.Tree.create({})}
_5.pathDelim="|";_7.pathDelim="|";if(_7.find(_6)){this.logWarn("Attempting to add webservice operation that is already in the tree");this.schemaWindow.hide();return}
var _8;if(_4){_8={name:_2.operationName,type:"operation",className:"IButton",defaults:{title:"Invoke "+_2.operationName,autoFit:true,click:{target:_4.liveObject.ID,name:"invoke",title:"Invoke "+_2.operationName}}}}else{_8={name:_2.operationName,type:"operation",canDrag:false}}
_6="|"+_2.serviceDescription+"|"+_2.portTypeName;var _9=_7.find(_6)
var _10=false;if(_9){_7.add(_8,_9);_10=true}else{_6="|"+_2.serviceDescription
var _9=_7.find(_6)
var _10=false;if(_9){_7.add({name:_2.portTypeName,type:"portType",canDrag:false,children:[_8]},_9);_10=true}else{var _11={name:_2.serviceDescription,type:"service",canDrag:false,children:[{name:_2.portTypeName,type:"portType",canDrag:false,children:[_8]}]}}
_5.children.add(_11);this.operationsPalette.setData(isc.Tree.create({modelType:"children",root:_5,nameProperty:"name",childrenProperty:"children"}))}
this.operationsPalette.setData(_7);var _6="|"+_2.serviceDescription+"|"+_2.portTypeName+"|"+_2.operationName,_9=_7.find(_6);var _12={palette:this.operationsPalette,isOutput:false,operation:_2.operationName,serviceName:_2.serviceName,serviceNamespace:_2.serviceNamespace};if(_3.inputSchema){this.setSchema(_3.inputSchema,_9,null,"",_12)}
if(_3.outputSchema){_12.isOutput=true;this.setSchema(_3.outputSchema,_9,null,"",_12)}
this.operationsPalette.getData().openAll()}
,isc.A.addServiceOperation=function isc_VisualBuilder_addServiceOperation(_1){var _2,_3;if(_1.inputSchema){_2={className:"ValuesManager",defaults:{parentProperty:"inputVM",dataSource:_1.inputSchema.ID,serviceName:_1.serviceName,serviceNamespace:_1.serviceNamespace}}}
if(_1.outputSchema){_3={className:"ValuesManager",defaults:{parentProperty:"outputVM",dataSource:_1.outputSchema.ID,serviceName:_1.serviceName,serviceNamespace:_1.serviceNamespace}}}
var _4={className:"ServiceOperation",defaults:{operationName:_1.operationName,serviceNamespace:_1.serviceNamespace,serviceName:_1.serviceName,serviceDescription:_1.serviceDescription,portTypeName:_1.portTypeName,location:_1.location}};var _5=this.projectComponents;var _6=_5.makeEditNode(_4);_5.addComponent(_6);if(_2)_5.addComponent(_5.makeEditNode(_2),_6,null,"inputVM");if(_3)_5.addComponent(_5.makeEditNode(_3),_6,null,"outputVM");return _6}
,isc.A.shouldShowDataPathFields=function isc_VisualBuilder_shouldShowDataPathFields(){return this.operationsPalette?true:false}
,isc.A.getComplexOperationsPaletteTreeData=function isc_VisualBuilder_getComplexOperationsPaletteTreeData(){if(!this.operationsPalette||!this.operationsPalette.data)return{children:[]};var _1=this.operationsPalette.data,_2=_1.getChildren(_1.getRoot());return{children:_2}}
,isc.A.setSchema=function isc_VisualBuilder_setSchema(_1,_2,_3,_4,_5){var _6=_5.populateTarget&&this.targetContext!=null;var _7=_1.getFieldNames();for(var i=0;i<_7.length;i++){var _9=_7[i],_10=_1.getField(_9),_11=_1.fieldIsComplexType(_9),_12;var _13=this.getFieldPaletteNode(_1,_9,_4,_5);var _14=_5.palette.data;_14.add(_13,_2||_14.getRoot());if(_6&&_3&&_3.type==this.complexTypeNodeConstructor){var _15=null;if(_11){var _16={};isc.addProperties(_16,this.canvasItemWrapperDefaults);isc.addProperties(_16,this.canvasItemWrapperProperties);_15=_5.palette.makeEditNode({className:this.canvasItemWrapperConstructor,defaults:_16});this.targetContext.addNode(_15,_3)}
var _17=_5.palette.makeEditNode(_13);this.targetContext.addNode(_17,_15||_3);if(isc.EditContext)isc.EditContext.clearSchemaProperties(_17)}
if(_11){var _18=_1.getSchema(_10.type);this.setSchema(_18,_13,_17,(_4?_4+"/":"")+_9,_5)}}}
,isc.A.getFieldPaletteNode=function isc_VisualBuilder_getFieldPaletteNode(_1,_2,_3,_4){var _5=_1.fieldIsComplexType(_2),_6=_1.getField(_2),_7=_4.isOutput,_8=_4.displayOnly!=null?_4.displayOnly:_7,_9=this.getSchemaDataSourceIDs(_4.operation,_4.serviceName,_4.serviceNamespace),_10={schemaDataSource:_7?_9.output:_9.input,serviceNamespace:_4.serviceNamespace,serviceName:_4.serviceName,isComplexType:_5,type:_5?"complexType":"simpleType"},_11=isc.DataSource.getAutoTitle(_2),_12={name:_2,defaults:_10},_13=(_3?_3+"/":"")+_2;_10.dataPath=_13;if(_8){_10.inputDataPath=_13;_10.inputSchemaDataSource=_10.schemaDataSource;_10.inputServiceNamespace=_10.serviceNamespace;_10.inputServiceName=_10.serviceName}
if(_8)_10.canEdit=false;var _14,_15=_6.xmlMaxOccurs;if(_15=="unbounded")_15=1000;if(!_5){_12=this.getSimpleTypeNode(_12,_8,_11)}else{_10.dataSource=_10.schemaDataSource;delete _10.schemaDataSource;if(_15==null||_15<=1){_12=this.getComplexTypeNode(_12,_8,_11)}else{_12=this.getRepeatingComplexTypeNode(_12,_15,_8,_1,_6.type,_11)}}
_12.title=_10.title;_12.type=_10.type;return _12}
,isc.A.getSimpleTypeNode=function isc_VisualBuilder_getSimpleTypeNode(_1,_2,_3){_1.className=this.simpleTypeNodeConstructor;_1.defaults.title=_3;isc.addProperties(_1.defaults,this.simpleTypeNodeDefaults);isc.addProperties(_1.defaults,this.simpleTypeNodeProperties);return _1}
,isc.A.getComplexTypeNode=function isc_VisualBuilder_getComplexTypeNode(_1,_2,_3){_1.className=this.complexTypeNodeConstructor;delete _1.defaults.dataPath;delete _1.defaults.inputDataPath;_1.defaults.groupTitle=_3;isc.addProperties(_1.defaults,this.complexTypeNodeDefaults);isc.addProperties(_1.defaults,this.complexTypeNodeProperties);return _1}
,isc.A.getRepeatingComplexTypeNode=function isc_VisualBuilder_getRepeatingComplexTypeNode(_1,_2,_3,_4,_5,_6){if(_2<5&&_3){_1.className="DetailViewer"}else{_1.className=(_3?"ListGrid":"LineEditor")}
var _7=_4.getSchema(_5);var _8=_3?"inputDataPath":"dataPath";if(_3){_1.defaults.height=80;_1.defaults.autoFitMaxRecords=10;_1.defaults.canDragSelectText=true}else{_1.defaults.saveLocally=true}
var _9=_7.getFlattenedFields(null,_1.defaults.dataPath,_8);_9=isc.getValues(_9);_9=isc.applyMask(_9,["name","title","dataPath","inputDataPath"]);_1.defaults.defaultFields=_9;isc.addProperties(_1.defaults,this.repeatingComplexTypeNodeDefaults);isc.addProperties(_1.defaults,this.repeatingComplexTypeNodeProperties);return _1}
,isc.A.getSchemaDataSourceIDs=function isc_VisualBuilder_getSchemaDataSourceIDs(_1,_2,_3){var _4={};var _5=isc.ServiceOperation.getServiceOperation(_1,_2,_3);if(_5){if(_5.inputVM){_4.input=isc.DataSource.get(_5.inputVM.dataSource).ID}
if(_5.outputVM){_4.output=isc.DataSource.get(_5.outputVM.dataSource).ID}}
return _4}
);isc.B._maxIndex=isc.C+81;isc.defineClass("ActionMenu","Menu");isc.A=isc.ActionMenu.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$50a=["string","number","boolean","object","array"];isc.B.push(isc.A.initWidget=function isc_ActionMenu_initWidget(){this.setComponents(this.components);this.Super("initWidget",arguments)}
,isc.A.setComponents=function isc_ActionMenu_setComponents(_1){var _2=[];if(!_1)_1=[];for(var i=0;i<_1.length;i++){var _4=_1[i],_5={component:_4,icon:_4.icon,title:_4.liveObject.getActionTargetTitle?_4.liveObject.getActionTargetTitle():_4.ID+" ("+_4.type+")"};var _6=isc.jsdoc.getActions(_4.type);if(_6){_5.submenu=this.getActionsMenu(_4,_6);_2.add(_5)}}
_2.add({title:"[None]",click:this.getID()+".clearAction()",icon:"[SKINIMG]/actions/cancel.png"})
this.setData(_2)}
,isc.A.rowOver=function isc_ActionMenu_rowOver(_1){this.Super("rowOver",arguments);var _2=_1.component;if(_2&&_2.liveObject)isc.SelectionOutline.select(_2.liveObject);else isc.SelectionOutline.deselect();this.bringToFront()}
,isc.A.getActionsMenu=function isc_ActionMenu_getActionsMenu(_1,_2){var _3=[];for(var i=0;i<_2.length;i++){var _5=_2[i],_6={title:_5.title,icon:_5.icon,component:_1,targetAction:_5,click:this.getID()+".bindAction(item.component, item.targetAction)"}
_3.add(_6)}
return _3}
,isc.A.getInheritedMethod=function isc_ActionMenu_getInheritedMethod(_1,_2){while(_1){var _3=isc.jsdoc.getDocItem("method:"+_1+"."+_2);if(_3!=null)return _3;var _4=isc.DS.get(_1);if(_4&&_4.methods){var _5=_4.methods.find("name",_2);if(_5)return _5}
var _6=isc.ClassFactory.getClass(_1);if(_6==null)return null;_6=_6.getSuperClass();if(_6==null)return null;_1=_6.getClassName()}}
,isc.A.bindAction=function isc_ActionMenu_bindAction(_1,_2){var _3=this.sourceComponent,_4=this.getInheritedMethod(_3.type,this.sourceMethod),_5=isc.isAn.XMLNode(_4)?isc.jsdoc.toJS(_4):_4;if(this.logIsDebugEnabled("actionBinding")){this.logDebug("bindAction: component "+_1.ID+", sourceMethod: "+this.echoFull(_5)+", action method: "+this.echoFull(_2),"actionBinding")}
var _6={title:_2.title,target:_1.ID,name:_2.name};var _7;if(_2.params){var _8=[],_9=false;_7=_5.params;if(!_7)_7=[];else if(!isc.isAn.Array(_7))_7=[_7];else _7=_7.duplicate();_7.add({name:"this",type:this.sourceComponent.type});for(var i=0;i<_2.params.length;i++){var _11=_2.params[i];this.logInfo("considering actionMethod "+_2.name+" param: "+_11.name+" of type "+_11.type,"actionBinding");var _12=_11.optional!=null&&_11.optional.toString()!="false";if(!_12||_11.type!=null&&!this.$50a.contains(_11.type.toLowerCase()))
{var _13=this.getMatchingSourceParam(_11,_7);if(_13!=null){_8[i]=_13.name;_13.$480=true;_9=true;continue}else if(!_12){this.logInfo("action binding failed, actionMethod param "+_11.name+" of type "+_11.type+" couldn't be fulfilled","actionBinding");isc.say("Visual Builder couldn't find an automatic binding from event "+_5.name+" to action "+(_2.title||_2.name));return null}}
_8[i]="null"}
if(_9)_6.mapping=_8}
if(this.logIsInfoEnabled("actionBinding")){this.logWarn("generated binding: "+this.echoFull(_6),"actionBinding")}
if(_7)_7.setProperty("$480",null);this.bindingComplete(_6)}
,isc.A.bindingComplete=function isc_ActionMenu_bindingComplete(_1){}
,isc.A.clearAction=function isc_ActionMenu_clearAction(){var _1=null;this.bindingComplete(_1)}
,isc.A.getMatchingSourceParam=function isc_ActionMenu_getMatchingSourceParam(_1,_2){var _3=this.getFirstType(_1.type);var _4=isc.DS.get(_3);this.logInfo("selected type "+_3+" has schema: "+_4,"actionBinding");for(var i=0;i<_2.length;i++){var _6=_2[i];if(_6.$480)continue;this.logDebug("considering source param: "+_6.name+" of type "+_6.type,"actionBinding");var _7=this.getFirstType(_6.type);var _8=isc.DS.get(_7);if(!_8){if(_3==_7)return _6;continue}
if(_8.inheritsSchema(_4)){return _6}}}
,isc.A.getFirstType=function isc_ActionMenu_getFirstType(_1){_1=_1.split(/[ \t]+/)[0];_1=_1.substring(0,1).toUpperCase()+_1.substring(1);return _1}
);isc.B._maxIndex=isc.C+10;isc.A=isc.jsdoc;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.getActions=function isc_c_jsdoc_getActions(_1){var _2=isc.DS.get(_1);if(_2==null)return null;var _3;while(_2!=null){var _4=_2.methods?_2.methods.findAll("action",true):null;if(_4==null){if(_2.showSuperClassActions==false)break;_2=_2.superDS();continue}
for(var i=0;i<_4.length;i++){var _6=_4[i],_7=isc.jsdoc.getDocItem("method:"+_2.ID+"."+_6.name),_8=_7?isc.jsdoc.toJS(_7):_6;if(_3==null)_3=[];_3.add(isc.addProperties({},_8,_6));var _9=_3[i].params;if(_9!=null&&!isc.isAn.Array(_9))_3[i].params=[_9]}
if(_2.showSuperClassActions==false)break;_2=_2.superDS()}
return _3}
);isc.B._maxIndex=isc.C+1;isc.defineClass("GridSearch","DynamicForm");isc.A=isc.GridSearch.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.browserSpellCheck=false;isc.A.height=20;isc.A.numCols=2;isc.A.cellPadding=0;isc.A.colWidths=[46,200];isc.A.titleSuffix=":&nbsp;";isc.A.showSearchTitle=false;isc.A.wrapItemTitles=false;isc.A.selectOnFocus=true;isc.A.hint="Find...";isc.A.searchTitle="<span style='color:#FFFFFF'>Search</span>";isc.B.push(isc.A.initWidget=function isc_GridSearch_initWidget(){this.items=[isc.addProperties({name:"search",width:"*",colSpan:"*",showTitle:this.showSearchTitle,editorType:"TTextItem",selectOnFocus:true,title:this.searchTitle,showHintInField:true,hint:this.hint,changed:"form.findNode()",keyPress:function(_1,_2,_3){if(_3=="Enter")_2.findNode();if(_3=="Escape"){_2.revertState();return false}}},this.searchItemProperties)];this.Super("initWidget",arguments);if(this.grid)this.setGrid(this.grid)}
,isc.A.setGrid=function isc_GridSearch_setGrid(_1){this.grid=_1;this.defaultSearchProperty();if(isc.isA.TreeGrid(_1)){if(_1.$84w)_1.getNodeTitle=_1.$84w;_1.$84w=_1.getNodeTitle;_1.getNodeTitle=function(_5,_6,_7){var _2=_1.$84w(_5,_6,_7);if(_5.$826){var _3,_4;if(_2.match(/<.*>/)){_4=new RegExp("(^|>)([^<]*?)("+_5.$826+")","ig");_3=_2.replace(_4,"$1$2<span style='background-color:#FF0000;'>$3</span>")}else{_4=new RegExp("("+_5.$826+")","ig");_3=_2.replace(_4,"<span style='background-color:#FF0000;'>$1</span>")}
_2=_3}
return _2}}else{if(_1.$84x)_1.formatCellValue=_1.$84x;_1.formatCellValue=function(_2,_5,_6,_7){if(_1.$84x){_2=_1.$84x(_2,_5,_6,_7)}
if(_2!=null&&_5.$826){var _3,_4;if(_2.match(/<.*>/)){_4=new RegExp("(^|>)([^<]*?)("+_5.$826+")","ig");_3=_2.replace(_4,"$1$2<span style='background-color:#FF0000;'>$3</span>")}else{_4=new RegExp("("+_5.$826+")","ig");_3=_2.replace(_4,"<span style='background-color:#FF0000;'>$1</span>")}
_2=_3}
return _2}}}
,isc.A.defaultSearchProperty=function isc_GridSearch_defaultSearchProperty(){if(!this.searchProperty&&this.grid){if(isc.isA.TreeGrid(this.grid)){this.searchProperty=this.grid.getTitleField()}else{this.searchProperty=this.grid.getFieldName(0)}}}
,isc.A.revertState=function isc_GridSearch_revertState(){var _1=this.grid;if(this.$49d){delete this.$49d.$826;_1.refreshRow(_1.getRecordIndex(this.$49d))}
this.$49c=this.$49d=null;if(this.$827){for(var i=0;i<this.$827.length;i++)_1.data.closeFolder(this.$827[i])}
this.$827=null;this.clearValue("search")}
,isc.A.findNode=function isc_GridSearch_findNode(){if(!this.grid||!this.grid.getData())return;var _1=this.getValue("search");if(_1==null){this.revertState();return}
_1=_1.toLowerCase();var _2=this.$49c==_1&&this.$49d;this.$49c=_1;var _3=this.grid;var _4=isc.isA.TreeGrid(_3)?_3.data.getAllNodes():_3.getData();var _5=this.$49d?_4.indexOf(this.$49d):0;if(_2)_5++;if(this.$49d){delete this.$49d.$826;_3.refreshRow(_3.getRecordIndex(this.$49d));this.$49d=null}
var _6=this.findNext(_4,_5,_1);if(!_6)_6=this.findNext(_4,0,_1);if(_6){this.$49d=_6;_6.$826=_1;if(this.$827){for(var i=0;i<this.$827.length;i++)_3.data.closeFolder(this.$827[i])}
this.$827=null;if(isc.isA.TreeGrid(_3)){var _8=_3.data.getParents(_6);this.$827=[];for(var i=0;i<_8.length;i++){var _9=_8[i];if(!_3.data.isOpen(_9)){this.$827.add(_9);_3.data.openFolder(_9)}}
if(_3.data.isFolder(_6)&&!_3.data.isOpen(_6)){_3.data.openFolder(_6);this.$827.add(_6)}}
var _10=_3.getRecordIndex(_6);_3.refreshRow(_10)
_3.scrollRecordIntoView(_10)}}
,isc.A.findNext=function isc_GridSearch_findNext(_1,_2,_3){for(var i=_2;i<_1.getLength();i++){var _5=_1.get(i);if(_5[this.searchProperty]&&_5[this.searchProperty].toLowerCase().contains(_3)){return _5}}}
);isc.B._maxIndex=isc.C+6;isc.defineClass("BMMLImporter");isc.A=isc.BMMLImporter.getPrototype();isc.A.transformRules="/tools/visualBuilder/balsamiqTransformRules.js";isc.A.useLayoutHeuristics=true;isc.A.sloppyEdgeControlOverflow=10;isc.A.maxControlOverlap=20;isc.A.stackContainerFillInset=20;isc.A.formRowMaxOffset=30;isc.A.labelMaxOffset=10;isc.A.maxLayoutMargin=10000;isc.A.additionalLayouts=["HStack","HLayout","VStack","VLayout"];isc.A.dropExtraProperties=true;isc.A.allowedExtraProperties=[];isc.A.tallFormItems=["TextAreaItem","RadioGroupItem","SpacerItem"];isc.A.dropMarkup=true;isc.A.trimSpace=true;isc.A.fillSpace=true;isc.A.formsGridCellWidth=5;isc.A.formsGridCellHeight=22;isc.A=isc.BMMLImporter.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$85p=[];isc.A.$z=false;isc.B.push(isc.A.init=function isc_BMMLImporter_init(){var _1=this;isc.FL.loadJSFiles(this.transformRules,function(){_1.$z=true;for(var i=0;i<_1.$85p.length;i++){_1.bmmlToXml(_1.$85p[i].xml,_1.$85p[i].callback)};_1.$85p.clear();delete _1.$85p})}
,isc.A.bmmlToXml=function isc_BMMLImporter_bmmlToXml(_1,_2){if(!this.$z){this.$85p.add({xml:_1,callback:_2})}else{var _3=isc.XMLTools.toJS(isc.XMLTools.parseXML(_1));var _4=[];var _5=_3.controls.control;for(var i=0;i<_5.length;i++){if(this.dropMarkup&&transformRules.markupItems.contains(_5[i].controlTypeID))
{continue}
if("__group__"==_5[i].controlTypeID){_4.addList(this.convertGroup(_5[i]))}else{_4.addList(this.convertControl(_5[i]))}};for(var i=0;i<_4.length;i++){if(_4[i].left!=null)_4[i].left=parseInt(_4[i].left);if(_4[i].top!=null)_4[i].top=parseInt(_4[i].top);if(_4[i].width!=null)_4[i].width=parseInt(_4[i].width);if(_4[i].height!=null)_4[i].height=parseInt(_4[i].height)}
if(this.trimSpace){var _7=10000;var _8=10000;for(var i=0;i<_4.length;i++){if(_4[i].left!=null&&_4[i].top!=null){_7=Math.min(_7,_4[i].left);_8=Math.min(_8,_4[i].top)}}
for(var i=0;i<_4.length;i++){if(_4[i].left!=null&&_4[i].top!=null){_4[i].left-=_7;_4[i].top-=_8}}}
if(this.useLayoutHeuristics){_4=this.processHeuristics(_4)}
for(var i=0;i<_4.length;i++){var _9=_4[i].$86d;if(_9!=null&&(_9.fullWidth||_9.fullHeight)){if(_9.containerName=="TabSet"||_9.containerName=="Window"||_9.containerName=="SectionStack"||_9.containerName=="VLayout")
{if(_9.fullWidth)delete _4[i].width;if(_9.fullHeight)delete _4[i].height}else if(_9.controlName=="com.balsamiq.mockups::FieldSet"||_9.containerName=="VStack"||_9.controlName=="com.balsamiq.mockups::Canvas")
{if(_9.fullWidth)_4[i].width="100%";if(_9.fullHeight)_4[i].height="100%"}}
delete _4[i].$86d;delete _4[i].absX;delete _4[i].absY;if(_4[i]._constructor=="DynamicForm"&&_4[i].isGroup!=true){delete _4[i].height}}
_2(isc.EditContext.serializeInitData(_4))}}
,isc.A.convertGroup=function isc_BMMLImporter_convertGroup(_1){var _2=[];if(!isc.isA.Array(_1.groupChildrenDescriptors.control)){_1.groupChildrenDescriptors.control=[_1.groupChildrenDescriptors.control]}
for(var i=0;i<_1.groupChildrenDescriptors.control.length;i++){var _4=_1.groupChildrenDescriptors.control[i];var _5;if("__group__"==_4.controlTypeID){_5=this.convertGroup(_4)}else{_5=this.convertControl(_4)}
for(var j=0;j<_5.length;j++){if(_5[j][transformRules.propertyTranslations.x]!=null){_5[j][transformRules.propertyTranslations.x]=parseInt(_5[j][transformRules.propertyTranslations.x]);_5[j][transformRules.propertyTranslations.x]+=parseInt(_1.x)}
if(_5[j][transformRules.propertyTranslations.y]!=null){_5[j][transformRules.propertyTranslations.y]=parseInt(_5[j][transformRules.propertyTranslations.y]);_5[j][transformRules.propertyTranslations.y]+=parseInt(_1.y)}
if(_5[j][transformRules.propertyTranslations.zOrder]!=null){_5[j][transformRules.propertyTranslations.zOrder]=parseInt(_5[j][transformRules.propertyTranslations.zOrder]);_5[j][transformRules.propertyTranslations.zOrder]+=parseInt(_1.zOrder)}
_5[j].ID="group_"+_1.controlID+"_"+_5[j].ID;if(_5[j].dataSource!=null){_5[j].dataSource="group_"+_1.controlID+"_"+_5[j].dataSource}}
_2.addList(_5)}
return _2}
,isc.A.convertControl=function isc_BMMLImporter_convertControl(_1){var _2=this.getSCClass(_1.controlTypeID);var _3={ID:"control"+_1.controlID,_constructor:_2,$86d:{controlName:_1.controlTypeID}};if(_2==null){_2="MockupElement";_3._constructor=_2;_3.controlName=_3.$86d.controlName}
for(var _4 in _1){if(_4!="controlProperties"&&_4!="controlTypeID"){var _5=_1[_4];var _6=this.getSCPropertyName(_1.controlTypeID,_4,_5);if(_6!=null){_3[_6]=_5}else{if(!this.dropExtraProperties||this.allowedExtraProperties.contains(_4))
{_3[_4]=_5}else{_3.$86d[_4]=_5}}}}
if(_1.controlProperties!=null){for(var _7 in _1.controlProperties){var _5=unescape(_1.controlProperties[_7]);var _6=this.getSCPropertyName(_1.controlTypeID,_7,_5);_5=this.getSCPropertyValue(_1.controlTypeID,_7,_5);if(_6!=null){_3[_6]=_5}else{if(!this.dropExtraProperties||this.allowedExtraProperties.contains(_4))
{_3[_7]=_5}else{_3.$86d[_7]=_5}}}}
_3=this.afterConvert(_1.controlTypeID,_2,_3);if(transformRules.formItems.contains(_2)){_3._constructor='DynamicForm'}
var _8=[_3];var _9=this.getAdditionalElements(_1.controlTypeID,_2,_3);if(_9!=null){_9.add(_3);_8=_9}
return _8}
,isc.A.getSCClass=function isc_BMMLImporter_getSCClass(_1){return transformRules.classTranslations[_1]}
,isc.A.getSCPropertyName=function isc_BMMLImporter_getSCPropertyName(_1,_2,_3){var _4=transformRules.widgetPropertyTranslations[_1];if(_4!=null){var _5=_4[_2];if(_5!=null){return _5}}
return transformRules.propertyTranslations[_2]}
,isc.A.getSCPropertyValue=function isc_BMMLImporter_getSCPropertyValue(_1,_2,_3){var _4=transformRules.widgetPropertyTranslations[_1];if(_4!=null&&_4.controlPropertiesParser!=null){var _5=_4.controlPropertiesParser(_2,_3);if(_5!=null){return _5}}
return _3}
,isc.A.afterConvert=function isc_BMMLImporter_afterConvert(_1,_2,_3){if(_3.zIndex!=null){_3.zIndex=1000000+parseInt(_3.zIndex)}
if(_3.width==null||_3.width=='-1'){if(_3.measuredW){_3.width=_3.measuredW}else{_3.width=_3.$86d.measuredW}}
if(_3.height==null||_3.height=='-1'){if(_3.measuredH){_3.height=_3.measuredH}else{_3.height=_3.$86d.measuredH}}
var _4=transformRules.widgetPropertyTranslations[_1];if(_4!=null&&_4.afterInit!=null){_4.afterInit(_2,_3)}
if(_3.height)_3.height=parseInt(_3.height);if(_3.top)_3.top=parseInt(_3.top);if(_3.left)_3.left=parseInt(_3.left);if(_3.width)_3.width=parseInt(_3.width);if(transformRules.formItems.contains(_2)){_3.showTitle=false;var _5={ID:_3.ID,height:_3.height,top:_3.top,left:_3.left,width:_3.width,zIndex:_3.zIndex,title:_3.title,cellPadding:0,items:[_3],$86d:[]};if(_3.title==null){delete _5.title;_5.numCols=1}
delete _3.ID;delete _3.zIndex;delete _3.left;delete _3.top;delete _3.$86d;_3=_5}
return _3}
,isc.A.getAdditionalElements=function isc_BMMLImporter_getAdditionalElements(_1,_2,_3){var _4=transformRules.widgetPropertyTranslations[_1];if(_4!=null&&_4.getAdditionalElements!=null){return _4.getAdditionalElements(_2,_3)}
return null}
,isc.A.processHeuristics=function isc_BMMLImporter_processHeuristics(_1){var _2=[];for(var i=0;i<_1.length;i++){if(_1[i].$86d){var _4=_1[i].$86d.controlName;var _5=transformRules.widgetPropertyTranslations[_4];if(_5!=null&&_5.addChild!=null){_2.add(_1[i]);_1[i].contained=[];_1[i].headerContained=[];_1[i].markupContained=[]}}}
_1=this.processContainersHeuristic(_1,_2);_1=this.processStackHeuristic(_1,_2);_1=this.processFormsHeuristic(_1,_2);this.removeExtraContainers(_1,_2);_1=this.processAddingToContainersHeuristic(_1,_2);return _1}
,isc.A.processContainersHeuristic=function isc_BMMLImporter_processContainersHeuristic(_1,_2){var _3=[];var _4=[];for(var i=0;i<_1.length;i++){if(_1[i].left!=null){_1[i].absX=_1[i].left}
if(_1[i].top!=null){_1[i].absY=_1[i].top}}
for(var i=0;i<_1.length;i++){var _6=_1[i];if(_6._constructor=="MockDataSource"){_4.addAt(_6,0)}else{var _7=this.findBestContainer(_2,_6);if(_7!=null){var _8=transformRules.widgetPropertyTranslations[_7.$86d.controlName];_6.top-=_7.absY;_6.left-=_7.absX;_6.autoDraw=false;if(transformRules.markupItems.contains(_6.$86d.controlName)){_7.markupContained.add(_6);_6.top-=_8.getTopMargin(_7);_6.left-=_8.getLeftMargin(_7)}else{var _9;if(_8.getControlAreaName!=null){_9=_8.getControlAreaName(_7,_6)}
if(_9!=null){_7.headerContained.add({controlAreaName:_9,control:_6})}else{_7.contained.add(_6);_6.top-=_8.getTopMargin(_7);_6.left-=_8.getLeftMargin(_7);var _10=transformRules.widgetPropertyTranslations[_6.$86d.controlName];if(_10!=null&&_10.sloppyEdgeControl){if((_6.left+_6.width)>_7.width){_6.width=_7.width-_6.left}
if((_6.top+_6.height)>_7.height){_6.height=_7.height-_6.top}}}}
_6.top=Math.max(0,_6.top);_6.left=Math.max(0,_6.left)}
_3.add(_6)}}
var _11=[];for(var i=0;i<_3.length;i++){var _6=_3[i];var _12=this.getAllChildItems(_6);if(_12.length==0){_11.add(_6,0)}else{var _13=-1;for(var j=0;j<_12.length;j++){var _15=_11.indexOf(_12[j]);if(_15>=0&&_13<_15){_13=_15}}
if(_13>0){_11.add(_6,_13+1)}else{_11.add(_6,0)}}}
var _16=[];for(var i=0;i<_11.length;i++){if(!_2.contains(_11[i])){var _17=false;for(var j=0;j<_2.length;j++){if((_2[j].contained!=null&&_2[j].contained.contains(_11[i]))||(_2[j].markupContained!=null&&_2[j].markupContained.contains(_11[i]))||(_2[j].headerContained!=null&&_2[j].headerContained.contains(_11[i])))
{_17=true;break}
if(_2[j].headerContained!=null){for(var k=0;k<_2[j].headerContained.length;k++){if(_2[j].headerContained[k].control==_11[i]){_17=true;break}}
if(_17){break}}}
if(!_17){_16.add(_11[i])}}}
if(_16.length>0){var _19=[];for(var j=0;j<_16.length-1;j++){_16[j].autoDraw=false;var _20={ID:"outer_"+j,_constructor:"VStack",fake:true,contained:[_16[j]],markupContained:[],$86d:{controlName:"Stack"},top:_16[j].top,left:_16[j].left,width:_16[j].width,height:_16[j].height};var _21;do{_21=false;for(var k=j+1;k<_16.length;k++){var _22=_16[k];var _23=Math.min(Math.abs(_20.left-_22.left-_22.width),Math.abs(_22.left-_20.left-_20.width));if((_20.left>=_22.left&&(_20.left+_20.width)<=(_22.left+_22.width))||(_22.left>=_20.left&&(_22.left+_22.width)<=(_20.left+_20.width)))
{_23=0}
var _24=Math.min(Math.abs(_20.top-_22.top-_22.height),Math.abs(_22.top-_20.top-_20.height));if((_20.top>=_22.top&&(_20.top+_20.top)<=(_22.top+_22.top))||(_22.top>=_20.top&&(_22.top+_22.top)<=(_20.top+_20.top)))
{_24=0}
if(_23<50&&_24<50){_20.contained.add(_22);_22.autoDraw=false;_20.top=Math.min(_20.top,_22.top);_20.left=Math.min(_20.left,_22.left);var _25=Math.max(_20.top+_20.height,_22.top+_22.height);var _26=Math.max(_20.left+_20.width,_22.left+_22.width);_20.height=_25-_20.top;_20.width=_26-_20.left;_16.removeAt(k);k--;_21=true}}}while(_21);for(var k=0;k<_20.contained.length;k++){if(transformRules.markupItems.contains(_20.contained[k].$86d.controlName))
{_20.markupContained.add(_20.contained[k]);_20.contained.removeAt(k);k--}}
_2.add(_20);_11.add(_20)}}
_11.addListAt(_4,0);return _11}
,isc.A.getAllChildItems=function isc_BMMLImporter_getAllChildItems(_1,_2){if(_1.contained==null){return[]}
var _3=[];_3.addList(_1.contained);if(_2!=true){if(_1.markupContained!=null){_3.addList(_1.markupContained)}
if(_1.headerContained!=null){for(var i=0;i<_1.headerContained.length;i++){_3.add(_1.headerContained[i].control)}}}
for(var i=0;i<_1.contained.length;i++){if(_1.contained[i].contained!=null&&_1.contained[i].contained.length>0){_3.addList(this.getAllChildItems(_1.contained[i]))}}
return _3}
,isc.A.findBestContainer=function isc_BMMLImporter_findBestContainer(_1,_2){var _3=_2.absX+(_2.width==null?0:_2.width);var _4=_2.absY+(_2.height==null?0:_2.height);var _5=[];for(var i=0;i<_1.length;i++){var _7=_1[i];if(_7==_2){continue}
var _8=_7.absX-2;var _9=_7.absX+_7.width+2;var _10=_7.absY-2;var _11=_7.absY+_7.height+2;if(_8<=_2.absX&&_10<=_2.absY&&_2.zIndex>=_7.zIndex){var _12=transformRules.widgetPropertyTranslations[_2.$86d.controlName];if(_12!=null&&_12.sloppyEdgeControl){if((_9+this.sloppyEdgeControlOverflow)>=_3&&(_11+this.sloppyEdgeControlOverflow)>=_4)
{_5.add(_7)}}else{if(_9>=_3&&_11>=_4){_5.add(_7)}}}}
if(_5.length>0){var _13=_5[0];for(var i=1;i<_5.length;i++){if(_13.width>_5[i].width||_13.height>_5[i].height){_13=_5[i]}}
return _13}else{return null}}
,isc.A.processStackHeuristic=function isc_BMMLImporter_processStackHeuristic(_1,_2){for(var i=0;i<_2.length;i++){var _4=_2[i];_4.contained.sort(function(_31,_32){if(_31.top==_32.top){return _31.left-_32.left}
return _31.top-_32.top});this.handleElementsOverlap(_4.contained);for(var j=0;j<_4.contained.length;j++){var _6=_4.contained[j];if(_6._constructor=="Label"){for(var k=0;k<_4.contained.length;k++){var _8=_4.contained[k];if(_8._constructor=="DynamicForm"&&_8.items!=null){var _9=(_8.top>_6.top&&(_8.top-(_6.top+_6.height))<this.labelMaxOffset)&&(Math.abs(_8.left-_6.left)<this.labelMaxOffset);var _10=(_8.left>_6.left)&&((_8.left-(_6.left+_6.width))<2*this.labelMaxOffset)&&(_6.top+this.labelMaxOffset>_8.top)&&(_6.top+_6.height-this.labelMaxOffset<_8.top+_8.height);if(_9||_10){if(_8.items[0].title!=null){if(_9){var _11=false;for(var l=0;l<_4.contained.length;l++){var _13=_4.contained[l];if(j!=l&&_13._constructor=="Label"){var _14=(_6.top>_13.top&&(_6.top-(_13.top+_13.height))<this.labelMaxOffset)&&(Math.abs(_6.left-_13.left)<this.labelMaxOffset);if(_14){_11=true;break}}}
if(_11){continue}}
_6._constructor="DynamicForm";_6.items=[{_constructor:"StaticTextItem",showTitle:false,width:_6.width,value:_6.contents}]}else{_8.items[0].showTitle=true;_8.items[0].title=_6.contents;if(_9){_8.numCols=1;_8.items[0].titleOrientation="top";var _15=17;_8.height+=_15;_8.top-=_15;_8.absY-=_15}else{_8.numCols=2;_8.width=_8.left+_8.width-_6.left;_8.left=_6.left;_8.absX=_6.absX;if(_8.height>_6.height*2){var _16=_6.top;var _17=Math.abs(_8.top+_8.height/ 2-_6.top-_6.height/ 2);var _18=Math.abs(_8.height-_6.top-_6.height);if(_16<_17&&_16<_18){_8.items[0].titleVAlign="top"}else if(_18<_17&&_18<_16){_8.items[0].titleVAlign="bottom"}}
_8.titleWidth=_8.width-_8.items[0].width+1}
_4.contained.removeAt(j);_1.remove(_6);j--;break}}}}}}
var _19=this.splitElementsByContainers(_4.contained,"top","height");var _20=this.splitElementsByContainers(_4.contained,"left","width");var _21;if(_20.size()>1&&_20.size()<5&&(_19.size()<2||_20.size()<_19.size())&&_4._constructor!="HStack"&&_4._constructor!="HLayout")
{_21=this.processStacksRecursively(_4,"root_horizontal");var s={_constructor:"HStack",ID:_4.ID+"$856",contained:_4.contained,$86d:{controlName:"Stack"}};var _23=1000000;for(var j=0;j<s.contained.lenght;j++){if(s.contained[j].zIndex){_23=Math.max(_23,s.contained[j].zIndex)}};s.zIndex=_23;_4.contained=[s];_21.add(s)}else{_21=this.processStacksRecursively(_4,"root_vertical")}
_2.addListAt(_21,i);var _24=_1.indexOf(_4);_1.addListAt(_21,_24);i+=_21.length}
for(var i=0;i<_2.length;i++){var _25=_2[i]._constructor=="HStack"||_2[i]._constructor=="HLayout";var _26=0;for(var j=1;j<_2[i].contained.length;j++){var _27=_2[i].contained[j].$86d.controlName;if(_27=="com.balsamiq.mockups::HSplitter"||_27=="com.balsamiq.mockups::HRule"||_27=="com.balsamiq.mockups::VSplitter"||_27=="com.balsamiq.mockups::VRule")
{_2[i].contained[j-1].showResizeBar=true;_1.remove(_2[i].contained[j]);_2[i].contained.removeAt(j);j--;continue}
if((_25&&_27=="com.balsamiq.mockups::VerticalScrollBar")||(!_25&&_27=="com.balsamiq.mockups::HorizontalScrollBar"))
{_2[i].overflow="auto";if(_25){_2[i].contained[j-1].width+=_2[i].contained[j].width}else{_2[i].contained[j-1].height+=_2[i].contained[j].height}
_1.remove(_2[i].contained[j]);_2[i].contained.removeAt(j);j--;continue}
var m;if(_25){m=_2[i].contained[j].left-
(_2[i].contained[j-1].left+_2[i].contained[j-1].width)}else{m=_2[i].contained[j].top-
(_2[i].contained[j-1].top+_2[i].contained[j-1].height)}
if(_26==0){_26=m}else if(Math.abs(_26-m)>5){_26=0;break}}
var _29=transformRules.widgetPropertyTranslations[_2[i].$86d.controlName];if(_29.canUseMargin==null||_29.canUseMargin){if(_26>0){_2[i].membersMargin=_26}}else{_26=0}
for(var j=1;j<_2[i].contained.length;j++){var _30=0;if(_25){if(_2[i].contained[j].absX!=null&&_2[i].contained[j-1].absX!=null){_30=_2[i].contained[j].absX-_26-
(_2[i].contained[j-1].absX+_2[i].contained[j-1].width)}else{_30=_2[i].contained[j].left-_26-
(_2[i].contained[j-1].left+_2[i].contained[j-1].width)}}else{if(_2[i].contained[j].absY!=null&&_2[i].contained[j-1].absY!=null){_30=_2[i].contained[j].absY-_26-
(_2[i].contained[j-1].absY+_2[i].contained[j-1].height)}else{_30=_2[i].contained[j].top-_26-
(_2[i].contained[j-1].top+_2[i].contained[j-1].height)}}
if(_30>0){_2[i].contained[j-1].extraSpace=_30}}}
return _1}
,isc.A.processStacksRecursively=function isc_BMMLImporter_processStacksRecursively(_1,_2){_1.contained.sort(function(_15,_16){if(_15.top==_16.top){return _15.left-_16.left}
return _15.top-_16.top});var _3=_1.contained;if(_2=="vertical"||_2=="root_vertical"){var _4=this.splitElementsByContainers(_3,"top","height");if(_2=="vertical"&&_4.length==1){return[]}
_4.sort(function(_15,_16){return _15.top-_16.top});_1.contained=[];var _5=[];for(var i=0;i<_4.length;i++){if(_4[i].children.length==1){_1.contained.add(_4[i].children[0])}else{var s={_constructor:"HStack",ID:_1.ID+"$852"+i,contained:_4[i].children,top:_4[i].top,height:_4[i].height,absY:_4[i].children[0].absY,absX:_4[i].children[0].absX,$86d:{controlName:"Stack"}};var _8=1000000;var _9=1000000;var _10=0;for(var j=0;j<_4[i].children.length;j++){_4[i].children[j].top-=s.top;if(_4[i].children[j].top<0){_4[i].children[j].top=0}
if(_4[i].children[j].zIndex){_8=Math.max(_8,_4[i].children[j].zIndex)}
_9=Math.min(_9,_4[i].children[j].left);_10=Math.max(_10,_4[i].children[j].left+_4[i].children[j].width)}
s.zIndex=_8;s.width=_10-_9;s.left=_9;for(var j=0;j<_4[i].children.length;j++){_4[i].children[j].left-=s.left}
var _12=this.processStacksRecursively(s,"horizontal");_1.contained.add(s);if(_12.length!=0){_5.addList(_12)}
_5.add(s)}}
return _5}else{var _4=this.splitElementsByContainers(_3,"left","width");if(_2=="horizontal"&&_4.length==1){return[]}
_4.sort(function(_15,_16){return _15.left-_16.left});_1.contained=[];var _5=[];for(var i=0;i<_4.length;i++){if(_4[i].children.length==1){_1.contained.add(_4[i].children[0])}else{var s={_constructor:"VStack",ID:_1.ID+"$853"+i,contained:_4[i].children,left:_4[i].left,width:_4[i].width,absX:_4[i].children[0].absX,absY:_4[i].children[0].absY,autoDraw:false,$86d:{controlName:"Stack"}};var _8=1000000;var _13=1000000;var _14=0;for(var j=0;j<_4[i].children.length;j++){_4[i].children[j].left-=s.left;if(_4[i].children[j].left<0){_4[i].children[j].left=0}
if(_4[i].children[j].zIndex){_8=Math.max(_8,_4[i].children[j].zIndex)}
_13=Math.min(_13,_4[i].children[j].top);_14=Math.max(_14,_4[i].children[j].top+_4[i].children[j].height)}
s.zIndex=_8;s.height=_14-_13;s.top=_13;for(var j=0;j<_4[i].children.length;j++){_4[i].children[j].top-=s.top}
var _12=this.processStacksRecursively(s,"vertical");_1.contained.add(s);if(_12.length!=0){_5.addList(_12)}
_5.add(s)}}
return _5}}
,isc.A.splitElementsByContainers=function(elements,minName,sizeName){var res=[];for(var i=0;i<elements.length;i++){var elSize=elements[i][sizeName];var prop=transformRules.widgetPropertyTranslations[elements[i].$86d.controlName];if(prop!=null&&prop.sloppyEdgeControl&&prop.estimateControlSize!=null){var cs=prop.estimateControlSize(elements[i]);elSize=cs[sizeName];elements[i][sizeName]=elSize}
var ac=null;for(var j=0;j<res.length;j++){var minOverlap=Math.min(elSize/ 4,(res[j][sizeName])/4);if((elements[i][minName]+minOverlap)>=res[j][minName]&&(elements[i][minName]+minOverlap)<(res[j][minName]+res[j][sizeName]))
{ac=res[j];break}}
if(ac!=null){ac.children.add(elements[i]);if(elements[i][minName]<ac[minName]||(elements[i][minName]+elSize>ac[minName]+ac[sizeName])){ac[minName]=Math.min(elements[i][minName],ac[minName]);ac[sizeName]=elements[i][minName]+elSize-ac[minName];for(var j=0;j<res.length;j++){var minOverlap=Math.min(ac[sizeName]/4,res[j][sizeName]/4);if(res[j]!=ac&&(ac[minName]+minOverlap)<(res[j][minName]+res[j][sizeName])&&(ac[minName]+ac[sizeName])>(res[j][minName]+minOverlap))
{ac.children.addList(res[j].children);if(ac[minName]>res[j][minName]){ac[minName]=res[j][minName]}
if(ac[minName]+ac[sizeName]<res[j][minName]+res[j][sizeName]){ac[sizeName]=res[j][minName]+res[j][sizeName]-ac[minName]}
res.removeAt(j);j--}}}}else{var container={children:[elements[i]]};container[minName]=elements[i][minName];container[sizeName]=elSize;res.add(container)}}
return res}
,isc.A.handleElementsOverlap=function isc_BMMLImporter_handleElementsOverlap(_1){for(var i=0;i<_1.length;i++){for(var j=i+1;j<_1.length;j++){var _4=_1[i];var _5=_1[j];if(_4.left<(_5.left+_5.width)&&(_4.left+_4.width)>_5.left&&_4.top<(_5.top+_5.height)&&(_4.top+_4.height)>_5.top)
{var _6=Math.abs(_4.top+_4.height-_5.top);var _7=Math.abs(_4.left+_4.width-_5.left);if(_6>0&&_6<this.maxControlOverlap){_4.height-=_6+1;if(_4._constructor=="DynamicForm"&&_4.items!=null){for(var k=0;k<_4.items.length;k++){_4.items[k].height=Math.min(_4.items[k].height,_4.height)}}}
if(_7>0&&_7<this.maxControlOverlap){_4.width-=_7+1;if(_4._constructor=="DynamicForm"&&_4.items!=null){for(var k=0;k<_4.items.length;k++){_4.items[k].width=Math.min(_4.items[k].width,_4.width)}}}}}}}
,isc.A.processFormsHeuristic=function isc_BMMLImporter_processFormsHeuristic(_1,_2){var _3=[];for(var i=0;i<_2.length;i++){var c=_2[i];if(this.isFormsOnlyContainer(c)){_3.add(c)}}
var _6=[];for(var i=0;i<_2.length;i++){var c=_2[i];if(_3.contains(c)){continue}
var _7=-1;var _8=-1;for(var j=0;j<c.contained.length;j++){var _10=(j==(c.contained.length-1));if((c.contained[j]._constructor=="DynamicForm"&&c.contained[j].items!=null)||(c.contained[j]._constructor!="DynamicForm"&&_3.contains(c.contained[j])))
{if(_7<0){_7=j}
_8=j}else{_10=true}
if(_10&&_7>=0){if(_7!=_8){_6.add({container:c,startInd:_7,endInd:_8});for(var k=_7;k<=_8;k++){_3.remove(c.contained[k]);var _12=this.getAllChildItems(c.contained[k],true);for(var _13=0;_13<_12.length;_13++){if(_12[_13].contained!=null){_3.remove(_12[_13])}}}}
_7=-1;_8=-1}}}
for(var i=0;i<_3.length;i++){var _14=_3[i];for(var j=0;j<_3.length;j++){if(_3[j].contained.contains(_3[i])){_3.removeAt(i);i--;break}}}
for(var i=0;i<_3.length;i++){var _15=this.getAllChildItems(_3[i],true)
if(_15.length<=1){continue}
var _16=this.combineItemsIntoAForm(_15);var _17=transformRules.widgetPropertyTranslations[_3[i].$86d.controlName];_16.left=_16.absX-_3[i].absX-_17.getLeftMargin(_3[i]);_16.top=_16.absY-_3[i].absY-_17.getTopMargin(_3[i]);_16.$86d={};_16.ID="f_"+i;_3[i].contained=[_16];_1.addAt(_16,_1.indexOf(_3[i]));for(var j=0;j<_15.length;j++){_1.remove(_15[j]);_2.remove(_15[j])}}
for(var i=0;i<_6.length;i++){var _15=[];for(var j=_6[i].startInd;j<=_6[i].endInd;j++){if(_6[i].container.contained[j].contained==null){_15.add(_6[i].container.contained[j])}else{_15.addList(this.getAllChildItems(_6[i].container.contained[j],true))}}
if(_15.length<=1){continue}
var _16=this.combineItemsIntoAForm(_15);_16.left=_6[i].container.contained[_6[i].startInd].left;_16.top=_6[i].container.contained[_6[i].startInd].top;_16.$86d={};_16.ID="pf_"+i;if(_6[i].container.contained[_6[i].endInd].extraSpace!=null){_16.extraSpace=_6[i].container.contained[_6[i].endInd].extraSpace}
for(var j=_6[i].endInd;j>=_6[i].startInd;j--){_1.remove(_6[i].container.contained[j]);_6[i].container.contained.removeAt(j)};_6[i].container.contained.addAt(_16,_6[i].startInd);_1.addAt(_16,_1.indexOf(_6[i].container));for(var j=0;j<_15.length;j++){_1.remove(_15[j]);_2.remove(_15[j])}}
for(var i=0;i<_1.length;i++){if(_1[i]._constructor=="DynamicForm"&&_1[i].items!=null&&_1[i].items.length==1&&_1[i].items[0]._constructor=="ButtonItem")
{var _18=_1[i].items[0];_18.left=_1[i].left;_18.top=_1[i].top;_18._constructor="Button";delete _18.startRow;delete _18.endRow;for(var _19 in _1[i]){if(_19!="ID"&&_19!="$86d"){delete _1[i][_19]}}
for(var _19 in _18){_1[i][_19]=_18[_19]}}}
return this.processValuesManagers(_1,_2)}
,isc.A.isFormsOnlyContainer=function isc_BMMLImporter_isFormsOnlyContainer(_1){var _2=this.getAllChildItems(_1,true)
if(_2.length==0){return false}
for(var j=0;j<_2.length;j++){if(_2[j]._constructor!="DynamicForm"&&_2[j]._constructor!="HStack"&&_2[j]._constructor!="VStack"&&_2[j]._constructor!="HLayout"&&_2[j]._constructor!="VLayout")
{return false}
if(_2[j]._constructor=="DynamicForm"&&_2[j].items==null){return false}}
return true}
,isc.A.combineItemsIntoAForm=function isc_BMMLImporter_combineItemsIntoAForm(_1){var _2=[];for(var j=0;j<_1.length;j++){if(_1[j]._constructor=="DynamicForm"&&_1[j].items!=null){var x=_1[j].absX;var y=_1[j].absY;var _6=_1[j].orientation=="horizontal";for(var k=0;k<_1[j].items.length;k++){var _8=_1[j].items[k];_8.$86q={x:x,y:y,width:_8.width!=null?_8.width:_1[j].width,height:_8.height!=null?_8.height:22};if(_8.title!=null&&_8._constructor!="ButtonItem"&&_8._constructor!="CheckboxItem"&&_8._constructor!="RadioItem")
{if(_8.titleOrientation=="top"){_8.$86q.height+=17}else{_8.$86q.x+=_1[j].titleWidth;_8.titleWidth=_1[j].titleWidth}}
if(_6){x+=_8.$86q.width}else{y+=_8.$86q.height}
_2.add(_8)}}}
var _9={_constructor:"DynamicForm",cellPadding:0,items:[]}
var _10=10000;var _11=10000;for(var j=0;j<_2.length;j++){_10=Math.min(_10,_2[j].$86q.x);_11=Math.min(_11,_2[j].$86q.y)}
_9.absX=_10;_9.absY=_11;var _12=0;var _13=0;var _14=[];var _15=[];for(var j=0;j<_2.length;j++){_2[j].$86q.x-=_10;_2[j].$86q.y-=_11;_12=Math.max(_12,_2[j].$86q.x+_2[j].$86q.width);_13=Math.max(_13,_2[j].$86q.y+_2[j].$86q.height);if(!_14.contains(_2[j].$86q.x)){_14.add(_2[j].$86q.x)}
if(!_15.contains(_2[j].$86q.y)){_15.add(_2[j].$86q.y)}}
_14.sort(function(_30,_31){return _30-_31});_15.sort(function(_30,_31){return _30-_31});for(var i=0;i<_14.length-1;i++){if(_14[i+1]-_14[i]<this.formsGridCellWidth){for(var j=0;j<_2.length;j++){if(_2[j].$86q.x==_14[i+1]){_2[j].$86q.width+=(_14[i+1]-_14[i]);_2[j].$86q.x=_14[i]}}
_15.removeAt(i+1);i--}}
for(var i=0;i<_15.length-1;i++){if(_15[i+1]-_15[i]<this.formsGridCellHeight){for(var j=0;j<_2.length;j++){if(_2[j].$86q.y==_15[i+1]){_2[j].$86q.height+=(_15[i+1]-_15[i]);_2[j].$86q.y=_15[i]}}
_15.removeAt(i+1);i--}}
var _17=[];for(var _18=0;_18<_15.length;_18++){var _19=[];_17.add(_19);for(var _20=0;_20<_14.length;_20++){_19.add(null)}}
for(var j=0;j<_2.length;j++){var _8=_2[j];var _21=0;var _22=0;for(var _18=0;_18<_15.length;_18++){if(_8.$86q.y>=_15[_18]){_21=_18;_22=_18}
if((_8.$86q.y+_8.$86q.height)<=_15[_18]){break}
_22=_18}
var _23=0;var _24=0;for(var _20=0;_20<_14.length;_20++){if(_8.$86q.x>=_14[_20]){_23=_20;_24=_20}
if((_8.$86q.x+_8.$86q.width)<=_14[_20]){break}
_24=_20}
if(_24-_23>=1){_8.colSpan=_24-_23+1}
if(_22-_21>=1){_8.rowSpan=_22-_21+1}
delete _8.$86q;for(var _20=_23;_20<=_24;_20++){for(var _18=_21;_18<=_22;_18++){if(_17[_18][_20]!=null){if(_20>0&&_17[_18][_20]==_17[_18][_20-1]){_17[_18][_20].colSpan--;if(_17[_18][_20].colSpan==1){delete _17[_18][_20].colSpan}}else if(_18>0&&_17[_18][_20]==_17[_18-1][_20]){_17[_18][_20].rowSpan--;if(_17[_18][_20].rowSpan==1){delete _17[_18][_20].rowSpan}}}
_17[_18][_20]=_8;if(_8.titleWidth!=null){var _25=_20-1;var _26=0;while(_25>=0&&_17[_18][_25]==null){_17[_18][_25]=_8;_26++;_25--}
if(_26>1){_8.titleColSpan=_26}
if(_26>0){delete _8.titleWidth}}}}}
for(var _18=0;_18<_15.length;_18++){for(var _20=0;_20<_14.length;_20++){if(_17[_18][_20]==null){if(_18!=0&&_17[_18-1][_20]._constructor=="SpacerItem"){_17[_18][_20]=_17[_18-1][_20];if(_17[_18][_20].rowSpan==null){_17[_18][_20].rowSpan=2}else{_17[_18][_20].rowSpan++}}else{if(_20>0&&_17[_18][_20-1]._constructor=="SpacerItem"){if(_17[_18][_20-1].colSpan==null){_17[_18][_20-1].colSpan=2}else{_17[_18][_20-1].colSpan++}
_17[_18][_20]=_17[_18][_20-1]}else{_17[_18][_20]={_constructor:"SpacerItem"};_9.items.add(_17[_18][_20])}}}else if(!_9.items.contains(_17[_18][_20])){_9.items.add(_17[_18][_20])}
if(_17[_18][_20].rowSpan==null&&_18<(_15.length-1)){_17[_18][_20].cellHeight=_15[_18+1]-_15[_18]}}
for(var i=_9.items.length-1;i>=0;i--){if(_9.items[i]._constructor=="SpacerItem"){_9.items.removeAt(i);if(_18!=(_15.length-1)){_9.items[_9.items.length-1].endRow=true}}else{break}}}
var _27=[];for(var _20=0;_20<_14.length;_20++){var _28=0;for(var _18=0;_18<_15.length;_18++){if(_17[_18][_20].titleWidth!=null){if(_20==0){_28=Math.max(_28,_17[_18][_20].titleWidth)}else{tw=_14[_20]-_14[_20-1]-_17[_18][_20-1].width;_28=Math.max(_28,tw)}}}
if(_28>0){if(_20!=0){_27[_27.length-1]-=_28}else{_9.absX-=_28}
for(var _18=0;_18<_15.length;_18++){if(_17[_18][_20].titleWidth==null){if(_17[_18][_20].colSpan==null){_17[_18][_20].colSpan=2}else{_17[_18][_20].colSpan++}}}
_27.add(_28)}
if(_20==_14.length-1){_27.add(_12-_14[_20])}else{_27.add(_14[_20+1]-_14[_20])}}
for(var i=0;i<_2.length;i++){delete _2[i].titleWidth}
var _29="";_9.width=0;for(var j=0;j<_27.length;j++){_29+=_27[j];_9.width+=_27[j];if(j!=_27.length-1){_29+=","}}
_9.colWidths=_29;_9.numCols=_27.length;_9.height=_13;return _9}
,isc.A.removeExtraContainers=function isc_BMMLImporter_removeExtraContainers(_1,_2){var _3;do{_3=false;for(var i=0;i<_2.length;i++){if(_2[i].contained.length==1&&(_2[i]._constructor=="HStack"||_2[i]._constructor=="HLayout"||_2[i]._constructor=="VStack"||_2[i]._constructor=="VLayout"))
{var _5=true;if(_2[i].overflow!=null&&_2[i].contained.length==1){var _6=_2[i].contained[0];_5=_6._constructor=="ListGrid"}
if(_5){for(var j=0;j<_2.length;j++){var _8=_2[j].contained.indexOf(_2[i]);if(_8>=0){var _9=transformRules.widgetPropertyTranslations[_2[i].$86d.controlName];if(_2[i].top){_2[i].contained[0].top+=_2[i].top}
if(_2[i].left){_2[i].contained[0].left+=_2[i].left}
_2[i].contained[0].extraSpace=_2[j].contained[_8].extraSpace;_2[j].contained[_8]=_2[i].contained[0];_1.remove(_2[i]);_2.removeAt(i);i--;_3=true
break}}}}}}while(_3)}
,isc.A.processValuesManagers=function isc_BMMLImporter_processValuesManagers(_1,_2){for(var i=0;i<_2.length;i++){if(_2[i]._constructor!="HStack"&&_2[i]._constructor!="VStack"&&_2[i]._constructor!="HLayout"&&_2[i]._constructor!="VLayout"&&_2[i]._constructor!="DynamicForm")
{var _4=this.findDynamicFormsRecursively(_2[i]);if(_4.length>1){var _5={_constructor:"ValuesManager",ID:"vm_"+i};for(var j=0;j<_4.length;j++){_4[j].valuesManager=_5.ID}
_1.addAt(_5,0)}
var _7=[];for(var j=0;j<_4.length;j++){_7.addList(_4[j].items)}
for(var j=0;j<_7.length;j++){var _8=_7[j];if(_8.title!=null){var _9=_8.title.trim().replace(/\\r/g,"_").replace(/[^a-zA-Z0-9_]/g,"_");if(_9.charAt(0)>='0'&&_9.charAt(0)<='9'){_9='_'+_9}
var _10=_9;var _11=0;do{var _12=false;for(var k=0;k<_7.length;k++){if(_7[k].name==_10){_11++;_10=_9+_11;_12=true;break}}}while(_12);_8.name=_10}}}}
return _1}
,isc.A.findDynamicFormsRecursively=function isc_BMMLImporter_findDynamicFormsRecursively(_1){var _2=[];for(var i=0;i<_1.contained.length;i++){var c=_1.contained[i];if(c._constructor=="DynamicForm"&&c.items!=null){_2.add(c)}
if(c._constructor=="HStack"||c._constructor=="VStack"||c._constructor=="HLayout"||c._constructor=="VLayout"||(c._constructor=="DynamicForm"&&c.items==null))
{_2.addAll(this.findDynamicFormsRecursively(c))}}
return _2}
,isc.A.processAddingToContainersHeuristic=function isc_BMMLImporter_processAddingToContainersHeuristic(_1,_2){this.cleanZIndexParam(_1,_2);for(var i=0;i<_2.length;i++){this.processRemoveWidths(_1,_2,_2[i]);var _4=transformRules.widgetPropertyTranslations[_2[i].$86d.controlName];var _5=null;if(_2[i].markupContained!=null&&_2[i].markupContained.length>0){_5={_constructor:"VStack",ID:"widgets_container_"+i,position:"absolute",top:0,autoDraw:false,width:"100%",height:"100%",zIndex:_2[i].zIndex,members:[]};var _6={_constructor:"Canvas",height:"100%",width:"100%",autoDraw:false,children:[{_constructor:"Canvas",ref:_5.ID}]}
for(var j=0;j<_2[i].markupContained.length;j++){_2[i].markupContained[j].position="absolute";_6.children.add({_constructor:"Canvas",ref:_2[i].markupContained[j].ID})}
_4.addChild(_2[i],_6,_1);_1.addAt(_5,_1.indexOf(_2[i]))}
var _8=_2[i];this.processLayoutMargin(_1,_2,_8,_5);for(var j=0;j<_8.contained.length;j++){if(_8.contained.length==1&&(_8._constructor=="TabSet"||_8._constructor=="SectionStack")&&_8.verticalScrollBar!=null&&_8.contained[0]._constructor=="VStack")
{_8.contained[0]._constructor="VLayout";_8.contained[0].overflow="auto";delete _8.verticalScrollBar}
_8.contained[j].autoDraw="false";if(_5!=null){_5.members.add({_constructor:"Canvas",ref:_8.contained[j].ID})}else{_4.addChild(_2[i],{_constructor:"Canvas",ref:_8.contained[j].ID},_1)}}
if(_8.headerContained!=null){_8.headerContained.sort(function(_14,_15){return _14.control.left-_15.control.left});for(var j=0;j<_8.headerContained.length;j++){if(_8.headerContained[j].control.$86d.controlName=="com.balsamiq.mockups::VSplitter"||_8.headerContained[j].control.$86d.controlName=="com.balsamiq.mockups::VRule")
{_8.headerContained[j-1].control.showResizeBar=true;_1.remove(_8.headerContained[j].control);_8.headerContained.removeAt(j);j--;continue}
delete _8.headerContained[j].control.height;delete _8.headerContained[j].control.zIndex;delete _8.headerContained[j].control.top;delete _8.headerContained[j].control.left;_8.headerContained[j].control.autoDraw="false";_4.addControl(_8,{controlAreaName:_8.headerContained[j].controlAreaName,control:{_constructor:"Canvas",ref:_8.headerContained[j].control.ID}})}}
if(_8._constructor!="DynamicForm"&&(_8.markupContained==null||_8.markupContained.length==0))
{for(var j=0;j<_8.contained.length;j++){delete _8.contained[j].left;delete _8.contained[j].top;if(_8.contained[j]._constructor=="DynamicForm"&&_8.contained[j].items!=null)
{for(var k=0;k<_8.contained[j].items.length;k++){var _10=_8.contained[j].items[k];delete _10.left;delete _10.top;if(!this.tallFormItems.contains(_10._constructor)&&("SelectItem"!=_10._constructor||_10.multipleAppearance!="grid"))
{delete _10.height}}}}}
if(_8.fake){if(_8.layoutLeftMargin==null){_8.layoutLeftMargin=0}
if(_8.layoutTopMargin==null){_8.layoutTopMargin=0}
if(_8.contained.length==1){_8.contained[0].left=_8.left+_8.layoutLeftMargin;_8.contained[0].top=_8.top+_8.layoutTopMargin;delete _8.contained[0].autoDraw;_1.remove(_8)}else{_8.left=_8.layoutLeftMargin;_8.top=_8.layoutTopMargin;delete _8.layoutLeftMargin;delete _8.layoutTopMargin;delete _8.fake}}}
if(this.fillSpace){var _11=null;for(var i=0;i<_2.length;i++){var _12=true;for(var j=0;j<_2.length;j++){if(_2[j].contained.contains(_2[i])){_12=false;break}}
if(_12){if(_11!=null){_11=null;break}else{_11=_2[i]}}}
var _13=["HStack","HLayout","VStack","VLayout"];if(_11!=null&&(_13.contains(_11._constructor)||"SectionStack"==_11._constructor||((_11._constructor=="Window"||_11._constructor=="TabSet"||_11._constructor=="Canvas")&&_11.contained.length==1&&_13.contains(_11.contained[0]._constructor)&&((_11.contained[0].width==null||_11.contained[0].width=="100%")&&(_11.contained[0].height==null||_11.contained[0].height=="100%")))))
{_11.width="100%";_11.height="100%";delete _11.left;delete _11.top}}
for(var i=0;i<_2.length;i++){delete _2[i].contained;delete _2[i].headerContained;delete _2[i].markupContained}
return _1}
,isc.A.cleanZIndexParam=function isc_BMMLImporter_cleanZIndexParam(_1,_2){var _3=this;var _4=function(_10,_9){var _11=_3.getAllChildItems(_10);for(var j=0;j<_11.length;j++){var _12=_11[j];var _13=_12.width;if(_13==null&&_12.$86d!=null){_13=_12.$86d.measuredWidth}
var _14=_12.height;if(_14==null&&_12.$86d!=null){_14=_12.$86d.measuredHeight}
if(_14!=null&&_13!=null&&_12.absX!=null&&_12.absY!=null){if(_9.absX<(_12.absX+_13)&&(_9.absX+_9.width)>_12.absX&&_9.absY<(_12.absY+_14)&&(_9.absY+_9.height)>_12.absY)
{_9.doNotRemoveIndex=true}}}
if(_9.doNotRemoveIndex){delete _9.doNotRemoveIndex}else{delete _9.zIndex}}
for(var i=0;i<_2.length;i++){var _6=true;for(var j=0;j<_2.length;j++){if(_2[j].contained!=null&&_2[j].contained.contains(_2[i]))
{_6=false;break}}
if(_6)delete _2[i].zIndex;if(_2[i].markupContained!=null){for(var k=0;k<_2[i].markupContained.length;k++){var _9=_2[i].markupContained[k];_4(_2[i],_9)}}
for(var j=0;j<_2[i].contained.length;j++){if(_2[i].children==null){delete _2[i].contained[j].zIndex}else{_4(_2[i],_2[i].contained[j])}}}}
,isc.A.processLayoutMargin=function isc_BMMLImporter_processLayoutMargin(_1,_2,_3,_4){var _5=this.maxLayoutMargin+1;var _6=this.maxLayoutMargin+1;var _7=this.maxLayoutMargin+1;var _8=_3._constructor=="HStack"||_3._constructor=="HLayout";var _9=this.getControlHeightUsingItsParents(_2,_3);var _10=this.getControlWidthUsingItsParents(_2,_3);for(var j=0;j<_3.contained.length;j++){var c=_3.contained[j];if(_8){if(j==0&&c.left!=null){_5=Math.min(_5,c.left)}
if(c.top!=null){_6=Math.min(_6,c.top)}
if(j==(_3.contained.length-1)&&c.left!=null&&_10!=null&&c.width!=null){_7=Math.min(_7,(_10-c.left-c.width))}}else{if(c.left!=null){_5=Math.min(_5,c.left)}
if(j==0&&c.top!=null){_6=Math.min(_6,c.top)}
if(c.left!=null&&_10!=null&&c.width!=null){_7=Math.min(_7,(_10-c.left-c.width))}}}
for(var j=0;j<_3.contained.length;j++){var c=_3.contained[j];if(this.additionalLayouts.contains(c._constructor)){var _13=0;var _14=0;var _15=0;if(_8){if(j==0&&c.left!=null){_13=c.left-_5}
if(c.top!=null){_14=c.top-_6}
if(j==(_3.contained.length-1)&&c.left!=null&&_10!=null&&c.width!=null){_15=_10-c.left-c.width-_7}}else{if(c.left!=null){_13=c.left-_5}
if(j==0&&c.top!=null){_14=c.top-_6}
if(c.left!=null&&_10!=null&&c.width!=null){_15=_10-c.left-c.width-_7}}
if(_13>0&&c.layoutLeftMargin==null)c.layoutLeftMargin=_13;if(_14>0&&c.layoutTopMargin==null)c.layoutTopMargin=_14;if(_15>0&&c.layoutRightMargin==null)c.layoutRightMargin=_15}}
if(_3._constructor=="SectionStack"&&((_5>0&&_5<=this.maxLayoutMargin)||(_6>0&&_6<=this.maxLayoutMargin)||(_7>0&&_7<=this.maxLayoutMargin)||(_3.membersMargin!=null)))
{var c={ID:_3.ID+"$856",_constructor:"VStack",autoDraw:false,contained:_3.contained,$86d:{controlName:"Stack"}};_2.addAt(c,_2.indexOf(_3)+1);_1.addAt(c,_1.indexOf(_3));if(_3.membersMargin){c.membersMargin=_3.membersMargin;delete _3.membersMargin}
_3.contained=[c]}
if((_5>0&&_5<=this.maxLayoutMargin)||(_6>0&&_6<=this.maxLayoutMargin)||(_7>0&&_7<=this.maxLayoutMargin))
{var c=null;if(_4!=null){c=_4}else if(_3._constructor=="Window"){c={};_3.bodyDefaults=c}else if(_3._constructor=="SectionStack"){c=_3.contained[0]}else{c=_3}
if(c!=null){if(_3.$86i==null){_3.$86i={}}
_3.$86i.layoutContainer=c;if(c._constructor=="DynamicForm"){var _16=Math.round((_5+_6)/2);var _17=10;if(Math.abs(_6-_16)<_17&&Math.abs(_5-_16)<_17&&(_16-_7)<_17)
{c.padding=_16}}else{if(_5>0&&_5<=this.maxLayoutMargin){c.layoutLeftMargin=_5}
if(_6>0&&_6<=this.maxLayoutMargin){c.layoutTopMargin=_6}
if(_7>0&&_7<=this.maxLayoutMargin){c.layoutRightMargin=_7}}}}}
);isc.evalBoundary;isc.B.push(isc.A.processRemoveWidths=function isc_BMMLImporter_processRemoveWidths(_1,_2,_3){var _4=transformRules.widgetPropertyTranslations[_3.$86d.controlName];for(var j=0;j<_3.contained.length;j++){var _6=_3.contained[j];var _7=null;var _8=null;var _9=this.getControlWidthUsingItsParents(_1,_3);if(_6.left<=this.stackContainerFillInset&&(_6.left+_6.width)>=(_9-this.stackContainerFillInset))
{_6.$86d.fullWidth=true;_6.$86d.containerName=_3._constructor;_7=true}
var _10=this.getControlHeightUsingItsParents(_1,_3);if(_6.top<=this.stackContainerFillInset&&((_6.top+_6.height)>=(_10-this.stackContainerFillInset)))
{_6.$86d.fullHeight=true;_8=true}
if((_3._constructor=="TabSet"||_3._constructor=="Window"||_3._constructor=="SectionStack"||_3._constructor=="VStack"||_3._constructor=="VLayout")&&_6.width!=null)
{if(_6.left<=this.stackContainerFillInset){_6.layoutAlign="left"}else if(_6.left+_6.width>=(_3.width-this.stackContainerFillInset-_4.getLeftMargin(_3)
-_4.getRightMargin(_3)))
{_6.layoutAlign="right"}else if(Math.abs(_6.left+_6.width/ 2-
(_3.width-_4.getLeftMargin(_3)
-_4.getRightMargin(_3))/2)<=this.stackContainerFillInset)
{_6.layoutAlign="center"}}else if((_3._constructor=="HStack"||_3._constructor=="HLayout")&&_6.height!=null)
{if(_6.top<=this.stackContainerFillInset){_6.layoutAlign="top"}else if(_6.top+_6.height>=(_3.height-this.stackContainerFillInset-_4.getTopMargin(_3)
-_4.getBottomMargin(_3)))
{_6.layoutAlign="bottom"}else if(Math.abs(_6.top+_6.height/ 2-
(_3.height-_4.getTopMargin(_3)
-_4.getBottomMargin(_3))/2)<this.stackContainerFillInset)
{_6.layoutAlign="center"}}
if(_7&&_8&&_3.contained.length>1){this.processSnapToHeuristic(_1,_3,_6);break}}}
,isc.A.processSnapToHeuristic=function isc_BMMLImporter_processSnapToHeuristic(_1,_2,_3){var _4=5;for(var i=0;i<_2.contained.length;i++){var _6=_2.contained[i];if(_6!=_3){if(_6.width!=null){var _7=this.getControlWidthUsingItsParents(_1,_2);if(Math.abs(_7-_6.width)<=_4*2){}else if(Math.abs(_7-(_6.left+_6.width))<=_4){_6.snapToHor="R";delete _6.left}else if(Math.abs(_7/ 2-(_6.left+_6.width/ 2))<=_4){_6.snapToHor="C";delete _6.left}else if(_6.left<=_4){_6.snapToHor="L";delete _6.left}}
if(_6.height!=null){var _8=this.getControlHeightUsingItsParents(_1,_2);if(Math.abs(_8-_6.height)<=_4*2){}else if(Math.abs(_8-(_6.top+_6.height))<=_4){_6.snapToVer="B";delete _6.top}else if(Math.abs(_8/ 2-(_6.top+_6.height/ 2))<=_4){_6.snapToVer="C";delete _6.top}else if(_6.top<=_4){_6.snapToVer="T";delete _6.top}}
var _9="";if(_6.snapToVer!=null){_9+=_6.snapToVer;delete _6.snapToVer;delete _6.layoutTopMargin}
if(_6.snapToHor!=null){if(_6.snapToVer=="C"){_9=_6.snapToHor}else{_9+=_6.snapToHor}
delete _6.snapToHor;delete _6.layoutLeftMargin}
if(_2.markupContained==null){_2.markupContained=[]}
if(_9!=null&&_9!=""){_6.snapTo=_9;_2.markupContained.add(_6);_2.contained.removeAt(i);i--}else{_2.markupContained.add(_6);_2.contained.removeAt(i);i--}}}
return _1}
,isc.A.getControlHeightUsingItsParents=function isc_BMMLImporter_getControlHeightUsingItsParents(_1,_2){var _3=_2.height;if(_3==null){var _4=this.getParent(_1,_2);while(_4!=null&&_4.height==null){_4=this.getParent(_1,_4)}
if(_4!=null){var _5=transformRules.widgetPropertyTranslations[_4.$86d.controlName];_3=_4.height-_5.getTopMargin(_4)-_5.getBottomMargin(_4)}}else{var _5=transformRules.widgetPropertyTranslations[_2.$86d.controlName];if(_5.getTopMargin!=null&&_5.getBottomMargin!=null){_3=_2.height-_5.getTopMargin(_2)-_5.getBottomMargin(_2)}}
return _3}
,isc.A.getControlWidthUsingItsParents=function isc_BMMLImporter_getControlWidthUsingItsParents(_1,_2){var _3=_2.width;if(_3==null){var _4=this.getParent(_1,_2);while(_4!=null&&_4.width==null){_4=this.getParent(_1,_4)}
if(_4!=null){var _5=transformRules.widgetPropertyTranslations[_4.$86d.controlName];_3=_4.width-_5.getLeftMargin(_4)-_5.getRightMargin(_4)}}else{var _5=transformRules.widgetPropertyTranslations[_2.$86d.controlName];if(_5.getLeftMargin!=null&&_5.getRightMargin!=null){_3=_2.width-_5.getLeftMargin(_2)-_5.getRightMargin(_2)}}
return _3}
,isc.A.getParent=function isc_BMMLImporter_getParent(_1,_2){for(var i=0;i<_1.length;i++){if(_1[i].contained!=null&&_1[i].contained.contains(_2)){return _1[i]}
if(_1[i].children!=null&&_1[i].children.contains(_2)){return _1[i]}}
return null}
);isc.B._maxIndex=isc.C+31;isc.ClassFactory.defineClass("BMMLImportDialog","Dialog");isc.A=isc.BMMLImportDialog.getPrototype();isc.A.showOutputField=true;isc.A.showSkinSelector=true;isc.A=isc.BMMLImportDialog.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.width=540;isc.A.height=320;isc.A.isModal=true;isc.A.title="Import Balsamiq file";isc.A.items=["autoChild:importForm"];isc.A.showToolbar=false;isc.A.importFormConstructor="DynamicForm";isc.A.importFormDefaults={numCols:3,cellPadding:6,autoDraw:false,saveOnEnter:true,titleWidth:160,useAllDataSourceFields:false,fields:[{name:"skin",editorType:"TSelectItem",width:160,title:"Skin",colSpan:2,valueMap:{Enterprise:"Enterprise",EnterpriseBlue:"Enterprise Blue",Graphite:"Graphite",Simplicity:"Simplicity",fleet:"Fleet",TreeFrog:"TreeFrog",SilverWave:"SilverWave",BlackOps:"Black Ops",SmartClient:"Stone",Cupertino:"Cupertino",standard:"Basic"}},{name:"dropMarkup",title:"Drop Markup",type:"checkbox",labelAsTitle:true,defaultValue:true,hoverWidth:200,itemHoverHTML:function(){return"If enabled, markup elements such as sticky notes and "+"strikethroughs are dropped during import."},titleHoverHTML:function(){return this.itemHoverHTML()}},{name:"trimSpace",title:"Trim Space",type:"checkbox",labelAsTitle:true,defaultValue:true,hoverWidth:200,itemHoverHTML:function(){return"If enabled, if there is empty space to the left/top of the "+"mockup, the mockup is moved to 0,0 instead.  In combination with "+"dropMarkup, this also means that a mockup with only markup "+"elements to the left/top of it will be moved to 0,0 as part of "+"importing."},titleHoverHTML:function(){return this.itemHoverHTML()}},{name:"fillSpace",title:"Fill Space",type:"checkbox",labelAsTitle:true,defaultValue:true,hoverWidth:200,itemHoverHTML:function(){return"If enabled, for a mockup where importing resulting a single "+"layout or single top-level container with a single layout within "+"it, the top-level widget will be set to 100% width and height so "+"that it fills available space."},titleHoverHTML:function(){return this.itemHoverHTML()}},{name:"fileName",title:"Select file",type:"link",target:"javascript",defaultValue:"select file",canEdit:false,click:function(_1,_2){var _3=isc.LoadFileDialog.create({actionStripControls:["spacer:10","pathLabel","previousFolderButton","spacer:10","upOneLevelButton","spacer:10","refreshButton","spacer:2"],directoryListingProperties:{canEdit:false},title:"Import Balsamiq File",initialDir:"/tools/visualBuilder/workspace",rootDir:"/",loadFile:function(_5){if(_5.match(/\.(bmml)$/i)==null){isc.say("Only BMML files may be imported (must end with .bmml)");return}
var _4=this;_1.setValue("fileName",this.currentDir+"/"+_5);_3.hide()}});_3.show()}},{name:"file",title:"Upload file",type:"FileItem",width:200,hoverWidth:200,visible:false,itemHoverHTML:function(){return"Upload file to server and proceed."},titleHoverHTML:function(){return this.itemHoverHTML()}},{name:"outputFileName",title:"Output File Name",type:"TextItem",width:320,colSpan:2,hoverWidth:200,hint:"Optional",visibility:this.showOutputField,itemHoverHTML:function(){return"Writes the source code of the imported screen to the specified "+"path under webroot, in JavaScript format if the file name ends in "+"'.js', otherwise in XML format."},titleHoverHTML:function(){return this.itemHoverHTML()}},{name:"submitButton",title:"Import",type:"button",colSpan:3,align:"right",click:function(_1,_2){var v=_1.getValues();if(v.fileName=='select file'&&v.file==null){isc.warn("Select file to process.")}else{_1.creator.hide();if(v.file!=null){_1.saveData(_1.getID()+".uploadCallback(dsResponse, data)")}else{_1.creator.submit(v.fileName,v.outputFileName,v.skin,v.dropMarkup,v.trimSpace,v.fillSpace)}}}}],uploadCallback:function(_1,_2){var _3=this.dataSource;isc.logWarn("ds: "+_3);var _4=this;var _5=RPCManager.actionURL;RPCManager.actionURL="[ISOMORPHIC]/IDACall";var _6=_3.getFileURL(_2);isc.logWarn("url: "+_6);RPCManager.actionURL=_5;isc.RPCManager.sendRequest({actionURL:_6,callback:function(_9){var _7="/tools/visualBuilder/mockups/"+_2.file_filename;isc.DMI.callBuiltin({methodName:"saveFile",arguments:[_7,_9.data],callback:function(_10){var v=_4.getValues();_4.creator.submit(_7,v.outputFileName,v.skin,v.dropMarkup,v.trimSpace,v.fillSpace)}})}})}};isc.B.push(isc.A.init=function isc_BMMLImportDialog_init(){this.Super("init",arguments);if(!this.showOutputField){this.importForm.getField("outputFileName").hide()}
if(!this.showSkinSelector){this.importForm.getField("skin").hide()}
var _1=this.importForm;isc.DataSource.load("uploadedFiles",function(_2){if(_2=="uploadedFiles"){_1.setDataSource(isc.DataSource.get("uploadedFiles"),_1.fields);_1.getField("file").show()}else{_1.getField("file").hide()}})}
,isc.A.submit=function isc_BMMLImportDialog_submit(_1,_2,_3,_4,_5,_6){}
);isc.B._maxIndex=isc.C+2;isc.overwriteClass("MockupElement","Img");isc.A=isc.MockupElement.getPrototype();isc.A.controlName="MockupElement";isc.A.defaultWidth=16;isc.A.defaultHeight=28;isc.A.measuredW=-1;isc.A.measuredH=-1;isc.A=isc.MockupElement.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.initWidget=function isc_MockupElement_initWidget(){this.Super(this.$oc);var _1="/tools/visualBuilder/mockups/";var _2=this.controlName.substr(this.controlName.indexOf("::")+2,this.controlName.length)+".png";this.src=_1+_2;if(this.title!=null){this.addChild(isc.Label.create({ID:this.getID()+"_titleLabel",autoDraw:true,left:10,top:0,width:this.width,height:this.height,zIndex:this.getZIndex(true)+1,contents:this.title}))}}
);isc.B._maxIndex=isc.C+1;isc.defineClass("MockDataSource","DataSource");isc.A=isc.MockDataSource.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.mockData="md";isc.A.clientOnly=true;isc.A.cacheData=[];isc.A.fields=[];isc.A.mockDataType="grid";isc.B.push(isc.A.init=function isc_MockDataSource_init(){if(this.mockDataType=="grid"){this.fields=this.parseTableFields(this.mockData);this.cacheData=this.parseTable(this.mockData)}else if(this.mockDataType=="tree"){this.fields=[{name:"name",type:"text"}];this.cacheData=this.parseTree(this.mockData)}
return this.Super("init",arguments)}
,isc.A.parseTextWikiSymbols=function isc_MockDataSource_parseTextWikiSymbols(_1){var _2=false;var _3=false;var _4=false;var _5=[];for(var i=0;i<_1.length;i++){var c=_1.charAt(i);if(c=='\\'){if((i+1)<_1.length&&_1.charAt(i+1)=='r'){c="<br/>";i++}}else if(c=='['&&_1.indexOf("]",i+1)>0){c="<a href='#'>";_4=true}else if(c==']'){if(_4){c="</a>";_4=false}}else if(c=='*'){if(_3){_3=false;c="</b>"}else{_3=true;c="<b>"}}else if(c=='_'){if(_2){_2=false;c="</i>"}else{_2=true;c="<i>"}}
_5.push(c)}
return _5.join("")}
,isc.A.parseTableFields=function isc_MockDataSource_parseTableFields(_1){var _2=_1.split("\n")[0].split(","),_3=[];for(var j=0;j<_2.length;j++){var _5=_2[j].trim().replace(/\\r/g,"<br/>");var _6=_2[j].trim().replace(/\\r/g,"_").replace(/[^a-zA-Z0-9_]/g,"_");if(_6.charAt(0)>='0'&&_6.charAt(0)<='9'){_6='_'+_6}
var _7=_6;var _8=0;do{var _9=false;for(var i=0;i<_3.length;i++){if(_3[i].name==_7){_8++;_7=_6+_8;_9=true;break}}}while(_9);_3.add({name:_7,title:_5})}
return _3}
,isc.A.parseTable=function isc_MockDataSource_parseTable(_1){var _2=_1.split("\n");var _3=this.parseTableFields(_1);var _4=[];for(var i=1;i<_2.length;i++){var _6={};var _7=this.splitComma(_2[i]);for(var j=0;j<_3.length;j++){var _9=_7[j];if(_9==null){_9=""}
_9=_9.replace("[]","<input type='checkbox' />");_9=_9.replace("[ ]","<input type='checkbox' />");_9=_9.replace("[x]","<input type='checkbox' checked='true' />");_6[_3[j].name]=this.parseTextWikiSymbols(_9)}
_4.add(_6)}
return _4}
,isc.A.splitComma=function isc_MockDataSource_splitComma(_1){var _2=_1.split(","),_3=[];for(var i=0,_5=_2.length,_6;i<_5;++i){_6="";while(_2[i].slice(-1)=="\\"){_6+=_2[i++].slice(0,-1)+","}
_3.push(_6+_2[i])}
return _3}
,isc.A.parseTree=function isc_MockDataSource_parseTree(_1){var _2=_1.split("\n");var _3=[];var _4;var _5=0;for(var i=0;i<_2.length;i++){var _7={};var _8=_2[i].split("");var _9=0;for(var j=0;j<_8.length;j++){if(_8[j]==" "||_8[j]=="."){_9+=1}else{break}}
var _11=_2[i].substr(_9);var _12=false;if(_11.startsWith("f")||_11.startsWith(">")||_11.startsWith("[x")||_11.startsWith("[+")){_7.isFolder=true;_7[_3.openProperty]=true}else if(_11.startsWith("F")||_11.startsWith("v")||_11.startsWith("[ ")||_11.startsWith("[-")){_7.isFolder=true}
if(_11.startsWith("f")){_7.icon="/tools/visualBuilder/mockups/folder_closed.png"}else if(_11.startsWith(">")){_7.icon="/tools/visualBuilder/mockups/group_closed.png"}else if(_11.startsWith("[x")){_7.icon="/tools/visualBuilder/mockups/unchecked.png"}else if(_11.startsWith("[+")){_7.icon="/tools/visualBuilder/mockups/expander_closed.png"}else if(_11.startsWith("F")){_7.icon="/tools/visualBuilder/mockups/folder_opened.png"}else if(_11.startsWith("v")){_7.icon="/tools/visualBuilder/mockups/group_opened.png"}else if(_11.startsWith("[ ")){_7.icon="/tools/visualBuilder/mockups/checked.png"}else if(_11.startsWith("[-")){_7.icon="/tools/visualBuilder/mockups/expander_opened.png"}else if(_11.startsWith("-")||_11.startsWith("_")){_7.icon="/tools/visualBuilder/mockups/file.png"}
if(_11.startsWith("["))_11=_11.substr(3);else if(_7.isFolder)_11=_11.substr(1);else if(_11.startsWith("-")||_11.startsWith("_"))_11=_11.substr(2);_7.name=this.parseTextWikiSymbols(_11);_7.children=[];if(_9==0){_3.add(_7)}else if(_9>_5){_4.children.add(_7);_7.parent=_4}else if(_9==_5){_4.parent.children.add(_7);_7.parent=_4.parent}else{var _13=_5;var _14=_4.parent;while(_13>_9){_14=_14.parent;_13-=1}
_14.children.add(_7);_7.parent=_14}
_4=_7;_5=_9}
return _3}
);isc.B._maxIndex=isc.C+6;isc._moduleEnd=isc._VisualBuilder_end=(isc.timestamp?isc.timestamp():new Date().getTime());if(isc.Log&&isc.Log.logIsInfoEnabled('loadTime'))isc.Log.logInfo('VisualBuilder module init time: ' + (isc._moduleEnd-isc._moduleStart) + 'ms','loadTime');delete isc.definingFramework;}else{if(window.isc && isc.Log && isc.Log.logWarn)isc.Log.logWarn("Duplicate load of module 'VisualBuilder'.");}

/*

  SmartClient Ajax RIA system
  Version SC_SNAPSHOT-2011-08-02/Pro Development Only (2011-08-02)

  Copyright 2000 and beyond Isomorphic Software, Inc. All rights reserved.
  "SmartClient" is a trademark of Isomorphic Software, Inc.

  LICENSE NOTICE
     INSTALLATION OR USE OF THIS SOFTWARE INDICATES YOUR ACCEPTANCE OF
     ISOMORPHIC SOFTWARE LICENSE TERMS. If you have received this file
     without an accompanying Isomorphic Software license file, please
     contact licensing@isomorphic.com for details. Unauthorized copying and
     use of this software is a violation of international copyright law.

  DEVELOPMENT ONLY - DO NOT DEPLOY
     This software is provided for evaluation, training, and development
     purposes only. It may include supplementary components that are not
     licensed for deployment. The separate DEPLOY package for this release
     contains SmartClient components that are licensed for deployment.

  PROPRIETARY & PROTECTED MATERIAL
     This software contains proprietary materials that are protected by
     contract and intellectual property law. You are expressly prohibited
     from attempting to reverse engineer this software or modify this
     software for human readability.

  CONTACT ISOMORPHIC
     For more information regarding license rights and restrictions, or to
     report possible license violations, please contact Isomorphic Software
     by email (licensing@isomorphic.com) or web (www.isomorphic.com).

*/

