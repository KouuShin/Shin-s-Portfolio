import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { existsSync, readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Custom plugin to handle figma:asset imports
function figmaAssetPlugin() {
  return {
    name: 'figma-asset',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const assetPath = id.replace('figma:asset/', '');
        const fullPath = resolve(__dirname, 'assets', assetPath);
        
        // 如果文件不存在，返回一个虚拟 ID 用于 load hook 处理
        if (!existsSync(fullPath)) {
          // 对于 SYNAPSEAI_Coverpage.jpg，使用 dashboard 图片作为备用
          if (assetPath === 'SYNAPSEAI_Coverpage.jpg') {
            const fallbackPath = resolve(__dirname, 'assets', 'e47618a1b6ddb02fe667d91c25f8a32d559adeca.png');
            // 返回虚拟 ID，标记需要回退
            return `\0figma:asset:fallback:${fallbackPath}`;
          }
          // 其他文件不存在时也返回一个默认图片
          const fallbackPath = resolve(__dirname, 'assets', 'e47618a1b6ddb02fe667d91c25f8a32d559adeca.png');
          return `\0figma:asset:fallback:${fallbackPath}`;
        }
        
        return fullPath;
      }
    },
    load(id: string) {
      // 处理回退文件
      if (id.startsWith('\0figma:asset:fallback:')) {
        const fallbackPath = id.replace('\0figma:asset:fallback:', '');
        if (existsSync(fallbackPath)) {
          // 返回文件内容作为 URL
          const fileBuffer = readFileSync(fallbackPath);
          const base64 = fileBuffer.toString('base64');
          const ext = fallbackPath.split('.').pop() || 'png';
          const mimeType = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : 'image/png';
          return `export default "data:${mimeType};base64,${base64}";`;
        }
      }
      return null;
    }
  };
}

export default defineConfig({
  plugins: [react(), figmaAssetPlugin()],
  server: {
    port: 883
  }
});

