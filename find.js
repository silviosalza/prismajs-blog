const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();

 prisma.post.findMany().then((posts) => {
     console.log(posts);
 })
//--------------------------------------------------
 prisma.post.findMany({
     where: {
         published: true
     },
 }).then((post) => {
     console.log(post);
 })
//----------------------------------------------------------
 prisma.post.findMany({
     where: {
         slug: "secondo-post"
     },
 }).then((post) => {
     console.log(post);
 })
//-------------------------------------------------------------
prisma.post.findMany({
    where: {
        content: {
            contains:"ciao"
        }
    },
}).then((post) => {
    console.log(post);
})