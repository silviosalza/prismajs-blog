const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();

//funzione create
prisma.post.create({
    data:{
        title: "secondo post",
        slug: "secondo-post",
        content: "lorem ipsum",
    } 
}).then((newPost)=>{
    console.log(newPost);
}).catch((error)=>console.log(error))