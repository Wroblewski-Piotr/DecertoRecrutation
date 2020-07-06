Autor projektu - Piotr Wróblewski
email - wroblewskipiotr89@gmail.com
tel - 668147160


Treść Zadania - 

Uprzejmie proszę o napisanie aplikacji, której zadaniem jest łączenie
dwóch danych pochodzących z różnych źródeł. Danymi są LICZBY, a jako ich
źródła można przyjąć:
- generowanie liczb losowych języka Java,
- www.random.org (API REST),
- odczyt z bazy danych (hipotetyczna zewnętrzna baza lub baza pamięciową),
ewentualnie zaproponować inne. Źródeł musi być co najmniej dwa.
Natomiast sposób łączenia to DODAWANIE.

Należy przyjąć, tak jak ma to miejsce podczas codziennej pracy, iż
aplikacja będzie rozwijana i wymagania mogą się zmienić (np. inny typ
danych, sposób łączenia). Architektura rozwiązania musi być zatem
elastyczna i podatna na zmiany.

Założenia:
1) Aplikacja może wykorzystać dowolny framework. Może być również
napisanie w czystej Javie.
2) Kod musi być możliwy do skompilowania i uruchomienia na komputerze z
zainstalowanym JDK w wersjach 8 i 11, Mavenem oraz Gradle.

3) Kod musi być przekazany w formie archiwum lub jako link do otwartego
repozytorium. W obu przypadkach projekt powinien spełniać wymogi
projektu produkcyjnego, tzn. takiego, którego powinniśmy się spodziewać
w repozytorium na głównym branchu, spełniającego powszechnie przyjęte
zasady (np. gitignore, wyłącznie niezbędne pliki, brak nadmiarowego czy
martwego kodu).


Uwagi autora - 

1) Prezentowana aplikacj służy do przetwarzania danych za pomocą zdefiniowanych w kodzie strategi, które można ze sobą łączyć przy pomocy przeglądarkowego GUI. 
2) Architektura aplikacji pozwala na łatwe implementowanie kolejnych strategii przetwarzania danych (implementowanie interface Strategy)
3) Aby uzyskać efekt spełniający warunki postawionego zadania należy
	- uruchomić aplikację (np w IDE)
	- wejść pod adres localhost:8080
	- kliknąć przycisk Dodaj strategie
	- dodać strategie o nazwie GetTwoIntegersFromApi lub GetTwoIntegersFromRandom
	- dodać strategie o nazwie AddAnyNumberOfIntegers
	- wyłączyć modal "dodaj strategie" poprzez kliknięcie w x lub w obszar poza modalem
	- kliknąć w przycisk wykonaj
	
	w efekcie wykonania powyższych kroków, w oknie przeglądarki zostaną zaprezentowane wyniki działania każdej z wybranych strategii
	(dla takiej konfiguracji strategii, wynik operacji generowania dwuch Integerów, oraz wynik operacji ich dodawania)
4) Aplikacja pozwala na tworzenie łańcucha wielu strategi (pod warunkiem ich kompatybilności pod względem zwracanego i przyjmowanego typu)	

Backend aplikacji został wykonany przy pmocy javy 8 oraz frameworka SpringBoot 2.3.1
Frontend aplikacji został wykonany przy pomocy frameworka Angular 9
	