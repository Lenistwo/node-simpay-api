import {createHash} from "crypto";

export class Hashing {

    public static sha256(text: string) {
        return Hashing.hash('sha256', text);
    }

    private static hash(algorithm: string, text: string) {
        const hash = createHash(algorithm);

        hash.update(text);
        return hash.digest('hex').toUpperCase();
    }
}
