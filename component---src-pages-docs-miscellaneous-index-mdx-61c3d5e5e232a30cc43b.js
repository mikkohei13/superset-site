(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{GBYl:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t("wx14"),o=t("zLVn"),i=(t("q1tI"),t("7ljp")),r=t("hhGP"),l=(t("qKvR"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/docs/Miscellaneous/index.mdx"}});var s={_frontmatter:l},c=r.a;function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)(c,Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"country-map-tools"},"Country Map Tools"),Object(i.b)("p",null,"This tool is used in slices for visualization number or string by region, province or department of\nyour countries. So, if you want to use tools, you need ISO 3166-2 code of region, province or\ndepartment."),Object(i.b)("p",null,"ISO 3166-2 is part of the ISO 3166 standard published by the International Organization for\nStandardization (ISO), and defines codes for identifying the principal subdivisions (e.g., provinces\nor states) of all countries coded in ISO 3166-1"),Object(i.b)("p",null,"The purpose of ISO 3166-2 is to establish an international standard of short and unique alphanumeric\ncodes to represent the relevant administrative divisions and dependent territories of all countries\nin a more convenient and less ambiguous form than their full names. Each complete ISO 3166-2 code\nconsists of two parts, separated by a hyphen:"),Object(i.b)("p",null,"The first part is the ISO 3166-1 alpha-2 code of the country; The second part is a string of up to\nthree alphanumeric characters, which is usually obtained from national sources and stems from coding\nsystems already in use in the country concerned, but may also be developed by the ISO itself."),Object(i.b)("p",null,"We can apply these concepts to specify the state of Texas in the country of United States:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"US-TX\n")),Object(i.b)("h3",{id:"included-codes"},"Included Codes"),Object(i.b)("p",null,"The ISO codes for the following countries are included in Superset:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Belgium"),Object(i.b)("li",{parentName:"ul"},"China"),Object(i.b)("li",{parentName:"ul"},"Egypt"),Object(i.b)("li",{parentName:"ul"},"France"),Object(i.b)("li",{parentName:"ul"},"Germany"),Object(i.b)("li",{parentName:"ul"},"Japan"),Object(i.b)("li",{parentName:"ul"},"Liechtenstein"),Object(i.b)("li",{parentName:"ul"},"Morocco"),Object(i.b)("li",{parentName:"ul"},"Russia"),Object(i.b)("li",{parentName:"ul"},"Singapore"),Object(i.b)("li",{parentName:"ul"},"Spain"),Object(i.b)("li",{parentName:"ul"},"Switzerland"),Object(i.b)("li",{parentName:"ul"},"United Kingdom"),Object(i.b)("li",{parentName:"ul"},"Ukraine"),Object(i.b)("li",{parentName:"ul"},"USA")),Object(i.b)("h3",{id:"adding-new-countries"},"Adding New Countries"),Object(i.b)("p",null,"To add a new country in country map tools, you need to follow the following steps:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You need shapefiles which contain data of your map. You can get this file on this site:\n",Object(i.b)("a",{href:"https://www.diva-gis.org/gdata",parentName:"li"},"https://www.diva-gis.org/gdata")),Object(i.b)("li",{parentName:"ul"},"You need to add ISO 3166-2 with column name ISO for all record in your file. It’s important\nbecause it’s a norm for mapping your data with geojson file"),Object(i.b)("li",{parentName:"ul"},"You need to convert shapefile to geojson file. This action can make with ogr2ogr tools:\n",Object(i.b)("a",{href:"https://www.gdal.org/ogr2ogr.html",parentName:"li"},"https://www.gdal.org/ogr2ogr.html")),Object(i.b)("li",{parentName:"ul"},"Put your geojson file in next folder : superset-frontend/src/visualizations/CountryMap/countries\nwith the next name : nameofyourcountries.geojson"),Object(i.b)("li",{parentName:"ul"},"You can to reduce size of geojson file on this site: ",Object(i.b)("a",{href:"https://mapshaper.org/",parentName:"li"},"https://mapshaper.org/")),Object(i.b)("li",{parentName:"ul"},"Go in file ",Object(i.b)("inlineCode",{parentName:"li"},"superset-frontend/src/explore/controls.jsx")),Object(i.b)("li",{parentName:"ul"},"Add your country in component ‘select_country’. Here's an example:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"    type: 'SelectControl',\n    label: 'Country Name Type',\n    default: 'France',\n    choices: [\n    'Belgium',\n    'Brazil',\n    'China',\n    'Egypt',\n    'France',\n    'Germany',\n    'Italy',\n    'Japan',\n    'Korea',\n    'Morocco',\n    'Netherlands',\n    'Russia',\n    'Singapore',\n    'Spain',\n    'Uk',\n    'Usa',\n    ].map(s => [s, s]),\n    description: 'The name of country that Superset should display',\n},\n")))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/docs/Miscellaneous/index.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-miscellaneous-index-mdx-61c3d5e5e232a30cc43b.js.map