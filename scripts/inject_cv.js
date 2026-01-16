// scripts/inject_cv.js

hexo.extend.injector.register('head_end', `
  <style>
    /* === 0. 基础设置 (已移除全局的顶部强制 0 间距，改为由 JS 动态控制) === */
    .home-article-list, .sidebar-content .statistics, .sidebar-content .author .label { display: none !important; }
    
    /* === 1. 头像特殊处理 === */
    /* 容器：必须是正方形，且不能被拉伸 */
    .sidebar-content .avatar {
        width: 118px !important;
        height: 118px !important;
        min-width: 118px !important; /* 锁死最小宽度 */
        min-height: 118px !important; /* 锁死最小高度 */
        margin: 20px auto 10px auto !important; /* 上下留空，居中 */
        border-radius: 50% !important;
        background: none !important;
        opacity: 1 !important;
        visibility: visible !important;
        display: flex !important; /* 确保内部图片居中 */
        justify-content: center;
        align-items: center;
        flex: 0 0 auto !important; /* 关键：禁止 Flex 布局拉伸它 */
    }

    /* 图片：填满正方形，裁切多余部分 */
    .sidebar-content .avatar img {
        display: block !important;
        width: 100% !important;
        height: 100% !important;
        border-radius: 50% !important;
        border: 4px solid #fff; /* 加粗一点白边更好看 */
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        object-fit: cover !important; /* 关键：保持比例，不压扁 */
        opacity: 1 !important;
        visibility: visible !important;
        max-width: none !important;
    }
    
    .article-header .author-label,
    .info .author-label { 
        display: none !important; 
    }

    /* === 2. 首页 Banner 样式 === */
    /* 注意：Banner 本身还是要去掉间距，但 body 的间距交给 JS 控制 */
    .home-banner { 
        margin-top: 0 !important; 
        padding-top: 0 !important;
        background-size: contain !important; 
        background-repeat: no-repeat !important; 
        background-position: center center !important; 
        background-color: #252525 !important; 
        min-height: 100vh !important; 
    }
    
    .home-banner .banner-title, .home-banner h1 { font-size: 5rem !important; font-weight: 800 !important; }
    .home-banner .subtitle, .home-banner .banner-subtitle, .home-banner .typed-cursor { font-size: 2rem !important; line-height: 1.5 !important; font-weight: 600 !important; }
    @media (max-width: 768px) {
      .home-banner .banner-title, .home-banner h1 { font-size: 3.5rem !important; }
      .home-banner .subtitle, .home-banner .banner-subtitle { font-size: 1.5rem !important; }
    }
    
    /* === 3. Bio 样式 === */
    .cv-sidebar-bio { padding: 0 10px 20px; text-align: center; font-size: 14px; line-height: 1.6; color: #555; animation: fadeIn 0.5s ease; }
    .cv-sidebar-tags { margin-top: 15px; display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; }
    .cv-sidebar-tag { background: rgba(0,0,0,0.05); padding: 4px 10px; border-radius: 6px; font-size: 12px; color: #666; font-weight: 500; }
    .cv-contact-btn { display: inline-block; margin-top: 20px; padding: 8px 20px; background: #3b82f6; color: white !important; border-radius: 20px; font-weight: bold; text-decoration: none; font-size: 13px; transition: background 0.3s; }
    .cv-contact-btn:hover { background: #2563eb; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }

    /* === 4. 简历卡片样式 === */
    .cv-home-sections { max-width: 900px; margin: 0 auto; padding: 0 10px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }    
    .cv-section-title { 
        font-size: 35px; 
        font-weight: 800; 
        margin: 40px 0 25px; 
        display: flex; 
        align-items: center; 
        gap: 12px; 
        padding-bottom: 15px;
        
        /* 修改为白色，并增加阴影 */
        color: #ffffff !important; 
        text-shadow: 0 4px 10px rgba(0,0,0,0.3);
        /* 下划线改为半透明白 */
        border-bottom: 2px solid rgba(255,255,255,0.3); 
    }
    /* === 关键：强制去掉第一个板块 (Education) 的顶部空白 === */
    .cv-edu-section .cv-section-title {
        margin-top: 0 !important;
    }
    .cv-grid { display: flex; flex-direction: column; gap: 20px; }
    .cv-card { display: flex; align-items: flex-start; gap: 20px; text-decoration: none !important; color: inherit; background: rgba(255,255,255,0.65); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(0,0,0,0.06); border-radius: 16px; padding: 24px; transition: all 0.3s ease; position: relative; z-index: 10; }
    .cv-card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,0.08); background: rgba(255,255,255,0.85); }
    .cv-logo-box { width: 60px; height: 60px; flex-shrink: 0; border-radius: 12px; background: #fff; display: flex; align-items: center; justify-content: center; overflow: hidden; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 4px 10px rgba(0,0,0,0.03); }
    .cv-logo-box img { width: 100% !important; height: 100% !important; object-fit: cover !important; padding: 0 !important; }
    .cv-logo-box i { font-size: 30px; opacity: 0.7; }
    .cv-content-box { flex: 1; min-width: 0; }
    .cv-card-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 4px; }
    .cv-card-subheader { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
    .cv-role { font-size: 19px; font-weight: 700; color: #111; line-height: 1.2; }
    .cv-org { font-size: 17.5px; font-weight: 500; color: #444; }
    .cv-time { font-size: 14px; opacity: 0.5; font-family: monospace; white-space: nowrap; margin-left: 10px; }
    .cv-gpa { font-size: 14px; font-weight: 600; opacity: 0.8; font-family: monospace; color: #444; background: rgba(0,0,0,0.04); padding: 2px 6px; border-radius: 4px; }
    .cv-desc { font-size: 14px; opacity: 0.75; line-height: 1.6; margin-top: 5px; }
    .cv-edu-section .cv-card { border-left: 5px solid #f97316; } .cv-edu-section .cv-org { color: #f97316; } .cv-edu-section .cv-logo-box i { color: #f97316; }
    .cv-exp-section .cv-card { border-left: 5px solid #3b82f6; } .cv-exp-section .cv-org { color: #3b82f6; } .cv-exp-section .cv-logo-box i { color: #3b82f6; }
    .cv-proj-section .cv-card { border-left: 5px solid #8b5cf6; } .cv-proj-section .cv-org { color: #8b5cf6; } .cv-proj-section .cv-logo-box i { color: #8b5cf6; }
    
    /* 标题部分：去掉原本的下划线，缩小下方间距 */
    .job-header h2 {
        border-bottom: none !important;
        margin-bottom: 8px !important;
        margin-top: 10px !important;
        padding-bottom: 0 !important;
        color: #111 !important;
    }
    /* Meta部分：添加下划线，设置灰色字体，调整间距 */
    .job-header .job-meta {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        color: #666;
        font-size: 15px;
        border-bottom: 1px solid #eee;
        padding-bottom: 20px;
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        gap: 15px;
    }
    .job-header .job-meta i {
        color: #888;
        margin-right: 5px;
    }
    .job-header .job-meta .separator {
        color: #ddd;
    }
    @media (max-width: 600px) { .cv-card { padding: 18px; gap: 15px; } .cv-logo-box { width: 48px; height: 48px; } .cv-card-header, .cv-card-subheader { flex-direction: column; align-items: flex-start; gap: 2px; } .cv-time, .cv-gpa { margin-left: 0; font-size: 12px; margin-top: 2px; } }

    /* === 8. 隐藏评论区 (新增) === */
    .comment-container { display: none !important; }
    
  </style>
`);

