(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var s=n(1),o=n.n(s),r=n(16),a=n.n(r),i=(n(21),n(10)),c=n(3),l=n.n(c),d=n(9),u=n(11),h=n(8),p=n(0);var b=function(e){return Object(p.jsx)("div",{className:"responseModal ".concat(e.type),children:e.children})};var j=function(e){var t=Object(s.useState)({name:"",password:""}),n=Object(i.a)(t,2),o=n[0],r=n[1],a=Object(s.useState)(""),c=Object(i.a)(a,2),j=c[0],x=c[1],O=Object(s.useState)(""),m=Object(i.a)(O,2),C=m[0],S=m[1];function v(e){x(""),S(""),r(Object(h.a)(Object(h.a)({},o),{},Object(u.a)({},e.target.name,e.target.value)))}function w(e){return g.apply(this,arguments)}function g(){return(g=Object(d.a)(l.a.mark((function t(n){var s,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setLoading(!0),t.prev=1,t.next=4,fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 4:return s=t.sent,t.next=7,s.json();case 7:if(r=t.sent,s.ok){t.next=12;break}return x(r.message),e.setLoading(!1),t.abrupt("return");case 12:return e.setLoading(!1),t.abrupt("return",r);case 16:t.prev=16,t.t0=t.catch(1),x("\u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 ".concat(t.t0));case 19:case"end":return t.stop()}}),t,null,[[1,16]])})))).apply(this,arguments)}function M(){return(M=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("https://word-study-server.herokuapp.com/api/registr");case 2:(t=e.sent)&&S("".concat(t.message,", \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0432\u043e\u0439\u0442\u0438 \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(d.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w("https://word-study-server.herokuapp.com/api/login");case 2:(n=t.sent)&&(e.setToken(n.token),localStorage.setItem("UserToken",n.token));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(p.jsx)(p.Fragment,{children:e.loading?Object(p.jsx)("div",{className:"loader",children:Object(p.jsxs)("div",{className:"lds-ellipsis",children:[Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{})]})}):Object(p.jsxs)("div",{className:"Auth",children:[Object(p.jsx)("small",{children:"\u0438\u043c\u044f"}),Object(p.jsx)("input",{name:"name",onChange:v,value:o.name,placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}),Object(p.jsx)("small",{children:"\u043f\u0430\u0440\u043e\u043b\u044c"}),Object(p.jsx)("input",{name:"password",onChange:v,value:o.password,type:"password",placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:function(){return M.apply(this,arguments)},children:"\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(p.jsx)("button",{onClick:function(){return f.apply(this,arguments)},children:"\u0432\u043e\u0439\u0442\u0438"})]}),C&&!e.loading&&Object(p.jsx)(b,{type:"Response",children:C}),j&&!e.loading&&Object(p.jsx)(b,{type:"Error",children:j})]})})},x=n(15),O=n(4),m=n(5),C=n(2),S=n(7),v=n(6);var w=function(e){return Object(p.jsx)("div",{className:"Menu-item",onClick:e.onClick,children:Object(p.jsx)("div",{children:e.children})})};var g=function(e){return Object(p.jsx)("div",{className:"Modal",children:e.children})};var M=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)(w,{onClick:e.onSearchClick,children:"search word"}),e.searchText&&Object(p.jsx)("small",{style:{position:"absolute",color:"red",top:"40px"},children:e.searchText}),e.isSearchInput&&e.isMenuModalShown&&Object(p.jsxs)(g,{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:Object(p.jsx)("small",{children:"search"})}),Object(p.jsx)("input",{placeholder:"search word in this group...",value:e.searchText,onChange:function(t){var n=t.target.value;e.onSearchInputChange(n.trim())}})]}),Object(p.jsx)("div",{className:"modal-button-container",children:Object(p.jsx)("button",{onClick:function(t){e.onSearchInputChange(""),e.closeModal()},children:"reset"})})]})]})},f=function(e){Object(S.a)(n,e);var t=Object(v.a)(n);function n(e){var s;return Object(O.a)(this,n),(s=t.call(this,e)).handleSubmit=s.handleSubmit.bind(Object(C.a)(s)),s.handleInputChange=s.handleInputChange.bind(Object(C.a)(s)),s.handleImgLoad=s.handleImgLoad.bind(Object(C.a)(s)),s.state={word:"",translate:"",img:""},s}return Object(m.a)(n,[{key:"handleInputChange",value:function(e){this.setState(Object(u.a)({},e.target.name,e.target.value))}},{key:"handleImgLoad",value:function(e){var t=this;if(e.target.files.length){var n=new FileReader;n.onload=function(e){t.setState({img:e.target.result})},n.readAsDataURL(e.target.files[0])}}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Object(h.a)({},this.state);t.id=this.state.word.replace(/\s/g,"$")+Date.now(),t.word.trim()&&t.translate.trim()&&this.props.onAddFormSubmit(t),this.setState({word:"",translate:"",img:""}),this.props.closeModal()}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(w,{onClick:this.props.onAddClick,children:"add word"}),this.props.isAddForm&&this.props.isMenuModalShown&&Object(p.jsx)(g,{children:Object.keys(this.props.words).length?Object(p.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:Object(p.jsx)("small",{children:"word"})}),Object(p.jsx)("input",{name:"word",placeholder:"enter word...",value:this.state.word,onChange:this.handleInputChange,required:!0})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:Object(p.jsx)("small",{children:"translate"})}),Object(p.jsx)("input",{name:"translate",placeholder:"enter translate...",value:this.state.translate,onChange:this.handleInputChange,required:!0})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:Object(p.jsx)("small",{children:"picture"})}),Object(p.jsxs)("label",{className:"input-file",children:[Object(p.jsx)("input",{type:"file",onChange:this.handleImgLoad,accept:".png, .jpg"}),this.state.img?Object(p.jsxs)("div",{className:"input-img",children:[Object(p.jsx)("div",{className:"input-img-change",children:"change"}),Object(p.jsx)("img",{src:this.state.img,alt:"load-img"})]}):Object(p.jsx)("div",{className:"load-img",children:Object(p.jsx)("span",{children:"image"})})]})]}),Object(p.jsx)("div",{className:"modal-button-container",children:Object(p.jsx)("button",{children:"add"})})]}):Object(p.jsx)("div",{children:'There are no groups created. Click "create group" to create a group.'})})]})}}]),n}(o.a.Component);var k=function(e){var t=Object.keys(e.words);return Object(p.jsxs)("div",{children:[Object(p.jsx)(w,{onClick:e.onGroupsClick,children:"groups"}),e.isGroupsList&&e.isMenuModalShown&&Object(p.jsx)(g,{children:Object(p.jsx)("ul",{className:"group-list",children:t.length?t.map((function(t){return Object(p.jsx)("li",{children:Object(p.jsxs)("label",{className:"group-name",children:[Object(p.jsx)("input",{type:"radio",name:"group",checked:e.currentGroup===t,onChange:function(){return e.onChooseGroupe(t)}}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:t}),Object(p.jsx)("p",{style:{textAlign:"end",color:"gray"},children:Object(p.jsxs)("small",{children:[e.words[t].length," words"]})})]})]})},t)})):Object(p.jsx)("div",{children:'There are no groups created. Click "create group" to create a group.'})})})]})},y=function(e){Object(S.a)(n,e);var t=Object(v.a)(n);function n(e){var s;return Object(O.a)(this,n),(s=t.call(this,e)).state={groupName:"",isNewGroupNameRepeated:!1},s.handleInputChange=s.handleInputChange.bind(Object(C.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(C.a)(s)),s}return Object(m.a)(n,[{key:"handleInputChange",value:function(e){this.setState({groupName:e.target.value,isNewGroupNameRepeated:!1})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.state.groupName.length&&(this.props.words.hasOwnProperty(this.state.groupName)?this.setState({isNewGroupNameRepeated:!0}):(this.props.onCreateGroupFormSubmit(this.state.groupName),this.setState({groupName:""}),this.props.closeModal()))}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"last-menu-item",children:[Object(p.jsx)(w,{onClick:this.props.onCreateGropeClick,children:"create group"}),this.props.isCreateGropeForm&&this.props.isMenuModalShown&&Object(p.jsx)(g,{children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:Object(p.jsx)("small",{children:"group name"})}),Object(p.jsx)("input",{placeholder:"enter group name...",onChange:this.handleInputChange,value:this.state.groupName,required:!0})]}),this.state.isNewGroupNameRepeated&&Object(p.jsx)("p",{children:"group with the same name alreadi created"}),Object(p.jsx)("div",{className:"modal-button-container",children:Object(p.jsx)("button",{children:"create"})})]})})]})}}]),n}(o.a.Component),F=function(e){Object(S.a)(n,e);var t=Object(v.a)(n);function n(e){var s;return Object(O.a)(this,n),(s=t.call(this,e)).handleSearchClick=s.handleSearchClick.bind(Object(C.a)(s)),s.handleAddClick=s.handleAddClick.bind(Object(C.a)(s)),s.handleGroupsClick=s.handleGroupsClick.bind(Object(C.a)(s)),s.handleCreateGropeClick=s.handleCreateGropeClick.bind(Object(C.a)(s)),s.handleClick=s.handleClick.bind(Object(C.a)(s)),s.state={isSearchInput:!1,isAddForm:!1,isGroupsList:!1,isCreateGropeForm:!1,menuClass:"Menu"},s}return Object(m.a)(n,[{key:"handleSearchClick",value:function(){this.props.isSubContextMenuShown||(this.props.onMenuItemClick(),this.setState({isSearchInput:!0,isAddForm:!1,isGroupsList:!1,isCreateGropeForm:!1}))}},{key:"handleAddClick",value:function(){this.props.isSubContextMenuShown||(this.props.onMenuItemClick(),this.setState({isAddForm:!0,isSearchInput:!1,isGroupsList:!1,isCreateGropeForm:!1}))}},{key:"handleGroupsClick",value:function(){this.props.isSubContextMenuShown||(this.props.onMenuItemClick(),this.setState({isGroupsList:!0,isSearchInput:!1,isAddForm:!1,isCreateGropeForm:!1}))}},{key:"handleCreateGropeClick",value:function(){this.props.isSubContextMenuShown||(this.props.onMenuItemClick(),this.setState({isCreateGropeForm:!0,isSearchInput:!1,isAddForm:!1,isGroupsList:!1}))}},{key:"handleClick",value:function(e){this.props.isSubContextMenuShown||this.props.closeContextMenu()}},{key:"componentDidMount",value:function(){var e=this,t=0;window.addEventListener("scroll",(function(){e.props.isSubContextMenuShown||e.props.closeContextMenu();var n=window.scrollY;n>110&&n<t?e.setState({menuClass:"Menu Menu-scroll scroll-up"}):n>110&&n>t||n<110&&n>85?e.setState({menuClass:"Menu Menu-scroll scroll-down"}):e.setState({menuClass:"Menu"}),t=n}))}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"Menu-container",children:Object(p.jsxs)("div",{className:this.state.menuClass,onClick:this.handleClick,children:[Object(p.jsx)(M,{isSearchInput:this.state.isSearchInput,onSearchClick:this.handleSearchClick,searchText:this.props.searchText,onSearchInputChange:this.props.onSearchInputChange,isMenuModalShown:this.props.isMenuModalShown,closeModal:this.props.closeModal}),Object(p.jsx)(f,{isAddForm:this.state.isAddForm,onAddClick:this.handleAddClick,onAddFormSubmit:this.props.onAddFormSubmit,words:this.props.words,isMenuModalShown:this.props.isMenuModalShown,closeModal:this.props.closeModal}),Object(p.jsx)(k,{isGroupsList:this.state.isGroupsList,onGroupsClick:this.handleGroupsClick,words:this.props.words,onChooseGroupe:this.props.onChooseGroupe,currentGroup:this.props.currentGroup,isMenuModalShown:this.props.isMenuModalShown}),Object(p.jsx)(y,{isCreateGropeForm:this.state.isCreateGropeForm,onCreateGropeClick:this.handleCreateGropeClick,onCreateGroupFormSubmit:this.props.onCreateGroupFormSubmit,words:this.props.words,isMenuModalShown:this.props.isMenuModalShown,closeModal:this.props.closeModal})]})})}}]),n}(o.a.Component),A=o.a.createContext();var I=function(e){return Object(p.jsxs)("div",{className:"sub-context-menu",children:[Object(p.jsx)("div",{children:e.children}),e.buttons]})},G={Delete:function(e){return Object(p.jsx)("div",{className:"Delete",children:Object(p.jsx)(I,{buttons:e.buttons,children:"delete this word?"})})},DeleteFew:function(e){return Object(p.jsx)("div",{className:"Delete-few",children:Object(p.jsx)("div",{children:Object(p.jsx)(I,{buttons:e.buttons,children:"choose words which you want to delete"})})})},DeleteGroup:function(e){return Object(p.jsx)("div",{className:"Delete-group",children:Object(p.jsx)(I,{buttons:e.buttons,children:"delete this group?"})})}};var N=function(e){var t=o.a.useContext(A),n=o.a.useState({currentOperation:""}),s=Object(i.a)(n,2),r=s[0],a=s[1];function c(t){e.onSubContextMenu();var n=t.target.attributes.operation.value;a({currentOperation:n}),e.onContextOperation(n),"delete few"===n&&e.onEnableSelection()}var l=Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:function(){!function(){var n=r.currentOperation;t.deleteClick(n),e.closeContextMenu()}(),e.closeContextMenu()},children:"delete"}),Object(p.jsx)("button",{onClick:e.closeContextMenu,children:"cancell"})]});return Object(p.jsx)(o.a.Fragment,{children:""===r.currentOperation?Object(p.jsx)("div",{className:"Context-menu",style:{top:"".concat(e.position.y,"px"),left:"".concat(e.position.x,"px")},children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{onClick:c,operation:"delete",children:"delete"}),Object(p.jsx)("li",{onClick:c,operation:"delete few",children:"delete few"}),Object(p.jsx)("li",{onClick:c,operation:"delete group",children:"delete group"})]})}):"delete"===r.currentOperation?Object(p.jsx)(G.Delete,{buttons:l}):"delete few"===r.currentOperation?Object(p.jsx)(G.DeleteFew,{buttons:l}):"delete group"===r.currentOperation&&Object(p.jsx)(G.DeleteGroup,{buttons:l})})},T=function(e){Object(S.a)(n,e);var t=Object(v.a)(n);function n(e){var s;return Object(O.a)(this,n),(s=t.call(this,e)).handleClick=s.handleClick.bind(Object(C.a)(s)),s.handleContextMenu=s.handleContextMenu.bind(Object(C.a)(s)),s.handleContextOperation=s.handleContextOperation.bind(Object(C.a)(s)),s.state={isWordShown:!1,isTranslateShown:!1},s}return Object(m.a)(n,[{key:"handleClick",value:function(e){this.props.isSelectingEnabled&&this.props.onSelectWordsForRemove(this.props.item.id),this.props.isSubContextMenuShown||(this.props.isContextMenuShown?this.props.closeContextMenu():this.state.isTranslateShown?this.setState({isWordShown:!1,isTranslateShown:!1}):this.state.isWordShown?this.setState({isTranslateShown:!0}):this.setState({isWordShown:!0}))}},{key:"handleContextMenu",value:function(e){e.preventDefault(),this.props.isSubContextMenuShown||this.props.onContextMenu(e,this.props.item.id)}},{key:"handleContextOperation",value:function(e){"delete"!==e?this.props.onContextOperation(e):this.props.onSelectWordsForRemove(this.props.item.id)}},{key:"render",value:function(){var e=this,t=this.props.wordsIdForRemove;return Object(p.jsxs)(o.a.Fragment,{children:[Object(p.jsxs)("li",{onClick:this.handleClick,onContextMenu:this.handleContextMenu,className:"Item",style:{background:t.find((function(t){return t===e.props.item.id}))&&"gray"},children:[Object(p.jsx)("div",{className:"img-container",children:Object(p.jsx)("img",{src:this.props.item.img||"data:image/png;base64,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",alt:"img"})}),this.state.isWordShown&&Object(p.jsxs)("div",{className:"word-container",children:[Object(p.jsx)("p",{children:this.props.item.word}),this.state.isTranslateShown&&Object(p.jsx)("p",{children:this.props.item.translate})]})]}),this.props.isContextMenuShown&&this.props.contextMenuTarget===this.props.item.id&&Object(p.jsx)(N,{position:this.props.positionContextMenu,closeContextMenu:this.props.closeContextMenu,onSubContextMenu:this.props.onSubContextMenu,onEnableSelection:this.props.onEnableSelection,onContextOperation:this.handleContextOperation})]})}}]),n}(o.a.Component),D=function(e){Object(S.a)(n,e);var t=Object(v.a)(n);function n(e){var s;return Object(O.a)(this,n),(s=t.call(this,e)).handleContextMenu=s.handleContextMenu.bind(Object(C.a)(s)),s.handleCloseContextMenu=s.handleCloseContextMenu.bind(Object(C.a)(s)),s.handleEnableSelection=s.handleEnableSelection.bind(Object(C.a)(s)),s.handleContextOperation=s.handleContextOperation.bind(Object(C.a)(s)),s.state={positionContextMenu:{x:"",y:""},contextMenuTarget:"",isSelectingEnabled:!1,backgroundGroup:""},s}return Object(m.a)(n,[{key:"handleContextMenu",value:function(e,t){this.setState({positionContextMenu:{x:e.pageX,y:e.pageY},contextMenuTarget:t}),this.props.onContextMenu()}},{key:"handleEnableSelection",value:function(){this.setState({isSelectingEnabled:!0})}},{key:"handleContextOperation",value:function(e){"delete group"===e&&this.setState({backgroundGroup:"gray"})}},{key:"handleCloseContextMenu",value:function(){this.setState({isSelectingEnabled:!1,backgroundGroup:""}),this.props.closeContextMenu()}},{key:"render",value:function(){var e=this,t=[];return this.props.words.length&&this.props.words.forEach((function(n){-1===n.word.indexOf(e.props.searchText)&&-1===n.translate.indexOf(e.props.searchText)||t.push(n)})),t.length?Object(p.jsx)("ul",{className:"Items-container",style:{background:this.state.backgroundGroup},children:t.map((function(t){return Object(p.jsx)(T,{onContextMenu:e.handleContextMenu,onSubContextMenu:e.props.onSubContextMenu,positionContextMenu:e.state.positionContextMenu,isContextMenuShown:e.props.isContextMenuShown,isSubContextMenuShown:e.props.isSubContextMenuShown,contextMenuTarget:e.state.contextMenuTarget,closeContextMenu:e.handleCloseContextMenu,onEnableSelection:e.handleEnableSelection,isSelectingEnabled:e.state.isSelectingEnabled,onSelectWordsForRemove:e.props.onSelectWordsForRemove,wordsIdForRemove:e.props.wordsIdForRemove,onContextOperation:e.handleContextOperation,backgroundItem:e.state.backgroundItem,item:t},t.id)}))}):Object(p.jsxs)("div",{style:{padding:"70px 50px 40px",color:"white"},children:[Object(p.jsxs)("span",{style:{color:"red"},children:['"',this.props.searchText,'"']})," - not found"]})}}]),n}(o.a.Component);var R=function(e){return Object(p.jsx)("div",{className:"Body",onClick:e.onBodyClick,onContextMenu:e.onBodyClick,children:e.words?Object(p.jsxs)(o.a.Fragment,{children:[Object(p.jsx)("div",{style:{margin:"0 10px",textAlign:"end",color:"rgb(248, 252, 3)"},children:e.group}),e.words.length?Object(p.jsx)(D,Object(h.a)({},e.propsToBody)):Object(p.jsxs)("div",{style:{margin:"50px",color:"white"},children:["There are no words in this group yet. Click",Object(p.jsx)("span",{style:{color:"gold",fontSize:"18px"},children:' "Add word" '}),"to add a word"]})]}):Object(p.jsxs)("div",{style:{padding:"50px",color:"white"},children:["There are no groups created. Click",Object(p.jsx)("span",{style:{color:"gold",fontSize:"20px"},children:' "create group" '}),"to create a group."]})})},E=function(e){Object(S.a)(n,e);var t=Object(v.a)(n);function n(e){var s;return Object(O.a)(this,n),(s=t.call(this,e)).handleMenuItemClick=s.handleMenuItemClick.bind(Object(C.a)(s)),s.handleCloseModal=s.handleCloseModal.bind(Object(C.a)(s)),s.handleContextMenu=s.handleContextMenu.bind(Object(C.a)(s)),s.handleCloseContextMenu=s.handleCloseContextMenu.bind(Object(C.a)(s)),s.handleSubContextMenu=s.handleSubContextMenu.bind(Object(C.a)(s)),s.state={isMenuModalShown:!1,isContextMenuShown:!1,isSubContextMenuShown:!1},s}return Object(m.a)(n,[{key:"handleMenuItemClick",value:function(){this.setState({isMenuModalShown:!0})}},{key:"handleCloseModal",value:function(){this.setState({isMenuModalShown:!1})}},{key:"handleContextMenu",value:function(){this.setState({isContextMenuShown:!0})}},{key:"handleSubContextMenu",value:function(){this.setState({isSubContextMenuShown:!0})}},{key:"handleCloseContextMenu",value:function(){this.setState({isContextMenuShown:!1,isSubContextMenuShown:!1}),this.props.propsToBody.resetSelect()}},{key:"render",value:function(){return Object(p.jsxs)(o.a.Fragment,{children:[Object(p.jsx)(F,Object(h.a)({closeModal:this.handleCloseModal,onMenuItemClick:this.handleMenuItemClick,isMenuModalShown:this.state.isMenuModalShown,closeContextMenu:this.handleCloseContextMenu,isSubContextMenuShown:this.state.isSubContextMenuShown},this.props.propsToMenu)),Object(p.jsx)(R,{onBodyClick:this.handleCloseModal,words:this.props.propsToBody.words,group:this.props.propsToBody.group,propsToBody:Object(h.a)({onContextMenu:this.handleContextMenu,isContextMenuShown:this.state.isContextMenuShown,onSubContextMenu:this.handleSubContextMenu,isSubContextMenuShown:this.state.isSubContextMenuShown,closeContextMenu:this.handleCloseContextMenu},this.props.propsToBody)})]})}}]),n}(o.a.Component),B=function(e){Object(S.a)(n,e);var t=Object(v.a)(n);function n(e){var s;return Object(O.a)(this,n),(s=t.call(this,e)).handleSearchInputChange=s.handleSearchInputChange.bind(Object(C.a)(s)),s.handleAddFormSubmit=s.handleAddFormSubmit.bind(Object(C.a)(s)),s.handleChooseGroup=s.handleChooseGroup.bind(Object(C.a)(s)),s.handleCreateGroupFormSubmit=s.handleCreateGroupFormSubmit.bind(Object(C.a)(s)),s.handleDeleteClick=s.handleDeleteClick.bind(Object(C.a)(s)),s.handleSelectWordsForRemove=s.handleSelectWordsForRemove.bind(Object(C.a)(s)),s.resetSelect=s.resetSelect.bind(Object(C.a)(s)),s.state={words:{},searchText:"",currentGroup:null,wordsIdForRemove:[]},s}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getData();case 2:(t=e.sent)&&this.setState({words:t,currentGroup:Object.keys(t)[0]});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleSearchInputChange",value:function(e){this.setState({searchText:e})}},{key:"handleAddFormSubmit",value:function(e){var t=Object.assign({},this.state.words),n=this.state.currentGroup;t[n]=[].concat(Object(x.a)(t[n]),[Object(h.a)({},e)]),this.setState({words:t}),this.props.setData(t)}},{key:"handleChooseGroup",value:function(e){this.setState({currentGroup:e})}},{key:"handleCreateGroupFormSubmit",value:function(e){var t=Object(h.a)({},this.state.words);t[e]=[],this.setState({words:t,currentGroup:e}),this.props.setData(t)}},{key:"handleDeleteClick",value:function(e){var t=Object(h.a)({},this.state.words),n=this.state.currentGroup;if("delete group"===e){delete t[n];var s=Object.keys(this.state.words)[0],o=Object.keys(this.state.words)[1];return this.setState({words:t,currentGroup:n!==s?s:o}),void this.props.setData(t)}this.state.wordsIdForRemove.forEach((function(e){t[n]=t[n].filter((function(t){return t.id!==e}))})),this.setState({words:t,wordsIdForRemove:[]}),this.props.setData(t)}},{key:"handleSelectWordsForRemove",value:function(e){var t=Object(x.a)(this.state.wordsIdForRemove),n=t.findIndex((function(t){return t===e}));-1===n?t.push(e):t.splice(n,1),this.setState({wordsIdForRemove:t})}},{key:"resetSelect",value:function(){this.setState({wordsIdForRemove:[]})}},{key:"render",value:function(){var e={searchText:this.state.searchText,onSearchInputChange:this.handleSearchInputChange,onAddFormSubmit:this.handleAddFormSubmit,words:this.state.words,currentGroup:this.state.currentGroup,onChooseGroupe:this.handleChooseGroup,onCreateGroupFormSubmit:this.handleCreateGroupFormSubmit},t={words:this.state.words[this.state.currentGroup],group:this.state.currentGroup,searchText:this.state.searchText,onSelectWordsForRemove:this.handleSelectWordsForRemove,wordsIdForRemove:this.state.wordsIdForRemove,resetSelect:this.resetSelect};return Object(p.jsx)("div",{className:"Main",children:Object(p.jsx)(A.Provider,{value:{deleteClick:this.handleDeleteClick},children:Object(p.jsx)(E,{propsToMenu:e,propsToBody:t})})})}}]),n}(o.a.Component);var L=function(e){function t(){localStorage.removeItem("UserToken"),e.setToken("")}function n(e){return s.apply(this,arguments)}function s(){return(s=Object(d.a)(l.a.mark((function n(s){var o,r,a,i,c,d=arguments;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=d.length>1&&void 0!==d[1]?d[1]:"GET",r=d.length>2&&void 0!==d[2]?d[2]:null,a=null,r&&(a=JSON.stringify(r)),n.prev=4,n.next=7,fetch(s,{method:o,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)},body:a});case 7:return i=n.sent,n.next=10,i.json();case 10:if(c=n.sent,i.ok){n.next=14;break}return"jwt expired"===c.message&&t(),n.abrupt("return");case 14:return n.abrupt("return",c);case 17:throw n.prev=17,n.t0=n.catch(4),new Error("\u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445: ".concat(n.t0.message));case 20:case"end":return n.stop()}}),n,null,[[4,17]])})))).apply(this,arguments)}function o(){return(o=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("https://word-study-server.herokuapp.com/api/getdata");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"Exit",children:Object(p.jsx)("button",{onClick:t,children:"exit"})}),Object(p.jsx)(B,{setData:function(e){n("https://word-study-server.herokuapp.com/api/setdata","POST",e)},getData:function(){return o.apply(this,arguments)}})]})};var V=function(){var e=Object(s.useState)(!0),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)(""),c=Object(i.a)(a,2),l=c[0],d=c[1];return o.a.useEffect((function(){var e=localStorage.getItem("UserToken");e&&d(e),r(!1)}),[]),Object(p.jsx)(p.Fragment,{children:l?Object(p.jsx)(L,{token:l,setToken:d}):Object(p.jsx)(j,{setToken:d,setLoading:r,loading:n})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,s=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),o(e),r(e),a(e)}))};a.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(V,{})}),document.getElementById("root")),Q()}},[[24,1,2]]]);
//# sourceMappingURL=main.5b6b5335.chunk.js.map