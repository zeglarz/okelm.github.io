(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{161:function(t,e,a){"use strict";a.r(e);var A=a(7),n=a.n(A),r=a(0),o=a.n(r),i=a(56),l=a(167),c=a(163),s=a(164),d=a(162),p=a(190),m=a.n(p);o.a.Component;a.d(e,"pageQuery",function(){return f});var u=function(t){function e(){return t.apply(this,arguments)||this}return n()(e,t),e.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title,a=t.allMarkdownRemark.edges;return o.a.createElement(c.a,{location:this.props.location,title:e},o.a.createElement(s.a,{title:"All posts",keywords:["bart","bartek","widlarz","bart widlarz","bartek widlarz","bartlomiej widlarz","bartłomiej widlarz"]}),o.a.createElement(m.a,{style:{background:"linear-gradient(to bottom, grey , #2B373B, #2B373B, #2B373B, #2B373B, #2B373B)",fontFamily:"Montserrat",fontSize:"13px"},buttonText:"ok",contentStyle:{flex:"1 200px",margin:"10px"},buttonStyle:{borderRadius:"15px",backgroundColor:"#007acc",color:"#ffffff",fontSize:"13px",fontFamily:"Montserrat"}},"This website uses cookies."),o.a.createElement(l.a,null),a.map(function(t){var e=t.node,a=e.frontmatter.title||e.fields.slug;return o.a.createElement("div",{key:e.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(d.a)(.25)}},o.a.createElement(i.Link,{style:{boxShadow:"none"},to:e.fields.slug},a)),o.a.createElement("small",null,e.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}}))}))},e}(o.a.Component),f=(e.default=u,"2785444898")},162:function(t,e,a){"use strict";a.d(e,"a",function(){return l}),a.d(e,"b",function(){return c});a(156);var A=a(171),n=a.n(A),r=a(172),o=a.n(r);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},"a.anchor":{boxShadow:"none"}}},delete o.a.googleFonts;var i=new n.a(o.a);var l=i.rhythm,c=i.scale},163:function(t,e,a){"use strict";a(26);var A=a(7),n=a.n(A),r=a(0),o=a.n(r),i=a(56),l=a(162),c=function(t){function e(){return t.apply(this,arguments)||this}return n()(e,t),e.prototype.render=function(){var t,e=this.props,a=e.location,A=e.title,n=e.children;return t="/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},o.a.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},A)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},A)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},o.a.createElement("header",null,t),o.a.createElement("main",null,n),o.a.createElement("footer",null,"Copyright © 2019 Bartłomiej Widlarz"))},e}(o.a.Component);e.a=c},164:function(t,e,a){"use strict";var A=a(165),n=a(0),r=a.n(n),o=a(1),i=a.n(o),l=a(173),c=a.n(l),s=a(56);function d(t){var e=t.description,a=t.lang,n=t.meta,o=t.keywords,i=t.title;return r.a.createElement(s.StaticQuery,{query:p,render:function(t){var A=e||t.site.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:A},{property:"og:title",content:i},{property:"og:description",content:A},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:A}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})},data:A})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},e.a=d;var p="1025518380"},165:function(t){t.exports={data:{site:{siteMetadata:{title:"Bart Widlarz's Blog",description:"As a software developer, team leader and business owner I write about technology from various perspectives. I specialize in React and React Native applications.",author:"Bart Widlarz"}}}}},167:function(t,e,a){"use strict";var A=a(168),n=a(0),r=a.n(n),o=a(56),i=a(169),l=a.n(i),c=a(174),s=a(162);var d="4007731267";e.a=function(){return r.a.createElement(o.StaticQuery,{query:d,render:function(t){var e=t.site.siteMetadata,a=e.author,A=e.social;return r.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2.5)}},r.a.createElement("img",{src:l.a,alt:"Bart Widlarz",style:{marginRight:Object(s.a)(.5),width:Object(s.a)(2),height:Object(s.a)(2),borderRadius:"50%"}}),r.a.createElement("p",null,"Written by ",r.a.createElement("strong",null,a)," who works remotely in software development as a developer and leader."," ",r.a.createElement("b",null,r.a.createElement("a",{href:"https://bwidlarz.com/hello-world/#contact-me"},"CONTACT ME")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(c.SocialIcon,{url:"https://linkedin.com/in/widlarz",style:{color:"#FFFFFF"}})," ",r.a.createElement(c.SocialIcon,{url:"https://twitter.com/"+A.twitter,style:{color:"#FFFFFF"}})," ",r.a.createElement(c.SocialIcon,{url:"https://github.com/Okelm",style:{color:"#FFFFFF"}})," "))},data:A})}},168:function(t){t.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQL/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABsTZ6a0kBmhyUWgP/xAAbEAEBAAIDAQAAAAAAAAAAAAACAQMRABASE//aAAgBAQABBQKJY4Xk6evJMK9ck2QZ8Rdn/8QAFhEAAwAAAAAAAAAAAAAAAAAAAREg/9oACAEDAQE/AUI//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHBAAAQQDAQAAAAAAAAAAAAAAEQABAhAhQWES/9oACAEBAAY/Aizk4yhPJ21CSjztSltet1//xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMUFhcf/aAAgBAQABPyFwrkV54w7QDThEuIfHZc3EI1ncb+QXoIjdHcfJmf/aAAwDAQACAAMAAAAQUDhC/8QAGBEBAQADAAAAAAAAAAAAAAAAAQAQEUH/2gAIAQMBAT8QUFt3Mf/EABgRAQADAQAAAAAAAAAAAAAAAAEAEBFB/9oACAECAQE/EBRyYTtf/8QAHRABAQADAAIDAAAAAAAAAAAAAREAITFBYXGBof/aAAgBAQABPxAsVqd8o/uQehjlS7ygceNCw72d9Yzi5gQN3T7xVRfQuVjRQfHN5ERq1zfMBsoZXP/Z",width:50,height:50,src:"/static/b505cf9453dbf3920724f797ba1159d4/c15d6/profile-pic.jpg",srcSet:"/static/b505cf9453dbf3920724f797ba1159d4/c15d6/profile-pic.jpg 1x,\n/static/b505cf9453dbf3920724f797ba1159d4/43c20/profile-pic.jpg 1.5x,\n/static/b505cf9453dbf3920724f797ba1159d4/da97e/profile-pic.jpg 2x,\n/static/b505cf9453dbf3920724f797ba1159d4/3e75a/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Bart Widlarz",social:{twitter:"BWidlarz"}}}}}},169:function(t,e,a){t.exports=a.p+"static/profile-pic-b505cf9453dbf3920724f797ba1159d4.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-55d1828067c10d83c82e.js.map