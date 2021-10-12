var e=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,r=Math.ceil,n=Math.floor,t="[BigNumber Error] ",i=t+"Number primitive has more than 15 significant digits: ",o=1e14,s=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],f=1e9;function u(e){var r=0|e;return e>0||e===r?r:r-1}function l(e){for(var r,n,t=1,i=e.length,o=e[0]+"";t<i;){for(n=14-(r=e[t++]+"").length;n--;r="0"+r);o+=r}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function c(e,r){var n,t,i=e.c,o=r.c,s=e.s,f=r.s,u=e.e,l=r.e;if(!s||!f)return null;if(n=i&&!i[0],t=o&&!o[0],n||t)return n?t?0:-f:s;if(s!=f)return s;if(n=s<0,t=u==l,!i||!o)return t?0:!i^n?1:-1;if(!t)return u>l^n?1:-1;for(f=(u=i.length)<(l=o.length)?u:l,s=0;s<f;s++)if(i[s]!=o[s])return i[s]>o[s]^n?1:-1;return u==l?0:u>l^n?1:-1}function a(e,r,i,o){if(e<r||e>i||e!==n(e))throw Error(t+(o||"Argument")+("number"==typeof e?e<r||e>i?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function h(e){var r=e.c.length-1;return u(e.e/14)==r&&e.c[r]%2!=0}function g(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(r<0?"e":"e+")+r}function p(e,r,n){var t,i;if(r<0){for(i=n+".";++r;i+=n);e=i+e}else if(++r>(t=e.length)){for(i=n,r-=t;--r;i+=n);e+=i}else r<t&&(e=e.slice(0,r)+"."+e.slice(r));return e}var w=function w(m){var d,v,N,O,b,y,E,A,S,R,_=F.prototype={constructor:F,toString:null,valueOf:null},B=new F(1),D=20,P=4,L=-7,x=21,U=-1e7,I=1e7,T=!1,C=1,M=0,G={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},k="0123456789abcdefghijklmnopqrstuvwxyz";function F(r,t){var o,s,f,u,l,c,h,g,p=this;if(!(p instanceof F))return new F(r,t);if(null==t){if(r&&!0===r._isBigNumber)return p.s=r.s,void(!r.c||r.e>I?p.c=p.e=null:r.e<U?p.c=[p.e=0]:(p.e=r.e,p.c=r.c.slice()));if((c="number"==typeof r)&&0*r==0){if(p.s=1/r<0?(r=-r,-1):1,r===~~r){for(u=0,l=r;l>=10;l/=10,u++);return void(u>I?p.c=p.e=null:(p.e=u,p.c=[r]))}g=String(r)}else{if(!e.test(g=String(r)))return N(p,g,c);p.s=45==g.charCodeAt(0)?(g=g.slice(1),-1):1}(u=g.indexOf("."))>-1&&(g=g.replace(".","")),(l=g.search(/e/i))>0?(u<0&&(u=l),u+=+g.slice(l+1),g=g.substring(0,l)):u<0&&(u=g.length)}else{if(a(t,2,k.length,"Base"),10==t)return z(p=new F(r),D+p.e+1,P);if(g=String(r),c="number"==typeof r){if(0*r!=0)return N(p,g,c,t);if(p.s=1/r<0?(g=g.slice(1),-1):1,F.DEBUG&&g.replace(/^0\.0*|\./,"").length>15)throw Error(i+r)}else p.s=45===g.charCodeAt(0)?(g=g.slice(1),-1):1;for(o=k.slice(0,t),u=l=0,h=g.length;l<h;l++)if(o.indexOf(s=g.charAt(l))<0){if("."==s){if(l>u){u=h;continue}}else if(!f&&(g==g.toUpperCase()&&(g=g.toLowerCase())||g==g.toLowerCase()&&(g=g.toUpperCase()))){f=!0,l=-1,u=0;continue}return N(p,String(r),c,t)}c=!1,(u=(g=v(g,t,10,p.s)).indexOf("."))>-1?g=g.replace(".",""):u=g.length}for(l=0;48===g.charCodeAt(l);l++);for(h=g.length;48===g.charCodeAt(--h););if(g=g.slice(l,++h)){if(h-=l,c&&F.DEBUG&&h>15&&(r>9007199254740991||r!==n(r)))throw Error(i+p.s*r);if((u=u-l-1)>I)p.c=p.e=null;else if(u<U)p.c=[p.e=0];else{if(p.e=u,p.c=[],l=(u+1)%14,u<0&&(l+=14),l<h){for(l&&p.c.push(+g.slice(0,l)),h-=14;l<h;)p.c.push(+g.slice(l,l+=14));l=14-(g=g.slice(l)).length}else l-=h;for(;l--;g+="0");p.c.push(+g)}}else p.c=[p.e=0]}function j(e,r,n,t){var i,o,s,f,u;if(null==n?n=P:a(n,0,8),!e.c)return e.toString();if(i=e.c[0],s=e.e,null==r)u=l(e.c),u=1==t||2==t&&(s<=L||s>=x)?g(u,s):p(u,s,"0");else if(o=(e=z(new F(e),r,n)).e,f=(u=l(e.c)).length,1==t||2==t&&(r<=o||o<=L)){for(;f<r;u+="0",f++);u=g(u,o)}else if(r-=s,u=p(u,o,"0"),o+1>f){if(--r>0)for(u+=".";r--;u+="0");}else if((r+=o-f)>0)for(o+1==f&&(u+=".");r--;u+="0");return e.s<0&&i?"-"+u:u}function q(e,r){for(var n,t=1,i=new F(e[0]);t<e.length;t++){if(!(n=new F(e[t])).s){i=n;break}r.call(i,n)&&(i=n)}return i}function $(e,r,n){for(var t=1,i=r.length;!r[--i];r.pop());for(i=r[0];i>=10;i/=10,t++);return(n=t+14*n-1)>I?e.c=e.e=null:n<U?e.c=[e.e=0]:(e.e=n,e.c=r),e}function z(e,t,i,f){var u,l,c,a,h,g,p,w=e.c,m=s;if(w){e:{for(u=1,a=w[0];a>=10;a/=10,u++);if((l=t-u)<0)l+=14,c=t,p=(h=w[g=0])/m[u-c-1]%10|0;else if((g=r((l+1)/14))>=w.length){if(!f)break e;for(;w.length<=g;w.push(0));h=p=0,u=1,c=(l%=14)-14+1}else{for(h=a=w[g],u=1;a>=10;a/=10,u++);p=(c=(l%=14)-14+u)<0?0:h/m[u-c-1]%10|0}if(f=f||t<0||null!=w[g+1]||(c<0?h:h%m[u-c-1]),f=i<4?(p||f)&&(0==i||i==(e.s<0?3:2)):p>5||5==p&&(4==i||f||6==i&&(l>0?c>0?h/m[u-c]:0:w[g-1])%10&1||i==(e.s<0?8:7)),t<1||!w[0])return w.length=0,f?(t-=e.e+1,w[0]=m[(14-t%14)%14],e.e=-t||0):w[0]=e.e=0,e;if(0==l?(w.length=g,a=1,g--):(w.length=g+1,a=m[14-l],w[g]=c>0?n(h/m[u-c]%m[c])*a:0),f)for(;;){if(0==g){for(l=1,c=w[0];c>=10;c/=10,l++);for(c=w[0]+=a,a=1;c>=10;c/=10,a++);l!=a&&(e.e++,w[0]==o&&(w[0]=1));break}if(w[g]+=a,w[g]!=o)break;w[g--]=0,a=1}for(l=w.length;0===w[--l];w.pop());}e.e>I?e.c=e.e=null:e.e<U&&(e.c=[e.e=0])}return e}function H(e){var r,n=e.e;return null===n?e.toString():(r=l(e.c),r=n<=L||n>=x?g(r,n):p(r,n,"0"),e.s<0?"-"+r:r)}return F.clone=w,F.ROUND_UP=0,F.ROUND_DOWN=1,F.ROUND_CEIL=2,F.ROUND_FLOOR=3,F.ROUND_HALF_UP=4,F.ROUND_HALF_DOWN=5,F.ROUND_HALF_EVEN=6,F.ROUND_HALF_CEIL=7,F.ROUND_HALF_FLOOR=8,F.EUCLID=9,F.config=F.set=function(e){var r,n;if(null!=e){if("object"!=typeof e)throw Error(t+"Object expected: "+e);if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(a(n=e[r],0,f,r),D=n),e.hasOwnProperty(r="ROUNDING_MODE")&&(a(n=e[r],0,8,r),P=n),e.hasOwnProperty(r="EXPONENTIAL_AT")&&((n=e[r])&&n.pop?(a(n[0],-f,0,r),a(n[1],0,f,r),L=n[0],x=n[1]):(a(n,-f,f,r),L=-(x=n<0?-n:n))),e.hasOwnProperty(r="RANGE"))if((n=e[r])&&n.pop)a(n[0],-f,-1,r),a(n[1],1,f,r),U=n[0],I=n[1];else{if(a(n,-f,f,r),!n)throw Error(t+r+" cannot be zero: "+n);U=-(I=n<0?-n:n)}if(e.hasOwnProperty(r="CRYPTO")){if((n=e[r])!==!!n)throw Error(t+r+" not true or false: "+n);if(n){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw T=!n,Error(t+"crypto unavailable");T=n}else T=n}if(e.hasOwnProperty(r="MODULO_MODE")&&(a(n=e[r],0,9,r),C=n),e.hasOwnProperty(r="POW_PRECISION")&&(a(n=e[r],0,f,r),M=n),e.hasOwnProperty(r="FORMAT")){if("object"!=typeof(n=e[r]))throw Error(t+r+" not an object: "+n);G=n}if(e.hasOwnProperty(r="ALPHABET")){if("string"!=typeof(n=e[r])||/^.$|[+-.\s]|(.).*\1/.test(n))throw Error(t+r+" invalid: "+n);k=n}}return{DECIMAL_PLACES:D,ROUNDING_MODE:P,EXPONENTIAL_AT:[L,x],RANGE:[U,I],CRYPTO:T,MODULO_MODE:C,POW_PRECISION:M,FORMAT:G,ALPHABET:k}},F.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!F.DEBUG)return!0;var r,i,s=e.c,u=e.e,l=e.s;e:if("[object Array]"=={}.toString.call(s)){if((1===l||-1===l)&&u>=-f&&u<=f&&u===n(u)){if(0===s[0]){if(0===u&&1===s.length)return!0;break e}if((r=(u+1)%14)<1&&(r+=14),String(s[0]).length==r){for(r=0;r<s.length;r++)if((i=s[r])<0||i>=o||i!==n(i))break e;if(0!==i)return!0}}}else if(null===s&&null===u&&(null===l||1===l||-1===l))return!0;throw Error(t+"Invalid BigNumber: "+e)},F.maximum=F.max=function(){return q(arguments,_.lt)},F.minimum=F.min=function(){return q(arguments,_.gt)},F.random=(O=9007199254740992,b=Math.random()*O&2097151?function(){return n(Math.random()*O)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var i,o,u,l,c,h=0,g=[],p=new F(B);if(null==e?e=D:a(e,0,f),l=r(e/14),T)if(crypto.getRandomValues){for(i=crypto.getRandomValues(new Uint32Array(l*=2));h<l;)(c=131072*i[h]+(i[h+1]>>>11))>=9e15?(o=crypto.getRandomValues(new Uint32Array(2)),i[h]=o[0],i[h+1]=o[1]):(g.push(c%1e14),h+=2);h=l/2}else{if(!crypto.randomBytes)throw T=!1,Error(t+"crypto unavailable");for(i=crypto.randomBytes(l*=7);h<l;)(c=281474976710656*(31&i[h])+1099511627776*i[h+1]+4294967296*i[h+2]+16777216*i[h+3]+(i[h+4]<<16)+(i[h+5]<<8)+i[h+6])>=9e15?crypto.randomBytes(7).copy(i,h):(g.push(c%1e14),h+=7);h=l/7}if(!T)for(;h<l;)(c=b())<9e15&&(g[h++]=c%1e14);for(e%=14,(l=g[--h])&&e&&(c=s[14-e],g[h]=n(l/c)*c);0===g[h];g.pop(),h--);if(h<0)g=[u=0];else{for(u=-1;0===g[0];g.splice(0,1),u-=14);for(h=1,c=g[0];c>=10;c/=10,h++);h<14&&(u-=14-h)}return p.e=u,p.c=g,p}),F.sum=function(){for(var e=1,r=arguments,n=new F(r[0]);e<r.length;)n=n.plus(r[e++]);return n},v=function(){var e="0123456789";function r(e,r,n,t){for(var i,o,s=[0],f=0,u=e.length;f<u;){for(o=s.length;o--;s[o]*=r);for(s[0]+=t.indexOf(e.charAt(f++)),i=0;i<s.length;i++)s[i]>n-1&&(null==s[i+1]&&(s[i+1]=0),s[i+1]+=s[i]/n|0,s[i]%=n)}return s.reverse()}return function(n,t,i,o,s){var f,u,c,a,h,g,w,m,v=n.indexOf("."),N=D,O=P;for(v>=0&&(a=M,M=0,n=n.replace(".",""),g=(m=new F(t)).pow(n.length-v),M=a,m.c=r(p(l(g.c),g.e,"0"),10,i,e),m.e=m.c.length),c=a=(w=r(n,t,i,s?(f=k,e):(f=e,k))).length;0==w[--a];w.pop());if(!w[0])return f.charAt(0);if(v<0?--c:(g.c=w,g.e=c,g.s=o,w=(g=d(g,m,N,O,i)).c,h=g.r,c=g.e),v=w[u=c+N+1],a=i/2,h=h||u<0||null!=w[u+1],h=O<4?(null!=v||h)&&(0==O||O==(g.s<0?3:2)):v>a||v==a&&(4==O||h||6==O&&1&w[u-1]||O==(g.s<0?8:7)),u<1||!w[0])n=h?p(f.charAt(1),-N,f.charAt(0)):f.charAt(0);else{if(w.length=u,h)for(--i;++w[--u]>i;)w[u]=0,u||(++c,w=[1].concat(w));for(a=w.length;!w[--a];);for(v=0,n="";v<=a;n+=f.charAt(w[v++]));n=p(n,c,f.charAt(0))}return n}}(),d=function(){function e(e,r,n){var t,i,o,s,f=0,u=e.length,l=r%1e7,c=r/1e7|0;for(e=e.slice();u--;)f=((i=l*(o=e[u]%1e7)+(t=c*o+(s=e[u]/1e7|0)*l)%1e7*1e7+f)/n|0)+(t/1e7|0)+c*s,e[u]=i%n;return f&&(e=[f].concat(e)),e}function r(e,r,n,t){var i,o;if(n!=t)o=n>t?1:-1;else for(i=o=0;i<n;i++)if(e[i]!=r[i]){o=e[i]>r[i]?1:-1;break}return o}function t(e,r,n,t){for(var i=0;n--;)e[n]-=i,i=e[n]<r[n]?1:0,e[n]=i*t+e[n]-r[n];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(i,s,f,l,c){var a,h,g,p,w,m,d,v,N,O,b,y,E,A,S,R,_,B=i.s==s.s?1:-1,D=i.c,P=s.c;if(!(D&&D[0]&&P&&P[0]))return new F(i.s&&s.s&&(D?!P||D[0]!=P[0]:P)?D&&0==D[0]||!P?0*B:B/0:NaN);for(N=(v=new F(B)).c=[],B=f+(h=i.e-s.e)+1,c||(c=o,h=u(i.e/14)-u(s.e/14),B=B/14|0),g=0;P[g]==(D[g]||0);g++);if(P[g]>(D[g]||0)&&h--,B<0)N.push(1),p=!0;else{for(A=D.length,R=P.length,g=0,B+=2,(w=n(c/(P[0]+1)))>1&&(P=e(P,w,c),D=e(D,w,c),R=P.length,A=D.length),E=R,b=(O=D.slice(0,R)).length;b<R;O[b++]=0);_=P.slice(),_=[0].concat(_),S=P[0],P[1]>=c/2&&S++;do{if(w=0,(a=r(P,O,R,b))<0){if(y=O[0],R!=b&&(y=y*c+(O[1]||0)),(w=n(y/S))>1)for(w>=c&&(w=c-1),d=(m=e(P,w,c)).length,b=O.length;1==r(m,O,d,b);)w--,t(m,R<d?_:P,d,c),d=m.length,a=1;else 0==w&&(a=w=1),d=(m=P.slice()).length;if(d<b&&(m=[0].concat(m)),t(O,m,b,c),b=O.length,-1==a)for(;r(P,O,R,b)<1;)w++,t(O,R<b?_:P,b,c),b=O.length}else 0===a&&(w++,O=[0]);N[g++]=w,O[0]?O[b++]=D[E]||0:(O=[D[E]],b=1)}while((E++<A||null!=O[0])&&B--);p=null!=O[0],N[0]||N.splice(0,1)}if(c==o){for(g=1,B=N[0];B>=10;B/=10,g++);z(v,f+(v.e=g+14*h-1)+1,l,p)}else v.e=h,v.r=+p;return v}}(),y=/^(-?)0([xbo])(?=\w[\w.]*$)/i,E=/^([^.]+)\.$/,A=/^\.([^.]+)$/,S=/^-?(Infinity|NaN)$/,R=/^\s*\+(?=[\w.])|^\s+|\s+$/g,N=function(e,r,n,i){var o,s=n?r:r.replace(R,"");if(S.test(s))e.s=isNaN(s)?null:s<0?-1:1;else{if(!n&&(s=s.replace(y,(function(e,r,n){return o="x"==(n=n.toLowerCase())?16:"b"==n?2:8,i&&i!=o?e:r})),i&&(o=i,s=s.replace(E,"$1").replace(A,"0.$1")),r!=s))return new F(s,o);if(F.DEBUG)throw Error(t+"Not a"+(i?" base "+i:"")+" number: "+r);e.s=null}e.c=e.e=null},_.absoluteValue=_.abs=function(){var e=new F(this);return e.s<0&&(e.s=1),e},_.comparedTo=function(e,r){return c(this,new F(e,r))},_.decimalPlaces=_.dp=function(e,r){var n,t,i,o=this;if(null!=e)return a(e,0,f),null==r?r=P:a(r,0,8),z(new F(o),e+o.e+1,r);if(!(n=o.c))return null;if(t=14*((i=n.length-1)-u(this.e/14)),i=n[i])for(;i%10==0;i/=10,t--);return t<0&&(t=0),t},_.dividedBy=_.div=function(e,r){return d(this,new F(e,r),D,P)},_.dividedToIntegerBy=_.idiv=function(e,r){return d(this,new F(e,r),0,1)},_.exponentiatedBy=_.pow=function(e,i){var o,s,f,u,l,c,a,g,p=this;if((e=new F(e)).c&&!e.isInteger())throw Error(t+"Exponent not an integer: "+H(e));if(null!=i&&(i=new F(i)),l=e.e>14,!p.c||!p.c[0]||1==p.c[0]&&!p.e&&1==p.c.length||!e.c||!e.c[0])return g=new F(Math.pow(+H(p),l?2-h(e):+H(e))),i?g.mod(i):g;if(c=e.s<0,i){if(i.c?!i.c[0]:!i.s)return new F(NaN);(s=!c&&p.isInteger()&&i.isInteger())&&(p=p.mod(i))}else{if(e.e>9&&(p.e>0||p.e<-1||(0==p.e?p.c[0]>1||l&&p.c[1]>=24e7:p.c[0]<8e13||l&&p.c[0]<=9999975e7)))return u=p.s<0&&h(e)?-0:0,p.e>-1&&(u=1/u),new F(c?1/u:u);M&&(u=r(M/14+2))}for(l?(o=new F(.5),c&&(e.s=1),a=h(e)):a=(f=Math.abs(+H(e)))%2,g=new F(B);;){if(a){if(!(g=g.times(p)).c)break;u?g.c.length>u&&(g.c.length=u):s&&(g=g.mod(i))}if(f){if(0===(f=n(f/2)))break;a=f%2}else if(z(e=e.times(o),e.e+1,1),e.e>14)a=h(e);else{if(0===(f=+H(e)))break;a=f%2}p=p.times(p),u?p.c&&p.c.length>u&&(p.c.length=u):s&&(p=p.mod(i))}return s?g:(c&&(g=B.div(g)),i?g.mod(i):u?z(g,M,P,undefined):g)},_.integerValue=function(e){var r=new F(this);return null==e?e=P:a(e,0,8),z(r,r.e+1,e)},_.isEqualTo=_.eq=function(e,r){return 0===c(this,new F(e,r))},_.isFinite=function(){return!!this.c},_.isGreaterThan=_.gt=function(e,r){return c(this,new F(e,r))>0},_.isGreaterThanOrEqualTo=_.gte=function(e,r){return 1===(r=c(this,new F(e,r)))||0===r},_.isInteger=function(){return!!this.c&&u(this.e/14)>this.c.length-2},_.isLessThan=_.lt=function(e,r){return c(this,new F(e,r))<0},_.isLessThanOrEqualTo=_.lte=function(e,r){return-1===(r=c(this,new F(e,r)))||0===r},_.isNaN=function(){return!this.s},_.isNegative=function(){return this.s<0},_.isPositive=function(){return this.s>0},_.isZero=function(){return!!this.c&&0==this.c[0]},_.minus=function(e,r){var n,t,i,s,f=this,l=f.s;if(r=(e=new F(e,r)).s,!l||!r)return new F(NaN);if(l!=r)return e.s=-r,f.plus(e);var c=f.e/14,a=e.e/14,h=f.c,g=e.c;if(!c||!a){if(!h||!g)return h?(e.s=-r,e):new F(g?f:NaN);if(!h[0]||!g[0])return g[0]?(e.s=-r,e):new F(h[0]?f:3==P?-0:0)}if(c=u(c),a=u(a),h=h.slice(),l=c-a){for((s=l<0)?(l=-l,i=h):(a=c,i=g),i.reverse(),r=l;r--;i.push(0));i.reverse()}else for(t=(s=(l=h.length)<(r=g.length))?l:r,l=r=0;r<t;r++)if(h[r]!=g[r]){s=h[r]<g[r];break}if(s&&(i=h,h=g,g=i,e.s=-e.s),(r=(t=g.length)-(n=h.length))>0)for(;r--;h[n++]=0);for(r=o-1;t>l;){if(h[--t]<g[t]){for(n=t;n&&!h[--n];h[n]=r);--h[n],h[t]+=o}h[t]-=g[t]}for(;0==h[0];h.splice(0,1),--a);return h[0]?$(e,h,a):(e.s=3==P?-1:1,e.c=[e.e=0],e)},_.modulo=_.mod=function(e,r){var n,t,i=this;return e=new F(e,r),!i.c||!e.s||e.c&&!e.c[0]?new F(NaN):!e.c||i.c&&!i.c[0]?new F(i):(9==C?(t=e.s,e.s=1,n=d(i,e,0,3),e.s=t,n.s*=t):n=d(i,e,0,C),(e=i.minus(n.times(e))).c[0]||1!=C||(e.s=i.s),e)},_.multipliedBy=_.times=function(e,r){var n,t,i,s,f,l,c,a,h,g,p,w,m,d,v,N=this,O=N.c,b=(e=new F(e,r)).c;if(!(O&&b&&O[0]&&b[0]))return!N.s||!e.s||O&&!O[0]&&!b||b&&!b[0]&&!O?e.c=e.e=e.s=null:(e.s*=N.s,O&&b?(e.c=[0],e.e=0):e.c=e.e=null),e;for(t=u(N.e/14)+u(e.e/14),e.s*=N.s,(c=O.length)<(g=b.length)&&(m=O,O=b,b=m,i=c,c=g,g=i),i=c+g,m=[];i--;m.push(0));for(d=o,v=1e7,i=g;--i>=0;){for(n=0,p=b[i]%v,w=b[i]/v|0,s=i+(f=c);s>i;)n=((a=p*(a=O[--f]%v)+(l=w*a+(h=O[f]/v|0)*p)%v*v+m[s]+n)/d|0)+(l/v|0)+w*h,m[s--]=a%d;m[s]=n}return n?++t:m.splice(0,1),$(e,m,t)},_.negated=function(){var e=new F(this);return e.s=-e.s||null,e},_.plus=function(e,r){var n,t=this,i=t.s;if(r=(e=new F(e,r)).s,!i||!r)return new F(NaN);if(i!=r)return e.s=-r,t.minus(e);var s=t.e/14,f=e.e/14,l=t.c,c=e.c;if(!s||!f){if(!l||!c)return new F(i/0);if(!l[0]||!c[0])return c[0]?e:new F(l[0]?t:0*i)}if(s=u(s),f=u(f),l=l.slice(),i=s-f){for(i>0?(f=s,n=c):(i=-i,n=l),n.reverse();i--;n.push(0));n.reverse()}for((i=l.length)-(r=c.length)<0&&(n=c,c=l,l=n,r=i),i=0;r;)i=(l[--r]=l[r]+c[r]+i)/o|0,l[r]=o===l[r]?0:l[r]%o;return i&&(l=[i].concat(l),++f),$(e,l,f)},_.precision=_.sd=function(e,r){var n,t,i,o=this;if(null!=e&&e!==!!e)return a(e,1,f),null==r?r=P:a(r,0,8),z(new F(o),e,r);if(!(n=o.c))return null;if(t=14*(i=n.length-1)+1,i=n[i]){for(;i%10==0;i/=10,t--);for(i=n[0];i>=10;i/=10,t++);}return e&&o.e+1>t&&(t=o.e+1),t},_.shiftedBy=function(e){return a(e,-9007199254740991,9007199254740991),this.times("1e"+e)},_.squareRoot=_.sqrt=function(){var e,r,n,t,i,o=this,s=o.c,f=o.s,c=o.e,a=D+4,h=new F("0.5");if(1!==f||!s||!s[0])return new F(!f||f<0&&(!s||s[0])?NaN:s?o:1/0);if(0==(f=Math.sqrt(+H(o)))||f==1/0?(((r=l(s)).length+c)%2==0&&(r+="0"),f=Math.sqrt(+r),c=u((c+1)/2)-(c<0||c%2),n=new F(r=f==1/0?"5e"+c:(r=f.toExponential()).slice(0,r.indexOf("e")+1)+c)):n=new F(f+""),n.c[0])for((f=(c=n.e)+a)<3&&(f=0);;)if(i=n,n=h.times(i.plus(d(o,i,a,1))),l(i.c).slice(0,f)===(r=l(n.c)).slice(0,f)){if(n.e<c&&--f,"9999"!=(r=r.slice(f-3,f+1))&&(t||"4999"!=r)){+r&&(+r.slice(1)||"5"!=r.charAt(0))||(z(n,n.e+D+2,1),e=!n.times(n).eq(o));break}if(!t&&(z(i,i.e+D+2,0),i.times(i).eq(o))){n=i;break}a+=4,f+=4,t=1}return z(n,n.e+D+1,P,e)},_.toExponential=function(e,r){return null!=e&&(a(e,0,f),e++),j(this,e,r,1)},_.toFixed=function(e,r){return null!=e&&(a(e,0,f),e=e+this.e+1),j(this,e,r)},_.toFormat=function(e,r,n){var i,o=this;if(null==n)null!=e&&r&&"object"==typeof r?(n=r,r=null):e&&"object"==typeof e?(n=e,e=r=null):n=G;else if("object"!=typeof n)throw Error(t+"Argument not an object: "+n);if(i=o.toFixed(e,r),o.c){var s,f=i.split("."),u=+n.groupSize,l=+n.secondaryGroupSize,c=n.groupSeparator||"",a=f[0],h=f[1],g=o.s<0,p=g?a.slice(1):a,w=p.length;if(l&&(s=u,u=l,l=s,w-=s),u>0&&w>0){for(s=w%u||u,a=p.substr(0,s);s<w;s+=u)a+=c+p.substr(s,u);l>0&&(a+=c+p.slice(s)),g&&(a="-"+a)}i=h?a+(n.decimalSeparator||"")+((l=+n.fractionGroupSize)?h.replace(new RegExp("\\d{"+l+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):h):a}return(n.prefix||"")+i+(n.suffix||"")},_.toFraction=function(e){var r,n,i,o,f,u,c,a,h,g,p,w,m=this,v=m.c;if(null!=e&&(!(c=new F(e)).isInteger()&&(c.c||1!==c.s)||c.lt(B)))throw Error(t+"Argument "+(c.isInteger()?"out of range: ":"not an integer: ")+H(c));if(!v)return new F(m);for(r=new F(B),h=n=new F(B),i=a=new F(B),w=l(v),f=r.e=w.length-m.e-1,r.c[0]=s[(u=f%14)<0?14+u:u],e=!e||c.comparedTo(r)>0?f>0?r:h:c,u=I,I=1/0,c=new F(w),a.c[0]=0;g=d(c,r,0,1),1!=(o=n.plus(g.times(i))).comparedTo(e);)n=i,i=o,h=a.plus(g.times(o=h)),a=o,r=c.minus(g.times(o=r)),c=o;return o=d(e.minus(n),i,0,1),a=a.plus(o.times(h)),n=n.plus(o.times(i)),a.s=h.s=m.s,p=d(h,i,f*=2,P).minus(m).abs().comparedTo(d(a,n,f,P).minus(m).abs())<1?[h,i]:[a,n],I=u,p},_.toNumber=function(){return+H(this)},_.toPrecision=function(e,r){return null!=e&&a(e,1,f),j(this,e,r,2)},_.toString=function(e){var r,n=this,t=n.s,i=n.e;return null===i?t?(r="Infinity",t<0&&(r="-"+r)):r="NaN":(null==e?r=i<=L||i>=x?g(l(n.c),i):p(l(n.c),i,"0"):10===e?r=p(l((n=z(new F(n),D+i+1,P)).c),n.e,"0"):(a(e,2,k.length,"Base"),r=v(p(l(n.c),i,"0"),10,e,t,!0)),t<0&&n.c[0]&&(r="-"+r)),r},_.valueOf=_.toJSON=function(){return H(this)},_._isBigNumber=!0,_[Symbol.toStringTag]="BigNumber",_[Symbol.for("nodejs.util.inspect.custom")]=_.valueOf,null!=m&&F.set(m),F}();export{w as B};