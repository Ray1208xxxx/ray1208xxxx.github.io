---
title: 🛠️ Recognition and Fault Detection System Project
date: 2024-01-12
cover: /images/webbanner-02-resized.jpg
categories:
  - Project
tags:
  - Computer Vision
  - Deep Learning
  - Edge AI
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
  <h2>CMU & General Electric</h2>
  <div class="job-meta">
    <span><i class="fa-solid fa-location-dot"></i> Pittsburgh, United States</span>
    <span class="separator">|</span>
    <span><i class="fa-regular fa-calendar"></i> Jan 2024 – May 2024</span>
  </div>
</div>

<div class="cv-glass-wrap">
  <div class="cv-glass-card">
    <p class="cv-glass-title"><b>Project Scope</b></p>
    <p class="cv-glass-desc">
      Industrial operations face significant risks from delayed detection of equipment faults, which can lead to downtime, safety incidents, and operational losses. I focused on developing <b>an automated, real-time fault detection solution</b> that enabled earlier identification of anomalies and supported <b>faster, data-driven operational responses in production environments</b>.
    </p>
  </div>
</div>

---

### 👁️ Deep Learning & Computer Vision
* **Real-Time Inference:** Utilized **YOLOv5** with multi-scale training techniques to achieve robust object detection.
* **Performance Tuning:** Accelerated inference speed to **45ms/frame** using **TensorRT**, enabling real-time fault detection capabilities.

### ⚡ System Integration & Edge AI
* **Streaming Architecture:** Configured an optimized model pipeline integrated with **Kafka-based streaming** for continuous data processing.
* **Impact:** Implemented edge validation mechanisms that successfully **reduced downtime by 10%**, enhancing operational reliability.


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
      <i class="fa-solid fa-eye skill-icon"></i>
      YOLO
    </div>
    <div class="skill-pill">
      <i class="fa-solid fa-gauge-high skill-icon"></i>
      TensorRT
    </div>
    <div class="skill-pill">
      <i class="fa-solid fa-stream skill-icon"></i>
      Kafka
    </div>
    <div class="skill-pill">
      <i class="fa-solid fa-microchip skill-icon"></i>
      Edge-side Validation
    </div>
    <div class="skill-pill">
      <i class="fa-solid fa-bolt skill-icon"></i>
      Inference
    </div>
    <div class="skill-pill">
      <i class="fa-solid fa-robot skill-icon"></i>
      Automation
    </div>
    <div class="skill-pill">
      <i class="fa-solid fa-sitemap skill-icon"></i>
      System Architecture
    </div>
  </div>
</div>