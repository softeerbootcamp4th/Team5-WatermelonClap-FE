export type Device =
  | "ANDROID"
  | "IPHONE"
  | "CHROME"
  | "SAFARI"
  | "EDGE"
  | "EDGE_CHROMIUM"
  | "OPERA"
  | "FIREFOX"
  | "IE"
  | "OTHER";

export const checkDeviceType = (): Device => {
  const agent = navigator.userAgent.toLowerCase();

  switch (true) {
    case agent.indexOf("android") > -1:
      return "ANDROID";

    case agent.indexOf("iphone") > -1:
    case agent.indexOf("ipad") > -1:
    case agent.indexOf("ipod") > -1:
      return "IPHONE";

    case agent.indexOf("edg/") > -1:
      return "EDGE_CHROMIUM"; // Edge (Chromium-based)

    case agent.indexOf("edge") > -1:
      return "EDGE"; // MS Edge

    case agent.indexOf("opr") > -1:
      return "OPERA"; // Opera

    case agent.indexOf("chrome") > -1:
      return "CHROME"; // Chrome

    case agent.indexOf("trident") > -1:
      return "IE"; // Internet Explorer

    case agent.indexOf("firefox") > -1:
      return "FIREFOX"; // Mozilla Firefox

    case agent.indexOf("safari") > -1:
      return "SAFARI"; // Safari

    default:
      return "OTHER";
  }
};

export const isCardAnimationSupportedOnDevice = (): boolean => {
  const deviceType = checkDeviceType();
  if (deviceType === "IPHONE" || deviceType === "SAFARI") return false;
  return true;
};
