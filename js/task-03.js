const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');
console.log(galleryList);
console.dir(galleryList);

function getListItem(arr) {
  const markup = arr
    .map(({ url, alt }) => {
      return `<li class="js-item"><img src="${url}" alt="${alt}" style = "border:2px solid green; box-shadow: 3px 5px 5px black; border-radius: 5px" width = "300" height = "auto" /></li>`;
    })
    .join('');
  galleryList.insertAdjacentHTML('beforeend', markup);
}
getListItem(images);
