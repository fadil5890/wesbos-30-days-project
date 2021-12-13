const endpoint = 'https://api.pexels.com/videos/videos/8322275'

getVideo = () => fetch(endpoint).then(link => console.log(link.url))

