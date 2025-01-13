import random
import math

class StarfieldGenerator:
    def __init__(self, width=1000, height=2500, num_points=400):
        self.width = width
        self.height = height
        self.num_points = num_points
        self.WHITE_BLUE_RATIO = 0.95
        self.ORANGE_RATIO = 1 - self.WHITE_BLUE_RATIO
        random.seed(13300)

    def generate_star_color(self, blue_amount):
        """Generate a white/blue star color"""
        white_value = round(255 - (blue_amount * 155))
        return f"rgb({white_value},{white_value},255)"

    def generate_orange_color(self, orange_amount):
        """Generate an orange/red star color"""
        return f"rgb(255,{int(200*orange_amount)},0)"

    def generate_svg(self):
        svg_lines = [
            '<?xml version="1.0" encoding="UTF-8"?>',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 2500">',
            '  <defs>',
            '    <filter id="glow">',
            '      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>',
            '      <feMerge>',
            '        <feMergeNode in="coloredBlur"/>',
            '        <feMergeNode in="SourceGraphic"/>',
            '      </feMerge>',
            '    </filter>',
            '    <filter id="orangeGlow" x="-100%" y="-100%" width="300%" height="300%">',
            '    <feGaussianBlur in="SourceGraphic" stdDeviation="4"/>',
            '    </filter>',
            '  </defs>',
            '',
            '  <!-- Black Background -->',
            '  <rect width="100%" height="100%" fill="black"/>',
            '',
            '  <!-- White/Blue Stars -->',
        ]

        # Generate white/blue stars
        num_white_blue = int(self.num_points * self.WHITE_BLUE_RATIO)
        for _ in range(num_white_blue):
            x = random.uniform(0, self.width)
            y = random.uniform(0, self.height)
            size = 1 + random.random() * 2
            blue_amount = random.random() * 0.75 
            opacity = 0.75 + random.random() * 0.2
            color = self.generate_star_color(blue_amount)
            
            svg_lines.append(
                f'    <circle cx="{x:.1f}" cy="{y:.1f}" r="{size:.1f}" '
                f'fill="{color}" opacity="{opacity:.2f}"/>'
            )

        svg_lines.append('  <!-- Orange/Red Stars with Enhanced Halos -->')

        # Generate orange/red stars
        num_orange = int(self.num_points * self.ORANGE_RATIO)
        for _ in range(num_orange):
            x = random.uniform(0, self.width)
            y = random.uniform(0, self.height)
            size = 2 + random.random() * 5
            base_opacity = 0.5 + random.random() * 0.5  # Increased base opacity
            orange_amount = random.random()
            color = self.generate_orange_color(orange_amount)
            rotation = random.uniform(0, 360)
            
            # Set ellipse dimensions with more natural variation
            rx = size * 1.5* random.uniform(1, 2)  # Less extreme variation
            ry = size * 0.5 * random.uniform(1, 2)
            
            # Group the orange star elements with enhanced glow
            svg_lines.append(f'    <g transform="rotate({rotation} {x} {y})" filter="url(#orangeGlow)">')
            
            # Main star body
            svg_lines.append(
                f'      <ellipse cx="{x:.1f}" cy="{y:.1f}" rx="{rx:.1f}" ry="{ry:.1f}" '
                f'fill="{color}" opacity="{base_opacity:.2f}"/>'
            )
            # Bright core
            svg_lines.append(
                f'      <ellipse cx="{x:.1f}" cy="{y:.1f}" rx="{rx*0.3:.1f}" ry="{ry*0.3:.1f}" '
                f'fill="white" opacity="{0.8:.2f}"/>'
            )
            
            
            svg_lines.append('    </g>')
            
        svg_lines.append('</svg>')
        
        return '\n'.join(svg_lines)

def generate_starfield_file(filename='public/starfield-bg-mobile.svg'):
    generator = StarfieldGenerator()
    svg_content = generator.generate_svg()
    
    with open(filename, 'w') as f:
        f.write(svg_content)

if __name__ == '__main__':
    generate_starfield_file()
    print("SVG starfield generated successfully!")