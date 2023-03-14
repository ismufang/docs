## VueDevtools 是如何识别 vue 文件的？

vue devtools 是很好的 vue 开发工具，但是 devtools 是怎样检测 当前页面是 vue 构建的呢

1. vue devtools 会向全局暴露`window.__VUE_DEVTOOLS_GLOBAL_HOOK__`钩子提供 Vue 触发

> packages/app-backend-core/src/hook.ts

```js
/**
 * Install the hook on window, which is an event emitter.
 * Note because Chrome content scripts cannot directly modify the window object,
 * we are evaling this function by inserting a script tag. That's why we have
 * to inline the whole event emitter implementation here.
 *
 * @param {Window|global} target
 */
export function installHook (target, isIframe = false) {
  ...
  let hook
  if (isIframe) {...} else {
    hook = {
      Vue: null,
      enabled: undefined,
      _buffer: [],
      store: null,
      initialState: null,
      storeModules: null,
      flushStoreModules: null,
      apps: [],

      _replayBuffer (event) {...},
      on (event, fn) {...},
      once (event, fn) {...},
      off (event, fn) {...},
      emit (event, ...args) {...}
		}
  }

   // 将 hook 赋给 __VUE_DEVTOOLS_GLOBAL_HOOK__ 挂在到 window 上
   Object.defineProperty(target, '__VUE_DEVTOOLS_GLOBAL_HOOK__', {
      get () {
        return hook
      },
    })
}

```

2. vue 文件通过 `Vue.config.devtools = true` 来判断是否允许 vue-devtools 检测代码

通知 devtools `devtools.emit('init', Vue);`

> vue.js

```js
// line 557
// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
...

// line 9091
// devtools global hook
  /* istanbul ignore next */
  if (inBrowser) {
    setTimeout(function () {
      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue);
        } else {
          console[console.info ? 'info' : 'log'](
            'Download the Vue Devtools extension for a better development experience:\n' +
            'https://github.com/vuejs/vue-devtools'
          );
        }
      }
      if (config.productionTip !== false &&
        typeof console !== 'undefined'
      ) {
        console[console.info ? 'info' : 'log'](
          "You are running Vue in development mode.\n" +
          "Make sure to turn on production mode when deploying for production.\n" +
          "See more tips at https://vuejs.org/guide/deployment.html"
        );
      }
    }, 0);
  }
```

## 如何在生产环境使用 devtools 调试

**1. 获取 Vue 实例**

通常情况下 vue 的源码都被打包到 `vendor.xxx.js` 文件中，也可能不是，可以去 chrome 开发者工具 `Sources` 面板中去找，这里以掘金为例。

- 在 chrome 开发者工具 `Sources` 面板，搜索 `prototype.$nextTick`；
- 在前一行代码上打断点，刷新页面；
- `mn.prototype.$nextTick` 的 `mn`就是 vue，它会根据不同的打包压缩有不同的命名；
- 在控制台中保存 `vue` 实例: `vv = mn;`；
- 如果保存失败，点击下一步执行几次，直到 vue 实例化完成，并保存好 vue 实例。

**2. 启动 vue-devtools 工具**

- 在控制台中执行代码：`vv.config.devtools = true;`如果报错，八成是 vue 实例还没完成。请继续对断点执行。直到可以运行成功。
- 然后在控制台中执行代码：`__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('init', vv);`，对 `vue-devtools` 进行初始化。
- 关闭控制台，再打开，看到控制台中多了 Vue 面板
- 然后就可以尽情排查问题了。
