import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { existsSync } from 'fs';

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
        
        // 如果文件不存在，使用备用图片（用于向后兼容）
        if (!existsSync(fullPath)) {
          // 对于 SYNAPSEAI_Coverpage.jpg，使用 dashboard 图片作为备用
          if (assetPath === 'SYNAPSEAI_Coverpage.jpg') {
            return resolve(__dirname, 'assets', 'e47618a1b6ddb02fe667d91c25f8a32d559adeca.png');
          }
          // 其他文件不存在时也返回一个默认图片
          return resolve(__dirname, 'assets', 'e47618a1b6ddb02fe667d91c25f8a32d559adeca.png');
        }
        
        return fullPath;
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), figmaAssetPlugin()],
  server: {
    port: 883
  }
});

