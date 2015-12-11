(function (console) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
var Main = function() {
	ReactDOM.render(React.createElement(Root,{ }),window.document.getElementById("app"));
};
Main.__name__ = true;
Main.main = function() {
	new Main();
};
Math.__name__ = true;
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
};
var Root = function(props) {
	React.Component.call(this,props);
	this.loader = new loader_ImagesLoader();
	this.loader.responseArrived.addOnce($bind(this,this.onResponseArrived));
	this.loader.loadImages();
};
Root.__name__ = true;
Root.__super__ = React.Component;
Root.prototype = $extend(React.Component.prototype,{
	onResponseArrived: function(list) {
		console.log(list);
		this.setState({ data : list.images});
	}
	,render: function() {
		if(this.state != null && this.state.data != null) return React.createElement(view_ImageCollection,{ data : this.state.data});
		return null;
	}
});
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var StringTools = function() { };
StringTools.__name__ = true;
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
js__$Boot_HaxeError.__name__ = true;
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
});
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
var js_Browser = function() { };
js_Browser.__name__ = true;
js_Browser.createXMLHttpRequest = function() {
	if(typeof XMLHttpRequest != "undefined") return new XMLHttpRequest();
	if(typeof ActiveXObject != "undefined") return new ActiveXObject("Microsoft.XMLHTTP");
	throw new js__$Boot_HaxeError("Unable to create XMLHttpRequest object.");
};
var loader_ImagesLoader = function() {
	this.responseArrived = new msignal_Signal1();
};
loader_ImagesLoader.__name__ = true;
loader_ImagesLoader.prototype = {
	loadImages: function() {
		var request = new yloader_valueObject_Request(utils_Common.Url);
		var xmlLoader = new yloader_impl_js_XMLHttpRequestLoader(request);
		xmlLoader.onResponse = $bind(this,this.onResponse);
		xmlLoader.load();
	}
	,onResponse: function(response) {
		if(response.success) {
			var list = JSON.parse(response.data);
			this.responseArrived.dispatch(list);
		} else console.log("request failed");
	}
};
var msignal_Signal = function(valueClasses) {
	if(valueClasses == null) valueClasses = [];
	this.valueClasses = valueClasses;
	this.slots = msignal_SlotList.NIL;
	this.priorityBased = false;
};
msignal_Signal.__name__ = true;
msignal_Signal.prototype = {
	addOnce: function(listener) {
		return this.registerListener(listener,true);
	}
	,remove: function(listener) {
		var slot = this.slots.find(listener);
		if(slot == null) return null;
		this.slots = this.slots.filterNot(listener);
		return slot;
	}
	,registerListener: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		if(this.registrationPossible(listener,once)) {
			var newSlot = this.createSlot(listener,once,priority);
			if(!this.priorityBased && priority != 0) this.priorityBased = true;
			if(!this.priorityBased && priority == 0) this.slots = this.slots.prepend(newSlot); else this.slots = this.slots.insertWithPriority(newSlot);
			return newSlot;
		}
		return this.slots.find(listener);
	}
	,registrationPossible: function(listener,once) {
		if(!this.slots.nonEmpty) return true;
		var existingSlot = this.slots.find(listener);
		if(existingSlot == null) return true;
		if(existingSlot.once != once) throw new js__$Boot_HaxeError("You cannot addOnce() then add() the same listener without removing the relationship first.");
		return false;
	}
	,createSlot: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		return null;
	}
};
var msignal_Signal1 = function(type) {
	msignal_Signal.call(this,[type]);
};
msignal_Signal1.__name__ = true;
msignal_Signal1.__super__ = msignal_Signal;
msignal_Signal1.prototype = $extend(msignal_Signal.prototype,{
	dispatch: function(value) {
		var slotsToProcess = this.slots;
		while(slotsToProcess.nonEmpty) {
			slotsToProcess.head.execute(value);
			slotsToProcess = slotsToProcess.tail;
		}
	}
	,createSlot: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		return new msignal_Slot1(this,listener,once,priority);
	}
});
var msignal_Slot = function(signal,listener,once,priority) {
	if(priority == null) priority = 0;
	if(once == null) once = false;
	this.signal = signal;
	this.set_listener(listener);
	this.once = once;
	this.priority = priority;
	this.enabled = true;
};
msignal_Slot.__name__ = true;
msignal_Slot.prototype = {
	remove: function() {
		this.signal.remove(this.listener);
	}
	,set_listener: function(value) {
		if(value == null) throw new js__$Boot_HaxeError("listener cannot be null");
		return this.listener = value;
	}
};
var msignal_Slot1 = function(signal,listener,once,priority) {
	if(priority == null) priority = 0;
	if(once == null) once = false;
	msignal_Slot.call(this,signal,listener,once,priority);
};
msignal_Slot1.__name__ = true;
msignal_Slot1.__super__ = msignal_Slot;
msignal_Slot1.prototype = $extend(msignal_Slot.prototype,{
	execute: function(value1) {
		if(!this.enabled) return;
		if(this.once) this.remove();
		if(this.param != null) value1 = this.param;
		this.listener(value1);
	}
});
var msignal_SlotList = function(head,tail) {
	this.nonEmpty = false;
	if(head == null && tail == null) {
		if(msignal_SlotList.NIL != null) throw new js__$Boot_HaxeError("Parameters head and tail are null. Use the NIL element instead.");
		this.nonEmpty = false;
	} else if(head == null) throw new js__$Boot_HaxeError("Parameter head cannot be null."); else {
		this.head = head;
		if(tail == null) this.tail = msignal_SlotList.NIL; else this.tail = tail;
		this.nonEmpty = true;
	}
};
msignal_SlotList.__name__ = true;
msignal_SlotList.prototype = {
	prepend: function(slot) {
		return new msignal_SlotList(slot,this);
	}
	,insertWithPriority: function(slot) {
		if(!this.nonEmpty) return new msignal_SlotList(slot);
		var priority = slot.priority;
		if(priority >= this.head.priority) return this.prepend(slot);
		var wholeClone = new msignal_SlotList(this.head);
		var subClone = wholeClone;
		var current = this.tail;
		while(current.nonEmpty) {
			if(priority > current.head.priority) {
				subClone.tail = current.prepend(slot);
				return wholeClone;
			}
			subClone = subClone.tail = new msignal_SlotList(current.head);
			current = current.tail;
		}
		subClone.tail = new msignal_SlotList(slot);
		return wholeClone;
	}
	,filterNot: function(listener) {
		if(!this.nonEmpty || listener == null) return this;
		if(Reflect.compareMethods(this.head.listener,listener)) return this.tail;
		var wholeClone = new msignal_SlotList(this.head);
		var subClone = wholeClone;
		var current = this.tail;
		while(current.nonEmpty) {
			if(Reflect.compareMethods(current.head.listener,listener)) {
				subClone.tail = current.tail;
				return wholeClone;
			}
			subClone = subClone.tail = new msignal_SlotList(current.head);
			current = current.tail;
		}
		return this;
	}
	,find: function(listener) {
		if(!this.nonEmpty) return null;
		var p = this;
		while(p.nonEmpty) {
			if(Reflect.compareMethods(p.head.listener,listener)) return p.head;
			p = p.tail;
		}
		return null;
	}
};
var utils_Common = function() { };
utils_Common.__name__ = true;
var view_ImageCollection = function() {
	React.Component.call(this);
};
view_ImageCollection.__name__ = true;
view_ImageCollection.__super__ = React.Component;
view_ImageCollection.prototype = $extend(React.Component.prototype,{
	render: function() {
		return React.createElement("div",{ align : "center", display : "inline-block", margin : "0 20px 0 20px"},this.createChildern());
	}
	,createChildern: function() {
		var result = [];
		var id = 0;
		var _g = 0;
		var _g1 = this.props.data;
		while(_g < _g1.length) {
			var entry = _g1[_g];
			++_g;
			id++;
			result.push(React.createElement(view_ImageListItemElement,{ key : id, data : entry}));
		}
		return result;
	}
});
var view_ImageListItemElement = function(props) {
	React.Component.call(this,props);
};
view_ImageListItemElement.__name__ = true;
view_ImageListItemElement.__super__ = React.Component;
view_ImageListItemElement.prototype = $extend(React.Component.prototype,{
	render: function() {
		var entry = this.props.data;
		return React.createElement("img",{ key : entry.id, src : entry.url, width : "150", height : "200"});
	}
});
var yloader_ILoader = function() { };
yloader_ILoader.__name__ = true;
var yloader_enums_Method = { __ename__ : true, __constructs__ : ["CONNECT","DELETE","GET","HEAD","OPTIONS","POST","PUT"] };
yloader_enums_Method.CONNECT = ["CONNECT",0];
yloader_enums_Method.CONNECT.toString = $estr;
yloader_enums_Method.CONNECT.__enum__ = yloader_enums_Method;
yloader_enums_Method.DELETE = ["DELETE",1];
yloader_enums_Method.DELETE.toString = $estr;
yloader_enums_Method.DELETE.__enum__ = yloader_enums_Method;
yloader_enums_Method.GET = ["GET",2];
yloader_enums_Method.GET.toString = $estr;
yloader_enums_Method.GET.__enum__ = yloader_enums_Method;
yloader_enums_Method.HEAD = ["HEAD",3];
yloader_enums_Method.HEAD.toString = $estr;
yloader_enums_Method.HEAD.__enum__ = yloader_enums_Method;
yloader_enums_Method.OPTIONS = ["OPTIONS",4];
yloader_enums_Method.OPTIONS.toString = $estr;
yloader_enums_Method.OPTIONS.__enum__ = yloader_enums_Method;
yloader_enums_Method.POST = ["POST",5];
yloader_enums_Method.POST.toString = $estr;
yloader_enums_Method.POST.__enum__ = yloader_enums_Method;
yloader_enums_Method.PUT = ["PUT",6];
yloader_enums_Method.PUT.toString = $estr;
yloader_enums_Method.PUT.__enum__ = yloader_enums_Method;
var yloader_impl_js_XMLHttpRequestLoader = function(request) {
	this.request = request;
};
yloader_impl_js_XMLHttpRequestLoader.__name__ = true;
yloader_impl_js_XMLHttpRequestLoader.__interfaces__ = [yloader_ILoader];
yloader_impl_js_XMLHttpRequestLoader.prototype = {
	createXHR: function() {
		return js_Browser.createXMLHttpRequest();
	}
	,load: function() {
		this.cancel();
		this.xhr = this.createXHR();
		this.prepareXHR(this.xhr);
		this.xhr.send(this.request.data);
	}
	,cancel: function() {
		if(this.xhr != null) this.disposeXHR(this.xhr);
		this.xhr = null;
	}
	,getStatus: function(xhr) {
		var result;
		try {
			result = xhr.status;
		} catch( error ) {
			if (error instanceof js__$Boot_HaxeError) error = error.val;
			result = -1;
		}
		if(result == undefined) return -1; else return result;
	}
	,getHeaders: function(xhr) {
		var text = xhr.getAllResponseHeaders();
		var result = yloader_util_HeaderUtil.toParameters(text);
		return result;
	}
	,getResponse: function(xhr) {
		var status = this.getStatus(xhr);
		var success = this.isSuccess(status);
		var headers = this.getHeaders(xhr);
		return new yloader_valueObject_Response(success,xhr.responseText,status,xhr.statusText,headers);
	}
	,isSuccess: function(status) {
		return status >= 200 && status < 400;
	}
	,handleResponse: function(xhr) {
		if(this.onResponse == null) return;
		var response = this.getResponse(xhr);
		this.onResponse(response);
	}
	,dispose: function() {
		this.cancel();
	}
	,prepareXHR: function(xhr) {
		var method = Std.string(this.request.method);
		xhr.onreadystatechange = $bind(this,this.onXHRReadyStateChange);
		xhr.open(method,this.request.get_urlWithQuery(),true);
		if(this.withCredentials) xhr.withCredentials = true;
		var _g = 0;
		var _g1 = this.request.headers;
		while(_g < _g1.length) {
			var header = _g1[_g];
			++_g;
			xhr.setRequestHeader(header.name,header.value);
		}
	}
	,disposeXHR: function(xhr) {
		xhr.onreadystatechange = null;
		try {
			xhr.abort();
		} catch( error ) {
			if (error instanceof js__$Boot_HaxeError) error = error.val;
		}
	}
	,onXHRReadyStateChange: function(event) {
		if(this.xhr.readyState != 4) return;
		this.handleResponse(this.xhr);
		this.dispose();
	}
};
var yloader_util_HeaderUtil = function() { };
yloader_util_HeaderUtil.__name__ = true;
yloader_util_HeaderUtil.toParameters = function(text) {
	var lines = text.split("\n");
	var result = [];
	var _g = 0;
	while(_g < lines.length) {
		var line = lines[_g];
		++_g;
		if(line == "") continue;
		var data = line.split(":");
		var name = StringTools.trim(data.shift());
		var value = StringTools.trim(data.join(":"));
		result.push(new yloader_valueObject_Parameter(name,value));
	}
	return result;
};
var yloader_util_ParameterUtil = function() { };
yloader_util_ParameterUtil.__name__ = true;
yloader_util_ParameterUtil.urlEncode = function(list) {
	var result = null;
	var _g = 0;
	while(_g < list.length) {
		var item = list[_g];
		++_g;
		result = (result == null?"":result + "&") + encodeURIComponent(item.name) + "=" + encodeURIComponent(item.value);
	}
	return result;
};
var yloader_valueObject_Parameter = function(name,value) {
	this.name = name;
	this.value = value;
};
yloader_valueObject_Parameter.__name__ = true;
var yloader_valueObject_Request = function(url) {
	this.url = url;
	this.method = yloader_enums_Method.GET;
	this.headers = [];
	this.getParameters = [];
};
yloader_valueObject_Request.__name__ = true;
yloader_valueObject_Request.prototype = {
	get_urlWithQuery: function() {
		var query = yloader_util_ParameterUtil.urlEncode(this.getParameters);
		var result = this.url;
		if(query != null) result += (result.indexOf("?") == -1?"?":"&") + query;
		return result;
	}
};
var yloader_valueObject_Response = function(success,data,status,statusText,headers) {
	this.success = success;
	this.data = data;
	this.status = status;
	this.statusText = statusText;
	this.headers = headers;
};
yloader_valueObject_Response.__name__ = true;
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.__name__ = true;
Array.__name__ = true;
msignal_SlotList.NIL = new msignal_SlotList(null,null);
Root.displayName = "Root";
utils_Common.Url = "http://localhost:8888/images.json";
view_ImageCollection.displayName = "ImageCollection";
view_ImageListItemElement.displayName = "ImageListItemElement";
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=index.js.map