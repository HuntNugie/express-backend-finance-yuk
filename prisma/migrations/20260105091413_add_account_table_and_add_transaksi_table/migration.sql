-- CreateEnum
CREATE TYPE "typeTransaksi" AS ENUM ('PEMASUKAN', 'PENGELUARAN');

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "saldo" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "updated_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaksi" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "type" "typeTransaksi" NOT NULL,
    "jumlah" DECIMAL(65,30) NOT NULL,
    "deskripsi" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "account_id" INTEGER NOT NULL,

    CONSTRAINT "Transaksi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_user_id_key" ON "Account"("user_id");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaksi" ADD CONSTRAINT "Transaksi_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
