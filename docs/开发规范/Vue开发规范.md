# Vue开发规范
- 使用`驼峰命名`（推荐安装vscode插件 `code spell checker`, 这个插件可以检查你的单词拼写，单词拼写错误或者不符合驼峰命名，会给予提示 ）。
- 常量使用大写,多个单词用 _ 分割,例如：
  ```js
  <!-- bad -->
  if(val === 18  ) {
      ....
  }
  <!-- good -->
  const PEOPLE_AGE = 18 
  if(val === PEOPLE_AGE  ) {
      ....
  }
  ```
- 变量按分类存放
``` js
data(){
    return {
        selectOptions:{//存放所有下拉框的枚举值
            options1:[],
            options2:[],
        }
        loading:{//存放所有控制loading相关的变量
            button1:true,
            button2:false,
        },
        visible:{//存放所有控制可见性相关的变量
            button1:true,
            button2:false,
        },
    }
}
```  