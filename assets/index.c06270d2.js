import{S as L,P as h,W as E,M as x,a as g,b as w,T as X,A as Y,B as W,G as N,c as V,d as z,F as C,e as H,R as _,g as d}from"./vendor.82e6a4f3.js";const B=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const y of a.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&l(y)}).observe(document,{childList:!0,subtree:!0});function i(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(n){if(n.ep)return;n.ep=!0;const a=i(n);fetch(n.href,a)}};B();var F="varying vec2 vertexUV;varying vec3 vertexNormal;void main(){vertexUV=uv;vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",q="uniform sampler2D globeTexture;varying vec2 vertexUV;varying vec3 vertexNormal;void main(){float intensity=1.05-dot(vertexNormal,vec3(0.0,0.0,1.0));vec3 atmosphere=vec3(0,0,0.0)*pow(intensity,1.5);gl_FragColor=vec4(atmosphere+texture2D(globeTexture,vertexUV).xyz,1.0);}",G="varying vec3 vertexNormal;void main(){vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,0.9);}",R="varying vec3 vertexNormal;void main(){float intensity=pow(0.75-dot(vertexNormal,vec3(0,0,1.0)),2.0);gl_FragColor=vec4(1,0,0,1.0)*intensity;}";const s=document.querySelector("#canvasContainer"),f=new L;let c=new h(75,window.innerWidth/window.innerHeight,.1,1e3);const u=new E({antialias:!0,canvas:document.querySelector("canvas")});u.setSize(window.innerWidth,window.innerHeight);u.setPixelRatio(window.devicePixelRatio);const p=new x(new g(5,50,50),new w({vertexShader:F,fragmentShader:q,uniforms:{globeTexture:{value:new X().load("./img/8k_mars.jpg")}}})),P=new x(new g(5,50,50),new w({vertexShader:G,fragmentShader:R,blending:Y,side:W}));P.scale.set(1.1,1.1,1.1);f.add(P);const r=new N;r.add(p);f.add(r);const S=new V,T=new z({color:16777215}),M=[];for(let e=0;e<1e4;e++){const o=(Math.random()-.5)*2e3,i=(Math.random()-.5)*2e3,l=-Math.random()*3e3;M.push(o,i,l)}S.setAttribute("position",new C(M,3));const j=new H(S,T);f.add(j);c.position.z=15;p.rotation.y=-Math.PI/2;r.rotation.offset={x:0,y:0};const t={x:void 0,y:void 0,down:!1,xPrev:void 0,yPrev:void 0};console.log(r.children);const v=new _,m=document.querySelector("#popUpEl"),A=document.querySelector("#populationEl"),O=document.querySelector("#populationValueEl");function b(){requestAnimationFrame(b),u.render(f,c),v.setFromCamera(t,c);const e=v.intersectObjects(r.children.filter(o=>o.geometry.type==="BoxGeometry"));r.children.forEach(o=>{o.material.opacity=.4}),d.set(m,{display:"none"});for(let o=0;o<e.length;o++){const i=e[o].object;i.material.opacity=1,d.set(m,{display:"block"}),A.innerHTML=i.country,O.innerHTML=i.population}u.render(f,c),p.rotation.y+=.005}b();s.addEventListener("mousedown",({clientX:e,clientY:o})=>{t.down=!0,t.xPrev=e,t.yPrev=o});addEventListener("mousemove",e=>{if(innerWidth>=1280)t.x=(e.clientX-innerWidth/2)/(innerWidth/2)*2-1,t.y=-(e.clientY/innerHeight)*2+1;else{const o=s.getBoundingClientRect().top;t.x=e.clientX/innerWidth*2-1,t.y=-((e.clientY-o)/innerHeight)*2+1,console.log(t.y)}if(d.set(m,{x:e.clientX,y:e.clientY}),t.down){e.preventDefault();const o=e.clientX-t.xPrev,i=e.clientY-t.yPrev;r.rotation.offset.x+=i*.005,r.rotation.offset.y+=o*.005,d.to(r.rotation,{y:r.rotation.offset.y,x:r.rotation.offset.x,duration:1}),t.xPrev=e.clientX,t.yPrev=e.clientY}});addEventListener("mouseup",e=>{t.down=!1});addEventListener("resize",()=>{u.setSize(s.offsetWidth,s.offsetHeight),c=new h(75,s.offsetWidth/s.offsetHeight,.1,1e3),c.position.z=15});addEventListener("touchmove",e=>{e.clientX=e.touches[0].clientX,e.clientY=e.touches[0].clientY;const o=v.intersectObject(p);if(console.log(o),o.length>0&&(t.down=!0),t.down){const i=s.getBoundingClientRect().top;t.x=e.clientX/innerWidth*2-1,t.y=-((e.clientY-i)/innerHeight)*2+1,console.log(t.y),d.set(m,{x:e.clientX,y:e.clientY}),e.preventDefault();const l=e.clientX-t.xPrev,n=e.clientY-t.yPrev;r.rotation.offset.x+=n*.005,r.rotation.offset.y+=l*.005,d.to(r.rotation,{y:r.rotation.offset.y,x:r.rotation.offset.x,duration:2}),t.xPrev=e.clientX,t.yPrev=e.clientY}},{passive:!1});addEventListener("touchend",e=>{t.down=!1});
