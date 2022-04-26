/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let dom = {
	selectRoomType: document.getElementById('selectType'),
	nav: document.getElementById('nav'),
	main: document.getElementById('main'),
	loginError: document.getElementById('loginError'),
	login: document.getElementById('login'),
	loginForm: document.getElementById('loginForm'),
	response: document.getElementById('response'),
	totalCost: document.getElementById('totalCost'),
	roomType: document.getElementById('roomType'),
	availableRooms: document.getElementById('availableRooms'),
	form: document.getElementById('form'),
	calendar: document.getElementById('select'),
	dashboard: document.getElementById('dashboard'),
	bookingsContainer: document.getElementById('bookingsContainer'),
	headerTitle: document.getElementById('navTitle'),
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _booking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);



 class Hotel {
	constructor(customers, rooms, bookings) {
		this.bookings = this.saveBookings(bookings);
		this.rooms = rooms;
		this.customers = this.collectCustomerData(customers);
		this.currentUser;
		this.availableRooms;
	}

	checkAvailability(date) {
		this.availableRooms = this.rooms;
		let conflicts = this.bookings.filter((booking) => {
			return booking.date === date.split('-').join('/')
		})
		let checkRooms = (room) => {
			return conflicts.reduce((acc, conflict) => {
				if(conflict.roomNumber === room.number) {
					acc = false
				} 
				return acc
			}, true)
		}
		this.availableRooms = this.availableRooms.filter((room) => checkRooms(room))
		return this.availableRooms
	}

	// sortRoomsByDate() {

	// }

	saveBookings(bookings) {
		return bookings.map((booking) => {
			return new _booking__WEBPACK_IMPORTED_MODULE_0__["default"](booking)
		})
	}

	collectCustomerData(customers) {
		return customers.map((customer) => {
			let newCustomer = new _customer__WEBPACK_IMPORTED_MODULE_1__["default"](customer)
			newCustomer.getCurrentBookings(this.bookings, this.rooms)
			return newCustomer
		})
	}

	checkLoginInfo(username, password) {
		let getId = (input) => {
			return input.split('').filter((ele) => !isNaN(ele)).join('')
		}
		let checkUsername = (name) => {
			return this.customers.find((customer) => customer.id === parseInt(getId(name)))}

		if(password === 'overlook2021' && checkUsername(username)) {
			return checkUsername(username)
		} else {
			return 'Invalid login credentials, Please check your username and password.'
		}
	}

	loginUser(user) {
		this.currentUser = this.customers.find((customer) => {
			return customer.id === user.id
		})
	}

	filterRoomsByType(type) {
		let roomsByType = this.availableRooms
		if(type) {
			roomsByType = this.availableRooms.filter((room) => room.roomType === type)
		}
		return roomsByType
	}



};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hotel);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _room__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


class Booking {
	constructor(bookingData) {
		this.id = bookingData.id;
		this.userID = bookingData.userID;
		this.date = bookingData.date;
		this.roomNumber = bookingData.roomNumber;
		this.roomInfo;
	}

	getRoomInfo(rooms) {
		let room = rooms.find((room) => room.number === this.roomNumber)
		this.roomInfo = new _room__WEBPACK_IMPORTED_MODULE_0__["default"](room)
	}

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Booking);

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Room {
	constructor(room) {
		this.roomNumber = room.number;
		this.roomType = room.roomType;
		this.hasBidet = room.bidet;
		this.bedSize = room.bedSize;
		this.numberOfBeds = room.numBeds;
		this.costPerNight = room.costPerNight;
	}

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Room);

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _booking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
let dayjs = __webpack_require__(6);


class Customer {
	constructor (customer) {
		this.id = customer.id;
		this.name = customer.name;
		this.bookings = [];
	}

	getCurrentBookings(bookings, rooms) {
		this.bookings = bookings.filter((booking) => booking.userID === this.id)
		this.bookings.forEach(booking => {
			booking.getRoomInfo(rooms)
		})
	}

	calculateTotalExpenditures() {
		return this.bookings.reduce((acc, booking) => {
			acc += booking.roomInfo.costPerNight
			return acc
		}, 0)
	}

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Customer);


