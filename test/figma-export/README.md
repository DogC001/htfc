# Figma 导入说明

本目录是 `my-account-v3.html` 对应的本地 Figma 插件导入包。

## 导入步骤

1. 打开 Figma 桌面端或网页版。
2. 进入任意设计文件。
3. 菜单选择 `Plugins` -> `Development` -> `Import plugin from manifest...`。
4. 选择本目录下的 `manifest.json`：

   `c:\Users\15784\Desktop\test\figma-export\manifest.json`

5. 再次打开 `Plugins` -> `Development`，运行 `My Account Prototype Import`。

运行后会在当前 Figma 页面生成 9 个画板：

- 01 个人信息
- 02 企业认证
- 03 企业认证弹窗
- 04 账户注销
- 05 系统协议清单
- 06 品种偏好设置
- 07 开通企业域
- 08 通知设置
- 09 业务经理信息

## 说明

- 画板尺寸为 1920 × 1080。
- 主要容器、文字、按钮、表格、标签、开关、弹窗等均为 Figma 可编辑图层。
- 该导入包不覆盖项目内已有 HTML 文件。
