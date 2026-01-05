import Account from "../models/Account.js";

export const createSaldo = async (saldo, id) => {
    try {
        const add = await Account.create({
            data: {
                user_id: parseInt(id),
                saldo,
            },
            include: {
                transaksi: true,
                user: true,
            },
        });
        return add
    } catch (error) {
        throw new Error(error)
    }
};
