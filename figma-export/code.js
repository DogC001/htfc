const W = 1920;
const H = 1080;
const colors = {
  page: "EEF6FB",
  white: "FFFFFF",
  shell: "F7FBFE",
  border: "E1E7EB",
  borderStrong: "CCD8E4",
  title: "142033",
  body: "56617C",
  muted: "8D95A5",
  blue: "4486F5",
  cyan: "72C6DD",
  blueSoft: "E7F0FD",
  danger: "FE4C4F",
  dangerSoft: "FFF0F0",
  success: "2DB185",
  successSoft: "E7F9F3",
  tableHead: "F0F4F9"
};

let regularFont = { family: "Inter", style: "Regular" };
let boldFont = { family: "Inter", style: "Bold" };

function rgb(hex, opacity) {
  const value = hex.replace("#", "");
  return {
    type: "SOLID",
    color: {
      r: parseInt(value.slice(0, 2), 16) / 255,
      g: parseInt(value.slice(2, 4), 16) / 255,
      b: parseInt(value.slice(4, 6), 16) / 255
    },
    opacity: opacity === undefined ? 1 : opacity
  };
}

function text(parent, name, content, x, y, w, h, size, fill, bold) {
  const node = figma.createText();
  node.name = name;
  node.x = x;
  node.y = y;
  node.resize(w, h);
  node.fontName = bold ? boldFont : regularFont;
  node.characters = content;
  node.fontSize = size;
  node.lineHeight = { unit: "PIXELS", value: Math.round(size * 1.45) };
  node.fills = [rgb(fill || colors.title)];
  node.textAutoResize = "HEIGHT";
  parent.appendChild(node);
  return node;
}

function rect(parent, name, x, y, w, h, fill, radius, stroke, opacity) {
  const node = figma.createRectangle();
  node.name = name;
  node.x = x;
  node.y = y;
  node.resize(w, h);
  node.fills = fill ? [rgb(fill, opacity)] : [];
  node.cornerRadius = radius || 0;
  if (stroke) {
    node.strokes = [rgb(stroke)];
    node.strokeWeight = 1;
  }
  parent.appendChild(node);
  return node;
}

function line(parent, name, x, y, w, h, fill) {
  return rect(parent, name, x, y, w, h, fill || colors.border, 0);
}

function button(parent, label, x, y, w, variant) {
  const primary = variant === "primary";
  const danger = variant === "danger";
  rect(parent, `按钮/${label}`, x, y, w, 32, primary ? colors.blue : colors.white, 16, primary ? null : danger ? colors.danger : colors.blue);
  text(parent, `按钮文字/${label}`, label, x, y + 5, w, 22, 14, primary ? colors.white : danger ? colors.danger : colors.blue, true).textAlignHorizontal = "CENTER";
}

function tag(parent, label, x, y, w, selected) {
  rect(parent, `标签/${label}`, x, y, w, 34, selected ? colors.blueSoft : colors.white, 17, selected ? colors.blue : colors.border);
  text(parent, `标签文字/${label}`, label, x, y + 6, w, 20, 13, selected ? colors.blue : colors.body, selected).textAlignHorizontal = "CENTER";
}

function switchNode(parent, x, y, on) {
  rect(parent, "开关轨道", x, y, 52, 28, on ? colors.blue : "C8D0DC", 14);
  rect(parent, "开关滑块", x + (on ? 28 : 4), y + 4, 20, 20, colors.white, 10);
}

function checkbox(parent, x, y, checked) {
  rect(parent, "复选框", x, y, 16, 16, checked ? colors.blue : colors.white, 3, checked ? colors.blue : colors.borderStrong);
  if (checked) text(parent, "勾选", "✓", x, y - 2, 16, 16, 14, colors.white, true).textAlignHorizontal = "CENTER";
}

function radio(parent, x, y, checked) {
  const c = figma.createEllipse();
  c.name = "单选框";
  c.x = x;
  c.y = y;
  c.resize(16, 16);
  c.fills = [rgb(colors.white)];
  c.strokes = [rgb(checked ? colors.blue : colors.borderStrong)];
  c.strokeWeight = 1;
  parent.appendChild(c);
  if (checked) {
    const dot = figma.createEllipse();
    dot.name = "单选点";
    dot.x = x + 4;
    dot.y = y + 4;
    dot.resize(8, 8);
    dot.fills = [rgb(colors.blue)];
    parent.appendChild(dot);
  }
}

