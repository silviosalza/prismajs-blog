const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();

//funzione create
prisma.post.create({
    data:{
        title: "quarto post",
        slug: "quarto-post",
        content: "ciao ciao",
        published: true
    } 
}).then((newPost)=>{
    console.log(newPost);
}).catch((error)=>console.log(error))