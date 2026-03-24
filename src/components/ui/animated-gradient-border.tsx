import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

type AnimationMode = "auto-rotate" | "rotate-on-hover" | "stop-rotate-on-hover";

export interface BorderRotateProps extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
  children: ReactNode;
  className?: string;
  animationMode?: AnimationMode;
  animationSpeed?: number;
  gradientColors?: {
    primary: string;
    secondary: string;
    accent: string;
  };
  backgroundColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  style?: CSSProperties;
}

const defaultGradientColors = {
  primary: "#1a3d24",
  secondary: "#2d8f47",
  accent: "#c8ff00",
};

const BorderRotate = ({
  children,
  className = "",
  animationMode = "auto-rotate",
  animationSpeed = 8,
  gradientColors = defaultGradientColors,
  backgroundColor = "#050505",
  borderWidth = 2,
  borderRadius = 24,
  style = {},
  ...props
}: BorderRotateProps) => {
  const getAnimationClass = () => {
    switch (animationMode) {
      case "auto-rotate":
        return "gradient-border-auto";
      case "rotate-on-hover":
        return "gradient-border-rotate-on-hover";
      case "stop-rotate-on-hover":
        return "gradient-border-stop-on-hover";
      default:
        return "";
    }
  };

  const { primary, secondary, accent } = gradientColors;

  const combinedStyle: CSSProperties = {
    "--gradient-primary": primary,
    "--gradient-secondary": secondary,
    "--gradient-accent": accent,
    "--bg-color": backgroundColor,
    "--border-width": `${borderWidth}px`,
    "--border-radius": `${borderRadius}px`,
    "--animation-duration": `${animationSpeed}s`,
    border: `${borderWidth}px solid transparent`,
    borderRadius: `${borderRadius}px`,
    backgroundImage: `
      linear-gradient(${backgroundColor}, ${backgroundColor}),
      conic-gradient(
        from var(--gradient-angle, 0deg),
        ${primary} 0%,
        ${secondary} 28%,
        ${accent} 42%,
        ${secondary} 58%,
        ${accent} 72%,
        ${secondary} 86%,
        ${primary} 100%
      )
    `,
    backgroundClip: "padding-box, border-box",
    backgroundOrigin: "padding-box, border-box",
    ...style,
  } as CSSProperties;

  return (
    <div
      className={`gradient-border-component ${getAnimationClass()} ${className}`.trim()}
      style={combinedStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export { BorderRotate };
