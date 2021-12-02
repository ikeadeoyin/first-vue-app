(function(e){function t(t){for(var i,c,r=t[0],u=t[1],a=t[2],d=0,p=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);s&&s(t);while(p.length)p.shift()();return l.push.apply(l,a||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],i=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(i=!1)}i&&(l.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},o={app:0},l=[];function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var a=0;a<r.length;a++)t(r[a]);var s=u;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1767:function(e,t,n){},"2e2f":function(e,t,n){},"47cf":function(e,t,n){},"54ec":function(e,t,n){"use strict";n("2e2f")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),o=Object(i["e"])("h1",null,"Employees",-1);function l(e,t,n,l,c,r){var u=Object(i["l"])("employee-form"),a=Object(i["l"])("employee-table");return Object(i["h"])(),Object(i["d"])(i["a"],null,[o,Object(i["f"])(u,{onAddEmployee:r.add},null,8,["onAddEmployee"]),Object(i["f"])(a,{employees:c.employees,onDeleteEmployee:r.deleteEmployee,onEditEmployee:r.editEmployee},null,8,["employees","onDeleteEmployee","onEditEmployee"])],64)}var c=n("2909"),r=n("5530"),u=(n("b0c0"),n("99af"),n("4de4"),n("d3b7"),n("d81d"),function(e){return Object(i["j"])("data-v-d0cc6b5c"),e=e(),Object(i["i"])(),e}),a={key:0},s={key:1},d=u((function(){return Object(i["e"])("thead",null,[Object(i["e"])("tr",null,[Object(i["e"])("th",null,"Name"),Object(i["e"])("th",null,"Email"),Object(i["e"])("th",null,"Actions")])],-1)})),p={key:0},m=["onUpdate:modelValue"],b={key:1},f={key:2},y=["onUpdate:modelValue"],h={key:3},j={key:4},O=["onClick"],v={key:5},g=["onClick"],E=["onClick"];function k(e,t,n,o,l,c){return n.employees.length<1?(Object(i["h"])(),Object(i["d"])("p",a,"No employees")):(Object(i["h"])(),Object(i["d"])("table",s,[d,Object(i["e"])("tbody",null,[(Object(i["h"])(!0),Object(i["d"])(i["a"],null,Object(i["k"])(n.employees,(function(n){return Object(i["h"])(),Object(i["d"])("tr",{key:n.id},[l.editing===n.id?(Object(i["h"])(),Object(i["d"])("td",p,[Object(i["o"])(Object(i["e"])("input",{type:"text","onUpdate:modelValue":function(e){return n.name=e}},null,8,m),[[i["n"],n.name]])])):(Object(i["h"])(),Object(i["d"])("td",b,Object(i["m"])(n.name),1)),l.editing===n.id?(Object(i["h"])(),Object(i["d"])("td",f,[Object(i["o"])(Object(i["e"])("input",{type:"text","onUpdate:modelValue":function(e){return n.email=e}},null,8,y),[[i["n"],n.email]])])):(Object(i["h"])(),Object(i["d"])("td",h,Object(i["m"])(n.email),1)),l.editing===n.id?(Object(i["h"])(),Object(i["d"])("td",j,[Object(i["e"])("button",{onClick:function(e){return c.editEmployee(n)}},"Save",8,O),Object(i["e"])("button",{class:"muted-button",onClick:t[0]||(t[0]=function(e){return l.editing=null})},"Cancel")])):(Object(i["h"])(),Object(i["d"])("td",v,[Object(i["e"])("button",{onClick:function(e){return c.editMode(n.id)}},"Edit",8,g),Object(i["e"])("button",{onClick:function(t){return e.$emit("delete-employee",n.id)}},"Delete",8,E)]))])})),128))])]))}var S={name:"EmployeeTable",props:{employees:Array},emits:["delete-employee","edit-employee"],data:function(){return{editing:null}},methods:{editMode:function(e){this.editing=e},editEmployee:function(e){""!==e.name&&""!==e.email&&(this.$emit("edit-employee",e.id,e),this.editing=null)}}},w=(n("c177"),n("6b0d")),x=n.n(w);const C=x()(S,[["render",k],["__scopeId","data-v-d0cc6b5c"]]);var _=C,A=function(e){return Object(i["j"])("data-v-5a1dd676"),e=e(),Object(i["i"])(),e},P=A((function(){return Object(i["e"])("label",null,"Employee name",-1)})),M=A((function(){return Object(i["e"])("label",null,"Employee Email",-1)})),V={key:0,class:"error-message"},U={key:1,class:"success-message"},$=A((function(){return Object(i["e"])("button",null,"Add Employee",-1)}));function F(e,t,n,o,l,c){return Object(i["h"])(),Object(i["d"])("form",{onSubmit:t[5]||(t[5]=Object(i["p"])((function(){return c.handleSubmit&&c.handleSubmit.apply(c,arguments)}),["prevent"]))},[P,Object(i["o"])(Object(i["e"])("input",{ref:"first",type:"text",class:Object(i["g"])({"has-error":l.submitting&&c.invalidName}),"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.employee.name=e}),onFocus:t[1]||(t[1]=function(){return c.clearStatus&&c.clearStatus.apply(c,arguments)}),onKeypress:t[2]||(t[2]=function(){return c.clearStatus&&c.clearStatus.apply(c,arguments)})},null,34),[[i["n"],l.employee.name]]),M,Object(i["o"])(Object(i["e"])("input",{type:"text",class:Object(i["g"])({"has-error":l.submitting&&c.invalidEmail}),"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.employee.email=e}),onFocus:t[4]||(t[4]=function(){return c.clearStatus&&c.clearStatus.apply(c,arguments)})},null,34),[[i["n"],l.employee.email]]),l.error&&l.submitting?(Object(i["h"])(),Object(i["d"])("p",V,"❗Please fill out all required fields")):Object(i["c"])("",!0),l.success?(Object(i["h"])(),Object(i["d"])("p",U,"✅ Employee successfully added")):Object(i["c"])("",!0),$],32)}var N={name:"EmployeeForm",data:function(){return{error:!1,submitting:!1,success:!1,employee:{name:"",email:""}}},computed:{invalidName:function(){return""===this.employee.name},invalidEmail:function(){return""===this.employee.email}},methods:{handleSubmit:function(){this.clearStatus(),this.submitting=!0,this.invalidName||this.invalidEmail?this.error=!0:(this.$emit("add-employee",this.employee),this.$refs.first.focus(),this.employee={name:"",email:""},this.success=!0,this.error=!1,this.submitting=!1)},clearStatus:function(){this.success=!1,this.error=!1}}};n("54ec");const D=x()(N,[["render",F],["__scopeId","data-v-5a1dd676"]]);var T=D,I={name:"App",components:{EmployeeTable:_,EmployeeForm:T},data:function(){return{title:"My First Vue App",name:"Oyin Ajayi",employees:[{id:1,name:"Richard Hendricks",email:"richard@piedpiper.com"},{id:2,name:"Bertram Gilfoyle",email:"gilfoyle@piedpiper.com"},{id:3,name:"Dinesh Chugtai",email:"dinesh@piedpiper.com"}]}},methods:{handleClick:function(){console.log(this.$refs.name),this.$refs.name.classList.add("active")},add:function(e){var t=this.employees.length>0?this.employees[this.employees.length-1].id:0,n=t+1,i=Object(r["a"])(Object(r["a"])({},e),{},{id:n});this.employees=[].concat(Object(c["a"])(this.employees),[i])},deleteEmployee:function(e){this.employees=this.employees.filter((function(t){return t.id!==e}))},editEmployee:function(e,t){this.employees=this.employees.map((function(n){return n.id===e?t:n}))}}};n("7234");const J=x()(I,[["render",l]]);var q=J;Object(i["b"])(q).mount("#app")},7234:function(e,t,n){"use strict";n("1767")},c177:function(e,t,n){"use strict";n("47cf")}});
//# sourceMappingURL=app.a0ec909b.js.map