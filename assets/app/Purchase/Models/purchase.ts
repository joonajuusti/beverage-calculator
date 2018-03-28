export class Purchase {
  public dateString: string;
  constructor(
    public store: string,
    public date: Date,
    public purchaseId: string,
    public pepsiAmountInLitres?: number,
    public pepsiPriceInPurchase?: number,
    public monsterAmountInCans?: number,
    public monsterPricePerCan?: number
  ){}
}
