(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{jhmi:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return l}));var o=n("k1TG"),s=n("8o2o"),a=(n("q1tI"),n("7ljp")),r=n("hhGP"),i=(n("qKvR"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/docs/installation/event-logging-page.mdx"}});var g=r.a;function l(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)(g,Object(o.a)({},n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"logging"},"Logging"),Object(a.b)("h3",{id:"event-logging"},"Event Logging"),Object(a.b)("p",null,"Superset by default logs special action events in its internal database. These logs can be accessed\non the UI by navigating to ",Object(a.b)("strong",{parentName:"p"},"Security > Action Log"),". You can freely customize these logs by\nimplementing your own event log class."),Object(a.b)("p",null,"Here's an example of a simple JSON-to-stdout class:"),Object(a.b)("pre",null,Object(a.b)("code",{className:"language-python",parentName:"pre"},"    def log(self, user_id, action, *args, **kwargs):\n        records = kwargs.get('records', list())\n        dashboard_id = kwargs.get('dashboard_id')\n        slice_id = kwargs.get('slice_id')\n        duration_ms = kwargs.get('duration_ms')\n        referrer = kwargs.get('referrer')\n\n        for record in records:\n            log = dict(\n                action=action,\n                json=record,\n                dashboard_id=dashboard_id,\n                slice_id=slice_id,\n                duration_ms=duration_ms,\n                referrer=referrer,\n                user_id=user_id\n            )\n            print(json.dumps(log))\n")),Object(a.b)("p",null,"End by updating your config to pass in an instance of the logger you want to use:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"EVENT_LOGGER = JSONStdOutEventLogger()\n")),Object(a.b)("h3",{id:"statsd-logging"},"StatsD Logging"),Object(a.b)("p",null,"Superset can be instrumented to log events to StatsD if desired. Most endpoints hit are logged as\nwell as key events like query start and end in SQL Lab."),Object(a.b)("p",null,"To setup StatsD logging, it’s a matter of configuring the logger in your ",Object(a.b)("inlineCode",{parentName:"p"},"superset_config.py"),"."),Object(a.b)("pre",null,Object(a.b)("code",{className:"language-python",parentName:"pre"},"from superset.stats_logger import StatsdStatsLogger\nSTATS_LOGGER = StatsdStatsLogger(host='localhost', port=8125, prefix='superset')\n")),Object(a.b)("p",null,"Note that it’s also possible to implement you own logger by deriving\n",Object(a.b)("inlineCode",{parentName:"p"},"superset.stats_logger.BaseStatsLogger"),"."))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/docs/installation/event-logging-page.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-installation-event-logging-page-mdx-1a991e2ea89105c390bf.js.map