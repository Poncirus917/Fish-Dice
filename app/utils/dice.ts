// app/utils/dice.ts

export interface RollResult {
  roll: number;
  level: "大成功" | "极难成功" | "困难成功" | "成功" | "失败" | "大失败";
}

export function cocCheck(
  target: number, 
  successMax: number = 3, // 房规：大成功上限默认3
  fumbleMin: number = 98  // 房规：大失败下限默认98
): RollResult {
  const roll = Math.floor(Math.random() * 100) + 1;

  if (roll >= fumbleMin) return { roll, level: "大失败" };

  if (roll <= target) {
    if (roll <= successMax) return { roll, level: "大成功" };
    if (roll <= target / 5) return { roll, level: "极难成功" };
    if (roll <= target / 2) return { roll, level: "困难成功" };
    return { roll, level: "成功" };
  }

  return { roll, level: "失败" };
}