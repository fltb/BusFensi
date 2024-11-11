# 文档

这里是开发文档。

目前只有更新周报的计划，更细致的文档需要等项目稳定下来再整理。

## 开发周报

### 第零周 (- 7.8)

初始化了项目，初步确定了基本的技术实现和基本的文件树结构

### 第一周 (7.9-7.15)

主要完成了以下功能：

- 地理位置到屏幕像素的映射 (utils/geo)
- 点，线和背景瓷砖等组件的渲染实现 (pixi/components)
- 图层的基本实现和临时的渲染测试 (pixi/layers)
- 简单的 dom 组件化

计划中的功能：

- 设计编辑系统，目前已经有了初步的抽象，关于操作

### 第四周

由于开发进度不够，现在开始要主力开发核心功能。

在前面的开发中把各个核心模块基本确定了，除了 DOM 模块

下周的计划：

写出 DOM 模块，用于展示和编辑元信息。对于编辑，采用已有的 Action 抽象，在 Action 中触发各个模块的数据更新和渲染。

考虑到相对 PIXI 模块，DOM 部分的 UI 层次结构会更加复杂，而且对这一模块本身的状态并不会出现过多复杂的变化，相较 PIXI 模块中的 stateGraph 触发 Action，会采用 DOM Element 的业务逻辑中直接触发 Action 的形式。同时对需要频繁更新和全局共享的数据，DOM 模块会提供一套类似主流前端框架的 state manage 模块的 API （类似 Redux）。

未来有计划统一用这一套全局数据绑定替代现有的 Action 触发渲染的逻辑，向主流框架靠拢。不过考虑目前 PIXI 部分的更新量并不大，Action 抽象也能应对。

### 第五周

我上 React 了，请多多支持（

由于状态管理的复杂性，以及纯 ESM + DOM 写 UI 的开发效率，以及接下来只剩一半的时间，我把项目整体用 React 重构了，取消了 Action List ，用 zustand + zundo 来管理状态

具体的原因和过程将在下一个周报说明。

