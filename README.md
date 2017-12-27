# vue-slotmachine

這是一個使用 Vue.js, [Animate.css](https://daneden.github.io/animate.css/) 做的一個模仿拉霸機動畫的例子，沒有什麼太高深的技巧，純粹好玩罷了。

最上方會顯示目前的選項，接著可以輸入更多的選項到機器裡。按下 **Stop!** 按鈕可以讓機器停止，達到選出中獎者的目的，再按一下 **Start!** 則會讓機器繼續活動。

## Build

``` bash
# install dependencies
yarn
```

## 重點

這裡有兩個範例，實作的方式不同，Demo 1 是用單一個 `<div>` Element 做成，Demo 2 則用了多個 `<div>` Element。

### Slot Machine Demo 1 (/slot1)

因為只用一個 `<div>`，所以資料使用 `roundRobin()` 方法在做調整時，要依序執行兩個動畫：也就是把 `<div>` 的 Class 依序轉換成 **slideInUp** 跟 **slideOutUp**，所以每個動畫使用的時間是 setInterval 使用的一半。

### Slot Machine Demo 2 (/slot2)

這個做法是用 `v-for` 產生多個 `<div>` Element，用 `v-show` 決定該 Element 要在何時顯示，且使用 Vue.js 內建的 Transition 功能來加上 Animate.css 的 Class，做出動畫。

而為了要讓多個 `<div>` Element 固定在同一個位置，才不會造成動畫看起來很奇怪，需要先將多個元素用 `<div>` 包圍起來，再使用以下的 CSS（置中對齊則是本來就有加上 `text-align:center;` 了）：

```css
outerdiv {
  position:relative;
}

innerdiv {
  position:absolute;
  left:0;
  right:0;
}
```

## 後記

用一個 Element 的做法的動畫好像跑得比較順，但是使用多個 Element 並用 `v-show`, **Transition** 來調整的方法看起來比較先進。
