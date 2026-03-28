// app/utils/parser.ts

export function parseCharacterText(text: string): Record<string, number> {
  const result: Record<string, number> = {};
  
  // 正则表达式：匹配 [中文或英文关键词] 后面跟着 [数字]
  const regex = /([ \u4e00-\u9fa5a-zA-Z]+)(\d+)/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    let key = match[1].trim().toLowerCase();
    let value = parseInt(match[2]);
    
    // 同义词归一化（你可以根据需要在这里添加更多，比如 敏捷/dex）
    if (["str", "力量"].includes(key)) key = "力量";
    if (["dex", "敏捷"].includes(key)) key = "敏捷";
    if (["pow", "意志", "精神"].includes(key)) key = "意志";
    if (["con", "体质"].includes(key)) key = "体质";
    if (["app", "外貌"].includes(key)) key = "外貌";
    if (["edu", "教育"].includes(key)) key = "教育";
    if (["siz", "体型"].includes(key)) key = "体型";
    if (["int", "智力", "灵感"].includes(key)) key = "智力";
    if (["san", "san值", "理智", "理智值"].includes(key)) key = "理智";
    if (["luck", "幸运", "运气"].includes(key)) key = "幸运";
    if (["hp", "体力"].includes(key)) key = "体力（HP）";
    if (["mp", "魔法"].includes(key)) key = "魔法（MP）";
    if (["克苏鲁", "克苏鲁神话", "cm"].includes(key)) key = "克苏鲁神话";
    if (["计算机", "计算机使用", "电脑"].includes(key)) key = "计算机使用";
    if (["重型操作", "重型机械", "操作重型机械", "重型"].includes(key)) key = "操作重型机械";
    if (["汽车", "驾驶", "汽车驾驶"].includes(key)) key = "汽车驾驶";
    if (["开锁", "撬锁", "锁匠"].includes(key)) key = "锁匠";
    if (["领航", "导航"].includes(key)) key = "导航";
    if (["博物学", "自然学"].includes(key)) key = "博物学";
    result[key] = value;
  }
  
  return result;
}