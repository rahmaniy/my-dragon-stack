const Generation = require('./generation');

class GenerationEngine {
    constructor() {
        this.generation = null;
    }

    buildNewGeneration() {
        this.generation = new Generation();
    }
}