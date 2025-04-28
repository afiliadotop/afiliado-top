import yt_dlp

with open('links.txt', 'r') as file:
    links = file.read().splitlines()

ydl_opts = {
    'outtmpl': '%(title)s.%(ext)s',
    'format': 'mp4',
    'quiet': False
}

with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    for link in links:
        try:
            print(f"Baixando: {link}")
            ydl.download([link])
        except Exception as e:
            print(f"Erro ao baixar {link}: {e}")
