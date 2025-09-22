from PIL import Image, ImageEnhance, ImageFilter

# Load the image
img = Image.open("enhance.png").convert("RGB")

# Enhance brightness
enhancer_brightness = ImageEnhance.Brightness(img)
img = enhancer_brightness.enhance(1.1)

# Enhance contrast
enhancer_contrast = ImageEnhance.Contrast(img)
img = enhancer_contrast.enhance(1.2)

# Slightly sharpen the image
img = img.filter(ImageFilter.UnsharpMask(radius=2, percent=150, threshold=3))

# Save the result as a PNG file
img.save("professional_portrait.png", "PNG")
print("Image saved as professional_portrait.png")
