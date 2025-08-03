export enum FieldingPosition {
    Catcher = "C",
    Pitcher = "P",
    FirstBase = "1B",
    SecondBase = "2B",
    Shortstop = "SS",
    ThirdBase = "3B",
    LeftField = "LF",
    CenterField = "CF",
    RightField = "RF"
}

//Store Position Categories. Having familiarity with another position in the same position category should bring players range up to scratch much more quickly
export enum PositionCategory {
  Catcher = "Catcher",
  Pitcher = "Pitcher",
  FirstBase = "FirstBase",
  MiddleInfield = "MiddleInfield",
  ThirdBase = "ThirdBase",
  Outfield = "Outfield"
}

// 🔁 Map: Individual position → Category
export const PositionToCategoryMap = new Map<FieldingPosition, PositionCategory>([
  [FieldingPosition.Catcher, PositionCategory.Catcher],
  [FieldingPosition.Pitcher, PositionCategory.Pitcher],
  [FieldingPosition.FirstBase, PositionCategory.FirstBase],
  [FieldingPosition.SecondBase, PositionCategory.MiddleInfield],
  [FieldingPosition.Shortstop, PositionCategory.MiddleInfield],
  [FieldingPosition.ThirdBase, PositionCategory.ThirdBase],
  [FieldingPosition.LeftField, PositionCategory.Outfield],
  [FieldingPosition.CenterField, PositionCategory.Outfield],
  [FieldingPosition.RightField, PositionCategory.Outfield],
]);

// 🧠 Utility function for checking a position's category
export function getPositionCategory(position: FieldingPosition): PositionCategory | undefined {
  return PositionToCategoryMap.get(position);
}
