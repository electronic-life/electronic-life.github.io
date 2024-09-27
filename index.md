---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: splash

header:
  overlay_color: "#000"
  overlay_image: /assets/background.gif
excerpt: "

<img src='/assets/electronic_life.png' alt='Electronic Life' class='title-image'>

Electronic Life is a research studio operating collaboratively through **rigorous creativity** to advance AI applications.

<style>
  .title-image {
    width: 100%;
    max-width: 600px;
    margin: 0;
    display: block;
    text-align: left;
  }

  .bottom-images {
    position: relative;
    display: inline-flex;
    top: 30px;
    gap: 10px;
  }

.bottom-text {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}


  .bottom-images img {
    height: 50px;
    width: auto;
  }
</style>
<br>
<span class='bottom-images'>
  <a href='/research/'>
    <img src='/assets/research.png' alt='Research'>
  </a>
  <a>
    <img src='/assets/arrow.png' alt='Arrow'>
  </a>
  <a href='/studio/'>
    <img src='/assets/studio.png' alt='Studio'>
  </a>
</span>

<span class='bottom-text'>
↓ Contact Us ↓
</span>

"
includes:
  - main.css
custom_css: index-style
---

<form action="https://formspree.io/f/xwpepgqv" method="POST">
        <input type="email" name="email" placeholder="Email" required>
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send</button>
</form>

