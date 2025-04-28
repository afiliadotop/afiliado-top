from PIL import Image, ImageDraw, ImageFont
from gtts import gTTS
import os

# Texto motivacional
mensagem = "A dor é temporária. A glória é eterna."

# Cria imagem base
largura, altura = 720, 1280
imagem = Image.new("RGB", (largura, altura), color=(10, 10, 10))
draw = ImageDraw.Draw(imagem)

# Fonte
fonte_path = "Roboto-Bold.ttf"
fonte = ImageFont.truetype(fonte_path, 48)

# Centraliza texto
bbox = draw.textbbox((0, 0), mensagem, font=fonte)
text_w = bbox[2] - bbox[0]
text_h = bbox[3] - bbox[1]
x = (largura - text_w) // 2
y = (altura - text_h) // 2
draw.text((x, y), mensagem, font=fonte, fill=(255, 255, 255))

# Salva imagem
imagem.save("imagem.png")

# Gera narração
tts = gTTS(mensagem, lang='pt-br')
tts.save("audio.mp3")

# Cria vídeo com ffmpeg
os.system('ffmpeg -loop 1 -i imagem.png -i audio.mp3 -c:v libx264 -c:a aac -b:a 192k -shortest -pix_fmt yuv420p video_final.mp4')

print("Vídeo criado com sucesso: video_final.mp4")
