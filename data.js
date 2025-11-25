<!-- assets/data.js -->
/* Simulated data file: rooms dataset + users for demo auth (front-end only) */
const HOTEL_DATA = {
users: [
{email:'admin@hotel.test', password:'admin123', role:'admin', name:'Administrador'},
{email:'user@hotel.test', password:'user123', role:'user', name:'Hóspede Teste'}
],
rooms: [
{
id: 'room_luxo_1',
name: 'Suíte Luxo Vista Mar',
price: 420,
type: 'luxo',
tags: ['Vista Mar','Café incluso','King bed'],
images: ['https://i.imgur.com/jcJ9lE9.jpeg','https://i.imgur.com/0Z8Oa3t.jpeg','https://i.imgur.com/6Z3Z0hV.jpeg'],
short: 'Suíte espaçosa com vista para o mar e cama king-size.',
description: 'A Suíte Luxo Vista Mar oferece conforto premium, varanda com vista panorâmica, ar-condicionado, TV por assinatura e banheiro com amenidades de luxo.'
},
{
id: 'room_econ_1',
name: 'Quarto Simples Conforto',
price: 189,
type: 'economico',
tags: ['Econômico','Ar Condicionado'],
images: ['https://i.imgur.com/PP0k7Dq.jpeg','https://i.imgur.com/3QmJ0iK.jpeg'],
short: 'Quarto prático e confortável para pernoite.' ,
description: 'Quarto com cama queen, Wi-Fi, ar-condicionado e lavabo. Ideal para viajantes econômicos que não abrem mão do conforto.'
},
{
id: 'room_prem_1',
name: 'Suíte Premium',
price: 550,
type: 'luxo',
tags: ['Luxo','Hidromassagem','Espaçosa'],
images: ['https://i.imgur.com/E8X0a2D.jpeg','https://i.imgur.com/7YqJgQJ.jpeg'],
short: 'Suíte com hidromassagem e espaço generoso para relaxar.',
description: 'Suíte Premium com hidromassagem privada, decoração sofisticada, minibar e serviço de quarto 24h.'
}
]
}




<!-- END OF PROJECT FILES -->