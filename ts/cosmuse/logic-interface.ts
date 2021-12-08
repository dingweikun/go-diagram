/**
 * logic 模型定义
 */

export type SignalType = "Analog" | "Digital";

export interface ILogicPortDefine {
  readonly portId: string; // 大写字母+数字
  readonly type: SignalType;
  readonly isIn: false;
}

export interface ILogicNodeDefine {
  readonly category: string; // 大写字母+下划线
  readonly descr: string;
  readonly ports: ILogicPortDefine[];
}

interface IDesireStyle {
  readonly wide?: number;
  readonly tall?: number;
  readonly bColor?: string;
  readonly fColor?: string;
}

export type ILogicNodeTempDefine = ILogicNodeDefine & IDesireStyle;