function addTopbar(frame) {
  rect(frame, "顶部导航/背景", 0, 0, W, 80, "F7FCFF");
  line(frame, "顶部导航/底线", 0, 79, W, 1, "D2DEEB");
  rect(frame, "品牌/Logo", 32, 22, 36, 36, "DF3D25", 8);
  text(frame, "品牌/中文", "华泰期货", 78, 18, 96, 24, 18, colors.title, true);
  text(frame, "品牌/英文", "HUATAI FUTURES", 78, 44, 108, 14, 9, colors.muted, true);
  line(frame, "品牌/分隔线", 194, 22, 1, 36, "CAD6E2");
  rect(frame, "天玑标识", 207, 22, 36, 36, colors.white, 8, colors.border);
  text(frame, "天玑文字", "天玑", 213, 26, 24, 28, 13, colors.title, true).textAlignHorizontal = "CENTER";
  const nav = ["首页", "行情", "资讯", "策略", "交易", "客户服务", "我的账户"];
  let x = 602;
  nav.forEach(item => {
    text(frame, `顶部导航/${item}`, item, x, 30, 64, 22, 14, item === "我的账户" ? colors.blue : colors.body, item === "我的账户").textAlignHorizontal = "CENTER";
    if (item === "我的账户") rect(frame, "顶部导航/当前下划线", x + 14, 64, 36, 3, colors.blue, 2);
    x += item === "客户服务" ? 92 : 78;
  });
  text(frame, "右侧/AI", "AI 助手", 1625, 30, 62, 22, 14, "3F73FF", true);
  text(frame, "右侧/消息图标", "◦", 1702, 23, 26, 26, 24, colors.body, true).textAlignHorizontal = "CENTER";
  rect(frame, "右侧/消息徽标", 1720, 16, 24, 18, "FF4D5A", 9);
  text(frame, "右侧/消息数量", "1", 1720, 16, 24, 18, 12, colors.white, true).textAlignHorizontal = "CENTER";
  rect(frame, "右侧/头像", 1762, 22, 36, 36, "D9E6F3", 18);
  text(frame, "右侧/用户名", "用户0001", 1810, 30, 80, 22, 14, colors.title, true);
  text(frame, "右侧/箭头", "⌄", 1890, 29, 18, 22, 14, colors.body, true);
}

function addSidebar(frame, active) {
  rect(frame, "工作区/玻璃背景", 120, 104, 1680, 944, colors.shell, 24, colors.white, 0.72);
  rect(frame, "侧栏/背景", 142, 126, 288, 900, "F0FAFD", 16, colors.border);
  text(frame, "侧栏/标题", "我的账户", 166, 150, 110, 32, 22, colors.title, true);
  text(frame, "侧栏/副标题", "ACCOUNT", 284, 158, 68, 18, 12, colors.muted, true);
  const items = [
    ["个人信息", "basic", 198, false],
    ["企业认证", "company", 246, true],
    ["账户管理", "account", 332, true],
    ["偏好设置", "preference", 418, true],
    ["开通企业域", "domain", 504, false],
    ["消息通知", "message", 552, true],
    ["我的业务经理", "manager", 638, false]
  ];
  items.forEach(([label, key, y, hasSub]) => {
    const on = active === key || (active === "company-modal" && key === "company");
    rect(frame, `侧栏/菜单/${label}`, 158, y, 256, 40, on ? colors.blue : colors.white, 10, null, on ? 1 : 0.48);
    text(frame, `侧栏/菜单文字/${label}`, label, 182, y + 9, 140, 20, 14, on ? colors.white : colors.body, on);
    if (hasSub) text(frame, `侧栏/菜单箭头/${label}`, on ? "⌃" : "⌄", 384, y + 9, 18, 20, 14, on ? colors.white : colors.muted, true);
  });
  const sub = {
    company: [["企业认证", 292], ["开通企业域", 324]],
    account: [["账户注销", 378], ["系统协议清单", 410]],
    preference: [["品种偏好设置", 464], ["APP 首屏设置", 496]],
    message: [["站内消息", 598], ["微信消息", 630]]
  };
  Object.entries(sub).forEach(([key, list]) => {
    list.forEach(([label, y]) => {
      const on = active === key || (active === "company-modal" && key === "company") || (active === "about" && label === "系统协议清单");
      rect(frame, `侧栏/子菜单/${label}`, 182, y, 224, 32, on ? colors.blueSoft : colors.white, 8, null, on ? 0.9 : 0);
      text(frame, `侧栏/子菜单文字/${label}`, label, 206, y + 7, 140, 18, 13, on ? "0D59C4" : colors.body, on);
    });
  });
}

