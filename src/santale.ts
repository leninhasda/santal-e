
class Santale {

    data: any = {
        "patterns": [
            { "find": "Az.~", "replace": "Ạ̃" },
            { "find": "AZ.~", "replace": "Ạ̃" },
            { "find": "Az~.", "replace": "Ạ̃" },
            { "find": "AA~.", "replace": "Ạ̃" },
            { "find": "az.~", "replace": "ạ̃" },
            { "find": "aZ.~", "replace": "ạ̃" },
            { "find": "az~.", "replace": "ạ̃" },
            { "find": "aZ~.", "replace": "ạ̃" },
            { "find": "Az.", "replace": "Ạ" },
            { "find": "AZ.", "replace": "Ạ" },
            { "find": "az.", "replace": "ạ" },
            { "find": "aZ.", "replace": "ạ" },
            { "find": "Cz'", "replace": "C̓" },
            { "find": "CZ'", "replace": "C̓" },
            { "find": "cz'", "replace": "c̓" },
            { "find": "cZ'", "replace": "c̓" },
            { "find": "Dz.", "replace": "Ḍ" },
            { "find": "DZ.", "replace": "Ḍ" },
            { "find": "dz.", "replace": "ḍ" },
            { "find": "dZ.", "replace": "ḍ" },
            { "find": "Kz'", "replace": "K̓" },
            { "find": "KZ'", "replace": "K̓" },
            { "find": "kz'", "replace": "k̓" },
            { "find": "kZ'", "replace": "k̓" },
            { "find": "Nz'", "replace": "Ń" },
            { "find": "NZ'", "replace": "Ń" },
            { "find": "nz'", "replace": "ń" },
            { "find": "nZ'", "replace": "ń" },
            { "find": "Pz'", "replace": "P̓" },
            { "find": "PZ'", "replace": "P̓" },
            { "find": "pz'", "replace": "p̓" },
            { "find": "pZ'", "replace": "p̓" },
            { "find": "Rz.", "replace": "Ṛ" },
            { "find": "RZ.", "replace": "Ṛ" },
            { "find": "rz.", "replace": "ṛ" },
            { "find": "rZ.", "replace": "ṛ" },
            { "find": "Tz'", "replace": "T̓" },
            { "find": "TZ'", "replace": "T̓" },
            { "find": "tz'", "replace": "t̓" },
            { "find": "tZ'", "replace": "t̓" },
            { "find": "Tz.", "replace": "Ṭ" },
            { "find": "TZ.", "replace": "Ṭ" },
            { "find": "tz.", "replace": "ṭ" },
            { "find": "tZ.", "replace": "ṭ" },
            { "find": "Az~", "replace": "Ã" },
            { "find": "AZ~", "replace": "Ã" },
            { "find": "az~", "replace": "ã" },
            { "find": "aZ~", "replace": "ã" },
            { "find": "Ez~", "replace": "Ẽ" },
            { "find": "EZ~", "replace": "Ẽ" },
            { "find": "ez~", "replace": "ẽ" },
            { "find": "eZ~", "replace": "ẽ" },
            { "find": "Iz~", "replace": "Ĩ" },
            { "find": "IZ~", "replace": "Ĩ" },
            { "find": "iz~", "replace": "ĩ" },
            { "find": "iZ~", "replace": "ĩ" },
            { "find": "Oz~", "replace": "Õ" },
            { "find": "OZ~", "replace": "Õ" },
            { "find": "oz~", "replace": "õ" },
            { "find": "oZ~", "replace": "õ" },
            { "find": "Uz~", "replace": "Ũ" },
            { "find": "UZ~", "replace": "Ũ" },
            { "find": "uz~", "replace": "ũ" },
            { "find": "uZ~", "replace": "ũ" }
        ]
    }

    parse (input: string) {
        let output = "";
        for (let cur = 0; cur < input.length; ++cur) {
            let start = cur, end = cur + 1;
            let matched = false

            for (let i = 0; i < this.data.patterns.length; ++i) {
                let pattern = this.data.patterns[i];
                end = cur + pattern.find.length;
                if (end <= input.length && input.substring(start, end) == pattern.find) {
                    output += pattern.replace;
                    cur = end - 1;
                    matched = true
                    break;
                }
            }

            if (!matched) {
                output += input.charAt(cur);
            }
        }

        return output;
    }
}

export default Santale;