import { describe, it } from "mocha"
import { assert, expect, should } from "chai"

describe("TestModule", () => {
	it("should return true", () => {
		const result = true
		expect(result).to.equal(true)
		result.should.equal(true)
		assert.equal(result, true)
		result.should.equal(true)
	})
})