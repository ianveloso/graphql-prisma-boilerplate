import getUserId from '../utils/getUserId';

const Query = {
    users(parents, args, { db, prisma }, info) {
        const opArgs = {
            first: args.first,
            skip: args.skip,
            after: args.after,
            orderBy: args.orderBy
        };

        if(args.query) {
            opArgs.where = {
                name_contains: args.query
            }
        }
        
        return prisma.query.users(opArgs, info);
    },
    async me(parents, args, { prisma, request }, info){
        const userId = getUserId(request);

        return await prisma.query.user({
            where:{
                id: userId
            }
        }, info);
    }
};

export { Query as default };
