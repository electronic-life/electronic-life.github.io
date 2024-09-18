---

layout: splash
title: "About Us"
permalink: /about/
header:
  overlay_color: "#000"
  overlay_filter: "0.2"
  overlay_image: /assets/aud.webp
includes:
  - main.css
feature_row:
  - title: "Sunil Manghani"
    excerpt: "**Sunil Manghani** is Professor of Theory, Practice & Critique at Winchester School of Art, University of Southampton (UK). He is Editor of Journal of Visual Art Practice and Managing Editor of Theory, Culture & Society. His books include Image Studies (2013), Rhythm and Critique(2020), Zero Degree Seeing (2019), India’s Biennale Effect (2016) and Farewell to Visual Studies(2015). He curated Barthes/Burgin at the John Hansard Gallery (2016), along with Building an Art Biennale (2018) and Itinerant Objects (2019) at Tate Exchange, Tate Modern."
  - title: "Ed D’Souza"
    excerpt: "**Ed D’Souza** is Professor of Critical Practice at Winchester School of Art, University of Southampton (UK). He is Editor of Journal of Visual Art Practice. His books include India’s Biennale Effect (2016), Barcelona Masala: Narratives and Interactions in Cultural Space (2013) and Outside India: Dialogues and Documents of Art and Social Change (2012). His work has been exhibited widely including Bergen Kunstall 3,14 (2019), osloBIENNALEN (2019), India Habitat Centre (2019), Tate Exchange, Tate Modern (2018) and Kochi-Muziris Biennale (2014)."
  - title: "Tom Savage"
    excerpt: "**Tom Savage** is a PhD candidate in Process Systems Engineering at Imperial College London. He holds an MPhil in Chemical Engineering & Biotechnology from the University of Cambridge (2021), a BEng in Chemical Engineering from the University of Manchester (2020) and has previously been a PhD Enrichment Student at the Alan Turing Institute (2024). He has published in journals including Nature Chemical Engineering and presented at conferences across machine learning, operations research, and chemical engineering fields."
---

<!-- {% include feature_row id="intro" type="center" %} -->



{% include feature_row %}


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

