# MERN-Todo-App

Sama todo aplikacija prikazuje kartice na pocetnoj stranici u vidu samih zadataka i sadrzi dugme za odlazak na stranicu za kreiranje pojedinacnog zadatka (todo-a).

Svaka kartica sadrzi naslov, tekst i status zadatka i po tri dugmeta. Dugme za brisanje, editovanje i promenu statusa (done/undo).

Klikom na dugme Delete, zadatak se brise sa stranice i same baze, klikom na dugme Edit Todo aplikacija vodi na posebnu stranicu za editovanje samog zadatka
gde se moze promeniti sam naslov i tekst zadatka. 

Klikom na dugme Done sam zadatak postaje precrtan (odradjen) i status biva promenjen sa Open na Done i samo dugme postaje promenjeno na Undo,
a dugmici za brisanje i editovanje postaju onemoguceni za klik na njih.

Na Edit i Create stranici se nalazi dugme Cancel Todo koje vraca na pocetnu stranicu.

Input polja na Create i Edit stranici imaju odradjenu validaciju koja govori da polja za unos naslova i teksta ne mogu biti prazna, moraju imati minimum 3 karaktera, a maximum 60.