hexo.extend.injector.register('body_end', `
  <script>
    // === 核心逻辑：智能控制页面布局 ===
    // 只在首页强制去掉顶部间距，其他页面恢复正常
    function manageHomeLayout() {
       var isHome = (window.location.pathname === '/' || window.location.pathname === '/index.html');
       var styleId = 'cv-home-layout-fix';
       var existingStyle = document.getElementById(styleId);

       if (isHome) {
           // 如果是首页，插入这段强制 0 间距的 CSS
           if (!existingStyle) {
               var style = document.createElement('style');
               style.id = styleId;
               style.innerHTML = \`
                  html, body { margin-top: 0 !important; padding-top: 0 !important; }
                  .main-content-container, .page-container, #app { padding-top: 0 !important; margin-top: 0 !important; }
               \`;
               document.head.appendChild(style);
           }
       } else {
           // 如果不是首页（比如 Experience），就把这段 CSS 删掉，恢复正常间距
           if (existingStyle) {
               existingStyle.remove();
           }
       }
    }

    // 定义注入逻辑
    function runCVInjection() {
      // 1. 先调整布局（这步最关键）
      manageHomeLayout();

      // === 1. 文章详情页头部修正 (新增) ===
      var articleHeader = document.querySelector('.article-header');
      if (articleHeader) {
          var avatarImg = articleHeader.querySelector('.avatar img');
          if (avatarImg && !avatarImg.src.includes('avatar.png')) {
              avatarImg.src = "/images/avatar.png";
          }
      }

      // 2. 只在首页运行的内容
      if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') return;
      
      // === 侧边栏改造 (暴力重写版) ===
      var sideCard = document.querySelector('.sidebar-content');
      
      if (sideCard) {
          var avatarContainer = sideCard.querySelector('.avatar');
          
          if (avatarContainer) {
              // 检测是否已经是我们要的图片，如果不是，直接暴力重写 innerHTML
              var img = avatarContainer.querySelector('img');
              var currentSrc = img ? img.getAttribute('src') : '';
              
              if (!img || !currentSrc.includes('avatar.png')) {
                  console.log("正在重写头像 HTML...");
                  // 直接清空容器，填入全新的 IMG 标签
                  avatarContainer.innerHTML = '<img src="/images/avatar.png?v=' + new Date().getTime() + '" style="opacity: 1 !important; display: block !important;">';
              }
          }

          // 插入 Bio
          if (!sideCard.querySelector('.cv-sidebar-bio')) {
              var bioHTML = \`
                <div class="cv-sidebar-bio">
                    <p>Hi, I'm Ray. <br> A Data Scientist with experience across AI, Machine Learning, and Business Intelligence.</p>
                    <div class="cv-sidebar-tags">
                        <span class="cv-sidebar-tag">Python</span>
                        <span class="cv-sidebar-tag">SQL</span>
                        <span class="cv-sidebar-tag">Tableau</span>
                        <span class="cv-sidebar-tag">AI</span>
                        <span class="cv-sidebar-tag">ML</span>
                        <span class="cv-sidebar-tag">Web3</span>
                        <span class="cv-sidebar-tag">AWS</span>
                    </div>
                    <div><a href="mailto:ddl1208@icloud.com" class="cv-contact-btn">Contact Me</a></div>
                </div>
              \`;
              var wrapper = document.createElement('div');
              wrapper.innerHTML = bioHTML;
              sideCard.appendChild(wrapper);
          }
      }

      // === 简历内容替换 ===
      var targetList = document.querySelector('.home-article-list');
      if (targetList) {
          console.log("CV Injection: Target list detected, running replacement...");
          var cvHTML = \`
            <div class="cv-home-sections">
              <div class="cv-edu-section">
                <div class="cv-section-title"><i class="fa-solid fa-graduation-cap"></i> Education</div>
                <div class="cv-grid">
                  <a href="/2023/09/28/MISM-Carnegie-Mellon-University/" class="cv-card">
                    <div class="cv-logo-box">
                        <img src="/images/CMU.png" alt="CMU">
                    </div>
                    <div class="cv-content-box">
                      <div class="cv-card-header"><span class="cv-role">Carnegie Mellon University</span><span class="cv-time">Sep 2023 - Dec 2024</span></div>
                      <div class="cv-card-subheader"><span class="cv-org">Master of Information Systems</span><span class="cv-gpa">GPA: 3.8 / 4.0</span></div>
                      <div class="cv-desc">Focus: Data Science, Machine Learning in Production.</div>
                    </div>
                  </a>
                  <a href="/2019/02/11/BCompSci-Data-Science-University-of-Queensland/" class="cv-card">
                    <div class="cv-logo-box">
                        <img src="/images/uq2.png" alt="UQ">
                    </div>
                    <div class="cv-content-box">
                      <div class="cv-card-header"><span class="cv-role">University of Queensland</span><span class="cv-time">Feb 2019 - Dec 2022</span></div>
                      <div class="cv-card-subheader"><span class="cv-org">Bachelor of Computer Science & Data Science</span><span class="cv-gpa">GPA: 3.88 / 4.0</span></div>
                      <div class="cv-desc">Focus: Algorithms, Database Managements, Statistics.</div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="cv-exp-section">
                <div class="cv-section-title"><i class="fa-solid fa-briefcase"></i> Work Experience</div>
                <div class="cv-grid">
                  <a href="/2025/05/26/AI-Data-Scientist-Intel/" class="cv-card">
                    <div class="cv-logo-box">
                        <img src="/images/intel.png" alt="intel">
                    </div>
                    <div class="cv-content-box">
                      <div class="cv-card-header"><span class="cv-role">Intel Corporation</span><span class="cv-time">May 2025 - Present</span></div>
                      <div class="cv-card-subheader"><span class="cv-org">AI Data Scientist</span></div>
                      <div class="cv-desc">Driving AI-powered capacity planning and global supply-chain transformation through scalable forecasting systems and executive decision platforms.</div>
                    </div>
                  </a>
                  <a href="/2024/05/20/Strategic-Sourcing-Data-Analyst-MSA-Safety/" class="cv-card">
                     <div class="cv-logo-box">
                        <img src="/images/msa.jpg" alt="msa">
                    </div>
                     <div class="cv-content-box">
                       <div class="cv-card-header"><span class="cv-role">MSA Safety</span><span class="cv-time">May 2024 - Dec 2024</span></div>
                       <div class="cv-card-subheader"><span class="cv-org">Data Analyst Internship</span></div>
                       <div class="cv-desc">Optimizing global procurement and supplier strategy through data analytics, machine learning, and executive-level business intelligence.</div>
                     </div>
                  </a>
                  <a href="/2023/02/18/Data-Scientist-Intern-LVMH/" class="cv-card">
                    <div class="cv-logo-box">
                        <img src="/images/lvmh.jpg" alt="lvmg">
                    </div>
                    <div class="cv-content-box">
                      <div class="cv-card-header"><span class="cv-role">LVMH</span><span class="cv-time">Feb 2023 - Jul 2023</span></div>
                      <div class="cv-card-subheader"><span class="cv-org">Data Scientist Internship</span></div>
                      <div class="cv-desc">Enabling data-driven growth for luxury retail by applying advanced analytics to user segmentation, forecasting, and performance marketing optimization.</div>
                    </div>
                  </a>
                  <a href="/2021/12/13/Data-Expert-Intern-Signify/" class="cv-card">
                    <div class="cv-logo-box">
                        <img src="/images/signifycompany_logo.jpg" alt="signify">
                    </div>
                    <div class="cv-content-box">
                      <div class="cv-card-header"><span class="cv-role">Signify</span><span class="cv-time">Dec 2021 - Sep 2022</span></div>
                      <div class="cv-card-subheader"><span class="cv-org">Data Expert Internship</span></div>
                      <div class="cv-desc">Advancing supply-chain efficiency and digital transformation through automation, analytics, and operational data optimization.</div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="cv-proj-section">
                <div class="cv-section-title"><i class="fa-solid fa-code"></i> Selected Projects</div>
                <div class="cv-grid">
                  
                  <a href="/2024/08/19/Capstone-Emotion-Classification-with-LLMs/" class="cv-card">
                    <div class="cv-logo-box">
                        <img src="/images/tcs.png" alt="tcs">
                    </div>
                    <div class="cv-content-box">
                      <div class="cv-card-header"><span class="cv-role">CMU & Tata Consultancy Services</span><span class="cv-time">Aug 2024 - Dec 2024</span></div>
                      <div class="cv-card-subheader"><span class="cv-org">Data Scientist - Emotion Classification with LLMs and NLP Models Capstone Project</span></div>
                      <div class="cv-desc">Developed and deployed an end-to-end NLP solution leveraging transformer-based models to enable scalable emotion understanding and intelligent text classification in real-world applications. </div>
                    </div>
                  </a>

                  <a href="/2024/01/12/Recognition-Fault-Detection-System/" class="cv-card">
                    <div class="cv-logo-box">
                        <img src="/images/GE-Logo.png" alt="ge">
                    </div>
                    <div class="cv-content-box">
                      <div class="cv-card-header"><span class="cv-role">CMU & General Electric</span><span class="cv-time">Jan 2024 - May 2024</span></div>
                      <div class="cv-card-subheader"><span class="cv-org">Data Scientist - Recognition and Fault Detection System Project</span></div>
                      <div class="cv-desc">Built a real-time, production-oriented computer vision system integrating deep learning and streaming architectures to enhance industrial fault detection and operational reliability. </div>
                    </div>
                  </a>

                  <a href="/2023/09/30/Movie-Recommendations-Platform" class="cv-card">
                    <div class="cv-logo-box">
                        <img src="/images/Netflix-Symbol.png" alt="netflix">
                    </div>
                    <div class="cv-content-box">
                      <div class="cv-card-header"><span class="cv-role">CMU & Netflix</span><span class="cv-time">Sep 2023 - Dec 2023</span></div>
                      <div class="cv-card-subheader"><span class="cv-org">Data Scientist - Movie Recommendations Platform Project</span></div>
                      <div class="cv-desc">Designed a large-scale recommendation platform with real-time APIs, distributed data pipelines, and MLOps automation to support high-throughput personalization at scale.</div>
                    </div>
                  </a>

                </div>
              </div>
              <div style="height: 60px;"></div>
            </div>
           \`;
          targetList.outerHTML = cvHTML;
      }
    }

    // === 监控器：应对点击导航栏跳转 ===
    var observer = new MutationObserver(function(mutations) {
        runCVInjection();
    });
    
    // 启动监控
    observer.observe(document.body, { childList: true, subtree: true });

    // 初始运行
    document.addEventListener("DOMContentLoaded", runCVInjection);
    document.addEventListener("pjax:complete", runCVInjection);
  </script>
`);