function addSurface(frame, title, desc) {
  rect(frame, "内容区/背景", 454, 126, 1224, 900, colors.white, 16, colors.border);
  rect(frame, "内容区/标题栏", 454, 126, 1224, 65, colors.white, 16);
  line(frame, "内容区/标题栏底线", 454, 190, 1224, 1);
  rect(frame, "内容区/标题装饰", 482, 148, 4, 20, colors.blue, 2);
  text(frame, "内容区/标题", title, 496, 144, 260, 28, 18, colors.title, true);
  if (desc) text(frame, "内容区/说明", desc, 496, 170, 620, 20, 13, colors.muted, false);
}

function addBasicInfo(frame) {
  addSidebar(frame, "basic");
  addSurface(frame, "个人信息");
  rect(frame, "个人信息/列表背景", 482, 219, 1120, 396, colors.white, 16, colors.border);
  const rows = [
    ["头像", "", "编辑", 242, 104],
    ["昵称", "天玑用户", "", 346, 56],
    ["企业名称", "奕丰基金销售有限公司", "修改默认企业", 402, 56],
    ["密码", "**********", "修改", 458, 56],
    ["手机号", "184****1472", "", 514, 56],
    ["微信", "已绑定", "解绑", 570, 56]
  ];
  rows.forEach(([label, value, action, y, h], index) => {
    if (index > 0) line(frame, `个人信息/分割线/${index}`, 502, y, 1080, 1, "EEF2F6");
    text(frame, `个人信息/字段/${label}`, label, 502, y + Math.max(18, (h - 20) / 2), 132, 22, 14, colors.body, true);
    if (label === "头像") {
      rect(frame, "个人信息/头像", 658, y + 12, 80, 80, "1D2D5A", 40);
    } else {
      text(frame, `个人信息/值/${label}`, value, 658, y + 18, 360, 22, 14, colors.title, true);
    }
    if (action) {
      if (action === "修改默认企业") text(frame, "个人信息/修改默认企业", action + "  ?", 1210, y + 18, 150, 22, 14, colors.body, false);
      else button(frame, action, 1210, y + Math.max(12, (h - 32) / 2), 88, "outline");
    }
  });
}

function addCompany(frame, modal) {
  addSidebar(frame, "company");
  addSurface(frame, "企业认证");
  button(frame, "多企业认证", 1534, 142, 116, "primary");
  [["奕丰基金销售有限公司", "其他", "北京市", 482], ["德科信息有限公司", "高管", "天津市", 1070]].forEach(([name, type, city, x]) => {
    rect(frame, `企业认证/卡片/${name}`, x, 219, 560, 250, colors.white, 16, colors.success);
    text(frame, `企业认证/姓名/${name}`, "曹端红", x + 22, 241, 160, 24, 16, colors.title, true);
    text(frame, `企业认证/类型/${name}`, type, x + 22, 276, 120, 22, 14, colors.body, false);
    text(frame, `企业认证/公司/${name}`, name, x + 22, 314, 260, 22, 14, colors.title, true);
    text(frame, `企业认证/手机/${name}`, "●  +816 184****1472", x + 22, 356, 230, 22, 14, colors.body, false);
    text(frame, `企业认证/邮箱/${name}`, "✓  dcao0228@foxmail.com", x + 22, 388, 260, 22, 14, colors.body, false);
    text(frame, `企业认证/城市/${name}`, "●  " + city, x + 22, 420, 160, 22, 14, colors.body, false);
    rect(frame, `企业认证/认证图标/${name}`, x + 394, 314, 56, 56, "08A623", 28);
    text(frame, `企业认证/认证勾/${name}`, "✓", x + 394, 321, 56, 42, 30, colors.white, true).textAlignHorizontal = "CENTER";
    text(frame, `企业认证/已认证/${name}`, "已认证", x + 383, 380, 80, 22, 14, "108A38", true).textAlignHorizontal = "CENTER";
    line(frame, `企业认证/底线/${name}`, x, 418, 560, 1);
    text(frame, `企业认证/默认企业/${name}`, "默认企业", x + 84, 433, 80, 22, 14, colors.body, true);
    switchNode(frame, x + 22, 430, x === 482);
    button(frame, "更新认证", x + 426, 426, 96, "outline");
  });
  if (modal) addModal(frame);
}

