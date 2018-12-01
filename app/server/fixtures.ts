import prisma from "./prisma";


const datas=[
    {text: 'Mandarina',link: 'https://cesarve77.github.io/mandarina'},
    {text: 'React',link: 'https://reactjs.org/'},
    {text: 'Apollo',link: 'https://www.apollographql.com'},
    {text: 'Prisma',link: 'https://www.prisma.io/'},
    ]

prisma.exists.Link({})
    .then((exists) => {
        if (!exists) {
            datas.forEach((data)=> prisma.mutation.createLink({data}).catch(console.log))


        }
    })

