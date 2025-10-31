import backgroundCircle from "figma:asset/background_circle.svg";

interface Bubble {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  opacity: number;
  animationPath: {
    moveX: number[];
    moveY: number[];
    rotate: number[];
    scale: number[];
  };
}

export function BackgroundBubbles() {
  // 创建不同大小和位置的泡泡 - 精心设计的布局和动画路径
  const bubbles: Bubble[] = [
    // 左上区域 - 大泡泡
    { 
      id: 1, size: 280, x: -8, y: 5, duration: 25, delay: 0, opacity: 0.12,
      animationPath: { moveX: [0, 15, -10, -5, 0], moveY: [0, -20, -35, -15, 0], rotate: [0, 1.5, -1, 0.8, 0], scale: [1, 1.02, 1.05, 1.01, 1] }
    },
    { 
      id: 2, size: 180, x: 12, y: 12, duration: 22, delay: 3, opacity: 0.1,
      animationPath: { moveX: [0, -12, 8, -8, 0], moveY: [0, -25, -45, -20, 0], rotate: [0, -1.2, 1.5, -0.6, 0], scale: [1, 1.03, 1.04, 1.02, 1] }
    },
    
    // 右上区域 - 中泡泡
    { 
      id: 3, size: 200, x: 88, y: 8, duration: 28, delay: 1.5, opacity: 0.11,
      animationPath: { moveX: [0, -18, 12, -10, 0], moveY: [0, -28, -40, -18, 0], rotate: [0, -1.8, 1.2, -0.9, 0], scale: [1, 1.025, 1.05, 1.015, 1] }
    },
    { 
      id: 4, size: 140, x: 75, y: 25, duration: 20, delay: 4, opacity: 0.09,
      animationPath: { moveX: [0, 10, -15, 5, 0], moveY: [0, -22, -38, -16, 0], rotate: [0, 1.1, -1.3, 0.7, 0], scale: [1, 1.02, 1.04, 1.01, 1] }
    },
    
    // 中间区域 - 小泡泡增加层次感
    { 
      id: 5, size: 120, x: 45, y: 35, duration: 18, delay: 2, opacity: 0.08,
      animationPath: { moveX: [0, -8, 14, -6, 0], moveY: [0, -18, -32, -14, 0], rotate: [0, -0.9, 1.1, -0.5, 0], scale: [1, 1.015, 1.03, 1.01, 1] }
    },
    { 
      id: 6, size: 160, x: 30, y: 50, duration: 24, delay: 0.8, opacity: 0.1,
      animationPath: { moveX: [0, 14, -11, -7, 0], moveY: [0, -26, -42, -19, 0], rotate: [0, 1.3, -1.1, 0.6, 0], scale: [1, 1.025, 1.045, 1.018, 1] }
    },
    { 
      id: 7, size: 100, x: 60, y: 55, duration: 16, delay: 3.5, opacity: 0.07,
      animationPath: { moveX: [0, 9, -13, 4, 0], moveY: [0, -16, -30, -12, 0], rotate: [0, 0.8, -1.2, 0.4, 0], scale: [1, 1.02, 1.035, 1.01, 1] }
    },
    
    // 左下区域
    { 
      id: 8, size: 220, x: -5, y: 75, duration: 26, delay: 1.2, opacity: 0.11,
      animationPath: { moveX: [0, 16, -9, -11, 0], moveY: [0, -24, -38, -17, 0], rotate: [0, 1.4, -0.8, 0.9, 0], scale: [1, 1.023, 1.048, 1.017, 1] }
    },
    { 
      id: 9, size: 150, x: 15, y: 82, duration: 21, delay: 2.8, opacity: 0.09,
      animationPath: { moveX: [0, -11, 13, -9, 0], moveY: [0, -21, -36, -15, 0], rotate: [0, -1.1, 1.4, -0.7, 0], scale: [1, 1.022, 1.042, 1.014, 1] }
    },
    
    // 右下区域
    { 
      id: 10, size: 190, x: 85, y: 70, duration: 23, delay: 1.8, opacity: 0.1,
      animationPath: { moveX: [0, -14, 10, -8, 0], moveY: [0, -25, -39, -18, 0], rotate: [0, -1.3, 1, -0.8, 0], scale: [1, 1.024, 1.046, 1.016, 1] }
    },
    { 
      id: 11, size: 130, x: 72, y: 88, duration: 19, delay: 4.5, opacity: 0.08,
      animationPath: { moveX: [0, 7, -12, 3, 0], moveY: [0, -19, -34, -13, 0], rotate: [0, 0.9, -1.1, 0.5, 0], scale: [1, 1.021, 1.038, 1.012, 1] }
    },
    
    // 底部中央 - 大泡泡作为焦点
    { 
      id: 12, size: 240, x: 50, y: 92, duration: 27, delay: 0.5, opacity: 0.12,
      animationPath: { moveX: [0, 17, -8, -13, 0], moveY: [0, -27, -41, -20, 0], rotate: [0, 1.6, -0.9, 1, 0], scale: [1, 1.026, 1.05, 1.019, 1] }
    },
  ];

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            opacity: bubble.opacity,
            animation: `float-${bubble.id} ${bubble.duration}s ease-in-out infinite`,
            animationDelay: `${bubble.delay}s`,
            willChange: "transform",
          }}
        >
          <img
            src={backgroundCircle}
            alt=""
            className="w-full h-full object-contain select-none"
            draggable={false}
            style={{
              filter: "blur(1px)",
            }}
          />
        </div>
      ))}
      
      <style>{`
        ${bubbles.map((bubble) => `
          @keyframes float-${bubble.id} {
            0%, 100% {
              transform: translate(${bubble.animationPath.moveX[0]}px, ${bubble.animationPath.moveY[0]}px) rotate(${bubble.animationPath.rotate[0]}deg) scale(${bubble.animationPath.scale[0]});
            }
            25% {
              transform: translate(${bubble.animationPath.moveX[1]}px, ${bubble.animationPath.moveY[1]}px) rotate(${bubble.animationPath.rotate[1]}deg) scale(${bubble.animationPath.scale[1]});
            }
            50% {
              transform: translate(${bubble.animationPath.moveX[2]}px, ${bubble.animationPath.moveY[2]}px) rotate(${bubble.animationPath.rotate[2]}deg) scale(${bubble.animationPath.scale[2]});
            }
            75% {
              transform: translate(${bubble.animationPath.moveX[3]}px, ${bubble.animationPath.moveY[3]}px) rotate(${bubble.animationPath.rotate[3]}deg) scale(${bubble.animationPath.scale[3]});
            }
          }
        `).join('')}
      `}</style>
    </div>
  );
}