function addAccount(frame) {
  addSidebar(frame, "account");
  addSurface(frame, "账户注销");
  text(frame, "账户注销/标题", "注销华泰天玑账户须知", 482, 219, 320, 24, 16, colors.title, true);
  const ps = [
    "1、账户注销为不可恢复的操作，注销后将无法继续使用该账号或找回相关内容与信息。",
    "2、建议您在注销前自行备份账号相关信息，并确认相关服务均已妥善处理。",
    "3、注销成功后，我们将按照隐私政策相关条款删除个人信息，或进行匿名化处理。"
  ];
  ps.forEach((p, i) => text(frame, `账户注销/说明/${i + 1}`, p, 482, 269 + i * 44, 980, 28, 14, colors.body, false));
  checkbox(frame, 482, 438, false);
  text(frame, "账户注销/同意", "我已同意《华泰天玑账户注销条款》", 508, 434, 360, 24, 14, colors.body, false);
  rect(frame, "账户注销/禁用按钮", 930, 500, 112, 32, "A9C9F9", 16);
  text(frame, "账户注销/按钮文字", "确认注销", 930, 505, 112, 22, 14, colors.white, true).textAlignHorizontal = "CENTER";
}

function addAbout(frame) {
  addSidebar(frame, "about");
  addSurface(frame, "华泰天玑系统协议清单");
  rect(frame, "协议清单/表格", 482, 219, 1110, 392, colors.white, 16, colors.border);
  rect(frame, "协议清单/表头", 482, 219, 1110, 52, colors.tableHead, 16);
  text(frame, "协议清单/序号头", "序号", 502, 235, 70, 22, 14, colors.body, true);
  text(frame, "协议清单/名称头", "协议名称", 592, 235, 540, 22, 14, colors.body, true);
  text(frame, "协议清单/操作头", "操作", 1390, 235, 90, 22, 14, colors.body, true);
  const names = [
    "天玑AI助手华小七个人信息保护规则",
    "天玑AI助手华小七用户协议",
    "华泰天玑隐私保护协议",
    "华泰天玑用户注册协议",
    "华泰天玑隐私保护政策补充协议",
    "华泰期货人脸识别授权协议"
  ];
  names.forEach((name, i) => {
    const y = 271 + i * 56;
    line(frame, `协议清单/行线/${i}`, 482, y, 1110, 1, colors.border);
    text(frame, `协议清单/序号/${i + 1}`, String(i + 1), 502, y + 17, 40, 22, 14, colors.title, false);
    text(frame, `协议清单/名称/${i + 1}`, name, 592, y + 17, 640, 22, 14, colors.title, false);
    text(frame, `协议清单/查看/${i + 1}`, "查看", 1390, y + 17, 36, 22, 14, "4766FF", true);
    if (i < 4) text(frame, `协议清单/撤回/${i + 1}`, "撤回", 1456, y + 17, 36, 22, 14, colors.danger, true);
  });
}

