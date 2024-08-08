export const generateSinPath = (
  amplitude: number,
  frequency: number,
  width: number,
  height: number,
  segments: number,
): string => {
  if (width === 0) return "";
  if (height === 0) return "";

  let pathData = `M 0 ${height / 2}`;
  for (let i = 0; i <= segments; i++) {
    const x = (i / segments) * width;
    const y =
      height / 2 +
      amplitude * Math.sin((i / segments) * frequency * 2 * Math.PI);
    pathData += ` L ${x} ${y}`;
  }
  return pathData;
};

export const generateVerticalSinPath = (
  amplitude: number,
  frequency: number,
  width: number,
  height: number,
  segments: number,
): string => {
  if (width === 0) return "";
  if (height === 0) return "";

  let pathData = `M ${width / 2} 0`;
  for (let i = 0; i <= segments; i++) {
    const y = (i / segments) * height;
    const x =
      width / 2 +
      amplitude * Math.sin((i / segments) * frequency * 2 * Math.PI);
    pathData += ` L ${x} ${y}`;
  }
  return pathData;
};
