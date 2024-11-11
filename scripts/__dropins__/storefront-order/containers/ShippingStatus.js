import{jsxs as m,jsx as n,Fragment as b}from"@dropins/tools/preact-jsx-runtime.js";import{classes as v,Slot as A}from"@dropins/tools/lib.js";import{Card as o,Header as _,Accordion as q,AccordionSection as x,ContentGrid as E,Image as $}from"@dropins/tools/components.js";import"../chunks/OrderCancel.js";import{useState as L,useEffect as X}from"@dropins/tools/preact-hooks.js";import{events as Y}from"@dropins/tools/event-bus.js";import"@dropins/tools/preact.js";import{u as Z}from"../chunks/useIsMobile.js";import{Text as R,useText as P}from"@dropins/tools/i18n.js";import{C as k}from"../chunks/OrderLoaders.js";import"@dropins/tools/preact-compat.js";var V=(e=>(e.PENDING="pending",e.SHIPPING="shipping",e.COMPLETE="complete",e.PROCESSING="processing",e.HOLD="on hold",e.CANCELED="Canceled",e.SUSPECTED_FRAUD="suspected fraud",e.PAYMENT_REVIEW="payment review",e))(V||{});const D=({orderData:e})=>{const[d,i]=L(!0),[s,c]=L(e),[a,C]=L(!1);return X(()=>{const f=Y.on("order/data",u=>{c(u),C(u==null?void 0:u.isVirtual),i(!1)},{eager:!0});return()=>{f==null||f.off()}},[]),{loading:d,order:s,isVirtualProduct:a}},ii=({slots:e,collapseThreshold:d,translations:i,returnData:s,routeTracking:c,routeProductDetails:a})=>{var u;const C=Z(),f=a?"a":"span";return m(o,{variant:"secondary",className:v(["order-shipping-status-card","order-shipping-status-card--return-order"]),children:[n(_,{title:i.returnOrderCardTitle}),m("div",{children:[(u=s==null?void 0:s.tracking)==null?void 0:u.map((p,g)=>{var S,y;return m("p",{children:[`${i.carrier} ${(y=(S=p==null?void 0:p.carrier)==null?void 0:S.label)==null?void 0:y.toLocaleUpperCase()}: `,n("a",{href:`${(c==null?void 0:c(p))??"#"}`,rel:"noreferrer",children:p.trackingNumber})]},`${p.trackingNumber}_${g}`)}),e!=null&&e.ReturnItemsDetails?n(A,{"data-testid":"returnItemsDetails",name:"ReturnItemsDetails",slot:e==null?void 0:e.ReturnItemsDetails,context:{items:s.items}}):null,n(q,{actionIconPosition:"right","data-testid":"dropinAccordion",children:n(x,{defaultOpen:d>=s.items.length,title:n(R,{id:"Order.ShippingStatusCard.itemText",plural:s.items.reduce((p,g)=>p+g.totalQuantity,0),fields:{count:s.items.reduce((p,g)=>p+g.totalQuantity,0)}}),children:n(E,{maxColumns:C?3:9,emptyGridContent:n(b,{}),className:v(["order-shipping-status-card__images",["order-shipping-status-card__images-3",C]]),children:s.items.map((p,g)=>{var h,I;const S=(h=p.thumbnail)==null?void 0:h.label,y=(I=p.thumbnail)==null?void 0:I.url;return n(f,{href:(a==null?void 0:a(p))??"#","data-testid":`${g}${p.uid}`,children:n($,{alt:S,src:y,width:85,height:114})},`${g}${p.uid}`)})})})})]})]})},ni=({translations:e,slots:d,orderData:i,collapseThreshold:s=10,routeProductDetails:c,routeTracking:a})=>{var I,G,w,M,U,H;const C=!!(i!=null&&i.returnNumber),f=i==null?void 0:i.returnNumber,u=c?"a":"span",p=(I=i==null?void 0:i.status)==null?void 0:I.toLocaleLowerCase(),S=((G=i==null?void 0:i.shipments)==null?void 0:G.length)===1&&(p==null?void 0:p.includes(V.COMPLETE)),y=(w=i==null?void 0:i.shipments)==null?void 0:w.every(t=>t.tracking.length===0),h=(M=i==null?void 0:i.items)==null?void 0:M.filter(t=>(t==null?void 0:t.quantityShipped)===0);if(C&&(i!=null&&i.returns.length)){const t=i.returns.find(r=>r.returnNumber===f);return!t||t.tracking.length===0?null:n(ii,{slots:d,collapseThreshold:s,translations:e,returnData:t,routeTracking:a,routeProductDetails:c})}return!i||p!=null&&p.includes(V.CANCELED)?null:(U=i==null?void 0:i.shipments)!=null&&U.length?y&&!(h!=null&&h.length)&&S?null:m(b,{children:[(H=i==null?void 0:i.shipments)==null?void 0:H.map(({tracking:t,items:r,id:N},K)=>{const j=r.reduce((l,O)=>{var T;return(l??0)+(((T=O.orderItem)==null?void 0:T.quantityShipped)??0)},0);return m(o,{variant:"secondary",className:"order-shipping-status-card",children:[n(_,{title:e.shippingCardTitle}),t==null?void 0:t.map(l=>{var O;return m("div",{className:"order-shipping-status-card__header",role:"status",children:[m("div",{className:"order-shipping-status-card__header--content",children:[m("p",{children:[e.carrier," ",(O=l==null?void 0:l.carrier)==null?void 0:O.toLocaleUpperCase()," | ",l==null?void 0:l.number]}),n("p",{children:l==null?void 0:l.title})]}),d!=null&&d.DeliveryTrackActions?n(A,{"data-testid":"deliverySlotActions",name:"DeliveryTrackActions",slot:d==null?void 0:d.DeliveryTrackActions,context:{trackInformation:l}}):null]},l.number)}),S?null:n(q,{actionIconPosition:"right","data-testid":"dropinAccordion",children:n(x,{"data-position":K+1,defaultOpen:s>=(r==null?void 0:r.length),title:n(b,{children:n(R,{id:"Order.ShippingStatusCard.notYetShippedImagesTitle",plural:j,fields:{count:j}})}),children:n(E,{maxColumns:6,emptyGridContent:n(b,{}),className:"order-shipping-status-card__images",children:r==null?void 0:r.map(l=>{var T,Q,W,z,B,J;const O=(W=(Q=(T=l==null?void 0:l.orderItem)==null?void 0:T.product)==null?void 0:Q.thumbnail)==null?void 0:W.label,F=(J=(B=(z=l==null?void 0:l.orderItem)==null?void 0:z.product)==null?void 0:B.thumbnail)==null?void 0:J.url;return n(u,{href:(c==null?void 0:c(l))??"#",children:n($,{alt:O,src:F||"",width:85,height:114})},l.id)})})})}),d!=null&&d.DeliveryTimeLine?n(A,{"data-testid":"deliverySlotTimeLine",name:"DeliveryTimeLine",slot:d==null?void 0:d.DeliveryTimeLine,context:{}}):null]},N)}),h!=null&&h.length?m(o,{variant:"secondary",className:"order-shipping-status-card","data-testid":"dropinAccordionNotYetShipped2",children:[n(_,{title:e.notYetShippedTitle}),n(q,{actionIconPosition:"right",children:n(x,{defaultOpen:s>=(h==null?void 0:h.length),title:n(R,{id:"Order.ShippingStatusCard.notYetShippedImagesTitle",plural:h.reduce((t,r)=>t+(r.quantityOrdered-r.quantityShipped===0?r.quantityOrdered:r.quantityOrdered-r.quantityShipped),0),fields:{count:h.reduce((t,r)=>t+(r.quantityOrdered-r.quantityShipped===0?r.quantityOrdered:r.quantityOrdered-r.quantityShipped),0)}}),children:n(E,{maxColumns:6,emptyGridContent:n(b,{}),className:"order-shipping-status-card__images",children:h==null?void 0:h.map(t=>{var r,N;return n(u,{href:(c==null?void 0:c(t))??"#",children:n($,{alt:(r=t.thumbnail)==null?void 0:r.label,src:((N=t.thumbnail)==null?void 0:N.url)||"",width:85,height:114})},t.id)})})})})]}):null]}):m(o,{variant:"secondary",className:"order-shipping-status-card",children:[n(_,{title:e.shippingInfoTitle}),n("div",{className:"order-shipping-status-card__header",children:m("div",{className:"order-shipping-status-card__header--content",children:[i!=null&&i.carrier?n("p",{children:i==null?void 0:i.carrier}):null,n("p",{children:e.noInfoTitle})]})})]})},mi=({slots:e,className:d,collapseThreshold:i,orderData:s,routeOrderDetails:c,routeTracking:a,routeProductDetails:C})=>{const{loading:f,order:u,isVirtualProduct:p}=D({orderData:s}),g=P({carrier:"Order.ShippingStatusCard.carrier",prepositionOf:"Order.ShippingStatusCard.prepositionOf",returnOrderCardTitle:"Order.ShippingStatusCard.returnOrderCardTitle",shippingCardTitle:"Order.ShippingStatusCard.shippingCardTitle",shippingInfoTitle:"Order.ShippingStatusCard.shippingInfoTitle",notYetShippedTitle:"Order.ShippingStatusCard.notYetShippedTitle",noInfoTitle:"Order.ShippingStatusCard.noInfoTitle",returnNumber:"Order.ShippingStatusCard.returnNumber",orderNumber:"Order.ShippingStatusCard.orderNumber"});return!f&&p?null:n("div",{className:v(["order-shipping-status",d]),children:!f&&u?n(ni,{translations:g,routeOrderDetails:c,routeTracking:a,slots:e,orderData:u,collapseThreshold:i,routeProductDetails:C}):n(k,{withCard:!1})})};export{mi as ShippingStatus,mi as default};