/***/ }),
/* 6 */
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",D={};D[v]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(v=i),i||!r&&v},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var v=this.$locale().weekStart||0,D=(y<v?y+7:y)-v;return $(r?m-D:m+(6-D),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,v=O.m(this,M);return v=(l={},l[c]=v/12,l[f]=v,l[h]=v/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?v:O.a(v)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[v],w.Ls=D,w.p={},w}));

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 9 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_clouds_with_trees_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _images_trees_background_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _images_lodge_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var _images_cabin_in_woods_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
// Imports







var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_clouds_with_trees_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_trees_background_jpg__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_lodge_jpg__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_cabin_in_woods_jpg__WEBPACK_IMPORTED_MODULE_6__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "nav {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n  height: 10vh;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 1.5em;\n}\n\n* {\n  font-family: \"Fredoka One\", regular;\n  margin: 0;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  grid-template-areas: \"overlap\";\n  grid-gap: 2px;\n}\n\n.login {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n}\n.login section {\n  opacity: 80%;\n  border-radius: 15px;\n  justify-self: center;\n  align-self: center;\n  place-self: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 100px 1fr;\n  background: #508991;\n  height: 400px;\n  width: 600px;\n}\n.login section h1 {\n  font-size: 40px;\n  align-self: center;\n  justify-self: center;\n}\n.login section form {\n  justify-self: center;\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n}\n.login section form button {\n  height: 30px;\n  width: 100px;\n  background: #172A3A;\n  background-size: cover;\n  color: rgb(208, 205, 205);\n}\n.login section form button:hover {\n  background: #09BC8A;\n  color: black;\n}\n.login section form div:nth-child(1) {\n  grid-row-start: 1;\n  justify-self: center;\n  align-self: end;\n}\n.login section form div:nth-child(2) {\n  grid-row-start: 2;\n  justify-self: center;\n  align-self: center;\n}\n.login section form div:nth-child(3) {\n  grid-row-start: 4;\n  justify-self: center;\n  align-self: start;\n}\n.login section form legend {\n  color: red;\n  grid-row-start: 3;\n  justify-self: center;\n  align-self: center;\n}\n\nmain {\n  margin: 2px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n  opacity: 90%;\n  height: 90vh;\n}\nmain .dashboard {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 0.5fr 1fr;\n  grid-template-rows: 0.1fr 0.1fr 1fr;\n  grid-gap: 20px;\n}\nmain .dashboard .sidebar {\n  height: 100%;\n  width: 100%;\n  grid-row-start: 1;\n  grid-row-end: span 3;\n  grid-column-start: 3;\n}\nmain .dashboard .sidebar .add-booking-form-container {\n  height: 20%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n}\nmain .dashboard .sidebar .add-booking-form-container div {\n  place-self: center;\n}\nmain .dashboard .sidebar .add-booking-form-container form {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n}\nmain .dashboard .sidebar .add-booking-form-container form h2 {\n  justify-self: center;\n  align-self: center;\n}\nmain .dashboard .sidebar .add-booking-form-container form .roomtype, main .dashboard .sidebar .add-booking-form-container form .calendar {\n  align-self: center;\n  justify-self: start;\n}\nmain .dashboard .sidebar .available-rooms {\n  height: 80%;\n  width: 100%;\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-auto-rows: minmax(250px, 1fr);\n  overflow: auto;\n  grid-gap: 5px;\n}\nmain .dashboard .sidebar .available-rooms .booking {\n  border: #508991;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: cover;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 40px;\n}\nmain .dashboard .sidebar .available-rooms .booking .booking-date {\n  border-radius: 5px;\n  background: #508991;\n  opacity: 90%;\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nmain .dashboard .sidebar .available-rooms .booking h3 {\n  text-align: center;\n}\nmain .dashboard .sidebar .available-rooms .booking ul {\n  align-self: center;\n  background: #508991;\n  background-size: cover;\n  opacity: 90%;\n  align-items: start;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  list-style-type: none;\n}\nmain .dashboard .sidebar .available-rooms .booking button {\n  background: #172A3A;\n  background-size: cover;\n  color: rgb(208, 205, 205);\n}\nmain .dashboard .sidebar .available-rooms .booking button:hover {\n  background: #09BC8A;\n  color: black;\n}\nmain .dashboard .current-bookings-header {\n  display: flex;\n  text-align: center;\n  justify-content: space-around;\n  align-items: center;\n  grid-column-start: 1;\n  grid-column-end: span 2;\n  grid-row-start: 1;\n}\nmain .dashboard .bookings-container {\n  grid-column: 1/span 2;\n  grid-row: 2/span 2;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-auto-rows: minmax(200px, auto);\n  grid-gap: 5px;\n  overflow: auto;\n}\nmain .dashboard .bookings-container .booking {\n  border: #508991;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: cover;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.2fr 1fr;\n}\nmain .dashboard .bookings-container .booking .booking-date {\n  border-radius: 5px;\n  background: #508991;\n  opacity: 90%;\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nmain .dashboard .bookings-container .booking h3 {\n  text-align: center;\n}\nmain .dashboard .bookings-container .booking ul {\n  align-self: center;\n  background: #508991;\n  background-size: cover;\n  opacity: 90%;\n  align-items: start;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  list-style-type: none;\n}\nmain .dashboard .bookings-container .booking button {\n  background: #172A3A;\n  background-size: cover;\n  color: rgb(208, 205, 205);\n}\nmain .dashboard .bookings-container .booking button:hover {\n  background: #09BC8A;\n  color: black;\n}\n\n.total-cost {\n  font-size: 25px;\n}\n\n.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/css/_nav.scss","webpack://./src/css/styles.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_mixins.scss"],"names":[],"mappings":"AAAA;EACC,yDAAA;EACA,2BAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,gBAAA;ACCD;;AANA;EACC,mCAAA;EACA,SAAA;AASD;;AADA;EACC,aAAA;EACA,aAAA;EACA,0BAAA;EACA,uBAAA;EACA,8BAAA;EACA,aAAA;AAID;;AADA;EACC,mDAAA;EACA,sBAAA;EACA,aAAA;EACA,aAAA;EACA,0BAAA;EACA,uBAAA;AAID;AAHC;EACC,YAAA;EACA,mBAAA;EACA,oBAAA;EACA,kBAAA;EACA,kBAAA;EACA,aAAA;EACA,0BAAA;EACA,6BAAA;EACA,mBCtCO;EDuCP,aAAA;EACA,YAAA;AAKF;AAJE;EACC,eAAA;EACA,kBAAA;EACA,oBAAA;AAMH;AAJE;EACC,oBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,0BAAA;EACA,mCAAA;AAMH;AALG;EACC,YAAA;EACA,YAAA;EEhDH,mBDNQ;ECOR,sBAAA;EACA,yBAAA;AFwDD;AEpDC;EACC,mBDXO;ECYP,YAAA;AFsDF;AAVG;EACC,iBAAA;EACA,oBAAA;EACA,eAAA;AAYJ;AAVG;EACC,iBAAA;EACA,oBAAA;EACA,kBAAA;AAYJ;AAVG;EACC,iBAAA;EACA,oBAAA;EACA,iBAAA;AAYJ;AAVG;EACC,UAAA;EACA,iBAAA;EACA,oBAAA;EACA,kBAAA;AAYJ;;AANA;EACC,WAAA;EACA,yDAAA;EACA,sBAAA;EACA,YAAA;EACA,YAAA;AASD;AARC;EACC,YAAA;EACA,aAAA;EACA,oCAAA;EACA,mCAAA;EACA,cAAA;AAUF;AATE;EACC,YAAA;EACA,WAAA;EACA,iBAAA;EACA,oBAAA;EACA,oBAAA;AAWH;AAVG;EACC,WAAA;EACA,aAAA;EACA,8BAAA;EACA,uBAAA;AAYJ;AAXI;EACC,kBAAA;AAaL;AAXI;EACC,aAAA;EACA,0BAAA;EACA,+BAAA;AAaL;AAZK;EACC,oBAAA;EACA,kBAAA;AAcN;AAZK;EACC,kBAAA;EACA,mBAAA;AAcN;AAVG;EACC,WAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,4DAAA;EACA,kCAAA;EACA,cAAA;EACA,aAAA;AAYJ;AEpHA;EACE,eD7BO;ECoBR,yDAAA;EACA,sBAAA;EACA,aAAA;EACA,0BAAA;EACA,4BF6GuB;AAmBxB;AEzHE;EACC,kBAAA;EACA,mBDjCM;ECkCN,YAAA;EACA,sBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AF2HH;AEzHE;EACC,kBAAA;AF2HH;AEzHE;EACC,kBAAA;EAWF,mBDvDQ;ECwDR,sBAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,qBAAA;AFiHD;AEhIE;EAxCD,mBDNQ;ECOR,sBAAA;EACA,yBAAA;AF2KD;AEvKC;EACC,mBDXO;ECYP,YAAA;AFyKF;AAhDE;EACC,aAAA;EACA,kBAAA;EACA,6BAAA;EACA,mBAAA;EACA,oBAAA;EACA,uBAAA;EACA,iBAAA;AAkDH;AAhDE;EACC,qBAAA;EACA,kBAAA;EACA,aAAA;EACA,2DAAA;EACA,mCAAA;EACA,aAAA;EACA,cAAA;AAkDH;AE9KA;EACE,eD7BO;ECoBR,yDAAA;EACA,sBAAA;EACA,aAAA;EACA,0BAAA;EACA,6BFiIsB;AAyDvB;AEnLE;EACC,kBAAA;EACA,mBDjCM;ECkCN,YAAA;EACA,sBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AFqLH;AEnLE;EACC,kBAAA;AFqLH;AEnLE;EACC,kBAAA;EAWF,mBDvDQ;ECwDR,sBAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,qBAAA;AF2KD;AE1LE;EAxCD,mBDNQ;ECOR,sBAAA;EACA,yBAAA;AFqOD;AEjOC;EACC,mBDXO;ECYP,YAAA;AFmOF;;AApFA;EACC,eAAA;AAuFD;;AApFA;EACC,aAAA;AAuFD","sourcesContent":["nav {\n\tbackground-image: url('../images/clouds-with-trees.jpg');\n\tbackground-position: center;\n\tbackground-size: cover;\n\theight: 10vh;\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tfont-size: 1.5em;\n}","@import './variables';\n@import './nav';\n@import './mixins';\n\n* {\n\tfont-family: 'Fredoka One', regular;\n\tmargin: 0;\n}\n\n\n\n\n\n\nbody {\n\theight: 100vh;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-template-rows: 1fr;\n\tgrid-template-areas: 'overlap';\n\tgrid-gap: 2px;\n}\n\n.login {\n\tbackground: url('../images/trees-background.jpg');\n\tbackground-size: cover;\n\theight: 100vh;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-template-rows: 1fr;\n\tsection {\n\t\topacity: 80%;\n\t\tborder-radius: 15px;\n\t\tjustify-self: center;\n\t\talign-self: center;\n\t\tplace-self: center;\n\t\tdisplay: grid; \n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 100px 1fr;\n\t\tbackground: $color2;\n\t\theight: 400px;\n\t\twidth: 600px;\n\t\th1 {\n\t\t\tfont-size: 40px;\n\t\t\talign-self: center;\n\t\t\tjustify-self: center;\n\t\t}\n\t\tform {\n\t\t\tjustify-self: center;\n\t\t\theight: 100%;\n\t\t\twidth: 100%;\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: 1fr;\n\t\t\tgrid-template-rows: 1fr 1fr 1fr 1fr;\n\t\t\tbutton {\n\t\t\t\theight: 30px;\n\t\t\t\twidth: 100px;\n\t\t\t\t@include button();\n\t\t\t\t}\n\t\t\t\t@include hover();\n\t\t\tdiv:nth-child(1) {\n\t\t\t\tgrid-row-start: 1;\n\t\t\t\tjustify-self: center;\n\t\t\t\talign-self: end;\n\t\t\t}\n\t\t\tdiv:nth-child(2) {\n\t\t\t\tgrid-row-start: 2;\n\t\t\t\tjustify-self: center;\n\t\t\t\talign-self: center;\n\t\t\t}\n\t\t\tdiv:nth-child(3) {\n\t\t\t\tgrid-row-start: 4;\n\t\t\t\tjustify-self: center;\n\t\t\t\talign-self: start;\n\t\t\t}\n\t\t\tlegend {\n\t\t\t\tcolor: red;\n\t\t\t\tgrid-row-start: 3;\n\t\t\t\tjustify-self: center;\n\t\t\t\talign-self: center;\n\t\t\t}\n\t\t}\n\t}\n}\n\nmain {\n\tmargin: 2px;\n\tbackground-image: url('../images/lodge.jpg');\n\tbackground-size: cover;\n\topacity: 90%;\n\theight: 90vh;\n\t.dashboard {\n\t\theight: 100%;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr .5fr 1fr;\n\t\tgrid-template-rows: .1fr .1fr 1fr;\n\t\tgrid-gap: 20px;\n\t\t.sidebar {\n\t\t\theight: 100%;\n\t\t\twidth: 100%;\n\t\t\tgrid-row-start: 1;\n\t\t\tgrid-row-end: span 3;\n\t\t\tgrid-column-start: 3;\n\t\t\t.add-booking-form-container {\n\t\t\t\theight: 20%;\n\t\t\t\tdisplay: grid;\n\t\t\t\tgrid-template-columns: 1fr 1fr;\n\t\t\t\tgrid-template-rows: 1fr;\n\t\t\t\tdiv {\n\t\t\t\t\tplace-self: center;\n\t\t\t\t}\n\t\t\t\tform {\n\t\t\t\t\tdisplay: grid;\n\t\t\t\t\tgrid-template-columns: 1fr;\n\t\t\t\t\tgrid-template-rows: 1fr 1fr 1fr;\n\t\t\t\t\th2 {\n\t\t\t\t\t\tjustify-self: center;\n\t\t\t\t\t\talign-self: center;\n\t\t\t\t\t}\n\t\t\t\t\t.roomtype, .calendar {\n\t\t\t\t\t\talign-self: center;\n\t\t\t\t\t\tjustify-self: start;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t.available-rooms {\n\t\t\t\theight: 80%;\n\t\t\t\twidth: 100%;\n\t\t\t\tdisplay: grid;\n\t\t\t\tjustify-content: center;\n\t\t\t\tgrid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n\t\t\t\tgrid-auto-rows: minmax(250px, 1fr);\n\t\t\t\toverflow: auto;\n\t\t\t\tgrid-gap: 5px;\n\t\t\t\t@include bookingDiv((1fr 40px) );\n\t\t\t}\n\t\t}\n\t\t.current-bookings-header {\n\t\t\tdisplay: flex;\n\t\t\ttext-align: center;\n\t\t\tjustify-content: space-around;\n\t\t\talign-items: center;\n\t\t\tgrid-column-start: 1;\n\t\t\tgrid-column-end: span 2;\n\t\t\tgrid-row-start: 1;\n\t\t}\n\t\t.bookings-container {\n\t\t\tgrid-column: 1 / span 2;\n\t\t\tgrid-row: 2 / span 2;\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n\t\t\tgrid-auto-rows: minmax(200px, auto);\n\t\t\tgrid-gap: 5px;\n\t\t\toverflow: auto;\n\t\t\t@include bookingDiv((.2fr 1fr) );\n\t\t}\n\t}\n}\n\n.total-cost {\n\tfont-size: 25px;\n}\n\n.hidden {\n\tdisplay: none;\n}\n","$color1: #75DDDD;\n$color2: #508991;\n$color3: #172A3A;\n$color4: #004346;\n$color5: #09BC8A;","@mixin grid() {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-template-rows: 1fr;\n\tgrid-template-areas: 'overlap';\n}\n\n@mixin button() {\n\tbackground: $color3;\n\tbackground-size: cover;\n\tcolor: rgb(208, 205, 205);\n}\n\n@mixin hover() {\n\tbutton:hover {\n\t\tbackground: $color5;\n\t\tcolor: black;\n\t}\n}\n\n@mixin booking($rows) {\n\tbackground-image: url('../images/cabin-in-woods.jpg');\n\tbackground-size: cover;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-template-rows: $rows;\n}\n\n@mixin bookingDiv($rows ) {\n.booking {\n\t\tborder: $color2;\n\t\t@include booking($rows);\n\t\t.booking-date {\n\t\t\tborder-radius: 5px;\n\t\t\tbackground: $color2;\n\t\t\topacity: 90%;\n\t\t\tbackground-size: cover;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t}\n\t\th3 {\n\t\t\ttext-align: center;\n\t\t}\n\t\tul {\n\t\t\talign-self: center;\n\t\t\t@include list();\n\t\t} \n\t\tbutton {\n\t\t@include button();\n\t\t}\n\t\t@include hover();\n\t}\n}\n\n@mixin list() {\n\tbackground: $color2;\n\tbackground-size: cover;\n\topacity: 90%;\n\talign-items: start;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tlist-style-type: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 10 */
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 11 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 12 */
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/clouds-with-trees.jpg");

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/trees-background.jpg");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/lodge.jpg");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/cabin-in-woods.jpg");

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// ---- Get Request ----

