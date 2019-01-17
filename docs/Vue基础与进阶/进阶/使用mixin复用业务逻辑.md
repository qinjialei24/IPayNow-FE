# 使用mixin复用业务逻辑
## 控制界面loading效果

``` js
//采用约定优于配置的原则 使用时 必须 保证loading 的变量 存放到 组件data函数的 loading对象内

// 如下所示
// data(){
//     return {
//         loading: {
//             update: {}, //存放当前页面 更新按钮的loading
//             download: {}, //存放当前页面 下载按钮的loading
//             table: false
//         }
//     }
// }

const setLoading = {
    methods: {
        async setLoading(field = "", key = "", fn = new Promise()) {
            this.$set(this.loading[field], key, true);
            await fn();
            this.$set(this.loading[field], key, false);
        },
    }
}
export default setLoading
```
- [Vue组件变量存放规范](/开发规范/Vue开发规范.html)

### 示例

``` js
<script>
import 'setLoading' from '../setLoading.js' 
export default {
  mixins:[setLoading],
  data() {
    return {
      //存放 控制loading的相关变量
      loading: {
        update: {} //控制  update 按钮的 loading
      }
    };
  },
  methods: {
    async onUpdate() {
      this.setLoading("update", key, this.update.bind(this, payload));
    },

    update(payload) {
      return this.$http.post("/bill/update", payload, true);
    }
  }
};
</script>
```
::: warning
当使用的`mixins`较多时，需要加上`命名空间`,防止冲突
:::

