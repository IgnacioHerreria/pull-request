(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{250:function(t,e,r){var content=r(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("7388ab72",content,!0,{sourceMap:!1})},252:function(t,e,r){var content=r(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("61f6f691",content,!0,{sourceMap:!1})},269:function(t,e,r){"use strict";var n={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:this.$router.options.routes,miniVariant:!1,right:!0,rightDrawer:!1,title:"NUXT"}}},o=r(78),c=r(89),l=r.n(c),v=r(401),d=r(409),f=r(406),_=r(217),m=r(410),x=r(407),h=r(191),V=r(190),k=r(120),w=r(52),C=r(408),y=r(411),L=r(405),N=r(267),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",t._l(t.items,(function(e,i){return r("v-list-item",{key:i,attrs:{to:e.path,router:"",exact:""}},[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)],1)})),1)],1),t._v(" "),r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[r("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[r("v-icon",[t._v("mdi-application")])],1),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[r("v-icon",[t._v("mdi-minus")])],1),t._v(" "),r("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),r("v-spacer"),t._v(" "),r("migraciones")],1),t._v(" "),r("v-main",[r("v-container",[r("Nuxt")],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:!t.fixed,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{Migraciones:r(389).default}),l()(component,{VApp:v.a,VAppBar:d.a,VAppBarNavIcon:f.a,VBtn:_.a,VContainer:m.a,VFooter:x.a,VIcon:h.a,VList:V.a,VListItem:k.a,VListItemContent:w.a,VListItemTitle:w.b,VMain:C.a,VNavigationDrawer:y.a,VSpacer:L.a,VToolbarTitle:N.a})},281:function(t,e,r){r(282),t.exports=r(283)},310:function(t,e,r){"use strict";r(250)},311:function(t,e,r){var n=r(15)(!1);n.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=n},316:function(t,e,r){var map={"./20210906_130008 primera_migra.txt":[273,1],"./20210906_133555 creacion-nueva-tabla.txt":[274,2],"./20210906_135626 crecion_tabla_usuarios.txt":[275,3],"./20210906_140404 creacion-nueva-tabla-administradores.txt":[276,4],"./20210906_163442 creacion-nueva-estructura-biss.txt":[277,5],"./20210906_163607 creacion-nueva-estructura-sgc.txt":[278,6]};function n(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],n=e[0];return r.e(e[1]).then((function(){return r(n)}))}n.keys=function(){return Object.keys(map)},n.id=316,t.exports=n},317:function(t,e,r){var map={"./20210906_130008 primera_migra.txt":[273,1],"./20210906_133555 creacion-nueva-tabla.txt":[274,2],"./20210906_135626 crecion_tabla_usuarios.txt":[275,3],"./20210906_140404 creacion-nueva-tabla-administradores.txt":[276,4],"./20210906_163442 creacion-nueva-estructura-biss.txt":[277,5],"./20210906_163607 creacion-nueva-estructura-sgc.txt":[278,6]};function n(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],n=e[0];return r.e(e[1]).then((function(){return r(n)}))}n.keys=function(){return Object.keys(map)},n.id=317,t.exports=n},318:function(t,e,r){"use strict";r(252)},319:function(t,e,r){var n=r(15)(!1);n.push([t.i,".migra[data-v-41bc8cde]{white-space:break-spaces}",""]),t.exports=n},389:function(t,e,r){"use strict";r.r(e);r(22),r(39),r(41),r(32),r(63),r(30),r(71);var n=r(316),o={name:"migraciones",data:function(){return{dialog:!1,lista:[],texto:null,cargando:!1,sel:0}},methods:{cargarTxt:function(t){var e=this;this.cargando=!0,r(317)("./"+t.name+".txt").then((function(t){e.texto=t.default,e.cargando=!1}))},updateMigras:function(){this.lista=Array.from(n.keys(),(function(i){return{name:i.split("/").pop().split(".")[0],file:i}}))}},created:function(){this.updateMigras()}},c=(r(318),r(78)),l=r(89),v=r.n(l),d=r(217),f=r(188),_=r(91),m=r(402),x=r(403),h=r(392),V=r(190),k=r(120),w=r(52),C=r(194),y=r(404),L=r(405),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("v-dialog",{attrs:{width:"900"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"red lighten-2",dark:"",small:""}},"v-btn",o,!1),n),[t._v("\n        Migraciones\n      ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",[r("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v("\n        Lista de migraciones\n        "),r("v-btn",{attrs:{"x-small":""},on:{click:t.updateMigras}},[t._v("Actualizar")])],1),t._v(" "),r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12",lg:"4",md:"4"}},[r("v-list",{attrs:{dense:""}},[r("v-list-item-group",{attrs:{color:"primary"},model:{value:t.sel,callback:function(e){t.sel=e},expression:"sel"}},t._l(t.lista,(function(e,n){return r("v-list-item",{key:n,on:{click:function(r){return t.cargarTxt(e)}}},[r("v-list-item-content",{staticClass:"pa-0 ma-0"},[r("v-list-item-title",{staticClass:"text pa-0 ma-0"},[t._v("\n                        "+t._s(e.name)+"\n                      ")])],1)],1)})),1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",lg:"8",md:"8"}},[t.cargando?[r("span",[t._v("Cargando")])]:[r("b",[t._v(t._s(t.lista[t.sel].name))]),t._v(" "),r("div",{staticClass:"migra"},[t._v(t._s(t.texto))])]],2)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Cerrar\n        ")])],1)],1)],1)],1)}),[],!1,null,"41bc8cde",null);e.default=component.exports;v()(component,{VBtn:d.a,VCard:f.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VCol:m.a,VDialog:x.a,VDivider:h.a,VList:V.a,VListItem:k.a,VListItemContent:w.a,VListItemGroup:C.a,VListItemTitle:w.b,VRow:y.a,VSpacer:L.a})},83:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(310),r(78)),c=r(89),l=r.n(c),v=r(401),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:v.a})}},[[281,14,8,15]]]);