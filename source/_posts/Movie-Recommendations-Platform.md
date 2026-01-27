---
title: 🛠️ Movie Recommendations Platform Project
date: 2023-09-30
cover: /images/Thibaud_Clement_006_COVER.jpg
categories:
  - Project
tags:
  - Recommender Systems
  - Big Data
  - MLOps
---

<style>
  /* 容器 */
  .skill-group {
    margin-bottom: 2rem;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
  
  /* 标题 */
  .skill-title {
    margin-bottom: 1rem;
    font-size: 1.25rem; /* text-xl */
    font-weight: 700;   /* font-bold */
    color: #333;        /* 适配亮色主题，如果是深色模式可以改 #fff */
  }

  /* 列表布局 */
  .skill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem; /* gap-2 */
  }

  /* 胶囊样式 */
  .skill-pill {
    display: flex;
    align-items: center;
    gap: 0.5rem; /* gap-2 */
    cursor: default;
    border-radius: 9999px; /* rounded-full */
    
    /* 核心配色 (仿照你的截图) */
    border: 1px solid #e5e5e5;  /* border-neutral-200 (亮色适配) */
    background-color: #f5f5f5;  /* bg-neutral-100 */
    color: #404040;             /* text-neutral-700 */
    
    /* 如果你希望强制黑色背景（如截图），请使用下面这组：
    border: 1px solid #262626;
    background-color: #171717; 
    color: #d4d4d4; 
    */

    padding: 0.5rem 1rem; /* px-4 py-2 */
    font-size: 0.875rem;  /* text-sm */
    transition: all 0.2s ease;
    line-height: 1;
  }

  /* 悬停效果 (蓝色高亮) */
  .skill-pill:hover {
    border-color: #3b82f6; /* hover:border-blue-500 */
    color: #2563eb;        /* hover:text-blue-600 */
    transform: translateY(-1px);
    background-color: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  }

  /* SVG 图标尺寸 */
  .skill-icon {
    height: 1rem; 
    width: 1rem;
    fill: currentColor;
  }
</style>

<div class="job-header">
  <h2>CMU & Netflix</h2>
  <div class="job-meta">
    <span><i class="fa-solid fa-location-dot"></i> Pittsburgh, United States</span>
    <span class="separator">|</span>
    <span><i class="fa-regular fa-calendar"></i> Sep 2023 – Dec 2023</span>
  </div>
</div>

<div class="cv-glass-wrap">
  <div class="cv-glass-card">
    <p class="cv-glass-title"><b>Project Scope</b></p>
    <p class="cv-glass-desc">
      Large-scale digital platforms must deliver personalized user experiences while maintaining real-time performance, system reliability, and scalability under massive user traffic. I focused on designing an end-to-end recommendation platform that transformed user interaction data into <b>timely, personalized recommendations, supporting a responsive and scalable product experience</b>.
    </p>
  </div>
</div>

---
### 📡 API & Real-Time Processing
* **High-Throughput API:** Implemented a real-time recommendation API using **Kafka and Flask**, capable of handling over **50M+ user interactions**.
* **Stream Processing:** Designed the system to process user events in real-time to update recommendations dynamically.

### 💾 Scalable Database Architecture
* **Big Data Storage:** Engineered a robust **MySQL database** storing **30M+ records (~112GB)**.
* **Performance Optimization:** Applied **multithreading** for efficient batch processing and log parsing.
* **Database Tuning:** Optimized storage performance through advanced **partitioning** and **indexing techniques**.

### 🛠️ MLOps & CI/CD
* **Automated Pipelines:** Integrated **Jenkins** and **GitHub Actions** to establish a robust CI/CD pipeline.
* **Monitoring:** Deployed **Prometheus** and **Grafana** to monitor system performance and detect **data drift** in real-time.



<div class="skill-group">
  <div class="skill-list">
    <div class="skill-pill">
      <i class="fa-brands fa-python skill-icon"></i>
      Python
    </div>
    <div class="skill-pill">
      <svg class="skill-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.9 16.5l-1.3-4.5c-0.2-0.7-0.7-0.2-0.7-0.2l-4.1 8.6c-0.2 0.4 0 0.6 0.3 0.5l11.4-4.2c0.2-0.1 0.2-0.3 0.1-0.4L12.9 16.5zM7.4 9.1l4.9-1.7c0.2-0.1 0.2-0.3 0.1-0.4L6.9 2.5C6.7 2.4 6.5 2.5 6.6 2.7l3.2 10.8c0.1 0.3-0.2 0.5-0.4 0.3L1.5 8.1c-0.2-0.1-0.2-0.4 0-0.5l5.9 1.5z"/></svg>
      PyTorch
    </div>
    <div class="skill-pill">
      <i class="fa-solid fa-server skill-icon"></i>
      Spark
    </div>
    <div class="skill-pill">
      <i class="fa-solid fa-database skill-icon"></i>
      MySQL
    </div>
    <div class="skill-pill">
      <i class="fa-solid fa-flask skill-icon"></i>
      Flask
    </div>
    <div class="skill-pill">
      <i class="fa-solid fa-stream skill-icon"></i>
      Apache Kafka
    </div>
    <div class="skill-pill">
      <i class="fa-solid fa-code-branch skill-icon"></i>
      Multithreading
    </div>
    <div class="skill-pill">
      <i class="fa-solid fa-sitemap skill-icon"></i>
      System Architecture
    </div>
    <div class="skill-pill">
      <i class="fa-solid fa-layer-group skill-icon"></i>
      Batch Processing
    </div>
    <div class="skill-pill">
      <i class="fa-solid fa-file-lines skill-icon"></i>
      Log Parsing
    </div>
    <div class="skill-pill">
      <i class="fa-solid fa-table-columns skill-icon"></i>
      Partitioning
    </div>
    <div class="skill-pill">
      <i class="fa-solid fa-magnifying-glass skill-icon"></i>
      Indexing
    </div>
    <div class="skill-pill">
      <i class="fa-brands fa-jenkins skill-icon"></i>
      Jenkins
    </div>
    <div class="skill-pill">
      <i class="fa-brands fa-github skill-icon"></i>
      GitHub Actions
    </div>
    <div class="skill-pill">
      <i class="fa-solid fa-chart-line skill-icon"></i>
      Prometheus
    </div>
    <div class="skill-pill">
      <i class="fa-solid fa-chart-area skill-icon"></i>
      Grafana
    </div>
  </div>
</div>