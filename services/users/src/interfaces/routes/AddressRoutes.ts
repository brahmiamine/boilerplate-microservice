import { Router } from "express";
import { addAddress, deleteAddressById, getAddressesById, getAddressesByUserId, getAllAddresses, updateAddress } from "../controllers/AddressController";


export const addresseRoutes = Router();

addresseRoutes.post("/", addAddress);
addresseRoutes.get("/:id", getAddressesById);
addresseRoutes.get("/users/:id", getAddressesByUserId);
addresseRoutes.delete("/:id", deleteAddressById);
addresseRoutes.get("/", getAllAddresses);
addresseRoutes.put("/", updateAddress);


