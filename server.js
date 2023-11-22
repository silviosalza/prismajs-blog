const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();

const postArray = [
    {
        title: "Zero post",
        slug: "zero-post",
        content: "lorem ipsum",
    }
]


prisma.post.create({
    data:{
        title: "primo post",
        slug: "primo-post",
        content: "lorem ipsum",
    } 
}).then((newPost)=>{
    console.log(newPost);
}).catch((error)=>console.log(error))

// prisma.post.update({
//     where: {
//         slug: "primo-post"
//     },
//     data: {
//         title: "Primo post",
//         slug: "primo-post",
//         content: "ciao ciao ciao ciao",

//     },
// }).then((updatedPost)=>{
//     console.log("Nuovo post creato:" , updatedPost);
// }).catch((error)=>console.log(error))