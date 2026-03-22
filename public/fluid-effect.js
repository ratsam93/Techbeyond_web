const GB=()=>{const t=document.getElementById("fluid");so();let a={SIM_RESOLUTION:128,DYE_RESOLUTION:1440,DENSITY_DISSIPATION:3.5,VELOCITY_DISSIPATION:2,PRESSURE:.1,PRESSURE_ITERATIONS:20,CURL:3,SPLAT_RADIUS:.2,SPLAT_FORCE:6e3,SHADING:!0,COLOR_UPDATE_SPEED:10};function i(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]}const n=[];n.push(new i);const{gl:l,ext:c}=u(t);c.supportLinearFiltering||(a.DYE_RESOLUTION=256,a.SHADING=!1);function u(U){const re={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let ce=U.getContext("webgl2",re);const pe=!!ce;pe||(ce=U.getContext("webgl",re)||U.getContext("experimental-webgl",re));let Se,Ie;pe?(ce.getExtension("EXT_color_buffer_float"),Ie=ce.getExtension("OES_texture_float_linear")):(Se=ce.getExtension("OES_texture_half_float"),Ie=ce.getExtension("OES_texture_half_float_linear")),ce.clearColor(0,0,0,1);const Pe=pe?ce.HALF_FLOAT:Se.HALF_FLOAT_OES;let It,ea,$s;return pe?(It=h(ce,ce.RGBA16F,ce.RGBA,Pe),ea=h(ce,ce.RG16F,ce.RG,Pe),$s=h(ce,ce.R16F,ce.RED,Pe)):(It=h(ce,ce.RGBA,ce.RGBA,Pe),ea=h(ce,ce.RGBA,ce.RGBA,Pe),$s=h(ce,ce.RGBA,ce.RGBA,Pe)),{gl:ce,ext:{formatRGBA:It,formatRG:ea,formatR:$s,halfFloatTexType:Pe,supportLinearFiltering:Ie}}}function h(U,re,ce,pe){if(!m(U,re,ce,pe))switch(re){case U.R16F:return h(U,U.RG16F,U.RG,pe);case U.RG16F:return h(U,U.RGBA16F,U.RGBA,pe);default:return null}return{internalFormat:re,format:ce}}function m(U,re,ce,pe){const Se=U.createTexture();U.bindTexture(U.TEXTURE_2D,Se),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_MIN_FILTER,U.NEAREST),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_MAG_FILTER,U.NEAREST),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_WRAP_S,U.CLAMP_TO_EDGE),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_WRAP_T,U.CLAMP_TO_EDGE),U.texImage2D(U.TEXTURE_2D,0,re,4,4,0,ce,pe,null);const Ie=U.createFramebuffer();return U.bindFramebuffer(U.FRAMEBUFFER,Ie),U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Se,0),U.checkFramebufferStatus(U.FRAMEBUFFER)==U.FRAMEBUFFER_COMPLETE}class f{constructor(re,ce){this.vertexShader=re,this.fragmentShaderSource=ce,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(re){let ce=0;for(let Se=0;Se<re.length;Se++)ce+=hs(re[Se]);let pe=this.programs[ce];if(pe==null){let Se=j(l.FRAGMENT_SHADER,this.fragmentShaderSource,re);pe=v(this.vertexShader,Se),this.programs[ce]=pe}pe!=this.activeProgram&&(this.uniforms=N(pe),this.activeProgram=pe)}bind(){l.useProgram(this.activeProgram)}}class p{constructor(re,ce){this.uniforms={},this.program=v(re,ce),this.uniforms=N(this.program)}bind(){l.useProgram(this.program)}}function v(U,re){let ce=l.createProgram();return l.attachShader(ce,U),l.attachShader(ce,re),l.linkProgram(ce),l.getProgramParameter(ce,l.LINK_STATUS)||console.trace(l.getProgramInfoLog(ce)),ce}function N(U){let re=[],ce=l.getProgramParameter(U,l.ACTIVE_UNIFORMS);for(let pe=0;pe<ce;pe++){let Se=l.getActiveUniform(U,pe).name;re[Se]=l.getUniformLocation(U,Se)}return re}function j(U,re,ce){re=S(re,ce);const pe=l.createShader(U);return l.shaderSource(pe,re),l.compileShader(pe),l.getShaderParameter(pe,l.COMPILE_STATUS)||console.trace(l.getShaderInfoLog(pe)),pe}function S(U,re){if(re==null)return U;let ce="";return re.forEach(pe=>{ce+="#define "+pe+`
`}),ce+U}const A=j(l.VERTEX_SHADER,`
       precision highp float;
   
       attribute vec2 aPosition;
       varying vec2 vUv;
       varying vec2 vL;
       varying vec2 vR;
       varying vec2 vT;
       varying vec2 vB;
       uniform vec2 texelSize;
   
       void main () {
           vUv = aPosition * 0.5 + 0.5;
           vL = vUv - vec2(texelSize.x, 0.0);
           vR = vUv + vec2(texelSize.x, 0.0);
           vT = vUv + vec2(0.0, texelSize.y);
           vB = vUv - vec2(0.0, texelSize.y);
           gl_Position = vec4(aPosition, 0.0, 1.0);
       }
   `);j(l.VERTEX_SHADER,`
       precision highp float;
   
       attribute vec2 aPosition;
       varying vec2 vUv;
       varying vec2 vL;
       varying vec2 vR;
       uniform vec2 texelSize;
   
       void main () {
           vUv = aPosition * 0.5 + 0.5;
           float offset = 1.33333333;
           vL = vUv - texelSize * offset;
           vR = vUv + texelSize * offset;
           gl_Position = vec4(aPosition, 0.0, 1.0);
       }
   `),j(l.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying vec2 vUv;
       varying vec2 vL;
       varying vec2 vR;
       uniform sampler2D uTexture;
   
       void main () {
           vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
           sum += texture2D(uTexture, vL) * 0.35294117;
           sum += texture2D(uTexture, vR) * 0.35294117;
           gl_FragColor = sum;
       }
   `);const M=j(l.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       uniform sampler2D uTexture;
   
       void main () {
           gl_FragColor = texture2D(uTexture, vUv);
       }
   `),k=j(l.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       uniform sampler2D uTexture;
       uniform float value;
   
       void main () {
           gl_FragColor = value * texture2D(uTexture, vUv);
       }
   `);j(l.FRAGMENT_SHADER,`
       precision mediump float;
   
       uniform vec4 color;
   
       void main () {
           gl_FragColor = color;
       }
   `);const C=`
       precision highp float;
       precision highp sampler2D;
   
       varying vec2 vUv;
       varying vec2 vL;
       varying vec2 vR;
       varying vec2 vT;
       varying vec2 vB;
       uniform sampler2D uTexture;
       uniform sampler2D uDithering;
       uniform vec2 ditherScale;
       uniform vec2 texelSize;
   
       vec3 linearToGamma (vec3 color) {
           color = max(color, vec3(0));
           return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
       }
   
       void main () {
           vec3 c = texture2D(uTexture, vUv).rgb;
   
       #ifdef SHADING
           vec3 lc = texture2D(uTexture, vL).rgb;
           vec3 rc = texture2D(uTexture, vR).rgb;
           vec3 tc = texture2D(uTexture, vT).rgb;
           vec3 bc = texture2D(uTexture, vB).rgb;
   
           float dx = length(rc) - length(lc);
           float dy = length(tc) - length(bc);
   
           vec3 n = normalize(vec3(dx, dy, length(texelSize)));
           vec3 l = vec3(0.0, 0.0, 1.0);
   
           float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
           c *= diffuse;
       #endif
   
           float a = max(c.r, max(c.g, c.b));
           gl_FragColor = vec4(c, a);
       }
   `,E=j(l.FRAGMENT_SHADER,`
       precision highp float;
       precision highp sampler2D;
   
       varying vec2 vUv;
       uniform sampler2D uTarget;
       uniform float aspectRatio;
       uniform vec3 color;
       uniform vec2 point;
       uniform float radius;
   
       void main () {
           vec2 p = vUv - point.xy;
           p.x *= aspectRatio;
           vec3 splat = exp(-dot(p, p) / radius) * color;
           vec3 base = texture2D(uTarget, vUv).xyz;
           gl_FragColor = vec4(base + splat, 1.0);
       }
   `),P=j(l.FRAGMENT_SHADER,`
       precision highp float;
       precision highp sampler2D;
   
       varying vec2 vUv;
       uniform sampler2D uVelocity;
       uniform sampler2D uSource;
       uniform vec2 texelSize;
       uniform vec2 dyeTexelSize;
       uniform float dt;
       uniform float dissipation;
   
       vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
           vec2 st = uv / tsize - 0.5;
   
           vec2 iuv = floor(st);
           vec2 fuv = fract(st);
   
           vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
           vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
           vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
           vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
   
           return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
       }
   
       void main () {
       #ifdef MANUAL_FILTERING
           vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
           vec4 result = bilerp(uSource, coord, dyeTexelSize);
       #else
           vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
           vec4 result = texture2D(uSource, coord);
       #endif
           float decay = 1.0 + dissipation * dt;
           gl_FragColor = result / decay;
       }`,c.supportLinearFiltering?null:["MANUAL_FILTERING"]),D=j(l.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       varying highp vec2 vL;
       varying highp vec2 vR;
       varying highp vec2 vT;
       varying highp vec2 vB;
       uniform sampler2D uVelocity;
   
       void main () {
           float L = texture2D(uVelocity, vL).x;
           float R = texture2D(uVelocity, vR).x;
           float T = texture2D(uVelocity, vT).y;
           float B = texture2D(uVelocity, vB).y;
   
           vec2 C = texture2D(uVelocity, vUv).xy;
           if (vL.x < 0.0) { L = -C.x; }
           if (vR.x > 1.0) { R = -C.x; }
           if (vT.y > 1.0) { T = -C.y; }
           if (vB.y < 0.0) { B = -C.y; }
   
           float div = 0.5 * (R - L + T - B);
           gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
       }
   `),I=j(l.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       varying highp vec2 vL;
       varying highp vec2 vR;
       varying highp vec2 vT;
       varying highp vec2 vB;
       uniform sampler2D uVelocity;
   
       void main () {
           float L = texture2D(uVelocity, vL).y;
           float R = texture2D(uVelocity, vR).y;
           float T = texture2D(uVelocity, vT).x;
           float B = texture2D(uVelocity, vB).x;
           float vorticity = R - L - T + B;
           gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
       }
   `),_=j(l.FRAGMENT_SHADER,`
       precision highp float;
       precision highp sampler2D;
   
       varying vec2 vUv;
       varying vec2 vL;
       varying vec2 vR;
       varying vec2 vT;
       varying vec2 vB;
       uniform sampler2D uVelocity;
       uniform sampler2D uCurl;
       uniform float curl;
       uniform float dt;
   
       void main () {
           float L = texture2D(uCurl, vL).x;
           float R = texture2D(uCurl, vR).x;
           float T = texture2D(uCurl, vT).x;
           float B = texture2D(uCurl, vB).x;
           float C = texture2D(uCurl, vUv).x;
   
           vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
           force /= length(force) + 0.0001;
           force *= curl * C;
           force.y *= -1.0;
   
           vec2 velocity = texture2D(uVelocity, vUv).xy;
           velocity += force * dt;
           velocity = min(max(velocity, -1000.0), 1000.0);
           gl_FragColor = vec4(velocity, 0.0, 1.0);
       }
   `),L=j(l.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       varying highp vec2 vL;
       varying highp vec2 vR;
       varying highp vec2 vT;
       varying highp vec2 vB;
       uniform sampler2D uPressure;
       uniform sampler2D uDivergence;
   
       void main () {
           float L = texture2D(uPressure, vL).x;
           float R = texture2D(uPressure, vR).x;
           float T = texture2D(uPressure, vT).x;
           float B = texture2D(uPressure, vB).x;
           float C = texture2D(uPressure, vUv).x;
           float divergence = texture2D(uDivergence, vUv).x;
           float pressure = (L + R + B + T - divergence) * 0.25;
           gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
       }
   `),z=j(l.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       varying highp vec2 vL;
       varying highp vec2 vR;
       varying highp vec2 vT;
       varying highp vec2 vB;
       uniform sampler2D uPressure;
       uniform sampler2D uVelocity;
   
       void main () {
           float L = texture2D(uPressure, vL).x;
           float R = texture2D(uPressure, vR).x;
           float T = texture2D(uPressure, vT).x;
           float B = texture2D(uPressure, vB).x;
           vec2 velocity = texture2D(uVelocity, vUv).xy;
           velocity.xy -= vec2(R - L, T - B);
           gl_FragColor = vec4(velocity, 0.0, 1.0);
       }
   `),V=(l.bindBuffer(l.ARRAY_BUFFER,l.createBuffer()),l.bufferData(l.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),l.STATIC_DRAW),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,l.createBuffer()),l.bufferData(l.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),l.STATIC_DRAW),l.vertexAttribPointer(0,2,l.FLOAT,!1,0,0),l.enableVertexAttribArray(0),(U,re=!1)=>{U==null?(l.viewport(0,0,l.drawingBufferWidth,l.drawingBufferHeight),l.bindFramebuffer(l.FRAMEBUFFER,null)):(l.viewport(0,0,U.width,U.height),l.bindFramebuffer(l.FRAMEBUFFER,U.fbo)),re&&(l.clearColor(0,0,0,1),l.clear(l.COLOR_BUFFER_BIT)),l.drawElements(l.TRIANGLES,6,l.UNSIGNED_SHORT,0)});let $,q,le,xe,se;const W=new p(A,M),K=new p(A,k),X=new p(A,E),ie=new p(A,P),B=new p(A,D),Q=new p(A,I),ee=new p(A,_),ne=new p(A,L),fe=new p(A,z),g=new f(A,C);function T(){let U=Ni(a.SIM_RESOLUTION),re=Ni(a.DYE_RESOLUTION);const ce=c.halfFloatTexType,pe=c.formatRGBA,Se=c.formatRG,Ie=c.formatR,Pe=c.supportLinearFiltering?l.LINEAR:l.NEAREST;l.disable(l.BLEND),$==null?$=me(re.width,re.height,pe.internalFormat,pe.format,ce,Pe):$=Jt($,re.width,re.height,pe.internalFormat,pe.format,ce,Pe),q==null?q=me(U.width,U.height,Se.internalFormat,Se.format,ce,Pe):q=Jt(q,U.width,U.height,Se.internalFormat,Se.format,ce,Pe),le=F(U.width,U.height,Ie.internalFormat,Ie.format,ce,l.NEAREST),xe=F(U.width,U.height,Ie.internalFormat,Ie.format,ce,l.NEAREST),se=me(U.width,U.height,Ie.internalFormat,Ie.format,ce,l.NEAREST)}function F(U,re,ce,pe,Se,Ie){l.activeTexture(l.TEXTURE0);let Pe=l.createTexture();l.bindTexture(l.TEXTURE_2D,Pe),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,Ie),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MAG_FILTER,Ie),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE),l.texImage2D(l.TEXTURE_2D,0,ce,U,re,0,pe,Se,null);let It=l.createFramebuffer();l.bindFramebuffer(l.FRAMEBUFFER,It),l.framebufferTexture2D(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,Pe,0),l.viewport(0,0,U,re),l.clear(l.COLOR_BUFFER_BIT);let ea=1/U,$s=1/re;return{texture:Pe,fbo:It,width:U,height:re,texelSizeX:ea,texelSizeY:$s,attach(sn){return l.activeTexture(l.TEXTURE0+sn),l.bindTexture(l.TEXTURE_2D,Pe),sn}}}function me(U,re,ce,pe,Se,Ie){let Pe=F(U,re,ce,pe,Se,Ie),It=F(U,re,ce,pe,Se,Ie);return{width:U,height:re,texelSizeX:Pe.texelSizeX,texelSizeY:Pe.texelSizeY,get read(){return Pe},set read(ea){Pe=ea},get write(){return It},set write(ea){It=ea},swap(){let ea=Pe;Pe=It,It=ea}}}function it(U,re,ce,pe,Se,Ie,Pe){let It=F(re,ce,pe,Se,Ie,Pe);return W.bind(),l.uniform1i(W.uniforms.uTexture,U.attach(0)),V(It),It}function Jt(U,re,ce,pe,Se,Ie,Pe){return U.width==re&&U.height==ce||(U.read=it(U.read,re,ce,pe,Se,Ie,Pe),U.write=F(re,ce,pe,Se,Ie,Pe),U.width=re,U.height=ce,U.texelSizeX=1/re,U.texelSizeY=1/ce),U}function qt(){let U=[];a.SHADING&&U.push("SHADING"),g.setKeywords(U)}qt(),T();let oa=Date.now(),xt=0;function Ft(){const U=$a();so()&&T(),ya(U),Ud(),io(U),no(null),requestAnimationFrame(Ft)}function $a(){let U=Date.now(),re=(U-oa)/1e3;return re=Math.min(re,.016666),oa=U,re}function so(){let U=Nt(t.clientWidth),re=Nt(t.clientHeight);return t.width!=U||t.height!=re?(t.width=U,t.height=re,!0):!1}function ya(U){xt+=U*a.COLOR_UPDATE_SPEED,xt>=1&&(xt=Xd(xt,0,1),n.forEach(re=>{re.color=an()}))}function Ud(){n.forEach(U=>{U.moved&&(U.moved=!1,Gd(U))})}function io(U){l.disable(l.BLEND),Q.bind(),l.uniform2f(Q.uniforms.texelSize,q.texelSizeX,q.texelSizeY),l.uniform1i(Q.uniforms.uVelocity,q.read.attach(0)),V(xe),ee.bind(),l.uniform2f(ee.uniforms.texelSize,q.texelSizeX,q.texelSizeY),l.uniform1i(ee.uniforms.uVelocity,q.read.attach(0)),l.uniform1i(ee.uniforms.uCurl,xe.attach(1)),l.uniform1f(ee.uniforms.curl,a.CURL),l.uniform1f(ee.uniforms.dt,U),V(q.write),q.swap(),B.bind(),l.uniform2f(B.uniforms.texelSize,q.texelSizeX,q.texelSizeY),l.uniform1i(B.uniforms.uVelocity,q.read.attach(0)),V(le),K.bind(),l.uniform1i(K.uniforms.uTexture,se.read.attach(0)),l.uniform1f(K.uniforms.value,a.PRESSURE),V(se.write),se.swap(),ne.bind(),l.uniform2f(ne.uniforms.texelSize,q.texelSizeX,q.texelSizeY),l.uniform1i(ne.uniforms.uDivergence,le.attach(0));for(let ce=0;ce<a.PRESSURE_ITERATIONS;ce++)l.uniform1i(ne.uniforms.uPressure,se.read.attach(1)),V(se.write),se.swap();fe.bind(),l.uniform2f(fe.uniforms.texelSize,q.texelSizeX,q.texelSizeY),l.uniform1i(fe.uniforms.uPressure,se.read.attach(0)),l.uniform1i(fe.uniforms.uVelocity,q.read.attach(1)),V(q.write),q.swap(),ie.bind(),l.uniform2f(ie.uniforms.texelSize,q.texelSizeX,q.texelSizeY),c.supportLinearFiltering||l.uniform2f(ie.uniforms.dyeTexelSize,q.texelSizeX,q.texelSizeY);let re=q.read.attach(0);l.uniform1i(ie.uniforms.uVelocity,re),l.uniform1i(ie.uniforms.uSource,re),l.uniform1f(ie.uniforms.dt,U),l.uniform1f(ie.uniforms.dissipation,a.VELOCITY_DISSIPATION),V(q.write),q.swap(),c.supportLinearFiltering||l.uniform2f(ie.uniforms.dyeTexelSize,$.texelSizeX,$.texelSizeY),l.uniform1i(ie.uniforms.uVelocity,q.read.attach(0)),l.uniform1i(ie.uniforms.uSource,$.read.attach(1)),l.uniform1f(ie.uniforms.dissipation,a.DENSITY_DISSIPATION),V($.write),$.swap()}function no(U){l.blendFunc(l.ONE,l.ONE_MINUS_SRC_ALPHA),l.enable(l.BLEND),tn(U)}function tn(U){let re=l.drawingBufferWidth,ce=l.drawingBufferHeight;g.bind(),a.SHADING&&l.uniform2f(g.uniforms.texelSize,1/re,1/ce),l.uniform1i(g.uniforms.uTexture,$.read.attach(0)),V(U)}function Gd(U){let re=U.deltaX*a.SPLAT_FORCE,ce=U.deltaY*a.SPLAT_FORCE;lo(U.texcoordX,U.texcoordY,re,ce,U.color)}function ro(U){const re=an();re.r*=10,re.g*=10,re.b*=10;let ce=10*(Math.random()-.5),pe=30*(Math.random()-.5);lo(U.texcoordX,U.texcoordY,ce,pe,re)}function lo(U,re,ce,pe,Se){X.bind(),l.uniform1i(X.uniforms.uTarget,q.read.attach(0)),l.uniform1f(X.uniforms.aspectRatio,t.width/t.height),l.uniform2f(X.uniforms.point,U,re),l.uniform3f(X.uniforms.color,ce,pe,0),l.uniform1f(X.uniforms.radius,qd(a.SPLAT_RADIUS/100)),V(q.write),q.swap(),l.uniform1i(X.uniforms.uTarget,$.read.attach(0)),l.uniform3f(X.uniforms.color,Se.r,Se.g,Se.b),V($.write),$.swap()}function qd(U){let re=t.width/t.height;return re>1&&(U*=re),U}window.addEventListener("mousedown",U=>{let re=n[0],ce=Nt(U.clientX),pe=Nt(U.clientY);ms(re,-1,ce,pe),ro(re)}),document.body.addEventListener("mousemove",function U(re){let ce=n[0],pe=Nt(re.clientX),Se=Nt(re.clientY),Ie=an();Ft(),Ot(ce,pe,Se,Ie),document.body.removeEventListener("mousemove",U)}),window.addEventListener("mousemove",U=>{let re=n[0],ce=Nt(U.clientX),pe=Nt(U.clientY),Se=re.color;Ot(re,ce,pe,Se)}),document.body.addEventListener("touchstart",function U(re){const ce=re.targetTouches;let pe=n[0];for(let Se=0;Se<ce.length;Se++){let Ie=Nt(ce[Se].clientX),Pe=Nt(ce[Se].clientY);Ft(),ms(pe,ce[Se].identifier,Ie,Pe)}document.body.removeEventListener("touchstart",U)}),window.addEventListener("touchstart",U=>{const re=U.targetTouches;let ce=n[0];for(let pe=0;pe<re.length;pe++){let Se=Nt(re[pe].clientX),Ie=Nt(re[pe].clientY);ms(ce,re[pe].identifier,Se,Ie)}}),window.addEventListener("touchmove",U=>{const re=U.targetTouches;let ce=n[0];for(let pe=0;pe<re.length;pe++){let Se=Nt(re[pe].clientX),Ie=Nt(re[pe].clientY);Ot(ce,Se,Ie,ce.color)}},!1),window.addEventListener("touchend",U=>{const re=U.changedTouches;let ce=n[0];for(let pe=0;pe<re.length;pe++)Ua(ce)});function ms(U,re,ce,pe){U.id=re,U.down=!0,U.moved=!1,U.texcoordX=ce/t.width,U.texcoordY=1-pe/t.height,U.prevTexcoordX=U.texcoordX,U.prevTexcoordY=U.texcoordY,U.deltaX=0,U.deltaY=0,U.color=an()}function Ot(U,re,ce,pe){U.prevTexcoordX=U.texcoordX,U.prevTexcoordY=U.texcoordY,U.texcoordX=re/t.width,U.texcoordY=1-ce/t.height,U.deltaX=Yt(U.texcoordX-U.prevTexcoordX),U.deltaY=Yd(U.texcoordY-U.prevTexcoordY),U.moved=Math.abs(U.deltaX)>0||Math.abs(U.deltaY)>0,U.color=pe}function Ua(U){U.down=!1}function Yt(U){let re=t.width/t.height;return re<1&&(U*=re),U}function Yd(U){let re=t.width/t.height;return re>1&&(U/=re),U}function an(){return{r:8/255*.15,g:164/255*.15,b:124/255*.15}}function Xd(U,re,ce){const pe=ce-re;return(U-re)%pe+re}function Ni(U){let re=l.drawingBufferWidth/l.drawingBufferHeight;re<1&&(re=1/re);const ce=Math.round(U),pe=Math.round(U*re);return l.drawingBufferWidth>l.drawingBufferHeight?{width:pe,height:ce}:{width:ce,height:pe}}function Nt(U){const re=window.devicePixelRatio||1;return Math.floor(U*re)}function hs(U){if(U.length==0)return 0;let re=0;for(let ce=0;ce<U.length;ce++)re=(re<<5)-re+U.charCodeAt(ce),re|=0;return re}};
window.initFluidEffect = GB;
