---
title: Speculations
layout: single
permalink: /speculations/
header:
  overlay_filter: "0.2"
  overlay_image: /assets/aud.webp
excerpt: "Our writings and reflections on AI, culture, and society."
---

{% for post in site.speculations %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
{% endfor %}