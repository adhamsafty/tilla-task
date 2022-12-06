-- CreateTable
CREATE TABLE "Airport" (
    "name" TEXT NOT NULL,
    "iata" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Airport_pkey" PRIMARY KEY ("iata")
);

-- CreateIndex
CREATE UNIQUE INDEX "Airport_iata_key" ON "Airport"("iata");
