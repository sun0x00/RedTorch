(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{CGdZ:function(e,t,a){e.exports={card:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-multi-account\\-trade-form-card",formItem:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-multi-account\\-trade-form-formItem",optional:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-multi-account\\-trade-form-optional"}},"N/5h":function(e,t,a){},QTkO:function(e,t,a){"use strict";var l=a("284h"),u=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var n=u(a("BMrR"));a("jCWc");var c=u(a("kPKH")),r=u(a("lwsE")),o=u(a("W8MJ")),d=u(a("a1gu")),i=u(a("Nsbk")),s=u(a("7W2i"));a("Znn+");var f=u(a("ZTPi")),m=l(a("q1tI")),p=u(a("usdK")),E=u(a("v99g")),h=u(a("N/5h")),v=u(a("koM6")),y=f.default.TabPane,A=function(e){function t(){var e,a;(0,r.default)(this,t);for(var l=arguments.length,u=new Array(l),n=0;n<l;n++)u[n]=arguments[n];return a=(0,d.default)(this,(e=(0,i.default)(t)).call.apply(e,[this].concat(u))),a.onTabChange=function(e){var t=a.props.match;switch(e){case"tradeBoard":p.default.push("".concat(t.url,"/tradeBoard"));break;case"accounts":p.default.push("".concat(t.url,"/accounts"));break;case"positions":p.default.push("".concat(t.url,"/positions"));break;case"orders":p.default.push("".concat(t.url,"/orders"));break;case"transactions":p.default.push("".concat(t.url,"/transactions"));break;default:break}},a}return(0,s.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.listLoading,a=e.match,l=e.location,u=e.children;return m.default.createElement(E.default,{className:h.default.userCenter},m.default.createElement(n.default,{gutter:10},m.default.createElement(c.default,{xxl:5,lg:6,md:24},m.default.createElement(v.default,null)),m.default.createElement(c.default,{xxl:19,lg:18,md:24,style:{background:"#FFF"}},m.default.createElement(f.default,{defaultActiveKey:l.pathname.replace("".concat(a.path,"/"),""),onChange:this.onTabChange,animated:!1,loading:t,size:"small"},m.default.createElement(y,{tab:"\u4ea4\u6613",key:"tradeBoard"},u),m.default.createElement(y,{tab:"\u59d4\u6258",key:"orders"},u),m.default.createElement(y,{tab:"\u6210\u4ea4",key:"transactions"},u),m.default.createElement(y,{tab:"\u6301\u4ed3",key:"positions"},u),m.default.createElement(y,{tab:"\u8d26\u6237",key:"accounts"},u)))))}}]),t}(m.PureComponent),g=A;t.default=g},koM6:function(e,t,a){"use strict";var l=a("TqRt"),u=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var n=l(a("bx4M"));a("+L6B");var c=l(a("2/Rp")),r=l(a("pVnL"));a("giR+");var o=l(a("fyUT"));a("5Dmo");var d=l(a("3S7+")),i=l(a("lwsE")),s=l(a("W8MJ")),f=l(a("a1gu")),m=l(a("Nsbk")),p=l(a("7W2i"));a("5NDa");var E=l(a("5rEg"));a("OaEy");var h=l(a("2fM7"));a("7Kak");var v=l(a("9yH6"));a("y8nQ");var y,A,g,C=l(a("Vl3Y")),F=u(a("q1tI")),I=a("MuoO"),b=l(a("CGdZ")),D=C.default.Item,S=v.default.Group,T=v.default.Button,N=h.default.Option,w=E.default.Search,L={labelCol:{md:{span:24},lg:{span:8}},wrapperCol:{md:{span:24},lg:{span:16}}},V={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:4}}},k=(y=(0,I.connect)(function(e){var t=e.tick,a=e.operation,l=e.contract,u=e.multiAccountTradeForm,n=e.account;return{tick:t,operation:a,contract:l,multiAccountTradeForm:u,account:n}}),A=C.default.create(),y(g=A(g=function(e){function t(e){var a;return(0,i.default)(this,t),a=(0,f.default)(this,(0,m.default)(t).call(this,e)),a.handleSubscribe=function(e,t){var l=a.props,u=l.dispatch,n=l.form,c=l.account;n.validateFields(["fuzzySymbol"],function(e,a){if(t.preventDefault(),null==e||void 0===e.fuzzySymbol){var l=n.getFieldValue("rtAccountIDs");if(l.length>0)l.includes("ALL")?c.accounts.forEach(function(e){var t={symbol:a.fuzzySymbol,exchange:n.getFieldValue("exchange"),productClass:n.getFieldValue("productClass"),currency:n.getFieldValue("currency"),gatewayID:e.gatewayID};u({type:"operation/subscribe",payload:t})}):c.accounts.forEach(function(e){if(l.includes(e.rtAccountID)){var t={symbol:a.fuzzySymbol,exchange:n.getFieldValue("exchange"),productClass:n.getFieldValue("productClass"),currency:n.getFieldValue("currency"),gatewayID:e.gatewayID};u({type:"operation/subscribe",payload:t})}});else{var r={symbol:a.fuzzySymbol,exchange:n.getFieldValue("exchange"),productClass:n.getFieldValue("productClass"),currency:n.getFieldValue("currency")};u({type:"operation/subscribe",payload:r})}}})},a.handleSubmit=function(e){var t=a.props,l=t.dispatch,u=t.form,n=t.account,c=t.multiAccountTradeForm;e.preventDefault(),u.validateFieldsAndScroll(function(e,t){if(!e){var a={};c.rtAccountIDs.forEach(function(e){a[e]=u.getFieldValue("accountVolume_".concat(e))}),n.accounts.forEach(function(e){if(c.rtAccountIDs.includes(e.rtAccountID)){var n={symbol:t.fuzzySymbol,direction:u.getFieldValue("direction"),offset:u.getFieldValue("offset"),price:u.getFieldValue("price"),priceType:u.getFieldValue("priceType"),exchange:u.getFieldValue("exchange"),currency:u.getFieldValue("currency"),productClass:u.getFieldValue("productClass"),gatewayID:e.gatewayID,rtAccountID:e.rtAccountID,volume:a[e.rtAccountID]};l({type:"operation/sendOrder",payload:n})}})}})},a.resetForm=function(){var e=a.props,t=e.form,l=e.dispatch;l({type:"multiAccountTradeForm/reset",payload:{}}),t.resetFields()},a.cancelAllOrders=function(e){var t=a.props.dispatch;e.preventDefault(),t({type:"operation/cancelAllOrders",payload:{}})},a.handleFuzzySymbolChange=function(e){var t=a.props,l=t.dispatch,u=t.tick,n=t.form;l({type:"multiAccountTradeForm/update",payload:{fuzzySymbol:e.target.value}}),l({type:"multiAccountTradeForm/updateTick",payload:u.ticks}),n.resetFields(["price"])},a.handlePriceAutoCompleteChange=function(e){var t=a.props,l=t.dispatch,u=t.tick,n=t.form;l({type:"multiAccountTradeForm/update",payload:{priceAutoComplete:e.target.value}}),l({type:"multiAccountTradeForm/updateTick",payload:u.ticks}),n.resetFields(["price"])},a.handleDirectionChange=function(e){var t=a.props,l=t.dispatch,u=t.tick,n=t.form;l({type:"multiAccountTradeForm/update",payload:{direction:e.target.value}}),l({type:"multiAccountTradeForm/updateTick",payload:u.ticks}),n.resetFields(["price"])},a.handlePriceChange=function(e){var t=a.props,l=t.dispatch,u=t.tick,n=t.form;l({type:"multiAccountTradeForm/update",payload:{price:e}}),l({type:"multiAccountTradeForm/updateTick",payload:u.ticks}),n.resetFields(["price"])},a.handleExchangeChange=function(e){var t=a.props,l=t.dispatch,u=t.tick,n=t.form;l({type:"multiAccountTradeForm/update",payload:{exchange:e}}),l({type:"multiAccountTradeForm/updateTick",payload:u.ticks}),n.resetFields(["price"])},a.handleRtAccountIDsChange=function(e){var t=a.props,l=t.dispatch,u=t.multiAccountTradeForm,n=t.form;l({type:"multiAccountTradeForm/update",payload:{rtAccountIDs:e}}),u.rtAccountIDs.forEach(function(e){var t={};t["accountVolume_".concat(e)]=0,n.setFieldsValue(t)})},a.handleAccountVolumeInputChange=function(e,t){var l=a.props,u=l.multiAccountTradeForm,n=l.form,c=l.account;if("MANUAL"!==n.getFieldValue("volumeAllot"))if("EQUAL"===n.getFieldValue("volumeAllot"))u.rtAccountIDs.forEach(function(e){var a={};a["accountVolume_".concat(e)]=t,n.setFieldsValue(a)});else if("BALANCE"===n.getFieldValue("volumeAllot")){var r=0;c.accounts.forEach(function(t){t.rtAccountID===e&&(r=t.balance)}),u.rtAccountIDs.forEach(function(e){var a=0;if(c.accounts.forEach(function(t){t.rtAccountID===e&&(a=t.balance)}),0!==r){var l={},u=Number.isNaN(Math.round(t*(a/r)))?0:Math.round(t*(a/r));l["accountVolume_".concat(e)]=u,n.setFieldsValue(l)}})}else if("AVAILABLE"===n.getFieldValue("volumeAllot")){var o=0;c.accounts.forEach(function(t){t.rtAccountID===e&&(o=t.available)}),u.rtAccountIDs.forEach(function(e){var a=0;if(c.accounts.forEach(function(t){t.rtAccountID===e&&(a=t.available)}),0!==o){var l={},u=Number.isNaN(Math.round(t*(a/o)))?0:Math.round(t*(a/o));l["accountVolume_".concat(e)]=u,n.setFieldsValue(l)}})}},a.handleVolumeAllotChange=function(){var e=a.props,t=e.multiAccountTradeForm,l=e.form;t.rtAccountIDs.forEach(function(e){var t={};t["accountVolume_".concat(e)]=0,l.setFieldsValue(t)})},a.onWindowResize=function(){a.setState({cardHeight:(window.innerHeight-70>550?window.innerHeight-70:550)||550})},a.componentDidMount=function(){var e=a.props,t=e.dispatch,l=e.form;t({type:"account/fetchAccounts",payload:{}}),t({type:"multiAccountTradeForm/fetchContracts",payload:{}}),t({type:"multiAccountTradeForm/reset",payload:{}});var u=l;t({type:"multiAccountTradeForm/update",payload:{form:u}}),window.addEventListener("resize",a.onWindowResize)},a.componentWillUnmount=function(){window.removeEventListener("resize",a.onWindowResize)},a.state={cardHeight:(window.innerHeight-70>550?window.innerHeight-70:550)||550},a}return(0,p.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.submitting,l=t.account.accounts,u=t.form.getFieldDecorator,i=t.multiAccountTradeForm,s=this.state.cardHeight,f=[];l.forEach(function(e){f.push(F.default.createElement(N,{key:e.rtAccountID,value:e.rtAccountID},"\u8d26\u6237:[".concat(e.accountID,"] \u5e01\u79cd:[").concat(e.currency,"] \u7f51\u5173:[").concat(e.gatewayDisplayName,"]")))});var m=!1;"MANUAL"!==i.priceAutoComplete&&(m=!0);var p=[];return l.forEach(function(t){if(i.rtAccountIDs.includes(t.rtAccountID)){var a=F.default.createElement(D,(0,r.default)({className:b.default.formItem},L,{label:F.default.createElement(d.default,{title:"\u8d26\u6237:[".concat(t.accountID,"] \u5e01\u79cd:[").concat(t.currency,"] \u7f51\u5173:[").concat(t.gatewayDisplayName,"]")},F.default.createElement("span",null,t.accountID,".",t.currency)),key:t.rtAccountID}),u("accountVolume_".concat(t.rtAccountID),{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6570\u91cf"}]})(F.default.createElement(o.default,{onChange:function(a){return e.handleAccountVolumeInputChange(t.rtAccountID,a)},style:{width:"100%"},min:0,max:999999999,step:1})));p.push(a)}}),F.default.createElement(n.default,{bordered:!0,style:{height:s,overflowY:"auto"},gutter:0},F.default.createElement(C.default,{onSubmit:this.handleSubmit,hideRequiredMark:!0,gutter:0},F.default.createElement(D,(0,r.default)({className:b.default.formItem},L,{label:"\u4ee3\u7801"}),u("fuzzySymbol",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4ee3\u7801",initialValue:i.fuzzySymbol}]})(F.default.createElement(w,{size:"small",placeholder:"\u652f\u6301\u6a21\u7cca\u67e5\u8be2",onChange:function(t){return e.handleFuzzySymbolChange(t)},onSearch:function(t,a){return e.handleSubscribe(t,a)},enterButton:!0}))),F.default.createElement(D,(0,r.default)({className:b.default.formItem},L,{label:F.default.createElement("span",null,"\u4ea4\u6613\u6240",F.default.createElement("em",{className:b.default.optional},"\u53ef\u9009"))}),u("exchange")(F.default.createElement(h.default,{size:"small",onChange:this.handleExchangeChange,showSearch:!0,placeholder:"\u8bf7\u9009\u62e9\u4ea4\u6613\u6240",optionFilterProp:"children",filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},F.default.createElement(N,{value:"SEHK"},"SEHK \u6e2f\u4ea4\u6240"),F.default.createElement(N,{value:"HKFE"},"HKFE \u9999\u6e2f\u671f\u8d27\u4ea4\u6613\u6240"),F.default.createElement(N,{value:"IDEALPRO"},"IDEALPRO IB\u5916\u6c47ECN"),F.default.createElement(N,{value:"SSE"},"SSE \u4e0a\u4ea4\u6240"),F.default.createElement(N,{value:"SZSE"},"SZSE \u6df1\u4ea4\u6240"),F.default.createElement(N,{value:"CFFEX"},"CFFEX \u4e2d\u91d1\u6240"),F.default.createElement(N,{value:"SHFE"},"SHFE \u4e0a\u671f\u6240"),F.default.createElement(N,{value:"CZCE"},"CZCE \u90d1\u5546\u6240"),F.default.createElement(N,{value:"DCE"},"DCE \u5927\u5546\u6240"),F.default.createElement(N,{value:"SGE"},"SGE \u4e0a\u91d1\u6240"),F.default.createElement(N,{value:"INE"},"INE \u56fd\u9645\u80fd\u6e90\u4ea4\u6613\u4e2d\u5fc3"),F.default.createElement(N,{value:"SMART"},"SMART IB\u667a\u80fd\u8def\u7531"),F.default.createElement(N,{value:"NYMEX"},"NYMEX IB\u671f\u8d27"),F.default.createElement(N,{value:"GLOBEX"},"GLOBEX CME\u7535\u5b50\u4ea4\u6613\u5e73\u53f0"),F.default.createElement(N,{value:"CME"},"CME \u829d\u5546\u6240"),F.default.createElement(N,{value:"ICE"},"ICE \u6d32\u9645\u4ea4\u6613\u6240"),F.default.createElement(N,{value:"LME"},"LME \u4f26\u6566\u91d1\u5c5e\u4ea4\u6613\u6240"),F.default.createElement(N,{value:"OANDA"},"OANDA \u5916\u6c47\u505a\u5e02\u5546"),F.default.createElement(N,{value:"FXCM"},"FXCM \u5916\u6c47\u505a\u5e02\u5546")))),F.default.createElement(D,(0,r.default)({className:b.default.formItem},L,{label:F.default.createElement("span",null,"\u5e01\u79cd",F.default.createElement("em",{className:b.default.optional},"\u53ef\u9009"))}),u("currency")(F.default.createElement(h.default,{size:"small",showSearch:!0,placeholder:"\u8bf7\u9009\u62e9\u5e01\u79cd",optionFilterProp:"children",filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},F.default.createElement(N,{value:"USD"},"USD \u7f8e\u5143"),F.default.createElement(N,{value:"CNY"},"CNY \u4eba\u6c11\u5e01"),F.default.createElement(N,{value:"CNH"},"CNH \u79bb\u5cb8\u4eba\u6c11\u5e01"),F.default.createElement(N,{value:"HKD"},"HKD \u6e2f\u5e01"),F.default.createElement(N,{value:"JPY"},"JPY \u65e5\u5143"),F.default.createElement(N,{value:"EUR"},"EUR \u6b27\u5143"),F.default.createElement(N,{value:"GBP"},"GBP \u82f1\u9551"),F.default.createElement(N,{value:"DEM"},"DEM \u5fb7\u56fd\u9a6c\u514b"),F.default.createElement(N,{value:"CHF"},"CHF \u745e\u58eb\u6cd5\u90ce"),F.default.createElement(N,{value:"FRF"},"FRF \u6cd5\u56fd\u6cd5\u90ce"),F.default.createElement(N,{value:"CAD"},"CAD \u52a0\u62ff\u5927\u5143"),F.default.createElement(N,{value:"AUD"},"AUD \u6fb3\u5927\u5229\u4e9a\u5143"),F.default.createElement(N,{value:"ATS"},"ATS \u5965\u5730\u5229\u5148\u4ee4"),F.default.createElement(N,{value:"FIM"},"FIM \u82ac\u5170\u9a6c\u514b"),F.default.createElement(N,{value:"BEF"},"BEF \u6bd4\u5229\u65f6\u6cd5\u90ce"),F.default.createElement(N,{value:"IEP"},"IEP \u7231\u5c14\u5170\u9551"),F.default.createElement(N,{value:"ITL"},"ITL \u610f\u5927\u5229\u91cc\u62c9"),F.default.createElement(N,{value:"LUF"},"LUF \u5362\u68ee\u5821\u6cd5\u90ce"),F.default.createElement(N,{value:"NLG"},"NLG \u8377\u5170\u76fe"),F.default.createElement(N,{value:"PTE"},"PTE \u8461\u8404\u7259\u57c3\u65af\u5e93\u591a"),F.default.createElement(N,{value:"ESP"},"ESP \u897f\u73ed\u7259\u6bd4\u585e\u5854"),F.default.createElement(N,{value:"IDR"},"IDR \u5370\u5c3c\u76fe"),F.default.createElement(N,{value:"MYR"},"MYR \u9a6c\u6765\u897f\u4e9a\u6797\u5409\u7279"),F.default.createElement(N,{value:"NZD"},"NZD \u65b0\u897f\u5170\u5143"),F.default.createElement(N,{value:"PHP"},"PHP \u83f2\u5f8b\u5bbe\u6bd4\u7d22"),F.default.createElement(N,{value:"SUR"},"SUR \u4fc4\u7f57\u65af\u5362\u5e03"),F.default.createElement(N,{value:"SGD"},"SGD \u65b0\u52a0\u5761\u5143"),F.default.createElement(N,{value:"KRW"},"KRW \u97e9\u56fd\u5143"),F.default.createElement(N,{value:"THB"},"THB \u6cf0\u94e2")))),F.default.createElement(D,(0,r.default)({className:b.default.formItem},L,{label:F.default.createElement("span",null,"\u4ea7\u54c1\u7c7b\u578b",F.default.createElement("em",{className:b.default.optional},"\u53ef\u9009"))}),u("productClass")(F.default.createElement(h.default,{size:"small",showSearch:!0,placeholder:"\u8bf7\u9009\u62e9\u4ea7\u54c1\u7c7b\u578b",optionFilterProp:"children",filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},F.default.createElement(N,{value:"FUTURES"},"\u671f\u8d27"),F.default.createElement(N,{value:"FOREX"},"\u5916\u6c47"),F.default.createElement(N,{value:"EQUITY"},"\u80a1\u7968"),F.default.createElement(N,{value:"OPTION"},"\u671f\u6743"),F.default.createElement(N,{value:"SPOT"},"\u73b0\u8d27")))),F.default.createElement(D,(0,r.default)({className:b.default.formItem},L,{label:"\u65b9\u5411"}),u("direction",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u65b9\u5411"}]})(F.default.createElement(S,{size:"small",onChange:this.handleDirectionChange,buttonStyle:"solid"},F.default.createElement(T,{value:"LONG"},"\u591a"),F.default.createElement(T,{value:"SHORT"},"\u7a7a")))),F.default.createElement(D,(0,r.default)({className:b.default.formItem},L,{label:"\u5f00\u5e73"}),u("offset",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5f00\u5e73"}]})(F.default.createElement(S,{size:"small",onChange:this.onChange,buttonStyle:"solid"},F.default.createElement(T,{value:"OPEN"},"\u5f00\u4ed3"),F.default.createElement(T,{value:"CLOSE"},"\u5e73\u4ed3"),F.default.createElement(T,{value:"CLOSETODAY"},"\u5e73\u4eca"),F.default.createElement(T,{value:"CLOSEYESTERDAY"},"\u5e73\u6628")))),F.default.createElement(D,(0,r.default)({className:b.default.formItem},L,{label:"\u62a5\u4ef7\u7c7b\u578b"}),u("priceType",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u62a5\u4ef7\u7c7b\u578b"}],initialValue:"LIMITPRICE"})(F.default.createElement(S,{size:"small",onChange:this.onChange,buttonStyle:"solid"},F.default.createElement(T,{value:"FAK"},"FAK"),F.default.createElement(T,{value:"FOK"},"FOK"),F.default.createElement(T,{value:"LIMITPRICE"},"\u9650\u4ef7"),F.default.createElement(T,{value:"MARKETPRICE"},"\u5e02\u4ef7")))),F.default.createElement(D,(0,r.default)({className:b.default.formItem},L,{label:"\u4ef7\u683c"}),u("price",{initialValue:i.price})(F.default.createElement(o.default,{size:"small",onChange:this.handlePriceChange,disabled:m,style:{width:"100%"},min:0,max:999999999,step:i.step}))),F.default.createElement(D,(0,r.default)({className:b.default.formItem},L,{label:"\u81ea\u52a8\u586b\u4ef7"}),u("priceAutoComplete",{initialValue:"MANUAL"})(F.default.createElement(S,{size:"small",buttonStyle:"solid",onChange:this.handlePriceAutoCompleteChange},F.default.createElement(T,{value:"MANUAL"},"\u624b\u52a8"),F.default.createElement(T,{value:"LASTPRICE"},"\u6700\u65b0"),F.default.createElement(T,{value:"ACTIVE"},"\u5bf9\u624b"),F.default.createElement(T,{value:"QUEUE"},"\u6392\u961f"),F.default.createElement(T,{value:"ADD2"},"\u8d852")))),F.default.createElement(D,(0,r.default)({className:b.default.formItem},L,{label:"\u8d26\u6237"}),u("rtAccountIDs",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8d26\u6237"}],initialValue:[]})(F.default.createElement(h.default,{size:"small",mode:"multiple",showSearch:!0,dropdownMatchSelectWidth:!1,placeholder:"\u8bf7\u9009\u62e9\u8d26\u6237",optionFilterProp:"children",filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0},onChange:this.handleRtAccountIDsChange},f))),F.default.createElement(D,(0,r.default)({className:b.default.formItem},L,{label:"\u5206\u914d\u65b9\u5f0f"}),u("volumeAllot",{initialValue:"EQUAL"})(F.default.createElement(S,{size:"small",buttonStyle:"solid",onChange:this.handleVolumeAllotChange},F.default.createElement(T,{value:"EQUAL"},"\u76f8\u540c"),F.default.createElement(T,{value:"MANUAL"},"\u624b\u52a8"),F.default.createElement(T,{value:"BALANCE"},"\u603b\u8d44\u91d1\u6bd4\u4f8b"),F.default.createElement(T,{value:"AVAILABLE"},"\u53ef\u7528\u8d44\u91d1\u6bd4\u4f8b")))),p,F.default.createElement(D,(0,r.default)({className:b.default.formItem},V),F.default.createElement(c.default,{size:"small",type:"danger",onDoubleClick:this.cancelAllOrders},"\u5168\u90e8\u64a4\u9500"),F.default.createElement(c.default,{htmlType:"reset",onClick:this.resetForm,style:{marginLeft:5}},"\u91cd\u7f6e"),F.default.createElement(c.default,{type:"primary",htmlType:"submit",loading:a,style:{marginLeft:5}},"\u53d1\u5355"))))}}]),t}(F.PureComponent))||g)||g),M=k;t.default=M}}]);