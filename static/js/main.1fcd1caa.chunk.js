(this["webpackJsonpnac-react-app"]=this["webpackJsonpnac-react-app"]||[]).push([[0],{147:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Espace}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__),C_Users_sheld_Documents_GitHub_nac_react_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(41),C_Users_sheld_Documents_GitHub_nac_react_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(22),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(29),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(153),_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(108),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(256),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(7),react_redux__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(38),_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(25),_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(155),_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(157),_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(257),_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(154),_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(156),_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(107),_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(106),_images_espace_sample_picture_jpg__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(72),firebase_app__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(45);__webpack_require__(111),__webpack_require__(247),__webpack_require__(254);var useStyles=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.a)((function(){return{buttonArea:{margin:"0 10px 10px 10px"},divider:{margin:"20px"},imageStyle:{margin:"0px",width:"90%"},imageStyleForDetaile:{margin:"0px",width:"80%"},paper:{margin:"10px"},textStyle:{margin:"10px",textIndent:"0px",lineHeight:"30px"},titleStyle:{margin:"10px"},table:{minWidth:200}}}));function readUserData(userEmail){var adaRef=firebase_app__WEBPACK_IMPORTED_MODULE_19__.a.database().ref("/cibles/"+userNameGenerate(userEmail)).once("value").then((function(snapshot){var targetPosition=snapshot.exportVal(),targetPositionDetail=targetPosition[ProcessingObject(targetPosition).slice(-1)],json=eval("("+targetPositionDetail.targetPosition+")");console.log(targetPositionDetail.targetPosition),console.log(json),console.log(targetPositionDetail.timeStamp);for(var realTimeString=ProcessingTime(targetPositionDetail.timeStamp),allObject=ProcessingObject(json),nacDetailData=[],nacTypeData=[],i=0;i<allObject.length;i++){for(var j=0;j<json[allObject[i]].length;j++){var tempObject={nacName:"",nacPosition:"",nacAction:""};tempObject.nacName=allObject[i],tempObject.nacPosition=json[allObject[i]][j],tempObject.nacAction=json[allObject[i]][j],nacDetailData.push(tempObject)}var tempObject={nacName:"",nacNumber:""};tempObject.nacName=allObject[i],tempObject.nacNumber=json[allObject[i]].length,nacTypeData.push(tempObject)}return console.log(nacDetailData),{nacDetailData:nacDetailData,nacTypeData:nacTypeData,realTimeString:realTimeString}}));return console.log(adaRef),adaRef}function readUserImg(e){return firebase_app__WEBPACK_IMPORTED_MODULE_19__.a.storage().ref("/"+userNameGenerate(e)+"/").list({maxResults:5}).then((function(e){for(var a=e.items,t=[],_=0;_<a.length;_++)t.push(a[_].name);return t.reverse(),{imgNameList:t}}))}function ProcessingUrl(e,a,t){return"https://firebasestorage.googleapis.com/v0/b/fir-rtc-aff50.appspot.com/o/"+userNameGenerate(e)+"%2F"+a[t]+"?alt=media"}function ProcessingObject(e){var a=[];for(var t in e)e.hasOwnProperty(t)&&a.push(t);return a}function ProcessingTime(e){var a=new Date(1e3*e),t=a.getFullYear()+"-",_=(a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1)+"-",r=a.getDate()+" ",n=a.getHours()+":",i=a.getMinutes()+":",c=a.getSeconds();return console.log(t+_+r+n+i+c),t+_+r+n+i+c}function userNameGenerate(e){return console.log(e),e=e.replace(/\./g,"_").replace(/@/g,"__"),console.log(e),e}var StyledTableCell=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.a)((function(e){return{head:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},body:{fontSize:14}}}))(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.a),StyledTableRow=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__.a);function Espace(){var e=useStyles(),a=Object(react_redux__WEBPACK_IMPORTED_MODULE_9__.c)((function(e){return e.userInfo})),t=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)([{nacName:"",nacPosition:"",nacAction:""}]),_=Object(C_Users_sheld_Documents_GitHub_nac_react_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(t,2),r=_[0],n=_[1],i=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)([{nacName:"",nacNumber:""}]),c=Object(C_Users_sheld_Documents_GitHub_nac_react_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(i,2),s=c[0],o=c[1],l=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),d=Object(C_Users_sheld_Documents_GitHub_nac_react_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(l,2),m=d[0],j=d[1],u=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)([[]]),p=Object(C_Users_sheld_Documents_GitHub_nac_react_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(u,2),O=p[0],b=p[1];return Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)((function(){readUserData(a.email).then((function(e){n(Object(C_Users_sheld_Documents_GitHub_nac_react_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(e.nacDetailData)),o(Object(C_Users_sheld_Documents_GitHub_nac_react_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(e.nacTypeData)),j(Object(C_Users_sheld_Documents_GitHub_nac_react_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(e.realTimeString))})),readUserImg(a.email).then((function(e){b(Object(C_Users_sheld_Documents_GitHub_nac_react_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(e.imgNameList)),console.log(e.imgNameList)}))}),[]),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[console.log(ProcessingUrl(a.email,O,0)),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{container:!0,spacing:1,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{item:!0,xs:12,md:12,lg:5,className:e.paper,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.a,{variant:"contained",color:"primary",className:e.buttonArea,children:"Bilan du jour"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.a,{variant:"contained",onClick:function(){readUserData(a.email).then((function(e){n(Object(C_Users_sheld_Documents_GitHub_nac_react_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(e.nacDetailData)),o(Object(C_Users_sheld_Documents_GitHub_nac_react_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(e.nacTypeData)),j(Object(C_Users_sheld_Documents_GitHub_nac_react_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(e.realTimeString))})),readUserImg(a.email).then((function(e){b(Object(C_Users_sheld_Documents_GitHub_nac_react_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(e.imgNameList)),console.log(e.imgNameList)}))},className:e.buttonArea,children:"Mettre \xe0 jour"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{item:!0,xs:12,md:12,lg:6,className:e.paper,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.a,{variant:"body2",align:"left",children:["\u2705 Votre compte : ",a.email]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.a,{variant:"body2",align:"left",children:"\u274e L'observation \xe0 distance n'est pas pr\xeate."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.a,{variant:"body2",align:"left",children:"\u274e La connexion \xe0 la base de donn\xe9es n'est pas r\xe9ussie."})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"middle",className:e.divider}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{container:!0,spacing:1,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{item:!0,xs:12,md:12,lg:7,className:e.paper,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:ProcessingUrl(a.email,O,0),alt:"",className:e.imageStyle}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.a,{variant:"caption",className:e.textStyle,children:["Derni\xe8re capture d'\xe9cran dans ",m]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{item:!0,xs:12,md:12,lg:4,className:e.paper,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.a,{variant:"caption",className:e.textStyle,children:["Le num\xe9ro de votre NAC dans ",m]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_14__.a,{component:_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_17__.a,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_11__.a,{className:e.table,"aria-label":"customized table",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_15__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledTableCell,{children:"Types de NAC"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledTableCell,{children:"Quantit\xe9"})]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_12__.a,{children:s.map((function(e){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledTableRow,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledTableCell,{component:"th",scope:"row",children:e.nacName}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledTableCell,{children:e.nacNumber})]},e.nacName)}))})]})})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"middle",className:e.divider}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{item:!0,xs:12,md:12,lg:12,className:e.paper,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.a,{variant:"caption",className:e.textStyle,children:["Les activit\xe9s de votre NAC dans ",m]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_14__.a,{component:_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_17__.a,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_11__.a,{className:e.table,"aria-label":"customized table",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_15__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledTableCell,{children:"Votre NAC"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledTableCell,{children:"Coordonn\xe9e"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledTableCell,{children:"Que fait-il"})]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_12__.a,{children:r.map((function(e){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledTableRow,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledTableCell,{component:"th",scope:"row",children:e.nacName}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledTableCell,{children:["(",e.nacPosition[0],",",e.nacPosition[1],")"]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledTableCell,{children:["(",e.nacAction[0],",",e.nacAction[1],")"]})]},e.nacName)}))})]})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"middle",className:e.divider}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.a,{variant:"caption",className:e.textStyle,children:"Les activit\xe9s r\xe9centes du votre NAC"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{container:!0,spacing:1,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{item:!0,xs:12,md:12,lg:12,className:e.paper,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:ProcessingUrl(a.email,O,1),alt:"\u793a\u4f8b\u56fe\u7247\uff1a\u8bc6\u522b NAC",className:e.imageStyle})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{item:!0,xs:12,md:12,lg:12,className:e.paper,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:ProcessingUrl(a.email,O,2),alt:"\u793a\u4f8b\u56fe\u7247\uff1a\u8bc6\u522b NAC",className:e.imageStyle})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{container:!0,spacing:1,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{item:!0,xs:12,md:12,lg:12,className:e.paper,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:ProcessingUrl(a.email,O,3),alt:"\u793a\u4f8b\u56fe\u7247\uff1a\u8bc6\u522b NAC",className:e.imageStyle})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{item:!0,xs:12,md:12,lg:12,className:e.paper,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:ProcessingUrl(a.email,O,4),alt:"\u793a\u4f8b\u56fe\u7247\uff1a\u8bc6\u522b NAC",className:e.imageStyle})})]})]})})}},167:function(e,a,t){},168:function(e,a,t){},251:function(e,a,t){"use strict";t.r(a);var _=t(2),r=t(0),n=t.n(r),i=t(13),c=t.n(i),s=(t(167),t(168),t(45));t(253);var o=function(){s.a.initializeApp({apiKey:"AIzaSyB4KpNt_TjCoaDx4iA4KP80Ompm4cc1ymk",authDomain:"fir-rtc-aff50.firebaseapp.com",projectId:"fir-rtc-aff50",storageBucket:"fir-rtc-aff50.appspot.com",messagingSenderId:"900710198529",appId:"1:900710198529:web:0ec5f5be44756ef2e9ff00",measurementId:"G-267VZRPMW4"}),s.a.analytics()},l=t(149),d=t(302),m=t(148),j=t(16),u=t(22),p=t(26),O=t(23),b=t(5),x=t(256),E=t(297),h=t(306),g=t(303),D=t(298),P=t(299),M=t(301),f=t(29),C=t(108),T=t(300),v=t(295),A=t(25),B=t(106),I=t(296),U=t(57),y=t.n(U),R=t(58),L=t.n(R),W=t(288),N=t(291),K=t(292),w=t(144),S=t.n(w),k=t(143),G=t.n(k),H=t(142),q=t.n(H),z=Object(_.jsxs)("div",{children:[Object(_.jsxs)(W.a,{button:!0,component:"a",href:"/espace",children:[Object(_.jsx)(N.a,{children:Object(_.jsx)(q.a,{})}),Object(_.jsx)(K.a,{primary:"Mon espace"})]}),Object(_.jsxs)(W.a,{button:!0,component:"a",href:"/user-guide",children:[Object(_.jsx)(N.a,{children:Object(_.jsx)(G.a,{})}),Object(_.jsx)(K.a,{primary:"Mode d'emploi"})]}),Object(_.jsxs)(W.a,{button:!0,component:"a",href:"/user-guide",children:[Object(_.jsx)(N.a,{children:Object(_.jsx)(S.a,{})}),Object(_.jsx)(K.a,{primary:"La description",secondary:"Comment \xe7a fonctionne"})]})]}),F=Object(_.jsx)("div",{});function V(e){return Object(_.jsx)(f.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:e.children})}var X=t(145),J=t.n(X),Q=t.p+"static/media/about.82e46104.md",Y=t.p+"static/media/user_guide.4b3d3c4c.md",Z=Object(x.a)((function(){return{textStyle:{margin:"5px",textIndent:"5px",lineHeight:"30px",textAlign:"left"}}}));function $(e){var a=Z(),t=n.a.useState(""),r=Object(u.a)(t,2),i=r[0],c=r[1],s=function(e){console.log(e),fetch(e).then((function(e){return e.text()})).then((function(e){console.log(e),c(e)}))};return Object(_.jsxs)(n.a.Fragment,{children:[function(e){switch(e.children){case"MdAbout":s(Q);break;case"MdUserGuide":s(Y);break;default:s(Q)}}(e),Object(_.jsx)("div",{className:a.textStyle,children:Object(_.jsx)(J.a,{source:i})})]})}var ee=Object(x.a)((function(){return{textStyle:{margin:"5px",textIndent:"5px",lineHeight:"30px",textAlign:"left"},titleStyle:{margin:"10px"}}}));function ae(){var e=ee();return Object(_.jsxs)(n.a.Fragment,{children:[Object(_.jsx)(V,{children:"Qu'est-ce que c'est?"}),Object(_.jsx)("div",{className:e.textStyle,children:Object(_.jsx)($,{children:"MdAbout"})})]})}var te=t(153),_e=t(307),re=t(293),ne=t(305),ie=Object(x.a)((function(){return{depositContext:{flex:1}}}));function ce(e){var a=ie();return Object(_.jsxs)(n.a.Fragment,{children:[Object(_.jsx)(V,{children:"BIENVENUE"}),Object(_.jsx)("div",{className:a.root,children:Object(_.jsx)(_e.a,{activeStep:e.activeStep,alternativeLabel:!0,children:e.steps.map((function(e){return Object(_.jsx)(re.a,{children:Object(_.jsx)(ne.a,{children:e})},e)}))})})]})}var se=t(294),oe=t(38),le=n.a.lazy((function(){return Promise.all([t.e(3),t.e(4)]).then(t.bind(null,327))})),de=n.a.lazy((function(){return t.e(5).then(t.bind(null,329))})),me=Object(x.a)((function(){return{buttonArea:{margin:"0 10px 10px 10px"},root:{flexGrow:1,display:"flex"},paper:{display:"flex",overflow:"auto",flexDirection:"column"},formLabel:{padding:"0 0 10px 0",textAlign:"left"},inputEmpty:{margin:"0 0 15px 0"},img:{maxWidth:"100%",height:"auto"}}}));function je(){var e=me(),a=Object(oe.c)((function(e){return e.userInfo}));return console.log(a),Object(_.jsx)("div",{className:e.root,children:Object(_.jsx)(n.a.Suspense,{fallback:Object(_.jsx)("div",{children:Object(_.jsx)(se.a,{})}),children:void 0===a.name?Object(_.jsx)(le,{}):Object(_.jsx)(de,{})})})}var ue=t(147),pe=t.p+"static/media/logo-am-84.205d0c8b.png",Oe=t(7);var be=Object(Oe.a)((function(e){return{root:Object(p.a)({color:e.palette.common.white,position:"relative",display:"flex",alignItems:"center"},e.breakpoints.up("sm"),{height:"100vh"}),container:{marginTop:e.spacing(3),marginBottom:e.spacing(14),display:"flex",flexDirection:"column",alignItems:"center"},backdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:e.palette.common.black,opacity:.5,zIndex:-1},background:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundRepeat:"no-repeat",zIndex:-2},arrowDown:{position:"absolute",bottom:e.spacing(4)}}}))((function(e){var a=e.backgroundClassName,t=e.children,r=e.classes;return Object(_.jsx)("section",{className:r.root,children:Object(_.jsxs)(v.a,{className:r.container,children:[t,Object(_.jsx)("div",{className:r.backdrop}),Object(_.jsx)("div",{className:Object(b.a)(r.background,a)})]})})})),xe=t.p+"static/media/index_img_1.22520ab5.jpg";var Ee=Object(Oe.a)((function(e){return{background:{backgroundImage:"url(".concat(xe,")"),backgroundPosition:"center"},button:{minWidth:200},h5:Object(p.a)({marginBottom:e.spacing(4),marginTop:e.spacing(4)},e.breakpoints.up("sm"),{marginTop:e.spacing(10)}),more:{marginTop:e.spacing(2)}}}))((function(e){var a=e.classes;return Object(_.jsxs)(be,{backgroundClassName:a.background,children:[Object(_.jsx)("img",{style:{display:"none"},src:xe,alt:"increase priority"}),Object(_.jsx)(f.a,{color:"inherit",align:"center",variant:"h2",marked:"center",children:"Toujours avec votre b\xe9b\xe9"}),Object(_.jsx)(f.a,{color:"inherit",align:"center",variant:"h5",className:a.h5,children:"une application innovante pour mesurer et influer sur l'activit\xe9 physique des NAC"}),Object(_.jsx)(te.a,{color:"primary",variant:"contained",size:"large",className:a.button,component:"a",href:"/espace",children:"Commencez !"}),Object(_.jsx)(f.a,{variant:"body2",color:"inherit",className:a.more,children:"Essayez maintenant"})]})})),he=t(72),ge=t.p+"static/media/productCurvyLines.58c56f77.png",De=t.p+"static/media/index-icon-1.e031f8c7.svg",Pe=t.p+"static/media/index-icon-2.017a9e53.svg",Me=t.p+"static/media/index-icon-3.2cb6d22e.svg";var fe=Object(Oe.a)((function(e){return{root:{display:"flex",backgroundImage:"url(".concat(ge,")"),overflow:"hidden",backgroundColor:"#ffffff",backgroundPosition:"center"},container:{marginTop:e.spacing(10),marginBottom:e.spacing(15),position:"relative",display:"flex",flexDirection:"column",alignItems:"center"},item:{display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(0,5)},title:{marginBottom:e.spacing(14)},number:{fontSize:24,fontFamily:e.typography.fontFamily,color:e.palette.primary,fontWeight:e.typography.fontWeightMedium},image:{width:"100%",marginTop:e.spacing(4),marginBottom:e.spacing(4),borderRadius:"5px",boxShadow:"2px 2px 10px rgba(0,0,0,.5)"},imageIcon:{width:"15%",marginTop:e.spacing(4),marginBottom:e.spacing(4)},button:{marginTop:e.spacing(8)}}}))((function(e){var a=e.classes;return Object(_.jsx)("section",{className:a.root,children:Object(_.jsxs)(v.a,{className:a.container,children:[Object(_.jsx)(f.a,{variant:"h4",marked:"center",className:a.title,component:"h2",children:"Comment \xe7a fonctionne"}),Object(_.jsx)("div",{children:Object(_.jsxs)(A.a,{container:!0,spacing:5,children:[Object(_.jsxs)(A.a,{item:!0,xs:12,md:4,children:[Object(_.jsx)("img",{src:he.a,alt:"",className:a.image}),Object(_.jsxs)("div",{className:a.item,children:[Object(_.jsx)("img",{src:De,className:a.imageIcon}),Object(_.jsx)("div",{className:a.number,children:"Voir \xe0 distance"})]})]}),Object(_.jsxs)(A.a,{item:!0,xs:12,md:4,children:[Object(_.jsx)("img",{src:he.a,className:a.image}),Object(_.jsxs)("div",{className:a.item,children:[Object(_.jsx)("img",{src:Pe,className:a.imageIcon}),Object(_.jsx)("div",{className:a.number,children:"Couvrir tous les plateformes"})]})]}),Object(_.jsxs)(A.a,{item:!0,xs:12,md:4,children:[Object(_.jsx)("img",{src:he.a,className:a.image}),Object(_.jsxs)("div",{className:a.item,children:[Object(_.jsx)("img",{src:Me,className:a.imageIcon}),Object(_.jsx)("div",{className:a.number,children:"Personnaliser"})]})]})]})}),Object(_.jsx)(te.a,{color:"primary",size:"large",variant:"contained",className:a.button,component:"a",href:"/espace",children:"Commencez !"})]})})}));function Ce(){var e=Te();return Object(_.jsxs)("div",{children:[Object(_.jsxs)(f.a,{variant:"overline",color:"textSecondary",align:"center",children:["Etudiants : ",Object(_.jsx)(I.a,{color:"inherit",href:"https://xd.sh.cn/nac",children:"HUANG Xiaodong"})," & LIU Huimin | Directeur : JEAN Camille"]}),Object(_.jsx)(f.a,{variant:"body2",color:"textSecondary",align:"center",children:Object(_.jsx)(I.a,{color:"inherit",href:"https://nac-app.netlify.app",children:"Conception d'une application innovante pour mesurer et influer sur l'activit\xe9 physique des NAC"})}),Object(_.jsx)("img",{src:pe,alt:"AM-logo",className:e.imageStyle})]})}var Te=Object(x.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(O.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:250,width:"calc(100% - ".concat(250,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1,textAlign:"left"},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:250,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(p.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},imageStyle:{margin:"10px",height:"25px"},paper:{marginBottom:e.spacing(3),padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:550}}}));function ve(){var e=Te(),a=n.a.useState(!1),t=Object(u.a)(a,2),r=t[0],i=t[1];return Object(_.jsxs)("div",{className:e.root,children:[Object(_.jsx)(E.a,{}),Object(_.jsx)(D.a,{position:"absolute",className:Object(b.a)(e.appBar,r&&e.appBarShift),children:Object(_.jsxs)(P.a,{className:e.toolbar,children:[Object(_.jsxs)(T.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},className:Object(b.a)(e.menuButton,r&&e.menuButtonHidden),children:[Object(_.jsx)(y.a,{})," "]}),Object(_.jsx)(f.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title,children:"Toujours avec votre NAC"})]})}),Object(_.jsxs)(h.a,{variant:"temporary",classes:{paper:Object(b.a)(e.drawerPaper,!r&&e.drawerPaperClose)},open:r,children:[Object(_.jsx)("div",{className:e.toolbarIcon,children:Object(_.jsx)(T.a,{onClick:function(){i(!1)},children:Object(_.jsx)(L.a,{})})}),Object(_.jsx)(C.a,{}),Object(_.jsx)(M.a,{children:z}),Object(_.jsx)(C.a,{}),Object(_.jsx)(M.a,{children:F})]}),Object(_.jsxs)("main",{className:e.content,children:[Object(_.jsx)("div",{className:e.appBarSpacer}),Object(_.jsx)(Ee,{}),Object(_.jsx)(fe,{}),Object(_.jsx)(g.a,{pt:4,children:Object(_.jsx)(Ce,{})})]})]})}function Ae(){return Object(_.jsx)(n.a.Fragment,{children:Object(_.jsx)("div",{children:document.querySelector("body").scrollTo(0,0)})})}function Be(e){switch(e){case 0:return"ETAPE 1";case 1:return"ETAPE 2";default:return"Unknown stepIndex"}}function Ie(e){switch(e){case 0:return Object(_.jsx)(je,{});case 1:return Object(_.jsx)(ue.a,{});default:return"Unknown stepIndex"}}t(111);var Ue=Object(x.a)((function(){return{buttonArea:{margin:"0 10px 10px 10px"}}}));function ye(){var e=Ue(),a=n.a.useState(0),t=Object(u.a)(a,2),i=t[0],c=t[1],o=n.a.useState({name:void 0,email:void 0,uid:void 0}),l=Object(u.a)(o,2),d=l[0],m=l[1],j=["Connecxion","Votre espace"],p=Object(oe.b)(),b=function(e){p({type:"ADD_USERINFO",userInfo:e})};Object(r.useEffect)((function(){m(Object(O.a)({},d))}),[]);var x=Object(oe.c)((function(e){return e.successedData}));return Object(_.jsx)(n.a.Fragment,{children:Object(_.jsxs)("div",{className:e.root,children:[void s.a.auth().onAuthStateChanged((function(e){e?(d.name=e.providerData[0].displayName,d.email=e.providerData[0].email,d.uid=e.providerData[0].uid,b(d),console.log(d)):(d.name=void 0,d.email=void 0,d.uid=void 0,b(d),console.log("Aucun utilisateur n'est connect\xe9."))})),console.log(d),Object(_.jsx)(Ae,{}),Object(_.jsx)(ce,{activeStep:i,steps:j}),Object(_.jsx)(A.a,{className:e.fixedHeight280,children:Ie(i)}),Object(_.jsx)("div",{className:e.fixedHeight100,children:i===j.length-1?Object(_.jsx)("div",{}):Object(_.jsxs)("div",{children:[Object(_.jsx)(f.a,{variant:"overline",className:e.hintText,children:Be(i)}),Object(_.jsxs)("div",{className:e.buttonArea,children:[Object(_.jsx)(te.a,{disabled:0===i,onClick:function(){c((function(e){return e-1}))},variant:"contained",className:e.buttonArea,children:"Retourer"}),Object(_.jsx)(te.a,{variant:"contained",color:"primary",onClick:function(){c((function(e){return e+1}))},className:e.buttonArea,disabled:!1===x,children:"L'\xe9tape suivante"})]})]})})]})})}function Re(){var e=Le();return Object(_.jsxs)("div",{children:[Object(_.jsxs)(f.a,{variant:"overline",color:"textSecondary",align:"center",children:["Etudiants : ",Object(_.jsx)(I.a,{color:"inherit",href:"https://xd.sh.cn/nac",children:"HUANG Xiaodong"})," & LIU Huimin | Directeur : JEAN Camille"]}),Object(_.jsx)(f.a,{variant:"body2",color:"textSecondary",align:"center",children:Object(_.jsx)(I.a,{color:"inherit",href:"https://nac-app.netlify.app",children:"Conception d'une application innovante pour mesurer et influer sur l'activit\xe9 physique des NAC"})}),Object(_.jsx)("img",{src:pe,alt:"AM-logo",className:e.imageStyle})]})}var Le=Object(x.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(O.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:250,width:"calc(100% - ".concat(250,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1,textAlign:"left"},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:250,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(p.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},imageStyle:{margin:"10px",height:"25px"},paper:{marginBottom:e.spacing(3),padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:550}}}));function We(){var e=Le(),a=n.a.useState(!1),t=Object(u.a)(a,2),r=t[0],i=t[1];return Object(_.jsxs)("div",{className:e.root,children:[Object(_.jsx)(E.a,{}),Object(_.jsx)(D.a,{position:"absolute",className:Object(b.a)(e.appBar,r&&e.appBarShift),children:Object(_.jsxs)(P.a,{className:e.toolbar,children:[Object(_.jsxs)(T.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},className:Object(b.a)(e.menuButton,r&&e.menuButtonHidden),children:[Object(_.jsx)(y.a,{})," "]}),Object(_.jsx)(f.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title,children:"Toujours avec votre NAC"})]})}),Object(_.jsxs)(h.a,{variant:"temporary",classes:{paper:Object(b.a)(e.drawerPaper,!r&&e.drawerPaperClose)},open:r,children:[Object(_.jsx)("div",{className:e.toolbarIcon,children:Object(_.jsx)(T.a,{onClick:function(){i(!1)},children:Object(_.jsx)(L.a,{})})}),Object(_.jsx)(C.a,{}),Object(_.jsx)(M.a,{children:z}),Object(_.jsx)(C.a,{}),Object(_.jsx)(M.a,{children:F})]}),Object(_.jsxs)("main",{className:e.content,children:[Object(_.jsx)("div",{className:e.appBarSpacer}),Object(_.jsxs)(v.a,{maxWidth:"lg",className:e.container,children:[Object(_.jsxs)(A.a,{container:!0,spacing:3,children:[Object(_.jsx)(A.a,{item:!0,xs:12,md:8,lg:9,children:Object(_.jsx)(B.a,{className:e.paper,children:Object(_.jsx)(ye,{})})}),Object(_.jsx)(A.a,{item:!0,xs:12,md:4,lg:3,children:Object(_.jsx)(B.a,{className:e.paper,children:Object(_.jsx)(ae,{})})})]}),Object(_.jsx)(g.a,{pt:4,children:Object(_.jsx)(Re,{})})]})]})]})}function Ne(){var e=Ke();return Object(_.jsxs)("div",{children:[Object(_.jsxs)(f.a,{variant:"overline",color:"textSecondary",align:"center",children:["Etudiants : ",Object(_.jsx)(I.a,{color:"inherit",href:"https://xd.sh.cn/nac",children:"HUANG Xiaodong"})," & LIU Huimin | Directeur : JEAN Camille"]}),Object(_.jsx)(f.a,{variant:"body2",color:"textSecondary",align:"center",children:Object(_.jsx)(I.a,{color:"inherit",href:"https://nac-app.netlify.app",children:"Conception d'une application innovante pour mesurer et influer sur l'activit\xe9 physique des NAC"})}),Object(_.jsx)("img",{src:pe,alt:"AM-logo",className:e.imageStyle})]})}var Ke=Object(x.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(O.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:250,width:"calc(100% - ".concat(250,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1,textAlign:"left"},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:250,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(p.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},imageStyle:{margin:"10px",height:"25px"},paper:{marginBottom:e.spacing(3),padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:550}}}));function we(e){var a=Ke(),t=n.a.useState(!1),r=Object(u.a)(t,2),i=r[0],c=r[1];return Object(_.jsxs)("div",{className:a.root,children:[Object(_.jsx)(E.a,{}),Object(_.jsx)(D.a,{position:"absolute",className:Object(b.a)(a.appBar,i&&a.appBarShift),children:Object(_.jsxs)(P.a,{className:a.toolbar,children:[Object(_.jsxs)(T.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},className:Object(b.a)(a.menuButton,i&&a.menuButtonHidden),children:[Object(_.jsx)(y.a,{})," "]}),Object(_.jsx)(f.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:a.title,children:"Toujours avec votre NAC"})]})}),Object(_.jsxs)(h.a,{variant:"temporary",classes:{paper:Object(b.a)(a.drawerPaper,!i&&a.drawerPaperClose)},open:i,children:[Object(_.jsx)("div",{className:a.toolbarIcon,children:Object(_.jsx)(T.a,{onClick:function(){c(!1)},children:Object(_.jsx)(L.a,{})})}),Object(_.jsx)(C.a,{}),Object(_.jsx)(M.a,{children:z}),Object(_.jsx)(C.a,{}),Object(_.jsx)(M.a,{children:F})]}),Object(_.jsxs)("main",{className:a.content,children:[Object(_.jsx)("div",{className:a.appBarSpacer}),Object(_.jsxs)(v.a,{maxWidth:"lg",className:a.container,children:[Object(_.jsxs)(A.a,{container:!0,spacing:3,children:[Object(_.jsx)(A.a,{item:!0,xs:12,md:8,lg:9,children:Object(_.jsxs)(B.a,{className:a.paper,children:[console.log(e.children),Object(_.jsx)($,{children:e.children})]})}),Object(_.jsx)(A.a,{item:!0,xs:12,md:4,lg:3,children:Object(_.jsx)(B.a,{className:a.paper,children:Object(_.jsx)(ae,{})})})]}),Object(_.jsx)(g.a,{pt:4,children:Object(_.jsx)(Ne,{})})]})]})]})}function Se(){return Object(_.jsx)(m.a,{children:Object(_.jsx)("div",{children:Object(_.jsxs)(j.c,{children:[Object(_.jsx)(j.a,{path:"/about",children:Object(_.jsx)(we,{children:"MdAbout"})}),Object(_.jsx)(j.a,{path:"/user-guide",children:Object(_.jsx)(we,{children:"MdUserGuide"})}),Object(_.jsx)(j.a,{path:"/espace",children:Object(_.jsx)(We,{})}),Object(_.jsx)(j.a,{path:"/",children:Object(_.jsx)(ve,{})})]})})})}var ke=Object(l.a)({palette:{primary:{main:"#39C5BB",contrastText:"#fff"},secondary:{main:"#ffa990"}}});var Ge=function(){return o(),Object(_.jsx)(d.a,{theme:ke,children:Object(_.jsx)("div",{className:"App",children:Object(_.jsx)(Se,{})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var He=t(91),qe={content:"\u6b22\u8fce\u4f7f\u7528 nac-https://xd.sh.cn/nac",userInfo:{name:void 0,email:void 0,uid:void 0},successedData:!1},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_USERINFO":var t=a.userInfo;return Object(O.a)(Object(O.a)({},e),{},{userInfo:t});case"ADD_CONTENT":var _=a.content;return Object(O.a)(Object(O.a)({},e),{},{content:_});case"ADD_UPLOADSUCCESS":var r=a.successedData;return Object(O.a)(Object(O.a)({},e),{},{successedData:r});default:return e}},Fe=Object(He.b)(ze);c.a.render(Object(_.jsx)(oe.a,{store:Fe,children:Object(_.jsx)(Ge,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,a,t){"use strict";a.a=t.p+"static/media/espace_sample_picture.030e39d3.jpg"}},[[251,1,2]]]);
//# sourceMappingURL=main.1fcd1caa.chunk.js.map