（砍死设计师系列）

# navControl.js Usage

这里用的navContorl可能不是最终的版本，这里的demo也不会再更新。 

---

## html部分

``` html
<!-- position不能漏那个是表征左右关系的 -->
<a href="#" id="第1个" class="navBtn active" position='1'>首页</a>
<a href="#" id="第2个" class="navBtn" position='2'>各组介绍</a>
<a href="#" id="第3个" class="navBtn" position='3'>工作项目</a>
<a href="#" id="第4个" class="navBtn" position='4'>联系我们</a>

<!-- id的名字应该是对应的a标签id名后跟上 container (这个container可以在navControl.js里面修改) -->
<div class="container" id="第1个container">首页 1</div>
<div class="container" id="第2个container">各组介绍 2</div>
<div class="container" id="第3个container">工作项目 3</div>
<div class="container" id="第4个container">联系我们 4</div>

```

## js部分

``` js
// 构造你的Nav对象
var myNav = new navInit();    

$(document).ready(function(){
    // 给.navBtn套上监听函数
    $(".navBtn").click(myNav.initActive); 
});

```