let getData = (dataset) => fetch(`http://localhost:3001/api/v1/${dataset}`).then(res => res.json()).catch(error => console.log(error));


let getBookings = () => fetch('http://localhost:3001/api/v1/bookings').then(res => res.json()).catch(error => console.log(error))


let getSpecificCustomer = (id) => fetch(`http://localhost:3001/api/v1/customers/${id}`).then(res => res.json()).catch(error => console.log(error))


// ---- Post Request ----

let addBooking = (bookingData) => fetch('http://localhost:3001/api/v1/bookings', {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify(bookingData)
}).then(res => {
	if(!res.ok) {
		throw new Error('Unable to process your post request')
	} else {
		return res.json()
	}
}).catch(error => console.log(error))

// ---- Delete Request ----

let deleteSingleBooking = (id) => fetch(`http://localhost:3001/api/v1/bookings/${id}`, {
	method: 'DELETE',
	headers: { 'Content-Type': 'application/json'},
	body: JSON.stringify(id)
}).then(res => {
	if(!res.ok) {
		throw new Error('Unable to process your delete request')
	} else {
		return res.json()
	}
}).catch(error => console.log(error))

// ---- Promise All ----

let apiCalls = Promise.all([getData('customers'), getData('rooms'), getData('bookings'), addBooking, getSpecificCustomer, deleteSingleBooking, getBookings]);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiCalls);



