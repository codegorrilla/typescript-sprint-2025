//set of named constants that we can use throughout our code
enum Orderstatus {
  PENDING = 10,
  SHIPPED,
  DELIVERED = 23,
  RETURNED,
}

const myStatus = Orderstatus.DELIVERED;

function isDelivered(status: Orderstatus) {
  return status === Orderstatus.DELIVERED;
}

isDelivered(Orderstatus.RETURNED);
