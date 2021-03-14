# div 오버플로우시 스크롤바 처리

style = "overflow:scroll"   > 스크롤바 상시 생김

style = "overflow:auto"  > 오버플로우 시에만 스크롤바 생김

style = "overflow:hidden"  >  스크롤바 미표시 넘친 컨텐츠 숨김

overflow-y:scroll > y축에 대하여 스크롤바 상시 생김



컨텐츠는 스크롤가능하게 하고 스크롤바 숨기기

```html
<style>
    .item {
        cursor: pointer;
    }

    .box{ -ms-overflow-style: none; } 
    .box::-webkit-scrollbar{ display:none; }
</style>
<div class="box" style="height:298px; width:670px; overflow-y:auto;"> 
.
.
.
</div>

```





