/**
 * FONTPLUS の型定義
 * JavaScript API: https://fontplus.jp/usage/javascript-api/method
 */

interface FONTPLUS {
  config: (options: ConfigOptions) => void;
  reload: (init?: boolean) => void;
  attachCompleteEvent: (callback: (result: { code: number }) => void) => void;
  targetSelector: (selector: string) => void;
  load: (
    fontdata: Array<{ fontname: string; nickname?: string; text: string }>,
    callback: (result: { code: number; time: number; [key: string]: any }) => void,
    tagid?: string
  ) => void;
  isloading: () => boolean;
  setFonts: (fontfamily: string[], mode?: string[]) => void;
  ontimeout: (callback: () => void) => void;
  async: () => void;
  start: () => void;
  size: (size: boolean) => void;
}

interface ConfigOptions {
  selector?: string;
  complete?: boolean;
  callbacks?: { [key: string]: () => void };
  timeoutfunc?: () => void;
  sync?: boolean;
  size?: boolean;
}

// グローバルスコープで FONTPLUS オブジェクトが存在することを明示
declare var FONTPLUS: FONTPLUS;
  declare var FONTPLUS: FONTPLUS;