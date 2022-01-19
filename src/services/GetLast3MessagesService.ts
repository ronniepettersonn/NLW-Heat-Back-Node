import prismaClient from "../prisma";


class GetLast3MessagesService {
    async execute() {
        const messeges = await prismaClient.message.findMany({
            take: 3,
            orderBy: {
                created_at: "desc"
            },
            include: {
                user: true,
            },
        });

        // SELECT * FROM MESSAGES 

        return messeges;
    }
}


export { GetLast3MessagesService }