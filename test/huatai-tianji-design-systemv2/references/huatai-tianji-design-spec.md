<!-- 用途：沉淀 V2 内置 UI 硬规范与核心视觉 token，是颜色、字体、阴影、圆角、按钮、输入、下拉、标签等视觉依据。 -->
# 华泰天玑 Web2.0 设计规范 v2

## 0. 规范来源与优先级

本文件用于华泰天玑 Web2.0 全系统前端页面的视觉改版和样式统一。

优先级固定如下：

1. 用户本次明确指令、指定系统代码、目标页面、组件范围、截图、标注和修改范围。
2. 本 V2 文件夹已内置整理的华泰天玑 Web2.0 UI 硬规范。
3. 原 `huatai-tianji-design-system` 已落地页面经验。
4. 本 v2 对全系统页面改版的补充执行规则。

本文中标注为“V2 内置硬规范”的内容是硬依据；标注为“落地经验补充”的内容用于真实页面改版时保持一致性，但不得覆盖 V2 内置硬规范。

## 1. 适用范围

适用于华泰天玑 Web2.0 全系统前端页面的视觉改版和样式统一，包括：

- 门户首页、全局导航、工作台、看板。
- 列表页、表格页、搜索筛选页。
- 详情页、信息展示页、协议页。
- 表单页、配置页、认证页、开户流程。
- 图表页、行情页、研究资讯页。
- 弹窗、抽屉、确认框、提示。
- 空状态、错误页、权限页、未登录、未认证。
- 真实前端代码中的样式文件、主题变量和组件样式。

目标不是做风格展示页，而是让业务页面稳定符合“浅蓝、清爽、可信、高效、克制”的天玑业务系统气质。

## 2. 产品气质

- 清爽：浅蓝白底、层次清晰、留白适中。
- 可信：状态明确、风险语义清晰、法务说明稳定。
- 高效：业务信息可快速扫描，操作路径短。
- 克制：避免营销页、深色科技舱、夸张装饰。
- 统一：颜色、字体、组件、状态、间距一致。

## 3. V2 内置硬规范：色彩 Tokens

### 3.1 按钮主色

| Token | 色值 | 规范用途 |
| --- | --- | --- |
| button-primary-selected | `#4486F5` | 主要按钮选中状态 |
| button-primary-gradient-end | `#72C6DD` | 主要按钮渐变辅助色 |
| button-primary-default-danger | `#E43340` | 规范色板中的默认按钮色 |
| button-primary-hover-danger | `#EA616B` | 规范色板中的悬停色 |
| button-primary-disabled-danger | `#F6BBC0` | 规范色板中的禁用色 |

落地规则：

- 普通主操作、导航选中、Tab 选中、分页选中优先使用蓝色或蓝青色体系。
- `#E43340`、`#EA616B`、`#F6BBC0` 只在风险、报错、失败、上涨等业务语义明确时使用。
- 不把红色作为普通“确定/保存/查询”主按钮。

### 3.2 次按钮一状态

| Token | 色值 | 规范用途 |
| --- | --- | --- |
| secondary-blue-default | `#498DF2` | 默认 |
| secondary-blue-hover | `#7AACF5` | 悬停 |
| secondary-blue-disabled | `#A9C9F9` | 禁用 |
| secondary-blue-bg | `#E7F0FD` | 浅色背景 |

### 3.3 次按钮二状态

| Token | 色值 | 规范用途 |
| --- | --- | --- |
| secondary-cyan-default | `#5CA8E8` | 默认 |
| secondary-cyan-hover | `#8BC1EF` | 悬停 |
| secondary-cyan-disabled | `#B7D9F5` | 禁用 |
| secondary-cyan-bg | `#E4F1FB` | 浅色背景 |

### 3.4 按钮辅色

| Token | 色值 | 规范用途 |
| --- | --- | --- |
| assist-navy-default | `#384F97` | 主要文字选中状态 |
| assist-navy-hover | `#6A81C8` | 悬停 |
| assist-navy-disabled | `#B8C3E5` | 禁用 |
| assist-navy-bg | `#F0F2F9` | 浅色背景 |
| assist-steel-default | `#5D91C6` | 主要按钮、文字和选中状态 |
| assist-steel-hover | `#A8C4E0` | 悬停 |
| assist-steel-disabled | `#CEDEEE` | 禁用 |
| assist-steel-bg | `#F4F7FB` | 浅色背景 |

### 3.5 文本色

