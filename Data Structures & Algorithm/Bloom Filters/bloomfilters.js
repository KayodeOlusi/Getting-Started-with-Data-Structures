const XXH = require("xxhashjs");

const h1 = (string) =>
	Math.abs(XXH.h32(0xabcd).update(string).digest().toNumber() % 100);
const h2 = (string) =>
	Math.abs(XXH.h32(0x1234).update(string).digest().toNumber() % 100);
const h3 = (string) =>
	Math.abs(XXH.h32(0x6789).update(string).digest().toNumber() % 100);

// fill out these two methods
// `add` adds a string to the bloom filter and returns void (nothing, undefined)
// `check` takes a string and tells you if a string is maybe in the bloom filter
class BloomFilter {
	constructor() {
		this._array = new Array(100).fill(0);
	}
	add(string) {
		this._array[h1(string)] = 1;
		this._array[h2(string)] = 1;
		this._array[h3(string)] = 1;
	}
	contains(string) {
		return !!(
			this._array[h1(string)] &&
			this._array[h2(string)] &&
			this._array[h3(string)]
		);
	}
}
