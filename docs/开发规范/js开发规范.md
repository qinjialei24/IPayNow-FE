# js开发规范

## 使用`驼峰命名`（推荐安装vscode插件 `code spell checker`, 这个插件可以检查你的单词拼写，单词拼写错误或者不符合驼峰命名，会给予提示 ）。

## 常量使用大写,多个单词用 _ 分割,例如：
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

## 避免使用var
> Why? var 无法生成块级作用域
``` js
    // bad
    var a = 1;
    var b = 2;

    // good
    const a = 1;
    const b = 2;
```

##  使用对象键值对简写
> Why? 它更短且看起来更加清晰
```js
const lukeSkywalker = 'Luke Skywalker';
// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// good
const obj = {
  lukeSkywalker,
};
```
##  使用对象键值对简写时，将简写的属性放在最前面
> Why? 能更加快速看出哪些时简写属性
```js
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};

```
## 首选对象扩展运算符Object.assign到浅复制对象。使用object rest运算符可以获取省略了某些属性的新对象
> Why? 更加简洁优雅
```js
// very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ
delete copy.a; // so does this

// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }

```
## 使用数组解构
```js
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;

```
## 始终将默认参数设为最后
```js
// bad
function handleThings(opts = {}, name) {
  // ...
}

// good
function handleThings(name, opts = {}) {
  // ...
}
```
## 访问属性时使用点表示法
```js
const luke = {
  jedi: true,
  age: 28,
};

// bad
const isJedi = luke['jedi'];

// good
const isJedi = luke.jedi;

```
## 使用布尔值的快捷方式，但对字符串和数字进行显式比较
```js
// bad
if (isValid === true) {
  // ...
}

// good
if (isValid) {
  // ...
}

// bad
if (name) {
  // ...
}

// good
if (name !== '') {
  // ...
}

// bad
if (collection.length) {
  // ...
}

// good
if (collection.length > 0) {
  // ...
}

```



