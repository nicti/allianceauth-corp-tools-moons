(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{103:function(e,t,r){},128:function(e,t,r){},174:function(e,t,r){},194:function(e,t,r){},277:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(15),s=r.n(c),i=(r(174),r(32)),l=r(288),o=r(293),u=r(26),j=r(42),d=r(17),b=r.n(d),x=r(37),h=r.n(x);function m(){return m=Object(j.a)(b.a.mark((function e(){var t,r,n=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:3,e.next=3,h.a.get("/m/api/extractions",{params:{past_days:t}});case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function p(){return(p=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/m/api/extractions/past");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/m/api/extractions/future");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/m/api/user/permissions");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/m/api/admin/list");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}h.a.defaults.xsrfHeaderName="X-CSRFToken";var v=r(13),y=r(283),w=r(54),F=r(296),C=r(56),N=r(45),k=r(89),S=r(284),L=r(285),_=r(286),D=r(154),M=r(294),P=r(287),B=(r(194),r(128),r(2)),A=function(){return Object(B.jsx)(o.a.Body,{className:"flex-container",children:Object(B.jsxs)("div",{className:"text-center",children:[Object(B.jsx)("div",{className:"error-size bottom-text",children:Object(B.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",fill:"currentColor",class:"bi bi-exclamation-triangle error-anim",viewBox:"0 0 16 16",children:[Object(B.jsx)("path",{d:"M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"}),Object(B.jsx)("path",{d:"M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"})]})}),Object(B.jsx)("h3",{className:"text-margin",children:"Error Loading Component"})]})})};var H={option:function(e){return Object(v.a)(Object(v.a)({},e),{},{color:"black"})}};function z(e){var t=e.message;return Object(B.jsx)(y.a,{id:"character_tooltip",children:t})}function E(e){var t=e.column;t.filterValue,t.preFilteredRows,t.setFilter;return Object(B.jsx)(B.Fragment,{})}function R(e){var t=e.column,r=t.filterValue,n=t.preFilteredRows,a=t.setFilter,c=n.length;return Object(B.jsx)("input",{className:"form-control",value:r||"",onChange:function(e){a(e.target.value||void 0)},placeholder:"Search ".concat(c," records...")})}var T=function(){return{}};var I=function(e){var t=e.isLoading,r=e.isFetching,n=e.data,c=e.error,s=e.columns,i=e.asyncExpandFunction,l=e.getRowProps,o=void 0===l?T:l,u=e.defaultSort,j=void 0===u?[]:u,d=a.a.useMemo((function(){return{Filter:E}}),[]),b=a.a.useMemo((function(){return{text:function(e,t,r){return e.filter((function(e){return t.some((function(t){if(r){var n=e.values[t];return"object"===typeof n&&(n=n.name),e.hasOwnProperty("originalSubRows")&&(n+=e.originalSubRows.reduce((function(e,r){return e+" "+(n=r,t.split(".").reduce((function(e,t){return e[t]}),n));var n}),"")),!!n&&n.toLowerCase().includes(r.toLowerCase())}return!0}))}))}}}),[]),x=Object(C.useTable)({columns:s,data:n,defaultColumn:d,filterTypes:b,initialState:{pageSize:20,sortBy:j}},C.useFilters,C.useSortBy,C.useExpanded,C.usePagination),h=x.getTableProps,m=x.getTableBodyProps,p=x.headerGroups,f=x.page,O=x.prepareRow,g=x.canPreviousPage,y=x.canNextPage,N=x.pageOptions,H=x.pageCount,R=x.gotoPage,I=x.nextPage,V=x.previousPage,Q=x.setPageSize,W=x.visibleColumns,G=x.state,$=G.pageIndex,J=G.pageSize;return t?Object(B.jsx)("div",{className:"col-xs-12 text-center",children:Object(B.jsx)(k.a,{className:"spinner-size"})}):c?Object(B.jsx)(A,{}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)(S.a,{striped:!0,children:[Object(B.jsxs)("thead",Object(v.a)(Object(v.a)({},h()),{},{children:[p.map((function(e){return Object(B.jsx)("tr",Object(v.a)(Object(v.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(B.jsxs)("th",Object(v.a)(Object(v.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(B.jsx)("span",{className:"pull-right",children:e.canSort?e.isSorted?e.isSortedDesc?Object(B.jsx)(L.a,{glyph:"sort-by-attributes-alt"}):Object(B.jsx)(L.a,{glyph:"sort-by-attributes"}):Object(B.jsx)(L.a,{glyph:"sort"}):""})]}))}))}))})),p.map((function(e){return Object(B.jsx)("tr",Object(v.a)(Object(v.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(B.jsx)("th",Object(v.a)(Object(v.a)({},e.getHeaderProps()),{},{children:Object(B.jsx)("div",{children:e.canFilter?e.render("Filter"):null})}))}))}))}))]})),Object(B.jsx)("tbody",Object(v.a)(Object(v.a)({},m()),{},{children:f.map((function(e,t){O(e);var r=o(e);return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("tr",Object(v.a)(Object(v.a)({},e.getRowProps(r)),{},{children:e.cells.map((function(e){return Object(B.jsx)("td",Object(v.a)(Object(v.a)({style:{verticalAlign:"middle"}},e.getCellProps()),{},{children:e.render("Cell")}))}))})),e.isExpanded&&i({row:e,rowProps:r,visibleColumns:W})]})}))}))]}),Object(B.jsx)("div",{className:"pagination pull-right",children:Object(B.jsxs)(_.a,{children:[Object(B.jsxs)(D.a,{children:[Object(B.jsx)(w.a,{bsStyle:"success",onClick:function(){return R(0)},disabled:!g,children:Object(B.jsx)(L.a,{glyph:"step-backward"})})," ",Object(B.jsx)(w.a,{bsStyle:"success",onClick:function(){return V()},disabled:!g,children:Object(B.jsx)(L.a,{glyph:"triangle-left"})})," ",Object(B.jsx)(w.a,{bsStyle:"success",onClick:function(){return I()},disabled:!y,children:Object(B.jsx)(L.a,{glyph:"triangle-right"})})," ",Object(B.jsx)(w.a,{bsStyle:"success",onClick:function(){return R(H-1)},disabled:!y,children:Object(B.jsx)(L.a,{glyph:"step-forward"})})]}),Object(B.jsxs)(D.a,{children:[Object(B.jsx)(w.a,{active:!0,bsStyle:"success",children:"Page Size:"})," ",Object(B.jsx)(M.a,{id:"pageSizeDropdown",bsStyle:"success",title:J,onSelect:function(e){Q(Number(e))},children:[20,50,100,1e6].map((function(e){return Object(B.jsxs)(P.a,{id:e,eventKey:e,value:e,children:["Show ",e]},e)}))})]})]})}),Object(B.jsx)("div",{className:"pagination pull-left",children:Object(B.jsxs)(D.a,{children:[Object(B.jsx)(w.a,{active:!0,bsStyle:"info",children:Object(B.jsx)(B.Fragment,{children:N.length>0?Object(B.jsxs)(B.Fragment,{children:["Page"," ",Object(B.jsxs)("strong",{children:[$+1," of ",N.length]})]}):Object(B.jsxs)(B.Fragment,{children:["Page ",Object(B.jsx)("strong",{children:"- of -"})]})})})," ",r?Object(B.jsx)(F.a,{placement:"bottom",overlay:z({message:"Refreshing Data"}),children:Object(B.jsx)(w.a,{bsStyle:"info",children:Object(B.jsx)(L.a,{className:"glyphicon-refresh-animate",glyph:"refresh"})})}):Object(B.jsx)(F.a,{placement:"bottom",overlay:z({message:"Data Loaded: "+(new Date).toLocaleString()}),children:Object(B.jsx)(w.a,{bsStyle:"info",children:Object(B.jsx)(L.a,{glyph:"ok"})})})]})})]})},V=r(39),Q=r(40),W=r(41),G=r(160),$=function(e){Object(W.a)(r,e);var t=Object(G.a)(r);function r(e){var n;return Object(V.a)(this,r),(n=t.call(this,e)).state={error:null,errorInfo:null},n}return Object(Q.a)(r,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?Object(B.jsx)(A,{}):this.props.children}}]),r}(a.a.Component),J=(r(103),r(292)),K={1884:"#0D98BA",1921:"#FFAA1D",1920:"#4B8B3B",1922:"#E86100",1923:"#9B1C31"},U=function(){return Object(B.jsx)("div",{className:"flex-container",children:Object(B.jsxs)("div",{className:"text-center",children:[Object(B.jsx)(l.a,{bsSize:"small",style:{backgroundColor:K[1884],margin:"5px"},children:"Ubiquitous Moon Asteroids"}),Object(B.jsx)(l.a,{bsSize:"small",style:{backgroundColor:K[1920],margin:"5px"},children:"Common Moon Asteroids"}),Object(B.jsx)(l.a,{bsSize:"small",style:{backgroundColor:K[1921],margin:"5px"},children:"Uncommon Moon Asteroids"}),Object(B.jsx)(l.a,{bsSize:"small",style:{backgroundColor:K[1922],margin:"5px"},children:"Rare Moon Asteroids"}),Object(B.jsx)(l.a,{bsSize:"small",style:{backgroundColor:K[1923],margin:"5px"},children:"Exceptional Moon Asteroids"})]})})},q=Intl.DateTimeFormat("default",{year:"numeric",month:"long",day:"numeric"}),X=Intl.DateTimeFormat("default",{hour:"numeric",minute:"numeric",hour12:!1}),Y=function(){var e=Object(u.useQuery)(["extractions"],(function(){return function(){return m.apply(this,arguments)}()}),{initialData:[],refetchOnWindowFocus:!1}),t=e.isLoading,r=e.isFetching,n=e.error,c=e.data,s=a.a.useMemo((function(){return[{Header:"Frack Arrival",accessor:"extraction_end",Cell:function(e){return Object(B.jsxs)("h5",{className:"text-center",children:[q.format(Date.parse(e.value))," ",X.format(Date.parse(e.value)),Object(B.jsx)("br",{}),Object(B.jsx)(l.a,{className:"",children:Object(B.jsx)(J.a,{date:Date.parse(e.value)})})]})}},{Header:"Moon Name",accessor:"moon.name",Filter:R,filter:function(e,t,r){return e.filter((function(e){return t.some((function(t){if(r){var n=e.values[t];return n+=" ",n+=e.original.ObserverName,n+=" ",!!(n+=e.original.constellation)&&n.toLowerCase().includes(r.toLowerCase())}return!0}))}))},Cell:function(e){return Object(B.jsxs)("div",{className:"text-center",children:[Object(B.jsx)("h4",{children:e.value}),Object(B.jsx)("br",{}),Object(B.jsx)("h5",{children:e.cell.row.original.ObserverName}),Object(B.jsx)("h5",{children:e.cell.row.original.constellation}),e.cell.row.original.value>0&&Object(B.jsxs)(l.a,{children:["$",Number(e.cell.row.original.value/1e9).toFixed(2),"B"]})]})}},{Header:"Jackpot",accessor:"jackpot",Cell:function(e){return e.value?Object(B.jsx)("div",{className:"text-center jackpot",children:Object(B.jsx)("i",{class:"fas fa-award",style:{fontSize:"64px"}})}):Object(B.jsx)(B.Fragment,{})}},{Header:"Ore Composition",accessor:"mined_ore",Filter:function(e){var t=e.column,r=t.setFilter,n=t.filterValue,c=t.preFilteredRows,s=t.id,l=a.a.useMemo((function(){var e=new Set;return c?(c.forEach((function(t){null!==t.values[s]&&t.values[s].forEach((function(t){e.add(t.type.cat)}))})),Object(i.a)(e.values())):[]}),[s,c]);return Object(B.jsx)(N.a,{title:n,onChange:function(e){return r(e.value)},value:{label:n||"All"},defaultValue:{label:"All"},styles:H,options:[{id:-1,value:"",label:"All"}].concat(l.map((function(e,t){return{id:t,value:e,label:e}})))},n)},filter:function(e,t,r){return e.filter((function(e){return t.some((function(t){if(r){var n=e.values[t].reduce((function(e,t){return e+"  "+t.type.cat}),"");return!!n&&n.toLowerCase().includes(r.toLowerCase())}return!0}))}))},Cell:function(e){return e.value?Object(B.jsx)(B.Fragment,{children:Object(B.jsx)("div",{className:"",children:e.value.map((function(t){var r=Number(t.volume/t.total_volume*100).toFixed(1);return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)("div",{style:{display:"flex",alignContent:"center",justifyContent:"center"},children:[Object(B.jsx)("img",{alt:t.type.name,style:{width:"30px",height:"30px",margin:"15px",borderRadius:"30px",backgroundColor:K[t.type.cat_id]},src:"https://images.evetech.net/types/"+t.type.id+"/icon"}),Object(B.jsxs)("div",{style:{flexGrow:1},children:[Object(B.jsxs)("h5",{children:[t.type.name," ",Object(B.jsxs)(l.a,{style:{marginLeft:"5px"},className:"",children:[(t.total_volume/e.cell.row.original.total_m3*100).toFixed(0),"%"]}),t.value>0?Object(B.jsxs)(l.a,{className:"",style:{marginLeft:"5px"},children:["$",Number(t.value/1e9).toFixed(2),"B Mined"]}):Object(B.jsx)(B.Fragment,{}),Object(B.jsx)(l.a,{className:"pull-right",bsSize:"small",style:{backgroundColor:K[t.type.cat_id]},children:t.type.cat})]}),Object(B.jsx)("div",{className:"progress",style:{margin:"0px"},children:Object(B.jsxs)("div",{className:r>70?"progress-bar progress-bar-striped progress-bar-warning":"progress-bar progress-bar-striped progress-bar-info active",style:{width:r+"%",color:"black"},children:[r,"% Mined"]})})]})]})})}))})}):Object(B.jsx)(B.Fragment,{})}}]}),[]);return Object(B.jsxs)($,{children:[Object(B.jsx)("h5",{className:"text-center small",children:"Key:"}),Object(B.jsx)(U,{}),Object(B.jsx)("br",{}),Object(B.jsx)(o.a,{children:Object(B.jsx)(o.a.Body,{children:Object(B.jsx)(I,{isLoading:t,isFetching:r,data:c,columns:s,error:n,defaultSort:[{id:"extraction_end",desc:!0}]})})})]})},Z=Intl.DateTimeFormat("default",{year:"numeric",month:"long",day:"numeric"}),ee=Intl.DateTimeFormat("default",{hour:"numeric",minute:"numeric",hour12:!1}),te=function(){var e=Object(u.useQuery)(["future-extractions"],(function(){return function(){return f.apply(this,arguments)}()}),{initialData:[],refetchOnWindowFocus:!1}),t=e.isLoading,r=e.isFetching,n=e.error,c=e.data,s=a.a.useMemo((function(){return[{Header:"Frack Arrival",accessor:"extraction_end",Cell:function(e){return Object(B.jsxs)("h5",{className:"text-center",children:[Z.format(Date.parse(e.value))," ",ee.format(Date.parse(e.value)),Object(B.jsx)("br",{}),Object(B.jsx)(l.a,{className:"",children:Object(B.jsx)(J.a,{date:Date.parse(e.value)})})]})}},{Header:"Moon Name",accessor:"moon.name",Filter:R,filter:function(e,t,r){return e.filter((function(e){return t.some((function(t){if(r){var n=e.values[t];return n+=" ",n+=e.original.ObserverName,n+=" ",!!(n+=e.original.constellation)&&n.toLowerCase().includes(r.toLowerCase())}return!0}))}))},Cell:function(e){return Object(B.jsxs)("div",{className:"text-center",children:[Object(B.jsx)("h4",{children:e.value}),Object(B.jsx)("br",{}),Object(B.jsx)("h5",{children:e.cell.row.original.ObserverName}),Object(B.jsx)("h5",{children:e.cell.row.original.constellation}),Object(B.jsxs)(l.a,{children:["$",Number(e.cell.row.original.value/1e9).toFixed(2),"B"]})]})}},{Header:"Ore Composition",accessor:"mined_ore",Filter:function(e){var t=e.column,r=t.setFilter,n=t.filterValue,c=t.preFilteredRows,s=t.id,l=a.a.useMemo((function(){var e=new Set;return c?(c.forEach((function(t){null!==t.values[s]&&t.values[s].forEach((function(t){e.add(t.type.cat)}))})),Object(i.a)(e.values())):[]}),[s,c]);return Object(B.jsx)(N.a,{title:n,onChange:function(e){return r(e.value)},value:{label:n||"All"},defaultValue:{label:"All"},styles:H,options:[{id:-1,value:"",label:"All"}].concat(l.map((function(e,t){return{id:t,value:e,label:e}})))},n)},filter:function(e,t,r){return e.filter((function(e){return t.some((function(t){if(r){var n=e.values[t].reduce((function(e,t){return e+"  "+t.type.cat}),"");return!!n&&n.toLowerCase().includes(r.toLowerCase())}return!0}))}))},Cell:function(e){return e.value?Object(B.jsx)("div",{className:"",children:e.value.map((function(t){var r=(t.total_volume/e.cell.row.original.total_m3*100).toFixed(0);return Object(B.jsxs)("div",{style:{display:"flex",alignContent:"center",justifyContent:"center"},children:[Object(B.jsx)("img",{alt:t.type.name,style:{width:"30px",height:"30px",margin:"15px",borderRadius:"30px",backgroundColor:K[t.type.cat_id]},src:"https://images.evetech.net/types/"+t.type.id+"/icon"}),Object(B.jsxs)("div",{style:{flexGrow:1},children:[Object(B.jsxs)("h5",{children:[t.type.name," ",Object(B.jsxs)(l.a,{style:{marginLeft:"5px"},className:"",children:[r,"%"]}),Object(B.jsx)(l.a,{className:"pull-right",bsSize:"small",style:{backgroundColor:K[t.type.cat_id]},children:t.type.cat}),Object(B.jsxs)(l.a,{className:"pull-right",bsSize:"small",style:{backgroundColor:K[t.type.cat_id],marginRight:"2px"},children:["$",Number(t.value/1e9).toFixed(2),"B"]})]}),Object(B.jsx)("div",{className:"progress",style:{minWidth:"40vw",margin:"0px"},children:Object(B.jsxs)("div",{className:"progress-bar progress-bar-striped progress-bar-info active",style:{width:r+"%",color:"black",backgroundColor:K[t.type.cat_id]},children:[r,"%"]})})]})]})}))}):Object(B.jsx)(B.Fragment,{})}}]}),[]);return Object(B.jsxs)($,{children:[Object(B.jsx)("h5",{className:"text-center small",children:"Key:"}),Object(B.jsx)(U,{}),Object(B.jsx)("br",{}),Object(B.jsx)(o.a,{children:Object(B.jsx)(o.a.Body,{children:Object(B.jsx)(I,{isLoading:t,isFetching:r,data:c,columns:s,error:n,defaultSort:[{id:"extraction_end",desc:!1}]})})})]})},re=r(159),ne=r(291),ae=function(){return Object(B.jsx)(o.a.Body,{className:"flex-container",children:Object(B.jsx)(k.a,{className:"spinner-size"})})},ce=r(106),se=r(16),ie=r(290),le=r(295),oe=r(289),ue=r(1),je=function(e){var t=Object(se.g)();Object(n.useEffect)((function(){}),[t]);var r=window.location.href.endsWith(e.href)?"active":"";return Object(B.jsx)(oe.a,Object(v.a)(Object(v.a)({className:r},e),{},{children:e.children}))};je.contextTypes={router:r.n(ue).a.object};var de=je,be=function(e){var t=e.futureExtractions,r=void 0!==t&&t,n=(e.observers,e.admin),a=void 0!==n&&n;return Object(B.jsxs)(le.a,{fluid:!0,collapseOnSelect:!0,children:[Object(B.jsx)(le.a.Header,{children:Object(B.jsx)(le.a.Toggle,{})}),Object(B.jsx)(le.a.Collapse,{children:Object(B.jsxs)(ie.a,{children:[Object(B.jsx)(le.a.Brand,{children:"Moon Board"}),Object(B.jsx)(de,{href:"#/active",children:"Active Moons"},"active"),r&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(de,{href:"#/future",children:"Future Extractions"},"future"),Object(B.jsx)(de,{href:"#/past",children:"Past Extractions"},"past")]}),a&&Object(B.jsx)(de,{href:"#/admin",children:"Admin"},"admin")]})})]})},xe=function(){var e=Object(u.useQuery)(["admin-corps"],(function(){return function(){return g.apply(this,arguments)}()}),{initialData:[],refetchOnWindowFocus:!1}),t=e.isLoading,r=e.isFetching,n=e.error,c=e.data,s=a.a.useMemo((function(){return[{Header:"Corporation",accessor:"name"},{Header:"Character Level Tokens",accessor:"char_tokens"},{Header:"Corp Level Tokens",accessor:"corp_tokens"},{Header:"Last Observation Update",accessor:"obs"},{Header:"Last Frack Update",accessor:"frack"}]}),[]);return Object(B.jsx)($,{children:Object(B.jsx)(o.a,{children:Object(B.jsx)(o.a.Body,{children:Object(B.jsx)(I,{isLoading:t,isFetching:r,data:c,columns:s,error:n})})})})},he=Intl.DateTimeFormat("default",{year:"numeric",month:"long",day:"numeric"}),me=Intl.DateTimeFormat("default",{hour:"numeric",minute:"numeric",hour12:!1}),pe=function(){var e=Object(u.useQuery)(["extractions","Past"],(function(){return function(){return p.apply(this,arguments)}()}),{initialData:[],refetchOnWindowFocus:!1}),t=e.isLoading,r=e.isFetching,n=e.error,c=e.data,s=a.a.useMemo((function(){return[{Header:"Frack Arrival",accessor:"extraction_end",Cell:function(e){return Object(B.jsxs)("h5",{className:"text-center",children:[he.format(Date.parse(e.value))," ",me.format(Date.parse(e.value)),Object(B.jsx)("br",{}),Object(B.jsx)(l.a,{className:"",children:Object(B.jsx)(J.a,{date:Date.parse(e.value)})})]})}},{Header:"Moon Name",accessor:"moon.name",Filter:R,filter:function(e,t,r){return e.filter((function(e){return t.some((function(t){if(r){var n=e.values[t];return n+=" ",n+=e.original.ObserverName,n+=" ",!!(n+=e.original.constellation)&&n.toLowerCase().includes(r.toLowerCase())}return!0}))}))},Cell:function(e){return Object(B.jsxs)("div",{className:"text-center",children:[Object(B.jsx)("h4",{children:e.value}),Object(B.jsx)("br",{}),Object(B.jsx)("h5",{children:e.cell.row.original.ObserverName}),Object(B.jsx)("h5",{children:e.cell.row.original.constellation}),e.cell.row.original.value>0&&Object(B.jsxs)(l.a,{children:["$",Number(e.cell.row.original.value/1e9).toFixed(2),"B"]})]})}},{Header:"Jackpot",accessor:"jackpot",Cell:function(e){return e.value?Object(B.jsx)("div",{className:"text-center jackpot",children:Object(B.jsx)("i",{class:"fas fa-award",style:{fontSize:"64px"}})}):Object(B.jsx)(B.Fragment,{})}},{Header:"Ore Composition",accessor:"mined_ore",Filter:function(e){var t=e.column,r=t.setFilter,n=t.filterValue,c=t.preFilteredRows,s=t.id,l=a.a.useMemo((function(){var e=new Set;return c?(c.forEach((function(t){null!==t.values[s]&&t.values[s].forEach((function(t){e.add(t.type.cat)}))})),Object(i.a)(e.values())):[]}),[s,c]);return Object(B.jsx)(N.a,{title:n,onChange:function(e){return r(e.value)},value:{label:n||"All"},defaultValue:{label:"All"},styles:H,options:[{id:-1,value:"",label:"All"}].concat(l.map((function(e,t){return{id:t,value:e,label:e}})))},n)},filter:function(e,t,r){return e.filter((function(e){return t.some((function(t){if(r){var n=e.values[t].reduce((function(e,t){return e+"  "+t.type.cat}),"");return!!n&&n.toLowerCase().includes(r.toLowerCase())}return!0}))}))},Cell:function(e){return e.value?Object(B.jsx)(B.Fragment,{children:Object(B.jsx)("div",{className:"",children:e.value.map((function(t){var r=Number(t.volume/t.total_volume*100).toFixed(1);return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)("div",{style:{display:"flex",alignContent:"center",justifyContent:"center"},children:[Object(B.jsx)("img",{alt:t.type.name,style:{width:"30px",height:"30px",margin:"15px",borderRadius:"30px",backgroundColor:K[t.type.cat_id]},src:"https://images.evetech.net/types/"+t.type.id+"/icon"}),Object(B.jsxs)("div",{style:{flexGrow:1},children:[Object(B.jsxs)("h5",{children:[t.type.name," ",Object(B.jsxs)(l.a,{style:{marginLeft:"5px"},className:"",children:[(t.total_volume/e.cell.row.original.total_m3*100).toFixed(0),"%"]}),t.value>0?Object(B.jsxs)(l.a,{className:"",style:{marginLeft:"5px"},children:["$",Number(t.value/1e9).toFixed(2),"B Mined"]}):Object(B.jsx)(B.Fragment,{}),Object(B.jsx)(l.a,{className:"pull-right",bsSize:"small",style:{backgroundColor:K[t.type.cat_id]},children:t.type.cat})]}),Object(B.jsx)("div",{className:"progress",style:{margin:"0px"},children:Object(B.jsxs)("div",{className:r>70?"progress-bar progress-bar-striped progress-bar-warning":"progress-bar progress-bar-striped progress-bar-info active",style:{width:r+"%",color:"black"},children:[r,"% Mined"]})})]})]})})}))})}):Object(B.jsx)(B.Fragment,{})}}]}),[]);return Object(B.jsxs)($,{children:[Object(B.jsx)("h5",{className:"text-center small",children:"Key:"}),Object(B.jsx)(U,{}),Object(B.jsx)("br",{}),Object(B.jsx)(o.a,{children:Object(B.jsx)(o.a.Body,{children:Object(B.jsx)(I,{isLoading:t,isFetching:r,data:c,columns:s,error:n,defaultSort:[{id:"extraction_end",desc:!0}]})})})]})};ne.a.addDefaultLocale(re);var fe=function(){var e=Object(u.useQuery)(["perms"],(function(){return function(){return O.apply(this,arguments)}()}),{refetchOnWindowFocus:!1}),t=e.isLoading,r=e.data;return t?Object(B.jsx)(ae,{}):Object(B.jsxs)(ce.a,{children:[Object(B.jsx)("br",{}),Object(B.jsx)(be,{futureExtractions:r.view_observations,admin:r.su}),Object(B.jsxs)(se.d,{children:[Object(B.jsx)(se.b,{exact:!0,path:"/",component:function(){return Object(B.jsx)(se.a,{to:"/active"})}}),Object(B.jsx)(se.b,{path:"/active",component:function(){return Y()}}),r.su&&Object(B.jsx)(se.b,{path:"/admin",component:function(){return xe()}}),r.view_observations&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(se.b,{path:"/future",component:function(){return te()}}),Object(B.jsx)(se.b,{path:"/past",component:function(){return pe()}})]})]})]})},Oe=new u.QueryClient;s.a.render(Object(B.jsx)(a.a.StrictMode,{children:Object(B.jsx)(u.QueryClientProvider,{client:Oe,children:Object(B.jsx)(fe,{})})}),document.getElementById("root"))}},[[277,1,2]]]);
//# sourceMappingURL=main.61cfc953.chunk.js.map
