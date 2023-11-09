# Zadania Bazy danych 09.11.23

## Zadanie 1
 
1.
  ```sql
  CREATE TABLE postac(
  id_postaci INT PRIMARY KEY AUTO_INCREMENT,
  nazwa VARCHAR(40),
  rodzaj ENUM("wiking", "ptak", "kobieta"),
  data_ur date,
  wiek int unsigned
  );
  ```
2.
  ```sql
  INSERT INTO postac(nazwa, rodzaj, data_ur, wiek) VALUES ("Bjorn", "wiking", '1567-02-17', 32);
  INSERT INTO postac(nazwa, rodzaj, data_ur, wiek) VALUES ("Drozd", "ptak", '2022-11-09', 1);
  INSERT INTO postac(nazwa, rodzaj, data_ur, wiek) VALUES ("Tesciowa", "kobieta", '1983-06-21', 40);
  ```

3. 
  ```sql
  UPDATE postac SET postac.wiek = 88 WHERE postac.id_postaci = 3;
  ```
## Zadanie 2

1.
  ```sql
  CREATE TABLE walizka(
  id_walizki INT PRIMARY KEY AUTO_INCREMENT,
  pojemnosc INT UNSIGNED,
  kolor ENUM("rozowy", "czerwony", "teczowy", "zolty"),
  id_wlasciciela int,
  FOREIGN KEY (id_wlasciciela) REFERENCES (id_walizki) ON DELETE CASCADE
  );
  ```
2.
  ```sql
  ALTER TABLE walizka MODIFY COLUMN kolor ENUM("rozowy", "czerwony", "teczowy", "zolty") DEFAULT "rozowy";
  ```
3.
  ```sql
  INSERT INTO walizka(pojemnosc, id_wlasciciela) VALUES (65, 1);
  INSERT INTO walizka(pojemnosc, id_wlasciciela, kolor) VALUES (32, 3, "czerwony");
  ```
