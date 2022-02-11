# Latihan-Node-4
Studi Kasus #4: CRUD (POST - GET - PUT - DELETE) NodeJS dengan MongoDB + Express

## Additional Requirement
- `MongoDB` >= 4.4.4 (Community Server)

## How to run
- Clone repo
```
git clone https://github.com/Indra2108/Latihan-Node-4.git
cd Latihan-Node-4
npm install
```
- Jalankan service `mongod`
```
sudo systemctl start mongod
```
- Pastikan `mongod` dalam keadaan `active` dengan perintah `systemctl status mongod`
```
$ systemctl status mongod
● mongod.service - MongoDB Database Server
     Loaded: loaded (/usr/lib/systemd/system/mongod.service; disabled; vendor preset: disabled)
     Active: active (running) since Fri 2022-02-11 20:06:50 WIB; 39min ago
       Docs: https://docs.mongodb.org/manual
    Process: 17779 ExecStartPre=/usr/bin/mkdir -p /var/run/mongodb (code=exited, status=0/SUCCESS)

```
- Buat database baru dengan nama `resthub`
```
$ mongo
> use resthub
switched to db resthub
> show dbs
admin     0.000GB
config    0.000GB
local     0.000GB
resthub   0.000GB
```
- Jalankan server dengan perintah `npm test`, jika menggunakan nodemon, dengan `npm run nodemon`.
- Setelah itu buka browser dan buka [http://localhost:8080](http://localhost:8080).
    - NOTE: Untuk method `POST`/`PUT`/`DELETE` disarankan menggunakan REST API Client seperti [Postman](https://www.postman.com/downloads/)