/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _images_trees_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);

let daysjs = __webpack_require__(6)
;

const domUpdates = {
	renderPage (customer) {
		this.toggleHiddenElements();
		this.renderNav(customer)
		this.renderCurrentBookings(customer)
		this.renderSideBar(customer)
		this.renderTotalExpenditures(customer)
	},

	toggleHiddenElements() {
		_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].main.classList.remove('hidden')
		_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].login.classList.add('hidden')
		_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].dashboard.classList.remove('hidden')
		_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].nav.classList.remove('hidden')
	},

	renderUserError(message) {
		_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].loginError.innerText = `${message}`
	},

	renderNav(customer) {
		_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].headerTitle.innerText = `Welcome, ${customer.name}!`
	},

	renderDashboard(customer, rooms) {
		this.renderAvailableRooms(rooms)
		this.renderCurrentBookings(customer)
		this.renderTotalExpenditures(customer)
	},

	renderTotalExpenditures(customer) {
		_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].totalCost.innerText = `Total Expenditures: $${Math.round(customer.calculateTotalExpenditures())}`
	},

	renderCurrentBookings(customer) {
		_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].bookingsContainer.innerHTML = ''
		customer.bookings.forEach(booking => {
			_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].bookingsContainer.innerHTML += `
				<div class="booking">
				<div class="booking-date"><h3>Date: ${booking.date}</h3></div>
					<ul>
						<li>Room Number: ${booking.roomNumber}</li>
						<li>${booking.roomInfo.roomType.toUpperCase()}</li>
						<li>Bed Size: ${booking.roomInfo.bedSize.toUpperCase()}</li>
						<li>Cost Per Night: ${booking.roomInfo.costPerNight}</li>
					</ul>
				</div>`
		})
	},
	renderConfirmation(response, e) {
		_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].response.innerText = response.message.replace('posted', 'booked')
		e.target.style.background = 'rgb(101,184,88)'
		e.target.style.color = 'black'
	},

	renderSideBar() {
		_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].calendar.value = `${daysjs(Date.now()).format('YYYY-MM-DD')}`
		_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].calendar.min = `${daysjs(Date.now()).format('YYYY-MM-DD')}`
	},

	renderFuriousApology() {
		_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].response.innerText = "We are so sorry, but there are no rooms available meeting that criteria!"
	},

	renderForm(rooms) {
		_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].roomType.classList.remove('hidden')
		_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].response.innerText = `There are ${rooms.length} available rooms, which match this criteria.`
	},

	renderAvailableRooms(rooms) {
		if(!rooms.length) {
			this.renderFuriousApology()
		} else {
			_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].response.innerText = ''
			this.renderForm(rooms)
		}
		_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].availableRooms.innerHTML = ''
		let hasBidet = (room) => {
			if(room.bidet) {
				return `<li>Bidet Included!</li>`
			} else {
				return `<li class="hidden">Bidet Included!</li>`
			}
		}
		rooms.forEach((room) => {
			_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].availableRooms.innerHTML += `
			<div class="booking">
				<ul>
					<li>Room Number: ${room.number}</li>
					<li>Room Type: ${room.roomType.toUpperCase()}</li>
					<li>Bed Size: ${room.bedSize.toUpperCase()}</li>
					${hasBidet(room)}
					<li>Cost Per Night: ${room.costPerNight}</li>
				</ul>
				<button data-bookingid="addBooking" id=${room.number}>BOOK</button>
			</div>`
		})
	},
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domUpdates);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _classes_hotel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _images_trees_background_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
// ---- Imports ----







