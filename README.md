# 影视天堂 - 电影网站

一个现代化的电影推荐网站，提供电影和电视剧的浏览、搜索和详情查看功能。

## 功能特色

### 🎬 电影展示
- 热门电影展示网格
- 电影海报、标题、年份、评分和分类信息
- 点击电影卡片查看详细信息

### 📺 电视剧专区
- 热门电视剧展示
- 季数信息显示
- 详细剧情介绍

### 🔍 搜索功能
- 支持按电影标题搜索
- 支持按演员姓名搜索
- 支持按导演姓名搜索
- 实时搜索建议

### 🏷️ 分类筛选
- 动作片
- 喜剧片
- 剧情片
- 恐怖片
- 爱情片
- 科幻片

### 📱 响应式设计
- 完美适配桌面端、平板和手机
- 移动端友好的导航菜单
- 触摸手势支持

### ✨ 现代化UI
- 深色主题设计
- 流畅的动画效果
- 毛玻璃效果
- 悬停交互效果

## 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 现代样式和动画
- **JavaScript (ES6+)** - 交互功能
- **Font Awesome** - 图标库
- **Google Fonts** - 字体库
- **Unsplash** - 高质量图片

## 文件结构

```
movie-website/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript功能
└── README.md           # 项目说明
```

## 快速开始

1. **下载项目文件**
   ```bash
   # 确保所有文件在同一目录下
   ls -la
   # 应该看到: index.html, styles.css, script.js
   ```

2. **运行网站**
   
   方法一：直接打开
   ```bash
   # 双击 index.html 文件或者
   open index.html
   ```
   
   方法二：使用本地服务器（推荐）
   ```bash
   # 使用 Python
   python -m http.server 8000
   # 或者使用 Python 3
   python3 -m http.server 8000
   
   # 使用 Node.js (需要先安装 http-server)
   npx http-server
   
   # 然后在浏览器中访问 http://localhost:8000
   ```

3. **访问网站**
   - 在浏览器中打开 `http://localhost:8000`
   - 或直接双击 `index.html` 文件

## 主要功能介绍

### 导航栏
- 固定在页面顶部
- 包含网站logo和主要导航链接
- 响应式移动端菜单

### 主横幅
- 全屏背景图片
- 网站标题和描述
- 集成搜索功能

### 电影展示区
- 网格布局展示电影卡片
- 分类筛选按钮
- 悬停效果和动画

### 电影详情模态框
- 点击电影卡片弹出详情
- 包含海报、基本信息、剧情简介
- 支持键盘和触摸操作关闭

### 分类浏览
- 6个主要电影分类
- 图标化设计
- 点击跳转到对应筛选结果

## 自定义配置

### 添加新电影
在 `script.js` 文件中的 `moviesData` 数组中添加新的电影对象：

```javascript
{
    id: 13,
    title: "新电影标题",
    year: 2024,
    genre: "action", // action, comedy, drama, horror, romance, sci-fi
    rating: 8.5,
    poster: "图片URL",
    description: "电影描述",
    cast: "主要演员",
    director: "导演"
}
```

### 修改样式
在 `styles.css` 文件中修改：
- 颜色主题：修改 CSS 变量中的颜色值
- 布局：调整网格和间距
- 动画：修改 transition 和 animation 属性

### 添加新功能
在 `script.js` 文件中可以添加：
- 新的筛选选项
- 评分功能
- 收藏功能
- 用户评论

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 性能优化

- 图片懒加载
- 搜索防抖动
- CSS 动画硬件加速
- 响应式图片加载

## 许可证

MIT License - 可自由使用和修改

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

---

**影视天堂** - 发现精彩电影世界 🎬