(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[3878],{87867:(e,r,t)=>{"use strict";t.r(r),t.d(r,{formulaToString:()=>i});var n=t(81602),o=t(82293),s=t(24429),a=t(63143);function i(e,r){if(!e)return"";const t=m(e,r);if(!t)return"";const n=t.toString({parenthesis:"auto"});return n.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t")}const p=n.U(o.$),u=(0,a.Q8)(s._G,(e=>e.value)),l=(0,a.Q8)(s.Gn,(e=>e.apply)),f=(0,a.Q8)(s.wk,(e=>e.apply));function m(e,r){if(!e)return p.uninitialized;if("conditional"===e.type)return new p.ConditionalNode(m(e.condition,r),m(e.true,r),m(e.false,r));if("constant"===e.type){const r="number"===e.value_type?parseFloat(e.value):"boolean"===e.value_type?e.value||"true"===e.value:e.value;return new p.ConstantNode(r)}if("function"===e.type)return new p.FunctionNode(new p.SymbolNode(e.name),(e.args||[]).map((e=>m(e,r))).filter((e=>void 0!==e)));if("operator"===e.type)return new p.OperatorNode(e.operator,e.name,(e.args||[]).map((e=>m(e,r))).filter((e=>void 0!==e)));if("property"===e.type){const t=r[e.id],n=t?t.name:e.name;return new p.FunctionNode("prop",[new p.ConstantNode(n)])}return"symbol"===e.type?new p.SymbolNode(e.name):p.uninitialized}p.import(u,{override:!0}),p.import(l,{override:!0}),p.import(f,{override:!0})},15962:(e,r,t)=>{"use strict";t.r(r),t.d(r,{stringToFormula:()=>y});var n=t(96486),o=t.n(n),s=t(81602),a=t(82293),i=t(99036),p=t(7406),u=t(26666),l=t(24429),f=t(87867);const m=/(.+) \(char (\d+)\)/,c=[{regex:/Syntax error in part (.+)$/,translate:(e,r)=>e.formatMessage({id:"mathParseHelpers.syntax.error",defaultMessage:"Syntax error in part {token}"},{token:r})},{regex:/End of (?:matrix|string) ([\]\"\']) expected/,translate:(e,r)=>e.formatMessage({id:"mathParseHelpers.tokenExpected.error",defaultMessage:"{token} expected"},{token:r})},{regex:/Parenthesis ([\)\]]) expected/,translate:(e,r)=>e.formatMessage({id:"mathParseHelpers.tokenExpected.error",defaultMessage:"{token} expected"},{token:r})},{regex:/Unexpected (?:operator|part) (.+)$/,translate:(e,r)=>e.formatMessage({id:"mathParseHelpers.unexpected.error",defaultMessage:"Unexpected {token}"},{token:r})},{regex:/Unexpected end of expression$/,translate:(e,r)=>e.formatMessage({id:"mathParseHelpers.unexpectedEndOfExpression.error",defaultMessage:"Unexpected end of expression",description:"Error message for unexpected end of expression in math formulas."})}];const d=s.U(a.$);function y(e){const{str:r,property:t,schema:n,intl:o,propertyTypeDisplayName:s}=e;if(""===r.trim())return;let a;try{a=d.parse(r)}catch(i){const{message:e}=(0,p.tg)(i);return{type:"error",message:function(e,r){const t=m.exec(r);if(!t)return r;let n=t[1];const o=t[2],s=o?e.formatMessage({id:"mathParseHelpers.errorPosition.message",defaultMessage:"char {position}",description:"The character position at which an error occurred"},{position:o}):"";return c.forEach((r=>{let{regex:t,translate:o}=r;if(n.match(t)){const r=t.exec(n);if(r){const t=r[1];n=o(e,t)}}})),e.formatMessage({id:"mathParseHelpers.fullError.message",defaultMessage:"{errorBody} ({postfix})",description:"The full error message from the math.parse library. Postfix describes the position: i.e. (char 42)"},{errorBody:n,postfix:s})}(o,e),size:1}}return g(o,a,t,n,s)}function g(e,r,t,n,s){if(r){if("AccessorNode"===r.type||"ArrayNode"===r.type||"AssignmentNode"===r.type||"BlockNode"===r.type||"FunctionAssignmentNode"===r.type||"IndexNode"===r.type||"ObjectNode"===r.type||"RangeNode"===r.type)return{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.invalidSyntax",defaultMessage:"Invalid syntax: {input}",description:"When a user enters an invalid formula that is structured incorrectly, we show this error message."},{input:r.toString()})};if("ConditionalNode"===r.type){const o=g(e,r.condition,t,n,s),a=g(e,r.trueExpr,t,n,s),i=g(e,r.falseExpr,t,n,s);if(!o)return;if("error"===o.type)return o;if(a&&"error"===a.type)return a;if(i&&"error"===i.type)return i;if(a&&i)return a.result_type!==i.result_type?{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.branchCondition",defaultMessage:"Each branch of a condition must be of the same type: {input}",description:"When a user enters an invalid formula with an invalid if statement, we show this error message."},{input:r.toString()})}:{type:"conditional",result_type:a.result_type,condition:o,true:a,false:i}}else{if("ConstantNode"===r.type){const{value:t}=r,n=typeof t,o={string:"text",number:"number",boolean:"checkbox"};return n in o?{type:"constant",result_type:o[n],value:t,value_type:n}:{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.illegalConstant",defaultMessage:"Illegal constant: {value}",description:"When a user enters an invalid formula with an invalid constant, we show this error message."},{value:t})}}if("FunctionNode"===r.type){const{fn:a,args:p}=r;if("prop"===a.name){if(1!==p.length)return{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.tooManyArgumentsInProp",defaultMessage:"Too many arguments passed to prop()."})};const r=p[0];if("ConstantNode"!==r.type)return{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.invalidPropertyReference",defaultMessage:"Invalid property reference: {input}"},{input:r.toString()})};const o=r.value,s=Object.keys(n).find((e=>{const r=n[e];return Boolean(r&&r.name===o)})),a=s&&n[s];if(!s||!a)return{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.propertyNotFound",defaultMessage:"Property not found: prop({input})"},{input:o})};if(i.rX.includes(a.type))return{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.propertyNotSupported",defaultMessage:"Property not supported: prop({propertySchemaName})",description:"Indicates that the property with the given name is not supported in the 'prop' formula function"},{propertySchemaName:a.name})};if("formula"===a.type){const{formula:r}=a;if(!r||!r.result_type)return;return(0,u.pV)(r).includes(t)?{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.circularDependency",defaultMessage:"Property {propertySchemaName} creates a circular dependency."},{propertySchemaName:a.name})}:{type:"property",result_type:(0,u.z6)(a),name:o,id:s}}return{type:"property",result_type:(0,u.z6)(a),name:o,id:s}}const f=l.uf(a.name)||l.aV(a.name);if(!f)return{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.undefinedFunction",defaultMessage:"Undefined function: {functionName}",description:"When a user enters an invalid formula with a function that doesn't exist, we show this error message."},{functionName:a.name})};const m=o().compact((p||[]).map((r=>g(e,r,t,n,s)))),c=h({intl:e,functionName:a.name,functionArgs:m,signatures:f.signatures,schema:n,propertyTypeDisplayName:s});if(c.error)return c.error;return{type:"function",result_type:c.value.resultType,name:a.name,args:m}}if("OperatorNode"===r.type){const{op:a,fn:i,args:p}=r,u=l.aV(i);if(!u)return{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.undefinedOperator",defaultMessage:"Undefined operator: {operator}",description:"When a user enters an invalid formula with an operator that doesn't exist, we show this error message."},{operator:a})};const f=o().compact((p||[]).map((r=>g(e,r,t,n,s)))),m=h({intl:e,functionName:i,functionArgs:f,signatures:u.signatures,schema:n,propertyTypeDisplayName:s});if(m.error)return m.error;return{type:"operator",result_type:m.value.resultType,operator:a,name:i,args:f}}if("ParenthesisNode"===r.type)return g(e,r.content,t,n,s);if("SymbolNode"===r.type){const{name:t}=r;return t in l._G?{type:"symbol",result_type:l._G[t].resultType,name:t}:{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.undefinedConstant",defaultMessage:"Undefined constant: {constantName}",description:"When a user enters an invalid formula with a constant that doesn't exist, we show this error message."},{constantName:t})}}}}}function h(e){const{intl:r,functionName:t,functionArgs:n,signatures:s,schema:a,propertyTypeDisplayName:i}=e;return s.reduce(((e,s)=>{if(!e.error)return e;const p=function(e){const{intl:r,functionName:t,functionArgs:n,signature:s,schema:a,propertyTypeDisplayName:i}=e,{arity:p,variadic:u}=s;if(u){if(!(n.length>0))return{type:"error",size:1,message:r.formatMessage({id:"formulaHelpers.error.tooFewArgumentsVariadic",defaultMessage:"Too few arguments in function {functionName}",description:"When a user enters an invalid formula with an improper use of the function, we show this error message."},{functionName:t})};{const e=o().compact(n.map((e=>N({intl:r,resultType:u,functionArg:e,schema:a,propertyTypeDisplayName:i}))));if(e.length>0)return{...e[0],size:e.length}}}if(p){if(n.length<p.length)return{type:"error",size:1,message:r.formatMessage({id:"formulaHelpers.error.tooFewArguments",defaultMessage:"Too few arguments in function {functionName}",description:"When a user enters an invalid formula with an improper use of the function, we show this error message."},{functionName:t})};if(n.length>p.length)return{type:"error",size:1,message:r.formatMessage({id:"formulaHelpers.error.tooManyArguments",defaultMessage:"Too many arguments in function {functionName}",description:"When a user enters an invalid formula with an improper use of the function, we show this error message."},{functionName:t})};const e=o().compact(n.map(((e,t)=>N({intl:r,resultType:p[t],functionArg:e,schema:a,propertyTypeDisplayName:i}))));if(e.length>0)return{...e[0],size:e.length}}}({intl:r,functionName:t,functionArgs:n,signature:s,schema:a,propertyTypeDisplayName:i});return p?e.error.size<p.size?e:{error:p}:{value:s}}),{error:{type:"error",size:99,message:r.formatMessage({id:"formulaHelpers.error.noSignatureForFunction",defaultMessage:"No signatures found for function: {functionName}",description:"When a user enters an invalid formula with a function that doesn't exist, we show this error message."},{functionName:t})}})}function N(e){const{intl:r,resultType:t,functionArg:n,schema:o,propertyTypeDisplayName:s}=e;if("error"===n.type)return n;if(t!==n.result_type){const e=(0,f.formulaToString)(n,o);return{type:"error",size:1,message:r.formatMessage({id:"formulaHelpers.error.typeMismatch",defaultMessage:"Type mismatch {nodeString} is not a {localizedPropertyTypeDisplayName}.",description:"When tye types in the function don't match the database property type, we show this error."},{nodeString:e,localizedPropertyTypeDisplayName:t?s[t]:r.formatMessage({id:"formatMessage.error.undefinedResultType",defaultMessage:"undefined"})})}}}},75042:()=>{}}]);