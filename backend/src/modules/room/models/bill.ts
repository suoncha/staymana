export interface Bill{
    type: BillType;
    paid: boolean;
    time: Date;
    total: number;
    due: Date;
}

enum BillType {
    ELECTRIC_WATER,
    RENTAL_FEE,
    MAINTENANCE_SERVICE
}

export interface ElectricWaterBill extends Bill {
    oldElectricNumber: number;
    oldWaterNumber: number;
    newElectricNumber: number;
    newWaterNumber: number;
    electricUnitPrice: number;
    waterUnitPrice: number;
}