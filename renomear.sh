#!/data/data/com.termux/files/usr/bin/bash

# Cria pastas se não existirem
mkdir -p audios videos

# Loop por todos os arquivos
for arquivo in *.*; do
  # Ignora diretórios e o próprio script
  [[ -d "$arquivo" || "$arquivo" == "renomear.sh" ]] && continue

  # Extrai a extensão
  extensao="${arquivo##*.}"

  # Gera um nome base (primeiras duas palavras minúsculas e sem espaços)
  base=$(echo "$arquivo" | awk '{print tolower($0)}' | sed -E 's/[^a-z0-9 ]//g' | awk '{print $1"_"$2}')

  # Garante que o nome base exista
  [[ -z "$base" ]] && base="arquivo"

  # Encontra o número sequencial disponível
  i=1
  novo_nome="${base}_$(printf "%02d" $i).${extensao}"
  while [ -e "$novo_nome" ]; do
    ((i++))
    novo_nome="${base}_$(printf "%02d" $i).${extensao}"
  done

  # Move para a pasta correta
  if [[ "$extensao" == "mp3" ]]; then
    mv "$arquivo" "audios/$novo_nome"
  elif [[ "$extensao" == "mp4" || "$extensao" == "mov" || "$extensao" == "avi" ]]; then
    mv "$arquivo" "videos/$novo_nome"
  else
    mv "$arquivo" "$novo_nome"
  fi

  echo "Renomeado: $arquivo -> $novo_nome"
done
