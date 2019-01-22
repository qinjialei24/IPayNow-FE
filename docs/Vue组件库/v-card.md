# v-card
## 解决了什么问题？
::: tip
如下图，业务中有很多类似这样的详情页面，可以封装成组件，并且使用了作用域插槽（`slot-scope`）,可以自定义插槽中的内容，样式也可以自定义

<img :src="$withBase('/v-card.png')" alt="foo">


:::

## 注意事项
::: warning 
数据格式可能需要修改下
:::

## 示例
```vue
<template>
  <div class=''>
    <div class="content">
      <v-card title="基本信息"
              :data='myData'>
        <v-card-item label="充值流水号"
                     value='serialNumber'>
        </v-card-item>

        <v-card-item label="充值方式"
                     value='transSourceStr'>
        </v-card-item>

        <v-card-item label="充值渠道"
                     value='transChannelStr'>
        </v-card-item>

        <v-card-item label="会员ID"
                     value='memberId'>
        </v-card-item>

        <v-card-item label="余额卡ID"
                     value='balanceCardId'>
        </v-card-item>

        <v-card-item label="关联流水号"
                     value='outerAssociateId'>
        </v-card-item>

        <v-card-item label="退款申请时间"
                     value='transTime'>
        </v-card-item>

        <v-card-item label="退款状态"
                     value='transStatusStr'>
        </v-card-item>
        <v-card-item label="退款金额"
                     value='transAmount'>
        </v-card-item>
        <v-card-item label="退款原因"
                     value='transDesc'>
        </v-card-item>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myData: {},
      url: "/charge/chargeDetail"
    };
  },
  methods: {
    async getInfo() {
      const { query } = this.$route;
      const res = await this.$http.post(this.url, query);
      this.myData = res.data.data;
    }
  },
  mounted() {
    this.getInfo();
  }
};
</script>
```

## 源码
源码分为两部分
- v-card-item
- v-card

v-card-item源码
```vue
<template>
  <div class='v-card-item'>
    <div class="v-card-item-label">{{label}}</div>

    <div class="v-card-item-value"
         v-if='hasScopedSlots()'>
      <div class="v-card-item-slot">
        <slot :data='source'></slot>
      </div>
    </div>

    <div class="v-card-item-value"
         v-else>
      {{source[value]}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: "",
    value: ""
  },
  data() {
    return {
      source: {}
    };
  },
  methods: {
    hasScopedSlots() {
      return this.$scopedSlots.default ? true : false;
    }
  },
  watch: {
    "$parent.data": function(val) {
      this.source = val;
    }
  },
  mounted() {
    this.hasScopedSlots();
  }
};
</script>

<style lang='scss'>
@mixin base($width) {
  padding-left: 1.25rem;
  display: flex;
  align-items: center;
  width: $width;
}

$width_label: 30%;
$width_value: 100%-$width_label;

.v-card-item {
  display: flex;
  min-height: 2.5rem;
  &-slot {
    width: 100%;
  }
  &-label {
    @include base($width_label);
  }
  &-value {
    @include base($width_value);
    border-left: 1px solid #d8d8d8;
  }
}
</style >


```

v-card源码
```vue
<template>
  <div class='v-card'>
    <div class="v-card-title"
         v-if='title'>{{title}}</div>
    <div class="v-card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: "",
    data: {
      type: Object
      // required: true
    }
  }
};
</script>

<style lang='scss' >
.v-card {
  width: 45%;
  // border: 1px solid burlywood;
  display: inline-block;
  vertical-align: top;
  margin-top: 0.625rem;
  margin-right: 2.25rem;

  &-title {
    display: flex;
    align-items: center;
    height: 3.125rem;
    padding-left: 1.25rem;
    background: #d8d8d8;
  }
  &-content {
    & > div:nth-child(even) {
      background: #f8f8f8;
    }
    & > div:nth-child(odd) {
      background: #ffffff;
    }
  }
}
</style >

```

