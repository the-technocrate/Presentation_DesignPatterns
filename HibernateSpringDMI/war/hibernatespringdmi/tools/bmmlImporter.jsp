<%@ taglib uri="/WEB-INF/iscTaglib.xml" prefix="isomorphic" %>

<%@ page import="com.isomorphic.base.Config" %>
    
<html>
<head>
<title>Standalone balsamiq mockup tool.</title>
<%
String skin = request.getParameter("skin");
if (skin == null || "".equals(skin)) skin = "EnterpriseBlue";
%>

<isomorphic:loadISC skin="<%=skin%>" includeModules="FileLoader, FileBrowser, DocViewer, VisualBuilder" />

</head>
<body>
<script>
    <isomorphic:loadSystemSchema/>
    // what file to convert
    var mockupParam = '<% out.write(request.getParameter("mockup")); %>';
    // output file to determine js or xml and file name
    var outputFileParam = '<% out.write(request.getParameter("outputFile")); %>';
    var dropMarkupParam = '<% out.write(request.getParameter("dropMarkup")); %>';
    var trimSpaceParam = '<% out.write(request.getParameter("trimSpace")); %>';
    var fillSpaceParam = '<% out.write(request.getParameter("fillSpace")); %>';
    if (mockupParam.length > 0) {
        var bmmlImporter = isc.BMMLImporter.create({
            dropMarkup: dropMarkupParam != "no",
            trimSpace:  trimSpaceParam != "no",
            fillSpace:  fillSpaceParam != "no"
        });
        // load bmml file
        isc.DMI.callBuiltin({
            methodName: "loadFile",
            arguments: [mockupParam],
            callback : function (rpcResponse) {
                isc.DataSource.load("uploadedFiles", function (res) {
                    if (res == "uploadedFiles") {
                        var ds = isc.DataSource.get("uploadedFiles");
                        var currentFileId = -1;
                        var fileName = mockupParam.substring(mockupParam.lastIndexOf("/") + 1);
                        ds.fetchData({file_filename: fileName}, function(dsResponse){
                            for (var i = 0; i < dsResponse.data.length ; i++) {
                                currentFileId = Math.max(dsResponse.data[i].id, currentFileId);
                            };
                        });
                        isc.Label.create({
                           ID: "errLabel",
                           width: 400,
                           height: 20,
                           padding: 10,
                           opacity: 0,
                           contents: "<font color='red'>Can't auto-refresh mockup - " +
                            "UploadedFilesDataSource is disabled</font>" 
                        });
                        
                        var checkForChanges = function () {
                            ds.fetchData({file_filename: fileName}, function(dsResponse){
                                if (dsResponse.status == 0) {
                                    var maxId = -1;
                                    for (var i = 0; i < dsResponse.data.length ; i++) {
                                        maxId = Math.max(dsResponse.data[i].id, maxId);
                                    };
                                    if (maxId != currentFileId) {
                                        window.location.reload()
                                    }
                                } else {
                                    errLabel.bringToFront();
                                    errLabel.animateFade(100);
                                    isc.Timer.setTimeout(function () {
                                        errLabel.animateFade(0);
                                    }, 5000);        
                                }
                            }, {willHandleError: true});
                            isc.Timer.setTimeout(checkForChanges, 10000);
                        };
                        isc.Timer.setTimeout(checkForChanges, 10000);
                    } else {
                        form.getField("file").hide();
                    }
                });
                // convert bmml to smartclient
                bmmlImporter.bmmlToXml(rpcResponse.data, function (xmlContent) {
                    if (outputFileParam) {
                        if (outputFileParam.substr(outputFileParam.length - 4) == ".xml") {
                            isc.DMI.callBuiltin({
                                methodName: "saveFile",
                                arguments: ["tools/" + outputFileParam, xmlContent]
                            });                        
                        }
                        isc.DMI.callBuiltin({
                            methodName: "xmlToJS",
                            arguments: xmlContent,
                            callback : function (rpcResponse) {
                                if (!outputFileParam || 
                                    outputFileParam.substr(outputFileParam.length - 3) == ".js") {
                                    isc.DMI.callBuiltin({
                                        methodName: "saveFile",
                                        arguments: [
                                            "tools/" + outputFileParam, 
                                            rpcResponse.data
                                        ]
                                    });
                                }
                                isc.Class.globalEvalWithCapture(rpcResponse.data, null, null,
                                                                false);      
                            }
                        });
                    } else {
                        var mockupFilePrefix = mockupParam;
                        var ind;
                        ind = mockupParam.lastIndexOf("/");
                        if (ind > 0) {
                            mockupFilePrefix = mockupFilePrefix.substring(ind);    
                        }
                        ind = mockupFilePrefix.lastIndexOf("\\");
                        if (ind > 0) {
                            mockupFilePrefix = mockupFilePrefix.substring(ind);    
                        }
                        ind = mockupFilePrefix.lastIndexOf(".");
                        if (ind > 0) {
                            mockupFilePrefix = mockupFilePrefix.substring(0, ind);    
                        }
                        isc.DMI.callBuiltin({
                            methodName: "saveFile",
                            arguments: ["tools/" + mockupFilePrefix + ".xml", xmlContent]
                        });
                        isc.DMI.callBuiltin({
                            methodName: "xmlToJS",
                            arguments: xmlContent,
                            callback : function (rpcResponse) {
                                isc.DMI.callBuiltin({
                                    methodName: "saveFile",
                                    arguments: [
                                        "tools/" + mockupFilePrefix + ".js", 
                                        rpcResponse.data
                                    ]
                                });
                               isc.Class.globalEvalWithCapture(rpcResponse.data, null, null,
                                                               false);             
                            }
                        });
                    }
                });
            }
        });
    } else {
        isc.BMMLImportDialog.create({
             submit : function (fileName, outputFileName, skin, dropMarkup, trimSpace, fillSpace) {
                var url = "bmmlImporter.jsp?mockup=" + fileName;
                if (outputFileName){ 
                    url += "&outputFile=" + outputFileName;
                }
                if (skin){ 
                    url += "&skin=" + skin;
                }
                if (!dropMarkup){ 
                    url += "&dropMarkup=no";
                }
                if (!trimSpace){ 
                    url += "&trimSpace=no";
                }
                if (!fillSpace){ 
                    url += "&fillSpace=no";
                }
                window.location = url;
            } 
        });
    }
</script>
</body>
</html>