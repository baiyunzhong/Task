!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.wangEditor = t()
}(this, function () {
    "use strict";

    function e(e) {
        var t = void 0;
        return t = document.createElement("div"), t.innerHTML = e, t.children
    }

    function t(e) {
        return !!e && (e instanceof HTMLCollection || e instanceof NodeList)
    }

    function n(e) {
        var n = document.querySelectorAll(e);
        return t(n) ? n : [n]
    }

    function i(o) {
        if (o) {
            if (o instanceof i) return o;
            this.selector = o;
            var A = o.nodeType, r = [];
            9 === A ? r = [o] : 1 === A ? r = [o] : t(o) || o instanceof Array ? r = o : "string" == typeof o && (o = o.replace("/\n/mg", "").trim(), r = 0 === o.indexOf("<") ? e(o) : n(o));
            var c = r.length;
            if (!c) return this;
            var a = void 0;
            for (a = 0; a < c; a++) this[a] = r[a];
            this.length = c
        }
    }

    function o(e) {
        return new i(e)
    }

    function A(e, t) {
        var n = void 0;
        for (n in e) if (e.hasOwnProperty(n) && !1 === t.call(e, n, e[n])) break
    }

    function r(e, t) {
        var n = void 0, i = void 0, o = e.length || 0;
        for (n = 0; n < o && (i = e[n], !1 !== t.call(e, i, n)); n++) ;
    }

    function c(e) {
        return e + Math.random().toString().slice(2)
    }

    function a(e) {
        return null == e ? "" : e.replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/"/gm, "&quot;").replace(/(\r\n|\r|\n)/g, "<br/>")
    }

    function s(e) {
        return "function" == typeof e
    }

    function l(e) {
        this.editor = e, this.$elem = o('<div class="w-e-menu">\n            <i class="w-e-icon-bold"></i>\n        </div>'), this.type = "click", this._active = !1
    }

    function d(e, t) {
        var n = this, i = e.editor;
        this.menu = e, this.opt = t;
        var A = o('<div class="w-e-droplist"></div>'), r = t.$title, c = void 0;
        r && (c = r.html(), c = O(i, c), r.html(c), r.addClass("w-e-dp-title"), A.append(r));
        var a = t.list || [], s = t.type || "list", l = t.onClick || $,
            d = o('<ul class="' + ("list" === s ? "w-e-list" : "w-e-block") + '"></ul>');
        A.append(d), a.forEach(function (e) {
            var t = e.$elem, A = t.html();
            A = O(i, A), t.html(A);
            var r = e.value, c = o('<li class="w-e-item"></li>');
            t && (c.append(t), d.append(c), c.on("click", function (e) {
                l(r), n.hideTimeoutId = setTimeout(function () {
                    n.hide()
                }, 0)
            }))
        }), A.on("mouseleave", function (e) {
            n.hideTimeoutId = setTimeout(function () {
                n.hide()
            }, 0)
        }), this.$container = A, this._rendered = !1, this._show = !1
    }

    function u(e) {
        var t = this;
        this.editor = e, this.$elem = o('<div class="w-e-menu"><i class="w-e-icon-header"></i></div>'), this.type = "droplist", this._active = !1, this.droplist = new d(this, {
            width: 100,
            $title: o("<p>设置标题</p>"),
            type: "list",
            list: [{$elem: o("<h1>H1</h1>"), value: "<h1>"}, {
                $elem: o("<h2>H2</h2>"),
                value: "<h2>"
            }, {$elem: o("<h3>H3</h3>"), value: "<h3>"}, {
                $elem: o("<h4>H4</h4>"),
                value: "<h4>"
            }, {$elem: o("<h5>H5</h5>"), value: "<h5>"}, {$elem: o("<p>正文</p>"), value: "<p>"}],
            onClick: function (e) {
                t._command(e)
            }
        })
    }

    function h(e) {
        var t = this;
        this.editor = e, this.$elem = o('<div class="w-e-menu"><i class="w-e-icon-text-heigh"></i></div>'), this.type = "droplist", this._active = !1, this.droplist = new d(this, {
            width: 160,
            $title: o("<p>字号</p>"),
            type: "list",
            list: [{
                $elem: o('<span style="font-size: x-small;">x-small</span>'),
                value: "1"
            }, {$elem: o('<span style="font-size: small;">small</span>'), value: "2"}, {
                $elem: o("<span>normal</span>"),
                value: "3"
            }, {
                $elem: o('<span style="font-size: large;">large</span>'),
                value: "4"
            }, {
                $elem: o('<span style="font-size: x-large;">x-large</span>'),
                value: "5"
            }, {$elem: o('<span style="font-size: xx-large;">xx-large</span>'), value: "6"}],
            onClick: function (e) {
                t._command(e)
            }
        })
    }

    function p(e) {
        var t = this;
        this.editor = e, this.$elem = o('<div class="w-e-menu"><i class="w-e-icon-font"></i></div>'), this.type = "droplist", this._active = !1;
        var n = e.config, i = n.fontNames || [];
        this.droplist = new d(this, {
            width: 100, $title: o("<p>字体</p>"), type: "list", list: i.map(function (e) {
                return {$elem: o('<span style="font-family: ' + e + ';">' + e + "</span>"), value: e}
            }), onClick: function (e) {
                t._command(e)
            }
        })
    }

    function f(e, t) {
        this.menu = e, this.opt = t
    }

    function m(e) {
        this.editor = e, this.$elem = o('<div class="w-e-menu"><i class="w-e-icon-link"></i></div>'), this.type = "panel", this._active = !1
    }

    function g(e) {
        this.editor = e, this.$elem = o('<div class="w-e-menu">\n            <i class="w-e-icon-italic"></i>\n        </div>'), this.type = "click", this._active = !1
    }

    function w(e) {
        this.editor = e, this.$elem = o('<div class="w-e-menu">\n            <i class="w-e-icon-redo"></i>\n        </div>'), this.type = "click", this._active = !1
    }

    function v(e) {
        this.editor = e, this.$elem = o('<div class="w-e-menu">\n            <i class="w-e-icon-strikethrough"></i>\n        </div>'), this.type = "click", this._active = !1
    }

    function E(e) {
        this.editor = e, this.$elem = o('<div class="w-e-menu">\n            <i class="w-e-icon-underline"></i>\n        </div>'), this.type = "click", this._active = !1
    }

    function b(e) {
        this.editor = e, this.$elem = o('<div class="w-e-menu">\n            <i class="w-e-icon-undo"></i>\n        </div>'), this.type = "click", this._active = !1
    }

    function B(e) {
        var t = this;
        this.editor = e, this.$elem = o('<div class="w-e-menu"><i class="w-e-icon-list2"></i></div>'), this.type = "droplist", this._active = !1, this.droplist = new d(this, {
            width: 120,
            $title: o("<p>设置列表</p>"),
            type: "list",
            list: [{
                $elem: o('<span><i class="w-e-icon-list-numbered"></i> 有序列表</span>'),
                value: "insertOrderedList"
            }, {$elem: o('<span><i class="w-e-icon-list2"></i> 无序列表</span>'), value: "insertUnorderedList"}],
            onClick: function (e) {
                t._command(e)
            }
        })
    }

    function y(e) {
        var t = this;
        this.editor = e, this.$elem = o('<div class="w-e-menu"><i class="w-e-icon-paragraph-left"></i></div>'), this.type = "droplist", this._active = !1, this.droplist = new d(this, {
            width: 100,
            $title: o("<p>对齐方式</p>"),
            type: "list",
            list: [{
                $elem: o('<span><i class="w-e-icon-paragraph-left"></i> 靠左</span>'),
                value: "justifyLeft"
            }, {
                $elem: o('<span><i class="w-e-icon-paragraph-center"></i> 居中</span>'),
                value: "justifyCenter"
            }, {$elem: o('<span><i class="w-e-icon-paragraph-right"></i> 靠右</span>'), value: "justifyRight"}],
            onClick: function (e) {
                t._command(e)
            }
        })
    }

    function C(e) {
        var t = this;
        this.editor = e, this.$elem = o('<div class="w-e-menu"><i class="w-e-icon-pencil2"></i></div>'), this.type = "droplist";
        var n = e.config, i = n.colors || [];
        this._active = !1, this.droplist = new d(this, {
            width: 120,
            $title: o("<p>文字颜色</p>"),
            type: "inline-block",
            list: i.map(function (e) {
                return {$elem: o('<i style="color:' + e + ';" class="w-e-icon-pencil2"></i>'), value: e}
            }),
            onClick: function (e) {
                t._command(e)
            }
        })
    }

    function x(e) {
        var t = this;
        this.editor = e, this.$elem = o('<div class="w-e-menu"><i class="w-e-icon-paint-brush"></i></div>'), this.type = "droplist";
        var n = e.config, i = n.colors || [];
        this._active = !1, this.droplist = new d(this, {
            width: 120,
            $title: o("<p>背景色</p>"),
            type: "inline-block",
            list: i.map(function (e) {
                return {$elem: o('<i style="color:' + e + ';" class="w-e-icon-paint-brush"></i>'), value: e}
            }),
            onClick: function (e) {
                t._command(e)
            }
        })
    }

    function I(e) {
        this.editor = e, this.$elem = o('<div class="w-e-menu">\n            <i class="w-e-icon-quotes-left"></i>\n        </div>'), this.type = "click", this._active = !1
    }

    function Q(e) {
        this.editor = e, this.$elem = o('<div class="w-e-menu">\n            <i class="w-e-icon-terminal"></i>\n        </div>'), this.type = "panel", this._active = !1
    }

    function M(e) {
        this.editor = e, this.$elem = o('<div class="w-e-menu">\n            <i class="w-e-icon-happy"></i>\n        </div>'), this.type = "panel", this._active = !1
    }

    function S(e) {
        this.editor = e, this.$elem = o('<div class="w-e-menu"><i class="w-e-icon-table2"></i></div>'), this.type = "panel", this._active = !1
    }

    function k(e) {
        this.editor = e, this.$elem = o('<div class="w-e-menu"><i class="w-e-icon-play"></i></div>'), this.type = "panel", this._active = !1
    }

    function D(e) {
        this.editor = e;
        var t = c("w-e-img");
        this.$elem = o('<div class="w-e-menu" id="' + t + '"><i class="w-e-icon-image"></i></div>'), e.imgMenuId = t, this.type = "panel", this._active = !1
    }

    function _(e) {
        this.editor = e, this.menus = {}
    }

    function N(e) {
        var t = e.clipboardData || e.originalEvent && e.originalEvent.clipboardData, n = void 0;
        return n = null == t ? window.clipboardData && window.clipboardData.getData("text") : t.getData("text/plain"), a(n)
    }

    function F(e, t, n) {
        var i = e.clipboardData || e.originalEvent && e.originalEvent.clipboardData, o = void 0, A = void 0;
        if (null == i ? o = window.clipboardData && window.clipboardData.getData("text") : (o = i.getData("text/plain"), A = i.getData("text/html")), !A && o && (A = "<p>" + a(o) + "</p>"), A) {
            var r = A.split("</html>");
            return 2 === r.length && (A = r[0]), A = A.replace(/<(meta|script|link).+?>/gim, ""), A = A.replace(/<!--.*?-->/gm, ""), A = A.replace(/\s?data-.+?=('|").+?('|")/gim, ""), n && (A = A.replace(/<img.+?>/gim, "")), A = t ? A.replace(/\s?(class|style)=('|").*?('|")/gim, "") : A.replace(/\s?class=('|").*?('|")/gim, "")
        }
    }

    function T(e) {
        var t = [];
        if (N(e)) return t;
        var n = e.clipboardData || e.originalEvent && e.originalEvent.clipboardData || {}, i = n.items;
        return i ? (A(i, function (e, n) {
            var i = n.type;
            /image/i.test(i) && t.push(n.getAsFile())
        }), t) : t
    }

    function R(e) {
        var t = [];
        return (e.childNodes() || []).forEach(function (e) {
            var n = void 0, i = e.nodeType;
            if (3 === i && (n = e.textContent, n = a(n)), 1 === i) {
                n = {}, n.tag = e.nodeName.toLowerCase();
                for (var A = [], r = e.attributes || {}, c = r.length || 0, s = 0; s < c; s++) {
                    var l = r[s];
                    A.push({name: l.name, value: l.value})
                }
                n.attrs = A, n.children = R(o(e))
            }
            t.push(n)
        }), t
    }

    function U(e) {
        this.editor = e
    }

    function Y(e) {
        this.editor = e
    }

    function P(e) {
        this.editor = e, this._currentRange = null
    }

    function H(e) {
        this.editor = e, this._time = 0, this._isShow = !1, this._isRender = !1, this._timeoutId = 0, this.$textContainer = e.$textContainerElem, this.$bar = o('<div class="w-e-progress"></div>')
    }

    function L(e) {
        this.editor = e
    }

    function j(e, t) {
        if (null == e) throw new Error("错误：初始化编辑器时候未传入任何参数，请查阅文档");
        this.id = "wangEditor-" + W++, this.toolbarSelector = e, this.textSelector = t, this.customConfig = {}
    }

    var G = [];
    i.prototype = {
        constructor: i, forEach: function (e) {
            var t = void 0;
            for (t = 0; t < this.length; t++) {
                var n = this[t];
                if (!1 === e.call(n, n, t)) break
            }
            return this
        }, clone: function (e) {
            var t = [];
            return this.forEach(function (n) {
                t.push(n.cloneNode(!!e))
            }), o(t)
        }, get: function (e) {
            var t = this.length;
            return e >= t && (e %= t), o(this[e])
        }, first: function () {
            return this.get(0)
        }, last: function () {
            var e = this.length;
            return this.get(e - 1)
        }, on: function (e, t, n) {
            n || (n = t, t = null);
            var i = [];
            return i = e.split(/\s+/), this.forEach(function (e) {
                i.forEach(function (i) {
                    if (i) {
                        if (G.push({elem: e, type: i, fn: n}), !t) return void e.addEventListener(i, n);
                        e.addEventListener(i, function (e) {
                            var i = e.target;
                            i.matches(t) && n.call(i, e)
                        })
                    }
                })
            })
        }, off: function (e, t) {
            return this.forEach(function (n) {
                n.removeEventListener(e, t)
            })
        }, attr: function (e, t) {
            return null == t ? this[0].getAttribute(e) : this.forEach(function (n) {
                n.setAttribute(e, t)
            })
        }, addClass: function (e) {
            return e ? this.forEach(function (t) {
                var n = void 0;
                t.className ? (n = t.className.split(/\s/), n = n.filter(function (e) {
                    return !!e.trim()
                }), n.indexOf(e) < 0 && n.push(e), t.className = n.join(" ")) : t.className = e
            }) : this
        }, removeClass: function (e) {
            return e ? this.forEach(function (t) {
                var n = void 0;
                t.className && (n = t.className.split(/\s/), n = n.filter(function (t) {
                    return !(!(t = t.trim()) || t === e)
                }), t.className = n.join(" "))
            }) : this
        }, css: function (e, t) {
            var n = e + ":" + t + ";";
            return this.forEach(function (t) {
                var i = (t.getAttribute("style") || "").trim(), o = void 0, A = [];
                i ? (o = i.split(";"), o.forEach(function (e) {
                    var t = e.split(":").map(function (e) {
                        return e.trim()
                    });
                    2 === t.length && A.push(t[0] + ":" + t[1])
                }), A = A.map(function (t) {
                    return 0 === t.indexOf(e) ? n : t
                }), A.indexOf(n) < 0 && A.push(n), t.setAttribute("style", A.join("; "))) : t.setAttribute("style", n)
            })
        }, show: function () {
            return this.css("display", "block")
        }, hide: function () {
            return this.css("display", "none")
        }, children: function () {
            var e = this[0];
            return e ? o(e.children) : null
        }, childNodes: function () {
            var e = this[0];
            return e ? o(e.childNodes) : null
        }, append: function (e) {
            return this.forEach(function (t) {
                e.forEach(function (e) {
                    t.appendChild(e)
                })
            })
        }, remove: function () {
            return this.forEach(function (e) {
                if (e.remove) e.remove(); else {
                    var t = e.parentElement;
                    t && t.removeChild(e)
                }
            })
        }, isContain: function (e) {
            var t = this[0], n = e[0];
            return t.contains(n)
        }, getSizeData: function () {
            return this[0].getBoundingClientRect()
        }, getNodeName: function () {
            return this[0].nodeName
        }, find: function (e) {
            return o(this[0].querySelectorAll(e))
        }, text: function (e) {
            return e ? this.forEach(function (t) {
                t.innerHTML = e
            }) : this[0].innerHTML.replace(/<.*?>/g, function () {
                return ""
            })
        }, html: function (e) {
            var t = this[0];
            return null == e ? t.innerHTML : (t.innerHTML = e, this)
        }, val: function () {
            return this[0].value.trim()
        }, focus: function () {
            return this.forEach(function (e) {
                e.focus()
            })
        }, parent: function () {
            return o(this[0].parentElement)
        }, parentUntil: function (e, t) {
            var n = document.querySelectorAll(e), i = n.length;
            if (!i) return null;
            var A = t || this[0];
            if ("BODY" === A.nodeName) return null;
            var r = A.parentElement, c = void 0;
            for (c = 0; c < i; c++) if (r === n[c]) return o(r);
            return this.parentUntil(e, r)
        }, equal: function (e) {
            return 1 === e.nodeType ? this[0] === e : this[0] === e[0]
        }, insertBefore: function (e) {
            var t = o(e), n = t[0];
            return n ? this.forEach(function (e) {
                n.parentNode.insertBefore(e, n)
            }) : this
        }, insertAfter: function (e) {
            var t = o(e), n = t[0];
            return n ? this.forEach(function (e) {
                var t = n.parentNode;
                t.lastChild === n ? t.appendChild(e) : t.insertBefore(e, n.nextSibling)
            }) : this
        }
    }, o.offAll = function () {
        G.forEach(function (e) {
            var t = e.elem, n = e.type, i = e.fn;
            t.removeEventListener(n, i)
        })
    };
    var z = {
        menus: ["head", "bold", "fontSize", "fontName", "italic", "underline", "strikeThrough", "foreColor", "backColor", "link", "list", "justify", "quote", "emoticon", "image", "table", "video", "code", "undo", "redo"],
        fontNames: ["宋体", "微软雅黑", "Arial", "Tahoma", "Verdana"],
        colors: ["#000000", "#eeece0", "#1c487f", "#4d80bf", "#c24f4a", "#8baa4a", "#7b5ba1", "#46acc8", "#f9963b", "#ffffff"],
        emotions: [{
            title: "默认",
            type: "image",
            content: [{
                alt: "[坏笑]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png"
            }, {
                alt: "[舔屏]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png"
            }, {alt: "[污]", src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/3c/pcmoren_wu_org.png"}]
        }, {
            title: "新浪",
            type: "image",
            content: [{
                src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/7a/shenshou_thumb.gif",
                alt: "[草泥马]"
            }, {
                src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/60/horse2_thumb.gif",
                alt: "[神马]"
            }, {src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/bc/fuyun_thumb.gif", alt: "[浮云]"}]
        }, {
            title: "emoji",
            type: "emoji",
            content: "😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😓 😪 😴 🙄 🤔 😬 🤐".split(/\s/)
        }],
        zIndex: 1e4,
        debug: !1,
        linkCheck: function (e, t) {
            return !0
        },
        linkImgCheck: function (e) {
            return !0
        },
        pasteFilterStyle: !0,
        pasteIgnoreImg: !1,
        pasteTextHandle: function (e) {
            return e
        },
        showLinkImg: !0,
        linkImgCallback: function (e) {
        },
        uploadImgMaxSize: 5242880,
        uploadImgShowBase64: !1,
        uploadFileName: "",
        uploadImgParams: {},
        uploadImgHeaders: {},
        withCredentials: !1,
        uploadImgTimeout: 1e4,
        uploadImgHooks: {
            before: function (e, t, n) {
            }, success: function (e, t, n) {
            }, fail: function (e, t, n) {
            }, error: function (e, t) {
            }, timeout: function (e, t) {
            }
        },
        qiniu: !1
    }, J = {
        _ua: navigator.userAgent, isWebkit: function () {
            return /webkit/i.test(this._ua)
        }, isIE: function () {
            return "ActiveXObject" in window
        }
    };
    l.prototype = {
        constructor: l, onClick: function (e) {
            var t = this.editor, n = t.selection.isSelectionEmpty();
            n && t.selection.createEmptyRange(), t.cmd.do("bold"), n && (t.selection.collapseRange(), t.selection.restoreSelection())
        }, tryChangeActive: function (e) {
            var t = this.editor, n = this.$elem;
            t.cmd.queryCommandState("bold") ? (this._active = !0, n.addClass("w-e-active")) : (this._active = !1, n.removeClass("w-e-active"))
        }
    };
    var O = function (e, t) {
        var n = e.config.langArgs || [], i = t;
        return n.forEach(function (e) {
            var t = e.reg, n = e.val;
            t.test(i) && (i = i.replace(t, function () {
                return n
            }))
        }), i
    }, $ = function () {
    };
    d.prototype = {
        constructor: d, show: function () {
            this.hideTimeoutId && clearTimeout(this.hideTimeoutId);
            var e = this.menu, t = e.$elem, n = this.$container;
            if (!this._show) {
                if (this._rendered) n.show(); else {
                    var i = t.getSizeData().height || 0, o = this.opt.width || 100;
                    n.css("margin-top", i + "px").css("width", o + "px"), t.append(n), this._rendered = !0
                }
                this._show = !0
            }
        }, hide: function () {
            this.showTimeoutId && clearTimeout(this.showTimeoutId);
            var e = this.$container;
            this._show && (e.hide(), this._show = !1)
        }
    }, u.prototype = {
        constructor: u, _command: function (e) {
            var t = this.editor, n = t.selection.getSelectionContainerElem();
            t.$textElem.equal(n) || t.cmd.do("formatBlock", e)
        }, tryChangeActive: function (e) {
            var t = this.editor, n = this.$elem, i = /^h/i, o = t.cmd.queryCommandValue("formatBlock");
            i.test(o) ? (this._active = !0, n.addClass("w-e-active")) : (this._active = !1, n.removeClass("w-e-active"))
        }
    }, h.prototype = {
        constructor: h, _command: function (e) {
            this.editor.cmd.do("fontSize", e)
        }
    }, p.prototype = {
        constructor: p, _command: function (e) {
            this.editor.cmd.do("fontName", e)
        }
    };
    var V = function () {
    }, K = [];
    f.prototype = {
        constructor: f, show: function () {
            var e = this, t = this.menu;
            if (!(K.indexOf(t) >= 0)) {
                var n = t.editor, i = o("body"), A = n.$textContainerElem, r = this.opt,
                    c = o('<div class="w-e-panel-container"></div>'), a = r.width || 300;
                c.css("width", a + "px").css("margin-left", (0 - a) / 2 + "px");
                var s = o('<i class="w-e-icon-close w-e-panel-close"></i>');
                c.append(s), s.on("click", function () {
                    e.hide()
                });
                var l = o('<ul class="w-e-panel-tab-title"></ul>'), d = o('<div class="w-e-panel-tab-content"></div>');
                c.append(l).append(d);
                var u = r.height;
                u && d.css("height", u + "px").css("overflow-y", "auto");
                var h = r.tabs || [], p = [], f = [];
                h.forEach(function (e, t) {
                    if (e) {
                        var i = e.title || "", A = e.tpl || "";
                        i = O(n, i), A = O(n, A);
                        var r = o('<li class="w-e-item">' + i + "</li>");
                        l.append(r);
                        var c = o(A);
                        d.append(c), r._index = t, p.push(r), f.push(c), 0 === t ? (r._active = !0, r.addClass("w-e-active")) : c.hide(), r.on("click", function (e) {
                            r._active || (p.forEach(function (e) {
                                e._active = !1, e.removeClass("w-e-active")
                            }), f.forEach(function (e) {
                                e.hide()
                            }), r._active = !0, r.addClass("w-e-active"), c.show())
                        })
                    }
                }), c.on("click", function (e) {
                    e.stopPropagation()
                }), i.on("click", function (t) {
                    e.hide()
                }), A.append(c), h.forEach(function (t, n) {
                    if (t) {
                        (t.events || []).forEach(function (t) {
                            var i = t.selector, o = t.type, A = t.fn || V;
                            f[n].find(i).on(o, function (t) {
                                t.stopPropagation(), A(t) && e.hide()
                            })
                        })
                    }
                });
                var m = c.find("input[type=text],textarea");
                m.length && m.get(0).focus(), this.$container = c, this._hideOtherPanels(), K.push(t)
            }
        }, hide: function () {
            var e = this.menu, t = this.$container;
            t && t.remove(), K = K.filter(function (t) {
                return t !== e
            })
        }, _hideOtherPanels: function () {
            K.length && K.forEach(function (e) {
                var t = e.panel || {};
                t.hide && t.hide()
            })
        }
    }, m.prototype = {
        constructor: m, onClick: function (e) {
            var t = this.editor, n = void 0;
            if (this._active) {
                if (!(n = t.selection.getSelectionContainerElem())) return;
                t.selection.createRangeByElem(n), t.selection.restoreSelection(), this._createPanel(n.text(), n.attr("href"))
            } else t.selection.isSelectionEmpty() ? this._createPanel("", "") : this._createPanel(t.selection.getSelectionText(), "")
        }, _createPanel: function (e, t) {
            var n = this, i = c("input-link"), A = c("input-text"), r = c("btn-ok"), a = c("btn-del"),
                s = this._active ? "inline-block" : "none", l = new f(this, {
                    width: 300,
                    tabs: [{
                        title: "链接",
                        tpl: '<div>\n                            <input id="' + A + '" type="text" class="block" value="' + e + '" placeholder="链接文字"/></td>\n                            <input id="' + i + '" type="text" class="block" value="' + t + '" placeholder="http://..."/></td>\n                            <div class="w-e-button-container">\n                                <button id="' + r + '" class="right">插入</button>\n                                <button id="' + a + '" class="gray right" style="display:' + s + '">删除链接</button>\n                            </div>\n                        </div>',
                        events: [{
                            selector: "#" + r, type: "click", fn: function () {
                                var e = o("#" + i), t = o("#" + A), r = e.val(), c = t.val();
                                return n._insertLink(c, r), !0
                            }
                        }, {
                            selector: "#" + a, type: "click", fn: function () {
                                return n._delLink(), !0
                            }
                        }]
                    }]
                });
            l.show(), this.panel = l
        }, _delLink: function () {
            if (this._active) {
                var e = this.editor;
                if (e.selection.getSelectionContainerElem()) {
                    var t = e.selection.getSelectionText();
                    e.cmd.do("insertHTML", "<span>" + t + "</span>")
                }
            }
        }, _insertLink: function (e, t) {
            var n = this.editor, i = n.config, o = i.linkCheck, A = !0;
            o && "function" == typeof o && (A = o(e, t)), !0 === A ? n.cmd.do("insertHTML", '<a href="' + t + '" target="_blank">' + e + "</a>") : alert(A)
        }, tryChangeActive: function (e) {
            var t = this.editor, n = this.$elem, i = t.selection.getSelectionContainerElem();
            i && ("A" === i.getNodeName() ? (this._active = !0, n.addClass("w-e-active")) : (this._active = !1, n.removeClass("w-e-active")))
        }
    }, g.prototype = {
        constructor: g, onClick: function (e) {
            var t = this.editor, n = t.selection.isSelectionEmpty();
            n && t.selection.createEmptyRange(), t.cmd.do("italic"), n && (t.selection.collapseRange(), t.selection.restoreSelection())
        }, tryChangeActive: function (e) {
            var t = this.editor, n = this.$elem;
            t.cmd.queryCommandState("italic") ? (this._active = !0, n.addClass("w-e-active")) : (this._active = !1, n.removeClass("w-e-active"))
        }
    }, w.prototype = {
        constructor: w, onClick: function (e) {
            this.editor.cmd.do("redo")
        }
    }, v.prototype = {
        constructor: v, onClick: function (e) {
            var t = this.editor, n = t.selection.isSelectionEmpty();
            n && t.selection.createEmptyRange(), t.cmd.do("strikeThrough"), n && (t.selection.collapseRange(), t.selection.restoreSelection())
        }, tryChangeActive: function (e) {
            var t = this.editor, n = this.$elem;
            t.cmd.queryCommandState("strikeThrough") ? (this._active = !0, n.addClass("w-e-active")) : (this._active = !1, n.removeClass("w-e-active"))
        }
    }, E.prototype = {
        constructor: E, onClick: function (e) {
            var t = this.editor, n = t.selection.isSelectionEmpty();
            n && t.selection.createEmptyRange(), t.cmd.do("underline"), n && (t.selection.collapseRange(), t.selection.restoreSelection())
        }, tryChangeActive: function (e) {
            var t = this.editor, n = this.$elem;
            t.cmd.queryCommandState("underline") ? (this._active = !0, n.addClass("w-e-active")) : (this._active = !1, n.removeClass("w-e-active"))
        }
    }, b.prototype = {
        constructor: b, onClick: function (e) {
            this.editor.cmd.do("undo")
        }
    }, B.prototype = {
        constructor: B, _command: function (e) {
            var t = this.editor, n = t.$textElem;
            if (t.selection.restoreSelection(), !t.cmd.queryCommandState(e)) {
                t.cmd.do(e);
                var i = t.selection.getSelectionContainerElem();
                if ("LI" === i.getNodeName() && (i = i.parent()), !1 !== /^ol|ul$/i.test(i.getNodeName()) && !i.equal(n)) {
                    var o = i.parent();
                    o.equal(n) || (i.insertAfter(o), o.remove())
                }
            }
        }, tryChangeActive: function (e) {
            var t = this.editor, n = this.$elem;
            t.cmd.queryCommandState("insertUnOrderedList") || t.cmd.queryCommandState("insertOrderedList") ? (this._active = !0, n.addClass("w-e-active")) : (this._active = !1, n.removeClass("w-e-active"))
        }
    }, y.prototype = {
        constructor: y, _command: function (e) {
            this.editor.cmd.do(e)
        }
    }, C.prototype = {
        constructor: C, _command: function (e) {
            this.editor.cmd.do("foreColor", e)
        }
    }, x.prototype = {
        constructor: x, _command: function (e) {
            this.editor.cmd.do("backColor", e)
        }
    }, I.prototype = {
        constructor: I, onClick: function (e) {
            var t = this.editor, n = t.selection.getSelectionContainerElem(), i = n.getNodeName();
            if (!J.isIE()) return void("BLOCKQUOTE" === i ? t.cmd.do("formatBlock", "<P>") : t.cmd.do("formatBlock", "<BLOCKQUOTE>"));
            var A = void 0, r = void 0;
            if ("P" === i) return A = n.text(), r = o("<blockquote>" + A + "</blockquote>"), r.insertAfter(n), void n.remove();
            "BLOCKQUOTE" === i && (A = n.text(), r = o("<p>" + A + "</p>"), r.insertAfter(n), n.remove())
        }, tryChangeActive: function (e) {
            var t = this.editor, n = this.$elem, i = /^BLOCKQUOTE$/i, o = t.cmd.queryCommandValue("formatBlock");
            i.test(o) ? (this._active = !0, n.addClass("w-e-active")) : (this._active = !1, n.removeClass("w-e-active"))
        }
    }, Q.prototype = {
        constructor: Q, onClick: function (e) {
            var t = this.editor, n = t.selection.getSelectionStartElem(), i = t.selection.getSelectionEndElem(),
                A = t.selection.isSelectionEmpty(), r = t.selection.getSelectionText(), c = void 0;
            return n.equal(i) ? A ? void(this._active ? this._createPanel(n.html()) : this._createPanel()) : (c = o("<code>" + r + "</code>"), t.cmd.do("insertElem", c), t.selection.createRangeByElem(c, !1), void t.selection.restoreSelection()) : void t.selection.restoreSelection()
        }, _createPanel: function (e) {
            var t = this;
            e = e || "";
            var n = e ? "edit" : "new", i = c("texxt"), A = c("btn"), r = new f(this, {
                width: 500,
                tabs: [{
                    title: "插入代码",
                    tpl: '<div>\n                        <textarea id="' + i + '" style="height:145px;;">' + e + '</textarea>\n                        <div class="w-e-button-container">\n                            <button id="' + A + '" class="right">插入</button>\n                        </div>\n                    <div>',
                    events: [{
                        selector: "#" + A, type: "click", fn: function () {
                            var e = o("#" + i), A = e.val() || e.html();
                            return A = a(A), "new" === n ? t._insertCode(A) : t._updateCode(A), !0
                        }
                    }]
                }]
            });
            r.show(), this.panel = r
        }, _insertCode: function (e) {
            this.editor.cmd.do("insertHTML", "<pre><code>" + e + "</code></pre><p><br></p>")
        }, _updateCode: function (e) {
            var t = this.editor, n = t.selection.getSelectionContainerElem();
            n && (n.html(e), t.selection.restoreSelection())
        }, tryChangeActive: function (e) {
            var t = this.editor, n = this.$elem, i = t.selection.getSelectionContainerElem();
            if (i) {
                var o = i.parent();
                "CODE" === i.getNodeName() && "PRE" === o.getNodeName() ? (this._active = !0, n.addClass("w-e-active")) : (this._active = !1, n.removeClass("w-e-active"))
            }
        }
    }, M.prototype = {
        constructor: M, onClick: function () {
            this._createPanel()
        }, _createPanel: function () {
            var e = this, t = this.editor, n = t.config, i = n.emotions || [], A = [];
            i.forEach(function (t) {
                var n = t.type, i = t.content || [], r = "";
                "emoji" === n && i.forEach(function (e) {
                    e && (r += '<span class="w-e-item">' + e + "</span>")
                }), "image" === n && i.forEach(function (e) {
                    var t = e.src, n = e.alt;
                    t && (r += '<span class="w-e-item"><img src="' + t + '" alt="' + n + '" data-w-e="1"/></span>')
                }), A.push({
                    title: t.title,
                    tpl: '<div class="w-e-emoticon-container">' + r + "</div>",
                    events: [{
                        selector: "span.w-e-item", type: "click", fn: function (t) {
                            var n = t.target, i = o(n), A = i.getNodeName(), r = void 0;
                            return r = "IMG" === A ? i.parent().html() : "<span>" + i.html() + "</span>", e._insert(r), !0
                        }
                    }]
                })
            });
            var r = new f(this, {width: 300, height: 200, tabs: A});
            r.show(), this.panel = r
        }, _insert: function (e) {
            this.editor.cmd.do("insertHTML", e)
        }
    }, S.prototype = {
        constructor: S, onClick: function () {
            this._active ? this._createEditPanel() : this._createInsertPanel()
        }, _createInsertPanel: function () {
            var e = this, t = c("btn"), n = c("row"), i = c("col"), A = new f(this, {
                width: 250,
                tabs: [{
                    title: "插入表格",
                    tpl: '<div>\n                        <p style="text-align:left; padding:5px 0;">\n                            创建\n                            <input id="' + n + '" type="text" value="5" style="width:40px;text-align:center;"/>\n                            行\n                            <input id="' + i + '" type="text" value="5" style="width:40px;text-align:center;"/>\n                            列的表格\n                        </p>\n                        <div class="w-e-button-container">\n                            <button id="' + t + '" class="right">插入</button>\n                        </div>\n                    </div>',
                    events: [{
                        selector: "#" + t, type: "click", fn: function () {
                            var t = parseInt(o("#" + n).val()), A = parseInt(o("#" + i).val());
                            return t && A && t > 0 && A > 0 && e._insert(t, A), !0
                        }
                    }]
                }]
            });
            A.show(), this.panel = A
        }, _insert: function (e, t) {
            var n = void 0, i = void 0, o = '<table border="0" width="100%" cellpadding="0" cellspacing="0">';
            for (n = 0; n < e; n++) {
                if (o += "<tr>", 0 === n) for (i = 0; i < t; i++) o += "<th>&nbsp;</th>"; else for (i = 0; i < t; i++) o += "<td>&nbsp;</td>";
                o += "</tr>"
            }
            o += "</table><p><br></p>";
            var A = this.editor;
            A.cmd.do("insertHTML", o), A.cmd.do("enableObjectResizing", !1), A.cmd.do("enableInlineTableEditing", !1)
        }, _createEditPanel: function () {
            var e = this, t = c("add-row"), n = c("add-col"), i = c("del-row"), o = c("del-col"), A = c("del-table");
            new f(this, {
                width: 320,
                tabs: [{
                    title: "编辑表格",
                    tpl: '<div>\n                        <div class="w-e-button-container" style="border-bottom:1px solid #f1f1f1;padding-bottom:5px;margin-bottom:5px;">\n                            <button id="' + t + '" class="left">增加行</button>\n                            <button id="' + i + '" class="red left">删除行</button>\n                            <button id="' + n + '" class="left">增加列</button>\n                            <button id="' + o + '" class="red left">删除列</button>\n                        </div>\n                        <div class="w-e-button-container">\n                            <button id="' + A + '" class="gray left">删除表格</button>\n                        </dv>\n                    </div>',
                    events: [{
                        selector: "#" + t, type: "click", fn: function () {
                            return e._addRow(), !0
                        }
                    }, {
                        selector: "#" + n, type: "click", fn: function () {
                            return e._addCol(), !0
                        }
                    }, {
                        selector: "#" + i, type: "click", fn: function () {
                            return e._delRow(), !0
                        }
                    }, {
                        selector: "#" + o, type: "click", fn: function () {
                            return e._delCol(), !0
                        }
                    }, {
                        selector: "#" + A, type: "click", fn: function () {
                            return e._delTable(), !0
                        }
                    }]
                }]
            }).show()
        }, _getLocationData: function () {
            var e = {}, t = this.editor, n = t.selection.getSelectionContainerElem();
            if (n) {
                var i = n.getNodeName();
                if ("TD" === i || "TH" === i) {
                    var o = n.parent(), A = o.children(), r = A.length;
                    A.forEach(function (t, i) {
                        if (t === n[0]) return e.td = {index: i, elem: t, length: r}, !1
                    });
                    var c = o.parent(), a = c.children(), s = a.length;
                    return a.forEach(function (t, n) {
                        if (t === o[0]) return e.tr = {index: n, elem: t, length: s}, !1
                    }), e
                }
            }
        }, _addRow: function () {
            var e = this._getLocationData();
            if (e) {
                var t = e.tr, n = o(t.elem), i = e.td, A = i.length, r = document.createElement("tr"), c = "",
                    a = void 0;
                for (a = 0; a < A; a++) c += "<td>&nbsp;</td>";
                r.innerHTML = c, o(r).insertAfter(n)
            }
        }, _addCol: function () {
            var e = this._getLocationData();
            if (e) {
                var t = e.tr, n = e.td, i = n.index;
                o(t.elem).parent().children().forEach(function (e) {
                    var t = o(e), n = t.children(), A = n.get(i), r = A.getNodeName().toLowerCase();
                    o(document.createElement(r)).insertAfter(A)
                })
            }
        }, _delRow: function () {
            var e = this._getLocationData();
            if (e) {
                o(e.tr.elem).remove()
            }
        }, _delCol: function () {
            var e = this._getLocationData();
            if (e) {
                var t = e.tr, n = e.td, i = n.index;
                o(t.elem).parent().children().forEach(function (e) {
                    o(e).children().get(i).remove()
                })
            }
        }, _delTable: function () {
            var e = this.editor, t = e.selection.getSelectionContainerElem();
            if (t) {
                var n = t.parentUntil("table");
                n && n.remove()
            }
        }, tryChangeActive: function (e) {
            var t = this.editor, n = this.$elem, i = t.selection.getSelectionContainerElem();
            if (i) {
                var o = i.getNodeName();
                "TD" === o || "TH" === o ? (this._active = !0, n.addClass("w-e-active")) : (this._active = !1, n.removeClass("w-e-active"))
            }
        }
    }, k.prototype = {
        constructor: k, onClick: function () {
            this._createPanel()
        }, _createPanel: function () {
            var e = this, t = c("text-val"), n = c("btn"), i = new f(this, {
                width: 350,
                tabs: [{
                    title: "插入视频",
                    tpl: '<div>\n                        <input id="' + t + '" type="text" class="block" placeholder="格式如：<iframe src=... ></iframe>"/>\n                        <div class="w-e-button-container">\n                            <button id="' + n + '" class="right">插入</button>\n                        </div>\n                    </div>',
                    events: [{
                        selector: "#" + n, type: "click", fn: function () {
                            var n = o("#" + t), i = n.val().trim();
                            return i && e._insert(i), !0
                        }
                    }]
                }]
            });
            i.show(), this.panel = i
        }, _insert: function (e) {
            this.editor.cmd.do("insertHTML", e + "<p><br></p>")
        }
    }, D.prototype = {
        constructor: D, onClick: function () {
            this.editor.config.qiniu || (this._active ? this._createEditPanel() : this._createInsertPanel())
        }, _createEditPanel: function () {
            var e = this.editor, t = c("width-30"), n = c("width-50"), i = c("width-100"), o = c("del-btn"), A = [{
                title: "编辑图片",
                tpl: '<div>\n                    <div class="w-e-button-container" style="border-bottom:1px solid #f1f1f1;padding-bottom:5px;margin-bottom:5px;">\n                        <span style="float:left;font-size:14px;margin:4px 5px 0 5px;color:#333;">最大宽度：</span>\n                        <button id="' + t + '" class="left">30%</button>\n                        <button id="' + n + '" class="left">50%</button>\n                        <button id="' + i + '" class="left">100%</button>\n                    </div>\n                    <div class="w-e-button-container">\n                        <button id="' + o + '" class="gray left">删除图片</button>\n                    </dv>\n                </div>',
                events: [{
                    selector: "#" + t, type: "click", fn: function () {
                        var t = e._selectedImg;
                        return t && t.css("max-width", "30%"), !0
                    }
                }, {
                    selector: "#" + n, type: "click", fn: function () {
                        var t = e._selectedImg;
                        return t && t.css("max-width", "50%"), !0
                    }
                }, {
                    selector: "#" + i, type: "click", fn: function () {
                        var t = e._selectedImg;
                        return t && t.css("max-width", "100%"), !0
                    }
                }, {
                    selector: "#" + o, type: "click", fn: function () {
                        var t = e._selectedImg;
                        return t && t.remove(), !0
                    }
                }]
            }], r = new f(this, {width: 300, tabs: A});
            r.show(), this.panel = r
        }, _createInsertPanel: function () {
            var e = this.editor, t = e.uploadImg, n = e.config, i = c("up-trigger"), A = c("up-file"),
                r = c("link-url"), a = c("link-btn"), s = [{
                    title: "上传图片",
                    tpl: '<div class="w-e-up-img-container">\n                    <div id="' + i + '" class="w-e-up-btn">\n                        <i class="w-e-icon-upload2"></i>\n                    </div>\n                    <div style="display:none;">\n                        <input id="' + A + '" type="file" multiple="multiple" accept="image/jpg,image/jpeg,image/png,image/gif,image/bmp"/>\n                    </div>\n                </div>',
                    events: [{
                        selector: "#" + i, type: "click", fn: function () {
                            var e = o("#" + A), t = e[0];
                            if (!t) return !0;
                            t.click()
                        }
                    }, {
                        selector: "#" + A, type: "change", fn: function () {
                            var e = o("#" + A), n = e[0];
                            if (!n) return !0;
                            var i = n.files;
                            return i.length && t.uploadImg(i), !0
                        }
                    }]
                }, {
                    title: "网络图片",
                    tpl: '<div>\n                    <input id="' + r + '" type="text" class="block" placeholder="图片链接"/></td>\n                    <div class="w-e-button-container">\n                        <button id="' + a + '" class="right">插入</button>\n                    </div>\n                </div>',
                    events: [{
                        selector: "#" + a, type: "click", fn: function () {
                            var e = o("#" + r), n = e.val().trim();
                            return n && t.insertLinkImg(n), !0
                        }
                    }]
                }], l = [];
            (n.uploadImgShowBase64 || n.uploadImgServer || n.customUploadImg) && window.FileReader && l.push(s[0]), n.showLinkImg && l.push(s[1]);
            var d = new f(this, {width: 300, tabs: l});
            d.show(), this.panel = d
        }, tryChangeActive: function (e) {
            var t = this.editor, n = this.$elem;
            t._selectedImg ? (this._active = !0, n.addClass("w-e-active")) : (this._active = !1, n.removeClass("w-e-active"))
        }
    };
    var q = {};
    q.bold = l, q.head = u, q.fontSize = h, q.fontName = p, q.link = m, q.italic = g, q.redo = w, q.strikeThrough = v, q.underline = E, q.undo = b, q.list = B, q.justify = y, q.foreColor = C, q.backColor = x, q.quote = I, q.code = Q, q.emoticon = M, q.table = S, q.video = k, q.image = D, _.prototype = {
        constructor: _,
        init: function () {
            var e = this, t = this.editor;
            ((t.config || {}).menus || []).forEach(function (n) {
                var i = q[n];
                i && "function" == typeof i && (e.menus[n] = new i(t))
            }), this._addToToolbar(), this._bindEvent()
        },
        _addToToolbar: function () {
            var e = this.editor, t = e.$toolbarElem, n = this.menus, i = e.config, o = i.zIndex + 1;
            A(n, function (e, n) {
                var i = n.$elem;
                i && (i.css("z-index", o), t.append(i))
            })
        },
        _bindEvent: function () {
            var e = this.menus, t = this.editor;
            A(e, function (e, n) {
                var i = n.type;
                if (i) {
                    var o = n.$elem, A = n.droplist;
                    n.panel;
                    "click" === i && n.onClick && o.on("click", function (e) {
                        null != t.selection.getRange() && n.onClick(e)
                    }), "droplist" === i && A && o.on("mouseenter", function (e) {
                        null != t.selection.getRange() && (A.showTimeoutId = setTimeout(function () {
                            A.show()
                        }, 200))
                    }).on("mouseleave", function (e) {
                        A.hideTimeoutId = setTimeout(function () {
                            A.hide()
                        }, 0)
                    }), "panel" === i && n.onClick && o.on("click", function (e) {
                        e.stopPropagation(), null != t.selection.getRange() && n.onClick(e)
                    })
                }
            })
        },
        changeActive: function () {
            A(this.menus, function (e, t) {
                t.tryChangeActive && setTimeout(function () {
                    t.tryChangeActive()
                }, 100)
            })
        }
    }, U.prototype = {
        constructor: U, init: function () {
            this._bindEvent()
        }, clear: function () {
            this.html("<p><br></p>")
        }, html: function (e) {
            var t = this.editor, n = t.$textElem, i = void 0;
            if (null == e) return i = n.html(), i = i.replace(/\u200b/gm, ""), i;
            n.html(e), t.initSelection()
        }, getJSON: function () {
            return R(this.editor.$textElem)
        }, text: function (e) {
            var t = this.editor, n = t.$textElem, i = void 0;
            if (null == e) return i = n.text(), i = i.replace(/\u200b/gm, ""), i;
            n.text("<p>" + e + "</p>"), t.initSelection()
        }, append: function (e) {
            var t = this.editor;
            t.$textElem.append(o(e)), t.initSelection()
        }, _bindEvent: function () {
            this._saveRangeRealTime(), this._enterKeyHandle(), this._clearHandle(), this._pasteHandle(), this._tabHandle(), this._imgHandle(), this._dragHandle()
        }, _saveRangeRealTime: function () {
            function e(e) {
                t.selection.saveRange(), t.menus.changeActive()
            }

            var t = this.editor, n = t.$textElem;
            n.on("keyup", e), n.on("mousedown", function (t) {
                n.on("mouseleave", e)
            }), n.on("mouseup", function (t) {
                e(), n.off("mouseleave", e)
            })
        }, _enterKeyHandle: function () {
            function e(e) {
                var t = o("<p><br></p>");
                t.insertBefore(e), i.selection.createRangeByElem(t, !0), i.selection.restoreSelection(), e.remove()
            }

            function t(t) {
                var n = i.selection.getSelectionContainerElem(), o = n.parent();
                if ("<code><br></code>" === o.html()) return void e(n);
                if (o.equal(A)) {
                    "P" !== n.getNodeName() && (n.text() || e(n))
                }
            }

            function n(e) {
                var t = i.selection.getSelectionContainerElem();
                if (t) {
                    var n = t.parent(), A = t.getNodeName(), r = n.getNodeName();
                    if ("CODE" === A && "PRE" === r && i.cmd.queryCommandSupported("insertHTML")) {
                        if (!0 === i._willBreakCode) {
                            var c = o("<p><br></p>");
                            return c.insertAfter(n), i.selection.createRangeByElem(c, !0), i.selection.restoreSelection(), i._willBreakCode = !1, void e.preventDefault()
                        }
                        var a = i.selection.getRange().startOffset;
                        i.cmd.do("insertHTML", "\n"), i.selection.saveRange(), i.selection.getRange().startOffset === a && i.cmd.do("insertHTML", "\n");
                        var s = t.html().length;
                        i.selection.getRange().startOffset + 1 === s && (i._willBreakCode = !0), e.preventDefault()
                    }
                }
            }

            var i = this.editor, A = i.$textElem;
            A.on("keyup", function (e) {
                13 === e.keyCode && t(e)
            }), A.on("keydown", function (e) {
                if (13 !== e.keyCode) return void(i._willBreakCode = !1);
                n(e)
            })
        }, _clearHandle: function () {
            var e = this.editor, t = e.$textElem;
            t.on("keydown", function (e) {
                if (8 === e.keyCode) {
                    return "<p><br></p>" === t.html().toLowerCase().trim() ? void e.preventDefault() : void 0
                }
            }), t.on("keyup", function (n) {
                if (8 === n.keyCode) {
                    var i = void 0, A = t.html().toLowerCase().trim();
                    A && "<br>" !== A || (i = o("<p><br/></p>"), t.html(""), t.append(i), e.selection.createRangeByElem(i, !1, !0), e.selection.restoreSelection())
                }
            })
        }, _pasteHandle: function () {
            function e() {
                var e = Date.now(), t = !1;
                return e - a >= 100 && (t = !0), a = e, t
            }

            function t() {
                a = 0
            }

            var n = this.editor, i = n.config, o = i.pasteFilterStyle, A = i.pasteTextHandle, r = i.pasteIgnoreImg,
                c = n.$textElem, a = 0;
            c.on("paste", function (i) {
                if (!J.isIE() && (i.preventDefault(), e())) {
                    var c = F(i, o, r), a = N(i);
                    a = a.replace(/\n/gm, "<br>");
                    var l = n.selection.getSelectionContainerElem();
                    if (l) {
                        var d = l.getNodeName();
                        if ("CODE" === d || "PRE" === d) return A && s(A) && (a = "" + (A(a) || "")), void n.cmd.do("insertHTML", "<p>" + a + "</p>");
                        if (!c) return void t();
                        try {
                            A && s(A) && (c = "" + (A(c) || "")), n.cmd.do("insertHTML", c)
                        } catch (e) {
                            A && s(A) && (a = "" + (A(a) || "")), n.cmd.do("insertHTML", "<p>" + a + "</p>")
                        }
                    }
                }
            }), c.on("paste", function (t) {
                if (!J.isIE() && (t.preventDefault(), e())) {
                    var i = T(t);
                    if (i && i.length) {
                        var o = n.selection.getSelectionContainerElem();
                        if (o) {
                            var A = o.getNodeName();
                            if ("CODE" !== A && "PRE" !== A) {
                                n.uploadImg.uploadImg(i)
                            }
                        }
                    }
                }
            })
        }, _tabHandle: function () {
            var e = this.editor;
            e.$textElem.on("keydown", function (t) {
                if (9 === t.keyCode && e.cmd.queryCommandSupported("insertHTML")) {
                    var n = e.selection.getSelectionContainerElem();
                    if (n) {
                        var i = n.parent(), o = n.getNodeName(), A = i.getNodeName();
                        "CODE" === o && "PRE" === A ? e.cmd.do("insertHTML", "    ") : e.cmd.do("insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;"), t.preventDefault()
                    }
                }
            })
        }, _imgHandle: function () {
            var e = this.editor, t = e.$textElem;
            t.on("click", "img", function (t) {
                var n = this, i = o(n);
                "1" !== i.attr("data-w-e") && (e._selectedImg = i, e.selection.createRangeByElem(i), e.selection.restoreSelection())
            }), t.on("click  keyup", function (t) {
                t.target.matches("img") || (e._selectedImg = null)
            })
        }, _dragHandle: function () {
            var e = this.editor;
            o(document).on("dragleave drop dragenter dragover", function (e) {
                e.preventDefault()
            }), e.$textElem.on("drop", function (t) {
                t.preventDefault();
                var n = t.dataTransfer && t.dataTransfer.files;
                n && n.length && e.uploadImg.uploadImg(n)
            })
        }
    }, Y.prototype = {
        constructor: Y, do: function (e, t) {
            var n = this.editor;
            if (n._useStyleWithCSS || (document.execCommand("styleWithCSS", null, !0), n._useStyleWithCSS = !0), n.selection.getRange()) {
                n.selection.restoreSelection();
                var i = "_" + e;
                this[i] ? this[i](t) : this._execCommand(e, t), n.menus.changeActive(), n.selection.saveRange(), n.selection.restoreSelection(), n.change && n.change()
            }
        }, _insertHTML: function (e) {
            var t = this.editor, n = t.selection.getRange();
            this.queryCommandSupported("insertHTML") ? this._execCommand("insertHTML", e) : n.insertNode ? (n.deleteContents(), n.insertNode(o(e)[0])) : n.pasteHTML && n.pasteHTML(e)
        }, _insertElem: function (e) {
            var t = this.editor, n = t.selection.getRange();
            n.insertNode && (n.deleteContents(), n.insertNode(e[0]))
        }, _execCommand: function (e, t) {
            document.execCommand(e, !1, t)
        }, queryCommandValue: function (e) {
            return document.queryCommandValue(e)
        }, queryCommandState: function (e) {
            return document.queryCommandState(e)
        }, queryCommandSupported: function (e) {
            return document.queryCommandSupported(e)
        }
    }, P.prototype = {
        constructor: P, getRange: function () {
            return this._currentRange
        }, saveRange: function (e) {
            if (e) return void(this._currentRange = e);
            var t = window.getSelection();
            if (0 !== t.rangeCount) {
                var n = t.getRangeAt(0), i = this.getSelectionContainerElem(n);
                if (i && "false" !== i.attr("contenteditable") && !i.parentUntil("[contenteditable=false]")) {
                    this.editor.$textElem.isContain(i) && (this._currentRange = n)
                }
            }
        }, collapseRange: function (e) {
            null == e && (e = !1);
            var t = this._currentRange;
            t && t.collapse(e)
        }, getSelectionText: function () {
            return this._currentRange ? this._currentRange.toString() : ""
        }, getSelectionContainerElem: function (e) {
            e = e || this._currentRange;
            var t = void 0;
            if (e) return t = e.commonAncestorContainer, o(1 === t.nodeType ? t : t.parentNode)
        }, getSelectionStartElem: function (e) {
            e = e || this._currentRange;
            var t = void 0;
            if (e) return t = e.startContainer, o(1 === t.nodeType ? t : t.parentNode)
        }, getSelectionEndElem: function (e) {
            e = e || this._currentRange;
            var t = void 0;
            if (e) return t = e.endContainer, o(1 === t.nodeType ? t : t.parentNode)
        }, isSelectionEmpty: function () {
            var e = this._currentRange;
            return !(!e || !e.startContainer || e.startContainer !== e.endContainer || e.startOffset !== e.endOffset)
        }, restoreSelection: function () {
            var e = window.getSelection();
            e.removeAllRanges(), e.addRange(this._currentRange)
        }, createEmptyRange: function () {
            var e = this.editor, t = this.getRange(), n = void 0;
            if (t && this.isSelectionEmpty()) try {
                J.isWebkit() ? (e.cmd.do("insertHTML", "&#8203;"), t.setEnd(t.endContainer, t.endOffset + 1), this.saveRange(t)) : (n = o("<strong>&#8203;</strong>"), e.cmd.do("insertElem", n), this.createRangeByElem(n, !0))
            } catch (e) {
            }
        }, createRangeByElem: function (e, t, n) {
            if (e.length) {
                var i = e[0], o = document.createRange();
                n ? o.selectNodeContents(i) : o.selectNode(i), "boolean" == typeof t && o.collapse(t), this.saveRange(o)
            }
        }
    }, H.prototype = {
        constructor: H, show: function (e) {
            var t = this;
            if (!this._isShow) {
                this._isShow = !0;
                var n = this.$bar;
                if (this._isRender) this._isRender = !0; else {
                    this.$textContainer.append(n)
                }
                Date.now() - this._time > 100 && e <= 1 && (n.css("width", 100 * e + "%"), this._time = Date.now());
                var i = this._timeoutId;
                i && clearTimeout(i), i = setTimeout(function () {
                    t._hide()
                }, 500)
            }
        }, _hide: function () {
            this.$bar.remove(), this._time = 0, this._isShow = !1, this._isRender = !1
        }
    };
    var X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    L.prototype = {
        constructor: L, _alert: function (e, t) {
            var n = this.editor, i = n.config.debug, o = n.config.customAlert;
            if (i) throw new Error("wangEditor: " + (t || e));
            o && "function" == typeof o ? o(e) : alert(e)
        }, insertLinkImg: function (e) {
            var t = this;
            if (e) {
                var n = this.editor, i = n.config, o = i.linkImgCheck, A = void 0;
                if (o && "function" == typeof o && "string" == typeof(A = o(e))) return void alert(A);
                n.cmd.do("insertHTML", '<img src="' + e + '" style="max-width:100%;"/>');
                var r = document.createElement("img");
                r.onload = function () {
                    var t = i.linkImgCallback;
                    t && "function" == typeof t && t(e), r = null
                }, r.onerror = function () {
                    r = null, t._alert("插入图片错误", 'wangEditor: 插入图片出错，图片链接是 "' + e + '"，下载该链接失败')
                }, r.onabort = function () {
                    r = null
                }, r.src = e
            }
        }, uploadImg: function (e) {
            var t = this;
            if (e && e.length) {
                var n = this.editor, i = n.config, o = i.uploadImgServer, c = i.uploadImgShowBase64,
                    a = i.uploadImgMaxSize, s = a / 1024 / 1024, l = i.uploadImgMaxLength || 1e4,
                    d = i.uploadFileName || "", u = i.uploadImgParams || {}, h = i.uploadImgParamsWithUrl,
                    p = i.uploadImgHeaders || {}, f = i.uploadImgHooks || {}, m = i.uploadImgTimeout || 3e3,
                    g = i.withCredentials;
                null == g && (g = !1);
                var w = i.customUploadImg;
                if (w || o || c) {
                    var v = [], E = [];
                    if (r(e, function (e) {
                            var t = e.name, n = e.size;
                            if (t && n) return !1 === /\.(jpg|jpeg|png|bmp|gif|webp)$/i.test(t) ? void E.push("【" + t + "】不是图片") : a < n ? void E.push("【" + t + "】大于 " + s + "M") : void v.push(e)
                        }), E.length) return void this._alert("图片验证未通过: \n" + E.join("\n"));
                    if (v.length > l) return void this._alert("一次最多上传" + l + "张图片");
                    if (w && "function" == typeof w) return void w(v, this.insertLinkImg.bind(this));
                    var b = new FormData;
                    if (r(v, function (e) {
                            var t = d || e.name;
                            b.append(t, e)
                        }), o && "string" == typeof o) {
                        var B = o.split("#");
                        o = B[0];
                        var y = B[1] || "";
                        A(u, function (e, t) {
                            h && (o.indexOf("?") > 0 ? o += "&" : o += "?", o = o + e + "=" + t), b.append(e, t)
                        }), y && (o += "#" + y);
                        var C = new XMLHttpRequest;
                        if (C.open("POST", o), C.timeout = m, C.ontimeout = function () {
                                f.timeout && "function" == typeof f.timeout && f.timeout(C, n), t._alert("上传图片超时")
                            }, C.upload && (C.upload.onprogress = function (e) {
                                var t = void 0, i = new H(n);
                                e.lengthComputable && (t = e.loaded / e.total, i.show(t))
                            }), C.onreadystatechange = function () {
                                var e = void 0;
                                if (4 === C.readyState) {
                                    if (C.status < 200 || C.status >= 300) return f.error && "function" == typeof f.error && f.error(C, n), void t._alert("上传图片发生错误", "上传图片发生错误，服务器返回状态是 " + C.status);
                                    if (e = C.responseText, "object" !== (void 0 === e ? "undefined" : X(e))) try {
                                        e = JSON.parse(e)
                                    } catch (i) {
                                        return f.fail && "function" == typeof f.fail && f.fail(C, n, e), void t._alert("上传图片失败", "上传图片返回结果错误，返回结果是: " + e)
                                    }
                                    if (f.customInsert || "0" == e.errno) {
                                        if (f.customInsert && "function" == typeof f.customInsert) f.customInsert(t.insertLinkImg.bind(t), e, n); else {
                                            (e.data || []).forEach(function (e) {
                                                t.insertLinkImg(e)
                                            })
                                        }
                                        f.success && "function" == typeof f.success && f.success(C, n, e)
                                    } else f.fail && "function" == typeof f.fail && f.fail(C, n, e), t._alert("上传图片失败", "上传图片返回结果错误，返回结果 errno=" + e.errno)
                                }
                            }, f.before && "function" == typeof f.before) {
                            var x = f.before(C, n, v);
                            if (x && "object" === (void 0 === x ? "undefined" : X(x)) && x.prevent) return void this._alert(x.msg)
                        }
                        return A(p, function (e, t) {
                            C.setRequestHeader(e, t)
                        }), C.withCredentials = g, void C.send(b)
                    }
                    c && r(e, function (e) {
                        var n = t, i = new FileReader;
                        i.readAsDataURL(e), i.onload = function () {
                            n.insertLinkImg(this.result)
                        }
                    })
                }
            }
        }
    };
    var W = 1;
    j.prototype = {
        constructor: j, _initConfig: function () {
            var e = {};
            this.config = Object.assign(e, z, this.customConfig);
            var t = this.config.lang || {}, n = [];
            A(t, function (e, t) {
                n.push({reg: new RegExp(e, "img"), val: t})
            }), this.config.langArgs = n
        }, _initDom: function () {
            var e = this, t = this.toolbarSelector, n = o(t), i = this.textSelector, A = this.config, r = A.zIndex,
                a = void 0, s = void 0, l = void 0, d = void 0;
            null == i ? (a = o("<div></div>"), s = o("<div></div>"), d = n.children(), n.append(a).append(s), a.css("background-color", "#f1f1f1").css("border", "1px solid #ccc"), s.css("border", "1px solid #ccc").css("border-top", "none").css("height", "300px")) : (a = n, s = o(i), d = s.children()), l = o("<div></div>"), l.attr("contenteditable", "true").css("width", "100%").css("height", "100%"), d && d.length ? l.append(d) : l.append(o("<p><br></p>")), s.append(l), a.addClass("w-e-toolbar"), s.addClass("w-e-text-container"), s.css("z-index", r), l.addClass("w-e-text");
            var u = c("toolbar-elem");
            a.attr("id", u);
            var h = c("text-elem");
            l.attr("id", h), this.$toolbarElem = a, this.$textContainerElem = s, this.$textElem = l, this.toolbarElemId = u, this.textElemId = h;
            var p = !0;
            s.on("compositionstart", function () {
                p = !1
            }), s.on("compositionend", function () {
                p = !0
            }), s.on("click keyup", function () {
                p && e.change && e.change()
            }), a.on("click", function () {
                this.change && this.change()
            }), (A.onfocus || A.onblur) && (this.isFocus = !1, o(document).on("click", function (t) {
                var n = l.isContain(o(t.target)), i = a.isContain(o(t.target)), A = a[0] == t.target;
                if (n) e.isFocus || e.onfocus && e.onfocus(), e.isFocus = !0; else {
                    if (i && !A) return;
                    e.isFocus && e.onblur && e.onblur(), e.isFocus = !1
                }
            }))
        }, _initCommand: function () {
            this.cmd = new Y(this)
        }, _initSelectionAPI: function () {
            this.selection = new P(this)
        }, _initUploadImg: function () {
            this.uploadImg = new L(this)
        }, _initMenus: function () {
            this.menus = new _(this), this.menus.init()
        }, _initText: function () {
            this.txt = new U(this), this.txt.init()
        }, initSelection: function (e) {
            var t = this.$textElem, n = t.children();
            if (!n.length) return t.append(o("<p><br></p>")), void this.initSelection();
            var i = n.last();
            if (e) {
                var A = i.html().toLowerCase(), r = i.getNodeName();
                if ("<br>" !== A && "<br/>" !== A || "P" !== r) return t.append(o("<p><br></p>")), void this.initSelection()
            }
            this.selection.createRangeByElem(i, !1, !0), this.selection.restoreSelection()
        }, _bindEvent: function () {
            var e = 0, t = this.txt.html(), n = this.config, i = n.onchangeTimeout;
            (!(i = parseInt(i, 10)) || i <= 0) && (i = 200);
            var o = n.onchange;
            o && "function" == typeof o && (this.change = function () {
                var n = this.txt.html();
                n.length === t.length && n === t || (e && clearTimeout(e), e = setTimeout(function () {
                    o(n), t = n
                }, i))
            });
            var A = n.onblur;
            A && "function" == typeof A && (this.onblur = function () {
                var e = this.txt.html();
                A(e)
            });
            var r = n.onfocus;
            r && "function" == typeof r && (this.onfocus = function () {
                r()
            })
        }, create: function () {
            this._initConfig(), this._initDom(), this._initCommand(), this._initSelectionAPI(), this._initText(), this._initMenus(), this._initUploadImg(), this.initSelection(!0), this._bindEvent()
        }, _offAllEvent: function () {
            o.offAll()
        }
    };
    try {
        document
    } catch (e) {
        throw new Error("请在浏览器环境下运行")
    }
    !function () {
        "function" != typeof Object.assign && (Object.assign = function (e, t) {
            if (null == e) throw new TypeError("Cannot convert undefined or null to object");
            for (var n = Object(e), i = 1; i < arguments.length; i++) {
                var o = arguments[i];
                if (null != o) for (var A in o) Object.prototype.hasOwnProperty.call(o, A) && (n[A] = o[A])
            }
            return n
        }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (e) {
            for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; --n >= 0 && t.item(n) !== this;) ;
            return n > -1
        })
    }();
    var Z = document.createElement("style");
    return Z.type = "text/css",
        Z.innerHTML = '.w-e-toolbar,.w-e-text-container,.w-e-menu-panel {  padding: 0;  margin: 0;  box-sizing: border-box;}.w-e-toolbar *,.w-e-text-container *,.w-e-menu-panel * {  padding: 0;  margin: 0;  box-sizing: border-box;}.w-e-clear-fix:after {  content: "";  display: table;  clear: both;}.w-e-toolbar .w-e-droplist {  position: absolute;  left: 0;  top: 0;  background-color: #fff;  border: 1px solid #f1f1f1;  border-right-color: #ccc;  border-bottom-color: #ccc;}.w-e-toolbar .w-e-droplist .w-e-dp-title {  text-align: center;  color: #999;  line-height: 2;  border-bottom: 1px solid #f1f1f1;  font-size: 13px;}.w-e-toolbar .w-e-droplist ul.w-e-list {  list-style: none;  line-height: 1;}.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item {  color: #333;  padding: 5px 0;}.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item:hover {  background-color: #f1f1f1;}.w-e-toolbar .w-e-droplist ul.w-e-block {  list-style: none;  text-align: left;  padding: 5px;}.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item {  display: inline-block;  *display: inline;  *zoom: 1;  padding: 3px 5px;}.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item:hover {  background-color: #f1f1f1;}@font-face {  font-family: \'w-e-icon\';  src: url(data:application/x-font-woff;charset=utf-8;base64,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) format(\'truetype\');  font-weight: normal;  font-style: normal;}[class^="w-e-icon-"],[class*=" w-e-icon-"] {  /* use !important to prevent issues with browser extensions that change fonts */  font-family: \'w-e-icon\' !important;  speak: none;  font-style: normal;  font-weight: normal;  font-variant: normal;  text-transform: none;  line-height: 1;  /* Better Font Rendering =========== */  -webkit-font-smoothing: antialiased;  -moz-osx-font-smoothing: grayscale;}.w-e-icon-close:before {  content: "\\f00d";}.w-e-icon-upload2:before {  content: "\\e9c6";}.w-e-icon-trash-o:before {  content: "\\f014";}.w-e-icon-header:before {  content: "\\f1dc";}.w-e-icon-pencil2:before {  content: "\\e906";}.w-e-icon-paint-brush:before {  content: "\\f1fc";}.w-e-icon-image:before {  content: "\\e90d";}.w-e-icon-play:before {  content: "\\e912";}.w-e-icon-location:before {  content: "\\e947";}.w-e-icon-undo:before {  content: "\\e965";}.w-e-icon-redo:before {  content: "\\e966";}.w-e-icon-quotes-left:before {  content: "\\e977";}.w-e-icon-list-numbered:before {  content: "\\e9b9";}.w-e-icon-list2:before {  content: "\\e9bb";}.w-e-icon-link:before {  content: "\\e9cb";}.w-e-icon-happy:before {  content: "\\e9df";}.w-e-icon-bold:before {  content: "\\ea62";}.w-e-icon-underline:before {  content: "\\ea63";}.w-e-icon-italic:before {  content: "\\ea64";}.w-e-icon-strikethrough:before {  content: "\\ea65";}.w-e-icon-table2:before {  content: "\\ea71";}.w-e-icon-paragraph-left:before {  content: "\\ea77";}.w-e-icon-paragraph-center:before {  content: "\\ea78";}.w-e-icon-paragraph-right:before {  content: "\\ea79";}.w-e-icon-terminal:before {  content: "\\f120";}.w-e-icon-page-break:before {  content: "\\ea68";}.w-e-icon-cancel-circle:before {  content: "\\ea0d";}.w-e-icon-font:before {  content: "\\ea5c";}.w-e-icon-text-heigh:before {  content: "\\ea5f";}.w-e-toolbar {  display: -webkit-box;  display: -ms-flexbox;  display: flex;  padding: 0 5px;  /* flex-wrap: wrap; */  /* 单个菜单 */}.w-e-toolbar .w-e-menu {  position: relative;  text-align: center;  padding: 5px 10px;  cursor: pointer;}.w-e-toolbar .w-e-menu i {  color: #999;}.w-e-toolbar .w-e-menu:hover i {  color: #333;}.w-e-toolbar .w-e-active i {  color: #1e88e5;}.w-e-toolbar .w-e-active:hover i {  color: #1e88e5;}.w-e-text-container .w-e-panel-container {  position: absolute;  top: 0;  left: 50%;  border: 1px solid #ccc;  border-top: 0;  box-shadow: 1px 1px 2px #ccc;  color: #333;  background-color: #fff;  /* 为 emotion panel 定制的样式 */  /* 上传图片的 panel 定制样式 */}.w-e-text-container .w-e-panel-container .w-e-panel-close {  position: absolute;  right: 0;  top: 0;  padding: 5px;  margin: 2px 5px 0 0;  cursor: pointer;  color: #999;}.w-e-text-container .w-e-panel-container .w-e-panel-close:hover {  color: #333;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-title {  list-style: none;  display: -webkit-box;  display: -ms-flexbox;  display: flex;  font-size: 14px;  margin: 2px 10px 0 10px;  border-bottom: 1px solid #f1f1f1;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-title .w-e-item {  padding: 3px 5px;  color: #999;  cursor: pointer;  margin: 0 3px;  position: relative;  top: 1px;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-title .w-e-active {  color: #333;  border-bottom: 1px solid #333;  cursor: default;  font-weight: 700;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content {  padding: 10px 15px 10px 15px;  font-size: 16px;  /* 输入框的样式 */  /* 按钮的样式 */}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content input:focus,.w-e-text-container .w-e-panel-container .w-e-panel-tab-content textarea:focus,.w-e-text-container .w-e-panel-container .w-e-panel-tab-content button:focus {  outline: none;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content textarea {  width: 100%;  border: 1px solid #ccc;  padding: 5px;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content textarea:focus {  border-color: #1e88e5;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content input[type=text] {  border: none;  border-bottom: 1px solid #ccc;  font-size: 14px;  height: 20px;  color: #333;  text-align: left;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content input[type=text].small {  width: 30px;  text-align: center;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content input[type=text].block {  display: block;  width: 100%;  margin: 10px 0;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content input[type=text]:focus {  border-bottom: 2px solid #1e88e5;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button {  font-size: 14px;  color: #1e88e5;  border: none;  padding: 5px 10px;  background-color: #fff;  cursor: pointer;  border-radius: 3px;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.left {  float: left;  margin-right: 10px;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.right {  float: right;  margin-left: 10px;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.gray {  color: #999;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.red {  color: #c24f4a;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button:hover {  background-color: #f1f1f1;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container:after {  content: "";  display: table;  clear: both;}.w-e-text-container .w-e-panel-container .w-e-emoticon-container .w-e-item {  cursor: pointer;  font-size: 18px;  padding: 0 3px;  display: inline-block;  *display: inline;  *zoom: 1;}.w-e-text-container .w-e-panel-container .w-e-up-img-container {  text-align: center;}.w-e-text-container .w-e-panel-container .w-e-up-img-container .w-e-up-btn {  display: inline-block;  *display: inline;  *zoom: 1;  color: #999;  cursor: pointer;  font-size: 60px;  line-height: 1;}.w-e-text-container .w-e-panel-container .w-e-up-img-container .w-e-up-btn:hover {  color: #333;}.w-e-text-container {  position: relative;}.w-e-text-container .w-e-progress {  position: absolute;  background-color: #1e88e5;  bottom: 0;  left: 0;  height: 1px;}.w-e-text {  padding: 0 10px;  overflow-y: scroll;}.w-e-text p,.w-e-text h1,.w-e-text h2,.w-e-text h3,.w-e-text h4,.w-e-text h5,.w-e-text table,.w-e-text pre {  margin: 10px 0;  line-height: 1.5;}.w-e-text ul,.w-e-text ol {  margin: 10px 0 10px 20px;}.w-e-text blockquote {  display: block;  border-left: 8px solid #d0e5f2;  padding: 5px 10px;  margin: 10px 0;  line-height: 1.4;  font-size: 100%;  background-color: #f1f1f1;}.w-e-text code {  display: inline-block;  *display: inline;  *zoom: 1;  background-color: #f1f1f1;  border-radius: 3px;  padding: 3px 5px;  margin: 0 3px;}.w-e-text pre code {  display: block;}.w-e-text table {  border-top: 1px solid #ccc;  border-left: 1px solid #ccc;}.w-e-text table td,.w-e-text table th {  border-bottom: 1px solid #ccc;  border-right: 1px solid #ccc;  padding: 3px 5px;}.w-e-text table th {  border-bottom: 2px solid #ccc;  text-align: center;}.w-e-text:focus {  outline: none;}.w-e-text img {  cursor: pointer;}.w-e-text img:hover {  box-shadow: 0 0 5px #333;}', document.getElementsByTagName("HEAD").item(0).appendChild(Z), window.wangEditor || j
});
//# sourceMappingURL=wangEditor.min.js.map
