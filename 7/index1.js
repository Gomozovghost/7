function Kartochka(KarzinaStoimost, Podschet, Talon = null) { let ObshayaStoimost = KarzinaStoimost;
if (Talon = 'Промокод: Консервы' && KarzinaStoimost < 600) {ObshayaStoimost = 0; console.log('Промокод: Консервы' + ObshayaStoimost + '₽');}
else if (Talon = 'Прокод: Консервы')
{ObshayaStoimost -= 300; console.log('Консервы: ' + ObshayaStoimost + '₽');}
if (Podschet >= 10) {const PodschetFiveProcent = KarzinaStoimost/100*5; ObshayaStoimost -= PodschetFiveProcent; console.log('Более 10 товаров: ' + ObshayaStoimost + '₽');}
if (KarzinaStoimost > 50000) {const PodschetTwentyProcent = ObshayaStoimost/100*20; const PodschetDifference = ObshayaStoimost - 50000; ObshayaStoimost = PodschetDifference - PodschetTwentyProcent; console.log('Более 50 000 ₽: ' + ObshayaStoimost + '₽');}
if (Talon = 'Акция: СКИДКА15' && KarzinaStoimost >= 20000) {const PodschetPedesaytProcent = ObshayaStoimost/100*15; ObshayaStoimost -= PodschetPedesaytProcent; console.log('Акция: СКИДКА15 ' + ObshayaStoimost +'₽'); }
console.log('Стоимость товаров равна: ' + ObshayaStoimost + '₽');}
Kartochka(200000, 16, 'Промокод: Консервы');
