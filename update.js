const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();

//funzione update
prisma.post.update({
    where: {
        slug: "primo-post"
    },
    data: {
        title: "Primo post",
        slug: "primo-post",
        content: "ciao ciao ciao ciao",

    },
}).then((updatedPost)=>{
    console.log(updatedPost);
}).catch((error)=>console.log(error))