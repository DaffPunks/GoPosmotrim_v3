# GoPosmotrim_v3

```
npm install
node app
sudo cp dev/nginx.conf /etc/nginx/sites-available/<UserName>.goposmotrim.ru.conf
sudo ln -s /etc/nginx/sites-available/<UserName>.goposmotrim.ru.conf /etc/nginx/sites-enabled
```

`docker run   --rm   -u root   -p 8080:8080   -v jenkins-data:/var/jenkins_home   -v /var/run/docker.sock:/var/run/docker.sock   -v "$HOME":/home   jenkinsci/blueocean`
