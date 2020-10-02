export class Register {
  constructor(
    email,
    password,
    brand,
    cnpj,
    adress,
    business,
    ifCollector,
    businessSize,
    website,
    imageUrl
  ) {
    this.email = email;
    this.password = password;
    this.brand = brand;
    this.cnpj = cnpj;
    this.adress = adress;
    this.business = business;
    this.ifCollector = ifCollector;
    this.businessSize = businessSize;
    this.website = website;
    this.imageUrl = imageUrl;
    this.score = { mensal: 0, anual: 0 };
    this.complaints = [];
    this.award = {};
    this.os = [];
  }
}
