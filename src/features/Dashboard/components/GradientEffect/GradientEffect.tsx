import React from "react";
import { generateColorVariations } from "@/src/utils";

interface GradientEffectProps {
  hexColor: string;
  id: number;
}

export const GradientEffect = ({
  hexColor,
  id,
}: GradientEffectProps): JSX.Element => {
  const { lighter, original, darker } = generateColorVariations(hexColor);

  return (
    <linearGradient id={`shine-gradient-${id}`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor={lighter} stopOpacity={1} />
      <stop offset="50%" stopColor={original} stopOpacity={0.8} />
      <stop offset="100%" stopColor={darker} stopOpacity={1} />
    </linearGradient>
  );
};
