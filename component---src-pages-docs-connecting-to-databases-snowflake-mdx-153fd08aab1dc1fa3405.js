(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{hdO2:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return l}));var a=t("k1TG"),o=t("8o2o"),r=(t("q1tI"),t("7ljp")),s=t("hhGP"),i=(t("qKvR"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/docs/Connecting to Databases/snowflake.mdx"}});var c=s.a;function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)(c,Object(a.a)({},t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"snowflake"},"Snowflake"),Object(r.b)("p",null,"The recommended connector library for Snowflake is\n",Object(r.b)("a",{href:"https://pypi.org/project/snowflake-sqlalchemy/",parentName:"p"},"snowflake-sqlalchemy"),"."),Object(r.b)("p",null,"The connection string for Snowflake looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"snowflake://{user}:{password}@{account}.{region}/{database}?role={role}&warehouse={warehouse}\n")),Object(r.b)("p",null,"The schema is not necessary in the connection string, as it is defined per table/query. The role and\nwarehouse can be omitted if defaults are defined for the user, i.e."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"snowflake://{user}:{password}@{account}.{region}/{database}\n")),Object(r.b)("p",null,"Make sure the user has privileges to access and use all required\ndatabases/schemas/tables/views/warehouses, as the Snowflake SQLAlchemy engine does not test for\nuser/role rights during engine creation by default. However, when pressing the “Test Connection”\nbutton in the Create or Edit Database dialog, user/role credentials are validated by passing\n“validate_default_parameters”: True to the connect() method during engine creation. If the user/role\nis not authorized to access the database, an error is recorded in the Superset logs."))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/docs/Connecting to Databases/snowflake.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-connecting-to-databases-snowflake-mdx-153fd08aab1dc1fa3405.js.map