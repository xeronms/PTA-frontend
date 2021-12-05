# FungyOpti

Interaktywny portal webowy służący do wizualizacji natężenia ruchu, analizy mobilności i optymalizacji tras stworzony w ramach Klimatonu 2021.

Aby uruchomić program konieczne jest posiadanie zainstalowanego narzędzia `node.js`. W celu zainstalowania wymaganych zależności należy w linii wiersza poleceń wykonać komendę:
```bash
npm install
```
Uruchomienie programu:
```bash
npm start
```

You need to have docker installed on your host.
To run docker image with .sql file binding:
To run docker image with `.sql` file binding:

<!--
```bash
docker run --rm -it --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=active_firewall -d postgres
``` -->

```bash
docker run --rm -it --name postgres -p 5432:5432 -e POSTGRES_DB=active_firewall -e POSTGRES_PASSWORD=postgres -v $(pwd)/entry-points/detections.sql:/docker-entrypoint-initdb.d/detections.sql -d postgres
```

```bash
docker kill postgres
```

To enter database:

```bash
docker exec -it postgres psql -U postgres active_firewall
```

