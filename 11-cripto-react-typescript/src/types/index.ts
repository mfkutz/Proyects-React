import { z } from "zod";
import { CurrencySchema } from "../schemas/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>;
