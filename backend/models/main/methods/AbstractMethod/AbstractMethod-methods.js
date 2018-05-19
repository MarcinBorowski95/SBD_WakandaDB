model.AbstractMethod.entityMethods.Zatrud_Lekarz = function(imie = String , nazwisko = String, specjalizacja = String) {
	model.LekarzNazwa.remove();
	new model.LekarzNazwa({Imie:imie, Nazwisko: nazwisko, Specjalizacja: sspecjalizacja}).save();
	model.LekarzNazwa.save();
	model.LekarzNazwa.all();
};