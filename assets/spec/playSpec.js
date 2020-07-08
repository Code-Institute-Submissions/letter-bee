describe("Game", function() {
    describe("Distractor choice test", function() {
        it("should not return J", function() {
            expect(playLetterBee.createAlphabetDistractors("J").playAlphabetDistractors).not.toContain("J");
        });
        it("should not return S", function() {
            expect(playLetterBee.createAlphabetDistractors("S").playAlphabetDistractors).not.toContain("S");
        });
        it("should not return Z", function() {
            expect(playLetterBee.createAlphabetDistractors("Z").playAlphabetDistractors).not.toContain("Z");
        });
    });

});