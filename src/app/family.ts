export class Family {
    constructor (
        public name: string,
        public answered: boolean,
        public passcode: string,
        public members: Member[],
        public knownMembers: boolean
    ) { }
}

export class Member {
    constructor (
        public name: string,
        public attending?: boolean
    ) { }
}
    
