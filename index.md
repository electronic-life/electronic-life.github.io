---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: splash

includes:
  - main.css
custom_css: index-style

# custom_css: index-style
includes:
  - main.css
feature_row:
    # - title: ""
    #   excerpt: "**Electronic Life** is a research studio operating collaboratively to advance AI applications.
    #   In pursuit of ‘rigorous creativity’, our studio approach builds around people and situations – offering an innovative, adaptive constellation of tools, techniques, and methodologies, underpinned by high-level technical, conceptual expertise and long-term experience in social and creative practices."
    - title: ""
      excerpt: "**Sunil Manghani** is Professor of Theory, Practice & Critique at Winchester School of Art, University of Southampton (UK). **Ed D’Souza** is Professor of Critical Practice at Winchester School of Art, University of Southampton (UK). **Tom Savage** is a PhD candidate at Imperial College London."
    - title: ""
      excerpt: "[**Rage Machine - 001**](/assets/papers/001_rage_machine.pdf) _an AI entity that is able to hold free and open conversation, developed in dialogue with Linsey Young, curator of Women in Revolt! Art and Activism in the UK 1970-1990, and presented publicly as part of the exhibition’s wider programming._"
    - title: ""
      excerpt: "[**AI Mirror Stage - 002**](/assets/papers/002_ai_mirror.pdf) _...Please be gentle. We are just taking our first steps with Electronic Life...This plea seemed to galvanise the crowd, drawing us all into a common purpose: An unwritten contract, allowing us all collectively to give ‘life’ to something._"

    - title: ""
      excerpt: "[**Learning the Machine - 003**](/assets/papers/003_learning_the_machine.pdf) _...Learning the machine means first accessing new technologies. It means a free-form approach to social and experiential learning..._"
    - title: ""
      excerpt: "**Collaborators**: The Alan Turing Institute’s AI & Arts Group; Tate; Kochi Biennale, and University of Southampton."

---


<br><br>

<div class="title-container">
  <h1>ELECTRONIC LIFE</h1><div class="cursor"></div>
</div>

<span id="animated-text" style="color: grey; text-align: center">
RIGOROUS CREATIVITY /ˈrɪɡərəs kriːˈeɪtɪvɪti/ (noun): *Disciplined application of analytical rigor with creative exploration, ensuring inventive ideas and applications grounded in thorough research, critical assessment, and practical feasibility.*
</span>

<a href="mailto:contact@electroniclife.ai">CONTACT US</a>

<!-- horizontal rule -->
<hr style="border: 0; border-top: 1px solid #333; margin: 20px 0;">

{% include feature_row %}




<script>
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('animated-text');
    let text = container.innerHTML;
    
    // First convert markdown to HTML
    text = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    container.innerHTML = '';
    
    // Split content while preserving HTML tags
    const regex = /<(\/?)(\w+)[^>]*>|([^<>\s]+)/g;
    let matches = [...text.matchAll(regex)];
    let currentOpenTag = null;
    
    matches.forEach(match => {
        const token = match[0];
        
        if (token.startsWith('<')) {
            if (token.startsWith('</')) {
                // Closing tag
                currentOpenTag = null;
            } else {
                // Opening tag
                currentOpenTag = token;
            }
        } else {
            // This is a word
            const span = document.createElement('span');
            if (currentOpenTag) {
                // If we're inside a tag, wrap the word with the formatting
                span.innerHTML = `${currentOpenTag}${token}</>${' '}`;
            } else {
                span.innerHTML = token + ' ';
            }
            span.style.opacity = '0';
            span.style.transition = 'opacity 0.1s';
            container.appendChild(span);
        }
    });
    
    const spans = container.getElementsByTagName('span');
    let currentIndex = 0;
    
    function showNextWord() {
        if (currentIndex < spans.length) {
            spans[currentIndex].style.opacity = '1';
            currentIndex++;
            setTimeout(showNextWord, 80);
        }
    }
    
    showNextWord();
});
</script>


