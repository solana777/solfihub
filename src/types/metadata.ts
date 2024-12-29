export interface MetaDataJson {
    name: string;
    symbol: string;
    description: string | undefined;
    image: string | undefined;
    extensions: {
        website: string | undefined;
        twitter: string | undefined;
        discord: string | undefined;
        telegram: string | undefined;
    };
    tags: string[] | undefined;
    sellerFeeBasisPoints: number;
    creator?: {
        name: string | undefined;
        site: string | undefined;
    };
    additionalMetadata?: [string, string][];
}