#!/bin/bash

# 执行 'npx vite build --minify false' 命令
npx vite build --minify false

# 将 dist 的文件移动到 build 文件夹下并重命名为 '[full]masonrySvelte.js'
mv dist/sveltegreasytest.user.js build/[full]masonrySvelte.js

# 执行 'npx vite build --minify' 命令
npx vite build --minify

# 将 dist 的文件移动到 build 文件夹下并重命名为 '[minify]masonrySvelte.js'
mv dist/sveltegreasytest.user.js build/[minify]masonrySvelte.js
