// 电影数据
const moviesData = [
    {
        id: 1,
        title: "复仇者联盟：终局之战",
        year: 2019,
        genre: "action",
        rating: 8.4,
        poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "超级英雄们为了拯救宇宙，与灭霸展开最终决战。这是一部史诗级的超级英雄电影，汇集了漫威宇宙中的众多英雄。",
        cast: "小罗伯特·唐尼, 克里斯·埃文斯, 马克·鲁法洛, 克里斯·海姆斯沃斯",
        director: "安东尼·罗素, 乔·罗素"
    },
    {
        id: 2,
        title: "泰坦尼克号",
        year: 1997,
        genre: "romance",
        rating: 7.9,
        poster: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "一个关于爱情与悲剧的永恒故事，发生在著名的泰坦尼克号沉船事件中。杰克和露丝的爱情故事感动了全世界。",
        cast: "莱昂纳多·迪卡普里奥, 凯特·温斯莱特",
        director: "詹姆斯·卡梅隆"
    },
    {
        id: 3,
        title: "盗梦空间",
        year: 2010,
        genre: "drama",
        rating: 8.8,
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "一部关于梦境与现实的科幻悬疑片。多姆·柯布是一个技艺精湛的小偷，专门从他人梦境中窃取秘密。",
        cast: "莱昂纳多·迪卡普里奥, 玛丽昂·歌迪亚, 汤姆·哈迪",
        director: "克里斯托弗·诺兰"
    },
    {
        id: 4,
        title: "小丑",
        year: 2019,
        genre: "drama",
        rating: 8.4,
        poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "一个关于小丑起源的黑暗故事。亚瑟·弗莱克是一个失败的喜剧演员，逐渐堕落成为哥谭市的犯罪王子。",
        cast: "华金·菲尼克斯, 罗伯特·德尼罗",
        director: "托德·菲利普斯"
    },
    {
        id: 5,
        title: "阿甘正传",
        year: 1994,
        genre: "drama",
        rating: 8.8,
        poster: "https://images.unsplash.com/photo-1489599843714-2d8f2c1d2b6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "一个智商只有75的男人的传奇人生故事。阿甘用他的善良和坚持，创造了一个又一个奇迹。",
        cast: "汤姆·汉克斯, 罗宾·怀特",
        director: "罗伯特·泽米吉斯"
    },
    {
        id: 6,
        title: "速度与激情9",
        year: 2021,
        genre: "action",
        rating: 5.2,
        poster: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "多姆和他的家族面临着前所未有的威胁，这次的敌人是多姆失散多年的弟弟雅各布。",
        cast: "范·迪塞尔, 米歇尔·罗德里格兹, 约翰·塞纳",
        director: "林诣彬"
    },
    {
        id: 7,
        title: "寄生虫",
        year: 2019,
        genre: "drama",
        rating: 8.6,
        poster: "https://images.unsplash.com/photo-1594736797933-d0d59bf4b3d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "一部关于社会阶层的黑色喜剧。贫困家庭金家通过欺骗手段进入富有的朴家工作，引发了一系列意想不到的事件。",
        cast: "宋康昊, 李善均, 崔宇植",
        director: "奉俊昊"
    },
    {
        id: 8,
        title: "蜘蛛侠：英雄无归",
        year: 2021,
        genre: "action",
        rating: 8.2,
        poster: "https://images.unsplash.com/photo-1635863138275-d9864d481abb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "彼得·帕克的身份被曝光后，他寻求奇异博士的帮助，但咒语出错，打开了多元宇宙的大门。",
        cast: "汤姆·赫兰德, 赞达亚, 本尼迪克特·康伯巴奇",
        director: "乔·沃茨"
    },
    {
        id: 9,
        title: "当幸福来敲门",
        year: 2006,
        genre: "drama",
        rating: 8.0,
        poster: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "一个关于父爱和坚持的励志故事。克里斯·加德纳在人生最低谷时，依然没有放弃对美好生活的追求。",
        cast: "威尔·史密斯, 贾登·史密斯",
        director: "加布里埃莱·穆奇诺"
    },
    {
        id: 10,
        title: "死侍",
        year: 2016,
        genre: "comedy",
        rating: 8.0,
        poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "一个嘴炮超级英雄的诞生故事。韦德·威尔逊在实验中获得了超能力，但也毁了容，于是他踏上了复仇之路。",
        cast: "瑞安·雷诺兹, 莫蕾娜·巴卡琳",
        director: "蒂姆·米勒"
    },
    {
        id: 11,
        title: "闪灵",
        year: 1980,
        genre: "horror",
        rating: 8.4,
        poster: "https://images.unsplash.com/photo-1520637836862-4d197d17c35a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "一部经典的心理恐怖片。杰克·托兰斯在一家偏僻的酒店担任冬季看守员，逐渐陷入疯狂。",
        cast: "杰克·尼科尔森, 雪莉·杜瓦尔",
        director: "斯坦利·库布里克"
    },
    {
        id: 12,
        title: "我的女友是机器人",
        year: 2008,
        genre: "romance",
        rating: 7.0,
        poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "一个关于人与机器人之间爱情的科幻浪漫故事。次郎遇到了一个来自未来的机器人女友。",
        cast: "绫濑遥, 小出惠介",
        director: "郭在容"
    }
];

