fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c17f0c6c623848f0ace77cb33eedffbc`) 
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                let aaa = document.getElementById('aaa')
                data.articles.map((a) => {
                    let news = document.createElement('div')
                    let img = document.createElement('img')
                    let content = document.createElement('p')
                    let url = document.createElement ('a')
                    content.innerHTML =  a.content
                    img.classList.add('aaa')
                    news.classList.add('bbb')
                    content.classList.add('bbb')
                    img.src = a.urlToImage
                    url.href = a.url
                    console.log(a.content)
                    news.appendChild(img)
                    url.appendChild(content)
                    aaa.appendChild(news)
                    news.appendChild(url)
                })
                console.log(data.articles[1])
            })