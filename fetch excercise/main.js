

//שלב א
fetch('https://reqres.in/api/users')
    .then((response) => {return response.json()})
    .then(info => {
        //שלב ב
        const wrapperDiv = document.createElement('div')
        info.data.forEach(item => {
            //שלב ג
            const ul = document.createElement('ul')
            ul.style.margin = '10px'
            for (const key in item){
                //שלב ד
                if( key === 'avatar'){
                    const img = document.createElement('img')
                    img.src = item[key]
                    wrapperDiv.append(img)
                } else{
                    const li = document.createElement('li')
                    li.innerText = `${key}: ${item[key]}`
                    ul.append(li)
                }
            }

            const btn = document.createElement('button')
            btn.innerText = 'load more info'
            btn.addEventListener('click', () => {
                fetch(`https://reqres.in/api/users/${item.id}`)
                    .then(response => {return response.json()})
                    .then(info => {
                        const ul2 = document.createElement('ul')
                        for (const key in info.data){
                            const li = document.createElement('li')
                            li.innerText = `${key}: ${info.data[key]}`
                            ul2.append(li)
                            }
                        wrapperDiv.append(ul2)       
                        })
            })
            wrapperDiv.append(btn)
            wrapperDiv.style.display = 'flex'
            wrapperDiv.style.flexWrap = 'wrap'
            wrapperDiv.append(ul)
        })
        document.body.append(wrapperDiv)
    })