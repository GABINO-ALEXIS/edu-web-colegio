import{r as s,f as Y,j as e,L as G}from"./index-D7o7Rvxi.js";import{u as $,a as J,b as Q,P as e0,L as a0,m as n,R as y,e as C,M as s0}from"./MetaTags-unVnn6k4.js";import{G as R}from"./Globo-yxwl0Mnn.js";import{N as B}from"./Noticia-wxSyyySh.js";import{S as I}from"./WavesTopOpacity-23gTi3WT.js";import{m as c0,a as i0}from"./mundoIcon2-u5WNkFgh.js";function T(){const a=s.useRef(!1);return $(()=>(a.current=!0,()=>{a.current=!1}),[]),a}function o0(){const a=T(),[o,c]=s.useState(0),i=s.useCallback(()=>{a.current&&c(o+1)},[o]);return[s.useCallback(()=>Y.postRender(i),[i]),o]}class t0 extends s.Component{getSnapshotBeforeUpdate(o){const c=this.props.childRef.current;if(c&&o.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=c.offsetHeight||0,i.width=c.offsetWidth||0,i.top=c.offsetTop,i.left=c.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function n0({children:a,isPresent:o}){const c=s.useId(),i=s.useRef(null),d=s.useRef({width:0,height:0,top:0,left:0}),{nonce:u}=s.useContext(J);return s.useInsertionEffect(()=>{const{width:f,height:m,top:x,left:h}=d.current;if(o||!i.current||!f||!m)return;i.current.dataset.motionPopId=c;const t=document.createElement("style");return u&&(t.nonce=u),document.head.appendChild(t),t.sheet&&t.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${m}px !important;
            top: ${x}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(t)}},[o]),s.createElement(t0,{isPresent:o,childRef:i,sizeRef:d},s.cloneElement(a,{ref:i}))}const S=({children:a,initial:o,isPresent:c,onExitComplete:i,custom:d,presenceAffectsLayout:u,mode:f})=>{const m=Q(r0),x=s.useId(),h=s.useMemo(()=>({id:x,initial:o,isPresent:c,custom:d,onExitComplete:t=>{m.set(t,!0);for(const l of m.values())if(!l)return;i&&i()},register:t=>(m.set(t,!1),()=>m.delete(t))}),u?void 0:[c]);return s.useMemo(()=>{m.forEach((t,l)=>m.set(l,!1))},[c]),s.useEffect(()=>{!c&&!m.size&&i&&i()},[c]),f==="popLayout"&&(a=s.createElement(n0,{isPresent:c},a)),s.createElement(e0.Provider,{value:h},a)};function r0(){return new Map}function l0(a){return s.useEffect(()=>()=>a(),[])}const g=a=>a.key||"";function d0(a,o){a.forEach(c=>{const i=g(c);o.set(i,c)})}function m0(a){const o=[];return s.Children.forEach(a,c=>{s.isValidElement(c)&&o.push(c)}),o}const U=({children:a,custom:o,initial:c=!0,onExitComplete:i,exitBeforeEnter:d,presenceAffectsLayout:u=!0,mode:f="sync"})=>{const m=s.useContext(a0).forceRender||o0()[0],x=T(),h=m0(a);let t=h;const l=s.useRef(new Map).current,z=s.useRef(t),j=s.useRef(new Map).current,M=s.useRef(!0);if($(()=>{M.current=!1,d0(h,j),z.current=t}),l0(()=>{M.current=!0,j.clear(),l.clear()}),M.current)return s.createElement(s.Fragment,null,t.map(r=>s.createElement(S,{key:g(r),isPresent:!0,initial:c?void 0:!1,presenceAffectsLayout:u,mode:f},r)));t=[...t];const k=z.current.map(g),E=h.map(g),K=k.length;for(let r=0;r<K;r++){const p=k[r];E.indexOf(p)===-1&&!l.has(p)&&l.set(p,void 0)}return f==="wait"&&l.size&&(t=[]),l.forEach((r,p)=>{if(E.indexOf(p)!==-1)return;const A=j.get(p);if(!A)return;const Z=k.indexOf(p);let b=r;if(!b){const W=()=>{l.delete(p);const O=Array.from(j.keys()).filter(v=>!E.includes(v));if(O.forEach(v=>j.delete(v)),z.current=h.filter(v=>{const q=g(v);return q===p||O.includes(q)}),!l.size){if(x.current===!1)return;m(),i&&i()}};b=s.createElement(S,{key:g(A),isPresent:!1,onExitComplete:W,custom:o,presenceAffectsLayout:u,mode:f},A),l.set(p,b)}t.splice(Z,0,b)}),t=t.map(r=>{const p=r.key;return l.has(p)?r:s.createElement(S,{key:g(r),isPresent:!0,presenceAffectsLayout:u,mode:f},r)}),s.createElement(s.Fragment,null,l.size?t:t.map(r=>s.cloneElement(r)))},p0="https://GABINO-ALEXIS.github.io/edu-web-colegio.git/assets/arteIcon-1gOAk7la.svg",u0="https://GABINO-ALEXIS.github.io/edu-web-colegio.git/assets/astronautaIcon-elvn2c7J.png",f0="https://GABINO-ALEXIS.github.io/edu-web-colegio.git/assets/coheteIcon-78laTjd6.svg",h0="https://GABINO-ALEXIS.github.io/edu-web-colegio.git/assets/flechaIcon-6Yes_gzg.svg",L="https://GABINO-ALEXIS.github.io/edu-web-colegio.git/assets/lapizIcon-K-rXzteY.svg",V="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='241'%20height='217'%20viewBox='0%200%20241%20217'%20fill='none'%3e%3cg%20filter='url(%23filter0_i_242_31)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M52.7452%20150.02C32.8766%20142.035%2013.5583%20126.195%204.96514%20112.256C-8.94208%2089.6959%2013.7623%2060.9111%2040.722%2052.0736C41.4336%2051.8404%2042.146%2051.6275%2042.8587%2051.4344C46.2248%2049.6935%2052.0549%2046.5178%2055.2635%2043.8436C55.9917%2043.2367%2056.6369%2042.47%2057.2084%2041.5934C60%2020.6752%2068.8986%204.82731%2088.8398%201.2914C105.602%20-1.68083%20121.115%207.25651%20133.908%2022.1267C137.009%2023.2447%20140.294%2024.3398%20142.814%2024.9609C144.922%2025.4806%20147.244%2025.5248%20149.528%2025.3046C169.577%2014.4249%20191.187%2013.5071%20209.024%2025.1457C242.826%2047.2014%20250.28%20105.998%20225.673%20156.472C201.066%20206.945%20153.716%20229.983%20119.914%20207.927C119.081%20207.383%20118.264%20206.817%20117.463%20206.23C113.019%20206.283%20108.598%20205.755%20104.34%20204.58C88.2129%20200.13%2077.7439%20187.32%2071.4136%20171.34C69.2922%20167.659%2066.4593%20162.946%2064.13%20159.782C61.5498%20156.278%2056.8812%20152.74%2052.7452%20150.02Z'%20fill='%23B4232D'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_i_242_31'%20x='0.747559'%20y='0.722879'%20width='239.43'%20height='219.574'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='4'/%3e%3cfeGaussianBlur%20stdDeviation='2'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow_242_31'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",g0="https://GABINO-ALEXIS.github.io/edu-web-colegio.git/assets/medallaIcon-ZWIQBvNr.svg",x0="https://GABINO-ALEXIS.github.io/edu-web-colegio.git/assets/mochilaIcon-NiPQjzYW.png",j0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='40'%20height='40'%20x='0'%20y='0'%20viewBox='0%200%20497.005%20497.005'%20style='enable-background:new%200%200%20512%20512'%20xml:space='preserve'%20class=''%3e%3ccircle%20r='248.5025'%20cx='248.5025'%20cy='248.5025'%20fill='%23fafdff'%20shape='circle'%20transform='matrix(1,0,0,1,0,0)'%3e%3c/circle%3e%3cg%20transform='matrix(0.9200000000000007,0,0,0.9200000000000007,19.88020629882834,19.880198975391608)'%3e%3cpath%20fill='%23f49529'%20d='M295.977%204.552A249.71%20249.71%200%200%200%20248.5.002C111.257.003%200%20111.26%200%20248.503s111.257%20248.5%20248.5%20248.5c16.239%200%2032.107-1.576%2047.477-4.55C410.507%20470.292%20497%20369.507%20497%20248.503S410.507%2026.713%20295.977%204.552z'%20opacity='1'%20data-original='%237ce3ff'%20class=''%3e%3c/path%3e%3cpath%20fill='%23f49529'%20d='M148%20248.503c0-106.052%2060.041-198.069%20147.977-243.95A249.71%20249.71%200%200%200%20248.5.003C111.257.003%200%20111.26%200%20248.503s111.257%20248.5%20248.5%20248.5c16.239%200%2032.107-1.576%2047.477-4.55C208.041%20446.571%20148%20354.555%20148%20248.503z'%20opacity='1'%20data-original='%2355dafe'%20class=''%3e%3c/path%3e%3cg%20fill='%2300ce8e'%3e%3cpath%20d='m296.957%204.744.001%2015.817c-.002%2039.998%2027.105%2083.812%2066.784%2083.812%2011.837%200%2021.433%209.595%2021.433%2021.433%200%2011.782-9.592%2021.433-21.433%2021.433-41.199%200-38.335-2.358-54.183%2013.49-16.29%2016.29-2.589%2042.422%2015.101%2042.422%2024.343.001%2023.484-.245%2037.926-14.686a45.295%2045.295%200%200%201%2031.467-13.255v-.001.001c1.471-.022-9.654-.014%2091.953-.014C459.37%2088.797%20386.882%2022.52%20296.957%204.744zM333.18%20231.641c-35.591%200-64.49%2028.876-64.489%2064.489v25.285c0%2021.8%208.659%2042.705%2024.073%2058.118%2014.973%2014.974%2023.814%2034.863%2024.092%2058.838.197%2016.855%207.252%2032.082%2018.538%2042.995%20101.021-37.712%20168.547-137.722%20161.043-249.725H333.18z'%20fill='%23ecc97e'%20opacity='1'%20data-original='%2300ce8e'%20class=''%3e%3c/path%3e%3c/g%3e%3cpath%20fill='%23ecc97e'%20d='m228.632%2098.586-21.038-21.038h-53.831v114.727l13.636-13.636c16.255-16.256%2043.824-4.227%2043.824%2019.184%200%2010.837%208.785%2019.621%2019.621%2019.621%2010.837%200%2019.622-8.785%2019.621-19.621v-46.521a74.534%2074.534%200%200%200-21.833-52.716z'%20opacity='1'%20data-original='%2300ce8e'%20class=''%3e%3c/path%3e%3cpath%20fill='%23ecc97e'%20d='M150.234%2020.188C72.56%2053.661%2015.367%20125.614%202.656%20212.034l60.297%2060.283c9.836%209.836%209.836%2025.782%200%2035.618l-41.569%2041.569c19.281%2043.293%2050.573%2080.05%2089.648%20106.046l17.734-17.734c39.51-39.512%2039.531-103.641%200-143.174-12.288-12.287-23.154-20.428-23.154-38.685a37.5%2037.5%200%200%201%2010.982-26.514l37.17-37.169c8.876-42.71%2027.651-81.79%2053.831-114.727z'%20opacity='1'%20data-original='%2300b27a'%20class=''%3e%3c/path%3e%3cellipse%20cx='174.589'%20cy='306.622'%20fill='%23ff8e9e'%20rx='25'%20ry='19.909'%20opacity='0'%20data-original='%23ff8e9e'%20class=''%3e%3c/ellipse%3e%3cellipse%20cx='322.411'%20cy='306.622'%20fill='%23ff8e9e'%20rx='25'%20ry='19.909'%20opacity='0'%20data-original='%23ff8e9e'%20class=''%3e%3c/ellipse%3e%3cg%20fill='%23313d40'%3e%3cpath%20d='M186.051%20274.618a7.499%207.499%200%200%200-7.5%207.5v12c0%204.143%203.357%207.5%207.5%207.5s7.5-3.357%207.5-7.5v-12a7.5%207.5%200%200%200-7.5-7.5zM310.948%20274.618a7.499%207.499%200%200%200-7.5%207.5v12c0%204.143%203.357%207.5%207.5%207.5s7.5-3.357%207.5-7.5v-12c0-4.143-3.357-7.5-7.5-7.5zM269.891%20288.106a7.497%207.497%200%200%200-10.581.728c-2.729%203.132-6.669%204.928-10.81%204.928s-8.08-1.796-10.81-4.928a7.5%207.5%200%201%200-11.309%209.853c5.578%206.402%2013.641%2010.074%2022.118%2010.074s16.54-3.672%2022.118-10.074a7.497%207.497%200%200%200-.726-10.581z'%20fill='%23313d40'%20opacity='0'%20data-original='%23313d40'%20class=''%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",v0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='40'%20height='40'%20x='0'%20y='0'%20viewBox='0%200%20497.005%20497.005'%20style='enable-background:new%200%200%20512%20512'%20xml:space='preserve'%20class=''%3e%3ccircle%20r='248.5025'%20cx='248.5025'%20cy='248.5025'%20fill='%23fafdff'%20shape='circle'%20transform='matrix(1,0,0,1,0,0)'%3e%3c/circle%3e%3cg%20transform='matrix(0.9200000000000007,0,0,0.9200000000000007,19.88020629882834,19.880198975391608)'%3e%3cpath%20fill='%23218fac'%20d='M295.977%204.552A249.71%20249.71%200%200%200%20248.5.002C111.257.003%200%20111.26%200%20248.503s111.257%20248.5%20248.5%20248.5c16.239%200%2032.107-1.576%2047.477-4.55C410.507%20470.292%20497%20369.507%20497%20248.503S410.507%2026.713%20295.977%204.552z'%20opacity='1'%20data-original='%237ce3ff'%20class=''%3e%3c/path%3e%3cpath%20fill='%23218fac'%20d='M148%20248.503c0-106.052%2060.041-198.069%20147.977-243.95A249.71%20249.71%200%200%200%20248.5.003C111.257.003%200%20111.26%200%20248.503s111.257%20248.5%20248.5%20248.5c16.239%200%2032.107-1.576%2047.477-4.55C208.041%20446.571%20148%20354.555%20148%20248.503z'%20opacity='1'%20data-original='%2355dafe'%20class=''%3e%3c/path%3e%3cg%20fill='%2300ce8e'%3e%3cpath%20d='m296.957%204.744.001%2015.817c-.002%2039.998%2027.105%2083.812%2066.784%2083.812%2011.837%200%2021.433%209.595%2021.433%2021.433%200%2011.782-9.592%2021.433-21.433%2021.433-41.199%200-38.335-2.358-54.183%2013.49-16.29%2016.29-2.589%2042.422%2015.101%2042.422%2024.343.001%2023.484-.245%2037.926-14.686a45.295%2045.295%200%200%201%2031.467-13.255v-.001.001c1.471-.022-9.654-.014%2091.953-.014C459.37%2088.797%20386.882%2022.52%20296.957%204.744zM333.18%20231.641c-35.591%200-64.49%2028.876-64.489%2064.489v25.285c0%2021.8%208.659%2042.705%2024.073%2058.118%2014.973%2014.974%2023.814%2034.863%2024.092%2058.838.197%2016.855%207.252%2032.082%2018.538%2042.995%20101.021-37.712%20168.547-137.722%20161.043-249.725H333.18z'%20fill='%2389d4f3'%20opacity='1'%20data-original='%2300ce8e'%20class=''%3e%3c/path%3e%3c/g%3e%3cpath%20fill='%2389d4f3'%20d='m228.632%2098.586-21.038-21.038h-53.831v114.727l13.636-13.636c16.255-16.256%2043.824-4.227%2043.824%2019.184%200%2010.837%208.785%2019.621%2019.621%2019.621%2010.837%200%2019.622-8.785%2019.621-19.621v-46.521a74.534%2074.534%200%200%200-21.833-52.716z'%20opacity='1'%20data-original='%2300ce8e'%20class=''%3e%3c/path%3e%3cpath%20fill='%2389d4f3'%20d='M150.234%2020.188C72.56%2053.661%2015.367%20125.614%202.656%20212.034l60.297%2060.283c9.836%209.836%209.836%2025.782%200%2035.618l-41.569%2041.569c19.281%2043.293%2050.573%2080.05%2089.648%20106.046l17.734-17.734c39.51-39.512%2039.531-103.641%200-143.174-12.288-12.287-23.154-20.428-23.154-38.685a37.5%2037.5%200%200%201%2010.982-26.514l37.17-37.169c8.876-42.71%2027.651-81.79%2053.831-114.727z'%20opacity='1'%20data-original='%2300b27a'%20class=''%3e%3c/path%3e%3cellipse%20cx='174.589'%20cy='306.622'%20fill='%23ff8e9e'%20rx='25'%20ry='19.909'%20opacity='0'%20data-original='%23ff8e9e'%20class=''%3e%3c/ellipse%3e%3cellipse%20cx='322.411'%20cy='306.622'%20fill='%23ff8e9e'%20rx='25'%20ry='19.909'%20opacity='0'%20data-original='%23ff8e9e'%20class=''%3e%3c/ellipse%3e%3cg%20fill='%23313d40'%3e%3cpath%20d='M186.051%20274.618a7.499%207.499%200%200%200-7.5%207.5v12c0%204.143%203.357%207.5%207.5%207.5s7.5-3.357%207.5-7.5v-12a7.5%207.5%200%200%200-7.5-7.5zM310.948%20274.618a7.499%207.499%200%200%200-7.5%207.5v12c0%204.143%203.357%207.5%207.5%207.5s7.5-3.357%207.5-7.5v-12c0-4.143-3.357-7.5-7.5-7.5zM269.891%20288.106a7.497%207.497%200%200%200-10.581.728c-2.729%203.132-6.669%204.928-10.81%204.928s-8.08-1.796-10.81-4.928a7.5%207.5%200%201%200-11.309%209.853c5.578%206.402%2013.641%2010.074%2022.118%2010.074s16.54-3.672%2022.118-10.074a7.497%207.497%200%200%200-.726-10.581z'%20fill='%23313d40'%20opacity='0'%20data-original='%23313d40'%20class=''%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",y0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='40'%20height='40'%20x='0'%20y='0'%20viewBox='0%200%20497.005%20497.005'%20style='enable-background:new%200%200%20512%20512'%20xml:space='preserve'%20class=''%3e%3ccircle%20r='248.5025'%20cx='248.5025'%20cy='248.5025'%20fill='%23fafdff'%20shape='circle'%20transform='matrix(1,0,0,1,0,0)'%3e%3c/circle%3e%3cg%20transform='matrix(0.9200000000000007,0,0,0.9200000000000007,19.88020629882834,19.880198975391608)'%3e%3cpath%20fill='%23df789e'%20d='M295.977%204.552A249.71%20249.71%200%200%200%20248.5.002C111.257.003%200%20111.26%200%20248.503s111.257%20248.5%20248.5%20248.5c16.239%200%2032.107-1.576%2047.477-4.55C410.507%20470.292%20497%20369.507%20497%20248.503S410.507%2026.713%20295.977%204.552z'%20opacity='1'%20data-original='%237ce3ff'%20class=''%3e%3c/path%3e%3cpath%20fill='%23df789e'%20d='M148%20248.503c0-106.052%2060.041-198.069%20147.977-243.95A249.71%20249.71%200%200%200%20248.5.003C111.257.003%200%20111.26%200%20248.503s111.257%20248.5%20248.5%20248.5c16.239%200%2032.107-1.576%2047.477-4.55C208.041%20446.571%20148%20354.555%20148%20248.503z'%20opacity='1'%20data-original='%2355dafe'%20class=''%3e%3c/path%3e%3cg%20fill='%2300ce8e'%3e%3cpath%20d='m296.957%204.744.001%2015.817c-.002%2039.998%2027.105%2083.812%2066.784%2083.812%2011.837%200%2021.433%209.595%2021.433%2021.433%200%2011.782-9.592%2021.433-21.433%2021.433-41.199%200-38.335-2.358-54.183%2013.49-16.29%2016.29-2.589%2042.422%2015.101%2042.422%2024.343.001%2023.484-.245%2037.926-14.686a45.295%2045.295%200%200%201%2031.467-13.255v-.001.001c1.471-.022-9.654-.014%2091.953-.014C459.37%2088.797%20386.882%2022.52%20296.957%204.744zM333.18%20231.641c-35.591%200-64.49%2028.876-64.489%2064.489v25.285c0%2021.8%208.659%2042.705%2024.073%2058.118%2014.973%2014.974%2023.814%2034.863%2024.092%2058.838.197%2016.855%207.252%2032.082%2018.538%2042.995%20101.021-37.712%20168.547-137.722%20161.043-249.725H333.18z'%20fill='%23f7aac7'%20opacity='1'%20data-original='%2300ce8e'%20class=''%3e%3c/path%3e%3c/g%3e%3cpath%20fill='%23f7aac7'%20d='m228.632%2098.586-21.038-21.038h-53.831v114.727l13.636-13.636c16.255-16.256%2043.824-4.227%2043.824%2019.184%200%2010.837%208.785%2019.621%2019.621%2019.621%2010.837%200%2019.622-8.785%2019.621-19.621v-46.521a74.534%2074.534%200%200%200-21.833-52.716z'%20opacity='1'%20data-original='%2300ce8e'%20class=''%3e%3c/path%3e%3cpath%20fill='%23f7aac7'%20d='M150.234%2020.188C72.56%2053.661%2015.367%20125.614%202.656%20212.034l60.297%2060.283c9.836%209.836%209.836%2025.782%200%2035.618l-41.569%2041.569c19.281%2043.293%2050.573%2080.05%2089.648%20106.046l17.734-17.734c39.51-39.512%2039.531-103.641%200-143.174-12.288-12.287-23.154-20.428-23.154-38.685a37.5%2037.5%200%200%201%2010.982-26.514l37.17-37.169c8.876-42.71%2027.651-81.79%2053.831-114.727z'%20opacity='1'%20data-original='%2300b27a'%20class=''%3e%3c/path%3e%3cellipse%20cx='174.589'%20cy='306.622'%20fill='%23ff8e9e'%20rx='25'%20ry='19.909'%20opacity='0'%20data-original='%23ff8e9e'%20class=''%3e%3c/ellipse%3e%3cellipse%20cx='322.411'%20cy='306.622'%20fill='%23ff8e9e'%20rx='25'%20ry='19.909'%20opacity='0'%20data-original='%23ff8e9e'%20class=''%3e%3c/ellipse%3e%3cg%20fill='%23313d40'%3e%3cpath%20d='M186.051%20274.618a7.499%207.499%200%200%200-7.5%207.5v12c0%204.143%203.357%207.5%207.5%207.5s7.5-3.357%207.5-7.5v-12a7.5%207.5%200%200%200-7.5-7.5zM310.948%20274.618a7.499%207.499%200%200%200-7.5%207.5v12c0%204.143%203.357%207.5%207.5%207.5s7.5-3.357%207.5-7.5v-12c0-4.143-3.357-7.5-7.5-7.5zM269.891%20288.106a7.497%207.497%200%200%200-10.581.728c-2.729%203.132-6.669%204.928-10.81%204.928s-8.08-1.796-10.81-4.928a7.5%207.5%200%201%200-11.309%209.853c5.578%206.402%2013.641%2010.074%2022.118%2010.074s16.54-3.672%2022.118-10.074a7.497%207.497%200%200%200-.726-10.581z'%20fill='%23313d40'%20opacity='0'%20data-original='%23313d40'%20class=''%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",C0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='63'%20height='7'%20viewBox='0%200%2065%209'%20fill='none'%3e%3cpath%20fillRule='evenodd'%20clipRule='evenodd'%20d='M60.5%209C62.9853%209%2065%206.98528%2065%204.5C65%202.01472%2062.9853%200%2060.5%200C58.0147%200%2056%202.01472%2056%204.5C56%206.98528%2058.0147%209%2060.5%209ZM0%204.50001C0%202.01473%202.01472%201.36497e-05%204.5%201.36497e-05H32.5C34.9853%201.36497e-05%2037%202.01473%2037%204.50001C37%206.9853%2034.9853%209.00001%2032.5%209.00001H4.5C2.01472%209.00001%200%206.9853%200%204.50001ZM51%204.50001C51%206.9853%2048.9853%209.00001%2046.5%209.00001C44.0147%209.00001%2042%206.9853%2042%204.50001C42%202.01473%2044.0147%201.36497e-05%2046.5%201.36497e-05C48.9853%201.36497e-05%2051%202.01473%2051%204.50001Z'%20fill='%23211C1C'%20/%3e%3c/svg%3e",_=({colorBorde:a,colorFondo:o,texto:c,redireccion:i})=>{const d=()=>({"negro-amarillo":"negroAmarillo","blanco-negro":"blancoNegro","negro-blanco":"negroBlanco"})[`${a}-${o}`]||"";return e.jsx(G,{className:`CBoton ${d()}`,to:i,children:e.jsx("div",{className:"leer",children:c})})},P={initial:{opacity:0,scale:.7},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.7},transition:{duration:1}},X=({titulo1:a,titulo2:o,titulo3:c,img:i,altImagen:d,redireccion:u})=>e.jsx(U,{children:e.jsxs(n.div,{className:"contenedorCard",initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{x:-50,opacity:0},transition:{duration:1.5},children:[e.jsx(n.div,{className:"imagenCard",initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{x:-50,opacity:0},transition:{duration:1.4},children:e.jsx("img",{src:i,alt:d})}),e.jsxs("div",{className:"descripcionCard",children:[e.jsxs("h3",{children:[e.jsx("img",{src:L,alt:"Icono de lapiz"}),a]}),e.jsx(n.p,{...P,children:"Conoce nuestro programa de preescolar, que se centra en el desarrollo temprano de habilidades cognitivas, sociales y motoras."}),e.jsxs("h3",{children:[e.jsx("img",{src:L,alt:"Icono de lapiz"}),o]}),e.jsx(n.p,{...P,children:"Aceptamos estudiantes en edades de 3 a 5 años."}),e.jsxs("h3",{children:[e.jsx("img",{src:L,alt:"Icono de lapiz"}),c]}),e.jsx(n.p,{...P,children:"Nuestro horario típico de preescolar y las opciones de tiempo completo y medio tiempo."}),e.jsx(_,{colorBorde:"blanco",colorFondo:"negro",texto:"Leer más",redireccion:u})]})]})}),D=a=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:"waves",preserveAspectRatio:"none",viewBox:"0 24 150 28",...a,children:[e.jsx("defs",{children:e.jsx("path",{id:"a",d:"M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"})}),e.jsxs("g",{className:"parallax",children:[e.jsx("use",{xlinkHref:"#a",x:48,fill:a.color3}),e.jsx("use",{xlinkHref:"#a",x:48,y:5,fill:a.color2}),e.jsx("use",{xlinkHref:"#a",x:48,y:3,fill:a.color2}),e.jsx("use",{xlinkHref:"#a",x:48,y:7,fill:a.color1})]})]}),I0="https://img.freepik.com/foto-gratis/ninos-tiro-completo-dibujando-juntos-mesa_23-2149355185.jpg?w=1060&t=st=1703274868~exp=1703275468~hmac=180ce077c1e8dad4564854afffbff8b4624ed430bef495bd83fa73b0543a0b9e",w0="https://img.freepik.com/foto-gratis/ninos-tiro-completo-maestro-mesa_23-2149355190.jpg?w=1060&t=st=1703274979~exp=1703275579~hmac=fafd3546bdc0082ad1e88853b849d46594ce205504489ddc89c45f0114ebcede",b0=()=>{const[a,o]=s.useState(!0);return e.jsxs("div",{className:"contenedorTab",children:[e.jsxs("div",{className:"contenedorBotones",children:[e.jsx("button",{onClick:()=>o(!0),className:a?"activo":"apagado",children:"Inicial"}),e.jsx("button",{onClick:()=>o(!1),className:a?"apagado":"activo",children:"Primaria"})]}),e.jsx(U,{children:a?e.jsx(n.span,{children:e.jsx(X,{titulo1:"Programa Educativo",titulo2:"Edades Atendidas",titulo3:"Horario",img:I0,altImagen:"niños jugando",redireccion:"/inicial"})}):e.jsx(X,{titulo1:"lorem lorem",titulo2:"todas las edades",titulo3:"loremm",img:w0,altImagen:"niños jugando",redireccion:"/primaria"})})]})},H=({mundoIcon:a,sticker:o,titulo:c,descripcion:i,altImagen:d})=>e.jsxs("div",{className:"cajaDescripcion",children:[e.jsxs("div",{className:"cajaCirculo",children:[e.jsx("img",{src:a,className:"mundoIconos",alt:"icono de mundo"}),e.jsx("div",{className:"circulo",children:e.jsx("img",{src:o,className:"arteIcon",alt:d})})]}),e.jsxs("div",{className:"cajaLetras",children:[e.jsx("h3",{children:c}),e.jsx("p",{children:i})]})]}),N0="https://GABINO-ALEXIS.github.io/edu-web-colegio.git/assets/niña-pizarra-kDyibLSL.png",z0="https://GABINO-ALEXIS.github.io/edu-web-colegio.git/assets/pergamino-pCYWHw1o.jpeg",F="https://img.freepik.com/foto-gratis/diversos-ninos-leyendo-libros_53876-146406.jpg?w=740&t=st=1702757210~exp=1702757810~hmac=a03d2e35488e6b4e99c3590bf2e57e6f3284c52221a48c3ac6d3716df9303066",w={izquierdaDerecha:a=>({opacity:0,x:a}),derechaIzquierda:a=>({opacity:0,x:a}),visible:{opacity:1,x:0,transition:{duration:2}}},N={initial:{scale:.4,opacity:0},whileInView:{scale:1,opacity:1},transition:{duration:.9},viewport:{amount:.3,once:!0}},M0=()=>e.jsxs("main",{children:[e.jsxs("section",{className:"portada",children:[e.jsx(k0,{}),e.jsx(E0,{})]}),e.jsxs(I,{claseAdicional:"stylesHistoria",children:[e.jsx(R,{colorClaro:"#FF9075",className:"globo"}),e.jsx(R,{colorClaro:"#7DCCC6",className:"globo2"}),e.jsxs("div",{className:"contenedorHistoria",children:[e.jsx(n.div,{className:"imagenHistoria",initial:"izquierdaDerecha",custom:-70,whileInView:"visible",viewport:{amount:.4,once:!0},variants:w,children:e.jsx("img",{src:z0,alt:"Imagen de Insignia Antigua"})}),e.jsxs(n.div,{className:"textoHistoria",initial:"derechaIzquierda",custom:70,whileInView:"visible",viewport:{amount:.3,once:!0},variants:w,children:[e.jsxs("h2",{className:"nuestraHistoria",children:["Nuestra Historia:",e.jsx(y,{})]}),e.jsxs("h2",{className:"compromiso",children:[e.jsx("span",{className:"edu",children:"Educando "}),e.jsx("span",{className:"comp",children:"Compromiso Educativo "})," desde 2001",e.jsx(y,{colorRaya:"amarillo"})]}),e.jsx("p",{children:"A lo largo de los años, hemos ayudado a miles de estudiantes a crecer, aprender y prosperar en un ambiente de cuidado y compromiso. Hoy, continuamos dedicados a nuestra misión de proporcionar una educación de calidad que prepara a los estudiantes para un futuro brillante."}),e.jsx(_,{colorBorde:"negro",colorFondo:"amarillo",texto:"Leer más",redireccion:"/historia"})]})]})]}),e.jsx(I,{claseAdicional:"stylesNiveles wavesStyles",waves:!0,children:e.jsxs("div",{className:"contenedorNiveles",children:[e.jsxs(n.h2,{initial:"derechaIzquierda",custom:70,whileInView:"visible",viewport:{amount:.4,once:!0},variants:w,children:["Nuestros Niveles ",e.jsx(y,{})]}),e.jsx(n.p,{initial:"derechaIzquierda",custom:70,whileInView:"visible",viewport:{amount:.4,once:!0},variants:w,children:"En Inmaculada Concepción de María, ofrecemos una educación excepcional en dos niveles clave: preescolar y primaria. Adaptamos nuestro enfoque a cada etapa del desarrollo, brindando a los estudiantes una base sólida para su éxito académico y personal."}),e.jsx(n.span,{initial:"izquierdaDerecha",custom:-70,whileInView:"visible",viewport:{amount:.4,once:!0},variants:w,children:e.jsx(b0,{})})]})}),e.jsx(I,{children:e.jsxs("div",{className:"contenedorFotos",children:[e.jsxs("h2",{children:["Nuestra Galería de Fotos",e.jsx(y,{})]}),e.jsxs("div",{className:"fotos",children:[e.jsx(n.div,{className:"foto1",...N,children:e.jsx("img",{src:"https://img.freepik.com/foto-gratis/diversos-ninos-leyendo-libros_53876-146406.jpg?w=740&t=st=1702757210~exp=1702757810~hmac=a03d2e35488e6b4e99c3590bf2e57e6f3284c52221a48c3ac6d3716df9303066",alt:""})}),e.jsx(n.div,{className:"foto2",...N,children:e.jsx("img",{src:"https://img.freepik.com/foto-gratis/lindo-grupo-amigos-preescolar-tirados-pasto-sonriendo-pasando-buen-rato-juntos_662251-1782.jpg?w=1060&t=st=1702757866~exp=1702758466~hmac=58da28ec4e618e8f52848276403f82436f48f2d3e14ebace2747f8c84083acac",alt:""})}),e.jsx(n.div,{className:"foto3",...N,children:e.jsx("img",{src:"https://img.freepik.com/foto-gratis/grupo-ninos-pizarra_23-2148107413.jpg?w=1060&t=st=1702757905~exp=1702758505~hmac=45ce7b70c66c8e90a416348a05329ea1a80e179298f727f7d9fc8d8084dfc06a",alt:""})}),e.jsxs(n.div,{className:"foto4",...N,children:[e.jsx("img",{src:"https://img.freepik.com/foto-gratis/ninos-tiro-medio-sentados-juntos-mesa_23-2149355251.jpg?w=1060&t=st=1702757932~exp=1702758532~hmac=66ba73a128435865b0a9596ee8997bc3401f2b38cc9d42d18f133166d29422eb",alt:""}),e.jsx(G,{className:"verMasFotos",to:"/galeria",children:"..."})]})]})]})}),e.jsxs(I,{claseAdicional:"stylesLlamanos wavesStyles",wavesReverse:!0,children:[e.jsx(R,{colorClaro:"#7DCCC6",className:"globo3"}),e.jsx("img",{src:u0,alt:"icono de astronauta",className:"astronautaIcon"}),e.jsx("img",{src:f0,alt:"icono de cohete",className:"coheteIcon"}),e.jsxs("div",{className:"contenedorLlamanos",children:[e.jsx("p",{children:"Siempre Listos Para Ayudarte. Llámanos"}),e.jsx("p",{children:"123456789 Ó"}),e.jsx(_,{colorBorde:"negro",colorFondo:"blanco",texto:"Inscribirse en Línea",redireccion:"#"})]})]}),e.jsx(I,{children:e.jsxs("div",{className:"contenedorNoticias",children:[e.jsxs("h2",{children:["Últimas Noticias ",e.jsx(y,{})]}),e.jsxs("div",{className:"subContenedorN",children:[e.jsx(B,{imagen:F,altImagen:"Imagen de la Noticia",fecha:"Septiembre 22, 2024",contenido:` Lorem ipsum dolor sit amet,\r
              consectr adipiscing elit. our`,ejeX:200}),e.jsx(B,{imagen:F,altImagen:"Imagen de la Noticia",fecha:"Septiembre 22, 2024",contenido:` Lorem ipsum dolor sit amet,\r
              consectr adipiscing elit. our`,ejeX:200,delay:.3}),e.jsx(B,{imagen:F,altImagen:"Imagen de la Noticia",fecha:"Septiembre 22, 2024",contenido:`Lorem ipsum dolor sit amet,\r
              consectr adipiscing elit. our`,ejeX:200,delay:.4})]}),e.jsxs(G,{to:"/noticias",className:"verMasNoticias",children:["Ver más Noticias ",e.jsx("img",{src:h0,alt:"Icono de flecha"})]})]})})]}),k0=()=>e.jsxs("section",{className:"contenedorPortadaI",children:[e.jsxs("div",{className:"cajaTitulos",children:[e.jsx("img",{src:C,className:"estrellaIcon",alt:"icono de estrella"}),e.jsx("img",{src:V,className:"manchaRojaIcon manchaRojaIcon2",alt:"icono de mancha"}),e.jsx("h1",{className:"bienvenidos",children:"Bienvenidos al Colegio Inmaculada Concepción de María"}),e.jsxs(n.h2,{className:"educando",animate:{opacity:[0,1],y:[50,0]},transition:{duration:1.5},children:[e.jsx("span",{children:"Educando"})," con Pasión y",e.jsx("span",{children:" Compromiso"})]}),e.jsx("img",{src:C0,className:"rayaIcon",alt:"icono de raya"}),e.jsx("img",{src:c0,className:"svgMundo2",alt:"icono de tierra"}),e.jsx("img",{src:C,className:"estrellaIcon3",alt:"icono de estrella"}),e.jsx("img",{src:C,className:"estrellaIcon3 estrellaIcon4",alt:"icono de estrella"})]}),e.jsxs("div",{className:"cajaImagen",children:[e.jsx("img",{src:C,className:"estrellaIcon estrellaIcon5",alt:"icono de estrella"}),e.jsx(n.div,{className:"imagen",animate:{opacity:[0,1],y:[50,0]},transition:{duration:1.5},children:e.jsx("img",{src:N0,alt:"Niña Pegando dibujos en la pizarra"})}),e.jsx("img",{src:i0,className:"svgMundo",alt:"icno de tierra"}),e.jsx("img",{src:V,className:"manchaRojaIcon",alt:"icono de mancha"}),e.jsx("img",{src:C,className:"estrellaIcon estrellaIcon2",alt:"icono de estrella"})]})]}),E0=()=>e.jsxs(n.section,{className:"seccionValores",animate:{opacity:[0,1],y:[140,0]},transition:{duration:1.5,staggerChildren:.3},children:[e.jsx(D,{color1:"#211C1C",color2:"#2b2626",color3:"#474545"}),e.jsxs("div",{className:"valores",children:[e.jsx(H,{mundoIcon:v0,sticker:p0,titulo:"Valores Fundamentales",descripcion:`Enseñamos con amor y cultivamos\r
          valores sólidos que forman la base de nuestra\r
           comunidad escolar.`,altImagen:"sticker de arte"}),e.jsx(H,{mundoIcon:y0,sticker:x0,titulo:"Un Hogar Escolar",descripcion:`Inmaculada Concepción de María\r
           es más que una escuela, es un hogar escolar\r
           donde cada niño se siente valorado y apoyado.`,altImagen:"sticker de mochila"}),e.jsx(H,{mundoIcon:j0,sticker:g0,titulo:"Crecemos Juntos",descripcion:`Nuestra misión es ayudar a cada\r
           estudiante a crecer, aprender y prosperar en\r
           un ambiente de cuidado y compromiso.`,altImagen:"sticker de medalla"}),e.jsx(D,{color1:"#211C1C",className:"olasSVG2",color2:"#2b2626",color3:"#474545"})]})]}),H0=()=>e.jsxs(e.Fragment,{children:[e.jsx(s0,{title:"Colegio Particular Inmaculada Concepción de María",content:`Bienvenidos al Colegio Inmaculada\r
        Concepción de María, donde enseñamos con amor y cultivamos valores\r
        sólidos, que forman la base de nuestra comunidad escolar, Inmaculada\r
        Concepción de María es más que una escuela, es un hogar escolar\r
        donde cada niño se siente valorado y apoyado, para aprender y prosperar\r
         en un ambiente de cuidado y compromiso.`}),e.jsx(M0,{})]});export{H0 as default};
