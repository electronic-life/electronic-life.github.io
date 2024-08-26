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
---

We specialise in blended - _critical, creative, collaborative_ - approaches, working with key partners across arts, education and technology domains. Committed to open, inclusive research, we seek to make innovative, societally impactful and sustainable AI practices and applications. 

Join us as part of a [studio practice](/studio/); read our [research papers](/research/) to find out more about our work; get in touch to [collaborate](/collaborate/).

<span style="font-size: 0.75em; color: grey; text-align: center">
**Rigorous Creativity** /ˈrɪɡərəs kriːˈeɪtɪvɪti/ (noun): _Disciplined application of imagination and innovation, blending strict analytical methods with creative making to produce solutions that are both original and well-founded; balancing of analytical rigor with creative exploration, ensuring inventive ideas and applications grounded in thorough research, critical assessment, and practical feasibility._
<br>
<a href="/about/" id="names-link" style="color: white; text-decoration: none;">
  <span id="names"></span>
</a>
</span>
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