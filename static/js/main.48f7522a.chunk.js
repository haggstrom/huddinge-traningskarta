(this["webpackJsonphuddinge-traningskarta"]=this["webpackJsonphuddinge-traningskarta"]||[]).push([[0],{1044:function(e,t){},1063:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(32),i=n.n(o),s=(n(633),n(412)),c=(n(634),n(635),n(636),n(637),n(369)),l=n(1074),u=n(598),p=n(599),m=n(600),d=n(1075),y=n(1072),g=n(1073),f=n(471),S=n.n(f),w=g.a.Panel,k=function(e){var t=e.key,n=e.header,r=e.locationNames,o=e.onLocationClicked;return a.a.createElement(g.a,{className:S.a.trainingLocationCollapse},a.a.createElement(w,{header:n,className:"trainingLocationPanel",key:t},a.a.createElement(d.b,{dataSource:r,renderItem:function(e){return a.a.createElement(d.b.Item,null,a.a.createElement(y.a.Text,{className:S.a.trainingLocationName,onClick:function(){return o(e)}},e))}})))},h=n(614),v=n(221),E=n(606),F=n(366),b=n(6),P=n(59),L=n(83),x={registerProjections:function(){v.default.defs("EPSG:4326","+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs "),v.default.defs("EPSG:3006","+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"),v.default.defs("EPSG:3011","+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"),v.default.defs("EPSG:3857","+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs"),Object(E.a)(v.default)},getSortedFeatureName:function(e){return Object(h.a)(new Set(e.map((function(e){return e.getProperties().name})))).sort()},readFeatures:function(e){return(new F.default).readFeatures(e)},transformFeatures:function(e,t,n){e.map((function(e){return e.getGeometry().transform(t,n)}))},toFeatures:function(e,t){var n=x.readFeatures(e);return n.map((function(e){return e.setProperties({type:t})})),x.transformFeatures(n,"EPSG:3011","EPSG:3006"),n},bufferExtent:function(e,t){return Object(b.c)(e,t)},getBufferedExtent:function(e,t){return x.bufferExtent(e.getGeometry().getExtent(),t)},extentToFeature:function(e){var t=Object(P.d)(e);return new L.default({geometry:t})},getExtentOfFeaturesByName:function(e,t){var n=e.filter((function(e){return e.getProperties().name===t})),r=Object(b.j)();return n.forEach((function(e){Object(b.q)(r,e.getGeometry().getExtent())})),r}},_=x,C=n(105),N=n(157),O=n(138),G=n(1065),j=n(607),I=n.n(j),H=n(608),T=n.n(H),D=n(609),B=n.n(D),V=n(610),A=n.n(V),M={manIconStyle:new C.default({image:new G.default({src:I.a,scale:.25})}),womanIconStyle:new C.default({image:new G.default({src:B.a,scale:.25})}),manSelectedIconStyle:new C.default({image:new G.default({src:T.a,scale:.25})}),womanSelectedIconStyle:new C.default({image:new G.default({src:A.a,scale:.25})}),kommunStyle:new C.default({stroke:new N.default({color:"grey",width:3}),fill:new O.default({color:"rgba(232, 232, 232, 0.5)"})}),trackStyles:[new C.default({stroke:new N.default({color:"black",lineDash:[1,2.5],width:4,lineDashOffset:0})}),new C.default({stroke:new N.default({color:"rgb(204,144,122)",lineDash:[1,2.5],width:2.5,lineDashOffset:0})})],trackStylesHover:[new C.default({stroke:new N.default({color:"blue",lineDash:[1,2.5],width:6,lineDashOffset:0})}),new C.default({stroke:new N.default({color:"rgb(204,144,122)",lineDash:[1,2.5],width:2.5,lineDashOffset:0})})],hoverStyleFunction:function(e){return"track"===e.getProperties().type?M.trackStylesHover:"gym"===e.getProperties().type?e.getProperties().hoverStyle:void 0}},R=M,J=n(406),U=n(401),K=n(174),W=n(468),z=n(615),q=n(106),Z=n(107),$={createView:function(){return new J.a({projection:"EPSG:3006",center:[672382.9310966722,6567779.94859146],zoom:12,maxZoom:20,extent:[655435.1179635252,6552348.911293099,689330.7442298192,6583210.985889821]})},createMap:function(e){var t=Object(U.a)({altShiftDragRotate:!1,pinchRotate:!1});return new K.default({view:e,layers:[new W.default({source:new z.a})],interactions:t})},createHuddingeLayer:function(e){var t=new q.default({source:new Z.default({}),style:R.kommunStyle});return t.getSource().addFeature(e),t},createGymLayer:function(e){var t=new q.default({layerId:"gym-layer",source:new Z.default({})});return $.setIconOnGymFeatures(e),t.getSource().addFeatures(e),t},createTrackLayer:function(e){var t=new q.default({layerId:"track-layer",source:new Z.default({})});return $.setStylesOnTracks(e),t.getSource().addFeatures(e),t},setStylesOnTracks:function(e){e.map((function(e){return e.setStyle(R.trackStyles)}))},setIconOnGymFeatures:function(e){var t={icon:R.manIconStyle,iconHover:R.manSelectedIconStyle},n={icon:R.womanIconStyle,iconHover:R.womanSelectedIconStyle},r=Math.random()>=.5?[t,n]:[n,t];e.map((function(e,t){var n=r[t%2];return e.setProperties({hoverStyle:n.iconHover}),e.setStyle([n.icon])}))},getHuddingeFeature:function(e){var t=_.readFeatures(e);_.transformFeatures(t,"EPSG:4326","EPSG:3006"),t[0].getGeometry().translate(-100,-170);var n=_.getBufferedExtent(t[0],15e3),r=_.extentToFeature(n),a=t[0].getGeometry().getLinearRing(),o=new P.b(r.getGeometry().getCoordinates());return o.appendLinearRing(a),new L.default({geometry:o})}},Q=$,X=n(1071),Y=n(472),ee=n.n(Y),te=n(1076),ne=function(e){var t=e.popupId,n=e.title,r=e.text,o=e.onClose;return a.a.createElement("div",{className:ee.a.popupContainer},a.a.createElement("div",{id:t},a.a.createElement(X.a,{className:ee.a.popupCard,size:"small",title:n,extra:a.a.createElement(te.a,{onClick:o})},a.a.createElement("p",null,r))))},re=n(278),ae=n(469),oe=n(35),ie=n(1077),se=n(1078),ce=n(270),le=n.n(ce),ue=function(e){var t=e.icon,n=e.link,r=e.linkTitle;return a.a.createElement("a",{href:n,title:r,rel:"noopener noreferrer",target:"_blank"},t)},pe=function(){return a.a.createElement(X.a,{className:le.a.authorCard,size:"small"},a.a.createElement("div",{className:le.a.textContainer},a.a.createElement("h4",null,"Kartan \xe4r skapad av"),"Anders H\xe4ggstr\xf6m"),a.a.createElement("div",{className:le.a.iconContainer},a.a.createElement(ue,{link:"https://www.linkedin.com/in/anders-haggstrom/",linkTitle:"Anders H\xe4ggstr\xf6m p\xe5 LinkedIn",icon:a.a.createElement(ie.a,{className:le.a.icon})}),a.a.createElement(ue,{link:"https://github.com/haggstrom/",linkTitle:"Anders H\xe4ggstr\xf6m p\xe5 GitHub",icon:a.a.createElement(se.a,{className:le.a.icon})})))},me=n(473);_.registerProjections();var de=Q.createView(),ye=Q.createMap(de),ge=function(e){return e.get("layerId")&&("gym-layer"===e.get("layerId")||"track-layer"===e.get("layerId"))},fe=new re.default({condition:oe.pointerMove,style:R.hoverStyleFunction,layers:function(e){return ge(e)}});ye.addInteraction(fe);var Se=Q.getHuddingeFeature(m),we=Q.createHuddingeLayer(Se);ye.addLayer(we);var ke=_.toFeatures(u,"track"),he=Q.createTrackLayer(ke);ye.addLayer(he);var ve=_.toFeatures(p,"gym"),Ee=Q.createGymLayer(ve);ye.addLayer(Ee);var Fe=new ae.default({}),be=function(){Fe.setPosition(void 0)};var Pe=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(""),u=Object(s.a)(i,2),p=u[0],m=u[1],d=Object(r.useState)(""),y=Object(s.a)(d,2),g=y[0],f=y[1],S=_.getSortedFeatureName(ke),w=_.getSortedFeatureName(ve),h=function(){o(!n)};return ye.on("click",(function(e){var t=ye.forEachFeatureAtPixel(e.pixel,(function(e,t){if(ge(t))return e}));if(t){Fe.getElement()||(Fe.setElement(document.getElementById("my-popup")),ye.addOverlay(Fe)),m(t.getProperties().name);var n="gym"===t.getProperties().type?"Utegym":"Elljussp\xe5r";f(n),Fe.setPosition(e.coordinate)}else Fe.setPosition(void 0)})),a.a.createElement("div",{className:"App"},a.a.createElement(c.MapComponent,{map:ye}),a.a.createElement(ne,{popupId:"my-popup",title:g,text:p,onClose:be}),a.a.createElement(c.SimpleButton,{title:"Visa Tr\xe4ningsplatser",className:"showDrawerButton",type:"primary",onClick:h},"Tr\xe4ningsplatser"),a.a.createElement(l.a,{title:"Tr\xe4ningsplatser i Huddinge",placement:"right",onClose:h,visible:n,mask:!1,footer:a.a.createElement(pe,null)},a.a.createElement(k,{key:"1",header:"Elljussp\xe5r",locationNames:S,onLocationClicked:function(e){me.isMobile&&o(!n);var t=_.getExtentOfFeaturesByName(ke,e),r=_.bufferExtent(t,200);ye.getView().fit(r)}}),a.a.createElement(k,{key:"2",header:"Utegym",locationNames:w,onLocationClicked:function(e){me.isMobile&&o(!n);var t=_.getExtentOfFeaturesByName(ve,e),r=_.bufferExtent(t,100);ye.getView().fit(r)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},270:function(e,t,n){e.exports={authorCard:"AuthorPanel_authorCard__3ab0h",textContainer:"AuthorPanel_textContainer__20e9H",iconContainer:"AuthorPanel_iconContainer__VGnOK",icon:"AuthorPanel_icon__KlhJG"}},471:function(e,t,n){e.exports={trainingLocationCollapse:"TrainingLocationList_trainingLocationCollapse__3NRDb",trainingLocationName:"TrainingLocationList_trainingLocationName__2-JLP"}},472:function(e,t,n){e.exports={popupContainer:"SimplePopup_popupContainer__3vwtk",popupCard:"SimplePopup_popupCard__3WKbe"}},598:function(e){e.exports=JSON.parse('{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"LineString","coordinates":[[147485.13,6566095.5],[147442.47,6566086.05],[147402.75,6566084.55],[147362.61,6566083.8899],[147337.53,6566078.64],[147308.07,6566064.405],[147270.21,6566046.15],[147234.75,6566025.24],[147188.79,6565985.2799],[147180.84,6565960.185],[147146.4,6565927.545],[147116.91,6565923.5401],[147098.1,6565944.435],[147071.52,6565972.995],[147072.21,6566029.365],[147062.79,6566043.075],[147033.15,6566078.4749],[147015.78,6566106.63],[147007.83,6566125.395],[147027.78,6566130.765],[147042.03,6566143.29],[147091.26,6566154.9601],[147146.4,6566164.35],[147207.96,6566146.17],[147248.52,6566144.385],[147262.56,6566151.81],[147269.46,6566163.54],[147265.26,6566181.57],[147258.78,6566196.525],[147252.39,6566221.59],[147251.85,6566235.315],[147252,6566263.065],[147251.19,6566270.865],[147248.64,6566275.485],[147234.09,6566292.96],[147231.06,6566300.82],[147231.15,6566306.175],[147234.63,6566316.8401],[147242.22,6566333.28],[147248.85,6566354.67],[147253.53,6566361.285],[147258.93,6566365.2901],[147279.54,6566378.52],[147292.23,6566383.605],[147297.12,6566387.475],[147324.75,6566417.355],[147340.08,6566432.505],[147350.55,6566438.64],[147353.58,6566447.85],[147373.23,6566405.85],[147382.23,6566386.35],[147386.58,6566366.31],[147387.6,6566347.155],[147385.29,6566305.185],[147386.76,6566289.15],[147395.34,6566274.465],[147404.94,6566254.665],[147413.16,6566244.75],[147422.76,6566239.53],[147434.01,6566236.2],[147445.92,6566241.75],[147460.41,6566256.825],[147477.45,6566283.7801],[147496.44,6566289.72],[147514.5,6566292.915],[147533.58,6566297.085],[147549.99,6566296.92],[147557.13,6566294.145],[147562.56,6566290.305],[147570.42,6566280.195],[147578.43,6566275.5],[147596.25,6566271.795],[147607.23,6566272.3801],[147615.93,6566277.7951],[147634.92,6566294.55],[147649.89,6566309.115],[147659.28,6566313.1351],[147687.6,6566311.515],[147715.68,6566309.985],[147740.07,6566292.345],[147748.26,6566268.765],[147773.25,6566247.6],[147771.84,6566203.935],[147770.04,6566174.8049],[147768.96,6566148.9751],[147759.15,6566127.4949],[147736.62,6566105.64],[147678.75,6566116.14],[147640.05,6566116.05],[147614.76,6566117.4],[147570.33,6566124.195],[147540.93,6566118.015],[147507.27,6566104.92],[147485.13,6566095.5]]},"properties":{"name":"Vis\xe4ttra","id":"1"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[147703.26,6566482.95],[147694.47,6566475.66],[147672.21,6566462.91],[147644.55,6566448.48],[147627.51,6566439.1051],[147617.43,6566430.135],[147613.68,6566422.83],[147612.87,6566413.965],[147621.03,6566381.865],[147622.35,6566368.755],[147622.92,6566361.465],[147624.21,6566353.0351],[147625.71,6566345.94],[147631.92,6566337.15],[147643.08,6566326.86],[147647.79,6566320.68],[147649.89,6566309.115]]},"properties":{"name":"Vis\xe4ttra","id":"4"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[147858.51,6566716.89],[147845.61,6566711.4599],[147820.74,6566707.515],[147810.27,6566706.795],[147796.8,6566702.6249],[147794.37,6566699.07],[147783.33,6566687.085],[147776.43,6566682.03],[147762.75,6566675.85],[147728.16,6566673.57],[147714.51,6566673.3751],[147663.81,6566646.0151]]},"properties":{"name":"Vis\xe4ttra","id":"7"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[149065.77,6567794.94],[149054.58,6567797.79],[149047.68,6567800.805],[149034.69,6567815.58],[149024.79,6567819.735],[149011.83,6567822.27],[149003.13,6567822.1049],[148987.65,6567821.205],[148978.71,6567822.645],[148974.78,6567826.155],[148970.55,6567828.315],[148956.87,6567832.2],[148948.26,6567836.04],[148939.77,6567838.98],[148922.67,6567842.88],[148913.28,6567845.895],[148897.68,6567854.355],[148885.38,6567859.23],[148873.95,6567861.93],[148865.88,6567865.2],[148858.59,6567872.46],[148855.47,6567879.09],[148855.8,6567883.965],[148860.57,6567892.59],[148868.31,6567902.1],[148870.38,6567907.695],[148869.6,6567912.525],[148867.35,6567916.635],[148861.68,6567921.585],[148854.33,6567928.53],[148849.29,6567931.245],[148835.31,6567932.265],[148821.87,6567935.61],[148810.77,6567936.9599],[148796.7,6567935.715],[148784.43,6567942.93],[148774.44,6567946.995],[148767.33,6567952.335],[148758.6,6567957.915],[148752.93,6567959.1899],[148748.61,6567963.945],[148719.69,6567978.645],[148692.99,6567993.735],[148682.85,6568003.065],[148677.87,6568010.7],[148672.35,6568023.975],[148668.72,6568037.91],[148669.47,6568056.9449],[148723.2,6568063.7849],[148754.19,6568070.19],[148765.77,6568069.7699],[148777.5,6568067.0251],[148791.87,6568068.93],[148821.21,6568080.975],[148844.94,6568093.725],[148869.54,6568098.93],[148930.95,6568110.315],[148969.74,6568111.35],[149000.31,6568112.115],[149022.6,6568111.98],[149090.07,6568101.33],[149110.44,6568094.025],[149141.25,6568083.99],[149180.22,6568071.45],[149215.41,6568058.925],[149278.29,6568035.1051],[149286.96,6568006.08],[149302.2,6567986.73],[149325.81,6567984.03],[149348.79,6567969.93],[149366.28,6567961.23],[149376.84,6567956.0549],[149384.25,6567949.995],[149386.26,6567943.5149],[149385,6567936.18],[149381.49,6567927],[149377.35,6567922.35],[149370.57,6567919.155],[149360.58,6567913.56],[149351.55,6567910.425],[149343.09,6567910.98],[149328.15,6567914.97],[149315.76,6567916.065],[149303.55,6567918.06],[149297.31,6567915.735],[149290.92,6567907.665],[149288.07,6567899.745],[149289.03,6567887.61],[149293.83,6567874.755],[149298.33,6567869.205],[149319.54,6567864.99],[149325,6567862.155],[149328.54,6567856.515],[149333.16,6567847.71],[149347.71,6567834.54],[149362.65,6567827.685],[149378.55,6567825.225],[149389.74,6567820.6799],[149393.73,6567811.425],[149393.58,6567801.045],[149388.3,6567795.045],[149375.61,6567788.64],[149359.08,6567782.55],[149350.71,6567781.035],[149322.9,6567783.09],[149313.48,6567781.08],[149287.14,6567772.425],[149260.38,6567769.605],[149226.27,6567758.25],[149217.27,6567750.885],[149211.99,6567731.955],[149208.99,6567710.94],[149211.33,6567702.105],[149212.68,6567695.205],[149210.76,6567692.2501],[149203.83,6567689.61],[149199.12,6567685.845],[149190.87,6567678.255],[149181.39,6567674.565],[149164.53,6567669.405],[149159.58,6567664.65],[149154.81,6567659.115],[149147.61,6567665.52],[149141.01,6567676.11],[149129.7,6567690.105],[149130.48,6567695.535],[149137.74,6567704.085],[149141.19,6567712.245],[149142.27,6567726.375],[149140.59,6567738.84],[149125.56,6567755.28],[149119.26,6567759.9],[149109.57,6567763.335],[149092.56,6567769.545],[149082.3,6567774.72],[149081.22,6567780.795],[149077.2,6567785.9099],[149065.77,6567794.94]]},"properties":{"name":"S\xf6rskogen","id":"2"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[150635.01,6564526.065],[150630.75,6564544.245],[150631.68,6564562.92],[150635.73,6564573.405],[150644.34,6564582.645],[150651.51,6564588.465],[150658.47,6564590.4],[150666.36,6564598.08],[150673.08,6564614.34],[150681.9,6564618.54],[150697.26,6564618.33],[150712.29,6564616.05],[150726.33,6564611.37],[150748.17,6564617.205],[150767.91,6564621.87],[150786.27,6564637.665],[150800.88,6564653.97],[150813.9,6564660.495],[150839.79,6564650.94],[150861.33,6564644.49],[150889.98,6564641.955],[150909.15,6564653.715],[150906.63,6564675.6],[150901.02,6564692.61],[150906.27,6564702.195],[150917.28,6564704.37],[150941.16,6564702.195],[150953.28,6564704.91],[150965.94,6564719.73],[150976.53,6564734.055],[150982.23,6564742.575],[150990.69,6564753.96],[151004.85,6564800.43],[150996.9,6564814.545],[150986.22,6564834.63],[150978.63,6564868.275],[150990.81,6564888.4201],[151005.06,6564896.1],[151032.03,6564904.05],[151060.56,6564907.77],[151098.33,6564902.265],[151149.63,6564897.24],[151153.56,6564890.91],[151165.62,6564886.08],[151191.27,6564886.9951],[151216.02,6564883.665],[151254.93,6564873.105],[151284.75,6564856.545],[151295.94,6564833.22],[151298.31,6564819.435],[151292.7,6564788.8499],[151281.84,6564758.4601],[151280.46,6564745.785],[151286.37,6564715.215],[151283.7,6564689.13],[151277.13,6564666.0149],[151268.28,6564651.72],[151252.71,6564642.495],[151233.9,6564629.655],[151221.87,6564626.01],[151201.41,6564633.78],[151169.25,6564649.635],[151150.5,6564643.2149],[151133.61,6564635.73],[151084.2,6564612.795],[151067.25,6564602.085],[151044.54,6564564.645],[151026.45,6564556.6801],[150984.18,6564556.98],[150954.42,6564559.9949],[150945.45,6564553.89],[150927.72,6564539.505],[150930.42,6564524.295],[150906.99,6564512.055],[150892.14,6564507.525],[150868.17,6564493.47],[150857.55,6564467.7],[150808.95,6564461.3849],[150786.66,6564461.595],[150757.23,6564479.4],[150741.33,6564483.465],[150726.27,6564478.8],[150712.17,6564477.69],[150700.08,6564478.86],[150692.61,6564482.82],[150685.59,6564491.115],[150679.08,6564496.005],[150669.36,6564501.405],[150653.46,6564507.825],[150645.51,6564513.6451],[150635.01,6564526.065]]},"properties":{"name":"Sundby","id":"5"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[158394.45,6567759.045],[158429.73,6567742.755],[158451.12,6567712.845],[158461.05,6567691.2],[158465.07,6567680.775],[158464.83,6567672.93],[158454.69,6567649.98],[158434.89,6567604.9349],[158424.84,6567575.775],[158423.88,6567569.85],[158420.28,6567559.605],[158401.53,6567530.895],[158370.54,6567539.25],[158341.35,6567549.1801],[158320.92,6567555.66],[158302.41,6567562.275],[158283.03,6567569.94],[158268.9,6567576.99],[158250.66,6567588.555],[158231.43,6567601.11],[158219.16,6567608.385],[158205.9,6567615.045],[158193.96,6567620.385],[158180.25,6567624.435],[158160.42,6567629.52],[158150.07,6567634.2],[158135.88,6567642.615],[158130.72,6567646.74],[158126.64,6567653.61],[158119.65,6567669.045],[158112.18,6567688.605],[158107.74,6567715.6201],[158107.86,6567728.58],[158109.54,6567736.215],[158117.61,6567756.675],[158134.38,6567780.195],[158144.16,6567770.73],[158149.8,6567763.1099],[158155.77,6567758.85],[158162.31,6567756.705],[158172.39,6567755.19],[158185.08,6567753.825],[158226.12,6567751.125],[158254.5,6567751.905],[158280.45,6567755.895],[158289.09,6567760.59],[158313.09,6567779.28],[158322.39,6567782.175],[158329.74,6567782.19],[158345.13,6567777.615],[158394.45,6567759.045]]},"properties":{"name":"Mossensp\xe5r","id":"8"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[156221.85,6567021.105],[156195.78,6567049.785],[156170.4,6567072.3],[156158.43,6567087.315],[156146.64,6567113.685],[156108.72,6567160.7251],[156076.98,6567190.995],[156061.47,6567201.39],[156046.29,6567210.57],[156033.93,6567224.43],[156016.35,6567253.0651],[155989.83,6567272.655],[155957.22,6567315.36],[155946.75,6567321.57],[155934.93,6567330.27],[155924.88,6567345.81],[155921.46,6567359.475],[155919.33,6567380.415],[155919.72,6567396.4201],[155929.89,6567428.745],[155936.58,6567442.275],[155947.62,6567452.79],[155967.9,6567467.925],[155993.34,6567483.225],[156000.27,6567491.16],[156004.17,6567500.28],[156005.64,6567537.72],[156003.09,6567550.3201],[155996.61,6567561.015],[155991.63,6567566.235],[155986.02,6567569.28],[155938.98,6567589.755],[155929.11,6567597.3451],[155929.89,6567609.51],[155944.95,6567644.865],[155949.66,6567668.535],[155944.17,6567687.255],[155941.59,6567706.35],[155944.77,6567720.3599],[155951.85,6567728.265],[155962.65,6567729.36],[155972.94,6567721.7849],[155984.85,6567698.535],[155998.92,6567671.64],[156026.97,6567637.575],[156035.28,6567568.68],[156035.43,6567543.0899],[156019.14,6567487.935],[156020.13,6567468.855],[156022.98,6567459.75],[156028.44,6567453.09],[156035.4,6567451.4251],[156047.88,6567455.775],[156067.59,6567468.27],[156099.03,6567488.6549],[156138.06,6567531.9749],[156150.51,6567544.59],[156171.12,6567562.1849],[156189.99,6567582.945],[156207.84,6567604.605],[156217.05,6567608.685],[156240.96,6567606.87],[156275.28,6567590.52],[156296.01,6567574.77],[156305.07,6567570.285],[156322.56,6567580.2],[156368.73,6567616.02],[156400.41,6567632.355],[156441.24,6567648.9301],[156465.15,6567652.185],[156482.7,6567653.595],[156542.67,6567659.535],[156577.29,6567660.645],[156609.78,6567649.845],[156644.4,6567642.315],[156699.57,6567634.785],[156736.38,6567629.4],[156753.51,6567618.705],[156776.19,6567593.6401],[156793.92,6567564.15],[156790.77,6567551.6399],[156777.15,6567522.735],[156777.6,6567489.87],[156774.03,6567478.17],[156763.47,6567470.01],[156745.65,6567466.8151],[156711.03,6567447.975],[156702.87,6567447.81],[156685.38,6567450.525],[156675.9,6567447.54],[156666.54,6567441.375],[156661.89,6567433.5],[156660.63,6567419.385],[156653.01,6567393.27],[156644.64,6567379.65],[156618.54,6567351.24],[156578.01,6567294.165],[156563.82,6567279.03],[156533.97,6567262.425],[156522.27,6567250.32],[156514.05,6567235.8599],[156506.43,6567217.995],[156502.5,6567199.71],[156505.05,6567155.325],[156503.46,6567127.32],[156494.22,6567116.04],[156477.21,6567103.755],[156453.66,6567091.5],[156423.75,6567079.89],[156415.62,6567068.94],[156405.96,6567043.845],[156391.2,6567021.555],[156381.6,6566968.185],[156374.34,6566948.73],[156371.55,6566938.29],[156376.17,6566893.8599],[156369.06,6566885.4151],[156358.62,6566876.145],[156347.07,6566875.23],[156334.29,6566879.055],[156325.44,6566885.7001],[156317.76,6566909.505],[156299.61,6566943.57],[156283.44,6566964.555],[156257.7,6566991.27],[156231.6,6567004.89],[156221.85,6567021.105]]},"properties":{"name":"\xc5gesta","id":"6"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[155957.22,6567315.36],[155961,6567316.215],[155966.85,6567319.38],[155972.01,6567325.56],[155977.38,6567345.39],[155981.82,6567375.6151],[155987.73,6567407.4299],[155993.64,6567422.49],[155995.2,6567433.635],[155996.43,6567450.315],[156001.89,6567483.195]]},"properties":{"name":"\xc5gesta","id":"9"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[156001.89,6567483.195],[155993.34,6567483.225]]},"properties":{"name":"\xc5gesta","id":"10"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[156001.89,6567483.195],[156004.17,6567500.28]]},"properties":{"name":"\xc5gesta","id":"11"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[156001.89,6567483.195],[156005.76,6567482.52],[156020.13,6567468.855]]},"properties":{"name":"\xc5gesta","id":"12"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[156028.44,6567453.09],[156023.34,6567442.65],[156002.1,6567426.66],[155993.64,6567422.49]]},"properties":{"name":"\xc5gesta","id":"13"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[147266.13,6570127.995],[147259.59,6570120.135],[147245.04,6570093.9],[147241.53,6570084.045],[147242.22,6570067.56],[147241.77,6570048.8099],[147243.39,6570023.625],[147240.93,6570005.91],[147240.39,6569998.32],[147241.26,6569980.245],[147240.12,6569967.735],[147235.11,6569947.275],[147234.18,6569933.16],[147231.87,6569905.23],[147230.04,6569898.12],[147225.69,6569890.44],[147216.15,6569874.15],[147208.95,6569858.7],[147204.33,6569844.195],[147202.65,6569833.5],[147195.48,6569806.215],[147190.65,6569801.955],[147183.72,6569802.705],[147177.93,6569807.145],[147173.85,6569814.2549],[147171.39,6569831.295],[147165.12,6569862.915],[147170.58,6569892],[147170.37,6569909.055],[147168.09,6569915.49],[147159.93,6569930.8199],[147153.87,6569949.015],[147141.81,6569974.95],[147139.05,6569994.825],[147135.99,6570055.485],[147141.9,6570093.045],[147142.83,6570120.225],[147141.21,6570130.65],[147132.57,6570140.67],[147114.99,6570151.53],[147097.35,6570172.2149],[147084.66,6570196.755],[147080.97,6570209.325],[147073.08,6570224.52],[147065.04,6570235.08],[147060.39,6570247.41],[147062.94,6570253.695],[147068.25,6570258.24],[147076.47,6570260.79],[147095.07,6570265.6949],[147133.77,6570268.965],[147149.25,6570266.355],[147171.51,6570265.875],[147182.1,6570265.725],[147188.7,6570270.525],[147207.09,6570272.0701],[147223.29,6570277.125],[147234.66,6570283.4701],[147253.35,6570295.65],[147280.71,6570309.675],[147297.78,6570323.3701],[147320.43,6570326.895],[147360.93,6570330],[147399,6570336.6],[147418.17,6570345],[147430.95,6570350.415],[147472.8,6570343.02],[147494.79,6570348.78],[147527.58,6570369.63],[147540.27,6570376.5],[147551.97,6570369.39],[147558.09,6570353.625],[147560.88,6570324.9],[147567.27,6570283.395],[147550.77,6570258.495],[147530.94,6570218.235],[147506.43,6570188.895],[147479.64,6570166.845],[147449.97,6570148.635],[147413.58,6570151.47],[147403.08,6570132.3149],[147351.75,6570130.83],[147325.98,6570139.62],[147312.99,6570141.69],[147300.12,6570140.73],[147266.13,6570127.995]]},"properties":{"name":"K\xe4llbrink","id":"3"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[147048.33,6571920],[147059.46,6571915.29],[147067.74,6571906.455],[147076.47,6571898.985],[147100.5,6571883.835],[147113.4,6571877.775],[147132.27,6571866.42],[147146.07,6571860.81],[147178.56,6571840.515],[147193.68,6571824.885],[147206.22,6571819.245],[147215.52,6571817.025],[147254.97,6571799.985],[147269.4,6571800.165],[147282.99,6571803.6601],[147293.43,6571810.755],[147294.33,6571814.055],[147313.14,6571820.4751],[147331.53,6571828.395],[147340.2,6571834.485],[147342.54,6571840.23],[147344.22,6571849.53],[147344.49,6571860.525],[147351,6571879.965],[147359.07,6571885.89],[147394.44,6571884.435],[147401.19,6571888.44],[147403.53,6571901.085],[147401.97,6571921.2599],[147407.37,6571937.175],[147413.79,6571945.935],[147424.53,6571954.26],[147444.66,6571971.675],[147442.56,6571979.655],[147441.09,6571989],[147439.53,6572005.7251],[147417.93,6572015.94],[147368.25,6572021.5799],[147353.88,6572015.94],[147349.5,6572011.8899],[147335.01,6571997.265],[147323.16,6571989.27],[147304.14,6571973.97],[147293.28,6571968.09],[147281.55,6571963.98],[147265.17,6571957.215],[147260.97,6571952.805],[147254.64,6571944.81],[147248.4,6571939.86],[147235.95,6571930.17],[147212.07,6571923.51],[147181.11,6571909.41],[147165.6,6571903.935],[147149.58,6571910.595],[147145.02,6571915.14],[147134.46,6571932.75],[147125.49,6571939.4999],[147116.37,6571953.54],[147103.44,6571960.65],[147097.95,6571960.65],[147084.09,6571969.395],[147071.34,6571974.69],[147061.23,6571981.74],[147041.28,6571998],[147022.23,6572016.48],[146986.92,6572038.515],[146960.1,6572067.87],[146956.29,6572074.8],[146952.57,6572093.49],[146957.91,6572107.065],[146960.28,6572121.285],[146962.65,6572140.92],[146958.66,6572171.25],[146954.1,6572184.75],[146948.64,6572196.72],[146939.7,6572217.03],[146934.96,6572227.785],[146927.28,6572239.08],[146916.9,6572251.125],[146907.96,6572259.15],[146874.57,6572286.15],[146861.64,6572301.2701],[146858.19,6572309.475],[146854.17,6572332.995],[146849.82,6572338.965],[146842.08,6572351.1451],[146833.98,6572358.5551],[146813.7,6572370.555],[146807.85,6572375.16],[146812.68,6572398.08],[146817.96,6572414.235],[146820.06,6572441.3849],[146819.94,6572463.42],[146817.06,6572476.035],[146808.96,6572479.59],[146781.78,6572475.045],[146755.14,6572468.475],[146740.2,6572460.81],[146730.72,6572448.24],[146728.71,6572436.375],[146728.14,6572417.97],[146733.45,6572377.665],[146731.44,6572360.52],[146724.15,6572346.675],[146713.62,6572333.235],[146705.94,6572322.75],[146699.16,6572311.935],[146695.32,6572306.1151],[146693.52,6572298.525],[146689.32,6572279.925],[146689.5,6572268.63],[146687.07,6572240.1749],[146688.42,6572229.6],[146684.94,6572201.895],[146681.4,6572183.535],[146676.75,6572173.605],[146672.37,6572163.39],[146671.29,6572151.9301],[146671.68,6572142.2401],[146678.67,6572130.405],[146685.48,6572107.5],[146691.87,6572096.31],[146698.14,6572084.8499],[146701.35,6572072.625],[146707.26,6572053.575],[146711.76,6572035.05],[146715.78,6572026.29],[146722.32,6572012.805],[146740.59,6572001.765],[146746.2,6571998.39],[146760.27,6571997.67],[146769.93,6571995.84],[146780.31,6571991.64],[146788.35,6571984.71],[146796.72,6571968.12],[146804.97,6571951.875],[146808.63,6571943.715],[146812.2,6571931.895],[146814.42,6571922.58],[146825.28,6571901.82],[146846.34,6571878.975],[146854.47,6571873.59],[146864.49,6571860.225],[146871.78,6571858.245],[146878.77,6571859.325],[146895.18,6571864.005],[146900.67,6571864.005],[146909.25,6571861.575],[146920.68,6571855.41],[146931.45,6571852.83],[146944.86,6571851.675],[146961.33,6571848.96],[146970.09,6571847.505],[146980.65,6571844.385],[146984.73,6571843.59],[146993.67,6571840.125],[147002.04,6571843.41],[147005.76,6571847.28],[147014.46,6571859.5201],[147020.31,6571870.695],[147020.64,6571883.52],[147027.57,6571903.0199],[147034.14,6571911.045],[147044.16,6571919.07],[147048.33,6571920]]},"properties":{"name":"Segeltorp","id":"14"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[150635.01,6564526.065],[150630.75,6564544.245],[150631.68,6564562.92],[150635.73,6564573.405],[150644.34,6564582.645],[150651.51,6564588.465],[150658.47,6564590.4],[150666.36,6564598.08],[150673.08,6564614.34],[150681.9,6564618.54],[150697.26,6564618.33],[150712.29,6564616.05],[150726.33,6564611.37],[150748.17,6564617.205],[150767.91,6564621.87],[150786.27,6564637.665],[150800.88,6564653.97],[150813.9,6564660.495],[150839.79,6564650.94],[150861.33,6564644.49],[150889.98,6564641.955],[150909.15,6564653.715],[150906.63,6564675.6],[150901.02,6564692.61],[150906.27,6564702.195],[150917.28,6564704.37],[150941.16,6564702.195],[150953.28,6564704.91],[150965.94,6564719.73],[150976.53,6564734.055],[150982.23,6564742.575],[150990.69,6564753.96],[151004.85,6564800.43],[150996.9,6564814.545],[150986.22,6564834.63],[150978.63,6564868.275],[150990.81,6564888.4201],[151005.06,6564896.1],[151032.03,6564904.05],[151060.56,6564907.77],[151098.33,6564902.265],[151149.63,6564897.24],[151153.56,6564890.91],[151165.62,6564886.08],[151191.27,6564886.9951],[151216.02,6564883.665],[151254.93,6564873.105],[151284.75,6564856.545],[151295.94,6564833.22],[151298.31,6564819.435],[151292.7,6564788.8499],[151281.84,6564758.4601],[151280.46,6564745.785],[151286.37,6564715.215],[151283.7,6564689.13],[151277.13,6564666.0149],[151268.28,6564651.72],[151252.71,6564642.495],[151233.9,6564629.655],[151221.87,6564626.01],[151201.41,6564633.78],[151169.25,6564649.635],[151150.5,6564643.2149],[151133.61,6564635.73],[151084.2,6564612.795],[151067.25,6564602.085],[151044.54,6564564.645],[151026.45,6564556.6801],[150984.18,6564556.98],[150954.42,6564559.9949],[150945.45,6564553.89],[150927.72,6564539.505],[150930.42,6564524.295],[150906.99,6564512.055],[150892.14,6564507.525],[150868.17,6564493.47],[150857.55,6564467.7],[150808.95,6564461.3849],[150786.66,6564461.595],[150757.23,6564479.4],[150741.33,6564483.465],[150726.27,6564478.8],[150712.17,6564477.69],[150700.08,6564478.86],[150692.61,6564482.82],[150685.59,6564491.115],[150679.08,6564496.005],[150669.36,6564501.405],[150653.46,6564507.825],[150645.51,6564513.6451],[150635.01,6564526.065]]},"properties":{"name":"Sundby","id":"5"}}]}')},599:function(e){e.exports=JSON.parse('{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[148474.11,6564112.89]},"properties":{"name":"Utegym vid Glad\xf6 lekplats"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[147798.45,6566675.55]},"properties":{"name":"Naturgym vid Vis\xe4ttra sportcenter"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[149275.62,6569397.63]},"properties":{"name":"Utegym i R\xe5dsparken"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[147185.43,6570357.45]},"properties":{"name":"Utegym vid K\xe4llbrinks IP "}},{"type":"Feature","geometry":{"type":"Point","coordinates":[148026.9,6572331.39]},"properties":{"name":"Naturgym vid Tranparken"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[149788.74,6570381.53]},"properties":{"name":"Utegym i Skeppsmyreparken"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[155954.28,6567599.4]},"properties":{"name":"\xc5gesta friluftsomr\xe5de"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[158312.97,6567754.68]},"properties":{"name":"Hinderbana och utegym i Nytorps mosse"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[158980.44,6568762.71]},"properties":{"name":"Utegym i Sj\xf6\xe4ngsparken"}}]}')},600:function(e){e.exports=JSON.parse('{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[18.18527144413,59.21194213743],[18.18128097228,59.21625065496],[18.17584900843,59.22001172548],[18.17744664486,59.22516208436],[18.17776617214,59.22802305897],[18.17696735393,59.22949432393],[18.178724754,59.23325393503],[18.17680759029,59.23529702814],[18.16274838975,59.23725828239],[18.14197911622,59.24093533015],[18.13335187952,59.24322307088],[18.12983707939,59.24216092463],[18.12376606097,59.24085362228],[18.12584298832,59.23595079209],[18.11497906063,59.23202802041],[18.11018615136,59.23031166594],[18.11002638771,59.22802305897],[18.09452931439,59.2312924505],[18.08941687783,59.23276357447],[18.08382515034,59.23268184702],[18.07807365921,59.23456152871],[18.06784878609,59.24052678886],[18.05826296754,59.24542896122],[18.05458840376,59.24787978311],[18.05155289455,59.24649100567],[18.03286054838,59.2505754837],[18.02774811182,59.25286257764],[18.02359425711,59.25400606706],[18.02087827519,59.25694629227],[18.01768300234,59.25784464382],[18.01352914763,59.2575996412],[18.0100143475,59.25915129471],[18.00697883829,59.26004958813],[18.00202616537,59.2611111771],[17.9949965651,59.26209107603],[17.98844625576,59.26364252502],[17.98301429191,59.26421409368],[17.97534563707,59.26674521106],[17.97215036422,59.26821480582],[17.96639887309,59.26992925291],[17.96352312752,59.2705007161],[17.9596888001,59.27384766509],[17.95745210911,59.27670455643],[17.95952903646,59.28266244427],[17.95569470904,59.28535539388],[17.94994321791,59.28682418569],[17.94339290857,59.28633459546],[17.93380709002,59.28380493376],[17.92613843517,59.28217279418],[17.92342245325,59.28143830584],[17.91862954398,59.28094863815],[17.91575379841,59.27833695816],[17.91399639834,59.2742558071],[17.90568868893,59.27245994567],[17.90009696144,59.26968433719],[17.89402594303,59.26992925291],[17.88587799726,59.27213341523],[17.87725076056,59.27450068995],[17.87101997851,59.27574548392],[17.86305176683,59.27606177677],[17.86056057058,59.27076112477],[17.8589012441,59.26902568022],[17.86330707235,59.26608139871],[17.86839072032,59.26371424277],[17.87324842839,59.26221303427],[17.87483000776,59.26053853136],[17.8747170378,59.25759351627],[17.87460406785,59.25401295904],[17.87426515798,59.25129841497],[17.87618564722,59.24973889826],[17.87539485753,59.24661965079],[17.87765425663,59.24425114264],[17.88533621357,59.24494438157],[17.88996798173,59.24378897553],[17.8960683593,59.24251798365],[17.90070012746,59.24130471994],[17.90533189561,59.22928530021],[17.9209217494,59.22899631972],[17.92306817855,59.22801376773],[17.93075013549,59.22356303082],[17.93029825567,59.21801324697],[17.93086310544,59.21477545626],[17.93041122562,59.2057542768],[17.93278359468,59.20049082126],[17.93854506239,59.19343304752],[17.94069149153,59.19256518779],[17.94939017807,59.19210232025],[17.95729807492,59.19065581877],[17.96656161123,59.1894407102],[17.97006367983,59.18365388607],[17.97311386862,59.17798184765],[17.97367871839,59.16883515049],[17.98294225471,59.16084426104],[17.98678323318,59.15800646708],[17.99728943899,59.15661644129],[18.00271199683,59.15389414387],[18.02022233986,59.14526245001],[18.02304658874,59.14479894177],[18.02598380757,59.14288690396],[18.02835617662,59.14248130645],[18.04225148109,59.14537832608],[18.06134340348,59.14949167271],[18.06913833038,59.15111370167],[18.0909415317,59.1507661305],[18.09421766039,59.15302527995],[18.10178664738,59.15412583719],[18.0944436003,59.15823813255],[18.10958157428,59.16814036465],[18.10890375455,59.17022467982],[18.10415901643,59.18128100492],[18.10189961733,59.18348026621],[18.10167367742,59.18573725564],[18.10551465589,59.18625807819],[18.10619247562,59.18718396535],[18.11206691329,59.18510068397],[18.11624680162,59.18805196177],[18.1190710505,59.18938284681],[18.12166935946,59.191523727],[18.11952293032,59.19320162042],[18.12652706753,59.19516870086],[18.12867349667,59.19563152686],[18.13115883568,59.19667286242],[18.13669436348,59.19748276814],[18.14302068096,59.19725136847],[18.14539305001,59.19811910916],[18.14561898992,59.19516870086],[18.14945996839,59.19441659524],[18.15183233745,59.19626790237],[18.1539787666,59.19713566804],[18.15386579664,59.19910252197],[18.15567331592,59.19991237008],[18.15691598543,59.20158985151],[18.15962726435,59.20286236867],[18.16855189079,59.20662180149],[18.17182801949,59.20766280202],[18.18199531544,59.21113257457],[18.18527144413,59.21194213743]]]},"properties":{"name":"Huddinge","id":"1"}}')},607:function(e,t,n){e.exports=n.p+"static/media/man-gym.2d45dabd.png"},608:function(e,t,n){e.exports=n.p+"static/media/man-gym-selected.be9fc525.png"},609:function(e,t,n){e.exports=n.p+"static/media/woman-gym.dc141b1d.png"},610:function(e,t,n){e.exports=n.p+"static/media/woman-gym-selected.0fb3be83.png"},628:function(e,t,n){e.exports=n(1063)},633:function(e,t,n){},636:function(e,t,n){},637:function(e,t,n){}},[[628,1,2]]]);
//# sourceMappingURL=main.48f7522a.chunk.js.map