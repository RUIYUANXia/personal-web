(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{kiaG:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),i=a("/eHF"),l=a.n(i),d=a("nig9"),r=a("GGh6"),m=a("soUV"),c=a("nQb1"),s=a("6uqF"),p=a("rU1X"),g=a("Jnit");const u=Object(p.d)(s.a)`
    margin-bottom: 100px;

    ${g.b.medium`
        margin-bottom: 60px;
    `};
`,f=p.d.ul`
    display: flex;
    padding: 0;
`,h=p.d.li`
    margin-left: ${e=>"right"===e.position?"auto":0};

    &:before {
        display: none;
    }
`,b=Object(p.d)(c.a)``;t.default=e=>{let{data:{allMdx:t},pageContext:{pagination:a}}=e;const{page:n,nextPagePath:i,previousPagePath:c}=a,s=n.map(e=>t.edges.find(t=>t.node.id===e));return o.a.createElement(m.a,{title:"RY Xia | Blog"},o.a.createElement(r.f,null,o.a.createElement(l.a,{top:!0},o.a.createElement(u,null,"Blog")),o.a.createElement(d.a,{posts:s}),o.a.createElement(f,null,i&&o.a.createElement(h,{position:"left"},o.a.createElement(b,{to:i},"Newer Posts")),c&&o.a.createElement(h,{position:"right"},o.a.createElement(b,{to:c},"Older Posts")))))}},nig9:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("vOnD"),l=a("Jnit"),d=a("9eSz"),r=a.n(d),m=a("/eHF"),c=a.n(m),s=a("nQb1");const p=i.default.section.withConfig({displayName:"BlogCard__Post",componentId:"sc-37uabd-0"})(["width:1200px;height:auto;margin:0 0 80px;",";",";",";"],l.b.large`
        width: 1000px;
        height: auto;
        margin: 0 0 40px;
    `,l.b.medium`
        width: 500px;
        height: auto;
        margin: 0 0 40px;
    `,l.b.small`
        width: 400px;
        height: auto;
        margin: 0 0 40px;
    `),g=Object(i.default)(s.a).withConfig({displayName:"BlogCard__PostLink",componentId:"sc-37uabd-1"})(["display:flex;text-decoration:none;height:100%;background-color:",";box-shadow:0 4px 8px rgba(0,0,0,0.1);transition:all ease-in-out ",";",";&:hover{transform:scale(1.02) !important;box-shadow:0 4px 16px 8px rgba(0,0,0,0.1);}"],e=>"light"===e.theme.color?l.a.backgroundSecondaryLight:l.a.backgroundSecondaryDark,l.f.slow,l.b.large`
        flex-direction: column-reverse;
    `),u=i.default.div.withConfig({displayName:"BlogCard__PostDescription",componentId:"sc-37uabd-2"})(["",";padding:25px;width:50%;height:100%;",";"],l.d.body,l.b.large`
        padding-top: 15px;
        width: 100%;
    `),f=i.default.h3.withConfig({displayName:"BlogCard__PostTitle",componentId:"sc-37uabd-3"})(["",";font-weight:400;line-height:1.5;font-size:2.8rem;margin-top:0;margin-bottom:5px;",";"],l.d.title,l.b.medium`
        font-size: 2.4rem;
    `),h=i.default.div.withConfig({displayName:"BlogCard__MetaInfo",componentId:"sc-37uabd-4"})(["",";"],l.e.small),b=i.default.time.withConfig({displayName:"BlogCard__PostDate",componentId:"sc-37uabd-5"})([""]),x=i.default.span.withConfig({displayName:"BlogCard__MetaInfoSeparator",componentId:"sc-37uabd-6"})(["display:inline-block;margin:0 8px;"]),w=i.default.span.withConfig({displayName:"BlogCard__TimeToRead",componentId:"sc-37uabd-7"})([""]),y=i.default.span.withConfig({displayName:"BlogCard__Clock",componentId:"sc-37uabd-8"})(["display:inline-block;margin-right:5px;"]),C=i.default.p.withConfig({displayName:"BlogCard__PostExcerpt",componentId:"sc-37uabd-9"})(["",";"],l.e.normal),E=Object(i.default)(r.a).withConfig({displayName:"BlogCard__PostImage",componentId:"sc-37uabd-10"})(["flex-shrink:0;width:50%;",";",";"],l.b.large`
        height: 250px;
        width: 100%;
    `,l.b.small`
        height: 200px;
        width: 100%;
    `);var _=e=>{let{post:t}=e;return o.a.createElement(c.a,{bottom:!0,key:t.id},o.a.createElement(p,null,o.a.createElement(g,{to:t.frontmatter.slug},o.a.createElement(u,null,o.a.createElement(f,null,t.frontmatter.title),o.a.createElement(h,null,o.a.createElement(b,{dateTime:t.frontmatter.dateTimeString},t.frontmatter.formattedDate),o.a.createElement(x,null,"•"),o.a.createElement(w,null,o.a.createElement(y,null,"🕙"),t.timeToRead," min read")),o.a.createElement(C,null,t.frontmatter.description)),t.frontmatter.banner&&o.a.createElement(E,{fluid:t.frontmatter.banner.childImageSharp.fluid}))))};const I=i.default.div.withConfig({displayName:"BlogList",componentId:"sc-5hckmy-0"})(["display:flex;flex-direction:column;align-items:center;",";"],l.b.large`
        flex-direction: column;
        justify-content: center;
    `);t.a=e=>{let{posts:t}=e;return o.a.createElement(I,null,t.map(e=>{if(void 0!==e)return o.a.createElement(_,{key:e.node.id,post:e.node})}))}}}]);
//# sourceMappingURL=component---src-templates-blog-tsx-68f0b50acf7234efb127.js.map