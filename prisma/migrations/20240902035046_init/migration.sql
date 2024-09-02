/*
  Warnings:

  - You are about to drop the column `AboutProp` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `propertyType` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `Property` table. All the data in the column will be lost.
  - Added the required column `privacyType` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `structure` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Property" DROP COLUMN "AboutProp",
DROP COLUMN "propertyType",
DROP COLUMN "tags",
ADD COLUMN     "privacyType" TEXT NOT NULL,
ADD COLUMN     "structure" TEXT NOT NULL;
