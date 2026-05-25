<!-- 用途：提供可复制给协作者或编码助手的启动提示词，说明使用 V2 时应读取哪些文件和遵守哪些规则。 -->
# 华泰天玑设计系统 v2 启动提示词

将下面提示词连同整个 `huatai-tianji-design-systemv2/` 目录交给协作者或编码助手使用。

```text
你现在需要使用 `huatai-tianji-design-systemv2` 进行华泰天玑 Web2.0 页面设计、HTML 原型改版，或真实前端代码样式改版。

必须先读取：
1. `huatai-tianji-design-systemv2/SKILL.md`
2. `huatai-tianji-design-systemv2/references/huatai-tianji-design-spec.md`

视觉规范优先级：
- 用户本次明确指令、指定系统代码、目标页面、组件范围、截图、标注和修改范围优先。
- `huatai-tianji-design-systemv2/references/huatai-tianji-design-spec.md` 中标注为 V2 内置硬规范的 token、字体、按钮、输入、下拉、标签、阴影、圆角规则优先。
- `huatai-tianji-design-systemv2/references/page-patterns.md` 和 `huatai-tianji-design-systemv2/references/component-rules.md` 中标注为落地补充的内容只作为全系统执行经验，不能覆盖 V2 内置硬规范。

如果是全页面或全系统改版，继续读取：
3. `huatai-tianji-design-systemv2/references/page-patterns.md`
4. `huatai-tianji-design-systemv2/references/component-rules.md`

如果是真实前端代码样式改版，继续读取：
5. `huatai-tianji-design-systemv2/references/style-code-workflow.md`

如果准备交付，读取：
6. `huatai-tianji-design-systemv2/references/delivery-checklist.md`

执行要求：
- 基于原有页面和业务结构改版，默认不改业务流程。
- 必须区分 V2 内置硬规范和 v2 落地补充规则。
- 真实代码样式改版默认“颜色层改版，不做布局层改版”：尽量不改原有按钮、弹窗、图片、表格列宽和布局容器尺寸。
- 优先修改颜色、背景、描边、横线/分割线、文字颜色、hover/active/disabled 状态、阴影和圆角。
- 默认不要主动修改 `margin`、`padding`、`gap`、`width`、`height`、`line-height`、`display`、`position`、`top/right/bottom/left`、`flex`、`grid`、`align-items`、`justify-content`、`overflow`、`transform` 等布局保护属性。
- 如必须修改宽高、行高、列宽、图片尺寸、弹窗尺寸、按钮高度、布局栅格或其它布局保护属性，先说明原因、影响范围和风险，等待确认。
- 必须遵守浅蓝三层结构：页面底层、玻璃工作区、白色内容承载层。
- 主按钮、菜单选中、Tab 选中、分页选中统一使用蓝色或蓝青色。
- 红、绿、橙只能用于风险、成功、警示等业务语义。
- 普通筛选项、商品 chip、合约选择、分段选择器、Tab、菜单、分页、快捷筛选的选中态不得使用红色、粉红或浅红背景。
- 红色/浅红背景只用于风险、失败、报错、上涨、高风险确认等明确业务语义。
- 未读消息徽标允许小面积红色；品牌 logo 允许保留品牌红；图表数据序列允许保留橙色线或图表色板多色。
- 顶部导航、左侧导航、按钮、表格、表单、弹窗必须按规范细化状态。
- 按钮改版前必须扫描目标页所有按钮：主按钮、次按钮、线框按钮、文字按钮、图标按钮、表格操作按钮、弹窗底部按钮，以及分享、导出、导入、查询、重置、取消、保存、提交等业务按钮。
- “分享”通常属于普通次级操作，默认使用蓝色文字/蓝色描边/浅蓝 hover，不应使用红色，除非业务明确表示风险。
- 不得编造业务数据和业务文案。
- 不得用营销页风格处理后台业务页面。
- 真实代码改版时只能修改前端样式相关代码。
- 禁止修改接口、路由、权限、状态管理、业务逻辑、数据结构、表单业务校验、埋点、依赖和构建配置。
- 如果必须新增 class、style hook 或轻微模板结构，先说明原因和影响范围，等待确认。
- 修改完成后必须尽量做视觉自审：检查边距和对齐是否错乱、元素是否重叠、文本是否溢出、按钮是否挤压、图片是否变形、弹窗宽高是否异常、表格列宽是否异常。
- 如果无法启动项目或无法截图，交付时必须明确说明未完成视觉验证，并列出风险。

交付时必须说明：
- 修改了哪些文件。
- 每个文件改了什么。
- 哪些区域保持未动。
- 是否只修改了样式代码。
- 是否修改了布局保护属性；如有，说明原因、影响范围、风险和验证结果。
- 是否完成所有按钮颜色扫描，尤其是分享、导出、导入、重置、取消、保存、查询、文字按钮和图标按钮。
- 是否完成普通筛选项、商品 chip、合约选择、分段选择器、Tab、菜单、分页、快捷筛选的选中态扫描。
- 是否完成视觉自审。
- 运行了哪些检查命令及结果。
- 风险和待确认项。
```