function addPreference(frame) {
  addSidebar(frame, "preference");
  addSurface(frame, "品种偏好设置", "请根据您的偏好选择期货品种，我们将为您提供更精准的行业资讯");
  text(frame, "偏好设置/开关标签", "偏好设置", 1430, 146, 76, 22, 14, colors.body, true);
  switchNode(frame, 1516, 142, false);
  const tabs = ["上期所", "大商所", "郑商所", "广期所", "上期能源", "中金所"];
  let x = 482;
  tabs.forEach((tab, i) => {
    tag(frame, tab, x, 219, i === 4 ? 92 : 78, i === 0);
    x += i === 4 ? 104 : 90;
  });
  const tags = ["镍", "合成橡胶", "胶版印刷纸", "石油沥青", "天然橡胶", "铜", "纸浆", "线材", "氧化铝", "不锈钢", "铝", "锌", "锡", "铅", "黄金", "燃料油", "螺纹钢", "白银"];
  tags.forEach((name, i) => {
    const col = i % 6;
    const row = Math.floor(i / 6);
    tag(frame, name, 482 + col * 136, 289 + row * 54, 112, name === "合成橡胶" || name === "燃料油");
  });
  checkbox(frame, 482, 482, false);
  text(frame, "偏好设置/自动应用", "自动应用偏好至新上线模块", 508, 478, 260, 24, 14, colors.body, false);
  button(frame, "确定", 1000, 544, 88, "primary");
}

function addDomain(frame) {
  addSidebar(frame, "domain");
  addSurface(frame, "开通企业域");
  const steps = ["个人信息采集", "个人身份认证", "企业信息采集", "企业身份识别", "纸张材料准备"];
  steps.forEach((step, i) => {
    const x = 506 + i * 210;
    rect(frame, `企业域/步骤圆点/${i + 1}`, x, 245, 34, 34, i === 0 ? colors.success : i === 1 ? colors.blue : colors.white, 17, i > 1 ? colors.borderStrong : null);
    text(frame, `企业域/步骤数字/${i + 1}`, i === 0 ? "✓" : String(i + 1), x, 251, 34, 22, 14, i > 1 ? colors.body : colors.white, true).textAlignHorizontal = "CENTER";
    text(frame, `企业域/步骤文字/${i + 1}`, step, x + 44, 251, 130, 22, 14, i === 1 ? colors.blue : colors.body, i === 1);
    if (i < 4) line(frame, `企业域/步骤线/${i + 1}`, x + 170, 262, 42, 1, colors.borderStrong);
  });
  rect(frame, "企业域/二维码", 785, 384, 180, 180, colors.white, 8, colors.borderStrong);
  for (let i = 0; i < 7; i++) {
    rect(frame, `企业域/二维码块/${i}`, 805 + (i % 3) * 48, 404 + Math.floor(i / 3) * 48, 28, 28, colors.title, 3);
  }
  text(frame, "企业域/提示", "提示信息：请通过微信扫描二维码发起人脸识别认证身份", 630, 594, 500, 24, 14, colors.title, true).textAlignHorizontal = "CENTER";
  button(frame, "上一步", 840, 665, 88, "outline");
  button(frame, "保存并下一步", 944, 665, 128, "primary");
}

function addMessage(frame) {
  addSidebar(frame, "message");
  addSurface(frame, "通知设置");
  const rows = [["站内信：", true, "注：为确保您能及时收到重要通知并符合合规要求，站内信提醒功能默认开启且暂不支持关闭"], ["天玑App：", true, ""], ["微信：", false, ""]];
  rows.forEach(([label, on, note], i) => {
    const y = 230 + i * 92;
    text(frame, `通知设置/标签/${i}`, label, 482, y, 120, 22, 14, colors.body, true);
    switchNode(frame, 628, y - 4, on);
    if (note) text(frame, "通知设置/说明", note, 482, y + 42, 760, 22, 13, colors.muted, false);
  });
  button(frame, "确定", 1010, 555, 88, "primary");
}

function addManager(frame) {
  addSidebar(frame, "manager");
  addSurface(frame, "业务经理信息");
  rect(frame, "业务经理/卡片", 482, 219, 460, 132, colors.white, 16, colors.border);
  rect(frame, "业务经理/头像", 506, 245, 84, 84, "D9E6F3", 42);
  text(frame, "业务经理/姓名", "黄静杰", 618, 254, 120, 28, 18, colors.title, true);
  text(frame, "业务经理/职位", "华泰期货业务经理", 618, 292, 220, 22, 14, colors.body, false);
}

