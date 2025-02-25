from PIL import Image, ImageDraw
import random
import math

class StarfieldGenerator:
    def __init__(self, width=1000, height=2500, num_points=2000):
        self.width = width
        self.height = height
        self.num_points = num_points
        self.WHITE_BLUE_RATIO = 0.975
        self.ORANGE_RATIO = 1 - self.WHITE_BLUE_RATIO
        self.image = Image.new('RGBA', (width, height), (0, 0, 0, 255))
        self.draw = ImageDraw.Draw(self.image, 'RGBA')
        random.seed(14)

    def generate_star_color(self, blue_amount):
        white_value = round(255 - (blue_amount * 155))
        return (white_value, white_value, 255, 255)

    def generate_orange_color(self, orange_amount, opacity=255):
        return (255, int(200*orange_amount), 0, opacity)

    def draw_orange_star(self, x, y, size, orange_amount, base_opacity):
        # Bright core
        core_size = size * 0.4
        core_rx = core_size * random.uniform(1, 3)
        core_ry = core_size * random.uniform(0, 1)
        self.draw.ellipse(
            [x-core_rx, y-core_ry, x+core_rx, y+core_ry],
            fill=(255, 255, 255, int(255 * base_opacity))
        )

        # Main star body with opacity
        rx = size * random.uniform(1, 3)
        ry = size * random.uniform(0, 1)
        opacity = int(255 * base_opacity)
        color = self.generate_orange_color(orange_amount, opacity)
        
        self.draw.ellipse(
            [x-rx, y-ry, x+rx, y+ry],
            fill=color
        )

        # Optional: Add outer glow
        glow_size = size * 1.5
        glow_rx = glow_size * random.uniform(1, 3)
        glow_ry = glow_size * random.uniform(0, 1)
        glow_opacity = int(127 * base_opacity)
        glow_color = self.generate_orange_color(orange_amount, glow_opacity)
        
        self.draw.ellipse(
            [x-glow_rx, y-glow_ry, x+glow_rx, y+glow_ry],
            fill=glow_color
        )

    def generate_image(self):
        # Fill background with solid black
        self.draw.rectangle([0, 0, self.width, self.height], fill=(0, 0, 0, 255))

        # Generate white/blue stars
        num_white_blue = int(self.num_points * self.WHITE_BLUE_RATIO)
        for _ in range(num_white_blue):
            x = random.uniform(0, self.width)
            y = random.uniform(0, self.height)
            size = 0.5 + random.random() * 1
            blue_amount = random.random() * 0.75
            opacity = 0.75 + random.random() * 0.25
            color = self.generate_star_color(blue_amount)
            
            self.draw.ellipse(
                [x-size, y-size, x+size, y+size], 
                fill=color
            )

        # Generate orange/red stars
        num_orange = int(self.num_points * self.ORANGE_RATIO)
        for _ in range(num_orange):
            x = random.uniform(0, self.width)
            y = random.uniform(0, self.height)
            size = 2 + random.random() * 5
            base_opacity = 0.2 + random.random() * 0.5
            orange_amount = random.random()
            rotation = random.uniform(0, 180)
            
            # Create a new image for the rotated star
            star_size = int(size * 4)  # Make sure it's big enough for the star
            star_img = Image.new('RGBA', (star_size * 2, star_size * 2), (0, 0, 0, 0))
            star_draw = ImageDraw.Draw(star_img)
            
            # Draw the star in the center of the new image
            self.draw_orange_star(
                star_size, 
                star_size, 
                size, 
                orange_amount, 
                base_opacity
            )
            
            # Rotate and paste onto main image
            rotated_star = star_img.rotate(rotation, expand=True)
            paste_x = int(x - rotated_star.width/2)
            paste_y = int(y - rotated_star.height/2)
            self.image.alpha_composite(rotated_star, (paste_x, paste_y))

        # Convert to RGB for WebP compatibility
        rgb_image = Image.new('RGB', self.image.size, (0, 0, 0))
        rgb_image.paste(self.image, mask=self.image.split()[3])
        return rgb_image

def generate_starfield_file(filename='starfield.webp', width=1000, height=2500, num_points=2000):
    generator = StarfieldGenerator(width, height, num_points)
    image = generator.generate_image()
    image.save(filename, 'WEBP', quality=90, method=6)

if __name__ == '__main__':
    # Generate mobile version (portrait)
    generate_starfield_file('public/starfield-mobile.webp', 
                          width=1200,
                          height=2800,
                          num_points=1500)
    
    # Generate desktop version (landscape)
    generate_starfield_file('public/starfield-desktop.webp',
                          width=3600,
                          height=2400,
                          num_points=2500)
    print("WebP starfields generated successfully!")