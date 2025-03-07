# Image Carousel Component

This is a **responsive image carousel** built using **React and Swiper.js**. It supports **infinite scrolling**, **navigation arrows**, and **pagination dots**. The styling is handled using **SCSS**.

## 🚀 Features
- 📱 **Responsive design** (adjusts images for mobile and desktop)
- 🔄 **Infinite scrolling** with smooth transitions
- ⬅️➡️ **Navigation arrows** (customizable square design)
- ⚪ **Optional pagination dots**
- 🎨 **Styled with SCSS**

## 📦 Installation

1. Clone the repository:
   git clone https://github.com/vbhv117/image-carousel.git
   cd image-carousel
2. Install dependencies:
    npm install
3. Start the development server:
    npm start
🛠️ Usage
Props
The ImageCarousel component takes an images prop, which should be an array of objects.

## Customization
You can modify the styles in ImageCarousel.scss:

1. Adjust the image size in .image-carousel__item
2. Change the navigation button styles under .swiper-button-prev and .swiper-button-next
3. Modify infinite scrolling behavior by tweaking Swiper's loop settings