// 电视剧数据
const seriesData = [
    {
        id: 1,
        title: "权力的游戏",
        year: 2011,
        genre: "drama",
        rating: 9.3,
        poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "在维斯特洛大陆上，七个王国为了争夺铁王座而展开的权力斗争。",
        cast: "艾米莉亚·克拉克, 基特·哈灵顿, 彼特·丁拉基",
        seasons: 8
    },
    {
        id: 2,
        title: "绝命毒师",
        year: 2008,
        genre: "drama",
        rating: 9.5,
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "一个高中化学老师被诊断出癌症后，开始制造毒品来为家人留下财产。",
        cast: "布莱恩·克兰斯顿, 亚伦·保尔",
        seasons: 5
    },
    {
        id: 3,
        title: "鱿鱼游戏",
        year: 2021,
        genre: "drama",
        rating: 8.0,
        poster: "https://images.unsplash.com/photo-1594736797933-d0d59bf4b3d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "456名债务缠身的参赛者为了巨额奖金，参加一系列致命的童年游戏。",
        cast: "李政载, 朴海秀, 魏嘏隽",
        seasons: 1
    },
    {
        id: 4,
        title: "怪奇物语",
        year: 2016,
        genre: "horror",
        rating: 8.7,
        poster: "https://images.unsplash.com/photo-1520637836862-4d197d17c35a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "在1980年代的印第安纳州霍金斯镇，一群孩子遇到了超自然现象。",
        cast: "米莉·博比·布朗, 芬恩·沃尔夫哈德",
        seasons: 4
    },
    {
        id: 5,
        title: "纸牌屋",
        year: 2013,
        genre: "drama",
        rating: 8.7,
        poster: "https://images.unsplash.com/photo-1489599843714-2d8f2c1d2b6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "一个冷酷无情的政治家弗兰克·安德伍德在华盛顿特区的权力游戏。",
        cast: "凯文·史派西, 罗宾·怀特",
        seasons: 6
    },
    {
        id: 6,
        title: "老友记",
        year: 1994,
        genre: "comedy",
        rating: 8.9,
        poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "六个好朋友在纽约的生活、爱情和友谊故事。",
        cast: "詹妮弗·安妮斯顿, 柯特妮·考克斯, 丽莎·库卓",
        seasons: 10
    }
];

// DOM元素
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const moviesGrid = document.getElementById('moviesGrid');
const seriesGrid = document.getElementById('seriesGrid');
const categoryBtns = document.querySelectorAll('.category-btn');
const genreCards = document.querySelectorAll('.genre-card');
const modal = document.getElementById('movieModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    displayMovies(moviesData);
    displaySeries(seriesData);
    initializeEventListeners();
    initializeScrollEffects();
});

// 事件监听器初始化
function initializeEventListeners() {
    // 移动端导航切换
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // 搜索功能
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // 分类筛选
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            filterMovies(category);
            
            // 更新活动按钮
            categoryBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    // 分类卡片点击
    genreCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const genre = e.currentTarget.dataset.genre;
            filterMovies(genre);
            document.getElementById('movies').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 模态框关闭
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // 平滑滚动导航
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // 关闭移动端菜单
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });
}

// 显示电影
function displayMovies(movies) {
    moviesGrid.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        moviesGrid.appendChild(movieCard);
    });
}

// 创建电影卡片
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <p class="movie-year">${movie.year}</p>
            <div class="movie-rating">
                <span class="stars">${generateStars(movie.rating)}</span>
                <span class="rating-text">${movie.rating}</span>
            </div>
            <p class="movie-genre">${getGenreText(movie.genre)}</p>
        </div>
    `;
    
    card.addEventListener('click', () => showMovieDetails(movie));
    return card;
}

// 显示电视剧
function displaySeries(series) {
    seriesGrid.innerHTML = '';
    series.forEach(show => {
        const seriesCard = createSeriesCard(show);
        seriesGrid.appendChild(seriesCard);
    });
}

// 创建电视剧卡片
function createSeriesCard(show) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
        <img src="${show.poster}" alt="${show.title}" class="movie-poster">
        <div class="movie-info">
            <h3 class="movie-title">${show.title}</h3>
            <p class="movie-year">${show.year} • ${show.seasons} 季</p>
            <div class="movie-rating">
                <span class="stars">${generateStars(show.rating)}</span>
                <span class="rating-text">${show.rating}</span>
            </div>
            <p class="movie-genre">${getGenreText(show.genre)}</p>
        </div>
    `;
    
    card.addEventListener('click', () => showSeriesDetails(show));
    return card;
}

