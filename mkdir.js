const fs = require('fs');
const tip = `
## 解决了什么问题？
::: tip

:::

## 注意事项
::: warning 
:::

## 示例
\`\`\`vue

\`\`\`

## 源码
\`\`\`vue

\`\`\`
`;
const dir = process.argv[2];
const path = process.env.INIT_CWD;
if(fs.existsSync(`${path}/${dir}.md`)){
    console.log("文件已存在")
}else{
    fs.writeFile(`${path}/${dir}.md`, new Uint8Array(Buffer.from(`# ${dir}${tip}`)), (err) => {
        if(err) throw err;
    }) 

}