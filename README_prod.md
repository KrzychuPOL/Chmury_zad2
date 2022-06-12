# README dla wersji produkcyjnej

## Konfiguracja repozytorium

Konieczne jest0skonfigurowanie repozytorium za pomocą zmiennych środowiskowych. Do skorzystania z nich należy użyć następującej konfiguracji:
![env](./Scr/3-prod.png)

## Budowanie obrazów

Do zbudowania obrazów należy wykorzystać narzędzie docker-compose z plikiem wersji produkcyjnej  docker-compose.yml i polecenia **docker compose build**:

![Dowód build usługi](./Scr/1-prod.png)


## Uruchomienie usługi

DO uruchomienia usługi w wersji produkcyjnej należy użyć polecenia **docker compose up**:
![uruchomienie](./Scr/2-prod.png)


## Usługa działa

![dziala](./Scr/4-prod.png)

W wersji produkcyjnej client korzysta z serwera nginx.
