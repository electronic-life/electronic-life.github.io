---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: splash
title: "Electronic Life"
subtitle: "AI Studio"
header:
  overlay_filter: "0.2"
  overlay_image: /assets/aud.webp
excerpt: "Electronic Life is a research studio operating collaboratively through **rigorous creativity** to advance AI applications."
# css
includes:
  - main.css
feature_row:
  - title: "Rigorous Creativity"
  - title: "Human-AI Collaboration"
  - title: "Learning by Doing"
---
<style>
  #names-link:hover {
    text-decoration: underline;
  }
</style>
<!-- {% include feature_row id="intro" type="center" %} -->
{% include feature_row %}
<!-- center this  -->
<div style="text-align: center;">
  <a href="/about/" id="names-link" style="color: white; text-decoration: none;">
    <span id="names"></span>
  </a>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const names = ['S. Manghani', 'E. D\'Souza', 'T. Savage'];
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
        const shuffledNames = shuffleArray([...names]);
        const namesElement = document.getElementById('names');
        namesElement.innerHTML = shuffledNames.map(name => `${name}`).join(', ');
    });
</script>