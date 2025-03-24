import { SnakeCellType } from "../entiries/SnakeCellType";

let currentSnakeCellType: SnakeCellType = SnakeCellType.Square;

export function getCurrentSnakeCellType(): SnakeCellType {
  return currentSnakeCellType;
}
