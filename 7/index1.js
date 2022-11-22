function Kartochka(KarzinaStoimost, PodschetHorosho, Talonchik = null) { let ObshayaStoimost = KarzinaStoimost;
if (Talonchik = 'Промокод: ДАРИМ300' && KarzinaStoimost < 300) {ObshayaStoimost = 0; console.log('Промокод: ДАРИМ300 ' + ObshayaStoimost + '₽');}
else if (Talonchik = 'Прокод: ДАРИМ300')
{ObshayaStoimost -= 300; console.log('ДАРИМ300: ' + ObshayaStoimost + '₽');}
if (PodschetHorosho >= 10) {const PodschetFiveProcent = KarzinaStoimost/100*5; ObshayaStoimost -= PodschetFiveProcent; console.log('Более 10 товаров: ' + ObshayaStoimost + '₽');}
if (KarzinaStoimost > 50000) {const PodschetTwentyProcent = ObshayaStoimost/100*20; const PodschetDifference = ObshayaStoimost - 50000; ObshayaStoimost = PodschetDifference - PodschetTwentyProcent; console.log('Более 50 000 ₽: ' + ObshayaStoimost + '₽');}
if (Talonchik = 'Акция: СКИДКА15' && KarzinaStoimost >= 20000) {const PodschetPedesaytProcent = ObshayaStoimost/100*15; ObshayaStoimost -= PodschetPedesaytProcent; console.log('Акция: СКИДКА15 ' + ObshayaStoimost +'₽'); }
console.log('Стоимость товаров равна: ' + ObshayaStoimost + '₽');}
Kartochka(200000, 16, 'Промокод: ДАРИМ300');