import React, { useMemo } from 'react';

interface BobaParticle {
  id: number;
  size: number;
  leftPercent: number;
  duration: number;
  delay: number;
  swayPx: number;
  targetOpacity: number;
  blurAmount: number;
  type: 'classic-tapioca' | 'golden-caramel' | 'matcha-dew';
}

export const FloatingBobaParticles: React.FC = () => {
  // Pre-generate stable particle configuration for consistent, smooth rendering
  const particles: BobaParticle[] = useMemo(() => {
    const rawData = [
      { id: 1, size: 44, leftPercent: 7, duration: 18, delay: -4, swayPx: 30, targetOpacity: 0.38, blurAmount: 0.5, type: 'classic-tapioca' as const },
      { id: 2, size: 28, leftPercent: 16, duration: 22, delay: -12, swayPx: -25, targetOpacity: 0.28, blurAmount: 1, type: 'golden-caramel' as const },
      { id: 3, size: 52, leftPercent: 24, duration: 25, delay: -8, swayPx: 40, targetOpacity: 0.32, blurAmount: 0, type: 'classic-tapioca' as const },
      { id: 4, size: 22, leftPercent: 33, duration: 17, delay: -15, swayPx: -18, targetOpacity: 0.22, blurAmount: 1.5, type: 'golden-caramel' as const },
      { id: 5, size: 36, leftPercent: 42, duration: 21, delay: -3, swayPx: 25, targetOpacity: 0.30, blurAmount: 0.5, type: 'classic-tapioca' as const },
      { id: 6, size: 32, leftPercent: 55, duration: 19, delay: -9, swayPx: -30, targetOpacity: 0.26, blurAmount: 0.8, type: 'matcha-dew' as const },
      { id: 7, size: 48, leftPercent: 65, duration: 24, delay: -14, swayPx: 35, targetOpacity: 0.34, blurAmount: 0, type: 'classic-tapioca' as const },
      { id: 8, size: 26, leftPercent: 74, duration: 20, delay: -7, swayPx: -22, targetOpacity: 0.25, blurAmount: 1.2, type: 'golden-caramel' as const },
      { id: 9, size: 50, leftPercent: 83, duration: 26, delay: -17, swayPx: 28, targetOpacity: 0.35, blurAmount: 0.3, type: 'classic-tapioca' as const },
      { id: 10, size: 38, leftPercent: 91, duration: 19, delay: -2, swayPx: -35, targetOpacity: 0.30, blurAmount: 0.6, type: 'classic-tapioca' as const },
      { id: 11, size: 20, leftPercent: 12, duration: 23, delay: -10, swayPx: 20, targetOpacity: 0.20, blurAmount: 2, type: 'golden-caramel' as const },
      { id: 12, size: 34, leftPercent: 48, duration: 27, delay: -6, swayPx: -20, targetOpacity: 0.24, blurAmount: 1, type: 'matcha-dew' as const },
      { id: 13, size: 42, leftPercent: 78, duration: 21, delay: -13, swayPx: 32, targetOpacity: 0.29, blurAmount: 0.4, type: 'classic-tapioca' as const },
    ];
    return rawData;
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-[3]"
      aria-hidden="true"
    >
      {particles.map((p) => {
        // Subtle boba pearl coloring based on type
        const getBobaGradient = () => {
          switch (p.type) {
            case 'golden-caramel':
              return 'radial-gradient(circle at 32% 28%, rgba(255, 230, 180, 0.7) 0%, rgba(244, 162, 97, 0.45) 28%, rgba(180, 85, 30, 0.6) 65%, rgba(60, 20, 10, 0.85) 100%)';
            case 'matcha-dew':
              return 'radial-gradient(circle at 32% 28%, rgba(220, 255, 200, 0.65) 0%, rgba(120, 180, 90, 0.4) 30%, rgba(55, 95, 45, 0.6) 70%, rgba(20, 40, 18, 0.85) 100%)';
            case 'classic-tapioca':
            default:
              return 'radial-gradient(circle at 30% 28%, rgba(255, 240, 220, 0.55) 0%, rgba(210, 120, 75, 0.3) 25%, rgba(65, 35, 25, 0.75) 60%, rgba(18, 12, 10, 0.95) 100%)';
          }
        };

        const getBorderColor = () => {
          switch (p.type) {
            case 'golden-caramel':
              return 'rgba(255, 210, 150, 0.35)';
            case 'matcha-dew':
              return 'rgba(180, 230, 160, 0.3)';
            case 'classic-tapioca':
            default:
              return 'rgba(255, 200, 170, 0.3)';
          }
        };

        return (
          <div
            key={p.id}
            className="absolute rounded-full animate-boba-float shadow-lg"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.leftPercent}%`,
              bottom: 0,
              background: getBobaGradient(),
              border: `1px solid ${getBorderColor()}`,
              boxShadow: `0 8px 24px -4px rgba(0, 0, 0, 0.6), inset 0 2px 5px rgba(255, 255, 255, 0.35)`,
              filter: p.blurAmount > 0 ? `blur(${p.blurAmount}px)` : undefined,
              animationDelay: `${p.delay}s`,
              // CSS custom properties passed to keyframe animation
              ['--boba-duration' as string]: `${p.duration}s`,
              ['--boba-sway' as string]: `${p.swayPx}px`,
              ['--boba-target-opacity' as string]: p.targetOpacity,
            }}
          >
            {/* Glossy Curved Crescent Reflection Highlight */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                top: '14%',
                left: '16%',
                width: '32%',
                height: '24%',
                background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 80%)',
                transform: 'rotate(-25deg)',
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
