(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{142:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=(n(147),n(146)),o=n(152),m=n(148),d=n(151),c=n(145),l=(n(213),c.b.div.withConfig({displayName:"form__FormContainer",componentId:"sc-1ikmuh3-0"})(["margin:10rem 5rem;padding-right:20rem;form{width:100%;}@media (max-width:35em){padding:0;margin:10rem 3rem;}"])),s=c.b.div.withConfig({displayName:"form__InfoContainer",componentId:"sc-1ikmuh3-1"})(["display:flex;flex-direction:row;justify-content:space-between;width:100%;@media (max-width:35em){flex-direction:column;}"]),p=c.b.input.withConfig({displayName:"form__Input",componentId:"sc-1ikmuh3-2"})(["width:28%;border:1px solid ",";border-radius:3.2rem;padding:0.8rem 1.6rem;font-size:1.8rem;margin:0rem !important;::placeholder{font-size:1.6rem;}:focus{outline:none;}@media (max-width:35em){width:75%;margin-bottom:1rem !important;}"],i.b),u=c.b.textarea.withConfig({displayName:"form__StyledTextArea",componentId:"sc-1ikmuh3-3"})(["width:96.4%;margin-top:3.2rem;height:24rem;border:1px solid ",";border-radius:3.2rem;padding:1.6rem;font-size:18px;::placeholder{font-size:1.6rem;}:focus{outline:none;}@media (max-width:35em){width:92%;margin-top:1rem;margin-bottom:1rem !important;}"],i.b),h=c.b.input.withConfig({displayName:"form__StyledBtn",componentId:"sc-1ikmuh3-4"})(["background:",";border:none;border-radius:3.2rem;padding:0.8rem 3.2rem;font-size:1.8rem;color:white;margin:0;margin-top:3.2rem;:hover{cursor:pointer;}"],i.d),g=function(){return a.a.createElement(l,null,a.a.createElement("form",null,a.a.createElement(s,null,a.a.createElement(p,{placeholder:"First Name"}),a.a.createElement(p,{placeholder:"Last Name"}),a.a.createElement(p,{placeholder:"Email"})),a.a.createElement(u,{placeholder:"Message"}),a.a.createElement(h,{type:"submit",value:"Send Message"})))},f=n(7),w=n.n(f),b=n(214),y=n.n(b),k=c.b.div.withConfig({displayName:"map__PinContianer",componentId:"qsqqnr-0"})(["width:3rem;height:3rem;img{width:100%;object-fit:cover;}"]),v=function(){return a.a.createElement(k,null)},E=function(e){function t(){return e.apply(this,arguments)||this}return w()(t,e),t.prototype.render=function(){return a.a.createElement("div",{style:{height:"63vh",width:"100%"}},a.a.createElement(y.a,{bootstrapURLKeys:{key:"AIzaSyAAHuANKl0K054Li921ZL24ssweXJiDNFY"},defaultCenter:this.props.center,defaultZoom:this.props.zoom},a.a.createElement(v,{lat:36.7050299,lng:3.1739156})))},t}(r.Component);E.defaultProps={center:{lat:36.7050299,lng:3.1739156},zoom:16};var x=n(234);t.default=function(e){var t=e.location;return a.a.createElement(o.a,{location:t},a.a.createElement(m.a,{title:"Contact Us",keywords:["gatsby","application","react"]}),a.a.createElement(d.a,{background:x,title:"Contact Us",subtitle:"",text:"For any question regarding our event, reach us below"}),a.a.createElement(g,null))}},148:function(e,t,n){"use strict";var r=n(149),a=n(0),i=n.n(a),o=n(4),m=n.n(o),d=n(153),c=n.n(d),l=n(147);function s(e){var t=e.description,n=e.lang,a=e.meta,o=e.keywords,m=e.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(e){var r=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:m,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:m},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:m},{name:"twitter:description",content:r}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(a)})},data:r})}s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:m.a.string,lang:m.a.string,meta:m.a.array,keywords:m.a.arrayOf(m.a.string),title:m.a.string.isRequired},t.a=s;var p="1025518380"},149:function(e){e.exports={data:{site:{siteMetadata:{title:"IWD19 Algiers",description:"",author:"@gdg-algiers"}}}}},151:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(147),o=n(145),m=n(146),d=o.b.div.withConfig({displayName:"head__StyledHead",componentId:"sc-1v1l55k-0"})(["background-image:url(",");background-size:cover;background-repeat:no-repeat;background-position:bottom right;height:61vh;padding:14rem 4rem;@media (max-width:35em){height:100vh;padding:8rem 4rem;}"],function(e){return e.background}),c=o.b.div.withConfig({displayName:"head__HeadContent",componentId:"sc-1v1l55k-1"})(["h1{width:80%;font-size:7.5rem;font-weight:bold;}h2{color:",";font-size:2.8rem;}p{width:44%;color:",";padding:2rem 0rem;padding-bottom:5rem;font-size:2.6rem;line-height:1.6;}@media (max-width:35em){h1{width:100%;font-size:5rem;}p{width:100%;padding:0 !important;font-size:2rem;}}"],m.a,m.b),l=Object(o.b)(i.Link).withConfig({displayName:"head__StyledLink",componentId:"sc-1v1l55k-2"})(["border-radius:1.6rem;padding:2rem 4rem;background:",";color:white;font-size:2.6rem;text-decoration:none;:hover{text-decoration:none;color:white;}@media (max-width:35em){margin-left:25%;}"],m.a);t.a=function(e){var t=e.background,n=e.title,r=e.subtitle,i=e.text;return a.a.createElement(d,{background:t},a.a.createElement(c,null,a.a.createElement("h1",null," ",n," "),a.a.createElement("h2",null," ",r," "),a.a.createElement("p",null," ",i," "),a.a.createElement(l,{to:"/register"}," Apply Now ")))}},234:function(e,t,n){e.exports=n.p+"static/background-95217749707a9336a9c4b479218941d5.png"}}]);
//# sourceMappingURL=component---src-pages-contact-us-js-463e88be6b9c579b81ed.js.map