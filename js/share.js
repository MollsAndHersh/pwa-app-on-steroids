
const btnShare = document.getElementById('shareButton');
btnShare.addEventListener('click', (e) => {
  if (navigator.share) {
    navigator.share({
        title: 'PWA your app on steroids',
        text: 'Check out PWA — it rocks!',
        url: 'https://slides.maxpou.fr/pwa-app-on-steroids/index.html',
    })
      .then(() => console.log('Successful share'))
      .catch((error) => alert('Error sharing', error));
  }
})