import { PrismaClient } from "@prisma/client";
import colors from "tailwindcss/colors";
import cuid from 'cuid'
import { faker } from "@faker-js/faker";

const myUserId="kp_ac62cbf366c7400d88878759686931cf";


const prisma =new PrismaClient();
const runSeed=async()=>{

    await resetDB();

    process.stdout.write("Generating users");

    const myUser=await prisma.user.create({
        data:{
            id:myUserId,
            displayName:"Rajan",
            email:"rajanj448@student.sfit.ac.in",
            color:colors.red["500"]

        }
    })

    const otherUsers=await prisma.user.createManyAndReturn({
        data:Array.from({length:10}).map(()=>({
            id:cuid(),
            email:faker.internet.email(),
            displayName:faker.internet.displayName(),
            createdAt:faker.date.recent(),
            color:faker.helpers.arrayElement([
                colors.green[500],
                colors.red[500],
                colors.pink[500],
                colors.purple[500],
                colors.yellow[500],
                colors.emerald[500],

            ])
        }))
    })

   

    printCheckMark();

    process.stdout.write("Generating events...");

    const event=await prisma.event.create({
        data:{
            ownerId:myUser.id,
            displayName:faker.commerce.productName(),
            shortDescription:faker.lorem.sentence(),
            slug:faker.lorem.slug(),
            createdAt:faker.date.recent(),
            participants:{
                createMany:{
                    data:Array.from({length:10}).map((_,index)=>({
                        userId:otherUsers[index % otherUsers.length].id
                    }))
                }
            }
        }
    })

    printCheckMark();


}

const resetDB=async()=>{
    process.stdout.write("Resetting database...");

    await prisma.user.deleteMany();
    await prisma.event.deleteMany();
    await prisma.poll.deleteMany();
    await prisma.question.deleteMany();
    await prisma.notification.deleteMany();

    printCheckMark();



}

const printCheckMark = () => process.stdout.write("✅\n");

runSeed().then(()=>console.log("FInidhed"));