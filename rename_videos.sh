#!/data/data/com.termux/files/usr/bin/bash

# Pasta de entrada dos vídeos
input_folder="$HOME/storage/dcim/Camera"

# Pasta temporária para salvar os vídeos renomeados
output_folder="$HOME/renomeados_temp"

# Criar a pasta se não existir
mkdir -p "$output_folder"

# Inicializar o contador
counter=1

# Loop pelos arquivos de vídeo na pasta de entrada
for file in "$input_folder"/*; do
    if [ -f "$file" ]; then
        extension="${file##*.}"  # Pega a extensão do arquivo
        new_name=$(printf "video_%03d.%s" "$counter" "$extension")
        cp "$file" "$output_folder/$new_name"
        echo "Renomeado: $file -> $new_name"
        counter=$((counter + 1))
    fi
done

# Criar a pasta de destino final na memória interna
final_folder="/sdcard/Download/videos_k"
mkdir -p "$final_folder"

# Mover os arquivos renomeados para a pasta de destino
echo "Movendo os arquivos renomeados para $final_folder"
mv "$output_folder"/* "$final_folder/"

echo "Pronto! Os vídeos estão disponíveis em: $final_folder"
