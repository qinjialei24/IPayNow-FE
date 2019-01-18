# two-fields-date-picker

## 解决了什么问题？
::: tip
- elementUI daterange 只支持传入一个字段
- 封装elementUI daterange 组件 支持传入两个字段
:::

## 注意事项
::: warning 
- 暂无
:::

## 示例
```vue
    <v-date-picker :start.sync='myForm.billStartDate'
                    :end.sync='myForm.billEndDate'
                    :clearable='false'
                    type="datetimerange"
                    :default-time="['00:00:00', '23:59:59']"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期" />
```


## 源码
``` vue
<template>
  <div class='v-date-picker'>
    <el-date-picker v-model="myDate"
                    v-bind="$attrs">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  props: {
    start: {
      required: true
    },
    end: {
      required: true
    }
  },
  data() {
    return {
      myDate: null
    };
  },
  watch: {
    myDate: function(val) {
      if (!val) {
        //用户清空
        this.$emit("update:start", "");
        this.$emit("update:end", "");
      } else {
        this.$emit("update:start", val[0]);
        this.$emit("update:end", val[1]);
      }
    },
    start: {
      handler(val) {
        val ? (this.myDate = [this.start, this.end]) : (this.myDate = null);
      },
      immediate: true
    },
    end: {
      handler(val) {
        val ? (this.myDate = [this.start, this.end]) : (this.myDate = null);
      },
      immediate: true
    }
  },
};
</script>
```

##  使用 $attrs 实现 props 跨组件传递
>包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。

