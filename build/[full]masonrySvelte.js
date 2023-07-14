// ==UserScript==
// @name            PT种子列表瀑布流视图(Svelte重构)
// @name:en         PT_Masonry_View_Svelte
// @namespace       https://github.com/KesaubeEire/PT_TorrentList_Masonry
// @version         1.0.1
// @author          Kesa
// @description     PT种子列表无限下拉瀑布流视图(Svelte重构)
// @description:en  PT Masonry View by Svelte.
// @license         MIT
// @icon            https://avatars.githubusercontent.com/u/23617963
// @match           https://kamept.com/*
// @match           https://kp.m-team.cc/*
// @match           https://pterclub.com/*
// @exclude         */offers.php*
// @exclude         */index.php*
// @exclude         */forums.php*
// @exclude         */viewrequests.php*
// @exclude         */seek.php*
// @grant           none
// ==/UserScript==

(t=>{const e=document.createElement("style");e.dataset.source="vite-plugin-monkey",e.textContent=t,document.head.append(e)})(' div.waterfall{width:100%;padding-top:20px;padding-bottom:60px;border-radius:20px;height:100%;margin:20px auto;transition:height .3s}button.debug{position:fixed;top:10px;right:10px;padding:4px;background-color:#333;color:#fff;border:none;border-radius:5px;cursor:pointer}button#toggle_oldTable{top:10px}button#btnReLayout{top:40px}button#btnSwitchMode{top:70px}button#sort_masonry{top:100px}.switch.svelte-2vaqag.svelte-2vaqag{width:100%;height:30px;display:flex;align-items:center;justify-content:space-between}.s_title.svelte-2vaqag.svelte-2vaqag{display:flex;align-items:center;font-size:14px;position:relative}.title_green.svelte-2vaqag.svelte-2vaqag{color:green;font-weight:800}.title_red.svelte-2vaqag.svelte-2vaqag{color:red;font-weight:800}.s_title.svelte-2vaqag:has(.hint):hover ._hint.svelte-2vaqag{display:block}._hint.svelte-2vaqag.svelte-2vaqag{display:none;position:absolute;bottom:28px;left:0;width:max-content;height:auto;background-color:#fff;border:1px solid black;border-radius:8px;padding:4px 8px;box-sizing:content-box;z-index:1}input[type=checkbox].svelte-2vaqag.svelte-2vaqag{width:0px;height:0px;display:none;visibility:hidden}label.svelte-2vaqag.svelte-2vaqag{width:48px;height:12px;display:inline-block;position:relative;background-color:#777;border:2px solid #555;border-radius:30px;transition:all .2s}label.svelte-2vaqag.svelte-2vaqag:after{content:"";display:block;width:24px;height:24px;background-color:#555;position:absolute;border-radius:50%;left:-2px;top:-6px;transition:transform .2s}input[type=checkbox].svelte-2vaqag:checked~label.svelte-2vaqag{background-color:#00a0fc;border-color:#006dc9}input[type=checkbox].svelte-2vaqag:checked~label.svelte-2vaqag:after{background-color:#0054b0;transform:translate(28px)}.sideP.svelte-693cwj.svelte-693cwj{position:fixed;opacity:.4;margin:4px 2px;background-color:#0ff;border-radius:8px;overflow:hidden;z-index:40000}.sideP.svelte-693cwj.svelte-693cwj:hover{opacity:1}.sideP__title.svelte-693cwj.svelte-693cwj{width:100%;height:8px;background-color:#ff0}.sideP__title.svelte-693cwj.svelte-693cwj:hover{cursor:move}.sideP__out.svelte-693cwj.svelte-693cwj{display:flex;flex-direction:column}.sideP__out.svelte-693cwj.svelte-693cwj button{background-color:gray;color:#fff;padding:4px 2px;margin:4px;border-radius:8px;cursor:pointer}.sideP__out.svelte-693cwj.svelte-693cwj button:hover{background-color:#000}.configP.svelte-693cwj.svelte-693cwj{position:fixed;left:0;top:0;width:100vw;height:100vh;padding:0;margin:0;z-index:50000;background-color:#0003}.configP_holder.svelte-693cwj.svelte-693cwj{position:absolute;right:20px;top:20px;overflow-y:scroll;width:360px;max-height:calc(100vh - 40px);padding:0;margin:0;border-radius:24px;border:2px solid black;background-color:#d4e7ff}.configP_holder.svelte-693cwj.svelte-693cwj::-webkit-scrollbar{display:none}.configP_title.svelte-693cwj.svelte-693cwj{position:fixed;box-sizing:border-box;width:inherit;display:flex;justify-content:space-between;align-items:center;height:40px;padding:0 10px;border-top-left-radius:24px;border-top-right-radius:24px;border-bottom:2px solid black;background-color:#9ac6ff;z-index:2}.configP_title.svelte-693cwj.svelte-693cwj p{font-size:18px;font-weight:500}.configP_title.svelte-693cwj.svelte-693cwj button{border:none;padding:0;margin:0;background-color:transparent}.section.svelte-693cwj.svelte-693cwj{margin:16px 18px}.section.svelte-693cwj.svelte-693cwj button{border-radius:10px;margin:4px;padding:12px 16px}.section.svelte-693cwj.svelte-693cwj .s_title{text-align:center}.section.svelte-693cwj.svelte-693cwj .s_panel{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center}.section.svelte-693cwj.svelte-693cwj .s_checkbox{padding:12px;margin:4px;border-radius:10px;border:1px solid black;font-size:14px;display:flex;align-items:center}.configP_holder.svelte-693cwj .section.svelte-693cwj:nth-child(2){margin-top:48px}#reset_panel_pos.svelte-693cwj.svelte-693cwj{width:100%;text-align:center;border:1px solid black;border-radius:16px}.card.svelte-vdh3h6.svelte-vdh3h6{border:1px solid rgba(255,255,255,.5);border-radius:16px;margin:6px 0;overflow:hidden;cursor:pointer;box-shadow:#0000004d 3px 3px,#0000001a -1px -1px;transition:box-shadow .2s}.card.svelte-vdh3h6.svelte-vdh3h6:hover{box-shadow:#7300ff4d 5px 5px,#0000001a -1px -1px}.card-title.svelte-vdh3h6.svelte-vdh3h6{padding:2px 0}.card-holder.svelte-vdh3h6.svelte-vdh3h6{background-color:#ffffff80;background:linear-gradient(to bottom,rgba(255,255,255,.4),rgba(255,255,255,0))}.card-category.svelte-vdh3h6.svelte-vdh3h6{text-align:center;letter-spacing:2px;font-weight:700}.card-line.svelte-vdh3h6.svelte-vdh3h6{margin-top:1px;margin-bottom:1px;display:flex;justify-content:space-evenly;align-items:center;height:20px}.two-lines.svelte-vdh3h6.svelte-vdh3h6{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;transition:color .3s}.two-lines.svelte-vdh3h6.svelte-vdh3h6:hover{-webkit-line-clamp:100}.cl-center.svelte-vdh3h6.svelte-vdh3h6{display:flex;justify-content:space-evenly;align-items:center}.cl-tags.svelte-vdh3h6.svelte-vdh3h6{display:flex;justify-content:left;align-items:center;flex-wrap:wrap;gap:2px;transform:translate(4px)}.cl-tags.svelte-vdh3h6.svelte-vdh3h6:has(span){padding-top:2px}.card-details.svelte-vdh3h6.svelte-vdh3h6{display:flex;justify-content:center;align-items:center;flex-direction:column}.card-image.svelte-vdh3h6.svelte-vdh3h6{height:100%;position:relative}.card-image.svelte-vdh3h6 img.svelte-vdh3h6{width:100%;object-fit:cover}.card-alter.svelte-vdh3h6.svelte-vdh3h6{text-align:center;height:20px;display:flex;justify-content:center;align-items:center}.top_and_free.svelte-vdh3h6.svelte-vdh3h6{padding:2px;border-radius:4px;margin-bottom:2px;display:flex;justify-content:center;align-items:center;line-height:11px;height:11px;font-size:10px}._Free.svelte-vdh3h6.svelte-vdh3h6{color:#00f}._2XFree.svelte-vdh3h6.svelte-vdh3h6{color:green}.card-description.svelte-vdh3h6.svelte-vdh3h6{padding-left:4px;padding-right:4px}.card-index.svelte-vdh3h6.svelte-vdh3h6{position:absolute;top:0;left:0;padding-right:9px;padding-left:2px;margin:0;height:20px;line-height:16px;font-size:16px;background-color:#000;color:#ff0;border-top-right-radius:100px;border-bottom-right-radius:100px;display:flex;align-items:center;pointer-events:none}.btnCollet.svelte-vdh3h6.svelte-vdh3h6{padding:1px 2px;cursor:pointer}.hot.svelte-vdh3h6.svelte-vdh3h6,.new.svelte-vdh3h6.svelte-vdh3h6{padding:0 2px;border-radius:8px;background:white;margin:2px}.card-category.svelte-1rfbgrc.svelte-1rfbgrc{height:24px;padding:0 2px;border:1px;background:black;color:#fff;font-weight:600;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;display:flex;align-items:center}.card_category-img.svelte-1rfbgrc.svelte-1rfbgrc{height:32px;background-size:100% 141%;background-position:center top;padding-top:6px}.card.svelte-1rfbgrc.svelte-1rfbgrc{border:1px solid rgba(255,255,255,.5);border-radius:16px;margin:6px 0;overflow:hidden;cursor:pointer;box-shadow:#0000004d 3px 3px,#0000001a -1px -1px;transition:box-shadow .2s}.card.svelte-1rfbgrc.svelte-1rfbgrc:hover{box-shadow:#7300ff4d 5px 5px,#0000001a -1px -1px}.card-title.svelte-1rfbgrc.svelte-1rfbgrc{padding:2px 0}.card-holder.svelte-1rfbgrc.svelte-1rfbgrc{background-color:#ffffff80;background:linear-gradient(to bottom,rgba(255,255,255,.4),rgba(255,255,255,0))}.card-line.svelte-1rfbgrc.svelte-1rfbgrc{margin-top:1px;margin-bottom:1px;display:flex;justify-content:space-evenly;align-items:center;height:20px}.two-lines.svelte-1rfbgrc.svelte-1rfbgrc{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;transition:color .3s}.two-lines.svelte-1rfbgrc.svelte-1rfbgrc:hover{-webkit-line-clamp:100}.cl-center.svelte-1rfbgrc.svelte-1rfbgrc{display:flex;justify-content:space-evenly;align-items:center}.cl-tags.svelte-1rfbgrc.svelte-1rfbgrc{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:2px;padding-top:4px;padding-bottom:2px}.cl-tags.svelte-1rfbgrc.svelte-1rfbgrc:has(span){padding-top:2px}.card-details.svelte-1rfbgrc.svelte-1rfbgrc{display:flex;justify-content:center;align-items:center;flex-direction:column}.card-image.svelte-1rfbgrc.svelte-1rfbgrc{height:100%;position:relative}.card-image.svelte-1rfbgrc img.svelte-1rfbgrc{width:100%;object-fit:cover}.card-alter.svelte-1rfbgrc.svelte-1rfbgrc{text-align:center;height:20px;display:flex;justify-content:center;align-items:center}.top_and_free.svelte-1rfbgrc.svelte-1rfbgrc{padding:2px;border-radius:4px;margin-bottom:2px;display:flex;justify-content:center;align-items:center;line-height:11px;height:11px;font-size:10px}._Free.svelte-1rfbgrc.svelte-1rfbgrc{color:#00f}._2XFree.svelte-1rfbgrc.svelte-1rfbgrc{color:green}.card-description.svelte-1rfbgrc.svelte-1rfbgrc{padding-left:4px;padding-right:4px}.card-index.svelte-1rfbgrc.svelte-1rfbgrc{position:absolute;top:0;left:0;padding-right:9px;padding-left:2px;margin:0;height:20px;line-height:16px;font-size:16px;background-color:#000;color:#ff0;border-top-right-radius:100px;border-bottom-right-radius:100px;display:flex;align-items:center;pointer-events:none}.btnCollet.svelte-1rfbgrc.svelte-1rfbgrc{padding:1px 2px;cursor:pointer}.tempTags.svelte-1rfbgrc.svelte-1rfbgrc{background-color:#fff;margin-left:2px;padding-left:2px;padding-right:2px;border-radius:4px}#turnPage.svelte-tr7wwl{width:100%;height:32px;border-radius:16px;line-height:20px;font-size:14px;position:absolute;bottom:0px}div#_iframe.svelte-tr7wwl{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#0026269b;z-index:30000;display:flex}iframe.svelte-tr7wwl{height:96%;margin:auto} ');