| Token | 色值 | 规范用途 |
| --- | --- | --- |
| text-title | `#142033` | 标题 |
| text-body | `#56617C` | 正文 |
| text-muted | `#8D95A5` | 辅助文字 |
| text-copyright | `#C1C9D7` | 版权文字 |
| text-inverse-100 | `#FFFFFF` | 次要文字 100% |
| text-inverse-60 | `rgba(255,255,255,.6)` | 次要文字 60% |
| text-inverse-50 | `rgba(255,255,255,.5)` | 次要文字 50% |

### 3.6 中性色

| Token | 色值 | 规范用途 |
| --- | --- | --- |
| neutral-page-bg | `#EBF2FA` | 大背景 |
| neutral-border | `#E1E7EB` | 描边、分割线 |
| neutral-card-bg | `#F7F9FA` | 卡片背景 |
| neutral-input-bg | `#F6F8FD` | 输入框背景 |

### 3.7 功能色

| Token | 色值 | 规范用途 |
| --- | --- | --- |
| link-default | `#4766FF` | 链接、入口按钮文字 |
| link-hover | `#7A91FF` | 悬停 |
| link-disabled | `#ADBBFF` | 禁用 |
| link-bg | `#EBEEFF` | 浅色背景 |
| danger-default | `#FE4C4F` | 上涨、报错、标签等 |
| danger-hover | `#FE8082` | 悬停 |
| danger-disabled | `#FFB3B4` | 禁用 |
| danger-bg | `#FFF0F0` | 浅色背景 |
| success-default | `#2DB185` | 安全、下跌、标签等 |
| success-hover | `#44CFA1` | 悬停 |
| success-disabled | `#95E4CA` | 禁用 |
| success-bg | `#E7F9F3` | 浅色背景 |
| warning-default | `#F1913D` | 提示、警示、标签等 |
| warning-hover | `#F4AB6C` | 悬停 |
| warning-disabled | `#F8C69B` | 禁用 |
| warning-bg | `#FDF2E7` | 浅色背景 |

### 3.8 图表色

```css
:root {
  --tj-chart-01: #5B8FF9;
  --tj-chart-02: #E8684A;
  --tj-chart-03: #9270CA;
  --tj-chart-04: #F84C59;
  --tj-chart-05: #269A99;
  --tj-chart-06: #FF9D4D;
  --tj-chart-07: #9E8C64;
  --tj-chart-08: #5D7092;
  --tj-chart-09: #6765A6;
  --tj-chart-10: #5292A9;
  --tj-chart-11: #6DC8EC;
  --tj-chart-12: #F09456;
  --tj-chart-13: #B56BE1;
  --tj-chart-14: #E96284;
  --tj-chart-15: #3BA272;
  --tj-chart-16: #F6BD16;
  --tj-chart-17: #969E64;
  --tj-chart-18: #6E84BB;
  --tj-chart-19: #7A7FC7;
  --tj-chart-20: #64B1CD;
  --tj-chart-21: #BBD1FF;
  --tj-chart-22: #F5C2B4;
  --tj-chart-23: #D2C2E6;
  --tj-chart-24: #FF99C3;
  --tj-chart-25: #5AD8A6;
  --tj-chart-26: #F7E39D;
  --tj-chart-27: #B0B783;
  --tj-chart-28: #C0C7D7;
  --tj-chart-29: #B0B3E2;
  --tj-chart-30: #AFD9E8;
}
```

## 4. V2 内置硬规范：字体与排版

中文字体统一使用：阿里巴巴普惠体 3.0。

| 层级 | 字号/行高 | 字重 | 场景 |
| --- | --- | --- | --- |
| Headline 1 大标题 | 40px / 46px | 中粗体 / 中黑体 / 常规体 | 重要信息或标题、数字信息 |
| Headline 2 小标题 | 32px / 38px | 中黑体 / 常规体 | 重要信息或标题 |
| Headline 3 板块标题 | 22px / 28px | 中黑体 / 常规体 | 重要信息或标题 |
| Headline 4 导航标题 | 18px / 24px | 中黑体 / 常规体 | 主要标题及导航栏 |
| Headline 5 一级正文 | 16px / 22px | 中黑体 / 常规体 | 部分标题及导航栏 |
| Headline 6 二级正文 | 14px / 20px | 中黑体 / 常规体 | 正文信息、回显标题 |
| Headline 7 三级正文 | 12px / 18px | 中黑体 / 常规体 | 提示文字、辅助文字 |

落地规则：

- 后台业务页面正文优先 14px/20px。
- 表格、字段、按钮优先 14px。
- 顶部导航文字优先 14px。
- 弹窗标题优先 18px/24px。
- 子页面标题不得大于所属模块主标题。
- 不用超大标题制造营销页感觉。