function addModal(frame) {
  rect(frame, "弹窗/遮罩", 0, 0, W, H, "142033", 0, null, 0.42);
  rect(frame, "弹窗/容器", 560, 118, 800, 824, colors.white, 18);
  text(frame, "弹窗/标题", "企业认证", 592, 146, 160, 28, 18, colors.title, true);
  text(frame, "弹窗/关闭", "×", 1316, 144, 24, 24, 22, colors.body, false).textAlignHorizontal = "CENTER";
  line(frame, "弹窗/标题线", 560, 188, 800, 1, colors.border);
  text(frame, "弹窗/企业类型", "企业类型：", 592, 222, 90, 22, 14, colors.body, true);
  [["一般企业", true], ["个体工商户", false], ["境外企业", false]].forEach(([label, on], i) => {
    radio(frame, 682 + i * 138, 224, on);
    text(frame, `弹窗/类型/${label}`, label, 706 + i * 138, 220, 98, 22, 14, colors.title, false);
  });
  const fields = [
    ["* 工作证明", "点击或拖拽上传工作证明", 592, 278, 704, 86, true],
    ["* 姓名：", "曹端红", 592, 392, 704, 40],
    ["* 机构/公司名称：", "奕丰基金销售有限公司", 592, 464, 704, 40],
    ["* 部门：", "其他", 592, 536, 336, 40],
    ["* 职位：", "其他", 960, 536, 336, 40],
    ["* 常驻办公地：", "北京市", 592, 608, 704, 40],
    ["手机号码：", "184****1472", 592, 680, 336, 40],
    ["* 邮箱：", "dcao0228@foxmail.com", 960, 680, 336, 40]
  ];
  fields.forEach(([label, value, x, y, w, h, upload]) => {
    text(frame, `弹窗/字段/${label}`, label, x, y - 24, w, 22, 14, label.startsWith("*") ? colors.danger : colors.body, true);
    rect(frame, `弹窗/输入/${label}`, x, y, w, h, upload ? "F6F8FD" : colors.white, 8, colors.borderStrong);
    text(frame, `弹窗/值/${label}`, value, x + 14, y + (upload ? 31 : 10), w - 28, 22, 14, upload ? colors.muted : colors.title, false).textAlignHorizontal = upload ? "CENTER" : "LEFT";
  });
  button(frame, "提交认证", 904, 792, 112, "primary");
}

function createPage(name, x, builder) {
  const frame = figma.createFrame();
  frame.name = name;
  frame.x = x;
  frame.y = 0;
  frame.resize(W, H);
  frame.fills = [rgb(colors.page)];
  figma.currentPage.appendChild(frame);
  addTopbar(frame);
  builder(frame);
  return frame;
}

async function loadFonts() {
  const candidates = [
    { family: "Microsoft YaHei", regular: "Regular", bold: "Bold" },
    { family: "Arial", regular: "Regular", bold: "Bold" },
    { family: "Inter", regular: "Regular", bold: "Bold" }
  ];
  for (const item of candidates) {
    try {
      regularFont = { family: item.family, style: item.regular };
      boldFont = { family: item.family, style: item.bold };
      await figma.loadFontAsync(regularFont);
      await figma.loadFontAsync(boldFont);
      return;
    } catch (error) {
      regularFont = { family: "Inter", style: "Regular" };
      boldFont = { family: "Inter", style: "Bold" };
    }
  }
  await figma.loadFontAsync(regularFont);
  await figma.loadFontAsync(boldFont);
}

async function main() {
  await loadFonts();
  figma.currentPage.name = "我的账户 HTML 原型导入";
  const pages = [
    ["01 个人信息", addBasicInfo],
    ["02 企业认证", frame => addCompany(frame, false)],
    ["03 企业认证弹窗", frame => addCompany(frame, true)],
    ["04 账户注销", addAccount],
    ["05 系统协议清单", addAbout],
    ["06 品种偏好设置", addPreference],
    ["07 开通企业域", addDomain],
    ["08 通知设置", addMessage],
    ["09 业务经理信息", addManager]
  ];
  pages.forEach(([name, builder], index) => createPage(name, index * (W + 120), builder));
  figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
  figma.closePlugin("已导入 9 个我的账户原型画板。");
}

main();
