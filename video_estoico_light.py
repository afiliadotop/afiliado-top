from PIL import Image, ImageDraw, ImageFont
import os
import requests
import subprocess

# Texto motivacional
mensagem = "A dor é temporária.\nA glória é eterna."

# Criar imagem com fundo preto
img = Image.new('RGB', (720, 1280), color='black')
draw = ImageDraw.Draw(img)

# Fonte padrão
fonte = ImageFont.load_default()

# Calcular posição central usando textbbox
bbox = draw.textbbox((0, 0), mensagem, font=fonte)
text_width = bbox[2] - bbox[0]
text_height = bbox[3] - bbox[1]
x = (720 - text_width) // 2
y = (1280 - text_height) // 2

# Escrever texto centralizado
draw.text((x, y), mensagem, fill="white", font=fonte, align="center")

# Salvar imagem
img_path = "imagem.png"
img.save(img_path)

# Baixar música se não existir
audio_url = "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kevin_MacLeod/Calming/Kevin_MacLeod_-_Relaxing_Piano_Music.mp3"
audio_path = "audio.mp3"
if not os.path.exists(audio_path):
    r = requests.get(audio_url)
    with open(audio_path, 'wb') as f:
        f.write(r.content)

# Criar vídeo com ffmpeg
output_video = "video_final.mp4"
subprocess.run([
    "ffmpeg", "-loop", "1", "-i", img_path,
    "-i", audio_path, "-c:v", "libx264", "-t", "10",
    "-pix_fmt", "yuv420p", "-vf", "scale=720:1280",
    "-shortest", output_video
])

print("Vídeo criado com sucesso:", output_video)