## 5. V2 内置硬规范：阴影、圆角、布局、图标

### 5.1 阴影

阴影参数：

- 阴影颜色：`#9198A7`
- 透明度：25%
- X：0
- Y：0
- 模糊：30
- 浮层是否有描边根据实际设计而定。

推荐 CSS：

```css
box-shadow: 0 0 30px rgba(145, 152, 167, 0.25);
```

### 5.2 圆角

圆角层级：

- 4px
- 8px
- 16px
- 50%

规则：

- 同一个系统圆角尽量保持一致。
- 如有层级关系，页面内边角由大到小递进。
- 页面基础容器可使用 50% 圆角规则中的视觉逻辑，但在真实后台页面中应避免过度胶囊化。

### 5.3 布局

V2 已保留布局方向，但完整页面尺寸更多依赖真实项目现状。后续页面尺寸规则属于落地经验补充，不作为必须覆盖真实系统尺寸的硬规则。

落地经验补充：

| 项目 | 建议 |
| --- | --- |
| 设计基准 | 1920 × 1080 |
| 页面外边距 | 20-24px |
| 工作区内边距 | 22-24px |
| 顶部导航高度 | 72-80px |
| 左侧导航宽度 | 260-300px |
| 内容区内边距 | 24-28px |
| 普通详情行高 | 48-56px |
| 媒体详情行高 | 96-112px |
| 表格单元格内边距 | 14-18px |
| 表单字段间距 | 16-20px |

### 5.4 图标

图标使用统一线性风格。

规则：

- 图标颜色优先使用 `#56617C`、`#8D95A5` 或蓝色体系。
- 常规图标尺寸优先 14-20px。
- 不使用过小、难看的文本符号替代图标。
- 操作图标应和按钮、输入框、菜单的视觉粗细一致。

## 6. V2 内置硬规范：按钮

基础按钮尺寸按场景分为 3 个 size：

| 尺寸 | 高度 | 字体 | 使用场景 |
| --- | --- | --- | --- |
| L | 40px | 18px | 通知提醒框、控件内轻量操作等 |
| M | 32px | 16px | 常规弹窗、表格操作栏等 |
| S | 24px | 14px | 通知提醒框、控件内轻量操作等 |

按钮文字：

- 建议不超过 8 个中文字符。
- 一般建议 2-6 个中文字符。

按钮类型：

- 基础按钮。
- 线框按钮。
- 带图标按钮。

落地规则：

- 查询、保存、提交、确认、下一步优先使用蓝色或蓝青色主按钮。
- 编辑、修改、取消、上一步、重置优先使用线框按钮或次按钮。
- 查看、详情、跳转、轻操作可使用文本按钮。
- 删除、撤回、注销、拒绝等风险操作使用红色语义按钮或红色文本。

## 7. V2 内置硬规范：输入、下拉、标签、空状态

### 7.1 输入框

- 高度：40px。
- 背景：`#F6F8FD`。
- 边框：`#E1E7EB`。
- 字号：14px。
- placeholder 使用辅助文字色。
- 日期、搜索、下拉、文本输入保持同一高度体系。

### 7.2 下拉框

- 选择器输入态高度：40px。
- 已选中文字：中黑体，14px，颜色 `#0D59C4`。
- hover 文字：常规体，14px，颜色 `#000000`。
- hover 底部背景色块：`#0D59C4`，8% 透明度，高度 40px。
- 输入框有效区域距离输入框上下为 8px。
- 超过 10 条出现滚动条。
- 滚动条颜色：`#E1E7EB`。
- 滚动条距离上方 8px，距离右侧 4px。
- 单项选择器与下拉框组合时，间距为 4px。

### 7.3 标签

标签可使用蓝、绿、红、橙、功能蓝等状态色，并包含实底、浅底、描边等状态。

规则：

- 分类标签优先蓝色、蓝灰、浅底。
- 成功/安全/下跌使用绿色体系。
- 风险/失败/报错/上涨使用红色体系。
- 提示/警示/待处理使用橙色体系。
- 同一行标签数量多时降低颜色强度，避免噪声过高。

### 7.4 空状态

V2 内置规范支持极简“暂无搜索结果”空状态。

规则：

- 可使用纯文字空状态，不强制插图。
- 可使用浅蓝低饱和线性图标，但不得喧宾夺主。
- 暂无数据、暂无搜索结果、暂无权限、网络异常等状态要区分。
- 不编造业务数据。
- 不用强对比红色空状态。

## 8. 三层视觉结构（落地经验补充）

### 8.1 页面底层

