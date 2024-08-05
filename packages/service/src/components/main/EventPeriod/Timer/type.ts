export interface IAnimatedCardProps {
  current: number | string;
  previous: number | string;
  title: "days" | "hours" | "mins" | "secs";
}

export interface IAnimatedCardBottomProps {
  unit: number | string;
  title: "days" | "hours" | "mins" | "secs";
}

export interface IFlipContainerProps {
  number: number;
  title: "days" | "hours" | "mins" | "secs";
}

export interface IStaticCardProps {
  position: "upper" | "lower";
  unit: number | string;
  title: "days" | "hours" | "mins" | "secs";
}