// ---- API calls ----
let getUser = (id) => {
	return _apiCalls__WEBPACK_IMPORTED_MODULE_3__["default"].then(call => {
			let getUserData = call[4]
		return getUserData(id)
	})
}	

_apiCalls__WEBPACK_IMPORTED_MODULE_3__["default"].then(call => {
		let customers = call[0].customers;
		let rooms = call[1].rooms;
		let bookings = call[2].bookings;
		let addBooking = call[3];
		let getBookings = call[6];
		loadData(customers, rooms, bookings, addBooking, getBookings);
	})

let loadData = (customers, rooms, bookings, addBooking, getBookings) => {
	let hotel = new _classes_hotel__WEBPACK_IMPORTED_MODULE_1__["default"](customers, rooms, bookings)
	createEventListeners(hotel, addBooking, getBookings)
}
	
// ---- Dom Elements ----

let createEventListeners = (hotel, addBooking, getBookings) => {
	_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].availableRooms.addEventListener('click', (e) => {
		handleAddBooking(e, hotel, addBooking, getBookings)
	});

	_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].form.addEventListener('input', (e) => {
		handleBookingForm(e, hotel)
	});

	_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].loginForm.addEventListener('submit', (e) => {
		e.preventDefault();
		submitUserInformation(hotel, addBooking, e);	
	});
}

