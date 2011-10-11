/*-=-
    Isomorphic SmartClient web presentation layer
    Copyright 2000 and beyond Isomorphic Software, Inc.

    OWNERSHIP NOTICE
    Isomorphic Software owns and reserves all rights not expressly granted in this source code,
    including all intellectual property rights to the structure, sequence, and format of this code
    and to all designs, interfaces, algorithms, schema, protocols, and inventions expressed herein.

    CONFIDENTIALITY NOTICE
    The contents of this file are confidential and protected by non-disclosure agreement:
      * You may not expose this file to any person who is not bound by the same obligations.
      * You may not expose or send this file unencrypted on a public network.

    SUPPORTED INTERFACES
    Most interfaces expressed in this source code are internal and unsupported. Isomorphic supports
    only the documented behaviors of properties and methods that are marked "@visibility external"
    in this code. All other interfaces may be changed or removed without notice. The implementation
    of any supported interface may also be changed without notice.

    If you have any questions, please email <sourcecode@isomorphic.com>.

    This entire comment must accompany any portion of Isomorphic Software source code that is
    copied or moved from this file.
*/

var transformRules = {
    // a mapping from Balsamiq control name to SmartClient classname, eg, 
    classTranslations: {
        "com.balsamiq.mockups::TitleWindow": "Window",
        "com.balsamiq.mockups::TabBar": "TabSet",
        "com.balsamiq.mockups::Label": "Label",
        "com.balsamiq.mockups::Button": "ButtonItem",
        "com.balsamiq.mockups::TextInput": "TextItem",
        "com.balsamiq.mockups::ComboBox": "SelectItem",
        "com.balsamiq.mockups::NumericStepper": "SpinnerItem",
        "com.balsamiq.mockups::MenuBar": "MenuBar",
        "com.balsamiq.mockups::Accordion": "SectionStack",
        "com.balsamiq.mockups::CheckBox": "CheckboxItem",
        "com.balsamiq.mockups::DateChooser": "DateItem",
        "com.balsamiq.mockups::FormattingToolbar": "ToolStrip",
        "com.balsamiq.mockups::FieldSet": "DynamicForm",
        "com.balsamiq.mockups::Link": "LinkItem",
        "com.balsamiq.mockups::Calendar": "DateChooser",
        "com.balsamiq.mockups::VerticalTabBar": "TabSet",
        "com.balsamiq.mockups::Image": "Img",
        "com.balsamiq.mockups::DataGrid": "ListGrid",
        "com.balsamiq.mockups::Tree": "TreeGrid",
        "com.balsamiq.mockups::Switch": "CheckboxItem",
        "com.balsamiq.mockups::ButtonBar": "MenuBar",
        "com.balsamiq.mockups::Canvas": "Canvas",
        "com.balsamiq.mockups::BreadCrumbs": "HLayout",
        "com.balsamiq.mockups::TextArea": "TextAreaItem",
        "com.balsamiq.mockups::Title": "Label",
        "com.balsamiq.mockups::SubTitle": "Label",
        "com.balsamiq.mockups::MultilineButton": "Button",
        "com.balsamiq.mockups::CheckBoxGroup": "DynamicForm",
        "com.balsamiq.mockups::ColorPicker": "DynamicForm",
        "com.balsamiq.mockups::RadioButton": "RadioItem",
        "com.balsamiq.mockups::RadioButtonGroup": "DynamicForm",
        "com.balsamiq.mockups::PointyButton": "Button",
        "com.balsamiq.mockups::Paragraph": "Label",
        "com.balsamiq.mockups::HSlider": "SliderItem",
        "com.balsamiq.mockups::LinkBar": "HLayout",
        "com.balsamiq.mockups::SearchBox": "TextItem",
        "com.balsamiq.mockups::Icon": "Label",
        "com.balsamiq.mockups::IconLabel": "Label",
        "com.balsamiq.mockups::HelpButton": "Label",
        "com.balsamiq.mockups::VSlider": "SliderItem",
        "com.balsamiq.mockups::List": "SelectItem",
        "com.balsamiq.mockups::ProgressBar": "Progressbar",
        "com.balsamiq.mockups::BarChart": "FacetChart",
        "com.balsamiq.mockups::ColumnChart": "FacetChart",
        "com.balsamiq.mockups::PieChart": "FacetChart",
        "com.balsamiq.mockups::LineChart": "FacetChart",
        "com.balsamiq.mockups::Menu": "MenuButton",
        "com.balsamiq.mockups::TagCloud": "HLayout",
        "com.balsamiq.mockups::HorizontalScrollBar": "Scrollbar",
        "com.balsamiq.mockups::VerticalScrollBar": "Scrollbar"
    },
    
    // a mapping from Balsamiq property name to equivalent SmartClient property
    propertyTranslations: {
        "x": "left",
        "y": "top",
        "w": "width",
        "h": "height",
        "zOrder": "zIndex",
        "text": "title"
    },
    
    // items that can be used only as form item element of DynamicForm widget
    formItems: [ "TextItem", "TextAreaItem", "SelectItem", "SpinnerItem", "CheckboxItem", 
        "DateItem", "LinkItem", "RadioItem", "SliderItem", "ButtonItem" ],
    
    // markup items should be placed separately and have absolute positioning
    markupItems: [
        "com.balsamiq.mockups::Arrow",
        "com.balsamiq.mockups::CallOut",
        "com.balsamiq.mockups::StickyNote",
        "com.balsamiq.mockups::RoundButton",
        "com.balsamiq.mockups::HCurly",
        "com.balsamiq.mockups::RedX",
        "com.balsamiq.mockups::ScratchOut",
        "com.balsamiq.mockups::VCurly"
    ],
    
    // Tool function for parsing balsamiq text - it encoded using wiki-style
    // Replaces '\r' by '<br/>', '[text]' by text in a link, '*text*' by text in bold,
    // '_text_' by text in italic  
    parseTextWikiSymbols : function (text) {
        var italic = false;
        var bold = false;
        var link = false;
        var res = [];
        for (var i = 0; i < text.length; i++) {
            var c = text.charAt(i);
            if (c == '\\') {
                if( (i + 1) < text.length && text.charAt(i + 1) == 'r') {
                    c = "<br/>";
                    i++;    
                }
            } else if (c == '[' && text.indexOf("]",i + 1) > 0) {
                c = "<a href='#'>";
                link = true;
            } else if (c == ']') {
                if (link) {
                    c = "</a>";
                    link = false;
                }
            } else if (c == '*') {
                if (bold) {
                    bold = false;
                    c = "</b>";
                } else {
                    bold = true;
                    c = "<b>";
                }
            } else if (c == '_') {
                if (italic) {
                    italic = false;
                    c = "</i>";
                } else {
                    italic = true;
                    c = "<i>";
                }
            }
            res.push(c);
        }
        return res.join("");
    },
    
    // Helper logic for translating balsamiq controls.
    // Every control (named using balsamiq name) can have:
    // 1. balsamiqPropertyName -> smartclient property name pairs
    // 2. controlPropertiesParser function for correct parsing text in 
    //    balsamiq controlProperties tag
    // 3. getAdditionalElements function for creating additional controls or datasources
    // 4. afterInit function to add/modify properties of converted control
    // CONTAINERS PARAMETERS:
    // 5. addChild function if element is container that should add child items
    // 6. container interior params: 
    //    - the "interior" of a container means the area in which you would typically put
    //    other controls without overlapping part of the container itself.  For example, for a
    //    TitleWindow it would be the interior rect excluding the header and footer and a small
    //    amount of room for the left/right border.
    //    - leftMargin
    //    - rightMargin
    //    - topMargin
    //    - bottomMargin
    widgetPropertyTranslations: {
        // CONTAINERS
        "com.balsamiq.mockups::TitleWindow": {
            "dragger": "showResizer",
            "minimize": "showMinimizeButton",
            "close": "showCloseButton",
            "maximizeRestore": "showMaximizeButton",
            canUseMargin: false,
            getLeftMargin : function (container) {
                return 6;
            },
            getRightMargin : function (container) {
                return 6;
            },
            getTopMargin : function (container) {
                return 23;
            },
            getBottomMargin : function (container) {
                if (container.showFooter) {
                    return 20;
                } else {
                    return 4;
                }
            },
            afterInit : function (name, control) {
                if (control._specialProperties.bottomheight != null 
                    && parseInt(control._specialProperties.bottomheight)<3) {
                    control.showFooter = false;    
                } else {
                    control.showFooter = true;                    
                }
                if (control.showResizer == "true") {
                    control.canDragResize = true;
                }
            },
            // - TitleWindow: add it to Window.items 
            addChild : function (control, child) {
                if (control.items == null) {
                    control.items = [];
                }
                control.items.add(child);
            },
            // - "controls area" of Window; add as window.headerControls, after standard
            // controls but before closeButton 
            // (also minimize and maximize?)
            addControl : function (container, headerControl) {
                var controlAreaName = headerControl.controlAreaName;
                var control = headerControl.control;
                if (controlAreaName == "header") {
                    if (container.headerControls == null) {
                        container.headerControls = ["headerIcon","headerLabel","minimizeButton","maximizeButton","closeButton"];
                    }
                    container.headerControls.addAt("ref:" + control.ref, container.headerControls.length - 3);
                } else {
                    if (container.footerControls == null) {
                        container.footerControls = ["spacer", "resizer"];
                    }
                    container.footerControls.addAt("ref:" + control.ref, container.footerControls.length - 2);         
                }
            },
            getControlAreaName : function (container, control) {
                var controlY = control.top;
                if (control.height != null) {
                    controlY += control.height / 2;
                }
                if (controlY < this.getTopMargin(container)) {
                    return "header";
                } else if (container.showFooter && 
                    controlY > (container.height - this.getBottomMargin(container))) {
                    return "footer";
                }
            }
        },
        
        "com.balsamiq.mockups::TabBar": {
            "text": "tabs",
            "selectedIndex": "selectedTab",
            "position": "tabBarPosition",
            getLeftMargin : function (container) {
                return 6;
            },
            getRightMargin : function (container) {
                if (container.verticalScrollbar != null) {
                    return 14;
                }
                return 6;
            },
            getTopMargin : function (container) {
                if (container.tabBarPosition == "bottom") {
                    // 6 real pixels + 4 that we added to height
                    return 10;
                } else {
                    return 29;                    
                }
            },
            getBottomMargin : function (container) {
                if (container.tabBarPosition == "bottom") {
                    return 29;
                } else {
                    // 6 real pixels + 4 that we added to height
                    return 10;                    
                }
            },
            controlPropertiesParser : function (name, value) {
                if (name == "text") {
                    var res = [];
                    var tabNames = value.split(",");
                    for (var i = 0; i < tabNames.length; i++) {
                        res.add({
                            title: tabNames[i],
                            width: 1
                        });
                    } 
                    return res                    
                } else {
                    return value;
                }
            },
            // - TabSet: make it the tab.pane for the selected tab
            addChild : function (control, child) {
                var currIndex = control.selectedTab == null?0 :control.selectedTab; 
                var currentTab = control.tabs[currIndex];
                // - if a VStack is being added to a TabSet / SectionStack where the
                //   Balsamiq XML had the "scrollbar" attribute set, make the VStack
                //   overflow:"auto" and convert it to a VLayout
                if (currentTab.pane == null) {
                    if (child.ref) {
                        currentTab.pane = child.ref;
                    } else {
                        currentTab.pane = child;
                    }
                } else if (currentTab.pane.VStack == null && currentTab.pane.VLayout == null) {
                    var vContainer= {
                        members: [currentTab.pane, child.ref]
                    }
                    if (control.verticalScrollbar != null) {
                        currentTab.pane = {
                            VLayout: vContainer
                        }
                        vContainer.overflow = "auto";
                        delete control.verticalScrollbar;
                    } else {
                        currentTab.pane = {
                            VStack: vContainer
                        }
                    }
                    if (control.membersMargin) {
                        vContainer.membersMargin = control.membersMargin;
                        delete control.membersMargin;
                    }
                    if (control.layoutLeftMargin) {
                        vContainer.layoutLeftMargin = control.layoutLeftMargin;
                        delete control.layoutLeftMargin;
                    }
                    if (control.layoutRightMargin) {
                        vContainer.layoutRightMargin = control.layoutRightMargin;
                        delete control.layoutRightMargin;
                    }
                    if (control.layoutTopMargin) {
                        vContainer.layoutTopMargin = control.layoutTopMargin;
                        delete control.layoutTopMargin;
                    }
                } else {
                    if (currentTab.pane.VStack == null) {
                        currentTab.pane.VLayout.members.add(child.ref);
                    } else {
                        currentTab.pane.VStack.members.add(child.ref);                        
                    }
                }
            },
            // - "controls area" of TabSet: add as tabBarControls
            addControl : function (container, headerControl) {
                if (container.tabBarControls == null) {
                    container.tabBarControls = [];
                }
                container.tabBarControls.add(headerControl.control.ref);
            },
            getControlAreaName : function (container, control) {
                var controlY = control.top;
                if (control.height != null) {
                    controlY += control.height / 2;
                }
                if (controlY < this.getTopMargin(container)) {
                    return "header";
                }
            },
            afterInit : function (name, control) {
                // increase height because balsamiq header takes less space than isomorphic
                control.height = parseInt(control.height) + 4;
            }
        },
        
        "com.balsamiq.mockups::VerticalTabBar": {
            "text": "tabs",
            "selectedIndex": "selectedTab",
            "position": "tabBarPosition",
            getLeftMargin : function (container) {
                if (container.tabBarPosition == "right") {
                    return 6;
                } else {
                    return 29;                    
                }
            },
            getRightMargin : function (container) {
                if (container.tabBarPosition == "right") {
                    if (container.verticalScrollbar != null) {
                        return 44;
                    }
                    return 29;
                } else {
                    if (container.verticalScrollbar != null) {
                        return 14;
                    }
                    return 6;                    
                }
            },
            getTopMargin : function (container) {
                return 6;
            },
            getBottomMargin : function (container) {
                // 6 real pixels + 4 that we added to height
                return 10;
            },
            controlPropertiesParser : function (name, value) {
                if (name == "text") {
                    var res = [];
                    var tabNames = value.split(", ");
                    for (var i = 0; i < tabNames.length; i++) {
                        res.add({
                            title: tabNames[i],
                            width: 1
                        });
                    } 
                    return res                    
                } else {
                    return value;
                }
            },
            afterInit : function (name, control) {
                if (control.tabBarPosition == null) {
                    control.tabBarPosition = "left";                    
                }
                // increase height because balsamiq header takes less space than isomorphic
                control.height = parseInt(control.height) + 4;
            },
            addChild : function (control, child) {
                var currIndex = control.selectedTab == null?0 :control.selectedTab; 
                var currentTab = control.tabs[currIndex];
                // - if a VStack is being added to a TabSet / SectionStack where the
                //   Balsamiq XML had the "scrollbar" attribute set, make the VStack
                //   overflow:"auto" and convert it to a VLayout
                if (currentTab.pane == null) {
                    currentTab.pane = child.ref;
                } else if (currentTab.pane.VStack == null && currentTab.pane.VLayout == null) {
                    var vContainer= {
                        members: [currentTab.pane, child.ref]
                    }
                    if (control.verticalScrollbar != null) {
                        currentTab.pane = {
                            VLayout: vContainer
                        }
                        vContainer.overflow = "auto";
                        delete control.verticalScrollbar;
                    } else {
                        currentTab.pane = {
                            VStack: vContainer
                        }
                    }
                    if (control.membersMargin) {
                        vContainer.membersMargin = control.membersMargin;
                        delete control.membersMargin;
                    }
                    if (control.layoutLeftMargin) {
                        vContainer.layoutLeftMargin = control.layoutLeftMargin;
                        delete control.layoutLeftMargin;
                    }
                    if (control.layoutRightMargin) {
                        vContainer.layoutRightMargin = control.layoutRightMargin;
                        delete control.layoutRightMargin;
                    }
                    if (control.layoutTopMargin) {
                        vContainer.layoutTopMargin = control.layoutTopMargin;
                        delete control.layoutTopMargin;
                    }
                } else {
                    if (currentTab.pane.VStack == null) {
                        currentTab.pane.VLayout.members.add(child.ref);
                    } else {
                        currentTab.pane.VStack.members.add(child.ref);                        
                    }
                }
            },
            addControl : function (container, headerControl) {
                if (container.tabBarControls == null) {
                    container.tabBarControls = [];
                }
                container.tabBarControls.add(headerControl.control.ref);
            },
            getControlAreaName : function (container, control) {
                var controlX = control.left;
                if (control.width != null) {
                    controlX += control.width / 2;
                }
                if (controlX < this.getLeftMargin(control)) {
                    return "header";
                }
            }
        },
        
        "com.balsamiq.mockups::FieldSet": {
            "text": "groupTitle",
            getLeftMargin : function (container) {
                return 2;
            },
            getRightMargin : function (container) {
                return 2;                    
            },
            getTopMargin : function (container) {
                return 14;
            },
            getBottomMargin : function (container) {
                return 2;
            },
            afterInit : function (name, control) {
                control.isGroup = true;
            },
            // - Rectangle/FieldSet: add it to canvas.children 
            addChild : function (control, child, layout) {
                if (control.contained.length == 1 && child.ref != null) {
                    for (var i = 0; i < layout.length; i++) {
                        if (layout[i].ID == child.ref) {
                            // in processLayoutMargins we check for margins and determined padding
                            // if we didn't set it, that we can't move items to the form
                            if (layout[i]._constructor == "DynamicForm" && control.padding != null) {
                                if (layout[i].numCols) control.numCols = layout[i].numCols;
                                if (layout[i].colWidths) control.colWidths = layout[i].colWidths;
                                if (layout[i].valuesManager ) control.valuesManager  = layout[i].valuesManager;
                                if (layout[i].orientation ) control.orientation  = layout[i].orientation;
                                control.items = layout[i].items;
                                layout.removeAt(i);
                                return;                                    
                            }
                            break;
                        }
                    }
                }
                if (control.children == null) {
                    control.children = [];
                }
                control.children.add(child);
            }
        },
        
        "com.balsamiq.mockups::Accordion": {
            "text": "sections",
            "selectedIndex": "selectedIndex",
            sectionHeight: 26,
            getLeftMargin : function (container) {
                return 1;
            },
            getRightMargin : function (container) {
                return 1;                    
            },
            getTopMargin : function (container) {
                var sectionIndex = container._sectionIndex == null? 1: (parseInt(container._sectionIndex) + 1);
                return sectionIndex * this.sectionHeight;
            },
            getBottomMargin : function (container) {
                return 2;
            },
            controlPropertiesParser : function (name, value) {
                if (name == "text") {
                    var d = value.split("\n");
                    var res = [];
                    var c = 0;
                    for (var i = 0; i < d.length; i++) {
                        if (!d[i].trim().startsWith("-")) {
                            res[c] = {
                                title: d[i],
                                autoShow: true,
                                expanded: false,
                                ind: i
                            };
                            c++;
                        }
                    }
                    return res;                    
                } else {
                    return value;
                }
            },
            afterInit : function (name, control) {
                var sectionIndex = control.selectedIndex == null? 0: control.selectedIndex;
                for (var i = 0; i < control.sections.length; i++) {
                    if (control.sections[i].ind == sectionIndex) {
                        control._sectionIndex = i;
                    }
                    delete control.sections[i].ind;
                }
                delete control.selectedIndex;
                control.sections[control._sectionIndex].expanded = true;
            },
            // - SectionStack: add it to section.items for the expanded section
            addChild : function (container, child) {
                var currentSection =  container.sections[this.getCurrentSectionIndex(container)];
                if (currentSection.items == null) {
                    currentSection.items = [];
                }
                currentSection.items.add(child);
            },
            // - "controls area" of SectionStack: as a section.headerControls (for each
            // section where they appear)
            addControl : function (container, headerControl) {
                var controlAreaName = headerControl.controlAreaName;
                var control = headerControl.control;
                var controlSectionInd = parseInt(controlAreaName.substr(8));
                var currentSection = container.sections[controlSectionInd];
                if (currentSection.controls == null) {
                    currentSection.controls = [];
                }
                currentSection.controls.add(control);
            },
            getControlAreaName : function (container, control) {
                var controlY = control.top;
                if (control.height != null) {
                    controlY += control.height / 2;
                }
                var sectionIndex = this.getCurrentSectionIndex(container);
                var sectionsCount = container.sections.length;
                // above current section
                var bottom = 2;
                for (var i = 0; i <= sectionIndex; i++) {
                    bottom += this.sectionHeight;
                    if (controlY < bottom) {
                        return "section_" + i;
                    }
                }
                // below current section
                bottom = container.height - 2;
                for (var i = sectionsCount - 1; i > sectionIndex; i--) {
                    bottom -= this.sectionHeight;
                    if (controlY > bottom) {
                        return "section_" + i;
                    }
                }
                return null;
            },
            getCurrentSectionIndex : function (control) {
                return control._sectionIndex;
            }
        },
        
        "com.balsamiq.mockups::Canvas": {
            getLeftMargin : function (container) {
                return 2;
            },
            getRightMargin : function (container) {
                return 2;                    
            },
            getTopMargin : function (container) {
                return 2;
            },
            getBottomMargin : function (container) {
                return 2;
            },
            afterInit : function (name, control) {
                control.border = "1px solid black";
            },
            addChild : function (control, child) {
                if (control.children == null) {
                    control.children = [];
                }
                control.children.add(child);
            }
        },
        "Stack": {
            getLeftMargin : function (container) {
                return 1;
            },
            getRightMargin : function (container) {
                return 1;                    
            },
            getTopMargin : function (container) {
                return 1;
            },
            getBottomMargin : function (container) {
                return 1;
            },
            addChild : function (control, child) {
                if (control.members == null) {
                    control.members = [];
                }
                control.members.add(child);
            }
        },
        // WIDGETS
        "com.balsamiq.mockups::Label": {
            "text": "contents",
            sloppyEdgeControl: true,
            controlPropertiesParser : function (name, value) {
                if (name == 'text') {
                    return transformRules.parseTextWikiSymbols(value);
                } else {
                    return value;
                }
            },
            estimateControlSize : function (control) {
                // TODO use size property there
                return {
                    width:  Math.min(control.contents.length * 8, control.width),
                    height: control.height
                };
            }
        },
        "com.balsamiq.mockups::Button": {
            afterInit : function (name, control) {
                // startRow/endRow false should not appear on a FormItem unless it differs
                // from the default for that item.
                if (isc.ClassFactory.getClass("ButtonItem").getInstanceProperty("startRow") == true) {
                    control.startRow = false;
                }
                if (isc.ClassFactory.getClass("ButtonItem").getInstanceProperty("endRow") == true) {
                    control.endRow = false;
                }
            }
        },
        "com.balsamiq.mockups::MenuBar": {
            "text": "menus",
            controlPropertiesParser : function (name, value) {
                var res = [];
                var menuNames = value.split(", ");
                for (var i = 0; i < menuNames.length; i++) {
                    res.add({
                        title: menuNames[i]
                    });
                } 
                return res
            }
        },
        "com.balsamiq.mockups::TextInput": {
            "text": "defaultValue",
            afterInit : function (name, control) {
                control.height = 22;
            }
        },
        "com.balsamiq.mockups::TextArea": {
            "text": "defaultValue"
        },
        "com.balsamiq.mockups::NumericStepper": {
            "text": "defaultValue",
            afterInit : function (name, control) {
                control.height = 22;
            }
        },
        "com.balsamiq.mockups::ComboBox": {
            "text": "valueMap",
            controlPropertiesParser : function (name, value) {
                var d = value.split(",");
                var res = {};
                for (var i = 0; i < d.length; i++) {
                    res["cb_" + i] = d[i];
                }
                return res;
            },
            afterInit : function (name, control) {
                control.height = 22;
                if (control.valueMap.cb_0) {
                    control.defaultValue = "cb_0";                    
                }
            }
        },
        "com.balsamiq.mockups::DateChooser": {
            afterInit : function (name, control) {
                control.useTextField = "true";
                control.height = 22;
            }
        },
        "com.balsamiq.mockups::Link": {
            "text": "linkTitle"
        },
        "com.balsamiq.mockups::Image": {
            "text": "src",
            afterInit : function (name, control) {
                if (control.src != null && !control.src.trim().startsWith("http://")) {
                    control.title = control.src;
                }
                if (control.title != null ) {
                    control.showTitle = "true";
                }
            }
        },
        "com.balsamiq.mockups::ButtonBar": {
            "text": "menus",
            controlPropertiesParser : function (name, value) {
                var res = [];
                var menuNames = value.split(", ");
                for (var i = 0; i < menuNames.length; i++) {
                    res.add({
                        title: menuNames[i]
                    });
                } 
                return res
            }
        },
        "com.balsamiq.mockups::BreadCrumbs": {
            "text": "members",
            controlPropertiesParser : function (name, value) {
                var d = value.split(",");
                var res = [];
                var c = 0;
                for (var i = 0; i < d.length; i++) {
                    res.add({
                        _constructor: "Label",
                        contents: "<a href='#'>" + d[i] + "</a>"
                    });
                    if ((i + 1) < d.length) {
                        res.add({
                            _constructor: "Label",
                            contents: " > "
                        });                        
                    }
                }
                return res;
            }
        },
        "com.balsamiq.mockups::Switch": {
            "onOffState": "value",
            afterInit : function (name, control) {
                control.showTitle = false;
            },
            controlPropertiesParser : function (name, value) {
                return value == "on" ? true : false;
            }
        },
        "com.balsamiq.mockups::DataGrid": {
            "text": "dataSource",
            "verticalScrollbar": "leaveScrollbarGap",
            controlPropertiesParser : function (name, value) {
                if (name == "text") {
                    return {MockDataSource: {
                        _constructor: "MockDataSource",
                        mockData: value
                    }};
                } else {
                    return value;
                }
            },
            afterInit : function (name, control) {
                control.autoFetchData = true;
                // compute headerHeight based on rows number in titles
                var value = control.dataSource.MockDataSource.mockData;
                var vs = value.split("\n")[0].split(",");
                var maxRows = 1;
                for(var i = 0; i < vs.length; i++) {
                    maxRows = Math.max(maxRows, vs[i].split("\\r").length);
                }
                control.headerHeight = Math.max(25, 15 * maxRows);
                control.autoFitFieldWidths = true;
                control.autoFitWidthApproach = "title";
                if (control.leaveScrollbarGap == null) {
                    control.leaveScrollbarGap = false;
                }
            },
            getAdditionalElements : function (name, control) {
                var ds = control.dataSource.MockDataSource;
                ds.ID = "ds_" + control.ID;
                control.dataSource = ds.ID;
                return [ds];
            }
        },
        "com.balsamiq.mockups::Tree": {
            "text": "dataSource",
            controlPropertiesParser : function (name, value) {
                if (name == "text") {
                    return {MockDataSource:{
                        _constructor: "MockDataSource",
                        mockData: value,
                        mockDataType: "tree"
                    }};
                } else {
                    return value;
                }
            },
            afterInit : function (name, control) {
                control.autoFetchData = true;
            },
            getAdditionalElements : function (name, control) {
                var ds = control.dataSource.MockDataSource;
                ds.ID = "ds_"+control.ID;
                control.dataSource = ds.ID;
                return [ds];
            }
        },
        "com.balsamiq.mockups::Title": {
            "text": "contents",
            controlPropertiesParser : function (name, value) {
                if (name == 'text') {
                    return "<h1>" + transformRules.parseTextWikiSymbols(value) + "</h1>";
                } else {
                    return value;
                }
            }
        },
        "com.balsamiq.mockups::SubTitle": {
            "text": "contents",
            controlPropertiesParser : function (name, value) {
                if (name == 'text') {
                    return "<h2>" + transformRules.parseTextWikiSymbols(value) + "</h2>";
                } else {
                    return value;
                }
            }
        },
        "com.balsamiq.mockups::MultilineButton": {
            "text": "title",
            controlPropertiesParser : function (name, value) {
                return value.replace("\n", "<br/>");
            }
        },
        "com.balsamiq.mockups::CheckBox": {
            controlPropertiesParser : function (name, value) {
                if (name == 'text') {
                    return transformRules.parseTextWikiSymbols(value);
                } else {
                    return value;
                }
            }
        },
        "com.balsamiq.mockups::RadioButton": {
            controlPropertiesParser : function (name, value) {
                if (name == 'text') {
                    return transformRules.parseTextWikiSymbols(value);
                } else {
                    return value;
                }
            }
        },
        "com.balsamiq.mockups::CheckBoxGroup": {
            "text": "items",
            sloppyEdgeControl: true,
            controlPropertiesParser : function (name, value) {
                var d = value.split("\n");
                var res = [];
                for (var i = 0; i < d.length; i++) {
                    var cbLine = d[i];
                    var disabled = cbLine.startsWith("-") && cbLine.endsWith("-");
                    if (disabled) {
                        cbLine = cbLine.substring(1, cbLine.length-1);
                    }
                    cbLine.replace("\r", "<br/>");
                    var item;
                    if (cbLine.startsWith('[ ]')) {
                        item = {
                            _constructor: "CheckboxItem",
                            title: transformRules.parseTextWikiSymbols(cbLine.substring(3).trim())
                        }; 
                    } else if (cbLine.startsWith('[x]')) {
                        item = {
                            _constructor: "CheckboxItem",
                            title: transformRules.parseTextWikiSymbols(cbLine.substring(3).trim()),
                            value: true
                        }; 
                    } else {
                        item = {
                            _constructor: "StaticTextItem",
                            value: transformRules.parseTextWikiSymbols(cbLine)
                        }; 
                    }
                    item.disabled = disabled;
                    item.showTitle = false;
                    res.add(item);
                }
                return res;
            },
            afterInit : function (name, control) {
                control.numCols = 1;
            },
            estimateControlSize : function (control) {
                var largestWidth = 1;
                for (var i = 0; i < control.items.length; i++) {
                    largestWidth = Math.max(largestWidth, 8 * control.items[i].title.length);
                }
                return {
                    width:  Math.min((25 + largestWidth), control.width),
                    height: control.height
                };
            }
        },
        "com.balsamiq.mockups::ColorPicker": {
            "color": "color",
            afterInit : function (name, control) {
                var c = {
                    type: "color",
                    showTitle: false
                };
                if (control.color != null) {
                    c.value = "#" + parseInt(control.color, 10).toString(16);
                }
                control.fields = [c];
            }
        },
        "com.balsamiq.mockups::RadioButtonGroup": {
            "text": "items",
            sloppyEdgeControl: true,
            controlPropertiesParser : function (name, value) {
                if (name == "text") {
                    var d = value.split("\n");
                    var res = [];
                    for (var i = 0; i < d.length; i++) {
                        var cbLine = d[i];
                        var disabled = cbLine.startsWith("-") && cbLine.endsWith("-");
                        if (disabled) {
                            cbLine = cbLine.substring(1, cbLine.length-1);
                        }
                        cbLine.replace("\r","<br/>");
                        var item;
                        if (cbLine.startsWith('( )')) {
                            item = {
                                _constructor: "RadioItem",
                                title: transformRules.parseTextWikiSymbols(cbLine.substring(3).trim())
                            }; 
                        } else if (cbLine.startsWith('(o)')) {
                            item = {
                                _constructor: "RadioItem",
                                title: transformRules.parseTextWikiSymbols(cbLine.substring(3).trim()),
                                value: true
                            }; 
                        } else {
                            item = {
                                _constructor: "StaticTextItem",
                                value: transformRules.parseTextWikiSymbols(cbLine)
                            }; 
                        }
                        item.disabled = disabled;
                        item.showTitle = false;
                        res.add(item);
                    }
                    return res;
                } else {
                    return value
                }
            },
            afterInit : function (name, control) {
                control.numCols = 1;
            }
        },
        "com.balsamiq.mockups::Paragraph": {
            "text": "contents",
            controlPropertiesParser : function (name, value) {
                if (name == 'text') {
                    return transformRules.parseTextWikiSymbols(value.replace("\n", "<br/>"));
                } else {
                    return value;
                }
            }
        },
        "com.balsamiq.mockups::TagCloud": {
            "text": "contents",
            controlPropertiesParser : function (name, value) {
                if (name == 'text') {
                    return transformRules.parseTextWikiSymbols(value);
                } else {
                    return value;
                }
            }
        },
        "com.balsamiq.mockups::LinkBar": {
            "text": "members",
            controlPropertiesParser : function (name, value) {
                if (name == 'text') {
                    var d = value.split(",");
                    var res = [];
                    var c = 0;
                    for (var i = 0; i < d.length; i++) {
                        res.add({
                            _constructor: "Label",
                            contents: "<a href='#'>" + transformRules.parseTextWikiSymbols(d[i]) + "</a>",
                            width: 1
                        });
                        if ((i + 1) < d.length) {
                            res.add({
                                _constructor: "Label",
                                contents: " | ",
                                width: 1
                            });                        
                        }
                    }
                    return res;
                } else {
                    return value;
                }
            },
             afterInit : function (name, control) {
                control.membersMargin = 10;
            }
        },
        "com.balsamiq.mockups::SearchBox": {
            afterInit : function (name, control) {
                control.showPickerIcon = true;
                control.pickerIconSrc = "[SKIN]/pickers/search_picker.png";
            }
        },
        "com.balsamiq.mockups::Icon": {
            controlPropertiesParser : function (name, value) {
                var d = value.split("|");
                // TODO convert balsamiq icon to smartclient icon
                return "[SKIN]/actions/" + d[0];
            }
        },
        "com.balsamiq.mockups::IconLabel": {
            "text": "contents",
            controlPropertiesParser : function (name, value) {
                if (name == "icon") {
                    var d = value.split("|");
                    // TODO convert balsamiq icon to smartclient icon
                    return "[SKIN]/actions/" + d[0];                    
                } else {
                    return value;
                }
            }
        },
        "com.balsamiq.mockups::HelpButton": {
            afterInit : function (name, control) {
                control.icon = "[SKIN]/actions/help.png";
            }
        },
        "com.balsamiq.mockups::VSlider": {
            afterInit : function (name, control) {
                control.vertical = true;
            }
        },
        "com.balsamiq.mockups::List": {
            "text": "valueMap",
            controlPropertiesParser : function (name, value) {
                var d = value.split("\n");
                var res = {};
                for (var i = 0; i < d.length; i++) {
                    res["cb_"+i] = d[i];
                }
                return res;
            },
            afterInit : function (name, control) {
                control.multiple = true;
                control.multipleAppearance = "grid";
            }
        },
        "com.balsamiq.mockups::ProgressBar": {
            afterInit : function (name, control) {
                control.percentDone = 50;
            }
        },
        "com.balsamiq.mockups::BarChart": {
            afterInit : function (name, control) {
                control.facets = [{
                    id: "region"
                },{
                    id: "product"
                }];
                control.data = [
                    {region: "West",  product: "Cars", sales: 20},
                    {region: "North", product: "Cars", sales: 26},
                
                    {region: "West",  product: "Trucks", sales: 23},
                    {region: "North", product: "Trucks", sales: 24}
                ];
                control.valueProperty = "sales";
                control.chartType = "Bar";
                control.stacked = false;
                control.showTitle = false;
            }            
        },
        "com.balsamiq.mockups::ColumnChart": {
            afterInit : function (name, control) {
                control.facets = [{
                    id: "region"
                },{
                    id: "product"
                }];
                control.data = [
                    {region: "West",  product: "Cars", sales: 20},
                    {region: "North", product: "Cars", sales: 26},
                
                    {region: "West",  product: "Trucks", sales: 23},
                    {region: "North", product: "Trucks", sales: 24}
                ];
                control.valueProperty = "sales";
                control.chartType = "Column";
                control.stacked = false;
                control.showTitle = false;
            }
        },
        "com.balsamiq.mockups::PieChart": {
            afterInit : function (name, control) {
                control.facets = [{
                    id: "region"
                },{
                    id: "product"
                }];
                control.data = [
                    {region: "West",  product: "Cars", sales: 20},
                    {region: "North", product: "Cars", sales: 26}
                ];
                control.valueProperty = "sales";
                control.chartType = "Pie";
                control.stacked = false;
                control.showTitle = false;
            }
        },
        "com.balsamiq.mockups::LineChart": {
            afterInit : function (name, control) {
                control.facets = [{
                    id: "region"
                },{
                    id: "product"
                }];
                control.data = [
                    {region: "West",  product: "Cars", sales: 0},
                    {region: "North", product: "Cars", sales: 20},
                    {region: "East",  product: "Cars", sales: 13},
                    {region: "South", product: "Cars", sales: 32},
                
                    {region: "West",  product: "Trucks", sales: 7},
                    {region: "North", product: "Trucks", sales: 10},
                    {region: "East",  product: "Trucks", sales: 29},
                    {region: "South", product: "Trucks", sales: 22}
                    
                ];
                control.valueProperty = "sales";
                control.chartType = "Line";
                control.stacked = false;
                control.showTitle = false;
            }
        },
        "com.balsamiq.mockups::Menu": {
            "text": "menu",
            controlPropertiesParser : function (name, value) {
                if (name == 'text') {
                    var items = value.split("\n");
                    var menuItems = [];
                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        if (/^-+$/.test(item) || /^=+$/.test(item)) {
                            menuItems.add({isSeparator: true});
                        } else {
                            var itemParts = item.split(",");
                            var name = itemParts[0];
                            var menuItem = {
                                title: transformRules.parseTextWikiSymbols(itemParts[0])
                            }
                            if (itemParts.length > 1) {
                                menuItem.keyTitle = itemParts[1];
                            }
                            if (menuItem.title.endsWith(">")) {
                                menuItem.title = menuItem.title.substring(0, menuItem.title.length-1);
                                menuItem.submenu = [{}];
                            }
                            if (menuItem.title.startsWith("x") || menuItem.title.startsWith("o")) {
                                menuItem.title = menuItem.title.substring(1);
                                menuItem.checked = true;
                            }
                            if (menuItem.title.startsWith("-") && menuItem.title.endsWith("-")) {
                                menuItem.title = menuItem.title.substring(1,menuItem.title.length-1);
                                menuItem.enabled = false;
                            }
                            menuItems.add(menuItem);
                        }
                    }
                    return {
                        autoDraw: false,
                        showShadow: true,
                        shadowDepth: 10,
                        data: menuItems
                    };
                } else {
                    return value;
                }
            },
            afterInit : function (name, control) {
                delete control.height;
                control.title = "Menu";
            }
        },
        "com.balsamiq.mockups::CallOut": {
            afterInit : function (name, control) {
                if (control.title == null) {
                    control.title = "1";
                }
            }
        },
        "com.balsamiq.mockups::HorizontalScrollBar": {
            afterInit : function (name, control) {
                control.vertical = false;
            }
        }
    }
}