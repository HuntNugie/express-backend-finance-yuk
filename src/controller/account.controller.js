import {createSaldo} from "../service/account.service.js";

export const store = async (req, res) => {
    const {saldo} = req.body;
    const user_id = req?.payload?.profile?.user_id;
    try {
        const tambah = await createSaldo(saldo, user_id);
        return res.status(200).json({status: true, data: tambah});
    } catch (error) {
        return res.status(400).json({
            status: false,
            error,
        });
    }
};
