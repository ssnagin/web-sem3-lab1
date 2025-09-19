./gradlew shadowJar

scp -P 2222 build/libs/server.jar s467525@se.ifmo.ru:httpd-root/fcgi-bin/