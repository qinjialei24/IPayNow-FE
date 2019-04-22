# 第一次获取unionId出现失败

有时候会出现第一次获取unionId出现失败,  后面再获取会成功的情况

一般是由于 在功能函数里面 调用了wx.login刷新登录状态 导致session过期

``` js
//html
<button  open-type="getUserInfo" bindgetuserinfo="bindGetUserInfo">授权登录</button>

//js
Page({
    bindGetUserInfo(){
        /*  错误示例 应该事先获取code
            wx.login({
                success({ code }){

                }
            })
        */
    }
});

```