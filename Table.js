(function fn(global,factory){
/*
	if(typeof exports==='object' && typeof module!=='undefined'){
		module.exports=factory();
	}else{
		if(typeof define==='function' && define.amd){
			define(factory);
		}else{
			global.Table=factory();
		}
	}
*/
	typeof exports==='object' && typeof module!=='undefined'?module.exports=factory():(typeof define==='function' && define.amd?define(factory):global.Table=factory());
})(this,function(){
	'use strict';
	function isArray(arr){
		return arr.constructor===Array;
	}
	function isObject(obj){
		return typeof obj==='object'&&obj!==null;
	}
	return function(obj){
		if(!isArray(obj) && !isObject(obj)){
			throw new Error('数据类型错误');
		}
		var el=obj.el,
			theadCon=obj.theadCon,
			columns=obj.columns,
			data=obj.data;
		var tableParentNode=document.querySelector(el);
		var table=document.createElement('table');
		table.className="Table";
		table.border=1;
		table.style.width="100%";
		table.style.textAlign='center';
		tableParentNode.appendChild(table);

		var theadNode=document.createElement('thead');
		theadNode.style.background="gold";
		var str="";
		theadCon.forEach(function(content){
			str+="<td>"+content+"</td>";
		});
		theadNode.innerHTML=str;
		table.appendChild(theadNode);

		data.forEach(function(doc){
			var tr=document.createElement("tr");
			var str="";
			columns.forEach(function(dataName){
				var key=dataName.data;
				str+="<td>"+doc[key]+"</td>";
			});
			tr.innerHTML=str;
			table.appendChild(tr);
		});	

	}
});