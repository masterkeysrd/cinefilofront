export class Cinema {
  id: number;
  name: string;
  address: string;
  phone: string;
  description: string;


  constructor(id: number, name: string, address: string, phone: string, description: string) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.description = description;
  }
}