// 生成星级评分
function generateStars(rating) {
    const fullStars = Math.floor(rating / 2);
    const halfStar = rating % 2 >= 1;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// 获取分类文本
function getGenreText(genre) {
    const genreMap = {
        'action': '动作',
        'comedy': '喜剧',
        'drama': '剧情',
        'horror': '恐怖',
        'romance': '爱情',
        'sci-fi': '科幻'
    };
    return genreMap[genre] || genre;
}

// 筛选电影
function filterMovies(category) {
    let filteredMovies;
    if (category === 'all') {
        filteredMovies = moviesData;
    } else {
        filteredMovies = moviesData.filter(movie => movie.genre === category);
    }
    displayMovies(filteredMovies);
}

// 搜索功能
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (!searchTerm) {
        displayMovies(moviesData);
        return;
    }
    
    const filteredMovies = moviesData.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm) ||
        movie.cast.toLowerCase().includes(searchTerm) ||
        movie.director.toLowerCase().includes(searchTerm)
    );
    
    displayMovies(filteredMovies);
    document.getElementById('movies').scrollIntoView({ behavior: 'smooth' });
}

// 显示电影详情
function showMovieDetails(movie) {
    modalBody.innerHTML = `
        <div class="modal-movie-header">
            <img src="${movie.poster}" alt="${movie.title}" class="modal-movie-poster">
            <div class="modal-movie-info">
                <h2 class="modal-movie-title">${movie.title}</h2>
                <div class="modal-movie-details">
                    <p><strong>年份:</strong> ${movie.year}</p>
                    <p><strong>分类:</strong> ${getGenreText(movie.genre)}</p>
                    <p><strong>评分:</strong> ${movie.rating}/10</p>
                    <p><strong>导演:</strong> ${movie.director}</p>
                </div>
                <div class="modal-movie-rating">
                    <span class="stars">${generateStars(movie.rating)}</span>
                    <span class="rating-text">${movie.rating}</span>
                </div>
            </div>
        </div>
        <div class="modal-movie-description">
            <h3>剧情简介</h3>
            <p>${movie.description}</p>
        </div>
        <div class="modal-movie-cast">
            <h3>主要演员</h3>
            <p>${movie.cast}</p>
        </div>
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 显示电视剧详情
function showSeriesDetails(show) {
    modalBody.innerHTML = `
        <div class="modal-movie-header">
            <img src="${show.poster}" alt="${show.title}" class="modal-movie-poster">
            <div class="modal-movie-info">
                <h2 class="modal-movie-title">${show.title}</h2>
                <div class="modal-movie-details">
                    <p><strong>年份:</strong> ${show.year}</p>
                    <p><strong>季数:</strong> ${show.seasons} 季</p>
                    <p><strong>分类:</strong> ${getGenreText(show.genre)}</p>
                    <p><strong>评分:</strong> ${show.rating}/10</p>
                </div>
                <div class="modal-movie-rating">
                    <span class="stars">${generateStars(show.rating)}</span>
                    <span class="rating-text">${show.rating}</span>
                </div>
            </div>
        </div>
        <div class="modal-movie-description">
            <h3>剧情简介</h3>
            <p>${show.description}</p>
        </div>
        <div class="modal-movie-cast">
            <h3>主要演员</h3>
            <p>${show.cast}</p>
        </div>
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 关闭模态框
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 滚动效果
function initializeScrollEffects() {
    // 导航栏滚动效果
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        }
    });

    // 元素进入视窗动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察所有需要动画的元素
    document.querySelectorAll('.movie-card, .genre-card, .feature').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 添加一些实用函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 优化搜索性能
const debouncedSearch = debounce(handleSearch, 300);
searchInput.addEventListener('input', debouncedSearch);

// 添加键盘导航支持
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// 添加触摸手势支持（移动端）
let touchStartY = 0;
let touchEndY = 0;

modal.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

modal.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    if (touchStartY - touchEndY > 50) {
        // 向上滑动，可以添加更多功能
    } else if (touchEndY - touchStartY > 50) {
        // 向下滑动，关闭模态框
        closeModal();
    }
});

// 预加载图片
function preloadImages() {
    const imageUrls = [...moviesData, ...seriesData].map(item => item.poster);
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// 页面加载完成后预加载图片
window.addEventListener('load', preloadImages);