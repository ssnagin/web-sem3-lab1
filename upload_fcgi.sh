#!/bin/bash

# Скрипт с запросом пароля
# Использование: ./upload_fcgi.sh [username] [host] [port] [remote_path] [local_file]

if [ $# -ne 5 ]; then
    echo "Использование: $0 <username> <host> <port> <remote_path> <local_file>"
    exit 1
fi

USERNAME="$1"
HOST="$2"
PORT="$3"
REMOTE_PATH="$4"
LOCAL_FILE="$5"

# Проверка существования локального файла
if [ ! -f "$LOCAL_FILE" ]; then
    echo "Ошибка: Локальный файл '$LOCAL_FILE' не существует!"
    exit 1
fi

# Запрос пароля
read -s -p "Введите пароль для $USERNAME@$HOST: " PASSWORD
echo

echo "Начинаю загрузку файла $LOCAL_FILE на $HOST:$PORT..."

# Использование sshpass для передачи пароля (требует установки sshpass)
if command -v sshpass &> /dev/null; then
    sshpass -p "$PASSWORD" scp -P "$PORT" "$LOCAL_FILE" "$USERNAME@$HOST:$REMOTE_PATH"
else
    echo "sshpass не установлен. Попробуйте установить его или используйте SSH ключи."
    exit 1
fi

if [ $? -eq 0 ]; then
    echo "Файл успешно загружен!"
else
    echo "Ошибка при загрузке файла!"
    exit 1
fi