(function () {
  'use strict';

  function noop() {
  }
  const identity = (x) => x;
  function assign(tar, src) {
    for (const k in src)
      tar[k] = src[k];
    return tar;
  }
  function run(fn) {
    return fn();
  }
  function blank_object() {
    return /* @__PURE__ */ Object.create(null);
  }
  function run_all(fns) {
    fns.forEach(run);
  }
  function is_function(thing) {
    return typeof thing === "function";
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
  }
  let src_url_equal_anchor;
  function src_url_equal(element_src, url) {
    if (!src_url_equal_anchor) {
      src_url_equal_anchor = document.createElement("a");
    }
    src_url_equal_anchor.href = url;
    return element_src === src_url_equal_anchor.href;
  }
  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }
  function subscribe(store, ...callbacks) {
    if (store == null) {
      return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
  }
  function get_store_value(store) {
    let value;
    subscribe(store, (_) => value = _)();
    return value;
  }
  function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
  }
  function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
      const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
      return definition[0](slot_ctx);
    }
  }
  function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
  }
  function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
      const lets = definition[2](fn(dirty));
      if ($$scope.dirty === void 0) {
        return lets;
      }
      if (typeof lets === "object") {
        const merged = [];
        const len = Math.max($$scope.dirty.length, lets.length);
        for (let i = 0; i < len; i += 1) {
          merged[i] = $$scope.dirty[i] | lets[i];
        }
        return merged;
      }
      return $$scope.dirty | lets;
    }
    return $$scope.dirty;
  }
  function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
      const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
      slot.p(slot_context, slot_changes);
    }
  }
  function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
      const dirty = [];
      const length = $$scope.ctx.length / 32;
      for (let i = 0; i < length; i++) {
        dirty[i] = -1;
      }
      return dirty;
    }
    return -1;
  }
  function set_store_value(store, ret, value) {
    store.set(value);
    return ret;
  }
  const is_client = typeof window !== "undefined";
  let now = is_client ? () => window.performance.now() : () => Date.now();
  let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
  const tasks = /* @__PURE__ */ new Set();
  function run_tasks(now2) {
    tasks.forEach((task) => {
      if (!task.c(now2)) {
        tasks.delete(task);
        task.f();
      }
    });
    if (tasks.size !== 0)
      raf(run_tasks);
  }
  function loop(callback) {
    let task;
    if (tasks.size === 0)
      raf(run_tasks);
    return {
      promise: new Promise((fulfill) => {
        tasks.add(task = { c: callback, f: fulfill });
      }),
      abort() {
        tasks.delete(task);
      }
    };
  }
  const globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
  function append(target, node) {
    target.appendChild(node);
  }
  function get_root_for_style(node) {
    if (!node)
      return document;
    const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
    if (root && root.host) {
      return root;
    }
    return node.ownerDocument;
  }
  function append_empty_stylesheet(node) {
    const style_element = element("style");
    append_stylesheet(get_root_for_style(node), style_element);
    return style_element.sheet;
  }
  function append_stylesheet(node, style) {
    append(node.head || node, style);
    return style.sheet;
  }
  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }
  function detach(node) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }
  function element(name) {
    return document.createElement(name);
  }
  function svg_element(name) {
    return document.createElementNS("http://www.w3.org/2000/svg", name);
  }
  function text(data) {
    return document.createTextNode(data);
  }
  function space() {
    return text(" ");
  }
  function empty() {
    return text("");
  }
  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
  }
  function self(fn) {
    return function(event) {
      if (event.target === this)
        fn.call(this, event);
    };
  }
  function attr(node, attribute, value) {
    if (value == null)
      node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
      node.setAttribute(attribute, value);
  }
  function to_number(value) {
    return value === "" ? null : +value;
  }
  function children(element2) {
    return Array.from(element2.childNodes);
  }
  function set_data(text2, data) {
    data = "" + data;
    if (text2.data === data)
      return;
    text2.data = data;
  }
  function set_input_value(input, value) {
    input.value = value == null ? "" : value;
  }
  function set_style(node, key, value, important) {
    if (value == null) {
      node.style.removeProperty(key);
    } else {
      node.style.setProperty(key, value, important ? "important" : "");
    }
  }
  function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
    const e = document.createEvent("CustomEvent");
    e.initCustomEvent(type, bubbles, cancelable, detail);
    return e;
  }
  class HtmlTag {
    constructor(is_svg = false) {
      this.is_svg = false;
      this.is_svg = is_svg;
      this.e = this.n = null;
    }
    c(html) {
      this.h(html);
    }
    m(html, target, anchor = null) {
      if (!this.e) {
        if (this.is_svg)
          this.e = svg_element(target.nodeName);
        else
          this.e = element(target.nodeType === 11 ? "TEMPLATE" : target.nodeName);
        this.t = target.tagName !== "TEMPLATE" ? target : target.content;
        this.c(html);
      }
      this.i(anchor);
    }
    h(html) {
      this.e.innerHTML = html;
      this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes);
    }
    i(anchor) {
      for (let i = 0; i < this.n.length; i += 1) {
        insert(this.t, this.n[i], anchor);
      }
    }
    p(html) {
      this.d();
      this.h(html);
      this.i(this.a);
    }
    d() {
      this.n.forEach(detach);
    }
  }
  const managed_styles = /* @__PURE__ */ new Map();
  let active = 0;
  function hash(str) {
    let hash2 = 5381;
    let i = str.length;
    while (i--)
      hash2 = (hash2 << 5) - hash2 ^ str.charCodeAt(i);
    return hash2 >>> 0;
  }
  function create_style_information(doc, node) {
    const info = { stylesheet: append_empty_stylesheet(node), rules: {} };
    managed_styles.set(doc, info);
    return info;
  }
  function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = "{\n";
    for (let p = 0; p <= 1; p += step) {
      const t = a + (b - a) * ease(p);
      keyframes += p * 100 + `%{${fn(t, 1 - t)}}
`;
    }
    const rule = keyframes + `100% {${fn(b, 1 - b)}}
}`;
    const name = `__svelte_${hash(rule)}_${uid}`;
    const doc = get_root_for_style(node);
    const { stylesheet, rules } = managed_styles.get(doc) || create_style_information(doc, node);
    if (!rules[name]) {
      rules[name] = true;
      stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || "";
    node.style.animation = `${animation ? `${animation}, ` : ""}${name} ${duration}ms linear ${delay}ms 1 both`;
    active += 1;
    return name;
  }
  function delete_rule(node, name) {
    const previous = (node.style.animation || "").split(", ");
    const next = previous.filter(
      name ? (anim) => anim.indexOf(name) < 0 : (anim) => anim.indexOf("__svelte") === -1
      // remove all Svelte animations
    );
    const deleted = previous.length - next.length;
    if (deleted) {
      node.style.animation = next.join(", ");
      active -= deleted;
      if (!active)
        clear_rules();
    }
  }
  function clear_rules() {
    raf(() => {
      if (active)
        return;
      managed_styles.forEach((info) => {
        const { ownerNode } = info.stylesheet;
        if (ownerNode)
          detach(ownerNode);
      });
      managed_styles.clear();
    });
  }
  let current_component;
  function set_current_component(component) {
    current_component = component;
  }
  function get_current_component() {
    if (!current_component)
      throw new Error("Function called outside component initialization");
    return current_component;
  }
  function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
  }
  function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
  }
  const dirty_components = [];
  const binding_callbacks = [];
  let render_callbacks = [];
  const flush_callbacks = [];
  const resolved_promise = /* @__PURE__ */ Promise.resolve();
  let update_scheduled = false;
  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }
  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }
  function add_flush_callback(fn) {
    flush_callbacks.push(fn);
  }
  const seen_callbacks = /* @__PURE__ */ new Set();
  let flushidx = 0;
  function flush() {
    if (flushidx !== 0) {
      return;
    }
    const saved_component = current_component;
    do {
      try {
        while (flushidx < dirty_components.length) {
          const component = dirty_components[flushidx];
          flushidx++;
          set_current_component(component);
          update(component.$$);
        }
      } catch (e) {
        dirty_components.length = 0;
        flushidx = 0;
        throw e;
      }
      set_current_component(null);
      dirty_components.length = 0;
      flushidx = 0;
      while (binding_callbacks.length)
        binding_callbacks.pop()();
      for (let i = 0; i < render_callbacks.length; i += 1) {
        const callback = render_callbacks[i];
        if (!seen_callbacks.has(callback)) {
          seen_callbacks.add(callback);
          callback();
        }
      }
      render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
  }
  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      const dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }
  function flush_render_callbacks(fns) {
    const filtered = [];
    const targets = [];
    render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
    targets.forEach((c) => c());
    render_callbacks = filtered;
  }
  let promise;
  function wait() {
    if (!promise) {
      promise = Promise.resolve();
      promise.then(() => {
        promise = null;
      });
    }
    return promise;
  }
  function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event(`${direction ? "intro" : "outro"}${kind}`));
  }
  const outroing = /* @__PURE__ */ new Set();
  let outros;
  function group_outros() {
    outros = {
      r: 0,
      c: [],
      p: outros
      // parent group
    };
  }
  function check_outros() {
    if (!outros.r) {
      run_all(outros.c);
    }
    outros = outros.p;
  }
  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }
  function transition_out(block, local, detach2, callback) {
    if (block && block.o) {
      if (outroing.has(block))
        return;
      outroing.add(block);
      outros.c.push(() => {
        outroing.delete(block);
        if (callback) {
          if (detach2)
            block.d(1);
          callback();
        }
      });
      block.o(local);
    } else if (callback) {
      callback();
    }
  }
  const null_transition = { duration: 0 };
  function create_bidirectional_transition(node, fn, params, intro) {
    const options = { direction: "both" };
    let config = fn(node, params, options);
    let t = intro ? 0 : 1;
    let running_program = null;
    let pending_program = null;
    let animation_name = null;
    function clear_animation() {
      if (animation_name)
        delete_rule(node, animation_name);
    }
    function init2(program, duration) {
      const d = program.b - t;
      duration *= Math.abs(d);
      return {
        a: t,
        b: program.b,
        d,
        duration,
        start: program.start,
        end: program.start + duration,
        group: program.group
      };
    }
    function go(b) {
      const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
      const program = {
        start: now() + delay,
        b
      };
      if (!b) {
        program.group = outros;
        outros.r += 1;
      }
      if (running_program || pending_program) {
        pending_program = program;
      } else {
        if (css) {
          clear_animation();
          animation_name = create_rule(node, t, b, duration, delay, easing, css);
        }
        if (b)
          tick(0, 1);
        running_program = init2(program, duration);
        add_render_callback(() => dispatch(node, b, "start"));
        loop((now2) => {
          if (pending_program && now2 > pending_program.start) {
            running_program = init2(pending_program, duration);
            pending_program = null;
            dispatch(node, running_program.b, "start");
            if (css) {
              clear_animation();
              animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
            }
          }
          if (running_program) {
            if (now2 >= running_program.end) {
              tick(t = running_program.b, 1 - t);
              dispatch(node, running_program.b, "end");
              if (!pending_program) {
                if (running_program.b) {
                  clear_animation();
                } else {
                  if (!--running_program.group.r)
                    run_all(running_program.group.c);
                }
              }
              running_program = null;
            } else if (now2 >= running_program.start) {
              const p = now2 - running_program.start;
              t = running_program.a + running_program.d * easing(p / running_program.duration);
              tick(t, 1 - t);
            }
          }
          return !!(running_program || pending_program);
        });
      }
    }
    return {
      run(b) {
        if (is_function(config)) {
          wait().then(() => {
            config = config(options);
            go(b);
          });
        } else {
          go(b);
        }
      },
      end() {
        clear_animation();
        running_program = pending_program = null;
      }
    };
  }
  function outro_and_destroy_block(block, lookup) {
    transition_out(block, 1, 1, () => {
      lookup.delete(block.key);
    });
  }
  function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block2, next, get_context) {
    let o = old_blocks.length;
    let n = list.length;
    let i = o;
    const old_indexes = {};
    while (i--)
      old_indexes[old_blocks[i].key] = i;
    const new_blocks = [];
    const new_lookup = /* @__PURE__ */ new Map();
    const deltas = /* @__PURE__ */ new Map();
    const updates = [];
    i = n;
    while (i--) {
      const child_ctx = get_context(ctx, list, i);
      const key = get_key(child_ctx);
      let block = lookup.get(key);
      if (!block) {
        block = create_each_block2(key, child_ctx);
        block.c();
      } else if (dynamic) {
        updates.push(() => block.p(child_ctx, dirty));
      }
      new_lookup.set(key, new_blocks[i] = block);
      if (key in old_indexes)
        deltas.set(key, Math.abs(i - old_indexes[key]));
    }
    const will_move = /* @__PURE__ */ new Set();
    const did_move = /* @__PURE__ */ new Set();
    function insert2(block) {
      transition_in(block, 1);
      block.m(node, next);
      lookup.set(block.key, block);
      next = block.first;
      n--;
    }
    while (o && n) {
      const new_block = new_blocks[n - 1];
      const old_block = old_blocks[o - 1];
      const new_key = new_block.key;
      const old_key = old_block.key;
      if (new_block === old_block) {
        next = new_block.first;
        o--;
        n--;
      } else if (!new_lookup.has(old_key)) {
        destroy(old_block, lookup);
        o--;
      } else if (!lookup.has(new_key) || will_move.has(new_key)) {
        insert2(new_block);
      } else if (did_move.has(old_key)) {
        o--;
      } else if (deltas.get(new_key) > deltas.get(old_key)) {
        did_move.add(new_key);
        insert2(new_block);
      } else {
        will_move.add(old_key);
        o--;
      }
    }
    while (o--) {
      const old_block = old_blocks[o];
      if (!new_lookup.has(old_block.key))
        destroy(old_block, lookup);
    }
    while (n)
      insert2(new_blocks[n - 1]);
    run_all(updates);
    return new_blocks;
  }
  function bind(component, name, callback) {
    const index = component.$$.props[name];
    if (index !== void 0) {
      component.$$.bound[index] = callback;
      callback(component.$$.ctx[index]);
    }
  }
  function create_component(block) {
    block && block.c();
  }
  function mount_component(component, target, anchor, customElement) {
    const { fragment, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
      add_render_callback(() => {
        const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
        if (component.$$.on_destroy) {
          component.$$.on_destroy.push(...new_on_destroy);
        } else {
          run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
      });
    }
    after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
      flush_render_callbacks($$.after_update);
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching);
      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }
  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }
    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }
  function init(component, options, instance2, create_fragment2, not_equal, props, append_styles, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
      fragment: null,
      ctx: [],
      // state
      props,
      update: noop,
      not_equal,
      bound: blank_object(),
      // lifecycle
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
      // everything else
      callbacks: blank_object(),
      dirty,
      skip_bound: false,
      root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance2 ? instance2(component, options.props || {}, (i, ret, ...rest) => {
      const value = rest.length ? rest[0] : ret;
      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i])
          $$.bound[i](value);
        if (ready)
          make_dirty(component, i);
      }
      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
    if (options.target) {
      if (options.hydrate) {
        const nodes = children(options.target);
        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        $$.fragment && $$.fragment.c();
      }
      if (options.intro)
        transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor, options.customElement);
      flush();
    }
    set_current_component(parent_component);
  }
  class SvelteComponent {
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    $on(type, callback) {
      if (!is_function(callback)) {
        return noop;
      }
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  }
  /*!
   * Masonry PACKAGED v4.2.2
   * Cascading grid layout library
   * https://masonry.desandro.com
   * MIT License
   * by David DeSandro
   */
  (function(window2, factory8) {
    if (typeof define == "function" && define.amd) {
      define("jquery-bridget/jquery-bridget", ["jquery"], function(jQuery2) {
        return factory8(window2, jQuery2);
      });
    } else {
      window2.jQueryBridget = factory8(
        window2,
        window2.jQuery
      );
    }
  })(window, function factory(window2, jQuery2) {
    var arraySlice = Array.prototype.slice;
    var console2 = window2.console;
    var logError = typeof console2 == "undefined" ? function() {
    } : function(message) {
      console2.error(message);
    };
    function jQueryBridget(namespace, PluginClass, $2) {
      $2 = $2 || jQuery2 || window2.jQuery;
      if (!$2) {
        return;
      }
      if (!PluginClass.prototype.option) {
        PluginClass.prototype.option = function(opts) {
          if (!$2.isPlainObject(opts)) {
            return;
          }
          this.options = $2.extend(true, this.options, opts);
        };
      }
      $2.fn[namespace] = function(arg0) {
        if (typeof arg0 == "string") {
          var args = arraySlice.call(arguments, 1);
          return methodCall(this, arg0, args);
        }
        plainCall(this, arg0);
        return this;
      };
      function methodCall($elems, methodName, args) {
        var returnValue;
        var pluginMethodStr = "$()." + namespace + '("' + methodName + '")';
        $elems.each(function(i, elem) {
          var instance2 = $2.data(elem, namespace);
          if (!instance2) {
            logError(namespace + " not initialized. Cannot call methods, i.e. " + pluginMethodStr);
            return;
          }
          var method = instance2[methodName];
          if (!method || methodName.charAt(0) == "_") {
            logError(pluginMethodStr + " is not a valid method");
            return;
          }
          var value = method.apply(instance2, args);
          returnValue = returnValue === void 0 ? value : returnValue;
        });
        return returnValue !== void 0 ? returnValue : $elems;
      }
      function plainCall($elems, options) {
        $elems.each(function(i, elem) {
          var instance2 = $2.data(elem, namespace);
          if (instance2) {
            instance2.option(options);
            instance2._init();
          } else {
            instance2 = new PluginClass(elem, options);
            $2.data(elem, namespace, instance2);
          }
        });
      }
      updateJQuery($2);
    }
    function updateJQuery($2) {
      if (!$2 || $2 && $2.bridget) {
        return;
      }
      $2.bridget = jQueryBridget;
    }
    updateJQuery(jQuery2 || window2.jQuery);
    return jQueryBridget;
  });
  (function(global2, factory8) {
    if (typeof define == "function" && define.amd) {
      define("ev-emitter/ev-emitter", factory8);
    } else {
      global2.EvEmitter = factory8();
    }
  })(typeof window != "undefined" ? window : globalThis, function() {
    function EvEmitter() {
    }
    var proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
      if (!eventName || !listener) {
        return;
      }
      var events = this._events = this._events || {};
      var listeners = events[eventName] = events[eventName] || [];
      if (listeners.indexOf(listener) == -1) {
        listeners.push(listener);
      }
      return this;
    };
    proto.once = function(eventName, listener) {
      if (!eventName || !listener) {
        return;
      }
      this.on(eventName, listener);
      var onceEvents = this._onceEvents = this._onceEvents || {};
      var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
      onceListeners[listener] = true;
      return this;
    };
    proto.off = function(eventName, listener) {
      var listeners = this._events && this._events[eventName];
      if (!listeners || !listeners.length) {
        return;
      }
      var index = listeners.indexOf(listener);
      if (index != -1) {
        listeners.splice(index, 1);
      }
      return this;
    };
    proto.emitEvent = function(eventName, args) {
      var listeners = this._events && this._events[eventName];
      if (!listeners || !listeners.length) {
        return;
      }
      listeners = listeners.slice(0);
      args = args || [];
      var onceListeners = this._onceEvents && this._onceEvents[eventName];
      for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        var isOnce = onceListeners && onceListeners[listener];
        if (isOnce) {
          this.off(eventName, listener);
          delete onceListeners[listener];
        }
        listener.apply(this, args);
      }
      return this;
    };
    proto.allOff = function() {
      delete this._events;
      delete this._onceEvents;
    };
    return EvEmitter;
  });
  /*!
   * getSize v2.0.3
   * measure size of elements
   * MIT license
   */
  (function(window2, factory8) {
    if (typeof define == "function" && define.amd) {
      define("get-size/get-size", factory8);
    } else {
      window2.getSize = factory8();
    }
  })(window, function factory2() {
    function getStyleSize(value) {
      var num = parseFloat(value);
      var isValid = value.indexOf("%") == -1 && !isNaN(num);
      return isValid && num;
    }
    function noop2() {
    }
    var logError = typeof console == "undefined" ? noop2 : function(message) {
      console.error(message);
    };
    var measurements = [
      "paddingLeft",
      "paddingRight",
      "paddingTop",
      "paddingBottom",
      "marginLeft",
      "marginRight",
      "marginTop",
      "marginBottom",
      "borderLeftWidth",
      "borderRightWidth",
      "borderTopWidth",
      "borderBottomWidth"
    ];
    var measurementsLength = measurements.length;
    function getZeroSize() {
      var size = {
        width: 0,
        height: 0,
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0
      };
      for (var i = 0; i < measurementsLength; i++) {
        var measurement = measurements[i];
        size[measurement] = 0;
      }
      return size;
    }
    function getStyle(elem) {
      var style = getComputedStyle(elem);
      if (!style) {
        logError("Style returned " + style + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1");
      }
      return style;
    }
    var isSetup = false;
    var isBoxSizeOuter;
    function setup() {
      if (isSetup) {
        return;
      }
      isSetup = true;
      var div = document.createElement("div");
      div.style.width = "200px";
      div.style.padding = "1px 2px 3px 4px";
      div.style.borderStyle = "solid";
      div.style.borderWidth = "1px 2px 3px 4px";
      div.style.boxSizing = "border-box";
      var body = document.body || document.documentElement;
      body.appendChild(div);
      var style = getStyle(div);
      isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
      getSize.isBoxSizeOuter = isBoxSizeOuter;
      body.removeChild(div);
    }
    function getSize(elem) {
      setup();
      if (typeof elem == "string") {
        elem = document.querySelector(elem);
      }
      if (!elem || typeof elem != "object" || !elem.nodeType) {
        return;
      }
      var style = getStyle(elem);
      if (style.display == "none") {
        return getZeroSize();
      }
      var size = {};
      size.width = elem.offsetWidth;
      size.height = elem.offsetHeight;
      var isBorderBox = size.isBorderBox = style.boxSizing == "border-box";
      for (var i = 0; i < measurementsLength; i++) {
        var measurement = measurements[i];
        var value = style[measurement];
        var num = parseFloat(value);
        size[measurement] = !isNaN(num) ? num : 0;
      }
      var paddingWidth = size.paddingLeft + size.paddingRight;
      var paddingHeight = size.paddingTop + size.paddingBottom;
      var marginWidth = size.marginLeft + size.marginRight;
      var marginHeight = size.marginTop + size.marginBottom;
      var borderWidth = size.borderLeftWidth + size.borderRightWidth;
      var borderHeight = size.borderTopWidth + size.borderBottomWidth;
      var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
      var styleWidth = getStyleSize(style.width);
      if (styleWidth !== false) {
        size.width = styleWidth + // add padding and border unless it's already including it
        (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
      }
      var styleHeight = getStyleSize(style.height);
      if (styleHeight !== false) {
        size.height = styleHeight + // add padding and border unless it's already including it
        (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
      }
      size.innerWidth = size.width - (paddingWidth + borderWidth);
      size.innerHeight = size.height - (paddingHeight + borderHeight);
      size.outerWidth = size.width + marginWidth;
      size.outerHeight = size.height + marginHeight;
      return size;
    }
    return getSize;
  });
  (function(window2, factory8) {
    if (typeof define == "function" && define.amd) {
      define("desandro-matches-selector/matches-selector", factory8);
    } else {
      window2.matchesSelector = factory8();
    }
  })(window, function factory3() {
    var matchesMethod = function() {
      var ElemProto = window.Element.prototype;
      if (ElemProto.matches) {
        return "matches";
      }
      if (ElemProto.matchesSelector) {
        return "matchesSelector";
      }
      var prefixes = ["webkit", "moz", "ms", "o"];
      for (var i = 0; i < prefixes.length; i++) {
        var prefix = prefixes[i];
        var method = prefix + "MatchesSelector";
        if (ElemProto[method]) {
          return method;
        }
      }
    }();
    return function matchesSelector(elem, selector) {
      return elem[matchesMethod](selector);
    };
  });
  (function(window2, factory8) {
    if (typeof define == "function" && define.amd) {
      define("fizzy-ui-utils/utils", [
        "desandro-matches-selector/matches-selector"
      ], function(matchesSelector) {
        return factory8(window2, matchesSelector);
      });
    } else {
      window2.fizzyUIUtils = factory8(
        window2,
        window2.matchesSelector
      );
    }
  })(window, function factory4(window2, matchesSelector) {
    var utils = {};
    utils.extend = function(a, b) {
      for (var prop in b) {
        a[prop] = b[prop];
      }
      return a;
    };
    utils.modulo = function(num, div) {
      return (num % div + div) % div;
    };
    var arraySlice = Array.prototype.slice;
    utils.makeArray = function(obj) {
      if (Array.isArray(obj)) {
        return obj;
      }
      if (obj === null || obj === void 0) {
        return [];
      }
      var isArrayLike = typeof obj == "object" && typeof obj.length == "number";
      if (isArrayLike) {
        return arraySlice.call(obj);
      }
      return [obj];
    };
    utils.removeFrom = function(ary, obj) {
      var index = ary.indexOf(obj);
      if (index != -1) {
        ary.splice(index, 1);
      }
    };
    utils.getParent = function(elem, selector) {
      while (elem.parentNode && elem != document.body) {
        elem = elem.parentNode;
        if (matchesSelector(elem, selector)) {
          return elem;
        }
      }
    };
    utils.getQueryElement = function(elem) {
      if (typeof elem == "string") {
        return document.querySelector(elem);
      }
      return elem;
    };
    utils.handleEvent = function(event) {
      var method = "on" + event.type;
      if (this[method]) {
        this[method](event);
      }
    };
    utils.filterFindElements = function(elems, selector) {
      elems = utils.makeArray(elems);
      var ffElems = [];
      elems.forEach(function(elem) {
        if (!(elem instanceof HTMLElement)) {
          return;
        }
        if (!selector) {
          ffElems.push(elem);
          return;
        }
        if (matchesSelector(elem, selector)) {
          ffElems.push(elem);
        }
        var childElems = elem.querySelectorAll(selector);
        for (var i = 0; i < childElems.length; i++) {
          ffElems.push(childElems[i]);
        }
      });
      return ffElems;
    };
    utils.debounceMethod = function(_class, methodName, threshold) {
      threshold = threshold || 100;
      var method = _class.prototype[methodName];
      var timeoutName = methodName + "Timeout";
      _class.prototype[methodName] = function() {
        var timeout = this[timeoutName];
        clearTimeout(timeout);
        var args = arguments;
        var _this = this;
        this[timeoutName] = setTimeout(function() {
          method.apply(_this, args);
          delete _this[timeoutName];
        }, threshold);
      };
    };
    utils.docReady = function(callback) {
      var readyState = document.readyState;
      if (readyState == "complete" || readyState == "interactive") {
        setTimeout(callback);
      } else {
        document.addEventListener("DOMContentLoaded", callback);
      }
    };
    utils.toDashed = function(str) {
      return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
        return $1 + "-" + $2;
      }).toLowerCase();
    };
    var console2 = window2.console;
    utils.htmlInit = function(WidgetClass, namespace) {
      utils.docReady(function() {
        var dashedNamespace = utils.toDashed(namespace);
        var dataAttr = "data-" + dashedNamespace;
        var dataAttrElems = document.querySelectorAll("[" + dataAttr + "]");
        var jsDashElems = document.querySelectorAll(".js-" + dashedNamespace);
        var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
        var dataOptionsAttr = dataAttr + "-options";
        var jQuery2 = window2.jQuery;
        elems.forEach(function(elem) {
          var attr2 = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
          var options;
          try {
            options = attr2 && JSON.parse(attr2);
          } catch (error) {
            if (console2) {
              console2.error("Error parsing " + dataAttr + " on " + elem.className + ": " + error);
            }
            return;
          }
          var instance2 = new WidgetClass(elem, options);
          if (jQuery2) {
            jQuery2.data(elem, namespace, instance2);
          }
        });
      });
    };
    return utils;
  });
  (function(window2, factory8) {
    if (typeof define == "function" && define.amd) {
      define(
        "outlayer/item",
        [
          "ev-emitter/ev-emitter",
          "get-size/get-size"
        ],
        factory8
      );
    } else {
      window2.Outlayer = {};
      window2.Outlayer.Item = factory8(
        window2.EvEmitter,
        window2.getSize
      );
    }
  })(window, function factory5(EvEmitter, getSize) {
    function isEmptyObj(obj) {
      for (var prop in obj) {
        return false;
      }
      prop = null;
      return true;
    }
    var docElemStyle = document.documentElement.style;
    var transitionProperty = typeof docElemStyle.transition == "string" ? "transition" : "WebkitTransition";
    var transformProperty = typeof docElemStyle.transform == "string" ? "transform" : "WebkitTransform";
    var transitionEndEvent = {
      WebkitTransition: "webkitTransitionEnd",
      transition: "transitionend"
    }[transitionProperty];
    var vendorProperties = {
      transform: transformProperty,
      transition: transitionProperty,
      transitionDuration: transitionProperty + "Duration",
      transitionProperty: transitionProperty + "Property",
      transitionDelay: transitionProperty + "Delay"
    };
    function Item(element2, layout) {
      if (!element2) {
        return;
      }
      this.element = element2;
      this.layout = layout;
      this.position = {
        x: 0,
        y: 0
      };
      this._create();
    }
    var proto = Item.prototype = Object.create(EvEmitter.prototype);
    proto.constructor = Item;
    proto._create = function() {
      this._transn = {
        ingProperties: {},
        clean: {},
        onEnd: {}
      };
      this.css({
        position: "absolute"
      });
    };
    proto.handleEvent = function(event) {
      var method = "on" + event.type;
      if (this[method]) {
        this[method](event);
      }
    };
    proto.getSize = function() {
      this.size = getSize(this.element);
    };
    proto.css = function(style) {
      var elemStyle = this.element.style;
      for (var prop in style) {
        var supportedProp = vendorProperties[prop] || prop;
        elemStyle[supportedProp] = style[prop];
      }
    };
    proto.getPosition = function() {
      var style = getComputedStyle(this.element);
      var isOriginLeft = this.layout._getOption("originLeft");
      var isOriginTop = this.layout._getOption("originTop");
      var xValue = style[isOriginLeft ? "left" : "right"];
      var yValue = style[isOriginTop ? "top" : "bottom"];
      var x = parseFloat(xValue);
      var y = parseFloat(yValue);
      var layoutSize = this.layout.size;
      if (xValue.indexOf("%") != -1) {
        x = x / 100 * layoutSize.width;
      }
      if (yValue.indexOf("%") != -1) {
        y = y / 100 * layoutSize.height;
      }
      x = isNaN(x) ? 0 : x;
      y = isNaN(y) ? 0 : y;
      x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
      y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
      this.position.x = x;
      this.position.y = y;
    };
    proto.layoutPosition = function() {
      var layoutSize = this.layout.size;
      var style = {};
      var isOriginLeft = this.layout._getOption("originLeft");
      var isOriginTop = this.layout._getOption("originTop");
      var xPadding = isOriginLeft ? "paddingLeft" : "paddingRight";
      var xProperty = isOriginLeft ? "left" : "right";
      var xResetProperty = isOriginLeft ? "right" : "left";
      var x = this.position.x + layoutSize[xPadding];
      style[xProperty] = this.getXValue(x);
      style[xResetProperty] = "";
      var yPadding = isOriginTop ? "paddingTop" : "paddingBottom";
      var yProperty = isOriginTop ? "top" : "bottom";
      var yResetProperty = isOriginTop ? "bottom" : "top";
      var y = this.position.y + layoutSize[yPadding];
      style[yProperty] = this.getYValue(y);
      style[yResetProperty] = "";
      this.css(style);
      this.emitEvent("layout", [this]);
    };
    proto.getXValue = function(x) {
      var isHorizontal = this.layout._getOption("horizontal");
      return this.layout.options.percentPosition && !isHorizontal ? x / this.layout.size.width * 100 + "%" : x + "px";
    };
    proto.getYValue = function(y) {
      var isHorizontal = this.layout._getOption("horizontal");
      return this.layout.options.percentPosition && isHorizontal ? y / this.layout.size.height * 100 + "%" : y + "px";
    };
    proto._transitionTo = function(x, y) {
      this.getPosition();
      var curX = this.position.x;
      var curY = this.position.y;
      var didNotMove = x == this.position.x && y == this.position.y;
      this.setPosition(x, y);
      if (didNotMove && !this.isTransitioning) {
        this.layoutPosition();
        return;
      }
      var transX = x - curX;
      var transY = y - curY;
      var transitionStyle = {};
      transitionStyle.transform = this.getTranslate(transX, transY);
      this.transition({
        to: transitionStyle,
        onTransitionEnd: {
          transform: this.layoutPosition
        },
        isCleaning: true
      });
    };
    proto.getTranslate = function(x, y) {
      var isOriginLeft = this.layout._getOption("originLeft");
      var isOriginTop = this.layout._getOption("originTop");
      x = isOriginLeft ? x : -x;
      y = isOriginTop ? y : -y;
      return "translate3d(" + x + "px, " + y + "px, 0)";
    };
    proto.goTo = function(x, y) {
      this.setPosition(x, y);
      this.layoutPosition();
    };
    proto.moveTo = proto._transitionTo;
    proto.setPosition = function(x, y) {
      this.position.x = parseFloat(x);
      this.position.y = parseFloat(y);
    };
    proto._nonTransition = function(args) {
      this.css(args.to);
      if (args.isCleaning) {
        this._removeStyles(args.to);
      }
      for (var prop in args.onTransitionEnd) {
        args.onTransitionEnd[prop].call(this);
      }
    };
    proto.transition = function(args) {
      if (!parseFloat(this.layout.options.transitionDuration)) {
        this._nonTransition(args);
        return;
      }
      var _transition = this._transn;
      for (var prop in args.onTransitionEnd) {
        _transition.onEnd[prop] = args.onTransitionEnd[prop];
      }
      for (prop in args.to) {
        _transition.ingProperties[prop] = true;
        if (args.isCleaning) {
          _transition.clean[prop] = true;
        }
      }
      if (args.from) {
        this.css(args.from);
        this.element.offsetHeight;
      }
      this.enableTransition(args.to);
      this.css(args.to);
      this.isTransitioning = true;
    };
    function toDashedAll(str) {
      return str.replace(/([A-Z])/g, function($1) {
        return "-" + $1.toLowerCase();
      });
    }
    var transitionProps = "opacity," + toDashedAll(transformProperty);
    proto.enableTransition = function() {
      if (this.isTransitioning) {
        return;
      }
      var duration = this.layout.options.transitionDuration;
      duration = typeof duration == "number" ? duration + "ms" : duration;
      this.css({
        transitionProperty: transitionProps,
        transitionDuration: duration,
        transitionDelay: this.staggerDelay || 0
      });
      this.element.addEventListener(transitionEndEvent, this, false);
    };
    proto.onwebkitTransitionEnd = function(event) {
      this.ontransitionend(event);
    };
    proto.onotransitionend = function(event) {
      this.ontransitionend(event);
    };
    var dashedVendorProperties = {
      "-webkit-transform": "transform"
    };
    proto.ontransitionend = function(event) {
      if (event.target !== this.element) {
        return;
      }
      var _transition = this._transn;
      var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
      delete _transition.ingProperties[propertyName];
      if (isEmptyObj(_transition.ingProperties)) {
        this.disableTransition();
      }
      if (propertyName in _transition.clean) {
        this.element.style[event.propertyName] = "";
        delete _transition.clean[propertyName];
      }
      if (propertyName in _transition.onEnd) {
        var onTransitionEnd = _transition.onEnd[propertyName];
        onTransitionEnd.call(this);
        delete _transition.onEnd[propertyName];
      }
      this.emitEvent("transitionEnd", [this]);
    };
    proto.disableTransition = function() {
      this.removeTransitionStyles();
      this.element.removeEventListener(transitionEndEvent, this, false);
      this.isTransitioning = false;
    };
    proto._removeStyles = function(style) {
      var cleanStyle = {};
      for (var prop in style) {
        cleanStyle[prop] = "";
      }
      this.css(cleanStyle);
    };
    var cleanTransitionStyle = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: ""
    };
    proto.removeTransitionStyles = function() {
      this.css(cleanTransitionStyle);
    };
    proto.stagger = function(delay) {
      delay = isNaN(delay) ? 0 : delay;
      this.staggerDelay = delay + "ms";
    };
    proto.removeElem = function() {
      this.element.parentNode.removeChild(this.element);
      this.css({ display: "" });
      this.emitEvent("remove", [this]);
    };
    proto.remove = function() {
      if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
        this.removeElem();
        return;
      }
      this.once("transitionEnd", function() {
        this.removeElem();
      });
      this.hide();
    };
    proto.reveal = function() {
      delete this.isHidden;
      this.css({ display: "" });
      var options = this.layout.options;
      var onTransitionEnd = {};
      var transitionEndProperty = this.getHideRevealTransitionEndProperty("visibleStyle");
      onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
      this.transition({
        from: options.hiddenStyle,
        to: options.visibleStyle,
        isCleaning: true,
        onTransitionEnd
      });
    };
    proto.onRevealTransitionEnd = function() {
      if (!this.isHidden) {
        this.emitEvent("reveal");
      }
    };
    proto.getHideRevealTransitionEndProperty = function(styleProperty) {
      var optionStyle = this.layout.options[styleProperty];
      if (optionStyle.opacity) {
        return "opacity";
      }
      for (var prop in optionStyle) {
        return prop;
      }
    };
    proto.hide = function() {
      this.isHidden = true;
      this.css({ display: "" });
      var options = this.layout.options;
      var onTransitionEnd = {};
      var transitionEndProperty = this.getHideRevealTransitionEndProperty("hiddenStyle");
      onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
      this.transition({
        from: options.visibleStyle,
        to: options.hiddenStyle,
        // keep hidden stuff hidden
        isCleaning: true,
        onTransitionEnd
      });
    };
    proto.onHideTransitionEnd = function() {
      if (this.isHidden) {
        this.css({ display: "none" });
        this.emitEvent("hide");
      }
    };
    proto.destroy = function() {
      this.css({
        position: "",
        left: "",
        right: "",
        top: "",
        bottom: "",
        transition: "",
        transform: ""
      });
    };
    return Item;
  });
  /*!
   * Outlayer v2.1.1
   * the brains and guts of a layout library
   * MIT license
   */
  (function(window2, factory8) {
    if (typeof define == "function" && define.amd) {
      define(
        "outlayer/outlayer",
        [
          "ev-emitter/ev-emitter",
          "get-size/get-size",
          "fizzy-ui-utils/utils",
          "./item"
        ],
        function(EvEmitter, getSize, utils, Item) {
          return factory8(window2, EvEmitter, getSize, utils, Item);
        }
      );
    } else {
      window2.Outlayer = factory8(
        window2,
        window2.EvEmitter,
        window2.getSize,
        window2.fizzyUIUtils,
        window2.Outlayer.Item
      );
    }
  })(window, function factory6(window2, EvEmitter, getSize, utils, Item) {
    var console2 = window2.console;
    var jQuery2 = window2.jQuery;
    var noop2 = function() {
    };
    var GUID = 0;
    var instances = {};
    function Outlayer(element2, options) {
      var queryElement = utils.getQueryElement(element2);
      if (!queryElement) {
        if (console2) {
          console2.error("Bad element for " + this.constructor.namespace + ": " + (queryElement || element2));
        }
        return;
      }
      this.element = queryElement;
      if (jQuery2) {
        this.$element = jQuery2(this.element);
      }
      this.options = utils.extend({}, this.constructor.defaults);
      this.option(options);
      var id = ++GUID;
      this.element.outlayerGUID = id;
      instances[id] = this;
      this._create();
      var isInitLayout = this._getOption("initLayout");
      if (isInitLayout) {
        this.layout();
      }
    }
    Outlayer.namespace = "outlayer";
    Outlayer.Item = Item;
    Outlayer.defaults = {
      containerStyle: {
        position: "relative"
      },
      initLayout: true,
      originLeft: true,
      originTop: true,
      resize: true,
      resizeContainer: true,
      // item options
      transitionDuration: "0.4s",
      hiddenStyle: {
        opacity: 0,
        transform: "scale(0.001)"
      },
      visibleStyle: {
        opacity: 1,
        transform: "scale(1)"
      }
    };
    var proto = Outlayer.prototype;
    utils.extend(proto, EvEmitter.prototype);
    proto.option = function(opts) {
      utils.extend(this.options, opts);
    };
    proto._getOption = function(option) {
      var oldOption = this.constructor.compatOptions[option];
      return oldOption && this.options[oldOption] !== void 0 ? this.options[oldOption] : this.options[option];
    };
    Outlayer.compatOptions = {
      // currentName: oldName
      initLayout: "isInitLayout",
      horizontal: "isHorizontal",
      layoutInstant: "isLayoutInstant",
      originLeft: "isOriginLeft",
      originTop: "isOriginTop",
      resize: "isResizeBound",
      resizeContainer: "isResizingContainer"
    };
    proto._create = function() {
      this.reloadItems();
      this.stamps = [];
      this.stamp(this.options.stamp);
      utils.extend(this.element.style, this.options.containerStyle);
      var canBindResize = this._getOption("resize");
      if (canBindResize) {
        this.bindResize();
      }
    };
    proto.reloadItems = function() {
      this.items = this._itemize(this.element.children);
    };
    proto._itemize = function(elems) {
      var itemElems = this._filterFindItemElements(elems);
      var Item2 = this.constructor.Item;
      var items = [];
      for (var i = 0; i < itemElems.length; i++) {
        var elem = itemElems[i];
        var item = new Item2(elem, this);
        items.push(item);
      }
      return items;
    };
    proto._filterFindItemElements = function(elems) {
      return utils.filterFindElements(elems, this.options.itemSelector);
    };
    proto.getItemElements = function() {
      return this.items.map(function(item) {
        return item.element;
      });
    };
    proto.layout = function() {
      this._resetLayout();
      this._manageStamps();
      var layoutInstant = this._getOption("layoutInstant");
      var isInstant = layoutInstant !== void 0 ? layoutInstant : !this._isLayoutInited;
      this.layoutItems(this.items, isInstant);
      this._isLayoutInited = true;
    };
    proto._init = proto.layout;
    proto._resetLayout = function() {
      this.getSize();
    };
    proto.getSize = function() {
      this.size = getSize(this.element);
    };
    proto._getMeasurement = function(measurement, size) {
      var option = this.options[measurement];
      var elem;
      if (!option) {
        this[measurement] = 0;
      } else {
        if (typeof option == "string") {
          elem = this.element.querySelector(option);
        } else if (option instanceof HTMLElement) {
          elem = option;
        }
        this[measurement] = elem ? getSize(elem)[size] : option;
      }
    };
    proto.layoutItems = function(items, isInstant) {
      items = this._getItemsForLayout(items);
      this._layoutItems(items, isInstant);
      this._postLayout();
    };
    proto._getItemsForLayout = function(items) {
      return items.filter(function(item) {
        return !item.isIgnored;
      });
    };
    proto._layoutItems = function(items, isInstant) {
      this._emitCompleteOnItems("layout", items);
      if (!items || !items.length) {
        return;
      }
      var queue = [];
      items.forEach(function(item) {
        var position = this._getItemLayoutPosition(item);
        position.item = item;
        position.isInstant = isInstant || item.isLayoutInstant;
        queue.push(position);
      }, this);
      this._processLayoutQueue(queue);
    };
    proto._getItemLayoutPosition = function() {
      return {
        x: 0,
        y: 0
      };
    };
    proto._processLayoutQueue = function(queue) {
      this.updateStagger();
      queue.forEach(function(obj, i) {
        this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
      }, this);
    };
    proto.updateStagger = function() {
      var stagger = this.options.stagger;
      if (stagger === null || stagger === void 0) {
        this.stagger = 0;
        return;
      }
      this.stagger = getMilliseconds(stagger);
      return this.stagger;
    };
    proto._positionItem = function(item, x, y, isInstant, i) {
      if (isInstant) {
        item.goTo(x, y);
      } else {
        item.stagger(i * this.stagger);
        item.moveTo(x, y);
      }
    };
    proto._postLayout = function() {
      this.resizeContainer();
    };
    proto.resizeContainer = function() {
      var isResizingContainer = this._getOption("resizeContainer");
      if (!isResizingContainer) {
        return;
      }
      var size = this._getContainerSize();
      if (size) {
        this._setContainerMeasure(size.width, true);
        this._setContainerMeasure(size.height, false);
      }
    };
    proto._getContainerSize = noop2;
    proto._setContainerMeasure = function(measure, isWidth) {
      if (measure === void 0) {
        return;
      }
      var elemSize = this.size;
      if (elemSize.isBorderBox) {
        measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight + elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop + elemSize.borderTopWidth + elemSize.borderBottomWidth;
      }
      measure = Math.max(measure, 0);
      this.element.style[isWidth ? "width" : "height"] = measure + "px";
    };
    proto._emitCompleteOnItems = function(eventName, items) {
      var _this = this;
      function onComplete() {
        _this.dispatchEvent(eventName + "Complete", null, [items]);
      }
      var count = items.length;
      if (!items || !count) {
        onComplete();
        return;
      }
      var doneCount = 0;
      function tick() {
        doneCount++;
        if (doneCount == count) {
          onComplete();
        }
      }
      items.forEach(function(item) {
        item.once(eventName, tick);
      });
    };
    proto.dispatchEvent = function(type, event, args) {
      var emitArgs = event ? [event].concat(args) : args;
      this.emitEvent(type, emitArgs);
      if (jQuery2) {
        this.$element = this.$element || jQuery2(this.element);
        if (event) {
          var $event = jQuery2.Event(event);
          $event.type = type;
          this.$element.trigger($event, args);
        } else {
          this.$element.trigger(type, args);
        }
      }
    };
    proto.ignore = function(elem) {
      var item = this.getItem(elem);
      if (item) {
        item.isIgnored = true;
      }
    };
    proto.unignore = function(elem) {
      var item = this.getItem(elem);
      if (item) {
        delete item.isIgnored;
      }
    };
    proto.stamp = function(elems) {
      elems = this._find(elems);
      if (!elems) {
        return;
      }
      this.stamps = this.stamps.concat(elems);
      elems.forEach(this.ignore, this);
    };
    proto.unstamp = function(elems) {
      elems = this._find(elems);
      if (!elems) {
        return;
      }
      elems.forEach(function(elem) {
        utils.removeFrom(this.stamps, elem);
        this.unignore(elem);
      }, this);
    };
    proto._find = function(elems) {
      if (!elems) {
        return;
      }
      if (typeof elems == "string") {
        elems = this.element.querySelectorAll(elems);
      }
      elems = utils.makeArray(elems);
      return elems;
    };
    proto._manageStamps = function() {
      if (!this.stamps || !this.stamps.length) {
        return;
      }
      this._getBoundingRect();
      this.stamps.forEach(this._manageStamp, this);
    };
    proto._getBoundingRect = function() {
      var boundingRect = this.element.getBoundingClientRect();
      var size = this.size;
      this._boundingRect = {
        left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
        top: boundingRect.top + size.paddingTop + size.borderTopWidth,
        right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
        bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
      };
    };
    proto._manageStamp = noop2;
    proto._getElementOffset = function(elem) {
      var boundingRect = elem.getBoundingClientRect();
      var thisRect = this._boundingRect;
      var size = getSize(elem);
      var offset = {
        left: boundingRect.left - thisRect.left - size.marginLeft,
        top: boundingRect.top - thisRect.top - size.marginTop,
        right: thisRect.right - boundingRect.right - size.marginRight,
        bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
      };
      return offset;
    };
    proto.handleEvent = utils.handleEvent;
    proto.bindResize = function() {
      window2.addEventListener("resize", this);
      this.isResizeBound = true;
    };
    proto.unbindResize = function() {
      window2.removeEventListener("resize", this);
      this.isResizeBound = false;
    };
    proto.onresize = function() {
      this.resize();
    };
    utils.debounceMethod(Outlayer, "onresize", 100);
    proto.resize = function() {
      if (!this.isResizeBound || !this.needsResizeLayout()) {
        return;
      }
      this.layout();
    };
    proto.needsResizeLayout = function() {
      var size = getSize(this.element);
      var hasSizes = this.size && size;
      return hasSizes && size.innerWidth !== this.size.innerWidth;
    };
    proto.addItems = function(elems) {
      var items = this._itemize(elems);
      if (items.length) {
        this.items = this.items.concat(items);
      }
      return items;
    };
    proto.appended = function(elems) {
      var items = this.addItems(elems);
      if (!items.length) {
        return;
      }
      this.layoutItems(items, true);
      this.reveal(items);
    };
    proto.prepended = function(elems) {
      var items = this._itemize(elems);
      if (!items.length) {
        return;
      }
      var previousItems = this.items.slice(0);
      this.items = items.concat(previousItems);
      this._resetLayout();
      this._manageStamps();
      this.layoutItems(items, true);
      this.reveal(items);
      this.layoutItems(previousItems);
    };
    proto.reveal = function(items) {
      this._emitCompleteOnItems("reveal", items);
      if (!items || !items.length) {
        return;
      }
      var stagger = this.updateStagger();
      items.forEach(function(item, i) {
        item.stagger(i * stagger);
        item.reveal();
      });
    };
    proto.hide = function(items) {
      this._emitCompleteOnItems("hide", items);
      if (!items || !items.length) {
        return;
      }
      var stagger = this.updateStagger();
      items.forEach(function(item, i) {
        item.stagger(i * stagger);
        item.hide();
      });
    };
    proto.revealItemElements = function(elems) {
      var items = this.getItems(elems);
      this.reveal(items);
    };
    proto.hideItemElements = function(elems) {
      var items = this.getItems(elems);
      this.hide(items);
    };
    proto.getItem = function(elem) {
      for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        if (item.element == elem) {
          return item;
        }
      }
    };
    proto.getItems = function(elems) {
      elems = utils.makeArray(elems);
      var items = [];
      elems.forEach(function(elem) {
        var item = this.getItem(elem);
        if (item) {
          items.push(item);
        }
      }, this);
      return items;
    };
    proto.remove = function(elems) {
      var removeItems = this.getItems(elems);
      this._emitCompleteOnItems("remove", removeItems);
      if (!removeItems || !removeItems.length) {
        return;
      }
      removeItems.forEach(function(item) {
        item.remove();
        utils.removeFrom(this.items, item);
      }, this);
    };
    proto.destroy = function() {
      var style = this.element.style;
      style.height = "";
      style.position = "";
      style.width = "";
      this.items.forEach(function(item) {
        item.destroy();
      });
      this.unbindResize();
      var id = this.element.outlayerGUID;
      delete instances[id];
      delete this.element.outlayerGUID;
      if (jQuery2) {
        jQuery2.removeData(this.element, this.constructor.namespace);
      }
    };
    Outlayer.data = function(elem) {
      elem = utils.getQueryElement(elem);
      var id = elem && elem.outlayerGUID;
      return id && instances[id];
    };
    Outlayer.create = function(namespace, options) {
      var Layout = subclass(Outlayer);
      Layout.defaults = utils.extend({}, Outlayer.defaults);
      utils.extend(Layout.defaults, options);
      Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
      Layout.namespace = namespace;
      Layout.data = Outlayer.data;
      Layout.Item = subclass(Item);
      utils.htmlInit(Layout, namespace);
      if (jQuery2 && jQuery2.bridget) {
        jQuery2.bridget(namespace, Layout);
      }
      return Layout;
    };
    function subclass(Parent) {
      function SubClass() {
        Parent.apply(this, arguments);
      }
      SubClass.prototype = Object.create(Parent.prototype);
      SubClass.prototype.constructor = SubClass;
      return SubClass;
    }
    var msUnits = {
      ms: 1,
      s: 1e3
    };
    function getMilliseconds(time) {
      if (typeof time == "number") {
        return time;
      }
      var matches = time.match(/(^\d*\.?\d*)(\w*)/);
      var num = matches && matches[1];
      var unit = matches && matches[2];
      if (!num.length) {
        return 0;
      }
      num = parseFloat(num);
      var mult = msUnits[unit] || 1;
      return num * mult;
    }
    Outlayer.Item = Item;
    return Outlayer;
  });
  /*!
   * Masonry v4.2.2
   * Cascading grid layout library
   * https://masonry.desandro.com
   * MIT License
   * by David DeSandro
   */
  (function(window2, factory8) {
    if (typeof define == "function" && define.amd) {
      define(
        [
          "outlayer/outlayer",
          "get-size/get-size"
        ],
        factory8
      );
    } else {
      window2.Masonry = factory8(
        window2.Outlayer,
        window2.getSize
      );
    }
  })(window, function factory7(Outlayer, getSize) {
    var Masonry2 = Outlayer.create("masonry");
    Masonry2.compatOptions.fitWidth = "isFitWidth";
    var proto = Masonry2.prototype;
    proto._resetLayout = function() {
      this.getSize();
      this._getMeasurement("columnWidth", "outerWidth");
      this._getMeasurement("gutter", "outerWidth");
      this.measureColumns();
      this.colYs = [];
      for (var i = 0; i < this.cols; i++) {
        this.colYs.push(0);
      }
      this.maxY = 0;
      this.horizontalColIndex = 0;
    };
    proto.measureColumns = function() {
      this.getContainerWidth();
      if (!this.columnWidth) {
        var firstItem = this.items[0];
        var firstItemElem = firstItem && firstItem.element;
        this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth || // if first elem has no width, default to size of container
        this.containerWidth;
      }
      var columnWidth = this.columnWidth += this.gutter;
      var containerWidth = this.containerWidth + this.gutter;
      var cols = containerWidth / columnWidth;
      var excess = columnWidth - containerWidth % columnWidth;
      var mathMethod = excess && excess < 1 ? "round" : "floor";
      cols = Math[mathMethod](cols);
      this.cols = Math.max(cols, 1);
    };
    proto.getContainerWidth = function() {
      var isFitWidth = this._getOption("fitWidth");
      var container = isFitWidth ? this.element.parentNode : this.element;
      var size = getSize(container);
      this.containerWidth = size && size.innerWidth;
    };
    proto._getItemLayoutPosition = function(item) {
      item.getSize();
      var remainder = item.size.outerWidth % this.columnWidth;
      var mathMethod = remainder && remainder < 1 ? "round" : "ceil";
      var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
      colSpan = Math.min(colSpan, this.cols);
      var colPosMethod = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition";
      var colPosition = this[colPosMethod](colSpan, item);
      var position = {
        x: this.columnWidth * colPosition.col,
        y: colPosition.y
      };
      var setHeight = colPosition.y + item.size.outerHeight;
      var setMax = colSpan + colPosition.col;
      for (var i = colPosition.col; i < setMax; i++) {
        this.colYs[i] = setHeight;
      }
      return position;
    };
    proto._getTopColPosition = function(colSpan) {
      var colGroup = this._getTopColGroup(colSpan);
      var minimumY = Math.min.apply(Math, colGroup);
      return {
        col: colGroup.indexOf(minimumY),
        y: minimumY
      };
    };
    proto._getTopColGroup = function(colSpan) {
      if (colSpan < 2) {
        return this.colYs;
      }
      var colGroup = [];
      var groupCount = this.cols + 1 - colSpan;
      for (var i = 0; i < groupCount; i++) {
        colGroup[i] = this._getColGroupY(i, colSpan);
      }
      return colGroup;
    };
    proto._getColGroupY = function(col, colSpan) {
      if (colSpan < 2) {
        return this.colYs[col];
      }
      var groupColYs = this.colYs.slice(col, col + colSpan);
      return Math.max.apply(Math, groupColYs);
    };
    proto._getHorizontalColPosition = function(colSpan, item) {
      var col = this.horizontalColIndex % this.cols;
      var isOver = colSpan > 1 && col + colSpan > this.cols;
      col = isOver ? 0 : col;
      var hasSize = item.size.outerWidth && item.size.outerHeight;
      this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
      return {
        col,
        y: this._getColGroupY(col, colSpan)
      };
    };
    proto._manageStamp = function(stamp) {
      var stampSize = getSize(stamp);
      var offset = this._getElementOffset(stamp);
      var isOriginLeft = this._getOption("originLeft");
      var firstX = isOriginLeft ? offset.left : offset.right;
      var lastX = firstX + stampSize.outerWidth;
      var firstCol = Math.floor(firstX / this.columnWidth);
      firstCol = Math.max(0, firstCol);
      var lastCol = Math.floor(lastX / this.columnWidth);
      lastCol -= lastX % this.columnWidth ? 0 : 1;
      lastCol = Math.min(this.cols - 1, lastCol);
      var isOriginTop = this._getOption("originTop");
      var stampMaxY = (isOriginTop ? offset.top : offset.bottom) + stampSize.outerHeight;
      for (var i = firstCol; i <= lastCol; i++) {
        this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
      }
    };
    proto._getContainerSize = function() {
      this.maxY = Math.max.apply(Math, this.colYs);
      var size = {
        height: this.maxY
      };
      if (this._getOption("fitWidth")) {
        size.width = this._getContainerFitWidth();
      }
      return size;
    };
    proto._getContainerFitWidth = function() {
      var unusedCols = 0;
      var i = this.cols;
      while (--i) {
        if (this.colYs[i] !== 0) {
          break;
        }
        unusedCols++;
      }
      return (this.cols - unusedCols) * this.columnWidth - this.gutter;
    };
    proto.needsResizeLayout = function() {
      var previousWidth = this.containerWidth;
      this.getContainerWidth();
      return previousWidth != this.containerWidth;
    };
    return Masonry2;
  });
  function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
    const o = +getComputedStyle(node).opacity;
    return {
      delay,
      duration,
      easing,
      css: (t) => `opacity: ${t * o}`
    };
  }
  const subscriber_queue = [];
  function writable(value, start = noop) {
    let stop;
    const subscribers = /* @__PURE__ */ new Set();
    function set(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;
        if (stop) {
          const run_queue = !subscriber_queue.length;
          for (const subscriber of subscribers) {
            subscriber[1]();
            subscriber_queue.push(subscriber, value);
          }
          if (run_queue) {
            for (let i = 0; i < subscriber_queue.length; i += 2) {
              subscriber_queue[i][0](subscriber_queue[i + 1]);
            }
            subscriber_queue.length = 0;
          }
        }
      }
    }
    function update2(fn) {
      set(fn(value));
    }
    function subscribe2(run2, invalidate = noop) {
      const subscriber = [run2, invalidate];
      subscribers.add(subscriber);
      if (subscribers.size === 1) {
        stop = start(set) || noop;
      }
      run2(value);
      return () => {
        subscribers.delete(subscriber);
        if (subscribers.size === 0 && stop) {
          stop();
          stop = null;
        }
      };
    }
    return { set, update: update2, subscribe: subscribe2 };
  }
  const _SORT_COUNT = {
    /**外部呼叫函数次数 */
    Call: 0,
    /**函数实际执行次数 */
    Run: 0
  };
  let timer = null;
  function debounce(func2, delay) {
    return function() {
      if (timer) {
        console.warn("debounce dupe!!!!!!");
        clearTimeout(timer);
      }
      timer = setTimeout(function() {
        func2.apply(this, arguments);
        timer = null;
      }, delay);
    };
  }
  function throttle(func2, delay) {
    let timerId;
    let lastExecTime = 0;
    return function(...args) {
      const currentTime = Date.now();
      const elapsedTime = currentTime - lastExecTime;
      if (!timerId && elapsedTime > delay) {
        func2.apply(this, args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
          func2.apply(this, args);
          lastExecTime = currentTime;
          timerId = null;
        }, delay - elapsedTime);
      }
    };
  }
  const throttleSort = throttle(doSortMasonry, 1500);
  const throttleSort_fast = throttle(doSortMasonry, 30);
  function doSortMasonry() {
    _SORT_COUNT.Run++;
    console.log(`呼叫整理次数: ${_SORT_COUNT.Call}   实际整理次数: ${_SORT_COUNT.Run}`);
    masonry.layout();
  }
  function sortMasonry(speed = "normal") {
    _SORT_COUNT.Call++;
    if (masonry) {
      if (speed === "fast") {
        throttleSort_fast();
      } else {
        throttleSort();
      }
    }
  }
  function NEXUS_TOOLS() {
    console.log("------------------------NEXUS TOOLS------------------------");
    jQuery(document).ready(function() {
      function getImgPosition(event, imgEle2) {
        let imgWidth = imgEle2.prop("naturalWidth");
        let imgHeight = imgEle2.prop("naturalHeight");
        let ratio = imgWidth / imgHeight;
        let offsetX = 0;
        let offsetY = 0;
        let width = window.innerWidth - event.clientX;
        let height = window.innerHeight - event.clientY;
        let changeOffsetY = 0;
        let changeOffsetX = false;
        if (event.clientX > window.innerWidth / 2 && event.clientX + imgWidth > window.innerWidth) {
          changeOffsetX = true;
          width = event.clientX;
        }
        if (event.clientY > window.innerHeight / 2) {
          if (event.clientY + imgHeight / 2 > window.innerHeight) {
            changeOffsetY = 1;
            height = event.clientY;
          } else if (event.clientY + imgHeight > window.innerHeight) {
            changeOffsetY = 2;
            height = event.clientY;
          }
        }
        if (imgWidth > width) {
          imgWidth = width;
          imgHeight = imgWidth / ratio;
        }
        if (imgHeight > height) {
          imgHeight = height;
          imgWidth = imgHeight * ratio;
        }
        if (changeOffsetX) {
          offsetX = -imgWidth;
        }
        if (changeOffsetY == 1) {
          offsetY = -(imgHeight - (window.innerHeight - event.clientY));
        } else if (changeOffsetY == 2) {
          offsetY = -imgHeight / 2;
        }
        return { imgWidth, imgHeight, offsetX, offsetY };
      }
      function getMinRatio(pic, container) {
        return Math.min(container.width / pic.width, container.height / pic.height);
      }
      function previewPosition_Kesa(event, imgEle2) {
        let imgWidth = imgEle2.prop("naturalWidth") ?? 0;
        let imgHeight = imgEle2.prop("naturalHeight") ?? 0;
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const distanceToTop = mouseY;
        const distanceToBottom = viewportHeight - mouseY;
        const distanceToLeft = mouseX;
        const distanceToRight = viewportWidth - mouseX;
        const picSize = {
          width: imgWidth,
          height: imgHeight
        };
        const containerSize = {
          bot: {
            width: viewportWidth,
            height: distanceToBottom
          },
          top: {
            width: viewportWidth,
            height: distanceToTop
          },
          right: {
            width: distanceToRight,
            height: viewportHeight
          },
          left: {
            width: distanceToLeft,
            height: viewportHeight
          }
        };
        let maxRatio = 0;
        let maxPosition = "";
        for (const key in containerSize) {
          if (Object.hasOwnProperty.call(containerSize, key)) {
            const element2 = containerSize[key];
            if (getMinRatio(picSize, element2) > maxRatio) {
              maxRatio = getMinRatio(picSize, element2);
              maxPosition = key;
            }
          }
        }
        const result = {
          top: {
            left: 0,
            top: 0,
            width: viewportWidth,
            height: distanceToTop
          },
          bot: {
            left: 0,
            top: distanceToTop,
            width: viewportWidth,
            height: distanceToBottom
          },
          left: {
            left: 0,
            top: 0,
            width: distanceToLeft,
            height: viewportHeight
          },
          right: {
            left: distanceToLeft,
            top: 0,
            width: distanceToRight,
            height: viewportHeight
          },
          default: {
            left: 0,
            top: 0,
            width: 0,
            height: 0
          }
        };
        const container = maxPosition != "" ? result[maxPosition] : result["default"];
        return container;
      }
      function getPosition(event, position) {
        return {
          left: event.pageX + position.offsetX,
          top: event.pageY + position.offsetY,
          width: position.imgWidth,
          height: position.imgHeight
        };
      }
      const selector = "img.preview_Kesa";
      let imgEle;
      let imgPosition;
      if (!jQuery("#nexus-preview").length) {
        const _previewDom = document.body.appendChild(document.createElement("img"));
        _previewDom.id = "nexus-preview";
      }
      jQuery("#nexus-preview");
      function createKesaPreview(color) {
        const parent = jQuery("<div>", {
          id: "kp_container",
          css: {
            backgroundColor: color,
            opacity: 1,
            position: "fixed",
            zIndex: 2e4,
            pointerEvents: "none",
            transition: "all .3s"
          }
        });
        parent.append(jQuery("<img>", {
          class: "kp_img",
          css: {
            position: "absolute",
            zIndex: 20002,
            pointerEvents: "none",
            width: "100%",
            height: "100%",
            objectFit: "contain"
          }
        }));
        parent.append(jQuery("<img>", {
          class: "kp_img",
          css: {
            position: "absolute",
            zIndex: 20001,
            pointerEvents: "none",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: `blur(8px)`
          }
        }));
        return parent;
      }
      const kesa_preview = jQuery("#kp_container").length > 0 ? jQuery("#kp_container") : createKesaPreview("");
      jQuery("body").append(kesa_preview);
      let buffer = null;
      jQuery("body").on("mouseover", selector, function(e) {
        imgEle = jQuery(this);
        buffer = setTimeout(() => {
          if (get_store_value(_show_nexus_pic)) {
            imgPosition = getImgPosition(e, imgEle);
            getPosition(e, imgPosition);
            let src = imgEle.attr("src");
            if (src) {
              if (kesa_preview)
                kesa_preview.find(".kp_img").attr("src", src);
            }
            kesa_preview.css(previewPosition_Kesa(e, imgEle)).show();
          }
        }, get_store_value(_delay_nexus_pic));
      }).on("mouseout", selector, function(e) {
        kesa_preview.hide();
        if (buffer)
          clearTimeout(buffer);
      }).on("mousemove", selector, function(e) {
        imgPosition = getImgPosition(e, imgEle);
        getPosition(e, imgPosition);
        kesa_preview.css(previewPosition_Kesa(e, imgEle));
      });
      if ("IntersectionObserver" in window) {
        let imgList = [...document.querySelectorAll(".nexus-lazy-load_Kesa")];
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const el = entry.target;
            entry.intersectionRatio;
            if (entry.isIntersecting && !el.classList.contains("preview_Kesa")) {
              const source = el.dataset.src;
              el.src = source;
              el.classList.add("preview_Kesa");
              sortMasonry();
            }
          });
        });
        imgList.forEach((img) => io.observe(img));
      }
    });
  }
  function persistStore(key, startValue) {
    const savedValue = localStorage.getItem(key);
    const initialValue = savedValue ? JSON.parse(savedValue) : startValue;
    const store = writable(initialValue);
    store.subscribe((value) => {
      localStorage.setItem(key, JSON.stringify(value));
    });
    return store;
  }
  const _Global_Masonry = writable({});
  const _iframe_switch = writable(0);
  const _iframe_url = writable("https://kamept.com/index.php");
  const _current_domain = persistStore("_domain", "");
  const _current_bgColor = persistStore("_bgColor", "");
  const _show_originTable = writable(0);
  const _show_configPanel = writable(false);
  const _panelPos = persistStore("_panelPos", { x: 0, y: 0 });
  const _turnPage = persistStore("_turnPage", false);
  const _show_debug_btn = persistStore("_show_debug_btn", 0);
  const _show_nexus_pic = persistStore("_show_nexus_pic", 1);
  const _delay_nexus_pic = persistStore("_delay_nexus_pic", 600);
  const _card_width = persistStore("_card_width", 200);
  const site_setting = {
    mt: {
      // 隐藏gay卡片: 默认为true
      hide_gay: true
    }
  };
  const _SITE_SETTING = persistStore("_SITE_SETTING", site_setting);
  let mark1 = false;
  _SITE_SETTING.subscribe((value) => {
    if (!mark1) {
      mark1 = true;
    } else {
      sortMasonry("fast");
      sortMasonry("fast");
      sortMasonry();
      sortMasonry();
    }
  });
  const show_switch = {
    // 全局总开关
    all: false,
    // 显示标题
    title: true,
    // 显示置顶和免费
    free: false,
    // 显示副标题
    sub_title: false,
    // 显示标签
    tags: false,
    // 显示大小&下载&收藏
    size_download_collect: false,
    // 显示上传时间
    upload_time: false,
    // 显示评论/上传/下载/完成
    statistics: false
  };
  const _CARD_SHOW = persistStore("_card_show", show_switch);
  let mark = false;
  _CARD_SHOW.subscribe((value) => {
    if (!mark) {
      mark = true;
    } else {
      sortMasonry("fast");
      sortMasonry("fast");
      sortMasonry();
      sortMasonry();
    }
  });
  function create_if_block_6$2(ctx) {
    let svg;
    let path;
    let circle;
    let t0;
    let div;
    let t1;
    return {
      c() {
        svg = svg_element("svg");
        path = svg_element("path");
        circle = svg_element("circle");
        t0 = space();
        div = element("div");
        t1 = text(
          /*label*/
          ctx[5]
        );
        attr(path, "d", "M102.6476822,65.245285l-40.2463036,40.1161652c-3.1256676,3.1155624-8.1839256,3.1114655-11.3045425-0.0091476  l-26.7890854-26.789093c-3.1289177-3.1289139-3.1234951-8.2035599,0.0121021-11.3257828l40.077301-39.9063568  C65.8964539,25.8381672,67.9261017,25,70.0419083,25H97c4.4182816,0,8,3.5817223,8,8v26.5792809  C105,61.7055016,104.1535873,63.7442589,102.6476822,65.245285z");
        attr(path, "fill", "yellow");
        attr(path, "stroke", "#000000");
        attr(path, "stroke-linecap", "round");
        attr(path, "stroke-linejoin", "round");
        attr(path, "stroke-miterlimit", "10");
        attr(path, "stroke-width", "4");
        attr(circle, "cx", "85");
        attr(circle, "cy", "45");
        attr(circle, "fill", "red");
        attr(circle, "r", "8");
        attr(circle, "stroke", "#000000");
        attr(circle, "stroke-linecap", "round");
        attr(circle, "stroke-linejoin", "round");
        attr(circle, "stroke-miterlimit", "10");
        attr(circle, "stroke-width", "4");
        attr(svg, "enable-background", "new 0 0 128 128");
        attr(svg, "id", "Layer_1");
        attr(svg, "version", "1.1");
        attr(svg, "viewBox", "0 0 128 128");
        attr(svg, "xml:space", "preserve");
        attr(svg, "width", "28");
        attr(svg, "height", "28");
        attr(svg, "class", "hint");
        attr(div, "class", "_hint svelte-2vaqag");
      },
      m(target, anchor) {
        insert(target, svg, anchor);
        append(svg, path);
        append(svg, circle);
        insert(target, t0, anchor);
        insert(target, div, anchor);
        append(div, t1);
      },
      p(ctx2, dirty) {
        if (dirty & /*label*/
        32)
          set_data(
            t1,
            /*label*/
            ctx2[5]
          );
      },
      d(detaching) {
        if (detaching)
          detach(svg);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(div);
      }
    };
  }
  function create_if_block_2$3(ctx) {
    let t;
    let if_block_anchor;
    function select_block_type(ctx2, dirty) {
      if (
        /*green_state*/
        ctx2[6]
      )
        return create_if_block_3$3;
      if (
        /*checked*/
        ctx2[0]
      )
        return create_if_block_5$2;
      return create_else_block_1$1;
    }
    let current_block_type = select_block_type(ctx);
    let if_block = current_block_type(ctx);
    return {
      c() {
        t = text(": \n\n      ");
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        insert(target, t, anchor);
        if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx2);
          if (if_block) {
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        }
      },
      d(detaching) {
        if (detaching)
          detach(t);
        if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_else_block_1$1(ctx) {
    let span;
    let t;
    return {
      c() {
        span = element("span");
        t = text(
          /*title_green*/
          ctx[3]
        );
        attr(span, "class", "title_green svelte-2vaqag");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
      },
      p(ctx2, dirty) {
        if (dirty & /*title_green*/
        8)
          set_data(
            t,
            /*title_green*/
            ctx2[3]
          );
      },
      d(detaching) {
        if (detaching)
          detach(span);
      }
    };
  }
  function create_if_block_5$2(ctx) {
    let span;
    let t;
    return {
      c() {
        span = element("span");
        t = text(
          /*title_red*/
          ctx[4]
        );
        attr(span, "class", "title_red svelte-2vaqag");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
      },
      p(ctx2, dirty) {
        if (dirty & /*title_red*/
        16)
          set_data(
            t,
            /*title_red*/
            ctx2[4]
          );
      },
      d(detaching) {
        if (detaching)
          detach(span);
      }
    };
  }
  function create_if_block_3$3(ctx) {
    let if_block_anchor;
    function select_block_type_1(ctx2, dirty) {
      if (
        /*checked*/
        ctx2[0]
      )
        return create_if_block_4$3;
      return create_else_block$1;
    }
    let current_block_type = select_block_type_1(ctx);
    let if_block = current_block_type(ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (current_block_type === (current_block_type = select_block_type_1(ctx2)) && if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx2);
          if (if_block) {
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        }
      },
      d(detaching) {
        if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_else_block$1(ctx) {
    let span;
    let t;
    return {
      c() {
        span = element("span");
        t = text(
          /*title_red*/
          ctx[4]
        );
        attr(span, "class", "title_red svelte-2vaqag");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
      },
      p(ctx2, dirty) {
        if (dirty & /*title_red*/
        16)
          set_data(
            t,
            /*title_red*/
            ctx2[4]
          );
      },
      d(detaching) {
        if (detaching)
          detach(span);
      }
    };
  }
  function create_if_block_4$3(ctx) {
    let span;
    let t;
    return {
      c() {
        span = element("span");
        t = text(
          /*title_green*/
          ctx[3]
        );
        attr(span, "class", "title_green svelte-2vaqag");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
      },
      p(ctx2, dirty) {
        if (dirty & /*title_green*/
        8)
          set_data(
            t,
            /*title_green*/
            ctx2[3]
          );
      },
      d(detaching) {
        if (detaching)
          detach(span);
      }
    };
  }
  function create_if_block_1$3(ctx) {
    let div;
    let input;
    let t;
    let label_1;
    let mounted;
    let dispose;
    return {
      c() {
        div = element("div");
        input = element("input");
        t = space();
        label_1 = element("label");
        attr(input, "type", "checkbox");
        attr(input, "id", "_t" + /*id*/
        ctx[7]);
        attr(input, "class", "svelte-2vaqag");
        attr(label_1, "for", "_t" + /*id*/
        ctx[7]);
        attr(label_1, "class", "svelte-2vaqag");
        attr(div, "class", "s_switch");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, input);
        input.checked = /*checked*/
        ctx[0];
        append(div, t);
        append(div, label_1);
        if (!mounted) {
          dispose = [
            listen(
              input,
              "change",
              /*input_change_handler*/
              ctx[10]
            ),
            listen(
              input,
              "change",
              /*change_handler*/
              ctx[11]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*checked*/
        1) {
          input.checked = /*checked*/
          ctx2[0];
        }
      },
      d(detaching) {
        if (detaching)
          detach(div);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_if_block$4(ctx) {
    let current;
    const default_slot_template = (
      /*#slots*/
      ctx[9].default
    );
    const default_slot = create_slot(
      default_slot_template,
      ctx,
      /*$$scope*/
      ctx[8],
      null
    );
    return {
      c() {
        if (default_slot)
          default_slot.c();
      },
      m(target, anchor) {
        if (default_slot) {
          default_slot.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & /*$$scope*/
          256)) {
            update_slot_base(
              default_slot,
              default_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[8],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[8]
              ) : get_slot_changes(
                default_slot_template,
                /*$$scope*/
                ctx2[8],
                dirty,
                null
              ),
              null
            );
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (default_slot)
          default_slot.d(detaching);
      }
    };
  }
  function create_fragment$4(ctx) {
    let div1;
    let div0;
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let current;
    let if_block0 = (
      /*label*/
      ctx[5] && create_if_block_6$2(ctx)
    );
    let if_block1 = (
      /*title_green*/
      (ctx[3] || /*title_red*/
      ctx[4]) && create_if_block_2$3(ctx)
    );
    let if_block2 = (
      /*type*/
      ctx[1] == "switch" && create_if_block_1$3(ctx)
    );
    let if_block3 = (
      /*type*/
      ctx[1] == "range" && create_if_block$4(ctx)
    );
    return {
      c() {
        div1 = element("div");
        div0 = element("div");
        if (if_block0)
          if_block0.c();
        t0 = space();
        t1 = text(
          /*title_fixed*/
          ctx[2]
        );
        t2 = space();
        if (if_block1)
          if_block1.c();
        t3 = space();
        if (if_block2)
          if_block2.c();
        t4 = space();
        if (if_block3)
          if_block3.c();
        attr(div0, "class", "s_title svelte-2vaqag");
        attr(
          div0,
          "title",
          /*label*/
          ctx[5]
        );
        attr(div1, "class", "switch svelte-2vaqag");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, div0);
        if (if_block0)
          if_block0.m(div0, null);
        append(div0, t0);
        append(div0, t1);
        append(div0, t2);
        if (if_block1)
          if_block1.m(div0, null);
        append(div1, t3);
        if (if_block2)
          if_block2.m(div1, null);
        append(div1, t4);
        if (if_block3)
          if_block3.m(div1, null);
        current = true;
      },
      p(ctx2, [dirty]) {
        if (
          /*label*/
          ctx2[5]
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_6$2(ctx2);
            if_block0.c();
            if_block0.m(div0, t0);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (!current || dirty & /*title_fixed*/
        4)
          set_data(
            t1,
            /*title_fixed*/
            ctx2[2]
          );
        if (
          /*title_green*/
          ctx2[3] || /*title_red*/
          ctx2[4]
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block_2$3(ctx2);
            if_block1.c();
            if_block1.m(div0, null);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if (!current || dirty & /*label*/
        32) {
          attr(
            div0,
            "title",
            /*label*/
            ctx2[5]
          );
        }
        if (
          /*type*/
          ctx2[1] == "switch"
        ) {
          if (if_block2) {
            if_block2.p(ctx2, dirty);
          } else {
            if_block2 = create_if_block_1$3(ctx2);
            if_block2.c();
            if_block2.m(div1, t4);
          }
        } else if (if_block2) {
          if_block2.d(1);
          if_block2 = null;
        }
        if (
          /*type*/
          ctx2[1] == "range"
        ) {
          if (if_block3) {
            if_block3.p(ctx2, dirty);
            if (dirty & /*type*/
            2) {
              transition_in(if_block3, 1);
            }
          } else {
            if_block3 = create_if_block$4(ctx2);
            if_block3.c();
            transition_in(if_block3, 1);
            if_block3.m(div1, null);
          }
        } else if (if_block3) {
          group_outros();
          transition_out(if_block3, 1, 1, () => {
            if_block3 = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block3);
        current = true;
      },
      o(local) {
        transition_out(if_block3);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div1);
        if (if_block0)
          if_block0.d();
        if (if_block1)
          if_block1.d();
        if (if_block2)
          if_block2.d();
        if (if_block3)
          if_block3.d();
      }
    };
  }
  function instance$5($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let { type = "switch" } = $$props;
    let { title_fixed = "" } = $$props;
    let { title_green = "" } = $$props;
    let { title_red = "" } = $$props;
    let { label = "" } = $$props;
    const id = Math.random().toFixed(8);
    let { checked = false } = $$props;
    let { green_state = true } = $$props;
    function input_change_handler() {
      checked = this.checked;
      $$invalidate(0, checked);
    }
    const change_handler = () => {
      console.log(title_fixed, checked);
    };
    $$self.$$set = ($$props2) => {
      if ("type" in $$props2)
        $$invalidate(1, type = $$props2.type);
      if ("title_fixed" in $$props2)
        $$invalidate(2, title_fixed = $$props2.title_fixed);
      if ("title_green" in $$props2)
        $$invalidate(3, title_green = $$props2.title_green);
      if ("title_red" in $$props2)
        $$invalidate(4, title_red = $$props2.title_red);
      if ("label" in $$props2)
        $$invalidate(5, label = $$props2.label);
      if ("checked" in $$props2)
        $$invalidate(0, checked = $$props2.checked);
      if ("green_state" in $$props2)
        $$invalidate(6, green_state = $$props2.green_state);
      if ("$$scope" in $$props2)
        $$invalidate(8, $$scope = $$props2.$$scope);
    };
    return [
      checked,
      type,
      title_fixed,
      title_green,
      title_red,
      label,
      green_state,
      id,
      $$scope,
      slots,
      input_change_handler,
      change_handler
    ];
  }
  class Switch extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$5, create_fragment$4, safe_not_equal, {
        type: 1,
        title_fixed: 2,
        title_green: 3,
        title_red: 4,
        label: 5,
        checked: 0,
        green_state: 6
      });
    }
  }
  function create_if_block_9$2(ctx) {
    let button0;
    let t1;
    let button1;
    let t3;
    let button2;
    let t4;
    let t5;
    let t6;
    let button3;
    let mounted;
    let dispose;
    return {
      c() {
        button0 = element("button");
        button0.textContent = "[d]切换宽度";
        t1 = space();
        button1 = element("button");
        button1.textContent = "[d]显示详情";
        t3 = space();
        button2 = element("button");
        t4 = text("[d]");
        t5 = text(
          /*label_switchMode*/
          ctx[1]
        );
        t6 = space();
        button3 = element("button");
        button3.textContent = "[d]iframe";
        attr(button0, "class", "sideP__btn");
        attr(button1, "class", "sideP__btn");
        attr(button2, "class", "sideP__btn");
        attr(button3, "class", "sideP__btn");
      },
      m(target, anchor) {
        insert(target, button0, anchor);
        insert(target, t1, anchor);
        insert(target, button1, anchor);
        insert(target, t3, anchor);
        insert(target, button2, anchor);
        append(button2, t4);
        append(button2, t5);
        insert(target, t6, anchor);
        insert(target, button3, anchor);
        if (!mounted) {
          dispose = [
            listen(
              button0,
              "click",
              /*config_changeWidth*/
              ctx[15]
            ),
            listen(
              button1,
              "click",
              /*config_showAllDetails*/
              ctx[16]
            ),
            listen(
              button2,
              "click",
              /*config_switchMode*/
              ctx[17]
            ),
            listen(
              button3,
              "click",
              /*config_changeLoadMode*/
              ctx[18]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*label_switchMode*/
        2)
          set_data(
            t5,
            /*label_switchMode*/
            ctx2[1]
          );
      },
      d(detaching) {
        if (detaching)
          detach(button0);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(button1);
        if (detaching)
          detach(t3);
        if (detaching)
          detach(button2);
        if (detaching)
          detach(t6);
        if (detaching)
          detach(button3);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_if_block$3(ctx) {
    let div8;
    let div7;
    let div0;
    let p;
    let t1;
    let button0;
    let t2;
    let t3;
    let div2;
    let h10;
    let t5;
    let div1;
    let switch0;
    let updating_checked;
    let t6;
    let switch1;
    let updating_checked_1;
    let t7;
    let switch2;
    let updating_checked_2;
    let t8;
    let t9;
    let button1;
    let t11;
    let t12;
    let div6;
    let h11;
    let t14;
    let div3;
    let button2;
    let t16;
    let div5;
    let h3;
    let t18;
    let div4;
    let switch3;
    let updating_checked_3;
    let t19;
    let switch4;
    let updating_checked_4;
    let t20;
    let switch5;
    let updating_checked_5;
    let t21;
    let switch6;
    let updating_checked_6;
    let t22;
    let switch7;
    let updating_checked_7;
    let t23;
    let switch8;
    let updating_checked_8;
    let t24;
    let switch9;
    let updating_checked_9;
    let t25;
    let div8_transition;
    let current;
    let mounted;
    let dispose;
    let if_block0 = (
      /*$_current_domain*/
      ctx[7] == "kp.m-team.cc" && create_if_block_8$2(ctx)
    );
    function switch0_checked_binding(value) {
      ctx[24](value);
    }
    let switch0_props = {
      title_fixed: "按钮加载方式",
      title_green: "按钮(默认)",
      title_red: "滚动(谨慎使用)",
      label: "滚动模式下 MT 等网站频繁使用可能会导致 120",
      green_state: false
    };
    if (
      /*$_turnPage*/
      ctx[2] !== void 0
    ) {
      switch0_props.checked = /*$_turnPage*/
      ctx[2];
    }
    switch0 = new Switch({ props: switch0_props });
    binding_callbacks.push(() => bind(switch0, "checked", switch0_checked_binding));
    function switch1_checked_binding(value) {
      ctx[25](value);
    }
    let switch1_props = {
      title_fixed: "侧边栏debug按钮",
      title_green: "隐藏(默认)",
      title_red: "显示(开发用)",
      green_state: false
    };
    if (
      /*$_show_debug_btn*/
      ctx[6] !== void 0
    ) {
      switch1_props.checked = /*$_show_debug_btn*/
      ctx[6];
    }
    switch1 = new Switch({ props: switch1_props });
    binding_callbacks.push(() => bind(switch1, "checked", switch1_checked_binding));
    function switch2_checked_binding(value) {
      ctx[26](value);
    }
    let switch2_props = {
      title_fixed: "悬浮预览大图",
      title_green: "默认开启",
      title_red: "核心功能->确定不用再关"
    };
    if (
      /*$_show_nexus_pic*/
      ctx[9] !== void 0
    ) {
      switch2_props.checked = /*$_show_nexus_pic*/
      ctx[9];
    }
    switch2 = new Switch({ props: switch2_props });
    binding_callbacks.push(() => bind(switch2, "checked", switch2_checked_binding));
    let if_block1 = (
      /*$_show_nexus_pic*/
      ctx[9] && create_if_block_7$2(ctx)
    );
    function switch3_checked_binding(value) {
      ctx[31](value);
    }
    let switch3_props = { title_fixed: "显示种子名称" };
    if (
      /*$_CARD_SHOW*/
      ctx[3].title !== void 0
    ) {
      switch3_props.checked = /*$_CARD_SHOW*/
      ctx[3].title;
    }
    switch3 = new Switch({ props: switch3_props });
    binding_callbacks.push(() => bind(switch3, "checked", switch3_checked_binding));
    function switch4_checked_binding(value) {
      ctx[32](value);
    }
    let switch4_props = { title_fixed: "显示置顶和免费" };
    if (
      /*$_CARD_SHOW*/
      ctx[3].free !== void 0
    ) {
      switch4_props.checked = /*$_CARD_SHOW*/
      ctx[3].free;
    }
    switch4 = new Switch({ props: switch4_props });
    binding_callbacks.push(() => bind(switch4, "checked", switch4_checked_binding));
    function switch5_checked_binding(value) {
      ctx[33](value);
    }
    let switch5_props = { title_fixed: "显示副标题" };
    if (
      /*$_CARD_SHOW*/
      ctx[3].sub_title !== void 0
    ) {
      switch5_props.checked = /*$_CARD_SHOW*/
      ctx[3].sub_title;
    }
    switch5 = new Switch({ props: switch5_props });
    binding_callbacks.push(() => bind(switch5, "checked", switch5_checked_binding));
    function switch6_checked_binding(value) {
      ctx[34](value);
    }
    let switch6_props = { title_fixed: "显示标签" };
    if (
      /*$_CARD_SHOW*/
      ctx[3].tags !== void 0
    ) {
      switch6_props.checked = /*$_CARD_SHOW*/
      ctx[3].tags;
    }
    switch6 = new Switch({ props: switch6_props });
    binding_callbacks.push(() => bind(switch6, "checked", switch6_checked_binding));
    function switch7_checked_binding(value) {
      ctx[35](value);
    }
    let switch7_props = { title_fixed: "显示大小&下载&收藏" };
    if (
      /*$_CARD_SHOW*/
      ctx[3].size_download_collect !== void 0
    ) {
      switch7_props.checked = /*$_CARD_SHOW*/
      ctx[3].size_download_collect;
    }
    switch7 = new Switch({ props: switch7_props });
    binding_callbacks.push(() => bind(switch7, "checked", switch7_checked_binding));
    function switch8_checked_binding(value) {
      ctx[36](value);
    }
    let switch8_props = { title_fixed: "显示上传时间" };
    if (
      /*$_CARD_SHOW*/
      ctx[3].upload_time !== void 0
    ) {
      switch8_props.checked = /*$_CARD_SHOW*/
      ctx[3].upload_time;
    }
    switch8 = new Switch({ props: switch8_props });
    binding_callbacks.push(() => bind(switch8, "checked", switch8_checked_binding));
    function switch9_checked_binding(value) {
      ctx[37](value);
    }
    let switch9_props = { title_fixed: "显示评论/上传/下载/完成" };
    if (
      /*$_CARD_SHOW*/
      ctx[3].statistics !== void 0
    ) {
      switch9_props.checked = /*$_CARD_SHOW*/
      ctx[3].statistics;
    }
    switch9 = new Switch({ props: switch9_props });
    binding_callbacks.push(() => bind(switch9, "checked", switch9_checked_binding));
    return {
      c() {
        div8 = element("div");
        div7 = element("div");
        div0 = element("div");
        p = element("p");
        p.textContent = "详细配置面板";
        t1 = space();
        button0 = element("button");
        button0.innerHTML = `<svg class="feather feather-x" fill="none" height="28" width="28" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><line x1="20" x2="6" y1="6" y2="20"></line><line x1="6" x2="20" y1="6" y2="20"></line></svg>`;
        t2 = space();
        if (if_block0)
          if_block0.c();
        t3 = space();
        div2 = element("div");
        h10 = element("h1");
        h10.textContent = "常用配置";
        t5 = space();
        div1 = element("div");
        create_component(switch0.$$.fragment);
        t6 = space();
        create_component(switch1.$$.fragment);
        t7 = space();
        create_component(switch2.$$.fragment);
        t8 = space();
        if (if_block1)
          if_block1.c();
        t9 = space();
        button1 = element("button");
        button1.textContent = "切换宽度";
        t11 = space();
        t12 = space();
        div6 = element("div");
        h11 = element("h1");
        h11.textContent = "卡片信息";
        t14 = space();
        div3 = element("div");
        button2 = element("button");
        button2.textContent = "显示所有详情界面";
        t16 = space();
        div5 = element("div");
        h3 = element("h3");
        h3.textContent = "配置常驻卡片信息";
        t18 = space();
        div4 = element("div");
        create_component(switch3.$$.fragment);
        t19 = space();
        create_component(switch4.$$.fragment);
        t20 = space();
        create_component(switch5.$$.fragment);
        t21 = space();
        create_component(switch6.$$.fragment);
        t22 = space();
        create_component(switch7.$$.fragment);
        t23 = space();
        create_component(switch8.$$.fragment);
        t24 = space();
        create_component(switch9.$$.fragment);
        t25 = space();
        attr(div0, "class", "configP_title svelte-693cwj");
        attr(h10, "class", "s_title");
        attr(button1, "class", "sideP__btn");
        attr(div1, "class", "s_panel");
        attr(div2, "class", "section svelte-693cwj");
        attr(h11, "class", "s_title");
        attr(button2, "class", "sideP__btn");
        attr(div3, "class", "s_panel");
        attr(h3, "class", "s_title");
        attr(div4, "class", "s_panel");
        attr(div5, "class", "section svelte-693cwj");
        attr(div6, "class", "section svelte-693cwj");
        attr(div7, "class", "configP_holder svelte-693cwj");
        attr(div8, "class", "configP svelte-693cwj");
      },
      m(target, anchor) {
        insert(target, div8, anchor);
        append(div8, div7);
        append(div7, div0);
        append(div0, p);
        append(div0, t1);
        append(div0, button0);
        append(div7, t2);
        if (if_block0)
          if_block0.m(div7, null);
        append(div7, t3);
        append(div7, div2);
        append(div2, h10);
        append(div2, t5);
        append(div2, div1);
        mount_component(switch0, div1, null);
        append(div1, t6);
        mount_component(switch1, div1, null);
        append(div1, t7);
        mount_component(switch2, div1, null);
        append(div1, t8);
        if (if_block1)
          if_block1.m(div1, null);
        append(div1, t9);
        append(div1, button1);
        append(div1, t11);
        append(div7, t12);
        append(div7, div6);
        append(div6, h11);
        append(div6, t14);
        append(div6, div3);
        append(div3, button2);
        append(div6, t16);
        append(div6, div5);
        append(div5, h3);
        append(div5, t18);
        append(div5, div4);
        mount_component(switch3, div4, null);
        append(div4, t19);
        mount_component(switch4, div4, null);
        append(div4, t20);
        mount_component(switch5, div4, null);
        append(div4, t21);
        mount_component(switch6, div4, null);
        append(div4, t22);
        mount_component(switch7, div4, null);
        append(div4, t23);
        mount_component(switch8, div4, null);
        append(div4, t24);
        mount_component(switch9, div4, null);
        append(div4, t25);
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              button0,
              "click",
              /*click_handler_1*/
              ctx[22]
            ),
            listen(
              button1,
              "click",
              /*config_changeWidth*/
              ctx[15]
            ),
            listen(
              button2,
              "click",
              /*config_showAllDetails*/
              ctx[16]
            ),
            listen(div8, "click", self(
              /*click_handler_5*/
              ctx[52]
            ))
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (
          /*$_current_domain*/
          ctx2[7] == "kp.m-team.cc"
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
            if (dirty[0] & /*$_current_domain*/
            128) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_8$2(ctx2);
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(div7, t3);
          }
        } else if (if_block0) {
          group_outros();
          transition_out(if_block0, 1, 1, () => {
            if_block0 = null;
          });
          check_outros();
        }
        const switch0_changes = {};
        if (!updating_checked && dirty[0] & /*$_turnPage*/
        4) {
          updating_checked = true;
          switch0_changes.checked = /*$_turnPage*/
          ctx2[2];
          add_flush_callback(() => updating_checked = false);
        }
        switch0.$set(switch0_changes);
        const switch1_changes = {};
        if (!updating_checked_1 && dirty[0] & /*$_show_debug_btn*/
        64) {
          updating_checked_1 = true;
          switch1_changes.checked = /*$_show_debug_btn*/
          ctx2[6];
          add_flush_callback(() => updating_checked_1 = false);
        }
        switch1.$set(switch1_changes);
        const switch2_changes = {};
        if (!updating_checked_2 && dirty[0] & /*$_show_nexus_pic*/
        512) {
          updating_checked_2 = true;
          switch2_changes.checked = /*$_show_nexus_pic*/
          ctx2[9];
          add_flush_callback(() => updating_checked_2 = false);
        }
        switch2.$set(switch2_changes);
        if (
          /*$_show_nexus_pic*/
          ctx2[9]
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
            if (dirty[0] & /*$_show_nexus_pic*/
            512) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block_7$2(ctx2);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(div1, t9);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
        const switch3_changes = {};
        if (!updating_checked_3 && dirty[0] & /*$_CARD_SHOW*/
        8) {
          updating_checked_3 = true;
          switch3_changes.checked = /*$_CARD_SHOW*/
          ctx2[3].title;
          add_flush_callback(() => updating_checked_3 = false);
        }
        switch3.$set(switch3_changes);
        const switch4_changes = {};
        if (!updating_checked_4 && dirty[0] & /*$_CARD_SHOW*/
        8) {
          updating_checked_4 = true;
          switch4_changes.checked = /*$_CARD_SHOW*/
          ctx2[3].free;
          add_flush_callback(() => updating_checked_4 = false);
        }
        switch4.$set(switch4_changes);
        const switch5_changes = {};
        if (!updating_checked_5 && dirty[0] & /*$_CARD_SHOW*/
        8) {
          updating_checked_5 = true;
          switch5_changes.checked = /*$_CARD_SHOW*/
          ctx2[3].sub_title;
          add_flush_callback(() => updating_checked_5 = false);
        }
        switch5.$set(switch5_changes);
        const switch6_changes = {};
        if (!updating_checked_6 && dirty[0] & /*$_CARD_SHOW*/
        8) {
          updating_checked_6 = true;
          switch6_changes.checked = /*$_CARD_SHOW*/
          ctx2[3].tags;
          add_flush_callback(() => updating_checked_6 = false);
        }
        switch6.$set(switch6_changes);
        const switch7_changes = {};
        if (!updating_checked_7 && dirty[0] & /*$_CARD_SHOW*/
        8) {
          updating_checked_7 = true;
          switch7_changes.checked = /*$_CARD_SHOW*/
          ctx2[3].size_download_collect;
          add_flush_callback(() => updating_checked_7 = false);
        }
        switch7.$set(switch7_changes);
        const switch8_changes = {};
        if (!updating_checked_8 && dirty[0] & /*$_CARD_SHOW*/
        8) {
          updating_checked_8 = true;
          switch8_changes.checked = /*$_CARD_SHOW*/
          ctx2[3].upload_time;
          add_flush_callback(() => updating_checked_8 = false);
        }
        switch8.$set(switch8_changes);
        const switch9_changes = {};
        if (!updating_checked_9 && dirty[0] & /*$_CARD_SHOW*/
        8) {
          updating_checked_9 = true;
          switch9_changes.checked = /*$_CARD_SHOW*/
          ctx2[3].statistics;
          add_flush_callback(() => updating_checked_9 = false);
        }
        switch9.$set(switch9_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block0);
        transition_in(switch0.$$.fragment, local);
        transition_in(switch1.$$.fragment, local);
        transition_in(switch2.$$.fragment, local);
        transition_in(if_block1);
        transition_in(switch3.$$.fragment, local);
        transition_in(switch4.$$.fragment, local);
        transition_in(switch5.$$.fragment, local);
        transition_in(switch6.$$.fragment, local);
        transition_in(switch7.$$.fragment, local);
        transition_in(switch8.$$.fragment, local);
        transition_in(switch9.$$.fragment, local);
        add_render_callback(() => {
          if (!current)
            return;
          if (!div8_transition)
            div8_transition = create_bidirectional_transition(div8, fade, { duration: 100 }, true);
          div8_transition.run(1);
        });
        current = true;
      },
      o(local) {
        transition_out(if_block0);
        transition_out(switch0.$$.fragment, local);
        transition_out(switch1.$$.fragment, local);
        transition_out(switch2.$$.fragment, local);
        transition_out(if_block1);
        transition_out(switch3.$$.fragment, local);
        transition_out(switch4.$$.fragment, local);
        transition_out(switch5.$$.fragment, local);
        transition_out(switch6.$$.fragment, local);
        transition_out(switch7.$$.fragment, local);
        transition_out(switch8.$$.fragment, local);
        transition_out(switch9.$$.fragment, local);
        if (!div8_transition)
          div8_transition = create_bidirectional_transition(div8, fade, { duration: 100 }, false);
        div8_transition.run(0);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div8);
        if (if_block0)
          if_block0.d();
        destroy_component(switch0);
        destroy_component(switch1);
        destroy_component(switch2);
        if (if_block1)
          if_block1.d();
        destroy_component(switch3);
        destroy_component(switch4);
        destroy_component(switch5);
        destroy_component(switch6);
        destroy_component(switch7);
        destroy_component(switch8);
        destroy_component(switch9);
        if (detaching && div8_transition)
          div8_transition.end();
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_if_block_8$2(ctx) {
    let div1;
    let h1;
    let t1;
    let div0;
    let switch_1;
    let updating_checked;
    let current;
    function switch_1_checked_binding(value) {
      ctx[23](value);
    }
    let switch_1_props = {
      title_fixed: "隐藏Gay分区卡片",
      title_green: "隐藏(默认)",
      title_red: "显示(狠人)"
    };
    if (
      /*$_SITE_SETTING*/
      ctx[8].mt.hide_gay !== void 0
    ) {
      switch_1_props.checked = /*$_SITE_SETTING*/
      ctx[8].mt.hide_gay;
    }
    switch_1 = new Switch({ props: switch_1_props });
    binding_callbacks.push(() => bind(switch_1, "checked", switch_1_checked_binding));
    return {
      c() {
        div1 = element("div");
        h1 = element("h1");
        h1.textContent = "MT专用配置";
        t1 = space();
        div0 = element("div");
        create_component(switch_1.$$.fragment);
        attr(h1, "class", "s_title");
        attr(div0, "class", "s_panel");
        attr(div1, "class", "section svelte-693cwj");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, h1);
        append(div1, t1);
        append(div1, div0);
        mount_component(switch_1, div0, null);
        current = true;
      },
      p(ctx2, dirty) {
        const switch_1_changes = {};
        if (!updating_checked && dirty[0] & /*$_SITE_SETTING*/
        256) {
          updating_checked = true;
          switch_1_changes.checked = /*$_SITE_SETTING*/
          ctx2[8].mt.hide_gay;
          add_flush_callback(() => updating_checked = false);
        }
        switch_1.$set(switch_1_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(switch_1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(switch_1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div1);
        destroy_component(switch_1);
      }
    };
  }
  function create_if_block_7$2(ctx) {
    let switch_1;
    let current;
    switch_1 = new Switch({
      props: {
        title_fixed: `悬浮预览延迟${/*$_delay_nexus_pic*/
      ctx[10] ? ":" + /*$_delay_nexus_pic*/
      ctx[10] + "ms" : ""}`,
        title_red: `${/*$_delay_nexus_pic*/
      ctx[10] ? "" : "无延迟"}`,
        label: "防止无意滑动时大图打开妨碍预览",
        type: "range",
        $$slots: { default: [create_default_slot] },
        $$scope: { ctx }
      }
    });
    return {
      c() {
        create_component(switch_1.$$.fragment);
      },
      m(target, anchor) {
        mount_component(switch_1, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const switch_1_changes = {};
        if (dirty[0] & /*$_delay_nexus_pic*/
        1024)
          switch_1_changes.title_fixed = `悬浮预览延迟${/*$_delay_nexus_pic*/
        ctx2[10] ? ":" + /*$_delay_nexus_pic*/
        ctx2[10] + "ms" : ""}`;
        if (dirty[0] & /*$_delay_nexus_pic*/
        1024)
          switch_1_changes.title_red = `${/*$_delay_nexus_pic*/
        ctx2[10] ? "" : "无延迟"}`;
        if (dirty[0] & /*$_delay_nexus_pic*/
        1024 | dirty[2] & /*$$scope*/
        1) {
          switch_1_changes.$$scope = { dirty, ctx: ctx2 };
        }
        switch_1.$set(switch_1_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(switch_1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(switch_1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(switch_1, detaching);
      }
    };
  }
  function create_default_slot(ctx) {
    let input;
    let mounted;
    let dispose;
    return {
      c() {
        input = element("input");
        attr(input, "type", "range");
        attr(input, "min", "0");
        attr(input, "max", "1500");
        attr(input, "step", "100");
        attr(input, "list", "values");
      },
      m(target, anchor) {
        insert(target, input, anchor);
        set_input_value(
          input,
          /*$_delay_nexus_pic*/
          ctx[10]
        );
        if (!mounted) {
          dispose = [
            listen(
              input,
              "change",
              /*input_change_input_handler*/
              ctx[27]
            ),
            listen(
              input,
              "input",
              /*input_change_input_handler*/
              ctx[27]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*$_delay_nexus_pic*/
        1024) {
          set_input_value(
            input,
            /*$_delay_nexus_pic*/
            ctx2[10]
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(input);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_fragment$3(ctx) {
    let div2;
    let div0;
    let t0;
    let div1;
    let button0;
    let t2;
    let button1;
    let t4;
    let button2;
    let t6;
    let t7;
    let t8;
    let div3;
    let current;
    let mounted;
    let dispose;
    let if_block0 = (
      /*$_show_debug_btn*/
      ctx[6] && create_if_block_9$2(ctx)
    );
    let if_block1 = (
      /*$_show_configPanel*/
      ctx[5] && create_if_block$3(ctx)
    );
    return {
      c() {
        div2 = element("div");
        div0 = element("div");
        t0 = space();
        div1 = element("div");
        button0 = element("button");
        button0.textContent = "原有列表";
        t2 = space();
        button1 = element("button");
        button1.textContent = "整理布局";
        t4 = space();
        button2 = element("button");
        button2.textContent = "呼出边栏";
        t6 = space();
        if (if_block0)
          if_block0.c();
        t7 = space();
        if (if_block1)
          if_block1.c();
        t8 = space();
        div3 = element("div");
        div3.textContent = "重置瀑布流配置边栏位置";
        attr(div0, "class", "sideP__title svelte-693cwj");
        attr(button0, "class", "sideP__btn");
        attr(button1, "class", "sideP__btn");
        attr(button2, "class", "sideP__btn");
        attr(div1, "class", "sideP__out svelte-693cwj");
        attr(div2, "class", "sideP svelte-693cwj");
        set_style(
          div2,
          "top",
          /*$_panelPos*/
          ctx[4].y + "px"
        );
        set_style(
          div2,
          "left",
          /*$_panelPos*/
          ctx[4].x + "px"
        );
        attr(div3, "id", "reset_panel_pos");
        attr(div3, "class", "svelte-693cwj");
      },
      m(target, anchor) {
        insert(target, div2, anchor);
        append(div2, div0);
        append(div2, t0);
        append(div2, div1);
        append(div1, button0);
        append(div1, t2);
        append(div1, button1);
        append(div1, t4);
        append(div1, button2);
        append(div1, t6);
        if (if_block0)
          if_block0.m(div1, null);
        ctx[21](div2);
        insert(target, t7, anchor);
        if (if_block1)
          if_block1.m(target, anchor);
        insert(target, t8, anchor);
        insert(target, div3, anchor);
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              div0,
              "mousedown",
              /*onMouseDown*/
              ctx[11]
            ),
            listen(
              button0,
              "click",
              /*__show_originTable*/
              ctx[13]
            ),
            listen(
              button1,
              "click",
              /*__sort_masonry*/
              ctx[14]
            ),
            listen(
              button2,
              "click",
              /*click_handler*/
              ctx[20]
            ),
            listen(
              div3,
              "click",
              /*resetPanelPos*/
              ctx[12]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (
          /*$_show_debug_btn*/
          ctx2[6]
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_9$2(ctx2);
            if_block0.c();
            if_block0.m(div1, null);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (!current || dirty[0] & /*$_panelPos*/
        16) {
          set_style(
            div2,
            "top",
            /*$_panelPos*/
            ctx2[4].y + "px"
          );
        }
        if (!current || dirty[0] & /*$_panelPos*/
        16) {
          set_style(
            div2,
            "left",
            /*$_panelPos*/
            ctx2[4].x + "px"
          );
        }
        if (
          /*$_show_configPanel*/
          ctx2[5]
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
            if (dirty[0] & /*$_show_configPanel*/
            32) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block$3(ctx2);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(t8.parentNode, t8);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block1);
        current = true;
      },
      o(local) {
        transition_out(if_block1);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div2);
        if (if_block0)
          if_block0.d();
        ctx[21](null);
        if (detaching)
          detach(t7);
        if (if_block1)
          if_block1.d(detaching);
        if (detaching)
          detach(t8);
        if (detaching)
          detach(div3);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance$4($$self, $$props, $$invalidate) {
    let $_iframe_switch;
    let $_turnPage;
    let $_CARD_SHOW;
    let $_card_width;
    let $_Global_Masonry;
    let $_show_originTable;
    let $_panelPos;
    let $_show_configPanel;
    let $_show_debug_btn;
    let $_current_domain;
    let $_SITE_SETTING;
    let $_show_nexus_pic;
    let $_delay_nexus_pic;
    component_subscribe($$self, _iframe_switch, ($$value) => $$invalidate(56, $_iframe_switch = $$value));
    component_subscribe($$self, _turnPage, ($$value) => $$invalidate(2, $_turnPage = $$value));
    component_subscribe($$self, _CARD_SHOW, ($$value) => $$invalidate(3, $_CARD_SHOW = $$value));
    component_subscribe($$self, _card_width, ($$value) => $$invalidate(57, $_card_width = $$value));
    component_subscribe($$self, _Global_Masonry, ($$value) => $$invalidate(58, $_Global_Masonry = $$value));
    component_subscribe($$self, _show_originTable, ($$value) => $$invalidate(59, $_show_originTable = $$value));
    component_subscribe($$self, _panelPos, ($$value) => $$invalidate(4, $_panelPos = $$value));
    component_subscribe($$self, _show_configPanel, ($$value) => $$invalidate(5, $_show_configPanel = $$value));
    component_subscribe($$self, _show_debug_btn, ($$value) => $$invalidate(6, $_show_debug_btn = $$value));
    component_subscribe($$self, _current_domain, ($$value) => $$invalidate(7, $_current_domain = $$value));
    component_subscribe($$self, _SITE_SETTING, ($$value) => $$invalidate(8, $_SITE_SETTING = $$value));
    component_subscribe($$self, _show_nexus_pic, ($$value) => $$invalidate(9, $_show_nexus_pic = $$value));
    component_subscribe($$self, _delay_nexus_pic, ($$value) => $$invalidate(10, $_delay_nexus_pic = $$value));
    let div;
    let isMouseDown = false;
    let offsetX = 0, offsetY = 0;
    const onMouseDown = (e) => {
      e.preventDefault();
      isMouseDown = true;
      offsetX = e.clientX - div.getBoundingClientRect().left;
      offsetY = e.clientY - div.getBoundingClientRect().top;
    };
    const onMouseMove = (e) => {
      e.preventDefault();
      if (!isMouseDown)
        return;
      const res_L = e.clientX - offsetX > 0 ? e.clientX - offsetX : 0;
      const res_R = e.clientY - offsetY > 0 ? e.clientY - offsetY : 0;
      set_store_value(_panelPos, $_panelPos = { x: res_L, y: res_R }, $_panelPos);
    };
    const onMouseUp = () => {
      isMouseDown = false;
    };
    function resetPanelPos() {
      if ($_panelPos.x == 0 && $_panelPos.y == 0)
        alert("无需重置瀑布流边栏位置");
      set_store_value(_panelPos, $_panelPos = { x: 0, y: 0 }, $_panelPos);
    }
    let { originTable } = $$props;
    function __show_originTable() {
      set_store_value(_show_originTable, $_show_originTable = $_show_originTable == 0 ? 1 : 0, $_show_originTable);
      $$invalidate(19, originTable.style.display = $_show_originTable === 1 ? "" : "none", originTable);
    }
    function __sort_masonry() {
      $_Global_Masonry.layout();
    }
    function config_changeWidth() {
      set_store_value(_card_width, $_card_width = $_card_width == 300 ? 200 : 300, $_card_width);
      console.log(`[debug]$card_width: ${$_card_width}`);
      sortMasonry("fast");
      sortMasonry("fast");
      sortMasonry();
    }
    function config_showAllDetails() {
      set_store_value(_CARD_SHOW, $_CARD_SHOW.all = !$_CARD_SHOW.all, $_CARD_SHOW);
      sortMasonry("fast");
      sortMasonry("fast");
      sortMasonry();
      sortMasonry();
    }
    let label_switchMode = $_turnPage ? "滚动加载" : "按钮加载";
    function config_switchMode() {
      set_store_value(_turnPage, $_turnPage = !$_turnPage, $_turnPage);
      $$invalidate(1, label_switchMode = $_turnPage ? "滚动加载" : "按钮加载");
    }
    function config_changeLoadMode() {
      set_store_value(_iframe_switch, $_iframe_switch = $_iframe_switch == 0 ? 1 : 0, $_iframe_switch);
    }
    onMount(() => {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };
    });
    const click_handler = () => {
      set_store_value(_show_configPanel, $_show_configPanel = !$_show_configPanel, $_show_configPanel);
    };
    function div2_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        div = $$value;
        $$invalidate(0, div);
      });
    }
    const click_handler_1 = () => set_store_value(_show_configPanel, $_show_configPanel = false, $_show_configPanel);
    function switch_1_checked_binding(value) {
      if ($$self.$$.not_equal($_SITE_SETTING.mt.hide_gay, value)) {
        $_SITE_SETTING.mt.hide_gay = value;
        _SITE_SETTING.set($_SITE_SETTING);
      }
    }
    function switch0_checked_binding(value) {
      $_turnPage = value;
      _turnPage.set($_turnPage);
    }
    function switch1_checked_binding(value) {
      $_show_debug_btn = value;
      _show_debug_btn.set($_show_debug_btn);
    }
    function switch2_checked_binding(value) {
      $_show_nexus_pic = value;
      _show_nexus_pic.set($_show_nexus_pic);
    }
    function input_change_input_handler() {
      $_delay_nexus_pic = to_number(this.value);
      _delay_nexus_pic.set($_delay_nexus_pic);
    }
    const click_handler_2 = () => {
      set_store_value(_show_debug_btn, $_show_debug_btn = !$_show_debug_btn, $_show_debug_btn);
    };
    const click_handler_3 = () => {
      set_store_value(_show_nexus_pic, $_show_nexus_pic = !$_show_nexus_pic, $_show_nexus_pic);
    };
    const click_handler_4 = () => {
      set_store_value(_delay_nexus_pic, $_delay_nexus_pic = $_delay_nexus_pic == 0 ? 600 : 0, $_delay_nexus_pic);
    };
    function switch3_checked_binding(value) {
      if ($$self.$$.not_equal($_CARD_SHOW.title, value)) {
        $_CARD_SHOW.title = value;
        _CARD_SHOW.set($_CARD_SHOW);
      }
    }
    function switch4_checked_binding(value) {
      if ($$self.$$.not_equal($_CARD_SHOW.free, value)) {
        $_CARD_SHOW.free = value;
        _CARD_SHOW.set($_CARD_SHOW);
      }
    }
    function switch5_checked_binding(value) {
      if ($$self.$$.not_equal($_CARD_SHOW.sub_title, value)) {
        $_CARD_SHOW.sub_title = value;
        _CARD_SHOW.set($_CARD_SHOW);
      }
    }
    function switch6_checked_binding(value) {
      if ($$self.$$.not_equal($_CARD_SHOW.tags, value)) {
        $_CARD_SHOW.tags = value;
        _CARD_SHOW.set($_CARD_SHOW);
      }
    }
    function switch7_checked_binding(value) {
      if ($$self.$$.not_equal($_CARD_SHOW.size_download_collect, value)) {
        $_CARD_SHOW.size_download_collect = value;
        _CARD_SHOW.set($_CARD_SHOW);
      }
    }
    function switch8_checked_binding(value) {
      if ($$self.$$.not_equal($_CARD_SHOW.upload_time, value)) {
        $_CARD_SHOW.upload_time = value;
        _CARD_SHOW.set($_CARD_SHOW);
      }
    }
    function switch9_checked_binding(value) {
      if ($$self.$$.not_equal($_CARD_SHOW.statistics, value)) {
        $_CARD_SHOW.statistics = value;
        _CARD_SHOW.set($_CARD_SHOW);
      }
    }
    function input0_change_handler() {
      $_CARD_SHOW.title = this.checked;
      _CARD_SHOW.set($_CARD_SHOW);
    }
    const change_handler = () => {
      sortMasonry();
    };
    function input1_change_handler() {
      $_CARD_SHOW.free = this.checked;
      _CARD_SHOW.set($_CARD_SHOW);
    }
    const change_handler_1 = () => {
      sortMasonry();
    };
    function input2_change_handler() {
      $_CARD_SHOW.sub_title = this.checked;
      _CARD_SHOW.set($_CARD_SHOW);
    }
    const change_handler_2 = () => {
      sortMasonry();
    };
    function input3_change_handler() {
      $_CARD_SHOW.tags = this.checked;
      _CARD_SHOW.set($_CARD_SHOW);
    }
    const change_handler_3 = () => {
      sortMasonry();
    };
    function input4_change_handler() {
      $_CARD_SHOW.size_download_collect = this.checked;
      _CARD_SHOW.set($_CARD_SHOW);
    }
    const change_handler_4 = () => {
      sortMasonry();
    };
    function input5_change_handler() {
      $_CARD_SHOW.upload_time = this.checked;
      _CARD_SHOW.set($_CARD_SHOW);
    }
    const change_handler_5 = () => {
      sortMasonry();
    };
    function input6_change_handler() {
      $_CARD_SHOW.statistics = this.checked;
      _CARD_SHOW.set($_CARD_SHOW);
    }
    const change_handler_6 = () => {
      sortMasonry();
    };
    const click_handler_5 = () => set_store_value(_show_configPanel, $_show_configPanel = false, $_show_configPanel);
    $$self.$$set = ($$props2) => {
      if ("originTable" in $$props2)
        $$invalidate(19, originTable = $$props2.originTable);
    };
    return [
      div,
      label_switchMode,
      $_turnPage,
      $_CARD_SHOW,
      $_panelPos,
      $_show_configPanel,
      $_show_debug_btn,
      $_current_domain,
      $_SITE_SETTING,
      $_show_nexus_pic,
      $_delay_nexus_pic,
      onMouseDown,
      resetPanelPos,
      __show_originTable,
      __sort_masonry,
      config_changeWidth,
      config_showAllDetails,
      config_switchMode,
      config_changeLoadMode,
      originTable,
      click_handler,
      div2_binding,
      click_handler_1,
      switch_1_checked_binding,
      switch0_checked_binding,
      switch1_checked_binding,
      switch2_checked_binding,
      input_change_input_handler,
      click_handler_2,
      click_handler_3,
      click_handler_4,
      switch3_checked_binding,
      switch4_checked_binding,
      switch5_checked_binding,
      switch6_checked_binding,
      switch7_checked_binding,
      switch8_checked_binding,
      switch9_checked_binding,
      input0_change_handler,
      change_handler,
      input1_change_handler,
      change_handler_1,
      input2_change_handler,
      change_handler_2,
      input3_change_handler,
      change_handler_3,
      input4_change_handler,
      change_handler_4,
      input5_change_handler,
      change_handler_5,
      input6_change_handler,
      change_handler_6,
      click_handler_5
    ];
  }
  class Sidepanel extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$4, create_fragment$3, safe_not_equal, { originTable: 19 }, null, [-1, -1, -1]);
    }
  }
  const CONFIG$1 = {
    /** 默认的种子表格 dom selector */
    torrentListTable: "table.torrents",
    /** 将 种子列表dom 的信息变为 json对象列表 */
    TORRENT_LIST_TO_JSON: TORRENT_LIST_TO_JSON$1,
    /** 加载图片等待时的默认图片 */
    LOADING_PIC: "pic/logo2_100.png",
    /** 如果站点有自定义的icon, 可以用自定义的 */
    ICON: {},
    /** 如果站点有必要设置分类颜色, 可以用自定义的 */
    CATEGORY: {
      // [粉色]AV: 同人AV 男娘 VR同人
      410: "#FF66FF",
      413: "#FF66FF",
      414: "#FF66FF",
      // [绿色]图: cos图 画师CG 游戏CG 单行本 同人志
      417: "#59CD90",
      433: "#59CD90",
      434: "#59CD90",
      424: "#59CD90",
      435: "#59CD90",
      // [黄色]动画: 里番 2D 3D
      411: "#FAC05E",
      419: "#FAC05E",
      423: "#FAC05E",
      // [紫色]音声: 外语 中文 视频
      420: "#3FA7D6",
      421: "#3FA7D6",
      422: "#3FA7D6",
      // [红色]游戏: 游戏 中文游戏
      415: "#EE6352",
      418: "#EE6352"
    },
    /** 索引 */
    INDEX: 0,
    /** iframe 宽度 */
    Iframe_Width: 1260,
    /** NOTE: 站点特殊操作 */
    special: function() {
      $("ksearchboxmain") ? $("ksearchboxmain").style.display = "none" : null;
      const link = document.querySelector('a[href="?sort=7&type=asc"]');
      link.childNodes[0].style.color = "black";
    }
  };
  function TORRENT_LIST_TO_JSON$1(torrent_list_Dom) {
    const rows = torrent_list_Dom.querySelectorAll("tbody tr");
    const data = [];
    rows.forEach((row) => {
      const categoryImg = row.querySelector("td:nth-child(1) > a > img");
      const category = categoryImg ? categoryImg.alt : "";
      if (!category)
        return;
      const categoryLinkDOM = categoryImg.parentNode;
      const categoryLink = categoryLinkDOM.href;
      const categoryNumber = categoryLink.slice(-3);
      const _categoryImg = categoryImg.cloneNode(true);
      _categoryImg.className = "card-category-img";
      const torrentIndex = CONFIG$1.INDEX++;
      const torrentNameLink = row.querySelector(".torrentname a");
      const torrentName = torrentNameLink ? torrentNameLink.textContent.trim() : "";
      const torrentLink = torrentNameLink.href;
      const pattern = /id=(\d+)&hit/;
      const match = torrentLink.match(pattern);
      const torrentId = match ? parseInt(match[1]) : null;
      const picLink = row.querySelector(".torrentname img").getAttribute("data-src");
      const desCell = row.querySelector(".torrentname td:nth-child(2)");
      const length = desCell.childNodes.length - 1;
      const desDom = desCell.childNodes[length];
      const description = desDom.nodeName == "#text" ? desDom.textContent.trim() : "";
      const place_at_the_top = row.querySelectorAll(".torrentname img.sticky");
      const pattMsg = place_at_the_top[0] ? place_at_the_top[0].title : "";
      const tempTagDom = Array.from(row.querySelectorAll(".torrentname font"));
      const freeTypeImg = row.querySelector('img[class^="pro_"]');
      const freeType = freeTypeImg ? "_" + freeTypeImg.alt.replace(/\s+/g, "") : "";
      const freeRemainingTimeSpan = freeType ? tempTagDom.pop() : "";
      const freeRemainingTime = freeRemainingTimeSpan ? freeRemainingTimeSpan.innerText : "";
      const tagSpans = row.querySelectorAll(".torrentname span");
      const tagsDOM = Array.from(tagSpans);
      let tags = tagSpans ? tagsDOM.map((span) => span.textContent.trim()) : [];
      if (freeRemainingTime != "") {
        tags.shift();
        tagsDOM.shift();
      }
      const raw_tags = tagsDOM.map((el) => el.outerHTML).join("");
      const downloadLink = `download.php?id=${torrentId}`;
      const collectLink = `javascript: bookmark(${torrentId},${torrentIndex});`;
      const collectDOM = row.querySelector(".torrentname a[id^='bookmark']");
      const collectState = collectDOM.children[0].alt;
      const commentsLink = row.querySelector("td.rowfollow:nth-child(3) a");
      const comments = commentsLink ? parseInt(commentsLink.textContent) : 0;
      const uploadDateSpan = row.querySelector("td:nth-child(4) span");
      const uploadDate = uploadDateSpan ? uploadDateSpan.title : "";
      const sizeCell = row.querySelector("td:nth-child(5)");
      const size = sizeCell ? sizeCell.textContent.trim() : "";
      const seedersLink = row.querySelector("td:nth-child(6) a");
      const seeders = seedersLink ? parseInt(seedersLink.textContent) : 0;
      const leechersCell = row.querySelector("td:nth-child(7)");
      const leechers = leechersCell ? parseInt(leechersCell.textContent) : 0;
      const snatchedLink = row.querySelector("td:nth-child(8) a");
      const snatched = snatchedLink ? parseInt(snatchedLink.textContent) : 0;
      const rowData = {
        torrentIndex,
        _categoryImg,
        category,
        categoryLink,
        categoryNumber,
        torrent_name: torrentName,
        torrentLink,
        torrentId,
        picLink,
        place_at_the_top,
        pattMsg,
        downloadLink,
        collectLink,
        collectState,
        tempTagDom,
        freeTypeImg,
        free_type: freeType,
        free_remaining_time: freeRemainingTime,
        raw_tags,
        tagsDOM,
        tags,
        description,
        upload_date: uploadDate,
        comments,
        size,
        seeders,
        leechers,
        snatched
      };
      data.push(rowData);
    });
    return data;
  }
  const CONFIG = {
    /** 默认的种子表格 dom selector */
    torrentListTable: "table.torrents",
    /** 将 种子列表dom 的信息变为 json对象列表 */
    TORRENT_LIST_TO_JSON,
    /** 加载图片等待时的默认图片 */
    LOADING_PIC: "logo.png",
    /**如果站点有自定义的icon, 可以用自定义的 */
    ICON: {},
    /**如果站点有必要设置分类颜色, 可以用自定义的 */
    CATEGORY: {
      // 成人分类
      410: "#f52bcb",
      // 有码 HD
      429: "#f52bcb",
      // 无码 HD
      424: "#db55a9",
      // 有码 Xvid
      430: "#db55a9",
      // 无码 Xvid
      437: "#f77afa",
      // 有码 DVD
      426: "#f77afa",
      // 无码 DVD
      431: "#19a7ec",
      // 有码 BluRay
      432: "#19a7ec",
      // 无码 BluRay
      440: "#f52bcb",
      // GAY
      436: "#bb1e9a",
      // 0 day
      425: "#bb1e9a",
      // 写真 video
      433: "#bb1e9a",
      // 写真 pic
      411: "#f49800",
      // H-Game
      412: "#f49800",
      // H-Anime
      413: "#f49800",
      // H-Comic
      // 综合分类
      401: "#c74854",
      // Movie SD
      419: "#c01a20",
      // Movie HD
      420: "#c74854",
      // Movie DVD    
      421: "#00a0e9",
      // Movie BluRay
      439: "#1b2a51",
      // Movie Remux
      403: "#c74854",
      // TV SD
      402: "#276fb8",
      // TV HD
      435: "#4dbebd ",
      // TV DVD
      438: "#1897d6",
      // TV BluRay
      404: "#23ac38",
      // 纪录教育
      405: "#996c34",
      // Anime
      407: "#23ac38",
      // Sport
      422: "#f39800",
      // Software
      423: "#f39800",
      // Game
      427: "#f39800",
      // EBook
      409: "#996c34",
      // Other
      // 音乐分类
      406: "#8a57a1",
      // MV
      408: "#8a57a1",
      // Music AAC/ALAC
      434: "#8a57a1"
      // Music 无损
    },
    /** 索引 */
    INDEX: 0,
    /** iframe 宽度 */
    Iframe_Width: 1260,
    /** NOTE: 站点特殊操作 */
    special: function() {
      console.log("23333333333333333333");
    }
  };
  function TORRENT_LIST_TO_JSON(torrent_list_Dom) {
    const rows = torrent_list_Dom.querySelectorAll("tbody tr");
    const data = [];
    rows.forEach((row) => {
      const categoryImg = row.querySelector("td:nth-child(1) > a > img");
      const category = categoryImg ? categoryImg.title : "";
      if (!category)
        return;
      const categoryLinkDOM = categoryImg.parentNode;
      const categoryLink = categoryLinkDOM.href;
      const categoryNumber = categoryLink.slice(-3);
      const str = categoryImg.style.backgroundImage;
      const regex = /url\("(.*)"\)/;
      const result = str.match(regex);
      const _categoryImg = result && result.length > 1 ? result[1] : null;
      const torrentIndex = CONFIG.INDEX++;
      const torrentNameLink = row.querySelector(".torrentname a");
      const torrentName = torrentNameLink ? torrentNameLink.title.trim() : "";
      const torrentLink = torrentNameLink.href;
      const pattern = /id=(\d+)&hit/;
      const match = torrentLink.match(pattern);
      const torrentId = match ? parseInt(match[1]) : null;
      const imgDom = row.querySelector(".torrentname img");
      const _mouseOver = imgDom.getAttribute("onmouseover");
      const raw1 = _mouseOver ? _mouseOver.split(",")[2].toString() : "";
      const picLink = raw1 ? raw1.slice(raw1.indexOf("'") + 1, raw1.lastIndexOf("'")) : "/pic/nopic.jpg";
      const desCell = row.querySelector(".torrentname td:nth-child(2)");
      const length = desCell.childNodes.length - 1;
      const desDom = desCell.childNodes[length];
      const description = desDom.nodeName == "#text" ? desDom.textContent.trim() : "";
      const place_at_the_top = row.querySelectorAll(".torrentname img.sticky");
      const pattMsg = place_at_the_top[0] ? place_at_the_top[0].title : "";
      const tempTagDom = row.querySelectorAll(".torrentname font");
      const freeTypeImg = row.querySelector('img[class^="pro_"]');
      const freeType = freeTypeImg ? "_" + freeTypeImg.alt.replace(/\s+/g, "") : "";
      const freeRemainingTimeSpan = row.querySelector(".torrentname td:nth-child(2) span");
      const freeRemainingTime = freeRemainingTimeSpan ? freeRemainingTimeSpan.innerText : "";
      const tagSpans = row.querySelectorAll(".torrentname img[class^='label_']");
      const tagsDOM = Array.from(tagSpans);
      let tags = tagSpans ? tagsDOM.map((el) => el.title.trim()) : [];
      const raw_tags = tagsDOM.map((el) => el.outerHTML).join("&nbsp;");
      const downloadLink = `download.php?id=${torrentId}`;
      const collectLink = `javascript: bookmark(${torrentId},${torrentIndex});`;
      const collectDOM = row.querySelector(".torrentname a[id^='bookmark']");
      const collectState = collectDOM.children[0].alt;
      const commentsLink = row.querySelector("td.rowfollow:nth-child(3) a");
      const comments = commentsLink ? parseInt(commentsLink.textContent) : 0;
      const uploadDateSpan = row.querySelector("td:nth-child(4) span");
      const uploadDate = uploadDateSpan ? uploadDateSpan.title : "";
      const sizeCell = row.querySelector("td:nth-child(5)");
      const size = sizeCell ? sizeCell.textContent.trim() : "";
      const seedersLink = row.querySelector("td:nth-child(6) a");
      const seeders = seedersLink ? parseInt(seedersLink.textContent) : 0;
      const leechersCell = row.querySelector("td:nth-child(7)");
      const leechers = leechersCell ? parseInt(leechersCell.textContent) : 0;
      const snatchedLink = row.querySelector("td:nth-child(8) a");
      const snatched = snatchedLink ? parseInt(snatchedLink.textContent) : 0;
      const rowData = {
        torrentIndex,
        _categoryImg,
        category,
        categoryLink,
        categoryNumber,
        torrent_name: torrentName,
        torrentLink,
        torrentId,
        picLink,
        place_at_the_top,
        pattMsg,
        downloadLink,
        collectLink,
        collectState,
        tempTagDom,
        freeTypeImg,
        free_type: freeType,
        free_remaining_time: freeRemainingTime,
        raw_tags,
        tagsDOM,
        tags,
        description,
        comments,
        upload_date: uploadDate,
        size,
        seeders,
        leechers,
        snatched
      };
      data.push(rowData);
    });
    return data;
  }
  const SITE = {
    "kamept.com": CONFIG$1,
    "kp.m-team.cc": CONFIG
  };
  function GET_CURRENT_PT_DOMAIN() {
    const domain = window.location.hostname;
    return domain;
  }
  function GET_TORRENT_LIST_SELECTOR() {
    var _a;
    const domain = GET_CURRENT_PT_DOMAIN();
    console.log("|-> 当前站点: ", domain);
    console.log("|-> 当前页面: ", window.location.pathname);
    const res = ((_a = SITE[domain]) == null ? void 0 : _a.torrentListTable) ?? null;
    console.log("|-> 站点selector:", res);
    return res;
  }
  function create_if_block_16$1(ctx) {
    let div;
    let a;
    let html_tag;
    let raw_value = (
      /*torrentInfo*/
      (ctx[0].tempTagDom ? (
        /*torrentInfo*/
        ctx[0].tempTagDom.map(func$1).join("&nbsp;")
      ) : "") + ""
    );
    let t0;
    let b;
    let t1_value = (
      /*torrentInfo*/
      ctx[0].torrent_name + ""
    );
    let t1;
    let a_href_value;
    return {
      c() {
        div = element("div");
        a = element("a");
        html_tag = new HtmlTag(false);
        t0 = space();
        b = element("b");
        t1 = text(t1_value);
        html_tag.a = t0;
        attr(a, "class", "two-lines svelte-vdh3h6");
        attr(a, "href", a_href_value = /*torrentInfo*/
        ctx[0].torrentLink);
        attr(a, "target", "_blank");
        attr(div, "class", "card-title svelte-vdh3h6");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, a);
        html_tag.m(raw_value, a);
        append(a, t0);
        append(a, b);
        append(b, t1);
      },
      p(ctx2, dirty) {
        if (dirty & /*torrentInfo*/
        1 && raw_value !== (raw_value = /*torrentInfo*/
        (ctx2[0].tempTagDom ? (
          /*torrentInfo*/
          ctx2[0].tempTagDom.map(func$1).join("&nbsp;")
        ) : "") + ""))
          html_tag.p(raw_value);
        if (dirty & /*torrentInfo*/
        1 && t1_value !== (t1_value = /*torrentInfo*/
        ctx2[0].torrent_name + ""))
          set_data(t1, t1_value);
        if (dirty & /*torrentInfo*/
        1 && a_href_value !== (a_href_value = /*torrentInfo*/
        ctx2[0].torrentLink)) {
          attr(a, "href", a_href_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(div);
      }
    };
  }
  function create_if_block_10$1(ctx) {
    let t0;
    let t1;
    let div0;
    let raw0_value = (
      /*torrentInfo*/
      ctx[0].tagsDOM.map(
        /*func_2*/
        ctx[10]
      ).join("") + ""
    );
    let t2;
    let div8;
    let div5;
    let div1;
    let html_tag;
    let raw1_value = (
      /*ICON*/
      ctx[2].SIZE + ""
    );
    let t3;
    let t4_value = (
      /*torrentInfo*/
      ctx[0].size + ""
    );
    let t4;
    let t5;
    let div2;
    let html_tag_1;
    let raw2_value = (
      /*ICON*/
      ctx[2].DOWNLOAD + ""
    );
    let t6;
    let b0;
    let a;
    let t7;
    let a_href_value;
    let t8;
    let div4;
    let div3;
    let html_tag_2;
    let raw3_value = (
      /*torrentInfo*/
      (ctx[0].collectState == "Unbookmarked" ? (
        /*ICON*/
        ctx[2].COLLET
      ) : (
        /*ICON*/
        ctx[2].COLLETED
      )) + ""
    );
    let t9;
    let b1;
    let div3_id_value;
    let t11;
    let div6;
    let b2;
    let t13;
    let t14_value = (
      /*torrentInfo*/
      ctx[0].upload_date + ""
    );
    let t14;
    let t15;
    let div7;
    let html_tag_3;
    let raw4_value = (
      /*ICON*/
      ctx[2].COMMENT + ""
    );
    let t16;
    let b3;
    let t17_value = (
      /*torrentInfo*/
      ctx[0].comments + ""
    );
    let t17;
    let t18;
    let html_tag_4;
    let raw5_value = (
      /*ICON*/
      ctx[2].SEEDERS + ""
    );
    let t19;
    let b4;
    let t20_value = (
      /*torrentInfo*/
      ctx[0].seeders + ""
    );
    let t20;
    let t21;
    let html_tag_5;
    let raw6_value = (
      /*ICON*/
      ctx[2].LEECHERS + ""
    );
    let t22;
    let b5;
    let t23_value = (
      /*torrentInfo*/
      ctx[0].leechers + ""
    );
    let t23;
    let t24;
    let html_tag_6;
    let raw7_value = (
      /*ICON*/
      ctx[2].SNATCHED + ""
    );
    let t25;
    let b6;
    let t26_value = (
      /*torrentInfo*/
      ctx[0].snatched + ""
    );
    let t26;
    let mounted;
    let dispose;
    let if_block0 = (
      /*torrentInfo*/
      (ctx[0].free_type || /*torrentInfo*/
      ctx[0].pattMsg) && create_if_block_12$1(ctx)
    );
    let if_block1 = (
      /*torrentInfo*/
      ctx[0].description && create_if_block_11$1(ctx)
    );
    return {
      c() {
        if (if_block0)
          if_block0.c();
        t0 = space();
        if (if_block1)
          if_block1.c();
        t1 = space();
        div0 = element("div");
        t2 = space();
        div8 = element("div");
        div5 = element("div");
        div1 = element("div");
        html_tag = new HtmlTag(false);
        t3 = text(" ");
        t4 = text(t4_value);
        t5 = text("\n\n          \n            \n          ");
        div2 = element("div");
        html_tag_1 = new HtmlTag(false);
        t6 = text(" \n            ");
        b0 = element("b");
        a = element("a");
        t7 = text("下载");
        t8 = text("\n\n          \n            \n          ");
        div4 = element("div");
        div3 = element("div");
        html_tag_2 = new HtmlTag(false);
        t9 = text("\n               ");
        b1 = element("b");
        b1.textContent = "收藏";
        t11 = space();
        div6 = element("div");
        b2 = element("b");
        b2.textContent = "上传时间:";
        t13 = space();
        t14 = text(t14_value);
        t15 = space();
        div7 = element("div");
        html_tag_3 = new HtmlTag(false);
        t16 = text(" ");
        b3 = element("b");
        t17 = text(t17_value);
        t18 = text("  \n          ");
        html_tag_4 = new HtmlTag(false);
        t19 = text(" ");
        b4 = element("b");
        t20 = text(t20_value);
        t21 = text("  \n          ");
        html_tag_5 = new HtmlTag(false);
        t22 = text(" ");
        b5 = element("b");
        t23 = text(t23_value);
        t24 = text("  \n          ");
        html_tag_6 = new HtmlTag(false);
        t25 = text(" ");
        b6 = element("b");
        t26 = text(t26_value);
        attr(div0, "class", "cl-tags svelte-vdh3h6");
        html_tag.a = t3;
        attr(div1, "class", "cl-center svelte-vdh3h6");
        html_tag_1.a = t6;
        attr(a, "href", a_href_value = /*torrentInfo*/
        ctx[0].downloadLink);
        attr(div2, "class", "cl-center svelte-vdh3h6");
        html_tag_2.a = t9;
        attr(div3, "class", "btnCollet cl-center svelte-vdh3h6");
        attr(div3, "id", div3_id_value = "tI_" + /*torrentInfo*/
        ctx[0].torrentIndex);
        attr(div4, "class", "cl-center svelte-vdh3h6");
        attr(div5, "class", "card-line svelte-vdh3h6");
        attr(div6, "class", "card-line svelte-vdh3h6");
        html_tag_3.a = t16;
        html_tag_4.a = t19;
        html_tag_5.a = t22;
        html_tag_6.a = t25;
        attr(div7, "class", "card-line svelte-vdh3h6");
        attr(div8, "class", "card-details svelte-vdh3h6");
      },
      m(target, anchor) {
        if (if_block0)
          if_block0.m(target, anchor);
        insert(target, t0, anchor);
        if (if_block1)
          if_block1.m(target, anchor);
        insert(target, t1, anchor);
        insert(target, div0, anchor);
        div0.innerHTML = raw0_value;
        insert(target, t2, anchor);
        insert(target, div8, anchor);
        append(div8, div5);
        append(div5, div1);
        html_tag.m(raw1_value, div1);
        append(div1, t3);
        append(div1, t4);
        append(div5, t5);
        append(div5, div2);
        html_tag_1.m(raw2_value, div2);
        append(div2, t6);
        append(div2, b0);
        append(b0, a);
        append(a, t7);
        append(div5, t8);
        append(div5, div4);
        append(div4, div3);
        html_tag_2.m(raw3_value, div3);
        append(div3, t9);
        append(div3, b1);
        append(div8, t11);
        append(div8, div6);
        append(div6, b2);
        append(div6, t13);
        append(div6, t14);
        append(div8, t15);
        append(div8, div7);
        html_tag_3.m(raw4_value, div7);
        append(div7, t16);
        append(div7, b3);
        append(b3, t17);
        append(div7, t18);
        html_tag_4.m(raw5_value, div7);
        append(div7, t19);
        append(div7, b4);
        append(b4, t20);
        append(div7, t21);
        html_tag_5.m(raw6_value, div7);
        append(div7, t22);
        append(div7, b5);
        append(b5, t23);
        append(div7, t24);
        html_tag_6.m(raw7_value, div7);
        append(div7, t25);
        append(div7, b6);
        append(b6, t26);
        if (!mounted) {
          dispose = listen(div3, "click", function() {
            if (is_function(COLLET_AND_ICON_CHANGE$1(
              /*torrentInfo*/
              ctx[0].collectLink,
              "tI_" + /*torrentInfo*/
              ctx[0].torrentIndex
            )))
              COLLET_AND_ICON_CHANGE$1(
                /*torrentInfo*/
                ctx[0].collectLink,
                "tI_" + /*torrentInfo*/
                ctx[0].torrentIndex
              ).apply(this, arguments);
          });
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (
          /*torrentInfo*/
          ctx[0].free_type || /*torrentInfo*/
          ctx[0].pattMsg
        ) {
          if (if_block0) {
            if_block0.p(ctx, dirty);
          } else {
            if_block0 = create_if_block_12$1(ctx);
            if_block0.c();
            if_block0.m(t0.parentNode, t0);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (
          /*torrentInfo*/
          ctx[0].description
        ) {
          if (if_block1) {
            if_block1.p(ctx, dirty);
          } else {
            if_block1 = create_if_block_11$1(ctx);
            if_block1.c();
            if_block1.m(t1.parentNode, t1);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if (dirty & /*torrentInfo*/
        1 && raw0_value !== (raw0_value = /*torrentInfo*/
        ctx[0].tagsDOM.map(
          /*func_2*/
          ctx[10]
        ).join("") + ""))
          div0.innerHTML = raw0_value;
        if (dirty & /*ICON*/
        4 && raw1_value !== (raw1_value = /*ICON*/
        ctx[2].SIZE + ""))
          html_tag.p(raw1_value);
        if (dirty & /*torrentInfo*/
        1 && t4_value !== (t4_value = /*torrentInfo*/
        ctx[0].size + ""))
          set_data(t4, t4_value);
        if (dirty & /*ICON*/
        4 && raw2_value !== (raw2_value = /*ICON*/
        ctx[2].DOWNLOAD + ""))
          html_tag_1.p(raw2_value);
        if (dirty & /*torrentInfo*/
        1 && a_href_value !== (a_href_value = /*torrentInfo*/
        ctx[0].downloadLink)) {
          attr(a, "href", a_href_value);
        }
        if (dirty & /*torrentInfo, ICON*/
        5 && raw3_value !== (raw3_value = /*torrentInfo*/
        (ctx[0].collectState == "Unbookmarked" ? (
          /*ICON*/
          ctx[2].COLLET
        ) : (
          /*ICON*/
          ctx[2].COLLETED
        )) + ""))
          html_tag_2.p(raw3_value);
        if (dirty & /*torrentInfo*/
        1 && div3_id_value !== (div3_id_value = "tI_" + /*torrentInfo*/
        ctx[0].torrentIndex)) {
          attr(div3, "id", div3_id_value);
        }
        if (dirty & /*torrentInfo*/
        1 && t14_value !== (t14_value = /*torrentInfo*/
        ctx[0].upload_date + ""))
          set_data(t14, t14_value);
        if (dirty & /*ICON*/
        4 && raw4_value !== (raw4_value = /*ICON*/
        ctx[2].COMMENT + ""))
          html_tag_3.p(raw4_value);
        if (dirty & /*torrentInfo*/
        1 && t17_value !== (t17_value = /*torrentInfo*/
        ctx[0].comments + ""))
          set_data(t17, t17_value);
        if (dirty & /*ICON*/
        4 && raw5_value !== (raw5_value = /*ICON*/
        ctx[2].SEEDERS + ""))
          html_tag_4.p(raw5_value);
        if (dirty & /*torrentInfo*/
        1 && t20_value !== (t20_value = /*torrentInfo*/
        ctx[0].seeders + ""))
          set_data(t20, t20_value);
        if (dirty & /*ICON*/
        4 && raw6_value !== (raw6_value = /*ICON*/
        ctx[2].LEECHERS + ""))
          html_tag_5.p(raw6_value);
        if (dirty & /*torrentInfo*/
        1 && t23_value !== (t23_value = /*torrentInfo*/
        ctx[0].leechers + ""))
          set_data(t23, t23_value);
        if (dirty & /*ICON*/
        4 && raw7_value !== (raw7_value = /*ICON*/
        ctx[2].SNATCHED + ""))
          html_tag_6.p(raw7_value);
        if (dirty & /*torrentInfo*/
        1 && t26_value !== (t26_value = /*torrentInfo*/
        ctx[0].snatched + ""))
          set_data(t26, t26_value);
      },
      d(detaching) {
        if (if_block0)
          if_block0.d(detaching);
        if (detaching)
          detach(t0);
        if (if_block1)
          if_block1.d(detaching);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(div0);
        if (detaching)
          detach(t2);
        if (detaching)
          detach(div8);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_12$1(ctx) {
    let div1;
    let div0;
    let t0;
    let t1;
    let div0_class_value;
    let if_block0 = (
      /*torrentInfo*/
      ctx[0].place_at_the_top.length != 0 && create_if_block_15$1(ctx)
    );
    let if_block1 = (
      /*torrentInfo*/
      ctx[0].freeTypeImg && create_if_block_14$1(ctx)
    );
    let if_block2 = (
      /*torrentInfo*/
      ctx[0].free_remaining_time && create_if_block_13$1(ctx)
    );
    return {
      c() {
        div1 = element("div");
        div0 = element("div");
        if (if_block0)
          if_block0.c();
        t0 = space();
        if (if_block1)
          if_block1.c();
        t1 = space();
        if (if_block2)
          if_block2.c();
        attr(div0, "class", div0_class_value = "top_and_free " + /*torrentInfo*/
        ctx[0].free_type + " svelte-vdh3h6");
        attr(div1, "class", "card-alter svelte-vdh3h6");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, div0);
        if (if_block0)
          if_block0.m(div0, null);
        append(div0, t0);
        if (if_block1)
          if_block1.m(div0, null);
        append(div0, t1);
        if (if_block2)
          if_block2.m(div0, null);
      },
      p(ctx2, dirty) {
        if (
          /*torrentInfo*/
          ctx2[0].place_at_the_top.length != 0
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_15$1(ctx2);
            if_block0.c();
            if_block0.m(div0, t0);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (
          /*torrentInfo*/
          ctx2[0].freeTypeImg
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block_14$1(ctx2);
            if_block1.c();
            if_block1.m(div0, t1);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if (
          /*torrentInfo*/
          ctx2[0].free_remaining_time
        ) {
          if (if_block2) {
            if_block2.p(ctx2, dirty);
          } else {
            if_block2 = create_if_block_13$1(ctx2);
            if_block2.c();
            if_block2.m(div0, null);
          }
        } else if (if_block2) {
          if_block2.d(1);
          if_block2 = null;
        }
        if (dirty & /*torrentInfo*/
        1 && div0_class_value !== (div0_class_value = "top_and_free " + /*torrentInfo*/
        ctx2[0].free_type + " svelte-vdh3h6")) {
          attr(div0, "class", div0_class_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(div1);
        if (if_block0)
          if_block0.d();
        if (if_block1)
          if_block1.d();
        if (if_block2)
          if_block2.d();
      }
    };
  }
  function create_if_block_15$1(ctx) {
    let html_tag;
    let raw_value = Array.from(
      /*torrentInfo*/
      ctx[0].place_at_the_top
    ).map(func_1$1) + "&nbsp;";
    let html_anchor;
    return {
      c() {
        html_tag = new HtmlTag(false);
        html_anchor = empty();
        html_tag.a = html_anchor;
      },
      m(target, anchor) {
        html_tag.m(raw_value, target, anchor);
        insert(target, html_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*torrentInfo*/
        1 && raw_value !== (raw_value = Array.from(
          /*torrentInfo*/
          ctx2[0].place_at_the_top
        ).map(func_1$1) + "&nbsp;"))
          html_tag.p(raw_value);
      },
      d(detaching) {
        if (detaching)
          detach(html_anchor);
        if (detaching)
          html_tag.d();
      }
    };
  }
  function create_if_block_14$1(ctx) {
    let html_tag;
    let raw_value = (
      /*torrentInfo*/
      ctx[0].freeTypeImg.outerHTML + ""
    );
    let html_anchor;
    return {
      c() {
        html_tag = new HtmlTag(false);
        html_anchor = empty();
        html_tag.a = html_anchor;
      },
      m(target, anchor) {
        html_tag.m(raw_value, target, anchor);
        insert(target, html_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*torrentInfo*/
        1 && raw_value !== (raw_value = /*torrentInfo*/
        ctx2[0].freeTypeImg.outerHTML + ""))
          html_tag.p(raw_value);
      },
      d(detaching) {
        if (detaching)
          detach(html_anchor);
        if (detaching)
          html_tag.d();
      }
    };
  }
  function create_if_block_13$1(ctx) {
    let t0;
    let b;
    let t1_value = (
      /*torrentInfo*/
      ctx[0].free_remaining_time + ""
    );
    let t1;
    return {
      c() {
        t0 = text(" ");
        b = element("b");
        t1 = text(t1_value);
      },
      m(target, anchor) {
        insert(target, t0, anchor);
        insert(target, b, anchor);
        append(b, t1);
      },
      p(ctx2, dirty) {
        if (dirty & /*torrentInfo*/
        1 && t1_value !== (t1_value = /*torrentInfo*/
        ctx2[0].free_remaining_time + ""))
          set_data(t1, t1_value);
      },
      d(detaching) {
        if (detaching)
          detach(t0);
        if (detaching)
          detach(b);
      }
    };
  }
  function create_if_block_11$1(ctx) {
    let a;
    let t_value = (
      /*torrentInfo*/
      ctx[0].description + ""
    );
    let t;
    let a_href_value;
    return {
      c() {
        a = element("a");
        t = text(t_value);
        attr(a, "class", "card-description svelte-vdh3h6");
        attr(a, "href", a_href_value = /*torrentInfo*/
        ctx[0].torrentLink);
      },
      m(target, anchor) {
        insert(target, a, anchor);
        append(a, t);
      },
      p(ctx2, dirty) {
        if (dirty & /*torrentInfo*/
        1 && t_value !== (t_value = /*torrentInfo*/
        ctx2[0].description + ""))
          set_data(t, t_value);
        if (dirty & /*torrentInfo*/
        1 && a_href_value !== (a_href_value = /*torrentInfo*/
        ctx2[0].torrentLink)) {
          attr(a, "href", a_href_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(a);
      }
    };
  }
  function create_if_block$2(ctx) {
    let t0;
    let t1;
    let t2;
    let div;
    let t3;
    let t4;
    let if_block0 = (
      /*$_CARD_SHOW*/
      ctx[5].free && /*torrentInfo*/
      (ctx[0].free_type || /*torrentInfo*/
      ctx[0].pattMsg) && create_if_block_6$1(ctx)
    );
    let if_block1 = (
      /*$_CARD_SHOW*/
      ctx[5].sub_title && /*torrentInfo*/
      ctx[0].description && create_if_block_5$1(ctx)
    );
    let if_block2 = (
      /*$_CARD_SHOW*/
      ctx[5].tags && create_if_block_4$2(ctx)
    );
    let if_block3 = (
      /*$_CARD_SHOW*/
      ctx[5].size_download_collect && create_if_block_3$2(ctx)
    );
    let if_block4 = (
      /*$_CARD_SHOW*/
      ctx[5].upload_time && create_if_block_2$2(ctx)
    );
    let if_block5 = (
      /*$_CARD_SHOW*/
      ctx[5].statistics && create_if_block_1$2(ctx)
    );
    return {
      c() {
        if (if_block0)
          if_block0.c();
        t0 = space();
        if (if_block1)
          if_block1.c();
        t1 = space();
        if (if_block2)
          if_block2.c();
        t2 = space();
        div = element("div");
        if (if_block3)
          if_block3.c();
        t3 = space();
        if (if_block4)
          if_block4.c();
        t4 = space();
        if (if_block5)
          if_block5.c();
        attr(div, "class", "card-details svelte-vdh3h6");
      },
      m(target, anchor) {
        if (if_block0)
          if_block0.m(target, anchor);
        insert(target, t0, anchor);
        if (if_block1)
          if_block1.m(target, anchor);
        insert(target, t1, anchor);
        if (if_block2)
          if_block2.m(target, anchor);
        insert(target, t2, anchor);
        insert(target, div, anchor);
        if (if_block3)
          if_block3.m(div, null);
        append(div, t3);
        if (if_block4)
          if_block4.m(div, null);
        append(div, t4);
        if (if_block5)
          if_block5.m(div, null);
      },
      p(ctx2, dirty) {
        if (
          /*$_CARD_SHOW*/
          ctx2[5].free && /*torrentInfo*/
          (ctx2[0].free_type || /*torrentInfo*/
          ctx2[0].pattMsg)
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_6$1(ctx2);
            if_block0.c();
            if_block0.m(t0.parentNode, t0);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (
          /*$_CARD_SHOW*/
          ctx2[5].sub_title && /*torrentInfo*/
          ctx2[0].description
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block_5$1(ctx2);
            if_block1.c();
            if_block1.m(t1.parentNode, t1);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if (
          /*$_CARD_SHOW*/
          ctx2[5].tags
        ) {
          if (if_block2) {
            if_block2.p(ctx2, dirty);
          } else {
            if_block2 = create_if_block_4$2(ctx2);
            if_block2.c();
            if_block2.m(t2.parentNode, t2);
          }
        } else if (if_block2) {
          if_block2.d(1);
          if_block2 = null;
        }
        if (
          /*$_CARD_SHOW*/
          ctx2[5].size_download_collect
        ) {
          if (if_block3) {
            if_block3.p(ctx2, dirty);
          } else {
            if_block3 = create_if_block_3$2(ctx2);
            if_block3.c();
            if_block3.m(div, t3);
          }
        } else if (if_block3) {
          if_block3.d(1);
          if_block3 = null;
        }
        if (
          /*$_CARD_SHOW*/
          ctx2[5].upload_time
        ) {
          if (if_block4) {
            if_block4.p(ctx2, dirty);
          } else {
            if_block4 = create_if_block_2$2(ctx2);
            if_block4.c();
            if_block4.m(div, t4);
          }
        } else if (if_block4) {
          if_block4.d(1);
          if_block4 = null;
        }
        if (
          /*$_CARD_SHOW*/
          ctx2[5].statistics
        ) {
          if (if_block5) {
            if_block5.p(ctx2, dirty);
          } else {
            if_block5 = create_if_block_1$2(ctx2);
            if_block5.c();
            if_block5.m(div, null);
          }
        } else if (if_block5) {
          if_block5.d(1);
          if_block5 = null;
        }
      },
      d(detaching) {
        if (if_block0)
          if_block0.d(detaching);
        if (detaching)
          detach(t0);
        if (if_block1)
          if_block1.d(detaching);
        if (detaching)
          detach(t1);
        if (if_block2)
          if_block2.d(detaching);
        if (detaching)
          detach(t2);
        if (detaching)
          detach(div);
        if (if_block3)
          if_block3.d();
        if (if_block4)
          if_block4.d();
        if (if_block5)
          if_block5.d();
      }
    };
  }
  function create_if_block_6$1(ctx) {
    let div1;
    let div0;
    let t0;
    let t1;
    let div0_class_value;
    let if_block0 = (
      /*torrentInfo*/
      ctx[0].place_at_the_top.length != 0 && create_if_block_9$1(ctx)
    );
    let if_block1 = (
      /*torrentInfo*/
      ctx[0].freeTypeImg && create_if_block_8$1(ctx)
    );
    let if_block2 = (
      /*torrentInfo*/
      ctx[0].free_remaining_time && create_if_block_7$1(ctx)
    );
    return {
      c() {
        div1 = element("div");
        div0 = element("div");
        if (if_block0)
          if_block0.c();
        t0 = space();
        if (if_block1)
          if_block1.c();
        t1 = space();
        if (if_block2)
          if_block2.c();
        attr(div0, "class", div0_class_value = "top_and_free " + /*torrentInfo*/
        ctx[0].free_type + " svelte-vdh3h6");
        attr(div1, "class", "card-alter svelte-vdh3h6");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, div0);
        if (if_block0)
          if_block0.m(div0, null);
        append(div0, t0);
        if (if_block1)
          if_block1.m(div0, null);
        append(div0, t1);
        if (if_block2)
          if_block2.m(div0, null);
      },
      p(ctx2, dirty) {
        if (
          /*torrentInfo*/
          ctx2[0].place_at_the_top.length != 0
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_9$1(ctx2);
            if_block0.c();
            if_block0.m(div0, t0);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (
          /*torrentInfo*/
          ctx2[0].freeTypeImg
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block_8$1(ctx2);
            if_block1.c();
            if_block1.m(div0, t1);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if (
          /*torrentInfo*/
          ctx2[0].free_remaining_time
        ) {
          if (if_block2) {
            if_block2.p(ctx2, dirty);
          } else {
            if_block2 = create_if_block_7$1(ctx2);
            if_block2.c();
            if_block2.m(div0, null);
          }
        } else if (if_block2) {
          if_block2.d(1);
          if_block2 = null;
        }
        if (dirty & /*torrentInfo*/
        1 && div0_class_value !== (div0_class_value = "top_and_free " + /*torrentInfo*/
        ctx2[0].free_type + " svelte-vdh3h6")) {
          attr(div0, "class", div0_class_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(div1);
        if (if_block0)
          if_block0.d();
        if (if_block1)
          if_block1.d();
        if (if_block2)
          if_block2.d();
      }
    };
  }
  function create_if_block_9$1(ctx) {
    let html_tag;
    let raw_value = Array.from(
      /*torrentInfo*/
      ctx[0].place_at_the_top
    ).map(func_3$1) + "&nbsp;";
    let html_anchor;
    return {
      c() {
        html_tag = new HtmlTag(false);
        html_anchor = empty();
        html_tag.a = html_anchor;
      },
      m(target, anchor) {
        html_tag.m(raw_value, target, anchor);
        insert(target, html_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*torrentInfo*/
        1 && raw_value !== (raw_value = Array.from(
          /*torrentInfo*/
          ctx2[0].place_at_the_top
        ).map(func_3$1) + "&nbsp;"))
          html_tag.p(raw_value);
      },
      d(detaching) {
        if (detaching)
          detach(html_anchor);
        if (detaching)
          html_tag.d();
      }
    };
  }
  function create_if_block_8$1(ctx) {
    let html_tag;
    let raw_value = (
      /*torrentInfo*/
      ctx[0].freeTypeImg.outerHTML + ""
    );
    let html_anchor;
    return {
      c() {
        html_tag = new HtmlTag(false);
        html_anchor = empty();
        html_tag.a = html_anchor;
      },
      m(target, anchor) {
        html_tag.m(raw_value, target, anchor);
        insert(target, html_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*torrentInfo*/
        1 && raw_value !== (raw_value = /*torrentInfo*/
        ctx2[0].freeTypeImg.outerHTML + ""))
          html_tag.p(raw_value);
      },
      d(detaching) {
        if (detaching)
          detach(html_anchor);
        if (detaching)
          html_tag.d();
      }
    };
  }
  function create_if_block_7$1(ctx) {
    let t0;
    let b;
    let t1_value = (
      /*torrentInfo*/
      ctx[0].free_remaining_time + ""
    );
    let t1;
    return {
      c() {
        t0 = text(" ");
        b = element("b");
        t1 = text(t1_value);
      },
      m(target, anchor) {
        insert(target, t0, anchor);
        insert(target, b, anchor);
        append(b, t1);
      },
      p(ctx2, dirty) {
        if (dirty & /*torrentInfo*/
        1 && t1_value !== (t1_value = /*torrentInfo*/
        ctx2[0].free_remaining_time + ""))
          set_data(t1, t1_value);
      },
      d(detaching) {
        if (detaching)
          detach(t0);
        if (detaching)
          detach(b);
      }
    };
  }
  function create_if_block_5$1(ctx) {
    let a;
    let t_value = (
      /*torrentInfo*/
      ctx[0].description + ""
    );
    let t;
    let a_href_value;
    return {
      c() {
        a = element("a");
        t = text(t_value);
        attr(a, "class", "card-description svelte-vdh3h6");
        attr(a, "href", a_href_value = /*torrentInfo*/
        ctx[0].torrentLink);
      },
      m(target, anchor) {
        insert(target, a, anchor);
        append(a, t);
      },
      p(ctx2, dirty) {
        if (dirty & /*torrentInfo*/
        1 && t_value !== (t_value = /*torrentInfo*/
        ctx2[0].description + ""))
          set_data(t, t_value);
        if (dirty & /*torrentInfo*/
        1 && a_href_value !== (a_href_value = /*torrentInfo*/
        ctx2[0].torrentLink)) {
          attr(a, "href", a_href_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(a);
      }
    };
  }
  function create_if_block_4$2(ctx) {
    let div;
    let raw_value = (
      /*torrentInfo*/
      ctx[0].tagsDOM.map(
        /*func_4*/
        ctx[11]
      ).join("") + ""
    );
    return {
      c() {
        div = element("div");
        attr(div, "class", "cl-tags svelte-vdh3h6");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        div.innerHTML = raw_value;
      },
      p(ctx2, dirty) {
        if (dirty & /*torrentInfo*/
        1 && raw_value !== (raw_value = /*torrentInfo*/
        ctx2[0].tagsDOM.map(
          /*func_4*/
          ctx2[11]
        ).join("") + ""))
          div.innerHTML = raw_value;
      },
      d(detaching) {
        if (detaching)
          detach(div);
      }
    };
  }
  function create_if_block_3$2(ctx) {
    let div4;
    let div0;
    let html_tag;
    let raw0_value = (
      /*ICON*/
      ctx[2].SIZE + ""
    );
    let t0;
    let t1_value = (
      /*torrentInfo*/
      ctx[0].size + ""
    );
    let t1;
    let t2;
    let div1;
    let html_tag_1;
    let raw1_value = (
      /*ICON*/
      ctx[2].DOWNLOAD + ""
    );
    let t3;
    let b0;
    let a;
    let t4;
    let a_href_value;
    let t5;
    let div3;
    let div2;
    let html_tag_2;
    let raw2_value = (
      /*torrentInfo*/
      (ctx[0].collectState == "Unbookmarked" ? (
        /*ICON*/
        ctx[2].COLLET
      ) : (
        /*ICON*/
        ctx[2].COLLETED
      )) + ""
    );
    let t6;
    let b1;
    let div2_id_value;
    let mounted;
    let dispose;
    return {
      c() {
        div4 = element("div");
        div0 = element("div");
        html_tag = new HtmlTag(false);
        t0 = text(" ");
        t1 = text(t1_value);
        t2 = text("\n\n            \n              \n            ");
        div1 = element("div");
        html_tag_1 = new HtmlTag(false);
        t3 = text(" \n              ");
        b0 = element("b");
        a = element("a");
        t4 = text("下载");
        t5 = text("\n\n            \n              \n            ");
        div3 = element("div");
        div2 = element("div");
        html_tag_2 = new HtmlTag(false);
        t6 = text("\n                 ");
        b1 = element("b");
        b1.textContent = "收藏";
        html_tag.a = t0;
        attr(div0, "class", "cl-center svelte-vdh3h6");
        html_tag_1.a = t3;
        attr(a, "href", a_href_value = /*torrentInfo*/
        ctx[0].downloadLink);
        attr(div1, "class", "cl-center svelte-vdh3h6");
        html_tag_2.a = t6;
        attr(div2, "class", "btnCollet cl-center svelte-vdh3h6");
        attr(div2, "id", div2_id_value = "tI_" + /*torrentInfo*/
        ctx[0].torrentIndex);
        attr(div3, "class", "cl-center svelte-vdh3h6");
        attr(div4, "class", "card-line svelte-vdh3h6");
      },
      m(target, anchor) {
        insert(target, div4, anchor);
        append(div4, div0);
        html_tag.m(raw0_value, div0);
        append(div0, t0);
        append(div0, t1);
        append(div4, t2);
        append(div4, div1);
        html_tag_1.m(raw1_value, div1);
        append(div1, t3);
        append(div1, b0);
        append(b0, a);
        append(a, t4);
        append(div4, t5);
        append(div4, div3);
        append(div3, div2);
        html_tag_2.m(raw2_value, div2);
        append(div2, t6);
        append(div2, b1);
        if (!mounted) {
          dispose = listen(div2, "click", function() {
            if (is_function(COLLET_AND_ICON_CHANGE$1(
              /*torrentInfo*/
              ctx[0].collectLink,
              "tI_" + /*torrentInfo*/
              ctx[0].torrentIndex
            )))
              COLLET_AND_ICON_CHANGE$1(
                /*torrentInfo*/
                ctx[0].collectLink,
                "tI_" + /*torrentInfo*/
                ctx[0].torrentIndex
              ).apply(this, arguments);
          });
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & /*ICON*/
        4 && raw0_value !== (raw0_value = /*ICON*/
        ctx[2].SIZE + ""))
          html_tag.p(raw0_value);
        if (dirty & /*torrentInfo*/
        1 && t1_value !== (t1_value = /*torrentInfo*/
        ctx[0].size + ""))
          set_data(t1, t1_value);
        if (dirty & /*ICON*/
        4 && raw1_value !== (raw1_value = /*ICON*/
        ctx[2].DOWNLOAD + ""))
          html_tag_1.p(raw1_value);
        if (dirty & /*torrentInfo*/
        1 && a_href_value !== (a_href_value = /*torrentInfo*/
        ctx[0].downloadLink)) {
          attr(a, "href", a_href_value);
        }
        if (dirty & /*torrentInfo, ICON*/
        5 && raw2_value !== (raw2_value = /*torrentInfo*/
        (ctx[0].collectState == "Unbookmarked" ? (
          /*ICON*/
          ctx[2].COLLET
        ) : (
          /*ICON*/
          ctx[2].COLLETED
        )) + ""))
          html_tag_2.p(raw2_value);
        if (dirty & /*torrentInfo*/
        1 && div2_id_value !== (div2_id_value = "tI_" + /*torrentInfo*/
        ctx[0].torrentIndex)) {
          attr(div2, "id", div2_id_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(div4);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_2$2(ctx) {
    let div;
    let b;
    let t1;
    let t2_value = (
      /*torrentInfo*/
      ctx[0].upload_date + ""
    );
    let t2;
    return {
      c() {
        div = element("div");
        b = element("b");
        b.textContent = "上传时间:";
        t1 = space();
        t2 = text(t2_value);
        attr(div, "class", "card-line svelte-vdh3h6");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, b);
        append(div, t1);
        append(div, t2);
      },
      p(ctx2, dirty) {
        if (dirty & /*torrentInfo*/
        1 && t2_value !== (t2_value = /*torrentInfo*/
        ctx2[0].upload_date + ""))
          set_data(t2, t2_value);
      },
      d(detaching) {
        if (detaching)
          detach(div);
      }
    };
  }
  function create_if_block_1$2(ctx) {
    let div;
    let html_tag;
    let raw0_value = (
      /*ICON*/
      ctx[2].COMMENT + ""
    );
    let t0;
    let b0;
    let t1_value = (
      /*torrentInfo*/
      ctx[0].comments + ""
    );
    let t1;
    let t2;
    let html_tag_1;
    let raw1_value = (
      /*ICON*/
      ctx[2].SEEDERS + ""
    );
    let t3;
    let b1;
    let t4_value = (
      /*torrentInfo*/
      ctx[0].seeders + ""
    );
    let t4;
    let t5;
    let html_tag_2;
    let raw2_value = (
      /*ICON*/
      ctx[2].LEECHERS + ""
    );
    let t6;
    let b2;
    let t7_value = (
      /*torrentInfo*/
      ctx[0].leechers + ""
    );
    let t7;
    let t8;
    let html_tag_3;
    let raw3_value = (
      /*ICON*/
      ctx[2].SNATCHED + ""
    );
    let t9;
    let b3;
    let t10_value = (
      /*torrentInfo*/
      ctx[0].snatched + ""
    );
    let t10;
    return {
      c() {
        div = element("div");
        html_tag = new HtmlTag(false);
        t0 = text(" ");
        b0 = element("b");
        t1 = text(t1_value);
        t2 = text("  \n            ");
        html_tag_1 = new HtmlTag(false);
        t3 = text(" ");
        b1 = element("b");
        t4 = text(t4_value);
        t5 = text("  \n            ");
        html_tag_2 = new HtmlTag(false);
        t6 = text(" ");
        b2 = element("b");
        t7 = text(t7_value);
        t8 = text("  \n            ");
        html_tag_3 = new HtmlTag(false);
        t9 = text(" ");
        b3 = element("b");
        t10 = text(t10_value);
        html_tag.a = t0;
        html_tag_1.a = t3;
        html_tag_2.a = t6;
        html_tag_3.a = t9;
        attr(div, "class", "card-line svelte-vdh3h6");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        html_tag.m(raw0_value, div);
        append(div, t0);
        append(div, b0);
        append(b0, t1);
        append(div, t2);
        html_tag_1.m(raw1_value, div);
        append(div, t3);
        append(div, b1);
        append(b1, t4);
        append(div, t5);
        html_tag_2.m(raw2_value, div);
        append(div, t6);
        append(div, b2);
        append(b2, t7);
        append(div, t8);
        html_tag_3.m(raw3_value, div);
        append(div, t9);
        append(div, b3);
        append(b3, t10);
      },
      p(ctx2, dirty) {
        if (dirty & /*ICON*/
        4 && raw0_value !== (raw0_value = /*ICON*/
        ctx2[2].COMMENT + ""))
          html_tag.p(raw0_value);
        if (dirty & /*torrentInfo*/
        1 && t1_value !== (t1_value = /*torrentInfo*/
        ctx2[0].comments + ""))
          set_data(t1, t1_value);
        if (dirty & /*ICON*/
        4 && raw1_value !== (raw1_value = /*ICON*/
        ctx2[2].SEEDERS + ""))
          html_tag_1.p(raw1_value);
        if (dirty & /*torrentInfo*/
        1 && t4_value !== (t4_value = /*torrentInfo*/
        ctx2[0].seeders + ""))
          set_data(t4, t4_value);
        if (dirty & /*ICON*/
        4 && raw2_value !== (raw2_value = /*ICON*/
        ctx2[2].LEECHERS + ""))
          html_tag_2.p(raw2_value);
        if (dirty & /*torrentInfo*/
        1 && t7_value !== (t7_value = /*torrentInfo*/
        ctx2[0].leechers + ""))
          set_data(t7, t7_value);
        if (dirty & /*ICON*/
        4 && raw3_value !== (raw3_value = /*ICON*/
        ctx2[2].SNATCHED + ""))
          html_tag_3.p(raw3_value);
        if (dirty & /*torrentInfo*/
        1 && t10_value !== (t10_value = /*torrentInfo*/
        ctx2[0].snatched + ""))
          set_data(t10, t10_value);
      },
      d(detaching) {
        if (detaching)
          detach(div);
      }
    };
  }
  function create_fragment$2(ctx) {
    let div4;
    let div3;
    let div0;
    let t0_value = (
      /*torrentInfo*/
      ctx[0].category + ""
    );
    let t0;
    let div0_data_href_value;
    let t1;
    let t2;
    let div2;
    let img;
    let img_src_value;
    let img_data_src_value;
    let img_alt_value;
    let t3;
    let div1;
    let t4_value = (
      /*torrentInfo*/
      ctx[0].torrentIndex + 1 + ""
    );
    let t4;
    let t5;
    let t6;
    let mounted;
    let dispose;
    let if_block0 = (
      /*$_CARD_SHOW*/
      (ctx[5].title || /*_hover*/
      ctx[3]) && create_if_block_16$1(ctx)
    );
    let if_block1 = (
      /*$_CARD_SHOW*/
      (ctx[5].all || /*_hover*/
      ctx[3]) && create_if_block_10$1(ctx)
    );
    let if_block2 = !/*$_CARD_SHOW*/
    (ctx[5].all || /*_hover*/
    ctx[3]) && create_if_block$2(ctx);
    return {
      c() {
        div4 = element("div");
        div3 = element("div");
        div0 = element("div");
        t0 = text(t0_value);
        t1 = space();
        if (if_block0)
          if_block0.c();
        t2 = space();
        div2 = element("div");
        img = element("img");
        t3 = space();
        div1 = element("div");
        t4 = text(t4_value);
        t5 = space();
        if (if_block1)
          if_block1.c();
        t6 = space();
        if (if_block2)
          if_block2.c();
        attr(div0, "class", "card-category svelte-vdh3h6");
        attr(div0, "data-href", div0_data_href_value = /*torrentInfo*/
        ctx[0].categoryLink);
        set_style(div0, "background-color", CONFIG$1.CATEGORY[
          /*torrentInfo*/
          ctx[0].categoryNumber
        ] ?? "transparent");
        set_style(div0, "color", CONFIG$1.CATEGORY[
          /*torrentInfo*/
          ctx[0].categoryNumber
        ] ? getTextColor$1(CONFIG$1.CATEGORY[
          /*torrentInfo*/
          ctx[0].categoryNumber
        ]) : "black");
        attr(img, "class", "card-image--img nexus-lazy-load_Kesa svelte-vdh3h6");
        if (!src_url_equal(img.src, img_src_value = CONFIG$1.LOADING_PIC))
          attr(img, "src", img_src_value);
        attr(img, "data-src", img_data_src_value = /*torrentInfo*/
        ctx[0].picLink);
        attr(img, "alt", img_alt_value = /*torrentInfo*/
        ctx[0].torrentName);
        attr(div1, "class", "card-index svelte-vdh3h6");
        attr(div2, "class", "card-image svelte-vdh3h6");
        attr(div3, "class", "card-holder svelte-vdh3h6");
        attr(div4, "class", "card svelte-vdh3h6");
        set_style(
          div4,
          "width",
          /*cardWidth*/
          ctx[1] + "px"
        );
        set_style(div4, "z-index", 1e4 - /*torrentInfo*/
        ctx[0].torrentIndex);
        set_style(
          div4,
          "background-color",
          /*$_current_bgColor*/
          ctx[4]
        );
      },
      m(target, anchor) {
        insert(target, div4, anchor);
        append(div4, div3);
        append(div3, div0);
        append(div0, t0);
        append(div3, t1);
        if (if_block0)
          if_block0.m(div3, null);
        append(div3, t2);
        append(div3, div2);
        append(div2, img);
        append(div2, t3);
        append(div2, div1);
        append(div1, t4);
        append(div3, t5);
        if (if_block1)
          if_block1.m(div3, null);
        append(div3, t6);
        if (if_block2)
          if_block2.m(div3, null);
        if (!mounted) {
          dispose = [
            listen(
              img,
              "load",
              /*sort_masonry*/
              ctx[6]
            ),
            listen(
              img,
              "click",
              /*showDetailIframe*/
              ctx[7]
            ),
            listen(
              div3,
              "mouseenter",
              /*card_show_detail*/
              ctx[8]
            ),
            listen(
              div3,
              "mouseleave",
              /*card_hide_detail*/
              ctx[9]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*torrentInfo*/
        1 && t0_value !== (t0_value = /*torrentInfo*/
        ctx2[0].category + ""))
          set_data(t0, t0_value);
        if (dirty & /*torrentInfo*/
        1 && div0_data_href_value !== (div0_data_href_value = /*torrentInfo*/
        ctx2[0].categoryLink)) {
          attr(div0, "data-href", div0_data_href_value);
        }
        if (dirty & /*torrentInfo*/
        1) {
          set_style(div0, "background-color", CONFIG$1.CATEGORY[
            /*torrentInfo*/
            ctx2[0].categoryNumber
          ] ?? "transparent");
        }
        if (dirty & /*torrentInfo*/
        1) {
          set_style(div0, "color", CONFIG$1.CATEGORY[
            /*torrentInfo*/
            ctx2[0].categoryNumber
          ] ? getTextColor$1(CONFIG$1.CATEGORY[
            /*torrentInfo*/
            ctx2[0].categoryNumber
          ]) : "black");
        }
        if (
          /*$_CARD_SHOW*/
          ctx2[5].title || /*_hover*/
          ctx2[3]
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_16$1(ctx2);
            if_block0.c();
            if_block0.m(div3, t2);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (dirty & /*torrentInfo*/
        1 && img_data_src_value !== (img_data_src_value = /*torrentInfo*/
        ctx2[0].picLink)) {
          attr(img, "data-src", img_data_src_value);
        }
        if (dirty & /*torrentInfo*/
        1 && img_alt_value !== (img_alt_value = /*torrentInfo*/
        ctx2[0].torrentName)) {
          attr(img, "alt", img_alt_value);
        }
        if (dirty & /*torrentInfo*/
        1 && t4_value !== (t4_value = /*torrentInfo*/
        ctx2[0].torrentIndex + 1 + ""))
          set_data(t4, t4_value);
        if (
          /*$_CARD_SHOW*/
          ctx2[5].all || /*_hover*/
          ctx2[3]
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block_10$1(ctx2);
            if_block1.c();
            if_block1.m(div3, t6);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if (!/*$_CARD_SHOW*/
        (ctx2[5].all || /*_hover*/
        ctx2[3])) {
          if (if_block2) {
            if_block2.p(ctx2, dirty);
          } else {
            if_block2 = create_if_block$2(ctx2);
            if_block2.c();
            if_block2.m(div3, null);
          }
        } else if (if_block2) {
          if_block2.d(1);
          if_block2 = null;
        }
        if (dirty & /*cardWidth*/
        2) {
          set_style(
            div4,
            "width",
            /*cardWidth*/
            ctx2[1] + "px"
          );
        }
        if (dirty & /*torrentInfo*/
        1) {
          set_style(div4, "z-index", 1e4 - /*torrentInfo*/
          ctx2[0].torrentIndex);
        }
        if (dirty & /*$_current_bgColor*/
        16) {
          set_style(
            div4,
            "background-color",
            /*$_current_bgColor*/
            ctx2[4]
          );
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div4);
        if (if_block0)
          if_block0.d();
        if (if_block1)
          if_block1.d();
        if (if_block2)
          if_block2.d();
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function COLLET_AND_ICON_CHANGE$1(jsCodeLink, card_id) {
    try {
      window.location.href = jsCodeLink;
      const btn = document.querySelector(`div#${card_id}`);
      const img = btn.children[0];
      img.className = img.className == "delbookmark" ? "bookmark" : "delbookmark";
      console.log(`执行脚本${jsCodeLink}成功, 已经收藏或者取消~`);
    } catch (error) {
      console.error(error);
    }
  }
  function getTextColor$1(background) {
    const color = background.replace("#", "");
    const red = parseInt(color.substr(0, 2), 16);
    const green = parseInt(color.substr(2, 2), 16);
    const blue = parseInt(color.substr(4, 2), 16);
    const brightness = (red * 299 + green * 587 + blue * 114) / 1e3;
    return brightness < 128 ? "white" : "black";
  }
  const func$1 = (e) => e.outerHTML;
  const func_1$1 = (e) => e.outerHTML;
  const func_3$1 = (e) => e.outerHTML;
  function instance$3($$self, $$props, $$invalidate) {
    let $_iframe_url;
    let $_iframe_switch;
    let $_current_bgColor;
    let $_CARD_SHOW;
    component_subscribe($$self, _iframe_url, ($$value) => $$invalidate(12, $_iframe_url = $$value));
    component_subscribe($$self, _iframe_switch, ($$value) => $$invalidate(13, $_iframe_switch = $$value));
    component_subscribe($$self, _current_bgColor, ($$value) => $$invalidate(4, $_current_bgColor = $$value));
    component_subscribe($$self, _CARD_SHOW, ($$value) => $$invalidate(5, $_CARD_SHOW = $$value));
    function sort_masonry() {
      sortMasonry();
    }
    function showDetailIframe() {
      set_store_value(_iframe_switch, $_iframe_switch = 1, $_iframe_switch);
      set_store_value(_iframe_url, $_iframe_url = torrentInfo.torrentLink + "#kdescr", $_iframe_url);
    }
    let { torrentInfo } = $$props;
    let { cardWidth } = $$props;
    let { ICON } = $$props;
    let _hover = false;
    function card_show_detail() {
      $$invalidate(3, _hover = true);
    }
    function card_hide_detail() {
      $$invalidate(3, _hover = false);
    }
    const func_2 = (el) => {
      const _tag = document.createElement("div");
      _tag.innerHTML = el.outerHTML;
      return _tag.outerHTML;
    };
    const func_4 = (el) => {
      const _tag = document.createElement("div");
      _tag.innerHTML = el.outerHTML;
      return _tag.outerHTML;
    };
    $$self.$$set = ($$props2) => {
      if ("torrentInfo" in $$props2)
        $$invalidate(0, torrentInfo = $$props2.torrentInfo);
      if ("cardWidth" in $$props2)
        $$invalidate(1, cardWidth = $$props2.cardWidth);
      if ("ICON" in $$props2)
        $$invalidate(2, ICON = $$props2.ICON);
    };
    return [
      torrentInfo,
      cardWidth,
      ICON,
      _hover,
      $_current_bgColor,
      $_CARD_SHOW,
      sort_masonry,
      showDetailIframe,
      card_show_detail,
      card_hide_detail,
      func_2,
      func_4
    ];
  }
  class Kamept extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$3, create_fragment$2, safe_not_equal, { torrentInfo: 0, cardWidth: 1, ICON: 2 });
    }
  }
  function create_if_block_16(ctx) {
    let div;
    let a;
    let t0;
    let b;
    let t1_value = (
      /*torrentInfo*/
      ctx[0].torrent_name + ""
    );
    let t1;
    let a_href_value;
    let if_block = (
      /*torrentInfo*/
      ctx[0].tempTagDom.length != 0 && create_if_block_17(ctx)
    );
    return {
      c() {
        div = element("div");
        a = element("a");
        if (if_block)
          if_block.c();
        t0 = space();
        b = element("b");
        t1 = text(t1_value);
        attr(a, "class", "two-lines svelte-1rfbgrc");
        attr(a, "href", a_href_value = /*torrentInfo*/
        ctx[0].torrentLink);
        attr(a, "target", "_blank");
        attr(div, "class", "card-title svelte-1rfbgrc");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, a);
        if (if_block)
          if_block.m(a, null);
        append(a, t0);
        append(a, b);
        append(b, t1);
      },
      p(ctx2, dirty) {
        if (
          /*torrentInfo*/
          ctx2[0].tempTagDom.length != 0
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block_17(ctx2);
            if_block.c();
            if_block.m(a, t0);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
        if (dirty & /*torrentInfo*/
        1 && t1_value !== (t1_value = /*torrentInfo*/
        ctx2[0].torrent_name + ""))
          set_data(t1, t1_value);
        if (dirty & /*torrentInfo*/
        1 && a_href_value !== (a_href_value = /*torrentInfo*/
        ctx2[0].torrentLink)) {
          attr(a, "href", a_href_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(div);
        if (if_block)
          if_block.d();
      }
    };
  }
  function create_if_block_17(ctx) {
    let span;
    let raw_value = Array.from(
      /*torrentInfo*/
      ctx[0].tempTagDom
    ).map(func) + "";
    return {
      c() {
        span = element("span");
        attr(span, "class", "tempTags svelte-1rfbgrc");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        span.innerHTML = raw_value;
      },
      p(ctx2, dirty) {
        if (dirty & /*torrentInfo*/
        1 && raw_value !== (raw_value = Array.from(
          /*torrentInfo*/
          ctx2[0].tempTagDom
        ).map(func) + ""))
          span.innerHTML = raw_value;
      },
      d(detaching) {
        if (detaching)
          detach(span);
      }
    };
  }
  function create_if_block_10(ctx) {
    let t0;
    let t1;
    let div0;
    let raw0_value = (
      /*torrentInfo*/
      ctx[0].tagsDOM.map(
        /*func_2*/
        ctx[11]
      ).join("") + ""
    );
    let t2;
    let div8;
    let div5;
    let div1;
    let html_tag;
    let raw1_value = (
      /*ICON*/
      ctx[2].SIZE + ""
    );
    let t3;
    let t4_value = (
      /*torrentInfo*/
      ctx[0].size + ""
    );
    let t4;
    let t5;
    let div2;
    let html_tag_1;
    let raw2_value = (
      /*ICON*/
      ctx[2].DOWNLOAD + ""
    );
    let t6;
    let b0;
    let a;
    let t7;
    let a_href_value;
    let t8;
    let div4;
    let div3;
    let html_tag_2;
    let raw3_value = (
      /*torrentInfo*/
      (ctx[0].collectState == "Unbookmarked" ? (
        /*ICON*/
        ctx[2].COLLET
      ) : (
        /*ICON*/
        ctx[2].COLLETED
      )) + ""
    );
    let t9;
    let b1;
    let div3_id_value;
    let t11;
    let div6;
    let b2;
    let t13;
    let t14_value = (
      /*torrentInfo*/
      ctx[0].upload_date + ""
    );
    let t14;
    let t15;
    let div7;
    let html_tag_3;
    let raw4_value = (
      /*ICON*/
      ctx[2].COMMENT + ""
    );
    let t16;
    let b3;
    let t17_value = (
      /*torrentInfo*/
      ctx[0].comments + ""
    );
    let t17;
    let t18;
    let html_tag_4;
    let raw5_value = (
      /*ICON*/
      ctx[2].SEEDERS + ""
    );
    let t19;
    let b4;
    let t20_value = (
      /*torrentInfo*/
      ctx[0].seeders + ""
    );
    let t20;
    let t21;
    let html_tag_5;
    let raw6_value = (
      /*ICON*/
      ctx[2].LEECHERS + ""
    );
    let t22;
    let b5;
    let t23_value = (
      /*torrentInfo*/
      ctx[0].leechers + ""
    );
    let t23;
    let t24;
    let html_tag_6;
    let raw7_value = (
      /*ICON*/
      ctx[2].SNATCHED + ""
    );
    let t25;
    let b6;
    let t26_value = (
      /*torrentInfo*/
      ctx[0].snatched + ""
    );
    let t26;
    let mounted;
    let dispose;
    let if_block0 = (
      /*torrentInfo*/
      (ctx[0].free_type || /*torrentInfo*/
      ctx[0].pattMsg) && create_if_block_12(ctx)
    );
    let if_block1 = (
      /*torrentInfo*/
      ctx[0].description && create_if_block_11(ctx)
    );
    return {
      c() {
        if (if_block0)
          if_block0.c();
        t0 = space();
        if (if_block1)
          if_block1.c();
        t1 = space();
        div0 = element("div");
        t2 = space();
        div8 = element("div");
        div5 = element("div");
        div1 = element("div");
        html_tag = new HtmlTag(false);
        t3 = text(" ");
        t4 = text(t4_value);
        t5 = text("\n\n          \n            \n          ");
        div2 = element("div");
        html_tag_1 = new HtmlTag(false);
        t6 = text(" \n            ");
        b0 = element("b");
        a = element("a");
        t7 = text("下载");
        t8 = text("\n\n          \n            \n          ");
        div4 = element("div");
        div3 = element("div");
        html_tag_2 = new HtmlTag(false);
        t9 = text("\n               ");
        b1 = element("b");
        b1.textContent = "收藏";
        t11 = space();
        div6 = element("div");
        b2 = element("b");
        b2.textContent = "上传时间:";
        t13 = space();
        t14 = text(t14_value);
        t15 = space();
        div7 = element("div");
        html_tag_3 = new HtmlTag(false);
        t16 = text(" ");
        b3 = element("b");
        t17 = text(t17_value);
        t18 = text("  \n          ");
        html_tag_4 = new HtmlTag(false);
        t19 = text(" ");
        b4 = element("b");
        t20 = text(t20_value);
        t21 = text("  \n          ");
        html_tag_5 = new HtmlTag(false);
        t22 = text(" ");
        b5 = element("b");
        t23 = text(t23_value);
        t24 = text("  \n          ");
        html_tag_6 = new HtmlTag(false);
        t25 = text(" ");
        b6 = element("b");
        t26 = text(t26_value);
        attr(div0, "class", "cl-tags svelte-1rfbgrc");
        html_tag.a = t3;
        attr(div1, "class", "cl-center svelte-1rfbgrc");
        html_tag_1.a = t6;
        attr(a, "href", a_href_value = /*torrentInfo*/
        ctx[0].downloadLink);
        attr(div2, "class", "cl-center svelte-1rfbgrc");
        html_tag_2.a = t9;
        attr(div3, "class", "btnCollet cl-center svelte-1rfbgrc");
        attr(div3, "id", div3_id_value = "tI_" + /*torrentInfo*/
        ctx[0].torrentIndex);
        attr(div4, "class", "cl-center svelte-1rfbgrc");
        attr(div5, "class", "card-line svelte-1rfbgrc");
        attr(div6, "class", "card-line svelte-1rfbgrc");
        html_tag_3.a = t16;
        html_tag_4.a = t19;
        html_tag_5.a = t22;
        html_tag_6.a = t25;
        attr(div7, "class", "card-line svelte-1rfbgrc");
        attr(div8, "class", "card-details svelte-1rfbgrc");
      },
      m(target, anchor) {
        if (if_block0)
          if_block0.m(target, anchor);
        insert(target, t0, anchor);
        if (if_block1)
          if_block1.m(target, anchor);
        insert(target, t1, anchor);
        insert(target, div0, anchor);
        div0.innerHTML = raw0_value;
        insert(target, t2, anchor);
        insert(target, div8, anchor);
        append(div8, div5);
        append(div5, div1);
        html_tag.m(raw1_value, div1);
        append(div1, t3);
        append(div1, t4);
        append(div5, t5);
        append(div5, div2);
        html_tag_1.m(raw2_value, div2);
        append(div2, t6);
        append(div2, b0);
        append(b0, a);
        append(a, t7);
        append(div5, t8);
        append(div5, div4);
        append(div4, div3);
        html_tag_2.m(raw3_value, div3);
        append(div3, t9);
        append(div3, b1);
        append(div8, t11);
        append(div8, div6);
        append(div6, b2);
        append(div6, t13);
        append(div6, t14);
        append(div8, t15);
        append(div8, div7);
        html_tag_3.m(raw4_value, div7);
        append(div7, t16);
        append(div7, b3);
        append(b3, t17);
        append(div7, t18);
        html_tag_4.m(raw5_value, div7);
        append(div7, t19);
        append(div7, b4);
        append(b4, t20);
        append(div7, t21);
        html_tag_5.m(raw6_value, div7);
        append(div7, t22);
        append(div7, b5);
        append(b5, t23);
        append(div7, t24);
        html_tag_6.m(raw7_value, div7);
        append(div7, t25);
        append(div7, b6);
        append(b6, t26);
        if (!mounted) {
          dispose = listen(div3, "click", function() {
            if (is_function(COLLET_AND_ICON_CHANGE(
              /*torrentInfo*/
              ctx[0].collectLink,
              "tI_" + /*torrentInfo*/
              ctx[0].torrentIndex
            )))
              COLLET_AND_ICON_CHANGE(
                /*torrentInfo*/
                ctx[0].collectLink,
                "tI_" + /*torrentInfo*/
                ctx[0].torrentIndex
              ).apply(this, arguments);
          });
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (
          /*torrentInfo*/
          ctx[0].free_type || /*torrentInfo*/
          ctx[0].pattMsg
        ) {
          if (if_block0) {
            if_block0.p(ctx, dirty);
          } else {
            if_block0 = create_if_block_12(ctx);
            if_block0.c();
            if_block0.m(t0.parentNode, t0);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (
          /*torrentInfo*/
          ctx[0].description
        ) {
          if (if_block1) {
            if_block1.p(ctx, dirty);
          } else {
            if_block1 = create_if_block_11(ctx);
            if_block1.c();
            if_block1.m(t1.parentNode, t1);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if (dirty & /*torrentInfo*/
        1 && raw0_value !== (raw0_value = /*torrentInfo*/
        ctx[0].tagsDOM.map(
          /*func_2*/
          ctx[11]
        ).join("") + ""))
          div0.innerHTML = raw0_value;
        if (dirty & /*ICON*/
        4 && raw1_value !== (raw1_value = /*ICON*/
        ctx[2].SIZE + ""))
          html_tag.p(raw1_value);
        if (dirty & /*torrentInfo*/
        1 && t4_value !== (t4_value = /*torrentInfo*/
        ctx[0].size + ""))
          set_data(t4, t4_value);
        if (dirty & /*ICON*/
        4 && raw2_value !== (raw2_value = /*ICON*/
        ctx[2].DOWNLOAD + ""))
          html_tag_1.p(raw2_value);
        if (dirty & /*torrentInfo*/
        1 && a_href_value !== (a_href_value = /*torrentInfo*/
        ctx[0].downloadLink)) {
          attr(a, "href", a_href_value);
        }
        if (dirty & /*torrentInfo, ICON*/
        5 && raw3_value !== (raw3_value = /*torrentInfo*/
        (ctx[0].collectState == "Unbookmarked" ? (
          /*ICON*/
          ctx[2].COLLET
        ) : (
          /*ICON*/
          ctx[2].COLLETED
        )) + ""))
          html_tag_2.p(raw3_value);
        if (dirty & /*torrentInfo*/
        1 && div3_id_value !== (div3_id_value = "tI_" + /*torrentInfo*/
        ctx[0].torrentIndex)) {
          attr(div3, "id", div3_id_value);
        }
        if (dirty & /*torrentInfo*/
        1 && t14_value !== (t14_value = /*torrentInfo*/
        ctx[0].upload_date + ""))
          set_data(t14, t14_value);
        if (dirty & /*ICON*/
        4 && raw4_value !== (raw4_value = /*ICON*/
        ctx[2].COMMENT + ""))
          html_tag_3.p(raw4_value);
        if (dirty & /*torrentInfo*/
        1 && t17_value !== (t17_value = /*torrentInfo*/
        ctx[0].comments + ""))
          set_data(t17, t17_value);
        if (dirty & /*ICON*/
        4 && raw5_value !== (raw5_value = /*ICON*/
        ctx[2].SEEDERS + ""))
          html_tag_4.p(raw5_value);
        if (dirty & /*torrentInfo*/
        1 && t20_value !== (t20_value = /*torrentInfo*/
        ctx[0].seeders + ""))
          set_data(t20, t20_value);
        if (dirty & /*ICON*/
        4 && raw6_value !== (raw6_value = /*ICON*/
        ctx[2].LEECHERS + ""))
          html_tag_5.p(raw6_value);
        if (dirty & /*torrentInfo*/
        1 && t23_value !== (t23_value = /*torrentInfo*/
        ctx[0].leechers + ""))
          set_data(t23, t23_value);
        if (dirty & /*ICON*/
        4 && raw7_value !== (raw7_value = /*ICON*/
        ctx[2].SNATCHED + ""))
          html_tag_6.p(raw7_value);
        if (dirty & /*torrentInfo*/
        1 && t26_value !== (t26_value = /*torrentInfo*/
        ctx[0].snatched + ""))
          set_data(t26, t26_value);
      },
      d(detaching) {
        if (if_block0)
          if_block0.d(detaching);
        if (detaching)
          detach(t0);
        if (if_block1)
          if_block1.d(detaching);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(div0);
        if (detaching)
          detach(t2);
        if (detaching)
          detach(div8);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_12(ctx) {
    let div1;
    let div0;
    let t0;
    let t1;
    let div0_class_value;
    let if_block0 = (
      /*torrentInfo*/
      ctx[0].place_at_the_top.length != 0 && create_if_block_15(ctx)
    );
    let if_block1 = (
      /*torrentInfo*/
      ctx[0].freeTypeImg && create_if_block_14(ctx)
    );
    let if_block2 = (
      /*torrentInfo*/
      ctx[0].free_remaining_time && create_if_block_13(ctx)
    );
    return {
      c() {
        div1 = element("div");
        div0 = element("div");
        if (if_block0)
          if_block0.c();
        t0 = space();
        if (if_block1)
          if_block1.c();
        t1 = space();
        if (if_block2)
          if_block2.c();
        attr(div0, "class", div0_class_value = "top_and_free " + /*torrentInfo*/
        ctx[0].free_type + " svelte-1rfbgrc");
        attr(div1, "class", "card-alter svelte-1rfbgrc");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, div0);
        if (if_block0)
          if_block0.m(div0, null);
        append(div0, t0);
        if (if_block1)
          if_block1.m(div0, null);
        append(div0, t1);
        if (if_block2)
          if_block2.m(div0, null);
      },
      p(ctx2, dirty) {
        if (
          /*torrentInfo*/
          ctx2[0].place_at_the_top.length != 0
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_15(ctx2);
            if_block0.c();
            if_block0.m(div0, t0);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (
          /*torrentInfo*/
          ctx2[0].freeTypeImg
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block_14(ctx2);
            if_block1.c();
            if_block1.m(div0, t1);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if (
          /*torrentInfo*/
          ctx2[0].free_remaining_time
        ) {
          if (if_block2) {
            if_block2.p(ctx2, dirty);
          } else {
            if_block2 = create_if_block_13(ctx2);
            if_block2.c();
            if_block2.m(div0, null);
          }
        } else if (if_block2) {
          if_block2.d(1);
          if_block2 = null;
        }
        if (dirty & /*torrentInfo*/
        1 && div0_class_value !== (div0_class_value = "top_and_free " + /*torrentInfo*/
        ctx2[0].free_type + " svelte-1rfbgrc")) {
          attr(div0, "class", div0_class_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(div1);
        if (if_block0)
          if_block0.d();
        if (if_block1)
          if_block1.d();
        if (if_block2)
          if_block2.d();
      }
    };
  }
  function create_if_block_15(ctx) {
    let html_tag;
    let raw_value = Array.from(
      /*torrentInfo*/
      ctx[0].place_at_the_top
    ).map(func_1) + "&nbsp;";
    let html_anchor;
    return {
      c() {
        html_tag = new HtmlTag(false);
        html_anchor = empty();
        html_tag.a = html_anchor;
      },
      m(target, anchor) {
        html_tag.m(raw_value, target, anchor);
        insert(target, html_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*torrentInfo*/
        1 && raw_value !== (raw_value = Array.from(
          /*torrentInfo*/
          ctx2[0].place_at_the_top
        ).map(func_1) + "&nbsp;"))
          html_tag.p(raw_value);
      },
      d(detaching) {
        if (detaching)
          detach(html_anchor);
        if (detaching)
          html_tag.d();
      }
    };
  }
  function create_if_block_14(ctx) {
    let html_tag;
    let raw_value = (
      /*torrentInfo*/
      ctx[0].freeTypeImg.outerHTML + ""
    );
    let html_anchor;
    return {
      c() {
        html_tag = new HtmlTag(false);
        html_anchor = empty();
        html_tag.a = html_anchor;
      },
      m(target, anchor) {
        html_tag.m(raw_value, target, anchor);
        insert(target, html_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*torrentInfo*/
        1 && raw_value !== (raw_value = /*torrentInfo*/
        ctx2[0].freeTypeImg.outerHTML + ""))
          html_tag.p(raw_value);
      },
      d(detaching) {
        if (detaching)
          detach(html_anchor);
        if (detaching)
          html_tag.d();
      }
    };
  }
  function create_if_block_13(ctx) {
    let t0;
    let b;
    let t1_value = (
      /*torrentInfo*/
      ctx[0].free_remaining_time + ""
    );
    let t1;
    return {
      c() {
        t0 = text(" ");
        b = element("b");
        t1 = text(t1_value);
      },
      m(target, anchor) {
        insert(target, t0, anchor);
        insert(target, b, anchor);
        append(b, t1);
      },
      p(ctx2, dirty) {
        if (dirty & /*torrentInfo*/
        1 && t1_value !== (t1_value = /*torrentInfo*/
        ctx2[0].free_remaining_time + ""))
          set_data(t1, t1_value);
      },
      d(detaching) {
        if (detaching)
          detach(t0);
        if (detaching)
          detach(b);
      }
    };
  }
  function create_if_block_11(ctx) {
    let a;
    let t_value = (
      /*torrentInfo*/
      ctx[0].description + ""
    );
    let t;
    let a_href_value;
    return {
      c() {
        a = element("a");
        t = text(t_value);
        attr(a, "class", "card-description svelte-1rfbgrc");
        attr(a, "href", a_href_value = /*torrentInfo*/
        ctx[0].torrentLink);
      },
      m(target, anchor) {
        insert(target, a, anchor);
        append(a, t);
      },
      p(ctx2, dirty) {
        if (dirty & /*torrentInfo*/
        1 && t_value !== (t_value = /*torrentInfo*/
        ctx2[0].description + ""))
          set_data(t, t_value);
        if (dirty & /*torrentInfo*/
        1 && a_href_value !== (a_href_value = /*torrentInfo*/
        ctx2[0].torrentLink)) {
          attr(a, "href", a_href_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(a);
      }
    };
  }
  function create_if_block$1(ctx) {
    let t0;
    let t1;
    let t2;
    let div;
    let t3;
    let t4;
    let if_block0 = (
      /*$_CARD_SHOW*/
      ctx[6].free && /*torrentInfo*/
      (ctx[0].free_type || /*torrentInfo*/
      ctx[0].pattMsg) && create_if_block_6(ctx)
    );
    let if_block1 = (
      /*$_CARD_SHOW*/
      ctx[6].sub_title && /*torrentInfo*/
      ctx[0].description && create_if_block_5(ctx)
    );
    let if_block2 = (
      /*$_CARD_SHOW*/
      ctx[6].tags && /*torrentInfo*/
      ctx[0].tagsDOM.length != 0 && create_if_block_4$1(ctx)
    );
    let if_block3 = (
      /*$_CARD_SHOW*/
      ctx[6].size_download_collect && create_if_block_3$1(ctx)
    );
    let if_block4 = (
      /*$_CARD_SHOW*/
      ctx[6].upload_time && create_if_block_2$1(ctx)
    );
    let if_block5 = (
      /*$_CARD_SHOW*/
      ctx[6].statistics && create_if_block_1$1(ctx)
    );
    return {
      c() {
        if (if_block0)
          if_block0.c();
        t0 = space();
        if (if_block1)
          if_block1.c();
        t1 = space();
        if (if_block2)
          if_block2.c();
        t2 = space();
        div = element("div");
        if (if_block3)
          if_block3.c();
        t3 = space();
        if (if_block4)
          if_block4.c();
        t4 = space();
        if (if_block5)
          if_block5.c();
        attr(div, "class", "card-details svelte-1rfbgrc");
      },
      m(target, anchor) {
        if (if_block0)
          if_block0.m(target, anchor);
        insert(target, t0, anchor);
        if (if_block1)
          if_block1.m(target, anchor);
        insert(target, t1, anchor);
        if (if_block2)
          if_block2.m(target, anchor);
        insert(target, t2, anchor);
        insert(target, div, anchor);
        if (if_block3)
          if_block3.m(div, null);
        append(div, t3);
        if (if_block4)
          if_block4.m(div, null);
        append(div, t4);
        if (if_block5)
          if_block5.m(div, null);
      },
      p(ctx2, dirty) {
        if (
          /*$_CARD_SHOW*/
          ctx2[6].free && /*torrentInfo*/
          (ctx2[0].free_type || /*torrentInfo*/
          ctx2[0].pattMsg)
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_6(ctx2);
            if_block0.c();
            if_block0.m(t0.parentNode, t0);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (
          /*$_CARD_SHOW*/
          ctx2[6].sub_title && /*torrentInfo*/
          ctx2[0].description
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block_5(ctx2);
            if_block1.c();
            if_block1.m(t1.parentNode, t1);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if (
          /*$_CARD_SHOW*/
          ctx2[6].tags && /*torrentInfo*/
          ctx2[0].tagsDOM.length != 0
        ) {
          if (if_block2) {
            if_block2.p(ctx2, dirty);
          } else {
            if_block2 = create_if_block_4$1(ctx2);
            if_block2.c();
            if_block2.m(t2.parentNode, t2);
          }
        } else if (if_block2) {
          if_block2.d(1);
          if_block2 = null;
        }
        if (
          /*$_CARD_SHOW*/
          ctx2[6].size_download_collect
        ) {
          if (if_block3) {
            if_block3.p(ctx2, dirty);
          } else {
            if_block3 = create_if_block_3$1(ctx2);
            if_block3.c();
            if_block3.m(div, t3);
          }
        } else if (if_block3) {
          if_block3.d(1);
          if_block3 = null;
        }
        if (
          /*$_CARD_SHOW*/
          ctx2[6].upload_time
        ) {
          if (if_block4) {
            if_block4.p(ctx2, dirty);
          } else {
            if_block4 = create_if_block_2$1(ctx2);
            if_block4.c();
            if_block4.m(div, t4);
          }
        } else if (if_block4) {
          if_block4.d(1);
          if_block4 = null;
        }
        if (
          /*$_CARD_SHOW*/
          ctx2[6].statistics
        ) {
          if (if_block5) {
            if_block5.p(ctx2, dirty);
          } else {
            if_block5 = create_if_block_1$1(ctx2);
            if_block5.c();
            if_block5.m(div, null);
          }
        } else if (if_block5) {
          if_block5.d(1);
          if_block5 = null;
        }
      },
      d(detaching) {
        if (if_block0)
          if_block0.d(detaching);
        if (detaching)
          detach(t0);
        if (if_block1)
          if_block1.d(detaching);
        if (detaching)
          detach(t1);
        if (if_block2)
          if_block2.d(detaching);
        if (detaching)
          detach(t2);
        if (detaching)
          detach(div);
        if (if_block3)
          if_block3.d();
        if (if_block4)
          if_block4.d();
        if (if_block5)
          if_block5.d();
      }
    };
  }
  function create_if_block_6(ctx) {
    let div1;
    let div0;
    let t0;
    let t1;
    let div0_class_value;
    let if_block0 = (
      /*torrentInfo*/
      ctx[0].place_at_the_top.length != 0 && create_if_block_9(ctx)
    );
    let if_block1 = (
      /*torrentInfo*/
      ctx[0].freeTypeImg && create_if_block_8(ctx)
    );
    let if_block2 = (
      /*torrentInfo*/
      ctx[0].free_remaining_time && create_if_block_7(ctx)
    );
    return {
      c() {
        div1 = element("div");
        div0 = element("div");
        if (if_block0)
          if_block0.c();
        t0 = space();
        if (if_block1)
          if_block1.c();
        t1 = space();
        if (if_block2)
          if_block2.c();
        attr(div0, "class", div0_class_value = "top_and_free " + /*torrentInfo*/
        ctx[0].free_type + " svelte-1rfbgrc");
        attr(div1, "class", "card-alter svelte-1rfbgrc");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, div0);
        if (if_block0)
          if_block0.m(div0, null);
        append(div0, t0);
        if (if_block1)
          if_block1.m(div0, null);
        append(div0, t1);
        if (if_block2)
          if_block2.m(div0, null);
      },
      p(ctx2, dirty) {
        if (
          /*torrentInfo*/
          ctx2[0].place_at_the_top.length != 0
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_9(ctx2);
            if_block0.c();
            if_block0.m(div0, t0);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (
          /*torrentInfo*/
          ctx2[0].freeTypeImg
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block_8(ctx2);
            if_block1.c();
            if_block1.m(div0, t1);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if (
          /*torrentInfo*/
          ctx2[0].free_remaining_time
        ) {
          if (if_block2) {
            if_block2.p(ctx2, dirty);
          } else {
            if_block2 = create_if_block_7(ctx2);
            if_block2.c();
            if_block2.m(div0, null);
          }
        } else if (if_block2) {
          if_block2.d(1);
          if_block2 = null;
        }
        if (dirty & /*torrentInfo*/
        1 && div0_class_value !== (div0_class_value = "top_and_free " + /*torrentInfo*/
        ctx2[0].free_type + " svelte-1rfbgrc")) {
          attr(div0, "class", div0_class_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(div1);
        if (if_block0)
          if_block0.d();
        if (if_block1)
          if_block1.d();
        if (if_block2)
          if_block2.d();
      }
    };
  }
  function create_if_block_9(ctx) {
    let html_tag;
    let raw_value = Array.from(
      /*torrentInfo*/
      ctx[0].place_at_the_top
    ).map(func_3) + "&nbsp;";
    let html_anchor;
    return {
      c() {
        html_tag = new HtmlTag(false);
        html_anchor = empty();
        html_tag.a = html_anchor;
      },
      m(target, anchor) {
        html_tag.m(raw_value, target, anchor);
        insert(target, html_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*torrentInfo*/
        1 && raw_value !== (raw_value = Array.from(
          /*torrentInfo*/
          ctx2[0].place_at_the_top
        ).map(func_3) + "&nbsp;"))
          html_tag.p(raw_value);
      },
      d(detaching) {
        if (detaching)
          detach(html_anchor);
        if (detaching)
          html_tag.d();
      }
    };
  }
  function create_if_block_8(ctx) {
    let html_tag;
    let raw_value = (
      /*torrentInfo*/
      ctx[0].freeTypeImg.outerHTML + ""
    );
    let html_anchor;
    return {
      c() {
        html_tag = new HtmlTag(false);
        html_anchor = empty();
        html_tag.a = html_anchor;
      },
      m(target, anchor) {
        html_tag.m(raw_value, target, anchor);
        insert(target, html_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*torrentInfo*/
        1 && raw_value !== (raw_value = /*torrentInfo*/
        ctx2[0].freeTypeImg.outerHTML + ""))
          html_tag.p(raw_value);
      },
      d(detaching) {
        if (detaching)
          detach(html_anchor);
        if (detaching)
          html_tag.d();
      }
    };
  }
  function create_if_block_7(ctx) {
    let t0;
    let b;
    let t1_value = (
      /*torrentInfo*/
      ctx[0].free_remaining_time + ""
    );
    let t1;
    return {
      c() {
        t0 = text(" ");
        b = element("b");
        t1 = text(t1_value);
      },
      m(target, anchor) {
        insert(target, t0, anchor);
        insert(target, b, anchor);
        append(b, t1);
      },
      p(ctx2, dirty) {
        if (dirty & /*torrentInfo*/
        1 && t1_value !== (t1_value = /*torrentInfo*/
        ctx2[0].free_remaining_time + ""))
          set_data(t1, t1_value);
      },
      d(detaching) {
        if (detaching)
          detach(t0);
        if (detaching)
          detach(b);
      }
    };
  }
  function create_if_block_5(ctx) {
    let a;
    let t_value = (
      /*torrentInfo*/
      ctx[0].description + ""
    );
    let t;
    let a_href_value;
    return {
      c() {
        a = element("a");
        t = text(t_value);
        attr(a, "class", "card-description svelte-1rfbgrc");
        attr(a, "href", a_href_value = /*torrentInfo*/
        ctx[0].torrentLink);
      },
      m(target, anchor) {
        insert(target, a, anchor);
        append(a, t);
      },
      p(ctx2, dirty) {
        if (dirty & /*torrentInfo*/
        1 && t_value !== (t_value = /*torrentInfo*/
        ctx2[0].description + ""))
          set_data(t, t_value);
        if (dirty & /*torrentInfo*/
        1 && a_href_value !== (a_href_value = /*torrentInfo*/
        ctx2[0].torrentLink)) {
          attr(a, "href", a_href_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(a);
      }
    };
  }
  function create_if_block_4$1(ctx) {
    let div;
    let raw_value = (
      /*torrentInfo*/
      ctx[0].tagsDOM.map(
        /*func_4*/
        ctx[12]
      ).join("") + ""
    );
    return {
      c() {
        div = element("div");
        attr(div, "class", "cl-tags svelte-1rfbgrc");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        div.innerHTML = raw_value;
      },
      p(ctx2, dirty) {
        if (dirty & /*torrentInfo*/
        1 && raw_value !== (raw_value = /*torrentInfo*/
        ctx2[0].tagsDOM.map(
          /*func_4*/
          ctx2[12]
        ).join("") + ""))
          div.innerHTML = raw_value;
      },
      d(detaching) {
        if (detaching)
          detach(div);
      }
    };
  }
  function create_if_block_3$1(ctx) {
    let div4;
    let div0;
    let html_tag;
    let raw0_value = (
      /*ICON*/
      ctx[2].SIZE + ""
    );
    let t0;
    let t1_value = (
      /*torrentInfo*/
      ctx[0].size + ""
    );
    let t1;
    let t2;
    let div1;
    let html_tag_1;
    let raw1_value = (
      /*ICON*/
      ctx[2].DOWNLOAD + ""
    );
    let t3;
    let b0;
    let a;
    let t4;
    let a_href_value;
    let t5;
    let div3;
    let div2;
    let html_tag_2;
    let raw2_value = (
      /*torrentInfo*/
      (ctx[0].collectState == "Unbookmarked" ? (
        /*ICON*/
        ctx[2].COLLET
      ) : (
        /*ICON*/
        ctx[2].COLLETED
      )) + ""
    );
    let t6;
    let b1;
    let div2_id_value;
    let mounted;
    let dispose;
    return {
      c() {
        div4 = element("div");
        div0 = element("div");
        html_tag = new HtmlTag(false);
        t0 = text(" ");
        t1 = text(t1_value);
        t2 = text("\n\n            \n              \n            ");
        div1 = element("div");
        html_tag_1 = new HtmlTag(false);
        t3 = text(" \n              ");
        b0 = element("b");
        a = element("a");
        t4 = text("下载");
        t5 = text("\n\n            \n              \n            ");
        div3 = element("div");
        div2 = element("div");
        html_tag_2 = new HtmlTag(false);
        t6 = text("\n                 ");
        b1 = element("b");
        b1.textContent = "收藏";
        html_tag.a = t0;
        attr(div0, "class", "cl-center svelte-1rfbgrc");
        html_tag_1.a = t3;
        attr(a, "href", a_href_value = /*torrentInfo*/
        ctx[0].downloadLink);
        attr(div1, "class", "cl-center svelte-1rfbgrc");
        html_tag_2.a = t6;
        attr(div2, "class", "btnCollet cl-center svelte-1rfbgrc");
        attr(div2, "id", div2_id_value = "tI_" + /*torrentInfo*/
        ctx[0].torrentIndex);
        attr(div3, "class", "cl-center svelte-1rfbgrc");
        attr(div4, "class", "card-line svelte-1rfbgrc");
      },
      m(target, anchor) {
        insert(target, div4, anchor);
        append(div4, div0);
        html_tag.m(raw0_value, div0);
        append(div0, t0);
        append(div0, t1);
        append(div4, t2);
        append(div4, div1);
        html_tag_1.m(raw1_value, div1);
        append(div1, t3);
        append(div1, b0);
        append(b0, a);
        append(a, t4);
        append(div4, t5);
        append(div4, div3);
        append(div3, div2);
        html_tag_2.m(raw2_value, div2);
        append(div2, t6);
        append(div2, b1);
        if (!mounted) {
          dispose = listen(div2, "click", function() {
            if (is_function(COLLET_AND_ICON_CHANGE(
              /*torrentInfo*/
              ctx[0].collectLink,
              "tI_" + /*torrentInfo*/
              ctx[0].torrentIndex
            )))
              COLLET_AND_ICON_CHANGE(
                /*torrentInfo*/
                ctx[0].collectLink,
                "tI_" + /*torrentInfo*/
                ctx[0].torrentIndex
              ).apply(this, arguments);
          });
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & /*ICON*/
        4 && raw0_value !== (raw0_value = /*ICON*/
        ctx[2].SIZE + ""))
          html_tag.p(raw0_value);
        if (dirty & /*torrentInfo*/
        1 && t1_value !== (t1_value = /*torrentInfo*/
        ctx[0].size + ""))
          set_data(t1, t1_value);
        if (dirty & /*ICON*/
        4 && raw1_value !== (raw1_value = /*ICON*/
        ctx[2].DOWNLOAD + ""))
          html_tag_1.p(raw1_value);
        if (dirty & /*torrentInfo*/
        1 && a_href_value !== (a_href_value = /*torrentInfo*/
        ctx[0].downloadLink)) {
          attr(a, "href", a_href_value);
        }
        if (dirty & /*torrentInfo, ICON*/
        5 && raw2_value !== (raw2_value = /*torrentInfo*/
        (ctx[0].collectState == "Unbookmarked" ? (
          /*ICON*/
          ctx[2].COLLET
        ) : (
          /*ICON*/
          ctx[2].COLLETED
        )) + ""))
          html_tag_2.p(raw2_value);
        if (dirty & /*torrentInfo*/
        1 && div2_id_value !== (div2_id_value = "tI_" + /*torrentInfo*/
        ctx[0].torrentIndex)) {
          attr(div2, "id", div2_id_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(div4);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_2$1(ctx) {
    let div;
    let b;
    let t1;
    let t2_value = (
      /*torrentInfo*/
      ctx[0].upload_date + ""
    );
    let t2;
    return {
      c() {
        div = element("div");
        b = element("b");
        b.textContent = "上传时间:";
        t1 = space();
        t2 = text(t2_value);
        attr(div, "class", "card-line svelte-1rfbgrc");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, b);
        append(div, t1);
        append(div, t2);
      },
      p(ctx2, dirty) {
        if (dirty & /*torrentInfo*/
        1 && t2_value !== (t2_value = /*torrentInfo*/
        ctx2[0].upload_date + ""))
          set_data(t2, t2_value);
      },
      d(detaching) {
        if (detaching)
          detach(div);
      }
    };
  }
  function create_if_block_1$1(ctx) {
    let div;
    let html_tag;
    let raw0_value = (
      /*ICON*/
      ctx[2].COMMENT + ""
    );
    let t0;
    let b0;
    let t1_value = (
      /*torrentInfo*/
      ctx[0].comments + ""
    );
    let t1;
    let t2;
    let html_tag_1;
    let raw1_value = (
      /*ICON*/
      ctx[2].SEEDERS + ""
    );
    let t3;
    let b1;
    let t4_value = (
      /*torrentInfo*/
      ctx[0].seeders + ""
    );
    let t4;
    let t5;
    let html_tag_2;
    let raw2_value = (
      /*ICON*/
      ctx[2].LEECHERS + ""
    );
    let t6;
    let b2;
    let t7_value = (
      /*torrentInfo*/
      ctx[0].leechers + ""
    );
    let t7;
    let t8;
    let html_tag_3;
    let raw3_value = (
      /*ICON*/
      ctx[2].SNATCHED + ""
    );
    let t9;
    let b3;
    let t10_value = (
      /*torrentInfo*/
      ctx[0].snatched + ""
    );
    let t10;
    return {
      c() {
        div = element("div");
        html_tag = new HtmlTag(false);
        t0 = text(" ");
        b0 = element("b");
        t1 = text(t1_value);
        t2 = text("  \n            ");
        html_tag_1 = new HtmlTag(false);
        t3 = text(" ");
        b1 = element("b");
        t4 = text(t4_value);
        t5 = text("  \n            ");
        html_tag_2 = new HtmlTag(false);
        t6 = text(" ");
        b2 = element("b");
        t7 = text(t7_value);
        t8 = text("  \n            ");
        html_tag_3 = new HtmlTag(false);
        t9 = text(" ");
        b3 = element("b");
        t10 = text(t10_value);
        html_tag.a = t0;
        html_tag_1.a = t3;
        html_tag_2.a = t6;
        html_tag_3.a = t9;
        attr(div, "class", "card-line svelte-1rfbgrc");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        html_tag.m(raw0_value, div);
        append(div, t0);
        append(div, b0);
        append(b0, t1);
        append(div, t2);
        html_tag_1.m(raw1_value, div);
        append(div, t3);
        append(div, b1);
        append(b1, t4);
        append(div, t5);
        html_tag_2.m(raw2_value, div);
        append(div, t6);
        append(div, b2);
        append(b2, t7);
        append(div, t8);
        html_tag_3.m(raw3_value, div);
        append(div, t9);
        append(div, b3);
        append(b3, t10);
      },
      p(ctx2, dirty) {
        if (dirty & /*ICON*/
        4 && raw0_value !== (raw0_value = /*ICON*/
        ctx2[2].COMMENT + ""))
          html_tag.p(raw0_value);
        if (dirty & /*torrentInfo*/
        1 && t1_value !== (t1_value = /*torrentInfo*/
        ctx2[0].comments + ""))
          set_data(t1, t1_value);
        if (dirty & /*ICON*/
        4 && raw1_value !== (raw1_value = /*ICON*/
        ctx2[2].SEEDERS + ""))
          html_tag_1.p(raw1_value);
        if (dirty & /*torrentInfo*/
        1 && t4_value !== (t4_value = /*torrentInfo*/
        ctx2[0].seeders + ""))
          set_data(t4, t4_value);
        if (dirty & /*ICON*/
        4 && raw2_value !== (raw2_value = /*ICON*/
        ctx2[2].LEECHERS + ""))
          html_tag_2.p(raw2_value);
        if (dirty & /*torrentInfo*/
        1 && t7_value !== (t7_value = /*torrentInfo*/
        ctx2[0].leechers + ""))
          set_data(t7, t7_value);
        if (dirty & /*ICON*/
        4 && raw3_value !== (raw3_value = /*ICON*/
        ctx2[2].SNATCHED + ""))
          html_tag_3.p(raw3_value);
        if (dirty & /*torrentInfo*/
        1 && t10_value !== (t10_value = /*torrentInfo*/
        ctx2[0].snatched + ""))
          set_data(t10, t10_value);
      },
      d(detaching) {
        if (detaching)
          detach(div);
      }
    };
  }
  function create_fragment$1(ctx) {
    let div4;
    let div3;
    let div0;
    let img0;
    let img0_src_value;
    let t0;
    let t1_value = (
      /*torrentInfo*/
      ctx[0].category + ""
    );
    let t1;
    let div0_data_href_value;
    let t2;
    let t3;
    let div2;
    let img1;
    let img1_src_value;
    let img1_data_src_value;
    let img1_alt_value;
    let t4;
    let div1;
    let t5_value = (
      /*torrentInfo*/
      ctx[0].torrentIndex + 1 + ""
    );
    let t5;
    let t6;
    let t7;
    let mounted;
    let dispose;
    let if_block0 = (
      /*$_CARD_SHOW*/
      (ctx[6].title || /*_hover*/
      ctx[3]) && create_if_block_16(ctx)
    );
    let if_block1 = (
      /*$_CARD_SHOW*/
      (ctx[6].all || /*_hover*/
      ctx[3]) && create_if_block_10(ctx)
    );
    let if_block2 = !/*$_CARD_SHOW*/
    (ctx[6].all || /*_hover*/
    ctx[3]) && create_if_block$1(ctx);
    return {
      c() {
        div4 = element("div");
        div3 = element("div");
        div0 = element("div");
        img0 = element("img");
        t0 = space();
        t1 = text(t1_value);
        t2 = space();
        if (if_block0)
          if_block0.c();
        t3 = space();
        div2 = element("div");
        img1 = element("img");
        t4 = space();
        div1 = element("div");
        t5 = text(t5_value);
        t6 = space();
        if (if_block1)
          if_block1.c();
        t7 = space();
        if (if_block2)
          if_block2.c();
        attr(img0, "class", "card_category-img svelte-1rfbgrc");
        if (!src_url_equal(img0.src, img0_src_value = /*torrentInfo*/
        ctx[0]._categoryImg))
          attr(img0, "src", img0_src_value);
        attr(img0, "alt", "");
        attr(div0, "class", "card-category svelte-1rfbgrc");
        attr(div0, "data-href", div0_data_href_value = /*torrentInfo*/
        ctx[0].categoryLink);
        set_style(div0, "background-color", CONFIG.CATEGORY[
          /*torrentInfo*/
          ctx[0].categoryNumber
        ] ?? "transparent");
        set_style(div0, "color", CONFIG.CATEGORY[
          /*torrentInfo*/
          ctx[0].categoryNumber
        ] ? getTextColor(CONFIG.CATEGORY[
          /*torrentInfo*/
          ctx[0].categoryNumber
        ]) : "black");
        attr(img1, "class", "card-image--img nexus-lazy-load_Kesa svelte-1rfbgrc");
        if (!src_url_equal(img1.src, img1_src_value = CONFIG.LOADING_PIC))
          attr(img1, "src", img1_src_value);
        attr(img1, "data-src", img1_data_src_value = /*torrentInfo*/
        ctx[0].picLink);
        attr(img1, "alt", img1_alt_value = /*torrentInfo*/
        ctx[0].torrentName);
        attr(div1, "class", "card-index svelte-1rfbgrc");
        attr(div2, "class", "card-image svelte-1rfbgrc");
        attr(div3, "class", "card-holder svelte-1rfbgrc");
        attr(div4, "class", "card svelte-1rfbgrc");
        set_style(
          div4,
          "display",
          /*torrentInfo*/
          ctx[0].categoryNumber == "440" && /*$_SITE_SETTING*/
          ctx[4].mt.hide_gay ? "none" : "block"
        );
        set_style(
          div4,
          "width",
          /*cardWidth*/
          ctx[1] + "px"
        );
        set_style(div4, "z-index", 1e4 - /*torrentInfo*/
        ctx[0].torrentIndex);
        set_style(
          div4,
          "background-color",
          /*$_current_bgColor*/
          ctx[5]
        );
      },
      m(target, anchor) {
        insert(target, div4, anchor);
        append(div4, div3);
        append(div3, div0);
        append(div0, img0);
        append(div0, t0);
        append(div0, t1);
        append(div3, t2);
        if (if_block0)
          if_block0.m(div3, null);
        append(div3, t3);
        append(div3, div2);
        append(div2, img1);
        append(div2, t4);
        append(div2, div1);
        append(div1, t5);
        append(div3, t6);
        if (if_block1)
          if_block1.m(div3, null);
        append(div3, t7);
        if (if_block2)
          if_block2.m(div3, null);
        if (!mounted) {
          dispose = [
            listen(
              img1,
              "load",
              /*sort_masonry*/
              ctx[7]
            ),
            listen(
              img1,
              "click",
              /*showDetailIframe*/
              ctx[8]
            ),
            listen(
              div3,
              "mouseenter",
              /*card_show_detail*/
              ctx[9]
            ),
            listen(
              div3,
              "mouseleave",
              /*card_hide_detail*/
              ctx[10]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*torrentInfo*/
        1 && !src_url_equal(img0.src, img0_src_value = /*torrentInfo*/
        ctx2[0]._categoryImg)) {
          attr(img0, "src", img0_src_value);
        }
        if (dirty & /*torrentInfo*/
        1 && t1_value !== (t1_value = /*torrentInfo*/
        ctx2[0].category + ""))
          set_data(t1, t1_value);
        if (dirty & /*torrentInfo*/
        1 && div0_data_href_value !== (div0_data_href_value = /*torrentInfo*/
        ctx2[0].categoryLink)) {
          attr(div0, "data-href", div0_data_href_value);
        }
        if (dirty & /*torrentInfo*/
        1) {
          set_style(div0, "background-color", CONFIG.CATEGORY[
            /*torrentInfo*/
            ctx2[0].categoryNumber
          ] ?? "transparent");
        }
        if (dirty & /*torrentInfo*/
        1) {
          set_style(div0, "color", CONFIG.CATEGORY[
            /*torrentInfo*/
            ctx2[0].categoryNumber
          ] ? getTextColor(CONFIG.CATEGORY[
            /*torrentInfo*/
            ctx2[0].categoryNumber
          ]) : "black");
        }
        if (
          /*$_CARD_SHOW*/
          ctx2[6].title || /*_hover*/
          ctx2[3]
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_16(ctx2);
            if_block0.c();
            if_block0.m(div3, t3);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (dirty & /*torrentInfo*/
        1 && img1_data_src_value !== (img1_data_src_value = /*torrentInfo*/
        ctx2[0].picLink)) {
          attr(img1, "data-src", img1_data_src_value);
        }
        if (dirty & /*torrentInfo*/
        1 && img1_alt_value !== (img1_alt_value = /*torrentInfo*/
        ctx2[0].torrentName)) {
          attr(img1, "alt", img1_alt_value);
        }
        if (dirty & /*torrentInfo*/
        1 && t5_value !== (t5_value = /*torrentInfo*/
        ctx2[0].torrentIndex + 1 + ""))
          set_data(t5, t5_value);
        if (
          /*$_CARD_SHOW*/
          ctx2[6].all || /*_hover*/
          ctx2[3]
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block_10(ctx2);
            if_block1.c();
            if_block1.m(div3, t7);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if (!/*$_CARD_SHOW*/
        (ctx2[6].all || /*_hover*/
        ctx2[3])) {
          if (if_block2) {
            if_block2.p(ctx2, dirty);
          } else {
            if_block2 = create_if_block$1(ctx2);
            if_block2.c();
            if_block2.m(div3, null);
          }
        } else if (if_block2) {
          if_block2.d(1);
          if_block2 = null;
        }
        if (dirty & /*torrentInfo, $_SITE_SETTING*/
        17) {
          set_style(
            div4,
            "display",
            /*torrentInfo*/
            ctx2[0].categoryNumber == "440" && /*$_SITE_SETTING*/
            ctx2[4].mt.hide_gay ? "none" : "block"
          );
        }
        if (dirty & /*cardWidth*/
        2) {
          set_style(
            div4,
            "width",
            /*cardWidth*/
            ctx2[1] + "px"
          );
        }
        if (dirty & /*torrentInfo*/
        1) {
          set_style(div4, "z-index", 1e4 - /*torrentInfo*/
          ctx2[0].torrentIndex);
        }
        if (dirty & /*$_current_bgColor*/
        32) {
          set_style(
            div4,
            "background-color",
            /*$_current_bgColor*/
            ctx2[5]
          );
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div4);
        if (if_block0)
          if_block0.d();
        if (if_block1)
          if_block1.d();
        if (if_block2)
          if_block2.d();
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function COLLET_AND_ICON_CHANGE(jsCodeLink, card_id) {
    try {
      window.location.href = jsCodeLink;
      const btn = document.querySelector(`div#${card_id}`);
      const img = btn.children[0];
      img.className = img.className == "delbookmark" ? "bookmark" : "delbookmark";
      console.log(`执行脚本${jsCodeLink}成功, 已经收藏或者取消~`);
    } catch (error) {
      console.error(error);
    }
  }
  function getTextColor(background) {
    const color = background.replace("#", "");
    const red = parseInt(color.substr(0, 2), 16);
    const green = parseInt(color.substr(2, 2), 16);
    const blue = parseInt(color.substr(4, 2), 16);
    const brightness = (red * 299 + green * 587 + blue * 114) / 1e3;
    return brightness < 128 ? "white" : "black";
  }
  const func = (e) => e.outerHTML;
  const func_1 = (e) => e.outerHTML;
  const func_3 = (e) => e.outerHTML;
  function instance$2($$self, $$props, $$invalidate) {
    let $_iframe_url;
    let $_iframe_switch;
    let $_SITE_SETTING;
    let $_current_bgColor;
    let $_CARD_SHOW;
    component_subscribe($$self, _iframe_url, ($$value) => $$invalidate(13, $_iframe_url = $$value));
    component_subscribe($$self, _iframe_switch, ($$value) => $$invalidate(14, $_iframe_switch = $$value));
    component_subscribe($$self, _SITE_SETTING, ($$value) => $$invalidate(4, $_SITE_SETTING = $$value));
    component_subscribe($$self, _current_bgColor, ($$value) => $$invalidate(5, $_current_bgColor = $$value));
    component_subscribe($$self, _CARD_SHOW, ($$value) => $$invalidate(6, $_CARD_SHOW = $$value));
    function sort_masonry() {
      sortMasonry();
    }
    function showDetailIframe() {
      set_store_value(_iframe_switch, $_iframe_switch = 1, $_iframe_switch);
      set_store_value(_iframe_url, $_iframe_url = torrentInfo.torrentLink + "#kdescr", $_iframe_url);
    }
    let { torrentInfo } = $$props;
    let { cardWidth } = $$props;
    let { ICON } = $$props;
    let _hover = false;
    function card_show_detail() {
      $$invalidate(3, _hover = true);
    }
    function card_hide_detail() {
      $$invalidate(3, _hover = false);
    }
    const func_2 = (el) => {
      const _tag = document.createElement("div");
      _tag.innerHTML = el.outerHTML;
      return _tag.outerHTML;
    };
    const func_4 = (el) => {
      const _tag = document.createElement("div");
      _tag.innerHTML = el.outerHTML;
      return _tag.outerHTML;
    };
    $$self.$$set = ($$props2) => {
      if ("torrentInfo" in $$props2)
        $$invalidate(0, torrentInfo = $$props2.torrentInfo);
      if ("cardWidth" in $$props2)
        $$invalidate(1, cardWidth = $$props2.cardWidth);
      if ("ICON" in $$props2)
        $$invalidate(2, ICON = $$props2.ICON);
    };
    return [
      torrentInfo,
      cardWidth,
      ICON,
      _hover,
      $_SITE_SETTING,
      $_current_bgColor,
      $_CARD_SHOW,
      sort_masonry,
      showDetailIframe,
      card_show_detail,
      card_hide_detail,
      func_2,
      func_4
    ];
  }
  class Mteam extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$2, create_fragment$1, safe_not_equal, { torrentInfo: 0, cardWidth: 1, ICON: 2 });
    }
  }
  const { window: window_1 } = globals;
  function get_each_context_1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[30] = list[i];
    return child_ctx;
  }
  function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[30] = list[i];
    return child_ctx;
  }
  function create_else_block_1(ctx) {
    let div;
    return {
      c() {
        div = element("div");
        div.textContent = "else";
      },
      m(target, anchor) {
        insert(target, div, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
      }
    };
  }
  function create_if_block_4(ctx) {
    let each_blocks = [];
    let each_1_lookup = /* @__PURE__ */ new Map();
    let each_1_anchor;
    let current;
    let each_value_1 = (
      /*infoList*/
      ctx[2]
    );
    const get_key = (ctx2) => (
      /*info*/
      ctx2[30].torrentIndex
    );
    for (let i = 0; i < each_value_1.length; i += 1) {
      let child_ctx = get_each_context_1(ctx, each_value_1, i);
      let key = get_key(child_ctx);
      each_1_lookup.set(key, each_blocks[i] = create_each_block_1(key, child_ctx));
    }
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(target, anchor);
          }
        }
        insert(target, each_1_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*infoList, CARD, ICON*/
        133) {
          each_value_1 = /*infoList*/
          ctx2[2];
          group_outros();
          each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value_1, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block_1, each_1_anchor, get_each_context_1);
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value_1.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].d(detaching);
        }
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function create_if_block_3(ctx) {
    let each_blocks = [];
    let each_1_lookup = /* @__PURE__ */ new Map();
    let each_1_anchor;
    let current;
    let each_value = (
      /*infoList*/
      ctx[2]
    );
    const get_key = (ctx2) => (
      /*info*/
      ctx2[30].torrentIndex
    );
    for (let i = 0; i < each_value.length; i += 1) {
      let child_ctx = get_each_context(ctx, each_value, i);
      let key = get_key(child_ctx);
      each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
    }
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(target, anchor);
          }
        }
        insert(target, each_1_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*infoList, CARD, ICON*/
        133) {
          each_value = /*infoList*/
          ctx2[2];
          group_outros();
          each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block, each_1_anchor, get_each_context);
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].d(detaching);
        }
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function create_each_block_1(key_1, ctx) {
    let first;
    let mteam;
    let current;
    mteam = new Mteam({
      props: {
        torrentInfo: (
          /*info*/
          ctx[30]
        ),
        cardWidth: (
          /*CARD*/
          ctx[0].CARD_WIDTH
        ),
        ICON: (
          /*ICON*/
          ctx[7]
        )
      }
    });
    return {
      key: key_1,
      first: null,
      c() {
        first = empty();
        create_component(mteam.$$.fragment);
        this.first = first;
      },
      m(target, anchor) {
        insert(target, first, anchor);
        mount_component(mteam, target, anchor);
        current = true;
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        const mteam_changes = {};
        if (dirty[0] & /*infoList*/
        4)
          mteam_changes.torrentInfo = /*info*/
          ctx[30];
        if (dirty[0] & /*CARD*/
        1)
          mteam_changes.cardWidth = /*CARD*/
          ctx[0].CARD_WIDTH;
        mteam.$set(mteam_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(mteam.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(mteam.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(first);
        destroy_component(mteam, detaching);
      }
    };
  }
  function create_each_block(key_1, ctx) {
    let first;
    let kamept;
    let current;
    kamept = new Kamept({
      props: {
        torrentInfo: (
          /*info*/
          ctx[30]
        ),
        cardWidth: (
          /*CARD*/
          ctx[0].CARD_WIDTH
        ),
        ICON: (
          /*ICON*/
          ctx[7]
        )
      }
    });
    return {
      key: key_1,
      first: null,
      c() {
        first = empty();
        create_component(kamept.$$.fragment);
        this.first = first;
      },
      m(target, anchor) {
        insert(target, first, anchor);
        mount_component(kamept, target, anchor);
        current = true;
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        const kamept_changes = {};
        if (dirty[0] & /*infoList*/
        4)
          kamept_changes.torrentInfo = /*info*/
          ctx[30];
        if (dirty[0] & /*CARD*/
        1)
          kamept_changes.cardWidth = /*CARD*/
          ctx[0].CARD_WIDTH;
        kamept.$set(kamept_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(kamept.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(kamept.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(first);
        destroy_component(kamept, detaching);
      }
    };
  }
  function create_else_block(ctx) {
    let t_value = (
      /*LOAD_TEXT*/
      ctx[10].normal + ""
    );
    let t;
    return {
      c() {
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block_2(ctx) {
    let t_value = (
      /*LOAD_TEXT*/
      ctx[10].suspend + ""
    );
    let t;
    return {
      c() {
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block_1(ctx) {
    let t_value = (
      /*LOAD_TEXT*/
      ctx[10].disable + ""
    );
    let t;
    return {
      c() {
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block(ctx) {
    let div;
    let iframe;
    let iframe_src_value;
    let div_transition;
    let current;
    let mounted;
    let dispose;
    return {
      c() {
        div = element("div");
        iframe = element("iframe");
        if (!src_url_equal(iframe.src, iframe_src_value = /*$_iframe_url*/
        ctx[6]))
          attr(iframe, "src", iframe_src_value);
        attr(iframe, "frameborder", "0");
        attr(iframe, "title", "wow");
        set_style(iframe, "width", (SITE[
          /*$_current_domain*/
          ctx[4]
        ] ? SITE[
          /*$_current_domain*/
          ctx[4]
        ].Iframe_Width : 1e3) + "px");
        attr(iframe, "class", "svelte-tr7wwl");
        attr(div, "id", "_iframe");
        attr(div, "class", "svelte-tr7wwl");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, iframe);
        current = true;
        if (!mounted) {
          dispose = listen(
            div,
            "click",
            /*toggleIframe*/
            ctx[8]
          );
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (!current || dirty[0] & /*$_iframe_url*/
        64 && !src_url_equal(iframe.src, iframe_src_value = /*$_iframe_url*/
        ctx2[6])) {
          attr(iframe, "src", iframe_src_value);
        }
        if (!current || dirty[0] & /*$_current_domain*/
        16) {
          set_style(iframe, "width", (SITE[
            /*$_current_domain*/
            ctx2[4]
          ] ? SITE[
            /*$_current_domain*/
            ctx2[4]
          ].Iframe_Width : 1e3) + "px");
        }
      },
      i(local) {
        if (current)
          return;
        add_render_callback(() => {
          if (!current)
            return;
          if (!div_transition)
            div_transition = create_bidirectional_transition(div, fade, { duration: 300 }, true);
          div_transition.run(1);
        });
        current = true;
      },
      o(local) {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, fade, { duration: 300 }, false);
        div_transition.run(0);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        if (detaching && div_transition)
          div_transition.end();
        mounted = false;
        dispose();
      }
    };
  }
  function create_fragment(ctx) {
    let current_block_type_index;
    let if_block0;
    let t0;
    let div;
    let button;
    let button_disabled_value;
    let t1;
    let if_block2_anchor;
    let current;
    let mounted;
    let dispose;
    const if_block_creators = [create_if_block_3, create_if_block_4, create_else_block_1];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (
        /*$_current_domain*/
        ctx2[4] == "kamept.com"
      )
        return 0;
      if (
        /*$_current_domain*/
        ctx2[4] == "kp.m-team.cc"
      )
        return 1;
      return 2;
    }
    current_block_type_index = select_block_type(ctx);
    if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    function select_block_type_1(ctx2, dirty) {
      if (
        /*$_turnPage*/
        ctx2[3]
      )
        return create_if_block_1;
      if (
        /*isButtonDisabled*/
        ctx2[1]
      )
        return create_if_block_2;
      return create_else_block;
    }
    let current_block_type = select_block_type_1(ctx);
    let if_block1 = current_block_type(ctx);
    let if_block2 = (
      /*$_iframe_switch*/
      ctx[5] && create_if_block(ctx)
    );
    return {
      c() {
        if_block0.c();
        t0 = space();
        div = element("div");
        button = element("button");
        if_block1.c();
        t1 = space();
        if (if_block2)
          if_block2.c();
        if_block2_anchor = empty();
        attr(button, "id", "turnPage");
        button.disabled = button_disabled_value = /*$_turnPage*/
        ctx[3] || /*isButtonDisabled*/
        ctx[1];
        attr(button, "class", "svelte-tr7wwl");
      },
      m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, t0, anchor);
        insert(target, div, anchor);
        append(div, button);
        if_block1.m(button, null);
        insert(target, t1, anchor);
        if (if_block2)
          if_block2.m(target, anchor);
        insert(target, if_block2_anchor, anchor);
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              window_1,
              "keydown",
              /*key_closePanels*/
              ctx[9],
              true
            ),
            listen(
              button,
              "click",
              /*turnPage*/
              ctx[11]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block0 = if_blocks[current_block_type_index];
          if (!if_block0) {
            if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block0.c();
          } else {
            if_block0.p(ctx2, dirty);
          }
          transition_in(if_block0, 1);
          if_block0.m(t0.parentNode, t0);
        }
        if (current_block_type === (current_block_type = select_block_type_1(ctx2)) && if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1.d(1);
          if_block1 = current_block_type(ctx2);
          if (if_block1) {
            if_block1.c();
            if_block1.m(button, null);
          }
        }
        if (!current || dirty[0] & /*$_turnPage, isButtonDisabled*/
        10 && button_disabled_value !== (button_disabled_value = /*$_turnPage*/
        ctx2[3] || /*isButtonDisabled*/
        ctx2[1])) {
          button.disabled = button_disabled_value;
        }
        if (
          /*$_iframe_switch*/
          ctx2[5]
        ) {
          if (if_block2) {
            if_block2.p(ctx2, dirty);
            if (dirty[0] & /*$_iframe_switch*/
            32) {
              transition_in(if_block2, 1);
            }
          } else {
            if_block2 = create_if_block(ctx2);
            if_block2.c();
            transition_in(if_block2, 1);
            if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
          }
        } else if (if_block2) {
          group_outros();
          transition_out(if_block2, 1, 1, () => {
            if_block2 = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block0);
        transition_in(if_block2);
        current = true;
      },
      o(local) {
        transition_out(if_block0);
        transition_out(if_block2);
        current = false;
      },
      d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(div);
        if_block1.d();
        if (detaching)
          detach(t1);
        if (if_block2)
          if_block2.d(detaching);
        if (detaching)
          detach(if_block2_anchor);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance$1($$self, $$props, $$invalidate) {
    var _a;
    let $_Global_Masonry;
    let $_card_width;
    let $_turnPage;
    let $_current_domain;
    let $_current_bgColor;
    let $_show_configPanel;
    let $_iframe_switch;
    let $_iframe_url;
    component_subscribe($$self, _Global_Masonry, ($$value) => $$invalidate(19, $_Global_Masonry = $$value));
    component_subscribe($$self, _card_width, ($$value) => $$invalidate(15, $_card_width = $$value));
    component_subscribe($$self, _turnPage, ($$value) => $$invalidate(3, $_turnPage = $$value));
    component_subscribe($$self, _current_domain, ($$value) => $$invalidate(4, $_current_domain = $$value));
    component_subscribe($$self, _current_bgColor, ($$value) => $$invalidate(20, $_current_bgColor = $$value));
    component_subscribe($$self, _show_configPanel, ($$value) => $$invalidate(21, $_show_configPanel = $$value));
    component_subscribe($$self, _iframe_switch, ($$value) => $$invalidate(5, $_iframe_switch = $$value));
    component_subscribe($$self, _iframe_url, ($$value) => $$invalidate(6, $_iframe_url = $$value));
    let { originTable } = $$props;
    let { waterfallNode } = $$props;
    const CARD = {
      /** 瀑布流卡片宽度 */
      CARD_WIDTH: $_card_width,
      /** 瀑布流卡片边框宽度 -> 这个2是真值, 但是边框好像是会随着分辨率和缩放变化, 给高有利大分辨率, 给低有利于小分辨率 */
      CARD_BORDER: 3,
      /** 瀑布流卡片索引 */
      CARD_INDEX: 0,
      /** 图片悬浮预览方式
      * 0: 一律放大到全视窗[默认]
      * 1: 最小为原图
      */
      PIC_HOVER_STYLE: 0
    };
    const PAGE = {
      /** 翻页: 底部检测时间间隔 */
      GAP: 3e3,
      /** 翻页: 底部检测视点与底部距离 */
      DISTANCE: 300,
      /** 翻页: 是否为初始跳转页面 */
      IS_ORIGIN: true,
      /** 翻页: 当前页数 */
      PAGE_CURRENT: 0,
      /** 翻页: 下一页数 */
      PAGE_NEXT: 0,
      /** 翻页: 下一页的链接 */
      NEXT_URL: "",
      /** 翻页: 下一页的加载方式: Button | Slip */
      SWITCH_MODE: "Button"
    };
    const ICON = {
      /** 大小图标 */
      SIZE: '<img class="size" src="pic/trans.gif" style=" transform: translateY(-0.4px);" alt="size" title="大小">',
      /** 评论图标 */
      COMMENT: '<img class="comments" src="pic/trans.gif" alt="comments" title="评论数">',
      /** 上传人数图标 */
      SEEDERS: '<img class="seeders" src="pic/trans.gif" alt="seeders" title="种子数">',
      /** 下载人数图标 */
      LEECHERS: '<img class="leechers" src="pic/trans.gif" alt="leechers" title="下载数">',
      /** 已完成人数图标 */
      SNATCHED: '<img class="snatched" src="pic/trans.gif" alt="snatched" title="完成数">',
      /** 下载图标 */
      DOWNLOAD: '<img class="download" src="pic/trans.gif" style=" transform: translateY(1px);" alt="download" title="下载本种">',
      /** 未收藏图标 */
      COLLET: '<img class="delbookmark" src="pic/trans.gif" alt="Unbookmarked" title="收藏">',
      /** 已收藏图标 */
      COLLETED: '<img class="bookmark" src="pic/trans.gif" alt="Bookmarked">'
    };
    function GET_CARD_GUTTER(containerDom, card_width) {
      const _width = containerDom.clientWidth;
      const card_real_width = card_width + CARD.CARD_BORDER;
      const columns = Math.floor(_width / card_real_width);
      const gutter = (_width - columns * card_real_width) / (columns - 1);
      console.log(`列数:${columns} 间隔:${gutter}`);
      console.log(`容器宽:${_width} 列宽:${masonry2 ? masonry2.columnWidth : "对象"}`);
      return Math.floor(gutter);
    }
    function CHANGE_CARD_LAYOUT() {
      $$invalidate(14, masonry2.options.gutter = GET_CARD_GUTTER(waterfallNode, $_card_width), masonry2);
      $$invalidate(14, masonry2.options.columnWidth = $_card_width, masonry2);
      sortMasonry("fast");
      sortMasonry("fast");
    }
    function toggleIframe() {
      set_store_value(_iframe_switch, $_iframe_switch = 0, $_iframe_switch);
    }
    function key_closePanels(event) {
      if (event.key === "Escape") {
        console.log(event);
        set_store_value(_iframe_switch, $_iframe_switch = 0, $_iframe_switch);
        set_store_value(_show_configPanel, $_show_configPanel = false, $_show_configPanel);
      }
    }
    let isButtonDisabled = false;
    let onMountSignal = false;
    const LOAD_TEXT = {
      normal: "点击加载下一页",
      suspend: `下一页加载CD: ${PAGE.GAP} ms`,
      disable: "不可用"
    };
    function turnPage(event) {
      event.preventDefault();
      if (!$_turnPage)
        debounceLoad();
      if (!isButtonDisabled) {
        $$invalidate(1, isButtonDisabled = true);
        setTimeout(
          () => {
            $$invalidate(1, isButtonDisabled = false);
          },
          PAGE.GAP
        );
      }
    }
    set_store_value(_current_domain, $_current_domain = GET_CURRENT_PT_DOMAIN(), $_current_domain);
    const mainOuterDOM = document.querySelector("table.mainouter");
    const themeColor = window.getComputedStyle(mainOuterDOM)["background-color"];
    set_store_value(_current_bgColor, $_current_bgColor = themeColor, $_current_bgColor);
    console.log("背景颜色:", themeColor);
    const config = SITE[$_current_domain];
    let infoList = [];
    infoList = [...infoList, ...config.TORRENT_LIST_TO_JSON(originTable)];
    console.log(infoList);
    (_a = SITE[$_current_domain]) == null ? void 0 : _a.special();
    let masonry2;
    let debounceLoad;
    function scan_and_launch() {
      const scrollHeight = document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop + clientHeight >= scrollHeight - PAGE.DISTANCE) {
        if ($_turnPage)
          debounceLoad();
        else {
          console.log("加载模式: 按钮");
        }
        sortMasonry();
      }
    }
    debounceLoad = debounce(loadNextPage, PAGE.GAP);
    function loadNextPage() {
      console.log("到页面底部啦!!! Scrolled to bottom!");
      const urlSearchParams = new URLSearchParams(window.location.search);
      PAGE.PAGE_CURRENT = PAGE.IS_ORIGIN ? Number(urlSearchParams.get("page")) : PAGE.PAGE_CURRENT;
      if (!PAGE.PAGE_CURRENT) {
        console.log(`网页链接没有page参数, 无法跳转下一页, 生成PAGE.PAGE_CURRENT为0`);
        PAGE.PAGE_CURRENT = 0;
      } else {
        console.log("当前页数: " + PAGE.PAGE_CURRENT);
      }
      PAGE.PAGE_NEXT = parseInt(PAGE.PAGE_CURRENT) + 1;
      urlSearchParams.set("page", PAGE.PAGE_NEXT);
      PAGE.NEXT_URL = window.location.origin + window.location.pathname + "?" + urlSearchParams.toString();
      console.log("New URL:", PAGE.NEXT_URL);
      fetch(PAGE.NEXT_URL).then((response) => response.text()).then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const table = doc.querySelector(GET_TORRENT_LIST_SELECTOR());
        $$invalidate(2, infoList = [...infoList, ...config.TORRENT_LIST_TO_JSON(table)]);
        PAGE.IS_ORIGIN = false;
        PAGE.PAGE_CURRENT = PAGE.PAGE_NEXT;
        onMountSignal = true;
        setTimeout(
          () => {
            onMountSignal = false;
          },
          1e3
        );
      }).catch((error) => {
        console.warn("获取不到下页信息, 可能到头了");
        console.warn(error);
      });
    }
    onMount(() => {
      $$invalidate(14, masonry2 = new Masonry(
        waterfallNode,
        {
          itemSelector: ".card",
          columnWidth: $_card_width,
          gutter: GET_CARD_GUTTER(waterfallNode, $_card_width)
        }
      ));
      window.masonry = masonry2;
      set_store_value(_Global_Masonry, $_Global_Masonry = masonry2, $_Global_Masonry);
      masonry2.layout("fast");
      masonry2.layout("fast");
      waterfallNode.addEventListener("click", (event) => {
        if (event.target === event.currentTarget) {
          if (masonry2)
            masonry2.layout();
          console.log("Masonry 已整理~");
        }
      });
      window.addEventListener("scroll", function() {
        scan_and_launch();
      });
      NEXUS_TOOLS();
      window.NEXUS_TOOLS = NEXUS_TOOLS;
    });
    afterUpdate(() => {
      console.log("afterUpdate-------------------->");
      if (masonry2 && onMountSignal) {
        console.log("reload Items-------------------->");
        masonry2.reloadItems();
        masonry2.layout();
        setTimeout(NEXUS_TOOLS, 600);
      }
    });
    $$self.$$set = ($$props2) => {
      if ("originTable" in $$props2)
        $$invalidate(12, originTable = $$props2.originTable);
      if ("waterfallNode" in $$props2)
        $$invalidate(13, waterfallNode = $$props2.waterfallNode);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty[0] & /*masonry, $_card_width, CARD*/
      49153) {
        if (masonry2) {
          $$invalidate(0, CARD.CARD_WIDTH = $_card_width, CARD);
          console.log(CARD.CARD_WIDTH);
          CHANGE_CARD_LAYOUT();
        }
      }
    };
    return [
      CARD,
      isButtonDisabled,
      infoList,
      $_turnPage,
      $_current_domain,
      $_iframe_switch,
      $_iframe_url,
      ICON,
      toggleIframe,
      key_closePanels,
      LOAD_TEXT,
      turnPage,
      originTable,
      waterfallNode,
      masonry2,
      $_card_width
    ];
  }
  class Index extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$1, create_fragment, safe_not_equal, { originTable: 12, waterfallNode: 13 }, null, [-1, -1]);
    }
  }
  function instance($$self) {
    console.log(`[${( new Date()).toLocaleTimeString()}]<--------------------------HMR-------------------------->`);
    const _ORIGIN_TL_Node2 = document.querySelector(GET_TORRENT_LIST_SELECTOR());
    _ORIGIN_TL_Node2.style.display = "none";
    while (!Masonry) {
      console.log("等待初始化......");
    }
    const parentNode = _ORIGIN_TL_Node2.parentNode;
    const waterfallNode = document.createElement("div");
    waterfallNode.classList.add("waterfall");
    parentNode.insertBefore(waterfallNode, _ORIGIN_TL_Node2.nextSibling);
    onMount(() => {
      new Sidepanel({
        target: document.body,
        props: {
          // 传递给组件的属性
          originTable: _ORIGIN_TL_Node2
        }
      });
      new Index({
        target: waterfallNode,
        props: {
          // 传递给组件的属性
          originTable: _ORIGIN_TL_Node2,
          waterfallNode
        }
      });
    });
    return [];
  }
  class Main extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance, null, safe_not_equal, {});
    }
  }
  console.log("________PT-TorrentList-Masonry________");
  const list_selector = GET_TORRENT_LIST_SELECTOR();
  const _ORIGIN_TL_Node = document.querySelector(list_selector);
  if (list_selector && !!_ORIGIN_TL_Node) {
    new Main({
      target: (() => {
        const app2 = document.createElement("div");
        document.body.append(app2);
        return app2;
      })()
    });
  } else {
    console.log("未识别到种子列表捏~");
  }

})();
