"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
//コンポーネントを定義
function Index() {
    return (React.createElement("p", null, "hoge"));
}
;
//id='content'の要素にコンポーネント「Index」を挿入してレンダリング
ReactDOM.render(React.createElement(Index, null), document.getElementById('content'));
