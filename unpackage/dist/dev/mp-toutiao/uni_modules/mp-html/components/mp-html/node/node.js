"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const block0 = {};
const node = () => Promise.resolve().then(() => RTovdW5pYXBwLWNvZGUvd2FsbHBhcGVyLXVuaWFwcC91bmlfbW9kdWxlcy9tcC1odG1sL2NvbXBvbmVudHMvbXAtaHRtbC9ub2RlL25vZGUudnVl);
const _sfc_main = {
  name: "node",
  options: {
    addGlobalClass: false
  },
  data() {
    return {
      ctrl: {}
    };
  },
  props: {
    name: String,
    attrs: {
      type: Object,
      default() {
        return {};
      }
    },
    childs: Array,
    opts: Array
  },
  components: {
    node
  },
  mounted() {
    this.$nextTick(() => {
      for (this.root = this.$parent; this.root.$options.name !== "mp-html"; this.root = this.root.$parent)
        ;
    });
  },
  beforeDestroy() {
  },
  methods: {
    /**
     * @description 播放视频事件
     * @param {Event} e
     */
    play(e) {
      const i = e.currentTarget.dataset.i;
      const node2 = this.childs[i];
      this.root.$emit("play", {
        source: node2.name,
        attrs: {
          ...node2.attrs,
          src: node2.src[this.ctrl[i] || 0]
        }
      });
      if (this.root.pauseVideo) {
        let flag = false;
        const id = e.target.id;
        for (let i2 = this.root._videos.length; i2--; ) {
          if (this.root._videos[i2].id === id) {
            flag = true;
          } else {
            this.root._videos[i2].pause();
          }
        }
        if (!flag) {
          const ctx = common_vendor.index.createVideoContext(
            id,
            this
          );
          ctx.id = id;
          if (this.root.playbackRate) {
            ctx.playbackRate(this.root.playbackRate);
          }
          this.root._videos.push(ctx);
        }
      }
    },
    /**
     * @description 图片点击事件
     * @param {Event} e
     */
    imgTap(e) {
      const node2 = this.childs[e.currentTarget.dataset.i];
      if (node2.a) {
        this.linkTap(node2.a);
        return;
      }
      if (node2.attrs.ignore)
        return;
      this.root.$emit("imgtap", node2.attrs);
      if (this.root.previewImg) {
        common_vendor.index.previewImage({
          current: parseInt(node2.attrs.i),
          urls: this.root.imgList
        });
      }
    },
    /**
     * @description 图片长按
     */
    imgLongTap(e) {
    },
    /**
     * @description 图片加载完成事件
     * @param {Event} e
     */
    imgLoad(e) {
      const i = e.currentTarget.dataset.i;
      if (!this.childs[i].w) {
        this.$set(this.ctrl, i, e.detail.width);
      } else if (this.opts[1] && !this.ctrl[i] || this.ctrl[i] === -1) {
        this.$set(this.ctrl, i, 1);
      }
      this.checkReady();
    },
    /**
     * @description 检查是否所有图片加载完毕
     */
    checkReady() {
      if (this.root && !this.root.lazyLoad) {
        this.root._unloadimgs -= 1;
        if (!this.root._unloadimgs) {
          setTimeout(() => {
            this.root.getRect().then((rect) => {
              this.root.$emit("ready", rect);
            }).catch(() => {
              this.root.$emit("ready", {});
            });
          }, 350);
        }
      }
    },
    /**
     * @description 链接点击事件
     * @param {Event} e
     */
    linkTap(e) {
      const node2 = e.currentTarget ? this.childs[e.currentTarget.dataset.i] : {};
      const attrs = node2.attrs || e;
      const href = attrs.href;
      this.root.$emit("linktap", Object.assign({
        innerText: this.root.getText(node2.children || [])
        // 链接内的文本内容
      }, attrs));
      if (href) {
        if (href[0] === "#") {
          this.root.navigateTo(href.substring(1)).catch(() => {
          });
        } else if (href.split("?")[0].includes("://")) {
          if (this.root.copyLink) {
            common_vendor.index.setClipboardData({
              data: href,
              success: () => common_vendor.index.showToast({
                title: "链接已复制"
              })
            });
          }
        } else {
          common_vendor.index.navigateTo({
            url: href,
            fail() {
              common_vendor.index.switchTab({
                url: href,
                fail() {
                }
              });
            }
          });
        }
      }
    },
    /**
     * @description 错误事件
     * @param {Event} e
     */
    mediaError(e) {
      const i = e.currentTarget.dataset.i;
      const node2 = this.childs[i];
      if (node2.name === "video" || node2.name === "audio") {
        let index = (this.ctrl[i] || 0) + 1;
        if (index > node2.src.length) {
          index = 0;
        }
        if (index < node2.src.length) {
          this.$set(this.ctrl, i, index);
          return;
        }
      } else if (node2.name === "img") {
        if (this.opts[2]) {
          this.$set(this.ctrl, i, -1);
        }
        this.checkReady();
      }
      if (this.root) {
        this.root.$emit("error", {
          source: node2.name,
          attrs: node2.attrs,
          errMsg: e.detail.errMsg
        });
      }
    }
  }
};
if (!Array) {
  const _component_node = common_vendor.resolveComponent("node");
  _component_node();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.childs, (n, i, i0) => {
      return common_vendor.e({
        a: n.name === "img" && !n.t && ($props.opts[1] && !$data.ctrl[i] || $data.ctrl[i] < 0)
      }, n.name === "img" && !n.t && ($props.opts[1] && !$data.ctrl[i] || $data.ctrl[i] < 0) ? {
        b: common_vendor.s(n.attrs.style),
        c: $data.ctrl[i] < 0 ? $props.opts[2] : $props.opts[1]
      } : {}, {
        d: n.name === "img" && n.t
      }, n.name === "img" && n.t ? {
        e: common_vendor.s("display:" + n.t),
        f: [{
          attrs: {
            style: n.attrs.style || "",
            src: n.attrs.src
          },
          name: "img"
        }],
        g: i,
        h: common_vendor.o((...args) => $options.imgTap && $options.imgTap(...args))
      } : n.name === "img" ? {
        j: n.attrs.id,
        k: common_vendor.n("_img " + n.attrs.class),
        l: common_vendor.s(($data.ctrl[i] === -1 ? "display:none;" : "") + "width:" + ($data.ctrl[i] || 1) + "px;height:1px;" + n.attrs.style),
        m: n.attrs.src,
        n: !n.h ? "widthFix" : !n.w ? "heightFix" : n.m || "scaleToFill",
        o: $props.opts[0],
        p: n.webp,
        q: $props.opts[3] && !n.attrs.ignore,
        r: !$props.opts[3] || n.attrs.ignore,
        s: i,
        t: common_vendor.o((...args) => $options.imgLoad && $options.imgLoad(...args)),
        v: common_vendor.o((...args) => $options.mediaError && $options.mediaError(...args)),
        w: common_vendor.o((...args) => $options.imgTap && $options.imgTap(...args)),
        x: common_vendor.o((...args) => $options.imgLongTap && $options.imgLongTap(...args))
      } : n.name === "br" ? {} : n.name === "a" ? {
        A: "4612584e-0-" + i0,
        B: common_vendor.p({
          name: "span",
          childs: n.children,
          opts: $props.opts
        }),
        C: n.attrs.id,
        D: common_vendor.n((n.attrs.href ? "_a " : "") + n.attrs.class),
        E: common_vendor.s("display:inline;" + n.attrs.style),
        F: i,
        G: common_vendor.o((...args) => $options.linkTap && $options.linkTap(...args))
      } : n.name === "video" ? {
        I: n.attrs.id,
        J: common_vendor.n(n.attrs.class),
        K: common_vendor.s(n.attrs.style),
        L: n.attrs.autoplay,
        M: n.attrs.controls,
        N: n.attrs.loop,
        O: n.attrs.muted,
        P: n.attrs["object-fit"],
        Q: n.attrs.poster,
        R: n.src[$data.ctrl[i] || 0],
        S: i,
        T: common_vendor.o((...args) => $options.play && $options.play(...args)),
        U: common_vendor.o((...args) => $options.mediaError && $options.mediaError(...args))
      } : n.name === "table" && n.c || n.name === "li" ? common_vendor.e({
        W: n.name === "li"
      }, n.name === "li" ? {
        X: "4612584e-1-" + i0,
        Y: common_vendor.p({
          childs: n.children,
          opts: $props.opts
        })
      } : {
        Z: common_vendor.f(n.children, (tbody, x, i1) => {
          return common_vendor.e({
            a: tbody.name === "td" || tbody.name === "th"
          }, tbody.name === "td" || tbody.name === "th" ? {
            b: "4612584e-2-" + i0 + "-" + i1,
            c: common_vendor.p({
              childs: tbody.children,
              opts: $props.opts
            })
          } : {
            d: common_vendor.f(tbody.children, (tr, y, i2) => {
              return common_vendor.e({
                a: tr.name === "td" || tr.name === "th"
              }, tr.name === "td" || tr.name === "th" ? {
                b: "4612584e-3-" + i0 + "-" + i1 + "-" + i2,
                c: common_vendor.p({
                  childs: tr.children,
                  opts: $props.opts
                }),
                d: common_vendor.n("_" + tr.name + " " + tr.attrs.class),
                e: common_vendor.s(tr.attrs.style)
              } : {
                f: common_vendor.f(tr.children, (td, z, i3) => {
                  return {
                    a: "4612584e-4-" + i0 + "-" + i1 + "-" + i2 + "-" + i3,
                    b: common_vendor.p({
                      childs: td.children,
                      opts: $props.opts
                    }),
                    c: z,
                    d: common_vendor.n("_" + td.name + " " + td.attrs.class),
                    e: common_vendor.s(td.attrs.style)
                  };
                }),
                g: common_vendor.n("_" + tr.name + " " + tr.attrs.class),
                h: common_vendor.s(tr.attrs.style)
              }, {
                i: y
              });
            })
          }, {
            e: x,
            f: common_vendor.n("_" + tbody.name + " " + tbody.attrs.class),
            g: common_vendor.s(tbody.attrs.style)
          });
        })
      }, {
        aa: n.attrs.id,
        ab: common_vendor.n("_" + n.name + " " + n.attrs.class),
        ac: common_vendor.s(n.attrs.style)
      }) : !n.c ? {
        ae: n.attrs.id,
        af: common_vendor.s("display:inline;" + n.f),
        ag: $props.opts[4],
        ah: $props.opts[4],
        ai: [n]
      } : n.c === 2 ? {
        ak: common_vendor.f(n.children, (n2, j, i1) => {
          return {
            a: j,
            b: common_vendor.s(n2.f),
            c: "4612584e-5-" + i0 + "-" + i1,
            d: common_vendor.p({
              name: n2.name,
              attrs: n2.attrs,
              childs: n2.children,
              opts: $props.opts
            })
          };
        }),
        al: n.attrs.id,
        am: common_vendor.n("_block _" + n.name + " " + n.attrs.class),
        an: common_vendor.s(n.f + ";" + n.attrs.style)
      } : {
        ao: common_vendor.s(n.f),
        ap: "4612584e-6-" + i0,
        aq: common_vendor.p({
          name: n.name,
          attrs: n.attrs,
          childs: n.children,
          opts: $props.opts
        })
      }, {
        i: n.name === "img",
        y: n.name === "br",
        z: n.name === "a",
        H: n.name === "video",
        V: n.name === "table" && n.c || n.name === "li",
        ad: !n.c,
        aj: n.c === 2,
        ar: i
      });
    }),
    b: $props.attrs.id,
    c: common_vendor.n("_block _" + $props.name + " " + $props.attrs.class),
    d: common_vendor.s($props.attrs.style)
  };
}
if (typeof block0 === "function")
  block0(_sfc_main);
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
tt.createComponent(Component);
const RTovdW5pYXBwLWNvZGUvd2FsbHBhcGVyLXVuaWFwcC91bmlfbW9kdWxlcy9tcC1odG1sL2NvbXBvbmVudHMvbXAtaHRtbC9ub2RlL25vZGUudnVl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
//# sourceMappingURL=../../../../../../.sourcemap/mp-toutiao/uni_modules/mp-html/components/mp-html/node/node.js.map
