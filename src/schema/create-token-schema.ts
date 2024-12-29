import { z } from 'zod';

const createTokenPageSchema = z.object({
  website: z.string().url().optional(),
  twitter: z.string().url().optional(),
  discord: z.string().url().optional(),
  telegram: z.string().url().optional(),
  youtube: z.string().url().optional(),
  medium: z.string().url().optional(),
  github: z.string().url().optional(),
  instagram: z.string().url().optional(),
  reddit: z.string().url().optional(),
  facebook: z.string().url().optional(),
});

const creatorInfoSchema = z.object({
  creatorName: z.string().optional(),
  creatorContact: z.string().url().optional(),
});

export const FormDataSchema = z.object({
  tokenName: z
    .string()
    .min(1, 'Token Name is required') // Zorunlu alan
    .max(30, 'Token Name must be 30 characters or less'), // Maksimum 30 karakter
  tokenSymbol: z
    .string()
    .min(1, 'Token Symbol is required') // Zorunlu alan
    .max(10, 'Token Symbol must be 10 characters or less'),
  description: z.string().optional(),
  singleSelect: z.string().optional(),
  websiteLink: z.string().url('Website Link must be a valid URL').optional(),
  twitter: z.string().url('Twitter must be a valid URL').optional(),
  discord: z.string().url('Discord must be a valid URL').optional(),
  telegram: z.string().url('Telegram must be a valid URL').optional(),
  totalSupply: z.number().positive().min(1, 'Total Supply must be at least 1'),

  decimals: z
    .number()
    .min(0, 'Decimals must be at least 0')
    .max(9, 'Decimals can be no more than 9'),

  coverUrl: z.string().optional(),
  immutable: z.boolean().optional(),
  freezeAddress: z.boolean().optional(),
  mintAuthority: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
  creatorInfo: z.boolean().optional(),
  createorInfoFields: creatorInfoSchema.optional(),
  createTokenPage: z.boolean().optional(), // Bu boolean değere göre alanlar gösterilecek
  createTokenPageFields: createTokenPageSchema.optional(), // Alanları burada tanımlıyoruz

  transactionPriority: z.string().min(1, 'Transaction Priority is required'),
});

export type Inputs = z.infer<typeof FormDataSchema>;
