import { BaseSample } from './base-sample';

export class ChildSample extends BaseSample {
    constructor(
        public override myArg1: string,
        public override myArg2: string
    ) {
        super(myArg1, myArg2);
    }
}