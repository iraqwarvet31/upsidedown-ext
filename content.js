const p = document.getElementsByTagName('p');
const s = document.getElementsByTagName('span');
const im= document.getElementsByTagName('img');

const links = [
  'https://i.pinimg.com/564x/ad/98/a7/ad98a72d860cc7d3a2ec571abe177f13.jpg',
  'https://i.pinimg.com/564x/55/64/4b/55644b108bb07644a58ff99a320dc85a.jpg',
  'https://i.pinimg.com/originals/41/48/de/4148de52e99a4a9815740a60d300643b.jpg',
  'https://i.pinimg.com/564x/8e/d3/a1/8ed3a131c21bc28ed03c752536bcf79d.jpg',
  `https://thechive.com/wp-content/uploads/2017/09/dc5a6f4b615560984d577efb5638282f.jpg?attachment_cache_bust=2220553&quality=85&strip=info&w=650`,
]


for (let i = 0; i < p.length; i++) {
  if (p[i]) {
    p[i].textContent = 'Ahh ahhh you didn\'t say the magic word!!!!';
  }

  if (im[i]) {
    im[i].src = getRandomLink(links);
    im[i].style.transform = 'rotate( 180deg)';
  }
}

function getRandomLink(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}