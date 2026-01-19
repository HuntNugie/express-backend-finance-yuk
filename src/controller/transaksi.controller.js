import { createTransaksi } from "../service/transaksi.service.js";

// untuk menambahkan data
export const Add = async(req,res)=>{
    const data = req.body
    const id = req.payload.wallet.user_id;
    try {
        const result = await createTransaksi(id,data)
        console.log(result)
        res.json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}