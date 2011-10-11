<%@ taglib uri="/WEB-INF/iscTaglib.xml" prefix="isomorphic" %>
<HTML>
<HEAD>
<TITLE>SmartClient Visual Builder</TITLE>
<LINK REL=StyleSheet HREF="visualBuilder.css" TYPE="text/css">
</HEAD>
<BODY BGCOLOR="silver" STYLE="overflow:hidden">

<%
String skin = request.getParameter("skin");
if (skin == null || "".equals(skin)) skin = "Enterprise";
%>

<!-- load Isomorphic SmartClient -->
<isomorphic:loadISC modulesDir="system/development/" skin="<%=skin%>" includeModules="DBConsole,FileLoader,DocViewer,FileBrowser,Drawing,Analytics"/> 

<SCRIPT>

</SCRIPT>

<SCRIPT>

RPCManager.actionURL = Page.getAppDir() + "vbOperations.jsp";

Page.setAppImgDir("graphics/");
Page.leaveScrollbarGap = false;

if (isc.Browser.isSafari) {
    isc.FileLoader.loadFile("referenceDocs.js", "isc.jsdoc.init(docItems)");
} else {
    isc.xml.loadXML("referenceDocs.xml", "isc.jsdoc.init(xmlDoc)");
}
// load datasource files
<isomorphic:loadSystemSchema/>
</SCRIPT>

<!-- load Tools resources -->
<isomorphic:loadModules modulesDir="system/development/" modules="Tools"/>

<!-- Additional ToolSkin to apply to Tools controls -->
<isomorphic:loadSkin skin="ToolSkin" />

<!-- load application logic -->
<isomorphic:loadModules modulesDir="system/development/" modules="VisualBuilder,SalesForce"/>

<SCRIPT>

window.builder = isc.VisualBuilder.create({
    width: "100%",
    height: "100%",
    autoDraw: true,modulesDir:'modules/',

	skin: "<%=skin%>",
    defaultApplicationMode: "edit",
    showModeSwitcher: true,
    // provide an initial top-level VLayout that is appropriate for a fullscreen app:
    // take up whole browser, never overflow
    initialComponent : {
        className:"DataView",
        defaults : {
            autoDraw: true,modulesDir:'modules/',
            overflow:"hidden",
            width: "100%",
            height: "100%"
        }
    }

});

var mockupParam = '<% out.write(request.getParameter("mockup")); %>';
if (mockupParam != "") {
    window.builder.loadBMMLMockup(mockupParam);
}

</SCRIPT>

</BODY>
</HTML>
