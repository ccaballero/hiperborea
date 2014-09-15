Ember.TEMPLATES._menu=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("Hiperbórea")}function g(a,b){b.buffer.push("Seguridad")}function h(a,b){b.buffer.push("Desarrollo")}function i(a,b){b.buffer.push("Infraestructura IT")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var j,k,l,m,n,o="",p=this,q=c.helperMissing;return e.buffer.push('<header data-0="top: -3.3rem;" data-250="top:0rem;">\n    <nav>\n        <ul class="left">\n            <li>'),l={},m={},n={hash:{},inverse:p.noop,fn:p.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"index",n):q.call(b,"link-to","index",n),(k||0===k)&&e.buffer.push(k),e.buffer.push('</li>\n        </ul>\n        <ul class="right">\n            <li>'),l={},m={},n={hash:{},inverse:p.noop,fn:p.program(3,g,e),contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"security",n):q.call(b,"link-to","security",n),(k||0===k)&&e.buffer.push(k),e.buffer.push("</li>\n            <li>"),l={},m={},n={hash:{},inverse:p.noop,fn:p.program(5,h,e),contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"development",n):q.call(b,"link-to","development",n),(k||0===k)&&e.buffer.push(k),e.buffer.push("</li>\n            <li>"),l={},m={},n={hash:{},inverse:p.noop,fn:p.program(7,i,e),contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"sysadmin",n):q.call(b,"link-to","sysadmin",n),(k||0===k)&&e.buffer.push(k),e.buffer.push('</li>\n            <li><a href="http://blog.hiperborea.com.bo"\n                   target="_BLANK">Blog</a></li>\n        </ul>\n    </nav>\n</header>\n\n'),o}),Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h="",i=this.escapeExpression;return f={},g={},e.buffer.push(i(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push("\n\n"),h}),Ember.TEMPLATES.development=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i,j="",k=c.helperMissing,l=this.escapeExpression;return g={},h={},i={hash:{},contexts:[b],types:["STRING"],hashContexts:h,hashTypes:g,data:e},e.buffer.push(l((f=c.partial||b.partial,f?f.call(b,"_menu",i):k.call(b,"partial","_menu",i)))),e.buffer.push('\n\n<section class="block">\n    <h1>Desarrollo de Sistemas</h1>\n    <p>Cuando su negocio o infraestructura técnica requiere funcionalidad\n    adicional, Hiperbórea tiene la capacidad de realizar desarrollo de\n    aplicaciones y asistencia especializada.</p>\n    <p>Ya sea que esté integrando con un tercero o un sistema propietario o\n    trata de ampliar su solución para satisfacer una oportunidad de negocio\n    específica.</p>\n    <p>Nosotros trabajamos junto a usted para crear un entorno de seguridad\n    robusto y confiable.</p>\n    <p>Esta funcionalidad personalizada puede desempeñar un papel fundamental en\n    la ampliación de su solución de seguridad, que le permita integrarse con\n    éxito con otros sistemas e infraestructura.</p>\n    <p>También puede utilizar nuestros servicios para aumentar la productividad\n    mediante la adición de capacidades de automatización que permitirá a su\n    organización aprovechar nuevas oportunidades de negocio.</p>\n    <p>Nosotros te ofrecemos:</p>\n\n    <h2>Desarrollo de aplicaciones web</h2>\n    <p>En Hiperbórea nos especializamos en la construcción de soluciones libres\n    para la web, con tecnologías JavaScript tanto en lado del cliente, como\n    también de lado del servidor.</p>\n\n    <h2>Desarrollo de aplicaciones móviles</h2>\n    <p>Nosotros nos preocupamos por la accesibilidad y la conectitividad de los\n    sistemas en todo momento y todo lugar, podemos ofrecerte:</p>\n    <ul>\n        <li>Desarrollo de aplicaciones para Android.</li>\n        <li>Desarrollo de aplicaciones para FirefoxOS (open web apps).</li>\n    </ul>\n\n    <h2>Desarrollo de aplicaciones en tiempo real</h2>\n    <p>En Hiperbórea creemos que el mundo del mañana será descentralizado y en\n    tiempo real, por tal razón ofrecemos soluciones que utilicen las tecnologías\n    node.js / socket.io y así alcanzar grandes tiempos de respuesta y resultados\n    mas eficaces.</p>\n</section>\n\n'),j}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push('\n                <div class="logo"></div>\n            ')}function g(a,b){b.buffer.push("Seguridad Informática")}function h(a,b){b.buffer.push("Desarrollo de Sistemas")}function i(a,b){b.buffer.push("Infraestructura IT")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var j,k,l,m,n,o="",p=this,q=c.helperMissing;return e.buffer.push('<section id="front">\n    <div class="wrapper">\n        <div class="logo">\n            <div class="gray"></div>\n            <div class="blue"></div>\n        </div>\n        <div class="text"></div>\n    </div>\n    <div class="icons">\n        <div class="security">\n            '),l={},m={},n={hash:{},inverse:p.noop,fn:p.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"security",n):q.call(b,"link-to","security",n),(k||0===k)&&e.buffer.push(k),e.buffer.push('\n            <div class="text">\n                <h2>\n                    '),l={},m={},n={hash:{},inverse:p.noop,fn:p.program(3,g,e),contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"security",n):q.call(b,"link-to","security",n),(k||0===k)&&e.buffer.push(k),e.buffer.push('\n                </h2>\n            </div>\n        </div>\n        <div class="development">\n            '),l={},m={},n={hash:{},inverse:p.noop,fn:p.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"development",n):q.call(b,"link-to","development",n),(k||0===k)&&e.buffer.push(k),e.buffer.push('\n            <div class="text">\n                <h2>\n                    '),l={},m={},n={hash:{},inverse:p.noop,fn:p.program(5,h,e),contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"development",n):q.call(b,"link-to","development",n),(k||0===k)&&e.buffer.push(k),e.buffer.push('\n                </h2>\n            </div>\n        </div>\n        <div class="sysadmin">\n            '),l={},m={},n={hash:{},inverse:p.noop,fn:p.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"sysadmin",n):q.call(b,"link-to","sysadmin",n),(k||0===k)&&e.buffer.push(k),e.buffer.push('\n            <div class="text">\n                <h2>\n                    '),l={},m={},n={hash:{},inverse:p.noop,fn:p.program(7,i,e),contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"development",n):q.call(b,"link-to","development",n),(k||0===k)&&e.buffer.push(k),e.buffer.push('\n                </h2>\n            </div>\n        </div>\n    </div>\n</section>\n<section id="details">\n    <div class="col">\n        <h3>\n            '),l={},m={},n={hash:{},inverse:p.noop,fn:p.program(3,g,e),contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"security",n):q.call(b,"link-to","security",n),(k||0===k)&&e.buffer.push(k),e.buffer.push('\n        </h3>\n        <p>Nunca se alcanza la seguridad absoluta, pero nosotros te\n        acercamos a ella mediante nuestros servicios.</p>\n        <ul>\n            <li>Auditoría de seguridad interna.</li>\n            <li>Auditoría de seguridad externa.</li>\n            <li>Auditoría de seguridad de código fuente.</li>\n        </ul>\n    </div>\n    <div class="col">\n        <h3>\n            '),l={},m={},n={hash:{},inverse:p.noop,fn:p.program(5,h,e),contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"development",n):q.call(b,"link-to","development",n),(k||0===k)&&e.buffer.push(k),e.buffer.push('\n        </h3>\n        <p>Porque sabemos que las soluciones deben adaptarse a los cambios.\n        Podemos ofrecerte los siguientes servicios:</p>\n        <ul>\n            <li>Desarrollo de aplicaciones web.</li>\n            <li>Desarrollo de aplicaciones mobiles.</li>\n            <li>Desarrollo de aplicaciones en tiempo real.</li>\n        </ul>\n    </div>\n    <div class="col">\n        <h3>\n            '),l={},m={},n={hash:{},inverse:p.noop,fn:p.program(7,i,e),contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"sysadmin",n):q.call(b,"link-to","sysadmin",n),(k||0===k)&&e.buffer.push(k),e.buffer.push('\n        </h3>\n        <p>Nosotros te ayudamos a reducir costos, mientras se incrementa la\n        efectividad de tu infraestructura IT.</p>\n        <ul>\n            <li>Soporte de servidores.</li>\n            <li>Seguridad perimetral.</li>\n            <li>Soporte a plataformas GNU/Linux.</li>\n        </ul>\n    </div>\n</section>\n<section id="contact">\n    <div class="left">\n        <dl>\n            <dt>Correo electrónico:</dt>\n            <dd>info@hiperborea.com.bo</dd>\n            <dt>Dirección:</dt>\n            <dd>Calle Sucre y 16 de Julio</dd>\n            <dd>Cochabamba-Bolivia</dd>\n        </dl>\n        <div class="clear"></div>\n    </div>\n    <div class="right">\n        <ul>\n            <li><a href="http://blog.hiperborea.com.bo"\n                   class="fa fa-user" target="_BLANK">&nbsp;</a></li>\n            <li><a href="https://github.com/hiperborea"\n                   class="fa fa-github" target="_BLANK">&nbsp;</a></li>\n        </ul>\n        <div class="clear"></div>\n    </div>\n</section>\n\n'),o}),Ember.TEMPLATES.security=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i,j="",k=c.helperMissing,l=this.escapeExpression;return g={},h={},i={hash:{},contexts:[b],types:["STRING"],hashContexts:h,hashTypes:g,data:e},e.buffer.push(l((f=c.partial||b.partial,f?f.call(b,"_menu",i):k.call(b,"partial","_menu",i)))),e.buffer.push('\n\n<section class="block">\n    <h1>Seguridad Informática</h1>\n    <p>Para garantizar la seguridad de sus sistemas se requiere de un conjunto\n    de métodos y herramientas destinados a proteger la información, es aquí\n    donde entran los servicios de Hiperbórea.</p>\n    <p>Nuestros servicios están orientados a la seguridad informática aplicando\n    una gran variedad de métodos para realizar pruebas, incluyendo tácticas de\n    ingeniería social, uso de herramientas de hacking, uso de códigos que\n    explotan vulnerabilidades conocidas.</p>\n    <p>Desde el punto de vista de un atacante real, que conlleven a vulnerar la\n    seguridad y entrar a las áreas críticas de las organizaciones.</p>\n\n    <h2>Auditoría de Seguridad Interna</h2>\n    <p>El entorno privado de una empresa u organización puede ser un esquema\n    complejo y foco de vulnerabilidades, por ello y debido a la importancia de\n    evitar la fuga o robo de información confidencial de la empresa, es vital\n    que hiperbórea te ayude mediante una auditoría interna que verifique el\n    estado de la seguridad de su empresa, mediante la simulación de un ataque\n    llevado a cabo desde el interior.</p>\n    <p>En la auditoría de seguridad interna o auditoría de caja blanca asumimos\n    el rol de un usuario que dispone de acceso a los sistemas internos de la\n    empresa, bien porque sea el dueño de las credenciales o porque mediante un\n    ataque ha elevado privilegios de forma ilícita.</p>\n    <p>En este tipo de auditoría tenemos como objetivo detectar y mitigar:</p>\n    <ul>\n        <li>Vulnerabilidades en servidores internos.</li>\n        <li>Comunicaciones NO seguras.</li>\n        <li>Malas configuraciones.</li>\n        <li>Sistemas desactualizados.</li>\n        <li>Redes Wireless no seguras.</li>\n        <li>En definitiva potenciales vectores de ataque que puedan provocar\n            robo de información sensible en su empresa.</li>\n    </ul>\n\n    <h2>Auditoría de Seguridad Externa</h2>\n    <p>Hoy en día, las empresas disponen de gran cantidad de servicios públicos\n    los cuales pueden ser una pasarela hacia su información o sus datos\n    sensibles. Por lo cual Hiperbórea realiza una auditoría de seguridad externa\n    o auditoría de caja negra asume el rol de un atacante externo a la empresa o\n    hacker que sin el conocimiento de ninguna información previa puede obtener\n    algún beneficio de la organización o, incluso, acceso a información\n    sensible.</p>\n    <p>Este tipo de auditoría pretende valorar el grado de seguridad de la red\n    externa de su empresa y mediante la simulación de un ataque externo se\n    evalúa la seguridad.</p>\n    <p>Como objetivo tenemos descubrir:</p>\n    <ul>\n        <li>Vulnerabilidades en los servicios públicos y fallos de\n            seguridad.</li>\n        <li>Aumentar la seguridad mediante la presentación de planes de mejora\n            que deben ser implantados en su empresa.</li>\n    </ul>\n\n    <h2>Auditoría de Seguridad de código fuente</h2>\n    <p>Para el proceso de auditoría de código fuente se procede a usar el método\n    de auditoría de caja blanca, en el que partiendo del código fuente de una\n    aplicación se procede a su análisis en busca de fallos de diseño y seguridad\n    que puedan ser explotados por atacantes.</p>\n    <p>Trabajamos en distintas áreas:</p>\n    <ul>\n        <li>Aplicaciones web.</li>\n        <li>Aplicaciones de escritorio tradicionales.</li>\n        <li>Aplicaciones de dispositivos móviles.</li>\n    </ul>\n</section>\n\n'),j}),Ember.TEMPLATES.sysadmin=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i,j="",k=c.helperMissing,l=this.escapeExpression;return g={},h={},i={hash:{},contexts:[b],types:["STRING"],hashContexts:h,hashTypes:g,data:e},e.buffer.push(l((f=c.partial||b.partial,f?f.call(b,"_menu",i):k.call(b,"partial","_menu",i)))),e.buffer.push('\n\n<section class="block">\n    <h1>Infraestructura IT</h1>\n    <p>Se centra en la capacidad operativa de la infraestructura IT, que son\n    esenciales para el seguimiento de las condiciones de seguridad o de\n    cumplimiento critico.</p>\n    <p>Nuestra responsabilidad es diseñar, implementar, ejecutar y asegurar el\n    correcto funcionamiento de su infraestructura IT.</p>\n\n    <h2>Gestión de Infraestructura IT</h2>\n    <p>Integramos las mejores herramientas para alcanzar sus objetivos. La\n    infraestructura IT afecta a cada aspecto de su organización por lo que es\n    crucial contar con una gestión efectiva. Nuestro abanico de soluciones van\n    desde el cableado estructurado que soportan servicios de datos, telefonía, y\n    vídeo, hasta la construcción de salas de servidores y telecomunicaciones\n    utilizando las mejores practicas.</p>\n\n    <h2>Seguridad Perimetral</h2>\n    <p>Ofrecemos soluciones adaptadas a cada cliente para garantizar que su\n    empresa opere bajo niveles aceptables de seguridad, que proteja su inversión\n    y la información vital del negocio, que comprometan sus activos o su\n    continuidad de negocio, guiándonos siempre por los mas exigentes estándares\n    internacionales.</p>\n\n    <h2>Gestión de servicios bajo plataformas GNU/Linux</h2>\n    <p>Contamos con un equipo de profesionales que ofrece las mejores soluciones\n    bajo plataformas GNU/Linux adaptadas a las necesidades de nuestros clientes,\n    con el claro objetivo de optimizar sus costos operativos y lograr un óptimo\n    uso de sus recursos.</p>\n</section>\n\n<div style="height:20vh;"></div>\n\n'),j});