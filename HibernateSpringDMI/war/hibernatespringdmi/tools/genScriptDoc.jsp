<%@ taglib uri="/WEB-INF/iscTaglib.xml" prefix="isomorphic" %>

<%
	String version = request.getParameter("version");
	if (version == null) version = "";
	String scMode = request.getParameter("scMode");
	if (scMode == null) scMode = "false";
%>


<html>
<head>
<title>ScriptDoc Generator</title>
</head>
<body>

<!-- load ISC -->
<isomorphic:loadISC includeModules="FileLoader,DocViewer"/>

<script src=/isomorphic/system/reference/docTree.js></script>

<script>
RPCManager.actionURL = Page.getAppDir() + "genScriptDocOperations.jsp";

isc.FileLoader.loadFile("/isomorphic/system/reference/referenceDocs.js", function () {
    isc.jsdoc.init(docItems);
    isc.jsdoc.genScriptDoc({
        version: "<%out.write(version);%>",
        scMode: <%out.write(scMode);%>,
        duplicate: "most",  // "most" == "Everything except Canvas and Class",
        pickedAttrs: [  // For "most", the list of attributes defined in Class or
                        // Canvas that we explicitly want to copy down
            "appImgDir", "autoDraw", "backgroundColor", "backgroundImage", "backgroundRepeat", 
            "border", "canFocus", "canHover", "children", "contents", "disabled", "height", 
            "ID", "left", "overflow", "position", "tabIndex", "top", "visibility"
        ],
        pickedMethods: [  // As pickedAttrs, but for methods
            "addClassProperties", "addProperties", "isA", "setProperties", "Super",
            "addChild", "blur", "clear", "click", "destroy", "disable", "doubleClick", "draw", 
            "enable", "focus", "getHeight", "getID", "getLeft", "getRight", "getTop", 
            "getWidth", "hide", "hover", "initWidget", "isDisabled", "isDrawn", "isVisible", 
            "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseStillDown", "mouseUp", 
            "mouseWheel", "moveBy", "moveTo", "resizeBy", "resizeTo", "rightMouseDown", 
            "setBackgroundColor", "setBackgroundImage", "setBorder", "setDisabled", "setHeight",
            "setLeft", "setRight", "setTop", "setWidth", "show"
        ]
        
    });
});

</script>

</body>
</html>
