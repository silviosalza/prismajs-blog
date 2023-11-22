const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();

//funzione delete
prisma.post.delete({
    where: {
        slug: "primo-post"
    },
}).then((deletedPost)=>{
    console.log(deletedPost);
}).catch((error)=>console.log(error))