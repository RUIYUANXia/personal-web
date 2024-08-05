(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{QeBL:function(e,t,a){"use strict";a.r(t),a.d(t,"Home",(function(){return _}));var n=a("9eSz"),l=a.n(n),i=a("q1tI"),r=a.n(i),o=a("/eHF"),d=a.n(o),m=a("ne57"),A=a.n(m),c=a("nig9"),s=a("GGh6"),g=a("Jnit");var p=e=>{let{iconFill:t=g.a.textTitleLight}=e;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",x:"0",y:"0",viewBox:"0 0 50 50"},r.a.createElement("path",{d:"M17.791 46.836A1.999 1.999 0 0019 45v-5.4c0-.197.016-.402.041-.61A.611.611 0 0119 39h-3.6c-1.5 0-2.8-.6-3.4-1.8-.7-1.3-1-3.5-2.8-4.7-.3-.2-.1-.5.5-.5.6.1 1.9.9 2.7 2 .9 1.1 1.8 2 3.4 2 2.487 0 3.82-.125 4.622-.555C21.356 34.056 22.649 33 24 33v-.025c-5.668-.182-9.289-2.066-10.975-4.975-3.665.042-6.856.405-8.677.707a21.537 21.537 0 01-.151-.987c1.797-.296 4.843-.647 8.345-.714a8.162 8.162 0 01-.291-.849c-3.511-.178-6.541-.039-8.187.097-.02-.332-.047-.663-.051-.999 1.649-.135 4.597-.27 8.018-.111a9.832 9.832 0 01-.13-1.543c0-1.7.6-3.5 1.7-5-.5-1.7-1.2-5.3.2-6.6 2.7 0 4.6 1.3 5.5 2.1C21 13.4 22.9 13 25 13s4 .4 5.6 1.1c.9-.8 2.8-2.1 5.5-2.1 1.5 1.4.7 5 .2 6.6 1.1 1.5 1.7 3.2 1.6 5 0 .484-.045.951-.11 1.409 3.499-.172 6.527-.034 8.204.102-.002.337-.033.666-.051.999-1.671-.138-4.775-.28-8.359-.089a8.272 8.272 0 01-.325.98c3.546.046 6.665.389 8.548.689-.043.332-.093.661-.151.987-1.912-.306-5.171-.664-8.879-.682-1.665 2.878-5.22 4.755-10.777 4.974V33c2.6 0 5 3.9 5 6.6V45c0 .823.498 1.53 1.209 1.836C41.37 43.804 48 35.164 48 25 48 12.318 37.683 2 25 2S2 12.318 2 25c0 10.164 6.63 18.804 15.791 21.836z",fill:t}))};var u=e=>{let{iconFill:t=g.a.textTitleLight}=e;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",x:"0",y:"0",viewBox:"0 0 50 50"},r.a.createElement("path",{d:"M8 3.01c-3.47 0-5.99 2.08-5.99 4.94 0 2.87 2.58 5.04 5.99 5.04 3.47 0 5.99-2.12 5.99-5.1-.16-2.87-2.63-4.88-5.99-4.88zM3 15c-.55 0-1 .45-1 1v29c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V16c0-.55-.45-1-1-1H3zm15 0c-.55 0-1 .45-1 1v29c0 .55.45 1 1 1h9a1 1 0 001-1V29.5c0-2.37 1.82-4.3 4.14-4.48.12-.02.24-.02.36-.02s.24 0 .36.02c2.32.18 4.14 2.11 4.14 4.48V45a1 1 0 001 1h9c.55 0 1-.45 1-1V28c0-6.47-3.47-13-11.21-13-3.52 0-6.18 1.36-7.79 2.49V16c0-.55-.45-1-1-1H18z",fill:t}))},h=a("1JrF"),f=a("soUV"),x=a("nQb1"),b=a("6uqF"),E=a("rU1X"),w=a("vOnD"),y=a("aqEB");const B=E.d.div`
    position: relative;
    height: 560px;
    margin-top: -60px; // height of the menu
    display: flex;
    padding: 0 20px;

    ${g.b.medium`
        height: unset;
        margin-top: -140px; // height of the menu
        padding-top: calc(140px + 20px);
        padding-bottom: 80px;
    `};
`,D=Object(E.d)(s.g)`
    padding: 40px 0;
`,v=Object(E.d)(s.g)`
    display: flex;
    height: 100%;

    ${g.b.medium`
        flex-direction: column;
    `};
`,C=Object(E.d)(l.a)`
    left: 0;
    top: 0;
    width: 100vw;
    height: 560px;

    ${g.b.medium`
        height: 100%;
    `};

    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: ${e=>"light"===e.theme.color?g.a.backgroundLight:g.a.backgroundDark};
        opacity: 1;
    }
`,P=E.d.div`
    z-index: 1;
    align-self: flex-end;
    flex-shrink: 0;

    ${g.b.medium`
        align-self: center;
    `};
`,Q=Object(w.keyframes)(["0%,100%{transform:scale(1) rotate(0deg);}25%{transform:scale(1.05) rotate(4deg);}50%{transform:scale(1.05) rotate(-4deg);}75%{transform:scale(0.95) rotate(-4deg);}"]),k=Object(E.d)(l.a)`
    height: 460px;
    width: 460px;
    animation: ${Q} 10s infinite;

    ${g.b.medium`
        height: 250px;
        width: 250px;
        margin-bottom: 40px;
    `};
`,N=E.d.div`
    align-self: center;
    margin-top: 20px;
    margin-left: 80px;
    z-index: 1;

    ${g.b.medium`
        margin-top: 0;
        margin-left: 0;
        text-align: center;
        width: 600px;
        max-width: 100%;
    `};
`,R=E.d.p`
    ${g.e.largeThin};
    ${g.d.body};
    margin-bottom: 10px;

    ${g.b.medium`
        margin-bottom: 30px;
    `};
`,K=E.d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5px;
    padding-right: 20px;
    padding-left: 20px;
`,H=E.d.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  
`,U=E.d.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`,I=E.d.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 0px 30px;
`,S=E.d.p`
    ${g.e.largeThin};
    ${g.d.body};
    margin-bottom: 10px;
    text-align: left;

    ${g.b.medium`
        margin-bottom: 30px;
    `};
`,W=E.d.p`
    ${g.e.normal};
    ${g.d.body};
    margin-bottom: 10px;
    text-align: right;
    margin-left: auto;

    ${g.b.medium`
        margin-bottom: 30px;
    `};
`,F=E.d.p`
    ${g.e.normal};
    ${g.d.body};
    margin-bottom: 10px;

    ${g.b.medium`
        margin-bottom: 30px;
    `};
`,z=E.d.ul`
    display: flex;
    align-items: center;
    margin: 0 -10px;
    padding: 0;

    ${g.b.medium`
        justify-content: center;
    `};

    svg {
        width: 35px;
    }
`,G=E.d.li`
    margin: 0 2rem;
    transform: scale(1.5);

    &:before {
        content: '';
    }
`,J=E.d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 20px;
`,T=Object(E.d)(J)`
    align-items: center;
`,q=E.d.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    justify-content: center;
`,V=E.d.div`
    flex-basis: 360px;
    max-width: 100%;
`,Y=Object(E.d)(x.a)`
    text-decoration: none;
    color: inherit;
    transition: all ease-in-out ${g.f.slow};
    display: block;

    &:hover {
        transform: scale(1.02);
        color: inherit;
    }
`,j=E.d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-bottom: 60px;
`,O=E.d.h3`
    ${g.d.title};
    ${g.e.large};
    font-family: 'Poppins';
    margin: 0 0 10px 0;
`,M=Object(E.d)(l.a)`
    margin-bottom: 20px;
    width: 240px;
    max-width: 100%;
`,L=E.d.p`
    ${g.e.normal};
    text-align: center;
    margin: 0;
`,X=Object(E.d)(b.a)`
    margin-bottom: 80px;

    ${g.b.medium`
        margin-bottom: 60px;
    `};
`,Z=()=>{const{theme:e}=Object(y.c)(),t="light"===e?g.a.textTitleLight:g.a.textTitleDark,a=[{link:"https://github.com/RUIYUANXia",icon:r.a.createElement(p,{iconFill:t})},{link:"https://www.linkedin.com/in/ryxia2002/",icon:r.a.createElement(u,{iconFill:t})}];return r.a.createElement(z,null,a.map(e=>r.a.createElement(G,{key:e.link},r.a.createElement(x.a,{to:e.link},e.icon))))},$=e=>{let{projectPageLink:t,children:a}=e;return t?r.a.createElement(Y,{to:""+t},a):a},_=e=>{let{data:{homeHeader:t,homeHeadshot:a,posts:{edges:n},projects:{edges:l}}}=e;return r.a.createElement(f.a,null,r.a.createElement(B,null,r.a.createElement(v,null,r.a.createElement(P,null,r.a.createElement(k,{fluid:a.childImageSharp.fluid,alt:"RY Xia's headshot"})),r.a.createElement(N,null,r.a.createElement(R,null,r.a.createElement("strong",null,"Hi there!"),r.a.createElement("br",null),"I am ",r.a.createElement("strong",null,"Ruiyuan Xia"),r.a.createElement("br",null),"a ",r.a.createElement("strong",null,"UBC")," student major in ",r.a.createElement("strong",null,"CS"),r.a.createElement("br",null),"a ",r.a.createElement("strong",null,"full stack ")," ",r.a.createElement("strong",null,r.a.createElement(h.a,{words:["software developer...","data engineer..."],delay:170}))),r.a.createElement(Z,null))),r.a.createElement(C,{fluid:t.childImageSharp.fluid,alt:"Snowy mountains",style:{position:"absolute"}})),r.a.createElement(d.a,null,r.a.createElement(s.d,null)),r.a.createElement(K,null,r.a.createElement(d.a,{top:!0},r.a.createElement(X,{as:"h2"},"Work Experience"))),r.a.createElement(I,null,r.a.createElement(d.a,{bottom:!0},r.a.createElement(H,null,r.a.createElement(U,{src:A.a,alt:"Activision Logo"}),r.a.createElement(S,null,r.a.createElement("strong",null,"Full Stack Engineer - Data"),r.a.createElement("br",null)," @ Microsoft | Activision • Internship"),r.a.createElement(W,null,r.a.createElement("strong",null,"Sep 2023 - Aug 2024 • 1 yr"),r.a.createElement("br",null)," Vancouver, BC, Canada • Hybrid")),r.a.createElement(F,null,"• Responsible for the development of data engineering and self service applications with diverse datastore integrations, primarily leveraging Django. ",r.a.createElement("br",null),"• Involved in the design and implementation of templated SQL systems for metadata tracking and data quality assurance. ",r.a.createElement("br",null),"• Participated in full-stack development activities, including backend services, APIs, and frontends for data analytics tool delivery. ",r.a.createElement("br",null),"• Enhanced the anti-cheat application by integrating a permanent ban feature for player mitigation. ",r.a.createElement("br",null),"• Authored complex SQL queries for diverse reporting, dashboarding and visualization. ",r.a.createElement("br",null),"• Supported KPI data ingress and reporting, including game client failures and backend system health. ",r.a.createElement("br",null),"• Enhanced ElasticSearch functionality for the Data QA automation tool, improving the search results."))),r.a.createElement(d.a,null,r.a.createElement(s.d,null)),r.a.createElement(D,null,r.a.createElement(J,null,r.a.createElement(d.a,{top:!0},r.a.createElement(X,{as:"h2"},"Recent Projects")),r.a.createElement(q,null,l.map(e=>{let{node:t}=e;return r.a.createElement(V,{key:t.fields.id},r.a.createElement($,{projectPageLink:t.frontmatter.detailsPageLink},r.a.createElement(d.a,{top:!0},r.a.createElement(j,null,r.a.createElement(M,{fluid:t.frontmatter.imageColor.childImageSharp.fluid}),r.a.createElement(O,null,t.frontmatter.title),r.a.createElement(L,null,t.frontmatter.description)))))})),r.a.createElement(d.a,{bottom:!0},r.a.createElement(s.a,{to:"/projects"},"See all projects")))),r.a.createElement(d.a,null,r.a.createElement(s.d,null)),r.a.createElement(T,null,r.a.createElement(d.a,{top:!0},r.a.createElement(X,{as:"h2"},"Recent Posts")),r.a.createElement(c.a,{posts:n}),r.a.createElement(d.a,{bottom:!0},r.a.createElement(s.a,{to:"/blog"},"See all posts"))))};t.default=_},ne57:function(e,t){e.exports="data:image/png;base64,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"},nig9:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),i=a("vOnD"),r=a("Jnit"),o=a("9eSz"),d=a.n(o),m=a("/eHF"),A=a.n(m),c=a("nQb1");const s=i.default.section.withConfig({displayName:"BlogCard__Post",componentId:"sc-37uabd-0"})(["width:1200px;height:auto;margin:0 0 80px;",";",";",";"],r.b.large`
        width: 1000px;
        height: auto;
        margin: 0 0 40px;
    `,r.b.medium`
        width: 500px;
        height: auto;
        margin: 0 0 40px;
    `,r.b.small`
        width: 400px;
        height: auto;
        margin: 0 0 40px;
    `),g=Object(i.default)(c.a).withConfig({displayName:"BlogCard__PostLink",componentId:"sc-37uabd-1"})(["display:flex;text-decoration:none;height:100%;background-color:",";box-shadow:0 4px 8px rgba(0,0,0,0.1);transition:all ease-in-out ",";",";&:hover{transform:scale(1.02) !important;box-shadow:0 4px 16px 8px rgba(0,0,0,0.1);}"],e=>"light"===e.theme.color?r.a.backgroundSecondaryLight:r.a.backgroundSecondaryDark,r.f.slow,r.b.large`
        flex-direction: column-reverse;
    `),p=i.default.div.withConfig({displayName:"BlogCard__PostDescription",componentId:"sc-37uabd-2"})(["",";padding:25px;width:50%;height:100%;",";"],r.d.body,r.b.large`
        padding-top: 15px;
        width: 100%;
    `),u=i.default.h3.withConfig({displayName:"BlogCard__PostTitle",componentId:"sc-37uabd-3"})(["",";font-weight:400;line-height:1.5;font-size:2.8rem;margin-top:0;margin-bottom:5px;",";"],r.d.title,r.b.medium`
        font-size: 2.4rem;
    `),h=i.default.div.withConfig({displayName:"BlogCard__MetaInfo",componentId:"sc-37uabd-4"})(["",";"],r.e.small),f=i.default.time.withConfig({displayName:"BlogCard__PostDate",componentId:"sc-37uabd-5"})([""]),x=i.default.span.withConfig({displayName:"BlogCard__MetaInfoSeparator",componentId:"sc-37uabd-6"})(["display:inline-block;margin:0 8px;"]),b=i.default.span.withConfig({displayName:"BlogCard__TimeToRead",componentId:"sc-37uabd-7"})([""]),E=i.default.span.withConfig({displayName:"BlogCard__Clock",componentId:"sc-37uabd-8"})(["display:inline-block;margin-right:5px;"]),w=i.default.p.withConfig({displayName:"BlogCard__PostExcerpt",componentId:"sc-37uabd-9"})(["",";"],r.e.normal),y=Object(i.default)(d.a).withConfig({displayName:"BlogCard__PostImage",componentId:"sc-37uabd-10"})(["flex-shrink:0;width:50%;",";",";"],r.b.large`
        height: 250px;
        width: 100%;
    `,r.b.small`
        height: 200px;
        width: 100%;
    `);var B=e=>{let{post:t}=e;return l.a.createElement(A.a,{bottom:!0,key:t.id},l.a.createElement(s,null,l.a.createElement(g,{to:t.frontmatter.slug},l.a.createElement(p,null,l.a.createElement(u,null,t.frontmatter.title),l.a.createElement(h,null,l.a.createElement(f,{dateTime:t.frontmatter.dateTimeString},t.frontmatter.formattedDate),l.a.createElement(x,null,"•"),l.a.createElement(b,null,l.a.createElement(E,null,"🕙"),t.timeToRead," min read")),l.a.createElement(w,null,t.frontmatter.description)),t.frontmatter.banner&&l.a.createElement(y,{fluid:t.frontmatter.banner.childImageSharp.fluid}))))};const D=i.default.div.withConfig({displayName:"BlogList",componentId:"sc-5hckmy-0"})(["display:flex;flex-direction:column;align-items:center;",";"],r.b.large`
        flex-direction: column;
        justify-content: center;
    `);t.a=e=>{let{posts:t}=e;return l.a.createElement(D,null,t.map(e=>{if(void 0!==e)return l.a.createElement(B,{key:e.node.id,post:e.node})}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-4f843d27877a215187bb.js.map