// ---- Event Handlers ----

let getLoginInfo = (e) => {
	return Array.from(e.target, (input) => ({
		[input.name]: input.value
	})).filter((input) => {
		return Object.values(input).join('')		
	}).reduce((acc, input) => {
		acc[Object.keys(input).join('')] = Object.values(input).join('')
		return acc
	}, {})
}

let submitUserInformation = (hotel, addBooking, e) => {
	let loginInfo = getLoginInfo(e);
	let user = hotel.checkLoginInfo(loginInfo['user-name'], loginInfo.password)
	if(user !== 'Invalid login credentials, Please check your username and password.') {
		getUser(user.id).then((user) => {
			hotel.loginUser(user)
		}).then(() => {
				_domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].renderPage(hotel.currentUser, hotel, addBooking)
		}).catch((error) => console.log(error))
	} else {
		_domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].renderUserError(user)
	}
}

let handleAddBooking = (e, hotel, addBooking, getBookings) => {
	e.target.disabled = true;
	if(e.target.dataset.bookingid === 'addBooking') {
		let data = {
			"userID": hotel.currentUser.id,
			"date": `${_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].calendar.value.split('-').join('/')}`,
			"roomNumber": parseInt(e.target.id),
		} 
		addBooking(data).then(res => _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].renderConfirmation(res, e)).then(() => {
			let output = getBookings()
			return output
		}).then((data) => {
			let output = updateBookingData(data, hotel)
			setTimeout(() => {
				_domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].renderDashboard(hotel.currentUser, output)
			}, 1000)
		})
	}
}

let updateBookingData = (data, hotel) => {
	let output = hotel.saveBookings(data.bookings);
	hotel.bookings = output
	hotel.currentUser.getCurrentBookings(hotel.bookings, hotel.rooms);
	let rooms = hotel.checkAvailability(_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].calendar.value);
	rooms = hotel.filterRoomsByType(_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].selectRoomType.value)
	return rooms;
}


let handleBookingForm = (e, hotel) => {
	let output;
	if(e.target.name === "select-date") {
		output = hotel.checkAvailability(e.target.value)
		output = hotel.filterRoomsByType(_dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].selectRoomType.value)
		_domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].renderAvailableRooms(output)
	} else if(e.target.name === 'type') {
		output = hotel.filterRoomsByType(e.target.value)
		_domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].renderAvailableRooms(output)
	}
}



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map