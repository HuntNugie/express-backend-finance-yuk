import Prisma from "../models/Prisma.js";

export const createTransaksi = async (id, data) => {
    const result = await Prisma.$transaction(async (tb) => {
        // cari data akun nya
        const akun = await tb.account.findUnique({
            where: {
                user_id: id,
            },
        });
        // jika tidak ada akun
        if (!akun) throw new Error("akun tidak di temukan");

        // jika memilih pengeluaran tetapi malah minus
        if (data.type === "PENGELUARAN" && akun.saldo.lessThan(data.nominal))
            throw new Error("saldo anda tidak mencukupi");

        const hasil = await tb.account.update({
            where: {
                id: akun.id,
            },
            data: {
                saldo:data.type === "PENGELUARAN" ? {decrement: data.nominal} : {increment: data.nominal},
            },
        });

        const catat = await tb.transaksi.create({
            data: {
                nominal: data.nominal,
                name: data.name,
                account_id: akun.id,
                type: data.type,
                deskripsi: data.deskripsi,
                saldo_akhir: hasil.saldo,
            },
        });

        return {catat, hasil};
    });
    return result
};
