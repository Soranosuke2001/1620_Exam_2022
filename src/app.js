// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

// Your code goes here
// Displays all the cards
const display_all_contacts_area = document.querySelector('#display_all_contacts')
const hide_all_contacts = document.getElementById('display_all_contacts')
const display_single_card = document.querySelector('#display_single_contact')

display_all_cards()

function display_all_cards() {
  for (const cards of contactsList) {
    const card_name = cards.name
    const image_source = cards.image
    const card_id = cards.ID
    const single_card = `<div id=${card_id}><img id=${card_id} src='../img/${image_source}' alt='profile picture'><p>${card_name}</p></div>`
    display_all_contacts_area.insertAdjacentHTML('beforeend', single_card)
  }
  
}

// Displays the individual cards when clicked
display_all_contacts_area.addEventListener('click', (evt) => {
  for (const cards of contactsList) {
    if (evt.target.id == cards.ID) {
      hide_all_contacts.style.display = 'none'
      show_singlecard(evt.target.id)
    }
  }
})

function show_singlecard(clicked_card) {
  const card_id = contactsList[clicked_card]
  const image_source = contactsList[clicked_card].image
  const card_name = contactsList[clicked_card].name
  const card_phone = contactsList[clicked_card].phone
  const card_email = contactsList[clicked_card].email
  single_card_display = `<div id='individual_contact'><img id=${card_id} src='../img/${image_source}'<brk><h1>${card_name}</h1><brk><p>${card_phone}</p><p>${card_email}</p><span></span></div>`
  display_single_card.insertAdjacentHTML('beforeend', single_card_display)
}