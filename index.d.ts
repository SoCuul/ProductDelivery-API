// Type definitions
interface UserInformation {
    id?: string,
    username?: string,
    descrim?: string,
    tag?: string,
    avatar?: string,
    error?: string
}

interface GuildInformation {
    id?: string,
    name?: string,
    memberCount?: number,
    ownerID?: string,
    icon?: string,
    error?: string
}

interface ProductResult {
    status?: string,
    dmerror?: string,
    error?: string
}

// Client class
declare class Client {
    constructor(url: string, token?: string);

    getDefaultValues(value: any): string;

    checkWhitelist(guildid: string, robloxid: string, productname: string): boolean | object;

    getGuildProducts(guildid: string, overwriteToken?: string): object;

    getUserProducts(guildid: string, robloxid: string, overwriteToken?: string): Array<string>;

    createPurchase(guildid: string, robloxid: string, productname: string, overwriteToken?: string): ProductResult;

    getUserInformation(robloxid: string): UserInformation;

    getGuildInformation(guildid: string): GuildInformation;
}

// Export client
export { Client }