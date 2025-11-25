<!-- assets/app.js -->
const params = new URLSearchParams({checkin:ci,checkout:co})
location.href = 'rooms.html?'+params.toString()
})
const p = new URLSearchParams(location.search)
if(p.get('checkin')) $('#checkin').value=p.get('checkin')
if(p.get('checkout')) $('#checkout').value=p.get('checkout')
}


// reservation page logic
const reserveRoomSelect = $('#reserve-room')
const reservationForm = $('#reservation-form')
if(reservationForm){
// populate rooms
HOTEL_DATA.rooms.forEach(r=>{
const o=document.createElement('option');o.value=r.id;o.textContent=`${r.name} — R$ ${r.price}/noite`;reserveRoomSelect.appendChild(o)
})
// if ?room= in url, preselect
const qp = new URLSearchParams(location.search)
if(qp.get('room')) reserveRoomSelect.value = qp.get('room')


// update summary
function updateSummary(){
const rId = reserveRoomSelect.value
const checkin = $('#reserve-checkin').value
const checkout = $('#reserve-checkout').value
const room = HOTEL_DATA.rooms.find(x=>x.id===rId)
if(!checkin||!checkout){$('#summary-content').textContent='Selecione datas.';return}
const d1 = new Date(checkin), d2 = new Date(checkout)
if(d2<=d1){$('#summary-content').textContent='Data de checkout deve ser após checkin.';return}
const days = Math.ceil((d2-d1)/(1000*60*60*24))
const total = days * room.price
$('#summary-content').innerHTML = `<div><strong>${room.name}</strong></div><div>${days} noite(s) — R$ ${room.price}/noite</div><div style="margin-top:8px"><strong>Total: R$ ${total}</strong></div>`
}
['change','input'].forEach(ev=>{reserveRoomSelect.addEventListener(ev,updateSummary);$('#reserve-checkin').addEventListener(ev,updateSummary);$('#reserve-checkout').addEventListener(ev,updateSummary)})


reservationForm.addEventListener('submit', e=>{
e.preventDefault()
const payload = {
id: 'res_'+Date.now(),
room: reserveRoomSelect.value,
checkin: $('#reserve-checkin').value,
checkout: $('#reserve-checkout').value,
name: $('#guest-name').value,
email: $('#guest-email').value,
phone: $('#guest-phone').value,
created: new Date().toISOString()
}
// simple availability check (overlaps)
const reservations = JSON.parse(localStorage.getItem('reservations')||'[]')
const roomReservations = reservations.filter(r=>r.room===payload.room)
const conflict = roomReservations.some(r=>{
const a = new Date(r.checkin), b=new Date(r.checkout), c=new Date(payload.checkin), d=new Date(payload.checkout)
return (c < b && d > a) // overlap
})
if(conflict){$('#reserve-msg').textContent='Não disponível nas datas selecionadas. Escolha outras datas.';return}
reservations.push(payload)
localStorage.setItem('reservations', JSON.stringify(reservations))
$('#reserve-msg').textContent='Reserva confirmada! Um e-mail de confirmação será (simulado) enviado.'
reservationForm.reset()
$('#summary-content').textContent=''
})
}


// index redirect from rooms quick search
})();

