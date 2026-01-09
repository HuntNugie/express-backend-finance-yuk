/*
  Warnings:

  - You are about to drop the column `updated_at` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `jumlah` on the `Transaksi` table. All the data in the column will be lost.
  - Added the required column `nominal` to the `Transaksi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saldo_akhir` to the `Transaksi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "Transaksi" DROP COLUMN "jumlah",
ADD COLUMN     "nominal" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "saldo_akhir" DECIMAL(65,30) NOT NULL;