用途：承载整个页面氛围。

规则：

- 使用浅蓝到浅青背景。
- 可使用柔和径向光斑。
- 不使用深色大背景、霓虹光、强渐变、重纹理。
- 不使用大面积单一紫蓝、深蓝、棕橙、米黄主题。

推荐 CSS：

```css
.tj-page-shell {
  min-height: 100vh;
  color: #142033;
  font-family: "Alibaba PuHuiTi 3.0", "PingFang SC", "Microsoft YaHei", Arial, sans-serif;
  background:
    radial-gradient(circle at 8% 12%, rgba(186, 229, 235, 0.72), transparent 30%),
    radial-gradient(circle at 86% 8%, rgba(198, 215, 244, 0.62), transparent 28%),
    radial-gradient(circle at 50% 94%, rgba(221, 242, 246, 0.82), transparent 34%),
    linear-gradient(135deg, #eef8fb 0%, #eef4fb 48%, #f4f8fc 100%);
}
```

### 8.2 工作区玻璃层

用途：承载页面核心业务区域。

规则：

- 半透明浅蓝白玻璃感。
- 白色描边。
- 轻微背景模糊。
- 柔和蓝灰阴影。
- 不把每个小卡片都做成玻璃，玻璃层主要用于页面工作区、弹窗或重点容器。

推荐 CSS：

```css
.tj-glass-panel {
  border: 1px solid rgba(255, 255, 255, 0.92);
  border-radius: 20px;
  background: rgba(248, 253, 255, 0.58);
  box-shadow:
    0 30px 80px rgba(99, 143, 179, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(18px);
}
```

### 8.3 内容承载层

用途：承载表格、表单、详情、列表、图表。

规则：

- 白色或极浅蓝灰 surface。
- 浅蓝灰描边。
- 轻阴影。
- 圆角 8px 或 16px。
- 不做多层卡片套卡片。

推荐 CSS：

```css
.tj-surface {
  border: 1px solid rgba(226, 234, 240, 0.96);
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 0 30px rgba(145, 152, 167, 0.16);
}
```

## 9. 推荐 CSS 变量

```css
:root {
  --tj-bg-page: #ebf2fa;
  --tj-bg-card: #f7f9fa;
  --tj-bg-input: #f6f8fd;
  --tj-border: #e1e7eb;

  --tj-text-title: #142033;
  --tj-text-body: #56617c;
  --tj-text-muted: #8d95a5;
  --tj-text-copyright: #c1c9d7;
  --tj-text-inverse: #ffffff;

  --tj-primary: #4486f5;
  --tj-primary-end: #72c6dd;
  --tj-secondary-blue: #498df2;
  --tj-secondary-blue-hover: #7aacf5;
  --tj-secondary-blue-disabled: #a9c9f9;
  --tj-secondary-blue-bg: #e7f0fd;
  --tj-secondary-cyan: #5ca8e8;
  --tj-secondary-cyan-hover: #8bc1ef;
  --tj-secondary-cyan-disabled: #b7d9f5;
  --tj-secondary-cyan-bg: #e4f1fb;

  --tj-link: #4766ff;
  --tj-link-hover: #7a91ff;
  --tj-link-disabled: #adbbff;
  --tj-link-bg: #ebeefe;

  --tj-danger: #fe4c4f;
  --tj-danger-hover: #fe8082;
  --tj-danger-disabled: #ffb3b4;
  --tj-danger-bg: #fff0f0;
  --tj-success: #2db185;
  --tj-success-hover: #44cfa1;
  --tj-success-disabled: #95e4ca;
  --tj-success-bg: #e7f9f3;
  --tj-warning: #f1913d;
  --tj-warning-hover: #f4ab6c;
  --tj-warning-disabled: #f8c69b;
  --tj-warning-bg: #fdf2e7;

  --tj-radius-xs: 4px;
  --tj-radius-sm: 8px;
  --tj-radius-md: 16px;
  --tj-radius-pill: 999px;
  --tj-shadow-pdf: 0 0 30px rgba(145, 152, 167, 0.25);

  --tj-font-cn: "Alibaba PuHuiTi 3.0", "PingFang SC", "Microsoft YaHei", Arial, sans-serif;
}
```

## 10. 真实代码落地原则

- 优先使用 V2 内置 token。
- 需要补足真实页面体验时，再使用落地经验补充规则。
- 优先使用现有样式体系。
- 优先局部样式文件，谨慎改全局。
- 共享样式必须说明影响范围。
- 不新增依赖。
- 不修改业务逻辑。
- 不改变交互。
- 不改变文案语义。

